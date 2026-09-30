import { createSwmmClient, isSwmmRunSuperseded } from '../../shared/swmm-client.js';
import { buildSurfaceModel, equivalentLengthFt, FIXED_AREA_AC, normalizeSurfaceParams, OBJECTS } from './model.js';
import { PRESETS, getPreset } from './presets.js';
import { integrateRateDepth, runoffMetrics } from './metrics.js';
import {
  depressionPocketSize,
  depressionStorageMaxIn,
  profileBandY,
  profileDropPx
} from './geometry-layout.js';

const OUTPUTS = Object.freeze([
  Object.freeze({ key: 'rainfall', objectType: 'subcatchment', objectId: OBJECTS.catchment, variable: 'rainfall' }),
  Object.freeze({ key: 'infiltration', objectType: 'subcatchment', objectId: OBJECTS.catchment, variable: 'infiltrationLoss' }),
  Object.freeze({ key: 'runoff', objectType: 'subcatchment', objectId: OBJECTS.catchment, variable: 'runoff' })
]);

const CONTROL_DEFS = Object.freeze({
  widthFt: { label: 'Width', min: 60, max: 650, step: 5, unit: 'ft', modes: ['A1','A2','A3'] },
  slopePct: { label: 'Slope', min: 0.2, max: 8, step: 0.1, unit: '%', modes: ['A1','A2','A3'] },
  nPerv: { label: "Manning's n", min: 0.03, max: 0.40, step: 0.005, unit: '', modes: ['A1'] },
  nImperv: { label: "Manning's n", min: 0.008, max: 0.05, step: 0.001, unit: '', modes: ['A2','A3'] },
  dstorePervIn: { label: 'Depression storage', min: 0, max: 0.35, step: 0.01, unit: 'in', modes: ['A1'] },
  dstoreImpervIn: { label: 'Depression storage', min: 0, max: 0.18, step: 0.005, unit: 'in', modes: ['A2'] },
  suctionIn: { label: 'Green-Ampt suction', min: 1, max: 10, step: 0.1, unit: 'in', modes: ['A1'] },
  ksatInHr: { label: 'Saturated conductivity', min: 0.02, max: 1.2, step: 0.01, unit: 'in/hr', modes: ['A1'] },
  imd: { label: 'Initial moisture deficit', min: 0.05, max: 0.6, step: 0.01, unit: '', modes: ['A1'] }
});

const DEFAULTS = Object.freeze({
  surfaceType: 'A1', widthFt: 220, slopePct: 2, nPerv: 0.15, nImperv: 0.015,
  dstorePervIn: 0.18, dstoreImpervIn: 0.06, suctionIn: 4, ksatInHr: 0.30, imd: 0.25
});

const swmm = createSwmmClient();
let inputs = { ...DEFAULTS };
let current = null;
let previous = null;
let activeInteraction = false;
let interactionIdle = null;
let runTimer = null;
let ready = false;

const els = {
  tabs: document.querySelector('#surfaceTabs'), presets: document.querySelector('#presetList'), controls: document.querySelector('#controls'),
  engine: document.querySelector('#engineBadge'), surfaceName: document.querySelector('#surfaceName'), geometry: document.querySelector('#geometryGroup'),
  canvas: document.querySelector('#responseChart'), chartEmpty: document.querySelector('#chartEmpty'), runoffDepth: document.querySelector('#runoffDepth'),
  peakFlow: document.querySelector('#peakFlow'), peakTime: document.querySelector('#peakTime'), infiltrationDepth: document.querySelector('#infiltrationDepth'),
  infiltrationMetric: document.querySelector('#infiltrationMetric'), equivalentLength: document.querySelector('#equivalentLength'), runStatus: document.querySelector('#runStatus'),
  runtime: document.querySelector('#runtime'), errorDetails: document.querySelector('#errorDetails'), errorReport: document.querySelector('#errorReport')
};
const ctx = els.canvas.getContext('2d');

function fmt(value, digits = 2) { return Number(value).toFixed(digits); }
function surfaceLabel(type) { return type === 'A1' ? 'A1 · Pervious' : type === 'A2' ? 'A2 · Impervious with storage' : 'A3 · Impervious, zero storage'; }

