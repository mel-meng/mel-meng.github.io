import { createSwmmClient, isSwmmRunSuperseded } from '../../shared/swmm-client.js';
import { calibrationMetrics } from './metrics.js';
import { buildSwmmInp, INITIAL_PARAMS, OBJECTS, TARGET_PARAMS } from './model.js';

const PARAMS = [
  { key: 'imperv', label: '% Imperviousness', min: 10, max: 90, step: 1, unit: '%', decimals: 0 },
  { key: 'width', label: 'Subcatchment width', min: 100, max: 700, step: 10, unit: 'm', decimals: 0 },
  { key: 'nPerv', label: "Manning's n (pervious)", min: 0.05, max: 0.45, step: 0.01, unit: '', decimals: 2 },
  { key: 'ksat', label: 'Green-Ampt Ksat', min: 2, max: 35, step: 0.5, unit: 'mm/hr', decimals: 1 }
];

const RUNOFF_OUTPUTS = Object.freeze([
  Object.freeze({
    key: 'runoff',
    objectType: 'subcatchment',
    objectId: OBJECTS.catchment,
    variable: 'runoff'
  })
]);

const controlsRoot = document.querySelector('#controls');
const resetButton = document.querySelector('#resetButton');
const revealButton = document.querySelector('#revealButton');
const targetValues = document.querySelector('#targetValues');
const engineBadge = document.querySelector('#engineBadge');
const runStatus = document.querySelector('#runStatus');
const runtime = document.querySelector('#runtime');
const reportStep = document.querySelector('#reportStep');
const flowUnits = document.querySelector('#flowUnits');
const chartEmpty = document.querySelector('#chartEmpty');
const canvas = document.querySelector('#hydrograph');
const ctx = canvas.getContext('2d');

const metricEls = {
  scoreValue: document.querySelector('#scoreValue'),
  scoreRing: document.querySelector('#scoreRing'),
  peakError: document.querySelector('#peakError'),
  volumeError: document.querySelector('#volumeError'),
  timingError: document.querySelector('#timingError'),
  nrmse: document.querySelector('#nrmse')
};

const swmm = createSwmmClient();
let params = { ...INITIAL_PARAMS };
let targetSeries = [];
let displayedSeries = [];
let reportStepSeconds = 300;
let ready = false;
let debounceTimer = null;
let animationFrame = null;
let animationStart = 0;
let animationFrom = [];
let animationTo = [];

function fmt(value, decimals = 0) {
  return Number(value).toFixed(decimals);
}

function signed(value, digits = 1, suffix = '') {
  const n = Number(value);
  const prefix = n > 0 ? '+' : '';
  return `${prefix}${n.toFixed(digits)}${suffix}`;
}

function toChartSeries(output) {
  return output.values.map((runoff, i) => ({
    timeHours: output.timesHours[i],
    runoff
  }));
}

function renderControls() {
  controlsRoot.innerHTML = PARAMS.map((config) => `
    <div class="control">
      <div class="control-head">
        <label for="${config.key}">${config.label}</label>
        <span class="value-box" id="${config.key}-value">${fmt(params[config.key], config.decimals)} ${config.unit}</span>
      </div>
      <div class="range-row">
        <span>${config.min}</span>
        <input id="${config.key}" type="range" min="${config.min}" max="${config.max}" step="${config.step}" value="${params[config.key]}" disabled />
        <span>${config.max}</span>
      </div>
    </div>
  `).join('');

  for (const config of PARAMS) {
    const input = document.querySelector(`#${config.key}`);
    input.addEventListener('input', () => {
      params[config.key] = Number(input.value);
      document.querySelector(`#${config.key}-value`).textContent = `${fmt(params[config.key], config.decimals)} ${config.unit}`.trim();
      queueRun();
    });
  }
}

function setControlsEnabled(enabled) {
  for (const config of PARAMS) document.querySelector(`#${config.key}`).disabled = !enabled;
  resetButton.disabled = !enabled;
}

function syncControls() {
  for (const config of PARAMS) {
    const input = document.querySelector(`#${config.key}`);
    input.value = params[config.key];
    document.querySelector(`#${config.key}-value`).textContent = `${fmt(params[config.key], config.decimals)} ${config.unit}`.trim();
  }
}

function updateEngineBadge(engine) {
  engineBadge.className = 'engine-badge ready';
  engineBadge.innerHTML = `<span class="dot"></span><span>SWMM5 ${engine.version}</span>`;
}

