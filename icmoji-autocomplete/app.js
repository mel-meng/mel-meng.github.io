// Resolve every runtime file relative to this app.js file, not the domain root.
// This lets the site work unchanged at URLs such as:
//   https://user.github.io/repo/
//   https://user.github.io/repo/random/subfolder/
// and any other static hosting subfolder.
const APP_BASE_URL = new URL(".", document.currentScript?.src || window.location.href);
const STORAGE_KEY = `icmCommandFinder:v2:${APP_BASE_URL.pathname}`;

function siteUrl(value) {
  if (!value) return "";
  try { return new URL(value, APP_BASE_URL).href; }
  catch { return value; }
}

const els = Object.fromEntries([
  "search", "clearSearch", "reviewFilter", "results", "resultCount",
  "toolbarImage", "toolbarHighlight", "toolbarTooltip", "toolbarTooltipName", "toolbarTooltipPath",
  "toolbarCapture", "drawRect", "mappingBadge",
  "reviewToggle", "reviewPanel", "noSelection", "editor", "reviewStatusBadge",
  "editName", "editCategory", "editPath", "editKeywords", "editStatus", "editNotes", "editSourceImage",
  "matchInfo", "sourceImage", "sourceRow", "sourceIcon", "sourceDrawRect", "sourceCapture",
  "sourceHint", "sourceBoxInfo", "provenanceInfo", "mapToolbar", "clearMapping", "fixRowBox", "fixIconBox",
  "addCommand", "duplicateCommand", "deleteCommand", "exportJson", "importJson", "resetData", "toast"
].map(id => [id, document.querySelector(`#${id}`)]));
els.layout = document.querySelector(".layout");
els.toolbarStage = document.querySelector(".toolbar-stage");
els.toolbarScroller = document.querySelector(".toolbar-scroller");

const TOOLTIP_GAP = 8;
const TOOLTIP_VIEW_MARGIN = 8;

let shippedData = null;
let data = null;
let selectedId = null;
let reviewMode = false;
let toolbarDrawMode = false;
let sourceDrawMode = null; // "row" | "icon"
let dragStart = null;
let toastTimer = null;
let toolbarHitTargets = [];
let toolbarHoverRaf = null;
let pendingToolbarHoverEvt = null;
let toolbarPointerInside = false;
let toolbarTooltipPreviewCmd = null;

function deepClone(v) { return JSON.parse(JSON.stringify(v)); }
function currentCommand() { return data?.commands.find(c => c.id === selectedId) || null; }
function normalized(text) { return String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim(); }
function escapeHtml(value) { return String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[ch])); }
function statusLabel(status) { return status === "confirmed" ? "confirmed" : status === "rejected" ? "rejected" : "needs review"; }
function slugify(text) { return normalized(text).replace(/\s+/g, "-") || "command"; }

function showToast(message, error = false) {
  clearTimeout(toastTimer);
  els.toast.textContent = message;
  els.toast.classList.remove("hidden", "error");
  if (error) els.toast.classList.add("error");
  toastTimer = setTimeout(() => els.toast.classList.add("hidden"), 2800);
}

function uniqueId(baseText) {
  const base = slugify(baseText);
  const used = new Set(data.commands.map(c => c.id));
  if (!used.has(base)) return base;
  let n = 2;
  while (used.has(`${base}-${n}`)) n++;
  return `${base}-${n}`;
}

function normalizeBox(box, fallback) {
  if (!box || typeof box !== "object") return {...fallback};
  return {
    x: Number.isFinite(+box.x) ? Math.round(+box.x) : fallback.x,
    y: Number.isFinite(+box.y) ? Math.round(+box.y) : fallback.y,
    w: Number.isFinite(+box.w) ? Math.max(1, Math.round(+box.w)) : fallback.w,
    h: Number.isFinite(+box.h) ? Math.max(1, Math.round(+box.h)) : fallback.h,
  };
}

