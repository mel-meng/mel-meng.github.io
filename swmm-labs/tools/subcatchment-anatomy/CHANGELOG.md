# Changelog

## 0.1.1 — 2026-09-29

- Tightened SVG row layout (`LAYOUT` in `tool.js`) with a shorter viewBox and shared outlet alignment.
- Moved A1/A2/A3 row labels to the right of the rectangles (after the outlet stub).
- Added on-rectangle L/W markers on the current geometry; values column uses **Length** instead of a separate flow cue.
- Fixed overlap between outlet flow text and length values.

## 0.1.0 — 2026-09-27

- Created standalone Subcatchment Anatomy teaching tool.
- Added pure A1/A2/A3 geometry model.
- Added previous/current snapshot interaction behavior.
- Added three-row overlaid SVG visualization.
- Added behavior/implementation spec and automated tests.
- Intentionally omitted SWMM WASM/runtime dependencies.