const PLAN_OUTLET_X = 480;
const PLAN_TOP = 42;
const DIM_OFFSET = 12;
const PROFILE_GAP = 28;
const SVG_VIEW_WIDTH = 560;
const GEOMETRY_FOOTER = 38;

function surfaceColors(surfaceType) {
  if (surfaceType === 'A1') return { accent: '#5b9b58', fill: '#dcefd7' };
  if (surfaceType === 'A2') return { accent: '#2677b8', fill: '#d8eafa' };
  return { accent: '#df7a31', fill: '#f8e1cf' };
}

function depressionStorageIn(p) {
  if (p.surfaceType === 'A1') return p.dstorePervIn;
  if (p.surfaceType === 'A2') return p.dstoreImpervIn;
  return 0;
}

function computeSurfaceLayout(p, length) {
  const maxLength = (FIXED_AREA_AC * 43560) / 60;
  const rectW = 190 + 350 * Math.sqrt(Math.min(1, length / maxLength));
  const rectH = 58 + 74 * Math.sqrt(Math.min(1, p.widthFt / 650));
  const x = Math.max(48, PLAN_OUTLET_X - rectW);
  const y = PLAN_TOP;
  const tipX = x + rectW;
  const planFlowY = y + rectH / 2;
  const dropPx = profileDropPx(rectW, p.slopePct);
  const { profileTop, triTopY, triBaseY, viewHeight } = profileBandY({
    y,
    rectH,
    profileGap: PROFILE_GAP,
    dropPx,
    geometryFooter: GEOMETRY_FOOTER
  });
  return { x, y, rectW, rectH, tipX, planFlowY, profileTop, triBaseY, triTopY, dropPx, viewHeight };
}

function renderSurfaceGeometry(p, length, colors) {
  const layout = computeSurfaceLayout(p, length);
  const { x, y, rectW, rectH, tipX, planFlowY, triBaseY, triTopY, viewHeight } = layout;
  const { accent, fill } = colors;
  const dstoreIn = depressionStorageIn(p);
  const dstoreMaxIn = depressionStorageMaxIn(p.surfaceType);
  const pocket = depressionPocketSize(dstoreIn, dstoreMaxIn);
  const dsDigits = p.surfaceType === 'A2' ? 3 : 2;
  const dsLabel = `${fmt(dstoreIn, dsDigits)} in`;
  const dsPocket = pocket
    ? `<rect x="${tipX - pocket.w}" y="${triBaseY - pocket.h}" width="${pocket.w}" height="${pocket.h}" fill="${fill}" stroke="${accent}" stroke-width="1.5" />`
    : '';
  const outletStartX = tipX + 4;
  const outletLabelX = Math.min(outletStartX + 46, SVG_VIEW_WIDTH - 42);
  const dimStroke = '#7f92a2';
  const dimText = '#536a7d';
  const dimSize = 12;
  const profileMidY = (triTopY + triBaseY) / 2;
  const slopeText = `S = ${fmt(p.slopePct, 1)}%`;
  const dsText = `Ds = ${dsLabel}`;

  return `
    <rect x="${x}" y="${y}" width="${rectW}" height="${rectH}" rx="3" fill="${fill}" stroke="${accent}" stroke-width="2.2" />
    <line x1="${outletStartX}" y1="${planFlowY}" x2="${outletStartX + 34}" y2="${planFlowY}" stroke="#5b7083" stroke-width="1.5" marker-end="url(#arrow)" />
    <text x="${outletLabelX}" y="${planFlowY + 4}" fill="#7c8d9c" font-size="12">outlet</text>
    <line x1="${x}" y1="${y - DIM_OFFSET}" x2="${tipX}" y2="${y - DIM_OFFSET}" stroke="${dimStroke}" stroke-width="1" />
    <line x1="${x}" y1="${y}" x2="${x}" y2="${y - DIM_OFFSET}" stroke="${dimStroke}" stroke-width="1" />
    <line x1="${tipX}" y1="${y}" x2="${tipX}" y2="${y - DIM_OFFSET}" stroke="${dimStroke}" stroke-width="1" />
    <text x="${x + rectW / 2}" y="${y - DIM_OFFSET - 8}" text-anchor="middle" fill="${dimText}" font-size="${dimSize}">L = ${fmt(length, 0)} ft</text>
    <line x1="${x - 14}" y1="${y + 4}" x2="${x - 14}" y2="${y + rectH - 4}" stroke="${dimStroke}" stroke-width="1" />
    <text x="${x - 26}" y="${planFlowY + 4}" transform="rotate(-90 ${x - 26} ${planFlowY})" text-anchor="middle" fill="${dimText}" font-size="${dimSize}">W = ${fmt(p.widthFt, 0)} ft</text>
    <text x="${x + rectW / 2}" y="${planFlowY + 6}" text-anchor="middle" fill="${accent}" font-size="18" font-weight="700">${p.surfaceType}</text>
    <rect x="${x - 1}" y="${y + rectH}" width="${rectW + 2}" height="${PROFILE_GAP}" fill="#ffffff" />
    <polygon points="${x},${triTopY} ${x},${triBaseY} ${tipX},${triBaseY}" fill="${fill}" stroke="${accent}" stroke-width="2.2" stroke-linejoin="round" />
    ${dsPocket}
    <line x1="${x - 14}" y1="${triTopY + 4}" x2="${x - 14}" y2="${triBaseY - 4}" stroke="${dimStroke}" stroke-width="1" />
    <text x="${x - 26}" y="${profileMidY + 4}" transform="rotate(-90 ${x - 26} ${profileMidY})" text-anchor="middle" fill="${dimText}" font-size="${dimSize}">${slopeText}</text>
    <line x1="${tipX - 36}" y1="${triBaseY + 10}" x2="${tipX + 2}" y2="${triBaseY + 10}" stroke="${dimStroke}" stroke-width="1" />
    <text x="${tipX - 17}" y="${triBaseY + 22}" text-anchor="middle" fill="${dimText}" font-size="${dimSize}">${dsText}</text>
    <line x1="${x}" y1="${triBaseY + 24}" x2="${tipX}" y2="${triBaseY + 24}" stroke="#d7e0e6" stroke-width="1" />
    <text x="${x + rectW / 2}" y="${Math.min(viewHeight - 6, triBaseY + 36)}" text-anchor="middle" fill="#7c8d9c" font-size="10">flow →</text>`;
}

