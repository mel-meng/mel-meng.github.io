import { createState, beginInteraction, updateInput, endInteraction } from './state.js';

const maxRectHeight = 88;
const minRectHeight = 28;
const rowGap = 14;

const LAYOUT = {
  viewWidth: 1120,
  viewHeight: 360,
  outletX: 700,
  minUpstreamX: 16,
  /** East of outlet stub (x2 at outletX + 37). */
  rowLabelXOffset: 46,
  rowLabelBandWidth: 172,
  valuesGapAfterRowLabel: 14,
  firstRowCenter: 18 + maxRectHeight / 2,
  rowPitch: maxRectHeight + rowGap,
  labelYOffset: 29,
  valuesBlockTopOffset: 30,
  dimMinSize: 22,
  dimInset: 10,
};

const SURFACE_KEYS = ['A1', 'A2', 'A3'];
const SURFACES = Object.fromEntries(
  SURFACE_KEYS.map((key, index) => [
    key,
    {
      rowY: LAYOUT.firstRowCenter + index * LAYOUT.rowPitch,
      colorClass: key.toLowerCase(),
    },
  ]),
);

const svg = document.querySelector('#anatomy');
const outletX = LAYOUT.outletX;
const minUpstreamX = LAYOUT.minUpstreamX;
const maxDisplayLength = outletX - minUpstreamX;
const rowLabelX = outletX + LAYOUT.rowLabelXOffset;
const valuesX = rowLabelX + LAYOUT.rowLabelBandWidth + LAYOUT.valuesGapAfterRowLabel;
const widthRange = { min: 150, max: 1200 };
const lengthReferenceFt = 43560 / 300; // display normalization only

const controls = {
  imperviousPct: document.querySelector('#impervious'),
  zeroImperviousPct: document.querySelector('#zero'),
  widthFt: document.querySelector('#width'),
};

const outputs = {
  imperviousPct: document.querySelector('#impervious-value'),
  zeroImperviousPct: document.querySelector('#zero-value'),
  widthFt: document.querySelector('#width-value'),
};

let state = createState();
let keyboardEndTimer = null;

function fmtArea(v) { return `${v.toFixed(2)} ac`; }
function fmtLength(v) { return `${Math.round(v)} ft`; }
function fmtWidth(v) { return `${Math.round(v)} ft`; }

function displayHeight(widthFt) {
  const t = (widthFt - widthRange.min) / (widthRange.max - widthRange.min);
  return minRectHeight + Math.max(0, Math.min(1, t)) * (maxRectHeight - minRectHeight);
}

function displayLength(lengthFt) {
  // Linear around an educational reference, clipped only to keep the drawing in view.
  const px = (lengthFt / lengthReferenceFt) * 430;
  return Math.max(0, Math.min(maxDisplayLength, px));
}

function rowGuideY(betweenIndex) {
  const above = LAYOUT.firstRowCenter + betweenIndex * LAYOUT.rowPitch;
  const below = above + LAYOUT.rowPitch;
  return (above + below) / 2;
}

function syncStaticSvg() {
  svg.setAttribute('viewBox', `0 0 ${LAYOUT.viewWidth} ${LAYOUT.viewHeight}`);

  const guides = svg.querySelectorAll('#row-guides line');
  guides[0].setAttribute('y1', rowGuideY(0).toFixed(2));
  guides[0].setAttribute('y2', rowGuideY(0).toFixed(2));
  guides[1].setAttribute('y1', rowGuideY(1).toFixed(2));
  guides[1].setAttribute('y2', rowGuideY(1).toFixed(2));

  const lastRowY = SURFACES.A3.rowY;
  const axisBottom = lastRowY + maxRectHeight / 2 + 10;
  const outletAxis = svg.querySelector('.outlet-axis');
  outletAxis.setAttribute('x1', String(outletX));
  outletAxis.setAttribute('x2', String(outletX));
  outletAxis.setAttribute('y1', '12');
  outletAxis.setAttribute('y2', String(axisBottom));

  const axisNote = svg.querySelector('.axis-note');
  axisNote.setAttribute('x', String(outletX));
  axisNote.setAttribute('y', String(axisBottom + 22));

  for (const surface of SURFACE_KEYS) {
    const row = svg.querySelector(`[data-surface="${surface}"]`);
    const labelY = SURFACES[surface].rowY - LAYOUT.labelYOffset;
    row.querySelector('.row-label').setAttribute('transform', `translate(${rowLabelX} ${labelY})`);
  }
}

function setRect(rect, anatomy, surface, isCurrent) {
  const data = anatomy.surfaces[surface];
  const height = displayHeight(data.widthFt);
  const width = displayLength(data.lengthFt);
  const y = SURFACES[surface].rowY - height / 2;
  const x = outletX - width;

  rect.setAttribute('x', x.toFixed(2));
  rect.setAttribute('y', y.toFixed(2));
  rect.setAttribute('width', width.toFixed(2));
  rect.setAttribute('height', height.toFixed(2));
  rect.setAttribute('rx', isCurrent ? '2' : '1');
}

