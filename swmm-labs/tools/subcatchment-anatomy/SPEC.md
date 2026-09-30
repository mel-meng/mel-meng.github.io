# Subcatchment Anatomy — Specification

## Part A — Behavior

### Purpose

Teach how three SWMM inputs change the conceptual anatomy of one fixed subcatchment:

- `% Impervious`
- `% Zero-Impervious`
- `Width (W)`

The page is an anatomy/geometry tool, not a runoff simulator.

### Conceptual surfaces

- **A1** — pervious
- **A2** — impervious with depression storage
- **A3** — impervious with zero depression storage

Let `A` be total area, `I` the impervious fraction, `Z` the zero-impervious fraction of impervious area, and `W` width.

```text
A1 = A(1 - I)
A2 = A I (1 - Z)
A3 = A I Z

L1 = A1 / W
L2 = A2 / W
L3 = A3 / W
```

Unit conversion is required before area/width division.

### Primary behavior

The visualization contains exactly three tightly spaced, fixed-position rows: A1, A2, A3.

Each row overlays:

- **previous geometry** — dashed, faint outline;
- **current geometry** — solid outline with light fill.

Rows share the same coordinate system and outlet alignment. Their allotted row positions never move.

### Snapshot rule

At the start of an interaction, freeze the current state as `previous`. During the entire drag/key sequence, `previous` stays unchanged while `current` follows the control. A later interaction creates a new snapshot.

### % Impervious

Changing `% Impervious` redistributes total area between A1 and A2+A3.

- increasing it shrinks A1;
- A2 and A3 grow according to the current `Z` split;
- W is unchanged;
- only equivalent lengths change horizontally.

### % Zero-Impervious

Changing `% Zero-Impervious` redistributes only the impervious area.

- A1 must remain exactly unchanged;
- A2 and A3 trade area;
- A2+A3 remains constant;
- W is unchanged.

### Width

Changing W must preserve all three areas.

- W increases → rectangles become visually taller and equivalent lengths decrease;
- W decreases → rectangles become visually shorter and equivalent lengths increase;
- all three share the same W.

### Anchoring

Rectangles are anchored to one common outlet edge. Length changes move the upstream edge; the outlet edge stays fixed.

### Edge cases

Rows remain visible even when their current area is zero.

- `I = 0` → only A1 has area;
- `I = 100` → A1 is zero;
- `Z = 0` → A3 is zero;
- `Z = 100` → A2 is zero.

### Visual hierarchy

The rectangles are the main interface. Controls and numbers are secondary. Explanatory text should be muted and minimal.

The page should feel like an interactive diagram, not a dashboard.

### Required note

> A1, A2, and A3 are conceptual runoff surfaces. The geometry is normalized for comparison, not a site map.

---

## Part B — Implementation

### Files

```text
index.html
styles.css
model.js
state.js
tool.js
```

### Boundaries

`model.js`
: pure domain calculations only. No DOM, SVG, CSS, or interaction history.

`state.js`
: previous/current snapshot lifecycle only. No DOM or rendering.

`tool.js`
: controls, SVG coordinates, rendering, accessibility behavior.

`styles.css`
: presentation only.

### Rendering

Use one SVG for all three rows so they necessarily share scales and alignment.

For each surface:

```text
previous dashed rectangle
current rectangle (with on-rect L and W letter markers)
outlet stub
row label (badge + surface name, east of the outlet stub)
compact current/previous values (east of the row label band)
```

Row layout constants live in a single `LAYOUT` object in `tool.js`. `syncStaticSvg()` applies viewBox, row guides, outlet axis, and row-label transforms from those constants so HTML scaffolding does not drift.

The common outlet x-coordinate is fixed. A rectangle is placed with:

```text
x = outletX - displayedLength
width = displayedLength
```

Each row has a fixed centerline derived from `rowPitch` (max rectangle height plus a small gap). W is mapped to rectangle height within that slot. Numeric **Length** and **W** appear in the values column; **L** and **W** on the current fill are dimension letters only and hide when the drawn rectangle is too small.

### Display scaling

Screen dimensions are normalized. Do not imply literal map-scale geometry.

The mapping must preserve directional relationships:

- larger W → taller display;
- larger W → shorter L;
- larger area at fixed W → longer L.

Previous and current states must use exactly the same screen transform.

### Interaction

Native range inputs are required. Pointer and keyboard input must both use the one-snapshot-per-interaction rule.

Reduced-motion users must still receive immediate previous/current comparison without animation dependency.

### Tests

Unit tests must cover:

- area conservation;
- 0/100% impervious boundaries;
- 0/100% zero-impervious boundaries;
- A1 invariance when only Z changes;
- width inversely changing L without changing area;
- stable previous snapshot during one interaction;
- new snapshot when a new interaction begins.

### Acceptance criteria

The tool is complete when:

1. three rows remain tightly aligned and fixed in place;
2. previous and current geometry overlay each other;
3. `% Impervious`, `% Zero-Impervious`, and W produce the behaviors above;
4. A1 remains visually unchanged when only Z changes;
5. W changes all three heights together and changes lengths inversely;
6. numbers agree with the domain calculation;
7. all automated tests pass;
8. the tool has no SWMM/WASM dependency.
