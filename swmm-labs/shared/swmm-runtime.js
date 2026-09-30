(() => {
  let modulePromise = null;

  function engineAssetUrl(name) {
    return new URL(`../vendor/swmm5/${name}`, self.location.href).href;
  }

  function formatVersion(raw) {
    const text = String(raw);
    if (text.length >= 5) {
      return `${text[0]}.${Number(text.slice(1, 3))}.${Number(text.slice(3))}`;
    }
    return text;
  }

  function removeIfPresent(FS, path) {
    try { FS.unlink(path); } catch {}
  }

  function readReport(module, path) {
    try {
      return module.FS.readFile(path, { encoding: 'utf8' });
    } catch {
      return '';
    }
  }

  async function loadEngine() {
    if (modulePromise) return modulePromise;

    modulePromise = (async () => {
      importScripts(engineAssetUrl('swmm5.js'));
      if (typeof createSWMMModule !== 'function') {
        throw Object.assign(new Error('SWMM5 Emscripten loader did not expose createSWMMModule().'), {
          code: 'SWMM_LOADER_MISSING'
        });
      }

      const module = await createSWMMModule({
        locateFile: (name) => engineAssetUrl(name),
        print: () => {},
        printErr: (message) => console.debug('[SWMM]', message)
      });
      const rawVersion = module.ccall('swmm_getVersion', 'number', [], []);
      return { module, rawVersion, version: formatVersion(rawVersion) };
    })();

    try {
      return await modulePromise;
    } catch (error) {
      modulePromise = null;
      throw error;
    }
  }

  function normalizeOutputs(outputs) {
    if (!Array.isArray(outputs)) return [];
    return outputs.map((output) => ({ ...output }));
  }

  async function run(inp, outputs = []) {
    if (typeof inp !== 'string' || !inp.trim()) {
      throw Object.assign(new Error('SWMM run requires non-empty INP text.'), { code: 'SWMM_INP_REQUIRED' });
    }

    const { module, version } = await loadEngine();
    const unique = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const inpPath = `/model-${unique}.inp`;
    const rptPath = `/model-${unique}.rpt`;
    const outPath = `/model-${unique}.out`;

    try {
      module.FS.writeFile(inpPath, inp);
      const started = performance.now();
      const code = module.ccall(
        'swmm_run',
        'number',
        ['string', 'string', 'string'],
        [inpPath, rptPath, outPath]
      );
      const elapsedMs = performance.now() - started;
      const report = readReport(module, rptPath);

      if (code !== 0) {
        const error = new Error(`SWMM run failed with code ${code}.`);
        error.code = 'SWMM_RUN_FAILED';
        error.detail = `swmm_run returned ${code}`;
        error.report = report.slice(-4000);
        throw error;
      }

      let raw;
      try {
        raw = module.FS.readFile(outPath);
      } catch (cause) {
        const error = new Error('SWMM completed but model.out could not be read.');
        error.code = 'SWMM_OUT_MISSING';
        error.detail = cause instanceof Error ? cause.message : String(cause);
        error.report = report.slice(-4000);
        throw error;
      }

      const bytes = raw instanceof Uint8Array ? raw.slice() : new Uint8Array(raw);
      let reader;
      try {
        reader = self.SwmmOut.createSwmmOutReader(bytes);
      } catch (cause) {
        const error = new Error('SWMM completed but the binary output could not be parsed.');
        error.code = cause && cause.code ? cause.code : 'SWMM_OUT_PARSE_FAILED';
        error.detail = cause instanceof Error ? cause.message : String(cause);
        error.report = report.slice(-4000);
        throw error;
      }

      const metadata = reader.metadata();
      return {
        engine: { version },
        timing: { runMs: elapsedMs },
        model: {
          flowUnits: metadata.flowUnits,
          reportStepSeconds: metadata.reportStepSeconds,
          numPeriods: metadata.numPeriods
        },
        outputs: reader.getOutputs(normalizeOutputs(outputs))
      };
    } finally {
      removeIfPresent(module.FS, inpPath);
      removeIfPresent(module.FS, rptPath);
      removeIfPresent(module.FS, outPath);
    }
  }

  self.SwmmRuntime = Object.freeze({
    ready: async () => {
      const engine = await loadEngine();
      return { version: engine.version };
    },
    run
  });
})();