function normalizeData(input) {
  const d = deepClone(input);
  d.schema_version = 2;
  d.commands = Array.isArray(d.commands) ? d.commands : [];
  d.source_images = d.source_images || {};
  d.toolbar = d.toolbar || {image: "assets/toolbar.png", width: 1, height: 1};
  const usedIds = new Set();
  d.commands.forEach((cmd, index) => {
    let proposed = cmd.id || slugify(cmd.name || `command-${index + 1}`);
    let cid = proposed, n = 2;
    while (usedIds.has(cid)) cid = `${proposed}-${n++}`;
    usedIds.add(cid);
    cmd.id = cid;
    cmd.name = cmd.name || "Unnamed command";
    cmd.category = cmd.category || "";
    cmd.path = cmd.path || (cmd.category ? `${cmd.category} > ${cmd.name}` : cmd.name);
    cmd.keywords = Array.isArray(cmd.keywords) ? cmd.keywords : [];
    cmd.source = cmd.source || {};
    const iw = Number(cmd.source.image_width || 370);
    const ih = Number(cmd.source.image_height || 340);
    cmd.source.image_width = iw;
    cmd.source.image_height = ih;
    if (!cmd.source.row_box && Number.isFinite(+cmd.source.row_center_y)) {
      const y = Math.max(0, Math.round(+cmd.source.row_center_y) - 13);
      cmd.source.row_box = {x: 35, y, w: Math.max(1, iw - 45), h: Math.min(26, ih - y)};
    }
    cmd.source.row_box = normalizeBox(cmd.source.row_box, {x: 20, y: 20, w: Math.max(1, iw - 40), h: 26});
    cmd.source.icon_box = normalizeBox(cmd.source.icon_box, {x: 45, y: cmd.source.row_box.y, w: 30, h: Math.min(25, cmd.source.row_box.h)});
    cmd.toolbar = cmd.toolbar || {rect: null, mapping_method: "unmapped"};
    cmd.toolbar.rect = cmd.toolbar.rect || null;
    cmd.review = cmd.review || {};
    if (!["needs_review", "confirmed", "rejected"].includes(cmd.review.status)) cmd.review.status = "needs_review";
    cmd.review.notes = cmd.review.notes || "";
    cmd.review.last_edited_by = cmd.review.last_edited_by || "unknown";
  });
  return d;
}

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  rebuildToolbarHitTargets();
}

function getToolbarMappedCommands() {
  if (!data) return [];
  return data.commands.filter(cmd => {
    if (!cmd.toolbar?.rect) return false;
    if (!reviewMode && cmd.review?.status === "rejected") return false;
    return true;
  });
}

function rebuildToolbarHitTargets() {
  toolbarHitTargets = getToolbarMappedCommands().map(cmd => ({cmd, rect: cmd.toolbar.rect}));
}

function commandAtToolbarPoint(px, py) {
  let best = null;
  let bestArea = Infinity;
  for (const {cmd, rect} of toolbarHitTargets) {
    if (px >= rect.x && px <= rect.x + rect.w && py >= rect.y && py <= rect.y + rect.h) {
      const area = rect.w * rect.h;
      if (area < bestArea) {
        bestArea = area;
        best = cmd;
      }
    }
  }
  return best;
}

function pointerToToolbarImageCoords(evt) {
  const p = pointOn(els.toolbarCapture, evt);
  const tw = data.toolbar.width || 1;
  const th = data.toolbar.height || 1;
  return {
    px: p.x / p.box.width * tw,
    py: p.y / p.box.height * th
  };
}

