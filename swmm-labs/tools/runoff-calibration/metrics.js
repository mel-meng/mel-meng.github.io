export function calibrationMetrics(target, current, reportStepSeconds = 300) {
  const n = Math.min(target.length, current.length);
  if (!n) return null;

  let sq = 0;
  let targetPeak = -Infinity;
  let currentPeak = -Infinity;
  let targetPeakIndex = 0;
  let currentPeakIndex = 0;
  let targetVolume = 0;
  let currentVolume = 0;

  for (let i = 0; i < n; i++) {
    const t = Number(target[i].runoff || 0);
    const c = Number(current[i].runoff || 0);
    sq += (c - t) ** 2;
    targetVolume += t * reportStepSeconds;
    currentVolume += c * reportStepSeconds;
    if (t > targetPeak) { targetPeak = t; targetPeakIndex = i; }
    if (c > currentPeak) { currentPeak = c; currentPeakIndex = i; }
  }

  const rmse = Math.sqrt(sq / n);
  const nrmse = targetPeak > 0 ? rmse / targetPeak : 0;
  const peakErrorPct = targetPeak ? ((currentPeak - targetPeak) / targetPeak) * 100 : 0;
  const volumeErrorPct = targetVolume ? ((currentVolume - targetVolume) / targetVolume) * 100 : 0;
  const timingErrorMinutes = ((currentPeakIndex - targetPeakIndex) * reportStepSeconds) / 60;
  const score = Math.max(0, Math.min(100, 100 * (1 - 1.8 * nrmse)));

  return { rmse, nrmse, peakErrorPct, volumeErrorPct, timingErrorMinutes, score, targetPeak, currentPeak };
}
