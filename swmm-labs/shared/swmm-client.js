export class SwmmRunSupersededError extends Error {
  constructor() {
    super('SWMM run was superseded by a newer request.');
    this.name = 'SwmmRunSupersededError';
    this.code = 'SWMM_RUN_SUPERSEDED';
  }
}

export function isSwmmRunSuperseded(error) {
  return error instanceof SwmmRunSupersededError || error?.code === 'SWMM_RUN_SUPERSEDED';
}

function toError(payload = {}) {
  const error = new Error(payload.message || 'SWMM worker failed.');
  error.name = 'SwmmError';
  error.code = payload.code || 'SWMM_UNKNOWN_ERROR';
  if (payload.detail) error.detail = payload.detail;
  if (payload.report) error.report = payload.report;
  return error;
}

export function createSwmmClient(options = {}) {
  const workerUrl = options.workerUrl || new URL('./swmm-worker.js', import.meta.url);
  const workerFactory = options.workerFactory || ((url) => new Worker(url));
  const worker = workerFactory(workerUrl);

  let disposed = false;
  let nextRequestId = 1;
  let latestGeneration = 0;
  let activeJob = null;
  let queuedJob = null;

  let resolveReady;
  let rejectReady;
  const readyPromise = new Promise((resolve, reject) => {
    resolveReady = resolve;
    rejectReady = reject;
  });

  worker.postMessage({ type: 'init', requestId: 0 });

  function rejectJob(job, error) {
    if (!job) return;
    job.reject(error);
  }

  function start(job) {
    activeJob = job;
    worker.postMessage({
      type: 'run',
      requestId: job.requestId,
      inp: job.request.inp,
      outputs: job.request.outputs || []
    });
  }

  function launchQueued() {
    activeJob = null;
    if (!queuedJob || disposed) return;
    const next = queuedJob;
    queuedJob = null;
    start(next);
  }

  worker.onmessage = (event) => {
    const message = event.data || {};

    if (message.type === 'ready' && message.requestId === 0) {
      resolveReady(message.engine);
      return;
    }

    if (message.type === 'error' && message.requestId === 0) {
      rejectReady(toError(message.error));
      return;
    }

    if (!activeJob || message.requestId !== activeJob.requestId) return;
    const job = activeJob;

    if (message.type === 'error') {
      if (job.generation < latestGeneration) job.reject(new SwmmRunSupersededError());
      else job.reject(toError(message.error));
      launchQueued();
      return;
    }

    if (message.type === 'result') {
      if (job.generation < latestGeneration) job.reject(new SwmmRunSupersededError());
      else job.resolve(message.result);
      launchQueued();
    }
  };

  worker.onerror = (event) => {
    const error = new Error(event.message || 'SWMM worker crashed.');
    error.name = 'SwmmWorkerError';
    error.code = 'SWMM_WORKER_CRASH';
    rejectReady(error);
    rejectJob(activeJob, error);
    rejectJob(queuedJob, error);
    activeJob = null;
    queuedJob = null;
  };

  async function run(request) {
    if (disposed) throw new Error('SWMM client has been disposed.');
    await readyPromise;
    if (disposed) throw new Error('SWMM client has been disposed.');
    if (!request || typeof request.inp !== 'string') throw new TypeError('swmm.run() requires { inp, outputs? }.');

    const generation = ++latestGeneration;
    return new Promise((resolve, reject) => {
      const job = {
        generation,
        requestId: nextRequestId++,
        request,
        resolve,
        reject
      };

      if (!activeJob) {
        start(job);
        return;
      }

      if (queuedJob) queuedJob.reject(new SwmmRunSupersededError());
      queuedJob = job;
    });
  }

  function dispose() {
    if (disposed) return;
    disposed = true;
    const error = new Error('SWMM client was disposed.');
    error.code = 'SWMM_CLIENT_DISPOSED';
    rejectReady(error);
    rejectJob(activeJob, error);
    rejectJob(queuedJob, error);
    activeJob = null;
    queuedJob = null;
    worker.terminate();
  }

  return Object.freeze({
    ready: () => readyPromise,
    run,
    dispose
  });
}