function positionToolbarTooltip(rect) {
  const capture = els.toolbarCapture;
  if (!capture || !rect) return;
  const box = capture.getBoundingClientRect();
  const tw = data.toolbar.width || 1;
  const th = data.toolbar.height || 1;
  const scaleX = box.width / tw;
  const scaleY = box.height / th;
  const rectLeft = box.left + rect.x * scaleX;
  const rectTop = box.top + rect.y * scaleY;
  const rectRight = rectLeft + rect.w * scaleX;
  const rectBottom = rectTop + rect.h * scaleY;
  const centerX = (rectLeft + rectRight) / 2;

  const tip = els.toolbarTooltip;
  tip.style.visibility = "hidden";
  tip.style.left = "0";
  tip.style.top = "0";
  const tipBox = tip.getBoundingClientRect();
  tip.style.visibility = "";

  let placeBelow = rect.y < th * 0.22;
  let top = placeBelow ? rectBottom + TOOLTIP_GAP : rectTop - tipBox.height - TOOLTIP_GAP;
  if (top < TOOLTIP_VIEW_MARGIN && !placeBelow) {
    placeBelow = true;
    top = rectBottom + TOOLTIP_GAP;
  }
  if (top + tipBox.height > window.innerHeight - TOOLTIP_VIEW_MARGIN && placeBelow) {
    placeBelow = false;
    top = rectTop - tipBox.height - TOOLTIP_GAP;
  }
  top = Math.max(TOOLTIP_VIEW_MARGIN, Math.min(top, window.innerHeight - tipBox.height - TOOLTIP_VIEW_MARGIN));

  let left = centerX - tipBox.width / 2;
  left = Math.max(TOOLTIP_VIEW_MARGIN, Math.min(left, window.innerWidth - tipBox.width - TOOLTIP_VIEW_MARGIN));

  tip.style.left = `${Math.round(left)}px`;
  tip.style.top = `${Math.round(top)}px`;
}

function hideToolbarTooltip() {
  toolbarTooltipPreviewCmd = null;
  els.toolbarTooltip.classList.add("hidden");
  els.toolbarTooltip.setAttribute("aria-hidden", "true");
  els.toolbarStage?.classList.remove("toolbar-hovering");
}

function repositionToolbarTooltipIfVisible() {
  const rect = toolbarTooltipPreviewCmd?.toolbar?.rect;
  if (!rect || els.toolbarTooltip.classList.contains("hidden")) return;
  positionToolbarTooltip(rect);
}

function restoreToolbarSelectionHighlight() {
  const cmd = currentCommand();
  if (cmd?.toolbar?.rect) showToolbarRect(cmd.toolbar.rect);
  else els.toolbarHighlight.classList.remove("show");
}

function previewToolbarCommand(cmd) {
  if (!cmd?.toolbar?.rect || toolbarDrawMode) {
    hideToolbarTooltip();
    restoreToolbarSelectionHighlight();
    return;
  }
  toolbarTooltipPreviewCmd = cmd;
  showToolbarRect(cmd.toolbar.rect);
  els.toolbarTooltipName.textContent = cmd.name || "";
  els.toolbarTooltipPath.textContent = cmd.path || "";
  els.toolbarTooltip.classList.remove("hidden");
  els.toolbarTooltip.setAttribute("aria-hidden", "false");
  positionToolbarTooltip(cmd.toolbar.rect);
  els.toolbarStage?.classList.add("toolbar-hovering");
}

function scheduleToolbarHover(evt) {
  pendingToolbarHoverEvt = evt;
  if (toolbarHoverRaf !== null) return;
  toolbarHoverRaf = requestAnimationFrame(() => {
    toolbarHoverRaf = null;
    const e = pendingToolbarHoverEvt;
    pendingToolbarHoverEvt = null;
    if (!e || toolbarDrawMode) return;
    toolbarPointerInside = true;
    const {px, py} = pointerToToolbarImageCoords(e);
    const cmd = commandAtToolbarPoint(px, py);
    if (cmd) previewToolbarCommand(cmd);
    else {
      hideToolbarTooltip();
      restoreToolbarSelectionHighlight();
    }
  });
}

function handleToolbarPointerLeave() {
  toolbarPointerInside = false;
  if (toolbarDrawMode) return;
  hideToolbarTooltip();
  restoreToolbarSelectionHighlight();
}

function markHumanEdit(cmd) {
  cmd.review = cmd.review || {};
  cmd.review.last_edited_by = "human";
  cmd.review.last_edited_at = new Date().toISOString();
}

function scoreCommand(cmd, query) {
  const q = normalized(query);
  if (!q) return 1;
  const name = normalized(cmd.name);
  const path = normalized(cmd.path);
  const category = normalized(cmd.category);
  const keywords = (cmd.keywords || []).map(normalized);
  let score = 0;
  if (name === q) score += 220;
  if (name.startsWith(q)) score += 120;
  if (name.includes(q)) score += 80;
  if (path.includes(q)) score += 28;
  if (category.includes(q)) score += 14;
  for (const k of keywords) {
    if (k === q) score += 95;
    else if (k.includes(q) || q.includes(k)) score += 45;
  }
  for (const word of q.split(/\s+/).filter(Boolean)) {
    if (name.includes(word)) score += 20;
    if (path.includes(word)) score += 8;
    for (const k of keywords) if (k.includes(word)) score += 10;
  }
  return score;
}

