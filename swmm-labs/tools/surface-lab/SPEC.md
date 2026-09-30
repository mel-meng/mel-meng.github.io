# Surface Lab — Behavior and Implementation Spec

## Behavior specification

### Purpose
Surface Lab teaches what one idealized SWMM runoff surface does before mixed subcatchment anatomy or calibration is introduced.

The learner chooses exactly one surface:

- **A1 — Pervious**: infiltration + depression storage + surface routing.
- **A2 — Impervious with storage**: depression storage + surface routing, no infiltration.
- **A3 — Impervious with zero storage**: surface routing only.

The basic experiment keeps **area and rainfall fixed**. The learner changes only parameters that belong to the selected surface and watches SWMM recompute the response.

### Learning contract
The tool should make these relationships discoverable from the simulation rather than stating them as fixed rules:

- Width, slope, and Manning roughness alter surface-routing response.
- Depression storage affects runoff initiation and available runoff volume.
- Infiltration affects only the pervious A1 surface.
- A2 does not infiltrate.
- A3 has neither infiltration nor depression storage.
- Two models can produce similar hydrographs for different physical reasons; parameters should remain tied to a plausible surface interpretation.

### Fixed context
Version 1 fixes:

- area: 1.00 acre;
- one synthetic storm;
- simulation duration and report step.

These values are visible but are not primary controls.

### Surface modes and controls

#### A1 — Pervious
Editable:

- Width
- Slope
- Manning's `n` (pervious)
- Depression storage (pervious)
- Green-Ampt suction head
- Green-Ampt saturated hydraulic conductivity
- Green-Ampt initial moisture deficit

#### A2 — Impervious with storage
Editable:

- Width
- Slope
- Manning's `n` (impervious)
- Depression storage (impervious)

No infiltration controls are shown.

#### A3 — Impervious, zero storage
Editable:

- Width
- Slope
- Manning's `n` (impervious)

Depression storage is fixed at zero and infiltration controls are not shown.

### Presets
Version 1 offers illustrative starting assumptions:

- Lawn → A1
- Roof → A3
- Driveway → A2
- Parking lot → A2
- Custom

A preset is explicitly a starting assumption, not a universal parameter recommendation. Presets are chosen from the stage toolbar directly under the surface type (A1/A2/A3). All loaded values remain visible and editable.

### Main visualization
The page should prioritize:

1. one idealized surface rectangle with Width perpendicular to flow and equivalent Length `L = A / W` along flow;
2. rainfall and runoff response;
3. a small water/response summary;
4. controls.

The rectangle is labeled **Equivalent SWMM geometry — normalized for display**. It is not a site map.

A schematic **surface profile** sits **under** the plan view, **aligned to the same width**. It is drawn as a right triangle (tip at the downstream/right corner). The hypotenuse uses **true grade**: vertical drop over the displayed flow width equals **S%** (rise/run = slope/100). The profile is top-anchored below a fixed gap under the plan; steeper **S** extends the wedge downward and grows the SVG view height (no wedge height cap). **Depression storage** appears as a small rectangle on the outlet tip, sized only from the storage control relative to its slider maximum (not from subcatchment width); the **Ds = … in** label carries the exact depth. On A3, storage is **Ds = 0.00 in** with no pocket.

### Previous/current comparison
When a new parameter interaction begins, freeze the current simulation as **Previous**. Continuous dragging keeps that same previous snapshot. Current response remains visually dominant; previous response is a muted dashed line.

### Outputs
Show at minimum:

- runoff hydrograph;
- inverted step rainfall hyetograph with translucent blue fill, aligned in time with runoff;
- runoff depth;
- peak runoff;
- time to peak;
- infiltration depth for A1.

The UI should report measured change, not automatically prescribe which parameter is “the answer.”

### Run behavior
Every valid change runs the existing shared SWMM WASM client. Slider activity uses the shared latest-wins behavior so a stale simulation can never repaint a newer parameter state.

### Errors
If SWMM rejects a combination, keep the last valid result visible and show a concise error. Technical report details may be available in an expandable diagnostic area.

### Non-goals
Version 1 does not include mixed A1/A2/A3 composition, `%Impervious`, `%Zero-Impervious`, calibration, subarea routing, networks, GIS, or automatic optimization.

### Acceptance criteria
- A1 exposes infiltration + storage controls.
- A2 exposes storage but no infiltration controls.
- A3 exposes neither storage nor infiltration controls.
- One valid change triggers a real SWMM run and updates the response.
- Area and rainfall remain fixed.
- Previous/current comparison remains stable through one continuous interaction.
- A1, A2, and A3 each pass a real-engine smoke run.

---

## Implementation specification

### Files

```text
tools/surface-lab/
  index.html
  SPEC.md
  model.js
  presets.js
  metrics.js
  tool.js
  tool.css
```

The tool uses existing shared infrastructure only:

```text
shared/swmm-client.js
shared/swmm-worker.js
shared/swmm-runtime.js
shared/out-reader.js
```

No shared file needs to know about A1/A2/A3 presets or Surface Lab UI.

### Responsibility boundaries

#### `model.js`
Pure SWMM INP construction and domain conversions.

Recommended API:

```js
buildSurfaceModel(params) -> { inp, objects }
```

It must not know about DOM, canvas, animation, presets, previous state, or chart styling.

#### `presets.js`
Declarative preset values only. No rendering or SWMM calls.

#### `metrics.js`
Pure functions for runoff depth, peak, time to peak, and integration of rainfall/infiltration rates.

#### `tool.js`
Owns UI state, interaction snapshots, SWMM calls, latest displayed result, chart/geometry rendering, and error presentation.

### SWMM representation
Use one subcatchment `S1` routed to one outfall.

- A1: `%Imperv = 0`.
- A2: `%Imperv = 100`, `%Zero-Imperv = 0`, nonzero impervious depression storage.
- A3: `%Imperv = 100`, `%Zero-Imperv = 100`, impervious depression storage represented as zero.

Use Green-Ampt consistently for A1 in Version 1.

### Output request
Request only generic existing OUT variables:

```js
[
  { key: 'rainfall', objectType: 'subcatchment', objectId: 'S1', variable: 'rainfall' },
  { key: 'infiltration', objectType: 'subcatchment', objectId: 'S1', variable: 'infiltrationLoss' },
  { key: 'runoff', objectType: 'subcatchment', objectId: 'S1', variable: 'runoff' }
]
```

### State
Keep domain inputs separate from simulation snapshots:

```js
{
  inputs,
  current: { inputs, result, metrics },
  previous: { inputs, result, metrics } | null,
  activeInteraction
}
```

### Testing
Additive tests should verify:

- correct A1/A2/A3 INP representation;
- fixed 1-acre area and rain gage;
- A3 has zero-storage behavior;
- metrics with known arrays;
- all three surface types run through the real vendored SWMM engine.
