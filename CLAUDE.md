# Sunshine Mining & Crushing Solutions LLP: design system, conventions and decisions

This file is the working brief for anyone (human or AI) maintaining the Sunshine
site. It documents the design system, the conventions to follow, and the decisions
already made so they are not relitigated.

The site is a hand-built static site: semantic HTML5, one CSS file, one small JS
file, no framework and no build step. It deploys from the repo root via GitHub Pages.

---

## 1. File structure

```
/                       repo root (served by GitHub Pages)
  index.html            Home, served at /
  about/index.html      About (story, vision/mission, values, directors), at /about/
  services/index.html   Services (eight services, anchor targets), at /services/
  faq/index.html        FAQ (FAQPage schema), served at /faq/
  contact/index.html    Contact (email-led, no backend), served at /contact/
  404.html              Styled not-found (stays at root; GitHub Pages serves it)
  robots.txt            Allows all, disallows /archive/, points to sitemap
  sitemap.xml           Five public URLs (directory form, trailing slash)
  site.webmanifest      PWA manifest
  css/main.css          The entire design system
  js/main.js            Progressive enhancement only
  fonts/                Self-hosted woff2 (Inter, Sora), latin subset
  imgs/                 logo.webp, favicon.*, icons, og-image.jpg, photo-*.webp
  imgs/illustrations/   Original brand-themed flat SVG illustrations
  docs/                 Project docs (redesign-decisions.md)
  tools/                Dev-only (contrast-audit.mjs); gitignored deps, not deployed
  archive/              The previous builder-exported site (not linked, disallowed)
  drafts/               Dev-only OG/favicon generators (gitignored, not deployed)
```

There is no shared HTML partial system (no build step), so the header, footer and
floating button are duplicated across pages. **If you change one, change all of
them.** Keep them byte-for-byte identical except for the `aria-current="page"` on the
active nav item and the depth-aware path prefix (`../` on inner pages, bare on Home,
root-absolute `/` on 404.html).

---

## 2. Brand and colour

Brand colours derive from `imgs/logo.webp` (a rising sun: gold sunburst, green hill,
blue wordmark). Tokens live in `:root` in `css/main.css`. Every pairing was verified
against WCAG 2.1 AA (text >= 4.5:1, large text / UI >= 3:1) and re-verified DOM-aware.

| Token | Hex | Use |
| --- | --- | --- |
| `--cream` | `#f7f3e9` | Page background |
| `--cream-2` | `#fbf8f0` | Alt section background |
| `--surface` | `#ffffff` | Cards |
| `--ink` | `#1f2730` | Primary text (13.6:1 on cream) |
| `--ink-2` | `#454f5b` | Secondary text (7.5:1) |
| `--ink-3` | `#586472` | Muted / meta text (5.4:1) |
| `--slate` | `#1c2b36` | Dark sections (white 14.5:1) |
| `--slate-2` | `#16222b` | Footer |
| `--cream-muted` | `#c5cdd6` | Secondary text on slate (9.0:1 on slate) |
| `--gold` | `#f0a818` | Sun accent, primary-button fill, decorative |
| `--gold-strong` | `#805a04` | Gold text (eyebrow, brand) / borders / icons on light (5.6:1) |
| `--gold-on-dark` | `#f3bb4d` | Gold text / eyebrow on slate (8.3:1) |
| `--green` | `#6ba539` | Green decorative fill only |
| `--green-ink` | `#3d6b16` | Green text / svc-tag fill (5.7:1; white on it 6.3:1) |
| `--green-on-dark` | `#a7d36a` | Green text on slate (8.4:1) |
| `--blue` | `#1e73be` | Blue decorative / UI |
| `--blue-ink` | `#155a96` | Blue text / links / secondary-button on light (6.5:1) |

Button rules that keep contrast valid:
- **Primary** = `--gold` fill with `--slate` label (7.1:1) and a `#b07f0c` border.
- **Secondary** = transparent with `--blue-ink` border/label on light; on slate (and on
  any dark component) the border becomes `--gold-on-dark` and the label is white.
- `--gold` is only 1.8:1 on cream: NEVER use it for text on a light surface. Use
  `--gold-strong` for large gold display text and `--gold-on-dark` on slate. `--gold`
  is fine as a fill behind dark text, on slate, or as a decorative shape.
- `--green` (2.7:1 on cream) is decorative-fill only; for green text use `--green-ink`.

Focus is a 3px `--blue-ink` outline on light, `--gold-on-dark` on dark.

### Contrast rule: colour belongs to the component, not the container