function showFatalError(error) {
  engineBadge.className = 'engine-badge error';
  engineBadge.innerHTML = '<span class="dot"></span><span>SWMM5 WASM unavailable</span>';
  runStatus.textContent = 'Error';
  chartEmpty.style.display = 'grid';
  chartEmpty.textContent = 'Could not load or run SWMM5. Check the browser console and vendored SWMM assets.';
  console.error(error);
  if (error?.report) console.error(error.report);
}

function updateMetrics(currentSeries) {
  const metrics = calibrationMetrics(targetSeries, currentSeries, reportStepSeconds);
  if (!metrics) return;
  const score = Math.round(metrics.score);
  metricEls.scoreValue.textContent = `${score}%`;
  metricEls.scoreRing.style.setProperty('--score-deg', `${score * 3.6}deg`);
  metricEls.peakError.textContent = signed(metrics.peakErrorPct, 1, '%');
  metricEls.volumeError.textContent = signed(metrics.volumeErrorPct, 1, '%');
  metricEls.timingError.textContent = signed(metrics.timingErrorMinutes, 0, ' min');
  metricEls.nrmse.textContent = metrics.nrmse.toFixed(3);
}

function updateRunMetadata(result, status = 'Updated') {
  runtime.textContent = `${result.timing.runMs.toFixed(1)} ms`;
  reportStepSeconds = result.model.reportStepSeconds;
  reportStep.textContent = `${Math.round(reportStepSeconds / 60)} min`;
  flowUnits.textContent = result.model.flowUnits;
  runStatus.textContent = status;
}

async function runCurrent() {
  if (!ready) return;
  runStatus.textContent = 'Running SWMM...';
  try {
    const result = await swmm.run({
      inp: buildSwmmInp(params),
      outputs: RUNOFF_OUTPUTS
    });
    const currentSeries = toChartSeries(result.outputs.runoff);
    updateRunMetadata(result);
    updateMetrics(currentSeries);
    animateTo(currentSeries);
  } catch (error) {
    if (isSwmmRunSuperseded(error)) return;
    showFatalError(error);
  }
}

function queueRun() {
  runStatus.textContent = 'Queued';
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(runCurrent, 100);
}

function seriesValues(series) {
  return series.map((point) => point.runoff);
}

function animateTo(newSeries) {
  if (!displayedSeries.length || displayedSeries.length !== newSeries.length) {
    displayedSeries = newSeries.map((p) => ({ ...p }));
    drawChart(displayedSeries);
    return;
  }

  if (animationFrame) cancelAnimationFrame(animationFrame);
  animationFrom = displayedSeries.map((p) => ({ ...p }));
  animationTo = newSeries.map((p) => ({ ...p }));
  animationStart = performance.now();
  const duration = 360;

  const tick = (now) => {
    const raw = Math.min(1, (now - animationStart) / duration);
    const eased = 1 - Math.pow(1 - raw, 3);
    displayedSeries = animationTo.map((point, i) => ({
      timeHours: point.timeHours,
      runoff: animationFrom[i].runoff + (point.runoff - animationFrom[i].runoff) * eased
    }));
    drawChart(displayedSeries);
    if (raw < 1) animationFrame = requestAnimationFrame(tick);
  };
  animationFrame = requestAnimationFrame(tick);
}

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = window.devicePixelRatio || 1;
  const w = Math.max(1, Math.round(rect.width * dpr));
  const h = Math.max(1, Math.round(rect.height * dpr));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return { width: rect.width, height: rect.height };
}

