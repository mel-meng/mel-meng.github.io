# Subcatchment Anatomy

A standalone, zero-build teaching tool for visualizing how SWMM divides one fixed subcatchment into three conceptual runoff surfaces:

- **A1** — pervious
- **A2** — impervious with depression storage
- **A3** — impervious with zero depression storage

This package intentionally does **not** use SWMM WASM. It is a deterministic geometry/teaching tool.

## Run

From the repository root:

```bash
npm start
```

Then open `http://localhost:8080/tools/subcatchment-anatomy/`.

Directly opening `index.html` may also work in some browsers, but a local static server is recommended because the tool uses ES modules.

## Test

From the repository root:

```bash
npm test
```

Model and interaction-state coverage lives in `test/subcatchment-anatomy.*.test.mjs`.

## Files

```text
index.html          page structure
styles.css          visual design
model.js            pure A1/A2/A3 calculations
state.js            pure before/current interaction state
tool.js             DOM + SVG rendering and input bindings
SPEC.md             behavior and implementation specification
```

## Diagram

One SVG draws three aligned rows: rectangles share a fixed outlet edge; **A1** / **A2** / **A3** labels sit to the right of each row’s outlet stub, then the Area / Length / W values with previous-state hints. Layout numbers are centralized in `tool.js` (`LAYOUT`, `syncStaticSvg()`).

## Design rule

Keep these boundaries intact:

- `model.js` knows SWMM anatomy math.
- `state.js` knows previous/current interaction behavior.
- `tool.js` knows DOM/SVG rendering.
- CSS controls appearance only.
