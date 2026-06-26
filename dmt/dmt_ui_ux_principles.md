# Don’t Make Me Think — UI/UX Principles

This document explains the design principles for the **Don’t Make Me Think** ICM hydrology explainer site. It is meant to help future pages stay consistent, simple, and easy to maintain.

The site is not a file directory. It is a visual learning gallery.

---

## 1. Core idea

The site should answer one question immediately:

> “What should I open?”

A visitor should not need to read paragraphs, compare technical terms, or understand the full hydrology workflow before choosing a page. The landing page should make the first decision obvious through large visual cards, clear titles, and simple hover explanations.

The design goal is:

> Big picture first. Details only when the user asks for them.

---

## 2. Audience

Primary users are modelers, engineers, support staff, and learners who need to understand confusing InfoWorks ICM hydrology concepts quickly.

They may be trying to answer questions such as:

- Why does antecedent rainfall matter?
- How does land use become runoff volume?
- Why is the runoff peak delayed?
- How do I set up or calibrate GIM?

They are not looking for a formal manual on the landing page. They are looking for the right explainer.

---

## 3. Design principles

### 3.1 Do not make the user think about navigation

Use large cards with obvious titles. Avoid menus, filters, search boxes, nested lists, and dense text unless the number of pages grows enough to require them.

Good:

```text
NAPI
New UK PR
Wallingford
GIM
```

Avoid:

```text
Rainfall memory and antecedent precipitation index computational tutorial
New UK percentage runoff empirical hydrological volume method
Wallingford double linear reservoir runoff routing parameter sensitivity
```

The technical title can appear inside the explainer page. The landing page title should be short.

---

### 3.2 Use pictures as the main navigation

Each card should have a strong visual metaphor:

| Topic | Visual metaphor |
|---|---|
| NAPI | Rainfall bars, weighting curve, memory |
| New UK PR | Land use, connected impervious area, grass, roof, road |
| Wallingford | Two reservoirs, flow path, delayed hydrograph |
| GIM | Soil store, ground store, groundwater response |

The image should tell the user what the page is about before they hover.

---

### 3.3 Put explanation behind hover

The default card state should show only:

- Image
- Small kicker, such as `Start here` or `Runoff volume`
- Big title

On hover or keyboard focus, show:

- Full title
- One-sentence explanation
- `Open explainer →`

This keeps the page minimal while still helping users confirm they are choosing the right page.

---

### 3.4 One page, one idea

Every explainer should have a single main concept. Do not combine too many concepts into one page just because they are related.

Good page ideas:

- NAPI: rainfall memory
- New UK PR: rainfall volume from land use and wetness
- Wallingford: routing and hydrograph shape
- GIM: slow groundwater-driven response

Avoid pages that try to explain rainfall, land use, routing, GIM, calibration, and troubleshooting all at once.

---

### 3.5 Use progressive disclosure

The landing page should not teach the whole subject. It should help the user choose the right page.

The explainer page should start simple, then add detail in layers:

1. Visual story
2. Plain-language explanation
3. Interactive tool or diagram
4. Equations and parameters
5. References or technical notes

---

### 3.6 Navigation between gallery and explainers

Gallery cards open explainers as **full pages** using plain relative links:

```html
<a class="tile napi" href="napi%20explained.html" aria-label="Open NAPI Explained">
```

Do:

- Use normal `<a href>` navigation from `index.html` to each explainer.
- Rely on the **browser back button** when the user came from the gallery.

Do not:

- Use iframe overlays or JavaScript navigation layers to keep the user on `index.html`.
- Add “Back to gallery” links on explainer pages.

Direct explainer URLs (bookmark, shared link) should work on their own. A path back to the gallery is not required on those pages.

---

## 4. Information architecture

Current landing page structure:

```text
Hero
  Don’t Make Me Think
  Short description
  Hover instruction

Gallery
  NAPI
  New UK PR
  Wallingford
  GIM

Footer
  Minimal site note (optional) — not dev or maintenance copy
```

Recommended reading order:

```text
1. NAPI
2. New UK PR
3. Wallingford
4. GIM
```

This order follows the hydrology workflow:

```text
Rainfall memory → runoff volume → runoff routing → groundwater / slow response
```

---

## 5. Card design specification

Each gallery card should follow the same structure.

