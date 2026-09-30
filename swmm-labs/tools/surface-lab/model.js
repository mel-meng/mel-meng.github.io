export const SURFACE_TYPES = Object.freeze({
  A1: 'A1',
  A2: 'A2',
  A3: 'A3'
});

export const OBJECTS = Object.freeze({ catchment: 'S1', outlet: 'OUT1' });
export const FIXED_AREA_AC = 1.0;

function pad2(n) {
  return String(n).padStart(2, '0');
}

function timeLabel(minutes) {
  return `${pad2(Math.floor(minutes / 60))}:${pad2(minutes % 60)}`;
}

// A simple synthetic teaching storm in inches/hour.
export function stormIntensity(hours) {
  const main = 1.65 * Math.exp(-0.5 * Math.pow((hours - 1.7) / 0.38, 2));
  const shoulder = 0.45 * Math.exp(-0.5 * Math.pow((hours - 2.45) / 0.62, 2));
  return main + shoulder;
}

function buildRainSeries() {
  const rows = [];
  for (let minutes = 0; minutes <= 240; minutes += 5) {
    rows.push(`STORM  01/01/2026  ${timeLabel(minutes)}  ${stormIntensity(minutes / 60).toFixed(4)}`);
  }
  return rows.join('\n');
}

function n(value, fallback) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function normalizeSurfaceParams(input = {}) {
  const surfaceType = Object.values(SURFACE_TYPES).includes(input.surfaceType) ? input.surfaceType : SURFACE_TYPES.A1;
  return {
    surfaceType,
    areaAc: FIXED_AREA_AC,
    widthFt: Math.max(20, n(input.widthFt, 220)),
    slopePct: Math.max(0.05, n(input.slopePct, 2.0)),
    nPerv: Math.max(0.001, n(input.nPerv, 0.15)),
    nImperv: Math.max(0.001, n(input.nImperv, 0.015)),
    dstorePervIn: Math.max(0, n(input.dstorePervIn, 0.18)),
    dstoreImpervIn: Math.max(0, n(input.dstoreImpervIn, 0.06)),
    suctionIn: Math.max(0.01, n(input.suctionIn, 4.0)),
    ksatInHr: Math.max(0.001, n(input.ksatInHr, 0.30)),
    imd: Math.min(1, Math.max(0, n(input.imd, 0.25)))
  };
}

export function equivalentLengthFt(params) {
  const p = normalizeSurfaceParams(params);
  return (p.areaAc * 43560) / p.widthFt;
}

export function buildSurfaceModel(input) {
  const p = normalizeSurfaceParams(input);
  const isA1 = p.surfaceType === SURFACE_TYPES.A1;
  const isA2 = p.surfaceType === SURFACE_TYPES.A2;
  const imperv = isA1 ? 0 : 100;
  const pctZero = p.surfaceType === SURFACE_TYPES.A3 ? 100 : 0;
  const dstoreImperv = isA2 ? p.dstoreImpervIn : 0;

  return {
    objects: OBJECTS,
    inp: `[TITLE]
;; Surface Lab - one idealized SWMM runoff surface

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
END_TIME             06:00:00
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
;;Name  Format     Interval  SCF   Source
RG1     INTENSITY  0:05      1.0   TIMESERIES STORM

[SUBCATCHMENTS]
;;Name  Rain Gage  Outlet  Area(ac)  %Imperv  Width(ft)  %Slope  CurbLen
${OBJECTS.catchment}      RG1        ${OBJECTS.outlet}    ${p.areaAc.toFixed(3)}      ${imperv.toFixed(2)}     ${p.widthFt.toFixed(2)}     ${p.slopePct.toFixed(3)}   0

[SUBAREAS]
;;Subcatchment  N-Imperv  N-Perv  S-Imperv(in)  S-Perv(in)  PctZero  RouteTo  PctRouted
${OBJECTS.catchment}              ${p.nImperv.toFixed(4)}     ${p.nPerv.toFixed(4)}  ${dstoreImperv.toFixed(4)}          ${p.dstorePervIn.toFixed(4)}       ${pctZero}       OUTLET   100

[INFILTRATION]
;;Subcatchment  Suction(in)  Ksat(in/hr)  IMD
${OBJECTS.catchment}              ${p.suctionIn.toFixed(4)}       ${p.ksatInHr.toFixed(4)}       ${p.imd.toFixed(4)}

[OUTFALLS]
;;Name  Elevation  Type  Stage Data  Gated
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
