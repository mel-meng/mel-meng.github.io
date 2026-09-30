export const TARGET_PARAMS = Object.freeze({
  imperv: 62,
  width: 280,
  nPerv: 0.18,
  ksat: 8
});

export const INITIAL_PARAMS = Object.freeze({
  imperv: 34,
  width: 520,
  nPerv: 0.31,
  ksat: 22
});

export const OBJECTS = Object.freeze({
  catchment: 'S1',
  outlet: 'OUT1'
});

function pad2(n) {
  return String(n).padStart(2, '0');
}

function formatTime(hours) {
  const totalMinutes = Math.round(hours * 60);
  const hh = Math.floor(totalMinutes / 60);
  const mm = totalMinutes % 60;
  return `${pad2(hh)}:${pad2(mm)}`;
}

export function stormIntensity(t) {
  const main = 44 * Math.exp(-0.5 * Math.pow((t - 2.25) / 0.48, 2));
  const shoulder = 12 * Math.exp(-0.5 * Math.pow((t - 3.35) / 0.72, 2));
  const ramp = Math.max(0, Math.min(1, t / 0.4));
  return (main + shoulder) * ramp;
}

function buildRainSeries() {
  const rows = [];
  for (let minutes = 0; minutes <= 360; minutes += 5) {
    const t = minutes / 60;
    const intensity = stormIntensity(t);
    rows.push(`STORM  01/01/2026  ${formatTime(t)}  ${intensity.toFixed(3)}`);
  }
  return rows.join('\n');
}

export function buildSwmmInp(params) {
  const p = {
    imperv: Number(params.imperv),
    width: Number(params.width),
    nPerv: Number(params.nPerv),
    ksat: Number(params.ksat)
  };

  return `[TITLE]
;; SWMM5 WASM runoff calibration tool - one subcatchment

[OPTIONS]
FLOW_UNITS           CMS
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
RULE_STEP            00:00:00
VARIABLE_STEP        0.75
LENGTHENING_STEP     0
MIN_SURFAREA         0
MAX_TRIALS           8
HEAD_TOLERANCE       0.0015
SYS_FLOW_TOL         5
LAT_FLOW_TOL         5
MINIMUM_STEP         0.5
THREADS              1

[EVAPORATION]
CONSTANT             0.0
DRY_ONLY             NO

[RAINGAGES]
;;Name  Format     Interval  SCF   Source
RG1     INTENSITY  0:05      1.0   TIMESERIES STORM

[SUBCATCHMENTS]
;;Name  Rain Gage  Outlet  Area(ha)  %Imperv  Width(m)  %Slope  CurbLen
${OBJECTS.catchment}      RG1        ${OBJECTS.outlet}    5.0       ${p.imperv.toFixed(2)}     ${p.width.toFixed(2)}    1.20    0

[SUBAREAS]
;;Subcatchment  N-Imperv  N-Perv  S-Imperv(mm)  S-Perv(mm)  PctZero  RouteTo  PctRouted
${OBJECTS.catchment}              0.015     ${p.nPerv.toFixed(4)}  1.5           4.0         25       OUTLET   100

[INFILTRATION]
;;Subcatchment  Suction(mm)  Ksat(mm/hr)  IMD
${OBJECTS.catchment}              110.0        ${p.ksat.toFixed(3)}        0.30

[OUTFALLS]
;;Name  Elevation  Type  Stage Data  Gated
${OBJECTS.outlet}    0.0        FREE              NO

[TIMESERIES]
;;Name  Date        Time   Value(mm/hr)
${buildRainSeries()}

[REPORT]
INPUT           NO
CONTROLS        NO
SUBCATCHMENTS   ALL
NODES           ALL
LINKS           ALL

[COORDINATES]
${OBJECTS.outlet}  0.0  0.0
`;
}
