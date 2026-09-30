const COMMON = Object.freeze({
  areaAc: 4.7,
  impervPct: 45,
  zeroImpervPct: 25,
  widthFt: 420,
  slopePct: 1.4,
  nImperv: 0.015,
  nPerv: 0.20,
  dstoreImpervIn: 0.06,
  dstorePervIn: 0.20,
  suctionIn: 4.0,
  ksatInHr: 0.28,
  imd: 0.25
});

function params(overrides) { return Object.freeze({ ...COMMON, ...overrides }); }
function edit(label, min, max, step, unit, evidenceRange) {
  return Object.freeze({ label, min, max, step, unit, ...(evidenceRange ? { evidenceRange: Object.freeze(evidenceRange) } : {}) });
}

export const CASES = Object.freeze([
  Object.freeze({
    id: 'routing',
    title: 'Routing mismatch',
    kicker: 'Case 1 · Residential drainage area',
    story: 'Area, rainfall, and surface composition are reasonably well established. The starting model has roughly the right runoff volume, but the response is too slow and too flat.',
    task: 'Improve peak and timing while preserving the already-useful volume behavior.',
    confidence: Object.freeze({
      known: ['Area: 4.7 ac', 'Rainfall: monitored event'],
      reasonable: ['Imperviousness: 42%', 'Slope: about 1.4%'],
      uncertain: ['Equivalent Width', 'Pervious surface roughness']
    }),
    baseline: params({ impervPct: 42, zeroImpervPct: 25, widthFt: 620, nPerv: 0.30, ksatInHr: 0.24 }),
    target: params({ impervPct: 42, zeroImpervPct: 25, widthFt: 330, nPerv: 0.17, ksatInHr: 0.24 }),
    editable: Object.freeze({
      widthFt: edit('Width', 180, 700, 10, 'ft', [260, 430]),
      nPerv: edit("Manning's n (pervious)", 0.08, 0.36, 0.01, '', [0.12, 0.24])
    }),
    thresholds: Object.freeze({ volumePct: 4, peakPct: 8, timingMin: 10, nse: 0.96 }),
    hints: Object.freeze([
      'Start with the mismatch: volume is already close, while peak and timing are not.',
      'That points toward surface-routing behavior rather than a major change in losses.',
      'Width and surface roughness are the intended parameters to investigate in this case.'
    ])
  }),
  Object.freeze({
    id: 'composition',
    title: 'Impervious composition',
    kicker: 'Case 2 · Commercial parcel',
    story: 'Aerial review shows extensive roofs and parking. The starting model misses the fast runoff response and under-predicts event volume.',
    task: 'Represent the amount and directness of impervious response while staying consistent with site evidence.',
    confidence: Object.freeze({
      known: ['Area: 4.7 ac', 'Rainfall: monitored event'],
      reasonable: ['Impervious cover: roughly 65–78%', 'Equivalent Width: about 280–420 ft'],
      uncertain: ['Fraction of impervious area with zero depression storage']
    }),
    baseline: params({ impervPct: 50, zeroImpervPct: 12, widthFt: 340, nPerv: 0.18, ksatInHr: 0.25 }),
    target: params({ impervPct: 72, zeroImpervPct: 55, widthFt: 340, nPerv: 0.18, ksatInHr: 0.25 }),
    editable: Object.freeze({
      impervPct: edit('% Impervious', 45, 85, 1, '%', [65, 78]),
      zeroImpervPct: edit('% Zero-Impervious', 0, 85, 1, '%', [35, 70]),
      widthFt: edit('Width', 240, 480, 10, 'ft', [280, 420])
    }),
    thresholds: Object.freeze({ volumePct: 4, peakPct: 8, timingMin: 10, nse: 0.96 }),
    hints: Object.freeze([
      'The starting model is missing both runoff volume and the fast response.',
      'Use the Anatomy idea: total imperviousness controls A1 versus A2+A3; %Zero divides A2 versus A3.',
      'Aerial and connection evidence should constrain how far you move those composition parameters.'
    ])
  }),
  Object.freeze({
    id: 'losses',
    title: 'Loss mismatch',
    kicker: 'Case 3 · Partly pervious basin',
    story: 'The observed hydrograph has substantially more runoff volume than the starting model. Timing is not the dominant problem. Soil information suggests relatively low infiltration capacity after wet antecedent conditions.',
    task: 'Correct the loss representation without using routing geometry as a substitute.',
    confidence: Object.freeze({
      known: ['Area: 4.7 ac', 'Imperviousness: 22%', 'Width: 390 ft'],
      reasonable: ['Soil is moderately low-permeability', 'Wet antecedent condition'],
      uncertain: ['Green-Ampt conductivity', 'Pervious depression storage']
    }),
    baseline: params({ impervPct: 22, zeroImpervPct: 20, widthFt: 390, nPerv: 0.18, ksatInHr: 0.72, dstorePervIn: 0.08 }),
    target: params({ impervPct: 22, zeroImpervPct: 20, widthFt: 390, nPerv: 0.18, ksatInHr: 0.16, dstorePervIn: 0.20 }),
    editable: Object.freeze({
      ksatInHr: edit('Green-Ampt Ksat', 0.05, 0.90, 0.01, 'in/hr', [0.10, 0.30]),
      dstorePervIn: edit('Pervious depression storage', 0.02, 0.35, 0.01, 'in', [0.12, 0.28])
    }),
    thresholds: Object.freeze({ volumePct: 4, peakPct: 10, timingMin: 15, nse: 0.95 }),
    hints: Object.freeze([
      'The largest error is event volume, not simply peak timing.',
      'Investigate rainfall losses on the pervious part of the basin.',
      'Green-Ampt conductivity and pervious depression storage are the intended levers here.'
    ])
  }),
  Object.freeze({
    id: 'ambiguous',
    title: 'A good fit is not enough',
    kicker: 'Case 4 · Ambiguous calibration',
    story: 'Several combinations of composition and routing can approach the target hydrograph. Independent site evidence is therefore part of the acceptance test.',
    task: 'Find a strong fit that is also consistent with aerial and field evidence.',
    confidence: Object.freeze({
      known: ['Area: 4.7 ac', 'Rainfall: monitored event'],
      reasonable: ['Impervious cover: 57–64%', 'Width: 260–420 ft'],
      uncertain: ['Directly connected/zero-storage impervious fraction']
    }),
    baseline: params({ impervPct: 49, zeroImpervPct: 18, widthFt: 540, nPerv: 0.19, ksatInHr: 0.26 }),
    target: params({ impervPct: 61, zeroImpervPct: 46, widthFt: 325, nPerv: 0.19, ksatInHr: 0.26 }),
    editable: Object.freeze({
      impervPct: edit('% Impervious', 42, 76, 1, '%', [57, 64]),
      zeroImpervPct: edit('% Zero-Impervious', 0, 85, 1, '%', [32, 62]),
      widthFt: edit('Width', 190, 680, 10, 'ft', [260, 420])
    }),
    thresholds: Object.freeze({ volumePct: 5, peakPct: 9, timingMin: 10, nse: 0.95 }),
    hints: Object.freeze([
      'Do not optimize the hydrograph in isolation; look at the evidence ranges beside the controls.',
      'Different combinations of impervious response and routing geometry can partially compensate for each other.',
      'A complete solution must satisfy both the fit thresholds and the independent evidence constraints.'
    ])
  })
]);

export function getCase(id) { return CASES.find((item) => item.id === id) || CASES[0]; }