```html
<a class="tile topic-class" href="relative_file_name.html" aria-label="Open Page Name">
  <div class="art" aria-hidden="true">
    <!-- SVG or image -->
  </div>
  <div class="shade"></div>
  <div class="title">
    <span class="kicker">Category</span>
    Short Title
  </div>
  <div class="info">
    <h2>Short Title</h2>
    <p>One sentence explaining why this page matters.</p>
    <span class="open">Open explainer →</span>
  </div>
</a>
```

### Required card fields

| Field | Rule |
|---|---|
| `href` | Use a relative path only. Do not use local drive paths or absolute URLs for local pages. |
| `aria-label` | Say what the card opens. |
| `.kicker` | 1–3 words. Example: `Start here`, `Runoff volume`, `Hydrograph shape`. |
| `.title` | 1–3 words if possible. |
| `.info p` | One sentence only. |
| Visual | Simple enough to understand at thumbnail size. |

---

## 6. Writing style

The site should sound like a helpful modeler explaining a hard concept on a whiteboard.

### Use

- Short titles
- Plain verbs
- Specific hydrology words when needed
- “What it does” phrasing
- Visual-first explanations

Examples:

```text
NAPI
Recent rain matters more than old rain.
```

```text
Wallingford
Runoff volume becomes a delayed hydrograph.
```

### Avoid

- Long subtitles on cards
- Overexplaining the audience
- Words like “beginner-friendly” or “simple explanation” inside the content
- Dense method names on the landing page
- File-name language such as “open the HTML file”

Do not say the page is simple. Make it simple.

---

## 7. Visual style

The current style is warm, minimal, and editorial.

### Base style

| Element | Direction |
|---|---|
| Background | Warm off-white, not pure white |
| Cards | Large rounded rectangles |
| Images | Soft SVG illustrations, large shapes, low clutter |
| Typography | Very large headings, tight letter spacing |
| Text volume | Minimal on landing page |
| Interaction | Hover/focus reveals detail |

### Current design tokens

```css
:root{
  --bg:#f7f5ef;
  --ink:#121212;
  --muted:#6e6a62;
  --paper:#ffffff;
  --line:rgba(18,18,18,.10);
  --shadow:0 24px 70px rgba(22,20,15,.12);
  --radius:34px;
}
```

Keep these tokens unless there is a strong reason to change the overall identity.

---

## 8. Interaction principles

### Hover

Hover should reveal more information, not introduce a new navigation pattern.

Default state:

```text
Picture + short title
```

Hover/focus state:

```text
Short title + one sentence + Open explainer →
```

### Keyboard focus

Hover behavior must also work on keyboard focus:

```css
.tile:hover .info,
.tile:focus-visible .info{
  opacity:1;
  transform:translateY(0);
}
```

This makes the site usable without a mouse.

### Mobile

Mobile devices do not have true hover. The card should still work because the big title remains visible and tapping the card opens the page.

Do not hide critical information only behind hover if the user needs that information to choose correctly.

---

## 9. Accessibility principles

Keep the site visually simple, but do not sacrifice accessibility.

Minimum requirements:

- Every card link needs a useful `aria-label`.
- Decorative SVGs should use `aria-hidden="true"` unless they contain essential information.
- Text should have strong contrast against the background.
- Keyboard users should see focus state clearly.
- The click target should be the whole card.
- Avoid tiny text inside SVGs when it is essential to understanding.

Good:

```html
<a class="tile napi" href="napi%20explained.html" aria-label="Open NAPI Explained">
```

Avoid:

```html
<a href="napi%20explained.html">click here</a>
```

---

## 10. GitHub Pages deployment

This site is published as **plain static HTML** on GitHub Pages. There is no Jekyll config or build step.

### Site location

All content lives in the `dmt/` folder inside the `mel-meng.github.io` repository — not at the repo root.

| Item | Value |
|---|---|
| Repo folder | `dmt/` |
| Live URL | `https://mel-meng.github.io/dmt/` |
| Landing page | `dmt/index.html` |

There is **no repo-root `index.html`** by design. The domain root (`https://mel-meng.github.io/`) stays a 404 so the gallery is low-profile: reachable by direct URL, not advertised from the site homepage.

If the repository is public, `/dmt/` is still accessible to anyone who knows the path. This is obscurity, not access control.

### Relative path rules

