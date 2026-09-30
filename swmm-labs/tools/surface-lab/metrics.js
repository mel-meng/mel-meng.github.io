function trapezoid(values, stepHours) {
  if (!Array.isArray(values) || values.length < 2) return 0;
  let total = 0;
  for (let i = 1; i < values.length; i++) total += (values[i - 1] + values[i]) * 0.5 * stepHours;
  return total;
}

export function runoffMetrics(runoffOutput, areaAc, reportStepSeconds) {
  const values = runoffOutput?.values || [];
  const times = runoffOutput?.timesHours || [];
  if (!values.length) return null;

  let peak = -Infinity;
  let peakIndex = 0;
  values.forEach((value, index) => {
    if (value > peak) { peak = value; peakIndex = index; }
  });

  const stepSeconds = Number(reportStepSeconds) || 300;
  const volumeFt3 = trapezoid(values, stepSeconds / 3600) * 3600;
  const runoffDepthIn = (volumeFt3 / (Number(areaAc) * 43560)) * 12;

  return {
    peakCfs: peak,
    peakTimeHours: times[peakIndex] || 0,
    runoffDepthIn
  };
}

export function integrateRateDepth(output, reportStepSeconds) {
  const values = output?.values || [];
  return trapezoid(values, (Number(reportStepSeconds) || 300) / 3600);
}
