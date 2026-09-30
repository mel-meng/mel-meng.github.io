# Vendored SWMM5 WASM assets

`swmm5.js` and `swmm5.wasm` are a paired Emscripten engine artifact sourced from `SWMMEnablement/SWMM-Engine`.

Refresh both together from the repository root:

```bash
npm run vendor:wasm
```

The refresh script also writes `manifest.json` with the source, fetch time, byte sizes, and SHA-256 hashes. Do not update only one file in the pair.

The shared runtime resolves these files relative to the worker and uses Emscripten `locateFile` for the `.wasm` path.