Links should be relative to the folder containing `index.html` (`dmt/`).

Current local files:

```text
gim_setup_manual.html
napi explained.html
new_uk_pr_full_explainer_with_landuse.html
wallingford_routing_explainer.html
```

Recommended links in `index.html`:

```html
href="gim_setup_manual.html"
href="napi%20explained.html"
href="new_uk_pr_full_explainer_with_landuse.html"
href="wallingford_routing_explainer.html"
```

Because `napi explained.html` contains a space, the URL should encode it as:

```html
napi%20explained.html
```

Better long-term naming convention:

```text
napi-explained.html
new-uk-pr.html
wallingford-routing.html
gim-setup-manual.html
```

If files are renamed, update the card `href` values at the same time.

---

## 11. Adding a new explainer

When adding a new page, ask these questions first:

1. What is the one concept?
2. What question does it answer?
3. What is the shortest possible card title?
4. What picture explains it without text?
5. Where does it belong in the learning sequence?

Then add one card using the standard card structure.

### New card checklist

```text
[ ] Relative href works
[ ] aria-label is clear
[ ] Kicker is short
[ ] Title is short
[ ] Hover sentence is one sentence
[ ] Image is understandable at card size
[ ] Card works on mobile
[ ] Card works with keyboard focus
```

---

## 12. When the site grows

Do not add filters or search too early. More controls make the page feel like a database.

Add grouping only when the gallery becomes too large to scan.

Suggested future groups:

```text
Rainfall memory
Runoff volume
Routing
Surface setup
GIM and slow response
Case studies
References
```

When grouping is needed, keep group labels large and simple. Do not create complex taxonomies.

Good:

```text
Rainfall Memory
Runoff Volume
Routing
GIM
```

Avoid:

```text
Antecedent wetness computational state variables
Empirical runoff coefficient transformation models
Hydraulic response-shape methods
```

---

## 13. Explainer page principles

The landing page and explainer pages should feel related.

Each explainer should start with:

1. A big title
2. A one-sentence promise
3. A visual story or interactive diagram

Explainer pages do **not** include “Back to gallery” navigation. Users who open an explainer from the gallery can use the browser back button; users who open an explainer directly do not need a link back.

The first screen should not start with a formula unless the page is specifically a formula reference.

Recommended explainer order:

```text
1. What problem are we solving?
2. Visual concept
3. Interactive or diagram
4. Parameters
5. Calibration insight
6. Technical references
```

---

## 14. Maintenance checklist

Before publishing to GitHub Pages:

```text
[ ] index.html opens locally
[ ] Every card opens the correct page
[ ] File names match exactly, including spaces, underscores, and capitalization
[ ] Links are relative, not D:\ paths
[ ] Page works at desktop width
[ ] Page works at phone width
[ ] Hover/focus overlay is readable
[ ] No card has more than one sentence of hover text
[ ] No broken images or missing SVGs
[ ] Browser tab title is correct
[ ] No repo-root index.html added (unless deliberately going public)
[ ] Gallery opens explainers via plain links, not iframe
[ ] Explainer pages left without back links
[ ] Live site tested at `/dmt/`, not domain root
```

After adding or renaming files:

```text
[ ] Update href in index.html
[ ] Update this UI/UX document if the site structure changes
[ ] Test GitHub Pages at https://mel-meng.github.io/dmt/
```

---

## 15. Design north star

When unsure, use this rule:

> The landing page should make choosing a page feel obvious.

If a design element does not help the user choose, remove it.

If a sentence does not help the user choose, shorten it or move it into the explainer page.

If a technical detail is accurate but distracting, put it behind hover or inside the page itself.

The site should feel like a clean gallery, not a documentation portal.

---

## 16. Rejected patterns

These approaches were considered and intentionally not used:

### Iframe viewer on the landing page

An overlay with an iframe could keep the gallery loaded while showing an explainer. Rejected because:

- Explainers have interactive charts and drag handlers that work better as top-level documents.
- Iframes add nested scrolling, focus, and mobile UX problems.
- Plain links are simpler, more accessible, and need no JavaScript.

### “Back to gallery” links on every explainer

Would give an explicit return path from any explainer. Rejected because:

- It requires editing every explainer file whenever the gallery changes.
- Direct explainer URLs do not need a gallery link.
- Browser back is enough when the user came from the gallery.
