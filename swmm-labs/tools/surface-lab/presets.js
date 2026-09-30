export const PRESETS = Object.freeze([
  Object.freeze({
    id: 'lawn',
    label: 'Lawn',
    description: 'Illustrative pervious starting point',
    values: Object.freeze({
      surfaceType: 'A1', widthFt: 220, slopePct: 2.0, nPerv: 0.15,
      dstorePervIn: 0.18, suctionIn: 4.0, ksatInHr: 0.30, imd: 0.25
    })
  }),
  Object.freeze({
    id: 'roof',
    label: 'Roof',
    description: 'Illustrative directly drained impervious surface',
    values: Object.freeze({
      surfaceType: 'A3', widthFt: 260, slopePct: 3.0, nImperv: 0.012
    })
  }),
  Object.freeze({
    id: 'driveway',
    label: 'Driveway',
    description: 'Illustrative impervious surface with small storage',
    values: Object.freeze({
      surfaceType: 'A2', widthFt: 180, slopePct: 2.0, nImperv: 0.014, dstoreImpervIn: 0.05
    })
  }),
  Object.freeze({
    id: 'parking',
    label: 'Parking lot',
    description: 'Illustrative broad impervious surface with storage',
    values: Object.freeze({
      surfaceType: 'A2', widthFt: 420, slopePct: 1.2, nImperv: 0.016, dstoreImpervIn: 0.07
    })
  })
]);

export function getPreset(id) {
  return PRESETS.find((preset) => preset.id === id) || null;
}