function getMatches() {
  const q = els.search.value;
  const filter = els.reviewFilter.value;
  return data.commands
    .filter(cmd => {
      if (!reviewMode && cmd.review?.status === "rejected") return false;
      if (reviewMode && filter !== "all" && cmd.review?.status !== filter) return false;
      return true;
    })
    .map(cmd => ({cmd, score: scoreCommand(cmd, q)}))
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || a.cmd.name.localeCompare(b.cmd.name));
}

function reviewCounts() {
  const counts = {needs_review: 0, confirmed: 0, rejected: 0};
  data.commands.forEach(c => counts[c.review?.status || "needs_review"]++);
  return counts;
}

function renderCommandIcon(cmd) {
  const src = cmd.source || {};
  const box = src.icon_box;
  const iw = Number(src.image_width || 0);
  const ih = Number(src.image_height || 0);
  if (src.image && box && iw > 0 && ih > 0 && box.w > 0 && box.h > 0) {
    const scale = Math.min(28 / box.w, 28 / box.h);
    const width = iw * scale;
    const height = ih * scale;
    const left = 16 - (box.x + box.w / 2) * scale;
    const top = 16 - (box.y + box.h / 2) * scale;
    return `<img class="source-crop-image" src="${escapeHtml(siteUrl(src.image))}" alt="" style="width:${width.toFixed(2)}px;height:${height.toFixed(2)}px;left:${left.toFixed(2)}px;top:${top.toFixed(2)}px">`;
  }
  if (src.icon_file) return `<img src="${escapeHtml(siteUrl(src.icon_file))}" alt="">`;
  return "icon";
}

function renderResults() {
  const matches = getMatches();
  els.resultCount.textContent = `${matches.length} of ${data.commands.length}`;
  if (!matches.length) {
    els.results.innerHTML = `<div class="empty">No matches. Try a broader term or change the review filter.</div>`;
    return;
  }
  els.results.innerHTML = matches.map(({cmd}) => {
    const mapped = !!cmd.toolbar?.rect;
    const rejected = cmd.review?.status === "rejected";
    const tags = (cmd.keywords || []).slice(0, 4).map(k => `<span class="tag">${escapeHtml(k)}</span>`).join("");
    const icon = renderCommandIcon(cmd);
    return `<div class="result ${cmd.id === selectedId ? "active" : ""}" data-id="${escapeHtml(cmd.id)}">
      <div class="result-icon">${icon}</div>
      <div>
        <div class="result-name">${escapeHtml(cmd.name)}</div>
        <div class="result-meta">${escapeHtml(cmd.path)} · ${statusLabel(cmd.review?.status)}</div>
        <div class="result-tags">${tags}</div>
      </div>
      <span class="map-state ${rejected ? "rejected" : mapped ? "" : "unmapped"}">${rejected ? "rejected" : mapped ? "mapped" : "not mapped"}</span>
    </div>`;
  }).join("");

  els.results.querySelectorAll(".result").forEach(row => {
    row.addEventListener("click", () => selectCommand(row.dataset.id));
    row.addEventListener("mouseenter", () => {
      const cmd = data.commands.find(c => c.id === row.dataset.id);
      if (cmd?.toolbar?.rect && !toolbarDrawMode) previewToolbarCommand(cmd);
    });
    row.addEventListener("mouseleave", () => {
      if (toolbarDrawMode || toolbarPointerInside) return;
      hideToolbarTooltip();
      restoreToolbarSelectionHighlight();
    });
  });
}

function setBoxStyle(el, box, width, height) {
  if (!box || !width || !height) {
    el.classList.add("hidden");
    return;
  }
  el.classList.remove("hidden");
  el.style.left = `${box.x / width * 100}%`;
  el.style.top = `${box.y / height * 100}%`;
  el.style.width = `${box.w / width * 100}%`;
  el.style.height = `${box.h / height * 100}%`;
}

