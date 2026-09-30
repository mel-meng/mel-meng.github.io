export function evaluateEvidence(caseDef, params) {
  const checks = Object.entries(caseDef.editable).filter(([,def]) => def.evidenceRange).map(([key,def]) => {
    const [min,max] = def.evidenceRange;
    const value = Number(params[key]);
    return { key, label:def.label, value, min, max, passed:value >= min && value <= max };
  });
  return { passed: checks.every((check) => check.passed), checks };
}

export function evaluateFit(caseDef, diagnostics) {
  if (!diagnostics) return { passed:false, checks:[] };
  const t = caseDef.thresholds;
  const checks = [
    { key:'volume', label:'Volume error', value:Math.abs(diagnostics.volumeErrorPct), limit:t.volumePct, passed:Math.abs(diagnostics.volumeErrorPct) <= t.volumePct },
    { key:'peak', label:'Peak error', value:Math.abs(diagnostics.peakErrorPct), limit:t.peakPct, passed:Math.abs(diagnostics.peakErrorPct) <= t.peakPct },
    { key:'timing', label:'Peak timing error', value:Math.abs(diagnostics.timingErrorMinutes), limit:t.timingMin, passed:Math.abs(diagnostics.timingErrorMinutes) <= t.timingMin },
    { key:'nse', label:'NSE', value:diagnostics.nse, limit:t.nse, passed:diagnostics.nse >= t.nse }
  ];
  return { passed:checks.every((check)=>check.passed), checks };
}

export function evaluateCase(caseDef, params, diagnostics) {
  const fit = evaluateFit(caseDef, diagnostics);
  const evidence = evaluateEvidence(caseDef, params);
  return { fit, evidence, complete:fit.passed && evidence.passed };
}
