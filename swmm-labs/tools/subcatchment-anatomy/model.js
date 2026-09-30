const SQFT_PER_ACRE = 43560;

export function calculateAnatomy({
  areaAc = 1,
  imperviousPct = 50,
  zeroImperviousPct = 20,
  widthFt = 600,
} = {}) {
  if (!(areaAc > 0)) throw new RangeError('areaAc must be greater than 0');
  if (!(widthFt > 0)) throw new RangeError('widthFt must be greater than 0');
  if (imperviousPct < 0 || imperviousPct > 100) {
    throw new RangeError('imperviousPct must be between 0 and 100');
  }
  if (zeroImperviousPct < 0 || zeroImperviousPct > 100) {
    throw new RangeError('zeroImperviousPct must be between 0 and 100');
  }

  const I = imperviousPct / 100;
  const Z = zeroImperviousPct / 100;
  const totalSqFt = areaAc * SQFT_PER_ACRE;

  const fractions = {
    A1: 1 - I,
    A2: I * (1 - Z),
    A3: I * Z,
  };

  const surfaces = Object.fromEntries(
    Object.entries(fractions).map(([key, fraction]) => {
      const area = areaAc * fraction;
      const areaSqFt = totalSqFt * fraction;
      const lengthFt = areaSqFt / widthFt;
      return [key, { fraction, areaAc: area, areaSqFt, lengthFt, widthFt }];
    }),
  );

  return {
    inputs: { areaAc, imperviousPct, zeroImperviousPct, widthFt },
    total: {
      areaAc,
      areaSqFt: totalSqFt,
      widthFt,
      lengthFt: totalSqFt / widthFt,
    },
    surfaces,
  };
}

export const DEFAULT_INPUTS = Object.freeze({
  areaAc: 1,
  imperviousPct: 50,
  zeroImperviousPct: 20,
  widthFt: 600,
});