function showToolbarRect(rect) {
  if (!rect) {
    els.toolbarHighlight.classList.remove("show");
    return;
  }
  setBoxStyle(els.toolbarHighlight, rect, data.toolbar.width, data.toolbar.height);
  els.toolbarHighlight.classList.add("show");
}

function selectCommand(id) {
  stopToolbarMapping();
  stopSourceMapping();
  selectedId = id;
  hideToolbarTooltip();
  const cmd = currentCommand();
  if (cmd?.toolbar?.rect) showToolbarRect(cmd.toolbar.rect);
  else els.toolbarHighlight.classList.remove("show");
  renderResults();
  renderEditor();
}

function sourceFilename(cmd) {
  return (cmd?.source?.image || "").split("/").pop();
}

function renderSourceOptions(cmd) {
  const names = Object.keys(data.source_images || {}).sort((a, b) => a.localeCompare(b, undefined, {numeric: true}));
  const current = sourceFilename(cmd);
  if (current && !names.includes(current)) names.push(current);
  els.editSourceImage.innerHTML = names.map(name => `<option value="${escapeHtml(name)}" ${name === current ? "selected" : ""}>${escapeHtml(name)}</option>`).join("");
}

function renderEditor() {
  const cmd = currentCommand();
  els.duplicateCommand.disabled = !cmd;
  els.deleteCommand.disabled = !cmd;
  if (!cmd) {
    els.noSelection.classList.remove("hidden");
    els.editor.classList.add("hidden");
    return;
  }
  els.noSelection.classList.add("hidden");
  els.editor.classList.remove("hidden");
  els.editName.value = cmd.name || "";
  els.editCategory.value = cmd.category || "";
  els.editPath.value = cmd.path || "";
  els.editKeywords.value = (cmd.keywords || []).join("\n");
  els.editStatus.value = cmd.review?.status || "needs_review";
  els.editNotes.value = cmd.review?.notes || "";
  els.reviewStatusBadge.textContent = statusLabel(cmd.review?.status);
  renderSourceOptions(cmd);

  const mapped = !!cmd.toolbar?.rect;
  const candidateScore = cmd.toolbar?.candidate_score;
  els.matchInfo.textContent = `${mapped ? "Toolbar rectangle present" : "Toolbar not mapped"}${Number.isFinite(candidateScore) ? ` · optional candidate score ${candidateScore}` : ""}.`;

  els.sourceImage.src = siteUrl(cmd.source.image || "");
  const iw = cmd.source.image_width || 1;
  const ih = cmd.source.image_height || 1;
  setBoxStyle(els.sourceRow, cmd.source.row_box, iw, ih);
  setBoxStyle(els.sourceIcon, cmd.source.icon_box, iw, ih);
  els.sourceBoxInfo.textContent = `row: ${boxText(cmd.source.row_box)}   icon: ${boxText(cmd.source.icon_box)}`;
  const conf = Number.isFinite(cmd.source.extraction_confidence) ? ` · AI confidence ${cmd.source.extraction_confidence}` : "";
  els.provenanceInfo.textContent = `Extraction: ${cmd.source.extraction_method || "unknown"}${conf} · last edit: ${cmd.review?.last_edited_by || "unknown"}`;
}

function boxText(box) {
  if (!box) return "none";
  return `x=${box.x}, y=${box.y}, w=${box.w}, h=${box.h}`;
}

function updateSelectedFromForm() {
  const cmd = currentCommand();
  if (!cmd) return;
  cmd.name = els.editName.value.trim();
  cmd.category = els.editCategory.value.trim();
  cmd.path = els.editPath.value.trim();
  cmd.keywords = els.editKeywords.value.split(/\n|,/).map(s => s.trim().toLowerCase()).filter(Boolean);
  cmd.review.status = els.editStatus.value;
  cmd.review.notes = els.editNotes.value.trim();
  markHumanEdit(cmd);
  persist();
  els.reviewStatusBadge.textContent = statusLabel(cmd.review.status);
  renderResults();
  els.provenanceInfo.textContent = `Extraction: ${cmd.source.extraction_method || "unknown"} · last edit: human`;
}

