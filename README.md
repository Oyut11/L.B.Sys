# L.B.Sys — A Living Library of Dangerous Books

**A digital archive of colonial violence, resistance, and the thinkers who refused to let it be forgotten.**

> *"Twenty-one thinkers who documented what empire actually did — and refused to let it be filed away."*

---

## What This Is

L.B.Sys (Living Book System) is a four-layer digital library that reads the history of empire from four different distances:

1. **The Records** — Twenty-one thinkers, chronologically ordered (1903–2018), whose works were read as threats in their time. Each record includes biography, thesis, key passage, and fate.
2. **The Timeline** — Eight colonial systems (1415–1999), traced through who built them, why, how they worked, what they cost, and how they ended.
3. **Tracing Back** — Fifteen colonized nations and peoples, read through the four things empire took from them: culture, knowledge, language, and territory.
4. **The Machine** — Fourteen theoretical frameworks (Marx to Wynter) explaining why the system runs and why the ruled so often consent to it.

The library is designed to be read as a whole. The Records show *who saw clearly*. The Timeline shows *what was done*. Tracing Back shows *what it cost*. The Machine asks *why it continues*.

---

## Design Philosophy

The visual system is built around a **revolutionary-print / agitprop aesthetic**:

- **Warm newsprint tones** with near-black ink, evoking banned pamphlets and underground presses
- **No photographs** — all "portraits" are algorithmically generated abstract marks (risograph, constructivist, and woodcut vocabularies)
- **Typography as ideology** — Bodoni Moda for display, Newsreader for body text, Courier Prime for labels and archival metadata
- **Paper grain and ink flicker** — animated noise overlays and vignette shadows create the feel of a physical document
- **Motion as revelation** — scroll-triggered reveals, ink-sweep transitions between views, staggered entrances

The design treats the screen as a surface for serious text, not entertainment. Every animation serves readability. Every visual choice reinforces the gravity of the material.

---

## Technical Architecture

L.B.Sys is a **zero-build static site**:

- **React 18** (CDN UMD builds) for component architecture and view switching
- **Babel Standalone** for in-browser JSX transformation
- **No bundler, no build step, no npm dependencies** — runs directly in any browser
- **Raw CSS** (~940 lines) with no framework, using CSS custom properties and `clamp()` for fluid design
- **Generative SVG portraits** — deterministic abstract marks seeded from each thinker's ID
- **Plain JavaScript data files** exposing globals (`window.LB_THINKERS`, `window.LB_EMPIRES`, etc.)

This makes the site trivial to host anywhere, fully inspectable, and archivable without toolchain dependencies.

---

## Content Architecture

Data is organized in separate JS files:

| File | Content | Entries |
|---|---|---|
| `data.js` | Revolutionary thinkers | 21 (1903–2018) |
| `empires.js` | Colonial systems | 8 (1415–1999) |
| `peoples.js` | Colonized nations and peoples | 15 |
| `machine.js` | Theoretical frameworks | 14 (1844–present) |
| `links.js` | Navigation and external links | — |
| `sources.js` | Source citations | — |

Each thinker record includes: `id`, `name`, `life`, `origin`, `role`, `work` (title/year), `accent` (thematic color), `thesis`, `bio`, `offering`, `fate`, `quote` (with attribution flag), and optional `passage` (with copyright status: `public-domain` or `fair-use`).

---

## Scholarly Rigor

The content follows consistent scholarly conventions:

- **Attribution system** — Quotes flagged as genuine (`attributed: true`) vs. distilled summaries of core arguments (`attributed: false`)
- **Copyright awareness** — Passages explicitly marked as public domain or fair use
- **Source citations** — Every entry lists primary and secondary sources as clickable search links
- **Historical estimates** — Figures presented with ranges and scholarly caveats where consensus varies
- **Cross-referencing** — Thinkers are linked across views (e.g., Césaire appears in both Records and Machine)

---

## File Structure

```
L.B.Sys/
├── index.html          # Entry point, loads React/CDNs and all scripts
├── styles.css          # Complete visual system (~940 lines)
├── app.jsx             # Root component: view switching, nav, transitions
├── gallery.jsx         # The Records: hero, filters, card grid
├── profile.jsx         # Full-screen thinker dossier with keyboard nav
├── timeline.jsx        # The Timeline: span chart, empire dossiers
├── tracing.jsx         # Tracing Back: people index, loss domains
├── machine.jsx         # The Machine: framework index, concept dossiers
├── portrait.jsx        # Generative SVG mark system
├── data.js             # 21 thinkers
├── empires.js          # 8 colonial systems
├── peoples.js          # 15 colonized peoples
├── machine.js          # 14 theoretical frameworks
├── links.js            # Navigation links
├── sources.js          # Source citations
└── package.json        # Dev server script only
```

---

## Browser Support

Modern evergreen browsers (Chrome, Firefox, Safari, Edge). Requires:
- CSS custom properties
- `IntersectionObserver`
- CSS `clamp()`
- CSS Grid and Flexbox

No polyfills are included by design.

---

## License

Content and code are provided for educational and archival purposes. Individual passages carry their own copyright markings (`public-domain` or `fair-use`) as noted in the data files.

---

*The empires changed flags. The mechanism — extraction, justified — did not.*
