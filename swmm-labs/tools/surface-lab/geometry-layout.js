/** Schematic geometry layout for Surface Lab SVG (no DOM). */

export const DSTORE_MAX_A1_IN = 0.35;
export const DSTORE_MAX_A2_IN = 0.18;

const POCKET_MAX_H_PX = 14;
const POCKET_MAX_W_PX = 6;
const POCKET_MIN_W_PX = 3;
const POCKET_MIN_H_PX = 1;

export function depressionStorageMaxIn(surfaceType) {
  if (surfaceType === 'A1') return DSTORE_MAX_A1_IN;
  if (surfaceType === 'A2') return DSTORE_MAX_A2_IN;
  return 0;
}

export function profileDropPx(rectW, slopePct) {
  const raw = rectW * (slopePct / 100);
  if (slopePct <= 0) return 0;
  return Math.max(1, raw);
}

export function profileBandY({ y, rectH, profileGap, dropPx, geometryFooter }) {
  const profileTop = y + rectH + profileGap;
  const triTopY = profileTop;
  const triBaseY = profileTop + dropPx;
  const viewHeight = Math.ceil(triBaseY + geometryFooter);
  return { profileTop, triTopY, triBaseY, viewHeight };
}

export function depressionPocketSize(dstoreIn, dstoreMaxIn) {
  if (dstoreIn <= 0 || dstoreMaxIn <= 0) return null;
  const ratio = Math.min(1, dstoreIn / dstoreMaxIn);
  const h = Math.max(POCKET_MIN_H_PX, ratio * POCKET_MAX_H_PX);
  const w = Math.max(POCKET_MIN_W_PX, ratio * POCKET_MAX_W_PX);
  return { w, h };
}
