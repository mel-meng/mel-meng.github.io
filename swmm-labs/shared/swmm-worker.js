importScripts('./out-reader.js', './swmm-runtime.js');

function serializeError(error) {
  return {
    message: error instanceof Error ? error.message : String(error),
    code: error && error.code ? String(error.code) : 'SWMM_UNKNOWN_ERROR',
    detail: error && error.detail ? String(error.detail) : '',
    report: error && error.report ? String(error.report) : ''
  };
}

self.onmessage = async (event) => {
  const message = event.data || {};
  const requestId = message.requestId;

  try {
    if (message.type === 'init') {
      const engine = await self.SwmmRuntime.ready();
      self.postMessage({ type: 'ready', requestId, engine });
      return;
    }

    if (message.type === 'run') {
      const result = await self.SwmmRuntime.run(message.inp, message.outputs);
      self.postMessage({ type: 'result', requestId, result });
      return;
    }

    throw Object.assign(new Error(`Unsupported worker message type: ${message.type}`), {
      code: 'SWMM_BAD_MESSAGE'
    });
  } catch (error) {
    self.postMessage({
      type: 'error',
      requestId,
      error: serializeError(error)
    });
  }
};