function setReviewMode(enabled) {
  reviewMode = enabled;
  els.reviewPanel.classList.toggle("hidden", !enabled);
  els.layout.classList.toggle("reviewing", enabled);
  els.reviewFilter.classList.toggle("hidden", !enabled);
  if (!enabled && els.reviewFilter.value === "rejected") els.reviewFilter.value = "all";
  stopToolbarMapping();
  stopSourceMapping();
  rebuildToolbarHitTargets();
  renderResults();
  renderEditor();
}

function pointOn(capture, evt) {
  const box = capture.getBoundingClientRect();
  return {
    x: Math.max(0, Math.min(box.width, evt.clientX - box.left)),
    y: Math.max(0, Math.min(box.height, evt.clientY - box.top)),
    box
  };
}

function drawPreview(el, start, point) {
  const x = Math.min(start.x, point.x), y = Math.min(start.y, point.y);
  const w = Math.abs(point.x - start.x), h = Math.abs(point.y - start.y);
  el.style.left = `${x / point.box.width * 100}%`;
  el.style.top = `${y / point.box.height * 100}%`;
  el.style.width = `${w / point.box.width * 100}%`;
  el.style.height = `${h / point.box.height * 100}%`;
}

function startToolbarMapping() {
  if (!currentCommand()) return;
  toolbarDrawMode = true;
  dragStart = null;
  hideToolbarTooltip();
  els.toolbarCapture.classList.add("active");
  els.mappingBadge.classList.remove("hidden");
  els.drawRect.classList.add("hidden");
  if (els.toolbarHint) els.toolbarHint.textContent = "Drag a rectangle around the correct toolbar button.";
}

function stopToolbarMapping() {
  toolbarDrawMode = false;
  dragStart = null;
  els.toolbarCapture.classList.remove("active");
  els.mappingBadge.classList.add("hidden");
  els.drawRect.classList.add("hidden");
  hideToolbarTooltip();
  if (els.toolbarHint) els.toolbarHint.textContent = "Click a mapped result to highlight its button.";
}

function startSourceMapping(kind) {
  if (!currentCommand()) return;
  sourceDrawMode = kind;
  dragStart = null;
  els.sourceCapture.classList.add("active");
  els.sourceDrawRect.classList.add("hidden");
  if (els.sourceHint) {
    els.sourceHint.textContent = kind === "icon" ? "Drag tightly around the icon." : "Drag around the full command row (icon + label).";
  }
}

function stopSourceMapping() {
  sourceDrawMode = null;
  dragStart = null;
  els.sourceCapture.classList.remove("active");
  els.sourceDrawRect.classList.add("hidden");
  if (els.sourceHint) els.sourceHint.textContent = "Red = command row. Blue = icon.";
}

function installDrawHandlers(capture, preview, modeGetter, finish) {
  capture.addEventListener("pointerdown", evt => {
    if (!modeGetter()) return;
    evt.preventDefault();
    capture.setPointerCapture?.(evt.pointerId);
    dragStart = pointOn(capture, evt);
    preview.classList.remove("hidden");
  });
  capture.addEventListener("pointermove", evt => {
    if (!modeGetter() || !dragStart) return;
    drawPreview(preview, dragStart, pointOn(capture, evt));
  });
  capture.addEventListener("pointerup", evt => {
    if (!modeGetter() || !dragStart) return;
    const p = pointOn(capture, evt);
    const x = Math.min(dragStart.x, p.x), y = Math.min(dragStart.y, p.y);
    const w = Math.abs(p.x - dragStart.x), h = Math.abs(p.y - dragStart.y);
    if (w >= 4 && h >= 4) finish({x, y, w, h, displayW: p.box.width, displayH: p.box.height});
  });
}

els.toolbarScroller?.addEventListener("scroll", repositionToolbarTooltipIfVisible, {passive: true});
window.addEventListener("resize", repositionToolbarTooltipIfVisible, {passive: true});

els.toolbarCapture.addEventListener("pointermove", evt => {
  if (!toolbarDrawMode) scheduleToolbarHover(evt);
});
els.toolbarCapture.addEventListener("pointerleave", handleToolbarPointerLeave);
els.toolbarCapture.addEventListener("click", evt => {
  if (toolbarDrawMode) return;
  const {px, py} = pointerToToolbarImageCoords(evt);
  const cmd = commandAtToolbarPoint(px, py);
  if (cmd) selectCommand(cmd.id);
});