1. **A reusable component class owns its colour** (`.eyebrow`, `.svc-tag`). A
   container selector like `.cta-band p` (0-1-1) silently out-specifies a component
   class like `.eyebrow` (0-1-0) nested inside it, repainting it. Descriptive text is
   excluded with `:not(.eyebrow)` (see `.cta-band p:not(.eyebrow)` and
   `.section-head p:not(.eyebrow)`).
2. **A "for dark backgrounds" colour must never reach a light surface** through the
   cascade (and vice versa). `--cream-muted` is for slate only.
3. **Dark components that are not `.section--slate`** (`.hero`, `.page-hero`,
   `.cta-band`, `.notfound`) carry their own on-dark overrides for `.eyebrow`,
   `.btn-secondary` and links. The 404's extra overrides live in its inline `<style>`.

**Verification is not optional and not eyeballed.** Run the DOM-aware audit (section 8).

---

## 3. Typography

- Headings: **Sora** (geometric, confident, slightly technical sans) at 600/700.
- Body and UI: **Inter** at 400/500/600/700.
- Both self-hosted woff2 (latin subset), `font-display: swap`. Critical weights
  (`inter-400`, `sora-700`) are preloaded in each page head.
- **Do not add a Google Fonts link or any external font request.** To add a weight,
  download the woff2 to `fonts/` and add a matching `@font-face`.

Type sizes are fluid via `clamp()` (`--fs-*` tokens). Body is `1.0625rem` / 1.65.

---

## 4. Components (classes in `css/main.css`)

- Layout: `.container` (max 1140px), `.container.wide` (1240px), `.section`,
  tints `.section--white` / `.section--cream2` / `.section--slate`.
- `.eyebrow` small gold kicker; `.section-head` for heading blocks.
- Buttons: `.btn` + `.btn-primary` / `.btn-secondary`; inline `.btn-text` with arrow.
- Cards/grids: `.grid` + `.grid-2/3/4`; `.pillar`, `.card`, `.svc-card`, `.value`.
- `.hero` (Home) and `.page-hero` (inner pages) are dark photo heroes.
- Services: `.svc` (anchor target with `scroll-margin-top`), `.svc-tag` (green pill),
  `.split` / `.split.flip` image+text rows, `.checklist` (green tick list).
- `.faq` uses native `<details>`/`<summary>` (keyboard-operable with JS off).
- Slate band: `.stats` / `.stat`. `.gallery` (solid scrim captions).
- `.breadcrumb`, `.cta-band`, `.contact-grid`, `.contact-card`, `.site-footer`,
  `.fab` (floating email button).
- `.reveal` elements fade in on scroll; **fail-safe** (JS adds `.reveal--armed` to
  hide-then-reveal, so content stays visible if JS never runs).

Icons are inline SVG (`viewBox 0 0 24 24`, `stroke="currentColor"`, no icon font).
Decorative icons get `aria-hidden="true"`.

Breakpoints: 1024 (footer reflow), 860 (mobile nav appears), 720 (grids stack),
520 (full-width buttons, compact FAB).

---

## 5. Accessibility conventions

- One `<h1>` per page; headings in order; landmarks (`header`/`main`/`footer`/`nav`).
- A `.skip-link` to `#main` is first in `<body>`.
- The mobile nav toggle uses `aria-expanded` and `aria-controls`; Escape closes it.
- Visible focus rings on everything interactive; never remove the outline.
- All meaningful images have `alt`; decorative SVGs/logo are `aria-hidden` / empty alt.
- Respect `prefers-reduced-motion`. Set `width`/`height` on images to avoid layout shift.

---

## 6. SEO and schema conventions

### URL convention: directory ("pretty") URLs, path-portable

Every inner page is a folder containing `index.html`, served at a trailing-slash path.
Home is `index.html` at `/`. `404.html` stays at the repo root.

Rules that must always hold:
1. **Assets and internal links are RELATIVE and depth-aware**, never root-absolute, so
   the same files work at the production root (`https://www.sunshinellp.co.in/`) and on
   the github.io project subpath.
   - Home (depth 0): bare relative (`css/main.css`, `about/`); home link `./` (or `../`
     on inner pages). Home currently links inner pages bare (`about/`), home `./`.
   - Inner pages (depth 1): `../css/main.css`, `../services/#crusher-erection`, home `../`.
   - Exception: **`404.html` stays root-absolute** (`/css/...`). Correct for the
     production root; styling is degraded only on the github.io subpath preview.