function syncGeometryViewBox(viewHeight) {
  const svg = document.querySelector('#surfaceSvg');
  if (svg) svg.setAttribute('viewBox', `0 0 ${SVG_VIEW_WIDTH} ${viewHeight}`);
}

function renderGeometry() {
  const p = normalizeSurfaceParams(inputs);
  const length = equivalentLengthFt(p);
  const colors = surfaceColors(p.surfaceType);
  const layout = computeSurfaceLayout(p, length);
  syncGeometryViewBox(layout.viewHeight);
  els.geometry.innerHTML = renderSurfaceGeometry(p, length, colors);
  els.surfaceName.textContent = surfaceLabel(p.surfaceType);
  els.equivalentLength.textContent = `${fmt(length, 0)} ft`;
}

function renderTabs() {
  els.tabs.innerHTML = ['A1','A2','A3'].map((type) => `<button type="button" class="surface-tab ${inputs.surfaceType === type ? 'active' : ''}" data-type="${type}">${type}</button>`).join('');
  els.tabs.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
    startInteraction();
    inputs.surfaceType = button.dataset.type;
    renderAllStatic();
    queueRun();
    endInteractionSoon();
  }));
}

function renderPresets() {
  els.presets.innerHTML = PRESETS.map((preset) => `<button type="button" class="preset" data-id="${preset.id}"><strong>${preset.label}</strong><span>${preset.description}</span></button>`).join('');
  els.presets.querySelectorAll('button').forEach((button) => button.addEventListener('click', () => {
    const preset = getPreset(button.dataset.id); if (!preset) return;
    startInteraction();
    inputs = { ...inputs, ...preset.values };
    renderAllStatic(); queueRun(); endInteractionSoon();
  }));
}