installDrawHandlers(els.toolbarCapture, els.drawRect, () => toolbarDrawMode, r => {
  const cmd = currentCommand();
  cmd.toolbar = cmd.toolbar || {};
  cmd.toolbar.rect = {
    x: Math.round(r.x / r.displayW * data.toolbar.width),
    y: Math.round(r.y / r.displayH * data.toolbar.height),
    w: Math.max(1, Math.round(r.w / r.displayW * data.toolbar.width)),
    h: Math.max(1, Math.round(r.h / r.displayH * data.toolbar.height))
  };
  cmd.toolbar.mapping_method = "manual-review";
  delete cmd.toolbar.candidate_score;
  markHumanEdit(cmd);
  persist();
  showToolbarRect(cmd.toolbar.rect);
  stopToolbarMapping();
  renderResults();
  renderEditor();
});

installDrawHandlers(els.sourceCapture, els.sourceDrawRect, () => sourceDrawMode, r => {
  const cmd = currentCommand();
  const iw = cmd.source.image_width;
  const ih = cmd.source.image_height;
  const box = {
    x: Math.round(r.x / r.displayW * iw),
    y: Math.round(r.y / r.displayH * ih),
    w: Math.max(1, Math.round(r.w / r.displayW * iw)),
    h: Math.max(1, Math.round(r.h / r.displayH * ih))
  };
  if (sourceDrawMode === "row") cmd.source.row_box = box;
  else cmd.source.icon_box = box;
  markHumanEdit(cmd);
  persist();
  stopSourceMapping();
  renderEditor();
});

function changeSourceImage() {
  const cmd = currentCommand();
  if (!cmd) return;
  const name = els.editSourceImage.value;
  const dims = data.source_images?.[name];
  if (!dims) return;
  cmd.source.image = `assets/catalogue/${name}`;
  cmd.source.image_width = dims.width;
  cmd.source.image_height = dims.height;
  cmd.source.row_box = {x: 20, y: 20, w: Math.max(1, dims.width - 40), h: Math.min(26, dims.height - 20)};
  cmd.source.icon_box = {x: 45, y: 20, w: Math.min(30, dims.width - 45), h: 25};
  delete cmd.source.icon_file;
  markHumanEdit(cmd);
  persist();
  renderEditor();
  showToast("Source image changed. Redraw the row and icon boxes.");
}

function addCommand() {
  const sourceName = sourceFilename(currentCommand()) || Object.keys(data.source_images || {})[0] || "";
  const dims = data.source_images?.[sourceName] || {width: 370, height: 340};
  const cmd = {
    id: uniqueId("new-command"),
    name: "New command",
    category: "",
    path: "New command",
    keywords: [],
    source: {
      image: sourceName ? `assets/catalogue/${sourceName}` : "",
      image_width: dims.width,
      image_height: dims.height,
      row_box: {x: 20, y: 20, w: Math.max(1, dims.width - 40), h: 26},
      icon_box: {x: 45, y: 20, w: 30, h: 25},
      extraction_method: "manual-add"
    },
    toolbar: {rect: null, mapping_method: "unmapped"},
    review: {status: "needs_review", notes: "Added manually.", last_edited_by: "human", last_edited_at: new Date().toISOString()}
  };
  data.commands.push(cmd);
  selectedId = cmd.id;
  persist();
  renderResults();
  renderEditor();
  els.editName.focus();
}

function duplicateCommand() {
  const cmd = currentCommand();
  if (!cmd) return;
  const copy = deepClone(cmd);
  copy.id = uniqueId(`${cmd.name}-copy`);
  copy.name = `${cmd.name} copy`;
  copy.path = copy.category ? `${copy.category} > ${copy.name}` : copy.name;
  copy.toolbar = {rect: null, mapping_method: "unmapped"};
  copy.review = {status: "needs_review", notes: `Duplicated from ${cmd.id}.`, last_edited_by: "human", last_edited_at: new Date().toISOString()};
  data.commands.push(copy);
  selectedId = copy.id;
  persist();
  renderResults();
  renderEditor();
}