function drawChart(current) {
  if (!targetSeries.length || !current.length) return;
  const { width, height } = resizeCanvas();
  ctx.clearRect(0, 0, width, height);

  const margin = { left: 66, right: 24, top: 32, bottom: 52 };
  const plotW = width - margin.left - margin.right;
  const plotH = height - margin.top - margin.bottom;
  const targetValuesArray = seriesValues(targetSeries);
  const currentValues = seriesValues(current);
  const maxY = Math.max(...targetValuesArray, ...currentValues, 0.001) * 1.16;
  const maxX = Math.max(targetSeries.at(-1).timeHours, current.at(-1).timeHours, 1);
  const x = (hours) => margin.left + (hours / maxX) * plotW;
  const y = (flow) => margin.top + plotH - (flow / maxY) * plotH;

  ctx.font = '11px Inter, system-ui, sans-serif';
  ctx.textBaseline = 'middle';
  ctx.lineWidth = 1;
  ctx.strokeStyle = '#e6edf2';
  ctx.fillStyle = '#728496';

  for (let i = 0; i <= 6; i++) {
    const value = (maxY / 6) * i;
    const yy = y(value);
    ctx.beginPath(); ctx.moveTo(margin.left, yy); ctx.lineTo(width - margin.right, yy); ctx.stroke();
    ctx.textAlign = 'right'; ctx.fillText(value.toFixed(maxY < 1 ? 2 : 1), margin.left - 10, yy);
  }
  for (let i = 0; i <= 6; i++) {
    const hours = (maxX / 6) * i;
    const xx = x(hours);
    ctx.beginPath(); ctx.moveTo(xx, margin.top); ctx.lineTo(xx, margin.top + plotH); ctx.stroke();
    ctx.textAlign = 'center'; ctx.fillText(hours.toFixed(hours % 1 ? 1 : 0), xx, margin.top + plotH + 22);
  }

  ctx.strokeStyle = '#95a6b5';
  ctx.beginPath();
  ctx.moveTo(margin.left, margin.top);
  ctx.lineTo(margin.left, margin.top + plotH);
  ctx.lineTo(width - margin.right, margin.top + plotH);
  ctx.stroke();

  ctx.save();
  ctx.translate(18, margin.top + plotH / 2);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#536a7d';
  ctx.textAlign = 'center';
  ctx.font = '12px Inter, system-ui, sans-serif';
  ctx.fillText('Runoff flow', 0, 0);
  ctx.restore();
  ctx.textAlign = 'center';
  ctx.fillText('Time (hours)', margin.left + plotW / 2, height - 14);

  ctx.beginPath();
  targetSeries.forEach((point, i) => {
    const xx = x(point.timeHours), yy = y(point.runoff);
    if (i === 0) ctx.moveTo(xx, yy); else ctx.lineTo(xx, yy);
  });
  for (let i = current.length - 1; i >= 0; i--) ctx.lineTo(x(current[i].timeHours), y(current[i].runoff));
  ctx.closePath();
  ctx.fillStyle = 'rgba(225, 84, 99, 0.12)';
  ctx.fill();

  ctx.setLineDash([8, 5]);
  ctx.strokeStyle = '#17233d';
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  targetSeries.forEach((point, i) => {
    if (i === 0) ctx.moveTo(x(point.timeHours), y(point.runoff));
    else ctx.lineTo(x(point.timeHours), y(point.runoff));
  });
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.strokeStyle = '#1778e8';
  ctx.lineWidth = 3;
  ctx.beginPath();
  current.forEach((point, i) => {
    if (i === 0) ctx.moveTo(x(point.timeHours), y(point.runoff));
    else ctx.lineTo(x(point.timeHours), y(point.runoff));
  });
  ctx.stroke();
}

resetButton.addEventListener('click', () => {
  params = { ...INITIAL_PARAMS };
  syncControls();
  queueRun();
});

revealButton.addEventListener('click', () => {
  targetValues.classList.toggle('hidden');
  const visible = !targetValues.classList.contains('hidden');
  revealButton.textContent = visible ? 'Hide target values' : 'Reveal target values';
  targetValues.innerHTML = PARAMS.map((config) => `
    <div><span>${config.label}</span><strong>${fmt(TARGET_PARAMS[config.key], config.decimals)} ${config.unit}</strong></div>
  `).join('');
});

window.addEventListener('resize', () => drawChart(displayedSeries));
window.addEventListener('pagehide', () => swmm.dispose(), { once: true });

async function initialize() {
  renderControls();
  setControlsEnabled(false);

  try {
    const engine = await swmm.ready();
    updateEngineBadge(engine);

    runStatus.textContent = 'Building target...';
    const targetResult = await swmm.run({
      inp: buildSwmmInp(TARGET_PARAMS),
      outputs: RUNOFF_OUTPUTS
    });
    targetSeries = toChartSeries(targetResult.outputs.runoff);

    runStatus.textContent = 'Running initial model...';
    const currentResult = await swmm.run({
      inp: buildSwmmInp(params),
      outputs: RUNOFF_OUTPUTS
    });
    const currentSeries = toChartSeries(currentResult.outputs.runoff);

    ready = true;
    chartEmpty.style.display = 'none';
    setControlsEnabled(true);
    updateRunMetadata(currentResult, 'Ready');
    updateMetrics(currentSeries);
    animateTo(currentSeries);
  } catch (error) {
    showFatalError(error);
  }
}

initialize();