2. **Link to the trailing-slash directory form** (`../services/`), never `*.html`.
3. **Canonical, `og:url`, sitemap `loc` and JSON-LD `@id` stay ABSOLUTE** with the
   production domain (`https://www.sunshinellp.co.in/slug/`), trailing-slash form.

### Canonical, schema, sitemap

- Canonical domain is **https://www.sunshinellp.co.in/** (with `www`), directory form.
- Each page has a unique title, meta description, canonical, OG and Twitter tags, and
  points `og:image` at `/imgs/og-image.jpg` (1200x630).
- JSON-LD per page type:
  - Home: `ProfessionalService` (`@id` `#organization`, with real address+telephone+geo)
    + `WebSite` + `WebPage`.
  - About: `AboutPage` + `BreadcrumbList`.
  - Services: `CollectionPage` + a `Service` `ItemList` of all eight services
    (`numberOfItems` 8) + `BreadcrumbList`.
  - FAQ: `FAQPage` + `BreadcrumbList`. **The schema answer text must match the visible
    answer text** (write plain-text answers and mirror them exactly).
  - Contact: `ContactPage` + `BreadcrumbList`.
  - The `#organization` node is the single source of truth; pages reference it by `@id`.
- Re-validate JSON-LD after edits (section 8).

---

## 7. Copy conventions

- **No em dashes (`-` as `—`) anywhere.** Use commas, colons or parentheses. Verify
  with `grep -rn "—" *.html */index.html`.
- Contact email is **admin@sunshinellp.co.in** (primary), marketing@sunshinellp.co.in
  (secondary). Phones: +91 96267 14999, +91 63823 07976, +91 93986 98259.
  Address: 86/20, Srinivasa Nilayam, Phase 7, Brindavan Nagar, Hosur, Krishnagiri Dt,
  Tamil Nadu 635 109. These are taken as real from the old site (confirm before go-live).
- Keep service names consistent and capitalised as on the Services page (for example
  "Operation and Maintenance Contractors", "Raising Contractors in Mining").
- Voice: warm, credible, plain-spoken, outcome-led (reliable supply, lower risk,
  audit-ready plants, compliant operations). No facts invented: the 2017 founding, four
  promoters, equipment brands (Puzzolana, Propel, Metso, Helstone), aggregate sizes and
  the 2023 PWD M.Sand policy all come from the archived site.
- The contact flow is **email-led with no backend**. Do not add a server-side form. The
  contact form composes a `mailto:` draft (and falls back to a native mailto form with
  JS off). State that nothing is stored on the site.

### Adding a new service
Add a `.svc` block (with a unique `id`) to `services/index.html`, add a matching card on
the Home snapshot, and add a `Service` entry to the Services `ItemList` JSON-LD. Update
`numberOfItems`. Add the anchor to the footer service list across all pages if prominent.

### Adding a new page
Create `slug/index.html` (a folder with `index.html`). Copy an inner page as a template
(depth 1: assets use `../css/...`, links use `../other/`, home link `../`). Keep
canonical / og:url / JSON-LD absolute on `https://www.sunshinellp.co.in/slug/`, swap the
`WebPage` + `BreadcrumbList`, set `aria-current="page"` on the nav item across all pages,
and add the URL to `sitemap.xml`. Then run the subpath check.

---

## 8. Validation checklist (run before deploy)

```bash
# No em dashes in copy
grep -rn "—" *.html */index.html css js && echo "FAIL: em dash found" || echo "OK"

# No external CDN / third-party requests in the new files (expect no matches)
grep -rnE "https?://(fonts|cdn|ajax|maxcdn|unpkg|code\.jquery)" *.html */index.html

# JSON-LD parses on every page; FAQ answer text matches the visible text.

# Colour contrast: DOM-aware audit (the authoritative check; catches cascade collisions)
python3 -m http.server 8301 &
(cd tools && PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 npm i playwright-core)  # one-time
node tools/contrast-audit.mjs http://localhost:8301   # MUST print RESULT: PASS

# Link / asset / anchor resolution
python3 ../_rebuild-kit/tools/linkcheck.py .

# Subpath check: serve the PARENT dir, load /sunshinellp.co.in/ and each page in
# headless Chrome, assert 0 asset 404s (catches root-absolute leaks).
```

Also sanity-check: one `<h1>` per page, every internal link resolves, images have
`width`/`height`, and the site still works with JavaScript disabled.

---

## 9. Decisions log

The running decisions log lives in **[docs/redesign-decisions.md](docs/redesign-decisions.md)**.
Add new entries there (newest first) so this file stays focused on the design system.