function deleteCommand() {
  const cmd = currentCommand();
  if (!cmd) return;
  if (!confirm(`Permanently delete “${cmd.name}” from the working database?`)) return;
  data.commands = data.commands.filter(c => c.id !== cmd.id);
  selectedId = null;
  persist();
  renderResults();
  renderEditor();
  els.toolbarHighlight.classList.remove("show");
}

function exportJson() {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "commands.json";
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast("Downloaded commands.json. Replace site/data/commands.json in the repo and commit it.");
}

els.search.addEventListener("input", renderResults);
els.clearSearch.addEventListener("click", () => { els.search.value = ""; renderResults(); els.search.focus(); });
els.reviewFilter.addEventListener("change", renderResults);
els.reviewToggle?.addEventListener("change", () => setReviewMode(els.reviewToggle.checked));
[els.editName, els.editCategory, els.editPath, els.editKeywords, els.editNotes].forEach(el => el.addEventListener("input", updateSelectedFromForm));
els.editStatus.addEventListener("change", updateSelectedFromForm);
els.editSourceImage.addEventListener("change", changeSourceImage);
els.mapToolbar.addEventListener("click", startToolbarMapping);
els.clearMapping.addEventListener("click", () => {
  const cmd = currentCommand();
  if (!cmd) return;
  cmd.toolbar.rect = null;
  cmd.toolbar.mapping_method = "cleared-by-reviewer";
  delete cmd.toolbar.candidate_score;
  markHumanEdit(cmd);
  persist();
  hideToolbarTooltip();
  els.toolbarHighlight.classList.remove("show");
  renderResults();
  renderEditor();
});
els.fixRowBox.addEventListener("click", () => startSourceMapping("row"));
els.fixIconBox.addEventListener("click", () => startSourceMapping("icon"));
els.addCommand.addEventListener("click", addCommand);
els.duplicateCommand.addEventListener("click", duplicateCommand);
els.deleteCommand.addEventListener("click", deleteCommand);
els.exportJson.addEventListener("click", exportJson);

els.importJson.addEventListener("change", async evt => {
  const file = evt.target.files?.[0];
  if (!file) return;
  try {
    const incoming = normalizeData(JSON.parse(await file.text()));
    if (!incoming.commands || !incoming.toolbar) throw new Error("Not a command database");
    data = incoming;
    selectedId = null;
    persist();
    els.toolbarImage.src = siteUrl(data.toolbar.image);
    renderResults();
    renderEditor();
    showToast(`Imported ${data.commands.length} commands.`);
  } catch (err) {
    showToast(`Could not import JSON: ${err.message}`, true);
  } finally {
    evt.target.value = "";
  }
});

els.resetData.addEventListener("click", () => {
  if (!confirm("Discard browser edits and restore the last repo data loaded when this page opened?")) return;
  localStorage.removeItem(STORAGE_KEY);
  data = normalizeData(shippedData);
  selectedId = null;
  stopToolbarMapping();
  stopSourceMapping();
  hideToolbarTooltip();
  rebuildToolbarHitTargets();
  els.toolbarHighlight.classList.remove("show");
  renderResults();
  renderEditor();
  showToast("Browser edits reset.");
});

async function init() {
  const response = await fetch(siteUrl("data/commands.json"), {cache: "no-store"});
  if (!response.ok) throw new Error(`Could not load commands.json (${response.status})`);
  shippedData = normalizeData(await response.json());
  const local = localStorage.getItem(STORAGE_KEY);
  if (local) {
    try {
      data = normalizeData(JSON.parse(local));
    } catch {
      data = deepClone(shippedData);
    }
  } else {
    data = deepClone(shippedData);
  }
  els.toolbarImage.src = siteUrl(data.toolbar.image);
  rebuildToolbarHitTargets();
  renderResults();
  setReviewMode(false);
}

init().catch(err => {
  document.body.innerHTML = `<main><div class="card empty"><strong>Could not start the static site.</strong><br><br>${escapeHtml(err.message)}<br><br>Open it through GitHub Pages, or preview the <code>site/</code> folder with any static HTTP server.</div></main>`;
});
