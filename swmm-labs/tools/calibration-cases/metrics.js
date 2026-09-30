function trap(values, stepSeconds) {
  let total = 0;
  for (let i = 1; i < values.length; i++) total += (values[i - 1] + values[i]) * 0.5 * stepSeconds;
  return total;
}

function peak(output) {
  let value = -Infinity, index = 0;
  output.values.forEach((v, i) => { if (v > value) { value = v; index = i; } });
  return { value, timeHours: output.timesHours[index] || 0 };
}

export function nse(targetValues, modelValues) {
  if (!targetValues.length || targetValues.length !== modelValues.length) return NaN;
  const mean = targetValues.reduce((a,b)=>a+b,0) / targetValues.length;
  let numerator = 0, denominator = 0;
  for (let i=0;i<targetValues.length;i++) { numerator += (modelValues[i]-targetValues[i])**2; denominator += (targetValues[i]-mean)**2; }
  return denominator === 0 ? (numerator === 0 ? 1 : NaN) : 1 - numerator/denominator;
}

export function calibrationDiagnostics(target, model, reportStepSeconds = 300) {
  if (!target?.values?.length || !model?.values?.length || target.values.length !== model.values.length) return null;
  const targetPeak = peak(target), modelPeak = peak(model);
  const targetVolume = trap(target.values, reportStepSeconds), modelVolume = trap(model.values, reportStepSeconds);
  const pct = (actual, reference) => reference === 0 ? 0 : ((actual-reference)/reference)*100;
  return {
    volumeErrorPct: pct(modelVolume, targetVolume),
    peakErrorPct: pct(modelPeak.value, targetPeak.value),
    timingErrorMinutes: (modelPeak.timeHours-targetPeak.timeHours)*60,
    nse: nse(target.values, model.values),
    targetPeak: targetPeak.value,
    modelPeak: modelPeak.value
  };
}
