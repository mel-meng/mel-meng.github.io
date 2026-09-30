import { calculateAnatomy, DEFAULT_INPUTS } from './model.js';

export function createState(inputs = DEFAULT_INPUTS) {
  const current = calculateAnatomy(inputs);
  return {
    inputs: { ...current.inputs },
    current,
    previous: current,
    activeParameter: null,
  };
}

export function beginInteraction(state, parameter) {
  if (state.activeParameter === parameter) return state;
  return {
    ...state,
    previous: state.current,
    activeParameter: parameter,
  };
}

export function updateInput(state, key, value) {
  const inputs = { ...state.inputs, [key]: value };
  return {
    ...state,
    inputs,
    current: calculateAnatomy(inputs),
  };
}

export function endInteraction(state) {
  if (state.activeParameter === null) return state;
  return { ...state, activeParameter: null };
}
