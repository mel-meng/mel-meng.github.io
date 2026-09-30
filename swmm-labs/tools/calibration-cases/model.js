export const OBJECTS = Object.freeze({ catchment: 'S1', outlet: 'OUT1' });

function pad2(n) { return String(n).padStart(2, '0'); }
function timeLabel(minutes) { return `${pad2(Math.floor(minutes / 60))}:${pad2(minutes % 60)}`; }

export function stormIntensity(hours) {
  const main = 1.55 * Math.exp(-0.5 * Math.pow((hours - 2.0) / 0.46, 2));
  const shoulder = 0.52 * Math.exp(-0.5 * Math.pow((hours - 3.0) / 0.74, 2));
  return main + shoulder;
}

function buildRainSeries() {
  const rows = [];
  for (let minutes = 0; minutes <= 300; minutes += 5) {
    rows.push(`STORM  01/01/2026  ${timeLabel(minutes)}  ${stormIntensity(minutes / 60).toFixed(4)}`);
  }
  return rows.join('\n');
}

function finite(value, fallback) { const x = Number(value); return Number.isFinite(x) ? x : fallback; }

export function normalizeCalibrationParams(input = {}) {
  return {
    areaAc: Math.max(.01, finite(input.areaAc, 4.7)),
    impervPct: Math.min(100, Math.max(0, finite(input.impervPct, 45))),
    zeroImpervPct: Math.min(100, Math.max(0, finite(input.zeroImpervPct, 25))),
    widthFt: Math.max(20, finite(input.widthFt, 420)),
    slopePct: Math.max(.05, finite(input.slopePct, 1.4)),
    nImperv: Math.max(.001, finite(input.nImperv, .015)),
    nPerv: Math.max(.001, finite(input.nPerv, .20)),
    dstoreImpervIn: Math.max(0, finite(input.dstoreImpervIn, .06)),
    dstorePervIn: Math.max(0, finite(input.dstorePervIn, .20)),
    suctionIn: Math.max(.01, finite(input.suctionIn, 4)),
    ksatInHr: Math.max(.001, finite(input.ksatInHr, .28)),
    imd: Math.min(1, Math.max(0, finite(input.imd, .25)))
  };
}

export function buildCalibrationModel(input) {
  const p = normalizeCalibrationParams(input);
  return {
    objects: OBJECTS,
    inp: `[TITLE]
;; Calibration Cases - synthetic single-subcatchment teaching case

[OPTIONS]
FLOW_UNITS           CFS
INFILTRATION         GREEN_AMPT
FLOW_ROUTING         KINWAVE
LINK_OFFSETS         DEPTH
MIN_SLOPE            0
ALLOW_PONDING        NO
SKIP_STEADY_STATE    NO
START_DATE           01/01/2026
START_TIME           00:00:00
REPORT_START_DATE    01/01/2026
REPORT_START_TIME    00:00:00
END_DATE             01/01/2026
END_TIME             07:00:00
SWEEP_START          01/01
SWEEP_END            12/31
DRY_DAYS             0
REPORT_STEP          00:05:00
WET_STEP             00:01:00
DRY_STEP             00:05:00
ROUTING_STEP         0:00:30
VARIABLE_STEP        0.75
MINIMUM_STEP         0.5
THREADS              1

[EVAPORATION]
CONSTANT             0.0
DRY_ONLY             NO

[RAINGAGES]
RG1     INTENSITY  0:05      1.0   TIMESERIES STORM

[SUBCATCHMENTS]
;;Name  Rain Gage  Outlet  Area(ac)  %Imperv  Width(ft)  %Slope  CurbLen
${OBJECTS.catchment}      RG1        ${OBJECTS.outlet}    ${p.areaAc.toFixed(3)}      ${p.impervPct.toFixed(2)}     ${p.widthFt.toFixed(2)}     ${p.slopePct.toFixed(3)}   0

[SUBAREAS]
;;Subcatchment  N-Imperv  N-Perv  S-Imperv(in)  S-Perv(in)  PctZero  RouteTo  PctRouted
${OBJECTS.catchment}              ${p.nImperv.toFixed(4)}     ${p.nPerv.toFixed(4)}  ${p.dstoreImpervIn.toFixed(4)}          ${p.dstorePervIn.toFixed(4)}       ${p.zeroImpervPct.toFixed(2)}       OUTLET   100

[INFILTRATION]
;;Subcatchment  Suction(in)  Ksat(in/hr)  IMD
${OBJECTS.catchment}              ${p.suctionIn.toFixed(4)}       ${p.ksatInHr.toFixed(4)}       ${p.imd.toFixed(4)}

[OUTFALLS]
${OBJECTS.outlet}    0.0        FREE              NO

[TIMESERIES]
;;Name  Date        Time   Value(in/hr)
${buildRainSeries()}

[REPORT]
INPUT           NO
CONTROLS        NO
SUBCATCHMENTS   ALL
NODES           ALL
LINKS           ALL

[COORDINATES]
${OBJECTS.outlet}  0.0  0.0
`
  };
}