function renderValues(group, current, previous) {
  group.innerHTML = '';
  const x = valuesX;
  const lines = [
    ['Area', fmtArea(current.areaAc), fmtArea(previous.areaAc)],
    ['Length', fmtLength(current.lengthFt), fmtLength(previous.lengthFt)],
    ['W', fmtWidth(current.widthFt), fmtWidth(previous.widthFt)],
  ];

  lines.forEach(([label, now, before], index) => {
    const y = 0 + index * 31;
    const labelEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    labelEl.setAttribute('x', x);
    labelEl.setAttribute('y', y);
    labelEl.setAttribute('class', 'value-label');
    labelEl.textContent = label;
    group.appendChild(labelEl);

    const currentEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    currentEl.setAttribute('x', x + 54);
    currentEl.setAttribute('y', y);
    currentEl.setAttribute('class', 'value-current');
    currentEl.textContent = now;
    group.appendChild(currentEl);

    const previousEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    previousEl.setAttribute('x', x + 144);
    previousEl.setAttribute('y', y);
    previousEl.setAttribute('class', 'value-previous');
    previousEl.textContent = before === now ? '—' : `was ${before}`;
    group.appendChild(previousEl);
  });
}

function positionDimLabels(row, currentRect) {
  const dimL = row.querySelector('.dim-l');
  const dimW = row.querySelector('.dim-w');
  const width = Number.parseFloat(currentRect.getAttribute('width'));
  const height = Number.parseFloat(currentRect.getAttribute('height'));
  const x = Number.parseFloat(currentRect.getAttribute('x'));
  const y = Number.parseFloat(currentRect.getAttribute('y'));
  const tooSmall = width < LAYOUT.dimMinSize || height < LAYOUT.dimMinSize;

  for (const el of [dimL, dimW]) {
    el.classList.toggle('dim-label-hidden', tooSmall);
  }
  if (tooSmall) return;

  const inset = LAYOUT.dimInset;
  dimL.setAttribute('x', (x + width / 2).toFixed(2));
  dimL.setAttribute('y', (y + height - inset).toFixed(2));
  dimW.setAttribute('x', (x + width - inset).toFixed(2));
  dimW.setAttribute('y', (y + height / 2 + 4).toFixed(2));
}

function renderRow(surface) {
  const row = svg.querySelector(`[data-surface="${surface}"]`);
  const previousRect = row.querySelector(`.previous-${surface.toLowerCase()}`);
  const currentRect = row.querySelector(`.current-${surface.toLowerCase()}`);
  const outletLine = row.querySelector('.outlet-line');
  const values = row.querySelector(`.values-${surface.toLowerCase()}`);

  setRect(previousRect, state.previous, surface, false);
  setRect(currentRect, state.current, surface, true);

  const currentHeight = displayHeight(state.current.surfaces[surface].widthFt);
  const cy = SURFACES[surface].rowY;
  outletLine.setAttribute('x1', outletX + 8);
  outletLine.setAttribute('x2', outletX + 37);
  outletLine.setAttribute('y1', cy);
  outletLine.setAttribute('y2', cy);

  values.setAttribute('transform', `translate(0 ${cy - LAYOUT.valuesBlockTopOffset})`);
  renderValues(values, state.current.surfaces[surface], state.previous.surfaces[surface]);
  positionDimLabels(row, currentRect);

  row.setAttribute('data-current-height', currentHeight.toFixed(2));
}

function render() {
  outputs.imperviousPct.value = `${Math.round(state.inputs.imperviousPct)}%`;
  outputs.zeroImperviousPct.value = `${Math.round(state.inputs.zeroImperviousPct)}%`;
  outputs.widthFt.value = `${Math.round(state.inputs.widthFt)} ft`;

  for (const surface of SURFACE_KEYS) renderRow(surface);
}

function begin(parameter) {
  state = beginInteraction(state, parameter);
  render();
}

function finish() {
  state = endInteraction(state);
  render();
}

function bindRange(element, key, parse = Number) {
  element.addEventListener('pointerdown', () => begin(key));
  element.addEventListener('pointerup', finish);
  element.addEventListener('pointercancel', finish);
  element.addEventListener('blur', finish);

  element.addEventListener('keydown', (event) => {
    const interactionKeys = new Set(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown']);
    if (!interactionKeys.has(event.key)) return;
    if (state.activeParameter !== key) begin(key);
    clearTimeout(keyboardEndTimer);
    keyboardEndTimer = setTimeout(finish, 350);
  });

  element.addEventListener('input', () => {
    if (state.activeParameter !== key) begin(key);
    state = updateInput(state, key, parse(element.value));
    render();
  });
}

syncStaticSvg();
bindRange(controls.imperviousPct, 'imperviousPct');
bindRange(controls.zeroImperviousPct, 'zeroImperviousPct');
bindRange(controls.widthFt, 'widthFt');
render();