function controlHtml(key, def) {
  const value = inputs[key];
  return `<div class="control"><label for="${key}"><span>${def.label}</span><output id="${key}Value">${fmt(value, def.step < .01 ? 3 : def.step < 1 ? 2 : 0)} ${def.unit}</output></label><input id="${key}" data-key="${key}" type="range" min="${def.min}" max="${def.max}" step="${def.step}" value="${value}"></div>`;
}

function renderControls() {
  els.controls.innerHTML = Object.entries(CONTROL_DEFS).filter(([,def]) => def.modes.includes(inputs.surfaceType)).map(([key,def]) => controlHtml(key,def)).join('');
  els.controls.querySelectorAll('input').forEach((slider) => {
    slider.addEventListener('pointerdown', startInteraction);
    slider.addEventListener('keydown', startInteraction);
    slider.addEventListener('input', () => {
      const key = slider.dataset.key; inputs[key] = Number(slider.value);
      const def = CONTROL_DEFS[key]; document.querySelector(`#${key}Value`).textContent = `${fmt(inputs[key], def.step < .01 ? 3 : def.step < 1 ? 2 : 0)} ${def.unit}`.trim();
      renderGeometry(); queueRun(); endInteractionSoon();
    });
    slider.addEventListener('pointerup', endInteractionSoon);
    slider.addEventListener('blur', endInteractionSoon);
  });
}

function startInteraction() {
  if (activeInteraction) return;
  activeInteraction = true;
  if (current) previous = structuredClone(current);
}
function endInteractionSoon() {
  clearTimeout(interactionIdle);
  interactionIdle = setTimeout(() => { activeInteraction = false; }, 240);
}


function renderAllStatic() { renderTabs(); renderControls(); renderGeometry(); }

function queueRun() {
  if (!ready) return;
  els.runStatus.textContent = 'Queued';
  clearTimeout(runTimer);
  runTimer = setTimeout(runCurrent, 80);
}

function makeSnapshot(result) {
  const metrics = runoffMetrics(result.outputs.runoff, FIXED_AREA_AC, result.model.reportStepSeconds);
  const infiltrationDepth = integrateRateDepth(result.outputs.infiltration, result.model.reportStepSeconds);
  return { inputs: { ...inputs }, result, metrics: { ...metrics, infiltrationDepth } };
}

async function runCurrent() {
  els.runStatus.textContent = 'Running SWMM…';
  try {
    const result = await swmm.run({ inp: buildSurfaceModel(inputs).inp, outputs: OUTPUTS });
    current = makeSnapshot(result);
    els.chartEmpty.style.display = 'none'; els.errorDetails.classList.remove('visible');
    els.runStatus.textContent = 'Updated'; els.runtime.textContent = `${result.timing.runMs.toFixed(1)} ms`;
    renderMetrics(); drawChart();
  } catch (error) {
    if (isSwmmRunSuperseded(error)) return;
    els.runStatus.textContent = 'Run failed'; els.errorDetails.classList.add('visible');
    els.errorReport.textContent = [error.message, error.detail, error.report].filter(Boolean).join('\n\n');
  }
}

function renderMetrics() {
  if (!current?.metrics) return;
  const m = current.metrics;
  els.runoffDepth.textContent = `${fmt(m.runoffDepthIn, 3)} in`;
  els.peakFlow.textContent = `${fmt(m.peakCfs, 3)} cfs`;
  els.peakTime.textContent = `${fmt(m.peakTimeHours, 2)} hr`;
  els.infiltrationMetric.style.display = inputs.surfaceType === 'A1' ? '' : 'none';
  els.infiltrationDepth.textContent = `${fmt(m.infiltrationDepth, 3)} in`;
}

function resizeCanvas() {
  const rect = els.canvas.getBoundingClientRect(); const dpr = window.devicePixelRatio || 1;
  const w = Math.max(1, Math.round(rect.width*dpr)), h = Math.max(1, Math.round(rect.height*dpr));
  if (els.canvas.width !== w || els.canvas.height !== h) { els.canvas.width = w; els.canvas.height = h; }
  ctx.setTransform(dpr,0,0,dpr,0,0); return { width:rect.width, height:rect.height };
}

function drawChart() {
  if (!current) return;
  const { width, height } = resizeCanvas(); ctx.clearRect(0,0,width,height);
  const margin = { left:54,right:20,top:30,bottom:36 }, plotW = width-margin.left-margin.right, plotH=height-margin.top-margin.bottom;
  const cur = current.result.outputs.runoff, rain = current.result.outputs.rainfall, prev = previous?.result?.outputs?.runoff;
  const maxX = cur.timesHours.at(-1) || 1; const maxQ = Math.max(...cur.values, ...(prev?.values || []), .001)*1.15; const maxRain=Math.max(...rain.values,.01)*1.2;
  const x=t=>margin.left+(t/maxX)*plotW, yq=q=>margin.top+plotH-(q/maxQ)*plotH, yr=r=>margin.top+(r/maxRain)*(plotH*.28);
  ctx.strokeStyle='#e7edf1';ctx.lineWidth=1; for(let i=0;i<=5;i++){const yy=margin.top+plotH*i/5;ctx.beginPath();ctx.moveTo(margin.left,yy);ctx.lineTo(width-margin.right,yy);ctx.stroke();}
  ctx.fillStyle='#8192a1';ctx.font='11px system-ui';ctx.textAlign='center'; for(let i=0;i<=6;i++){const t=maxX*i/6;ctx.fillText(t.toFixed(1),x(t),height-12);} ctx.fillText('hours',margin.left+plotW/2,height-1);
  const yTop = margin.top, rainN = rain.values.length;
  if (rainN > 0) {
    const rainTimes = rain.timesHours, rainVals = rain.values;
    ctx.beginPath();
    ctx.moveTo(x(rainTimes[0]), yTop);
    ctx.lineTo(x(rainTimes[0]), yr(rainVals[0]));
    for (let i = 0; i < rainN; i++) {
      const xEnd = x(rainTimes[i + 1] ?? maxX);
      ctx.lineTo(xEnd, yr(rainVals[i]));
      if (i + 1 < rainN) ctx.lineTo(xEnd, yr(rainVals[i + 1]));
    }
    ctx.lineTo(x(maxX), yTop);
    ctx.closePath();
    ctx.fillStyle = 'rgba(38, 119, 184, 0.22)';
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(x(rainTimes[0]), yr(rainVals[0]));
    for (let i = 0; i < rainN; i++) {
      const xEnd = x(rainTimes[i + 1] ?? maxX);
      ctx.lineTo(xEnd, yr(rainVals[i]));
      if (i + 1 < rainN) ctx.lineTo(xEnd, yr(rainVals[i + 1]));
    }
    ctx.strokeStyle = '#89a5ba';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
  if(prev){ctx.setLineDash([7,5]);ctx.strokeStyle='#aeb9c1';ctx.lineWidth=2;ctx.beginPath();prev.values.forEach((v,i)=>{const xx=x(prev.timesHours[i]),yy=yq(v);if(i===0)ctx.moveTo(xx,yy);else ctx.lineTo(xx,yy);});ctx.stroke();ctx.setLineDash([]);}
  ctx.strokeStyle='#2677b8';ctx.lineWidth=2.8;ctx.beginPath();cur.values.forEach((v,i)=>{const xx=x(cur.timesHours[i]),yy=yq(v);if(i===0)ctx.moveTo(xx,yy);else ctx.lineTo(xx,yy);});ctx.stroke();
  ctx.fillStyle='#8192a1';ctx.textAlign='left';ctx.fillText(`${maxQ.toFixed(2)} cfs`,6,margin.top+8);ctx.fillText(`${maxRain.toFixed(2)} in/hr`,6,margin.top+26);
}

window.addEventListener('resize', drawChart);
window.addEventListener('pagehide', () => swmm.dispose(), { once:true });

async function init() {
  renderPresets(); renderAllStatic();
  try {
    const engine = await swmm.ready(); ready = true;
    els.engine.classList.add('ready'); els.engine.innerHTML = `<span class="dot"></span><span>SWMM5 ${engine.version}</span>`;
    runCurrent();
  } catch (error) {
    els.engine.classList.add('error'); els.engine.innerHTML = '<span class="dot"></span><span>SWMM unavailable</span>';
    els.chartEmpty.textContent = 'Could not initialize SWMM5.';
  }
}
init();
