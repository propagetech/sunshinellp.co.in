# Sunshine Mining & Crushing Solutions LLP: classic site brief

The live site is the **classic design**: the client's original builder site (same content, same
page layout, same general images), rewritten by hand to the ProPage standard in October 2026.
The client chose it over both redesigns. Do not redesign it; keep changes faithful to the layout.

- Semantic HTML5, one `css/main.css`, one `js/main.js` (progressive enhancement), no framework,
  no build step. Works with JS off (menu always open on small screens, SERVICES is a link, the
  contact form posts a native `mailto:`).
- Self-hosted fonts in `fonts/`: Playfair Display 700 (headings), Quicksand 400/700 (body),
  Open Sans 700 (header nav only). No Google Fonts, CDN, jQuery or tracking
  (no Google Analytics; visitor counts come from Cloudflare Web Analytics, see below).
- Directory URLs, path-portable relative links (`../` on inner pages); `404.html` is root-absolute.
  Canonical, OG, sitemap and JSON-LD use `https://www.sunshinellp.co.in/`.
- Old builder URLs (`about-us.html`, `services.html`, `contact-us.html`, `home.html`) are noindex
  meta-refresh stubs for GitHub Pages and 301s in `_redirects` for Cloudflare Pages.
- Third-party requests: the Google Maps embed on the home page (client asked for the pin), and, once
  live on Cloudflare Pages, the cookieless Cloudflare Web Analytics beacon
  (`static.cloudflareinsights.com`). The beacon is not in the HTML: Cloudflare injects it at deploy time
  after Web Analytics is enabled on the Pages project (Manage, Web Analytics). Do not add GA or any
  other tracker to the pages.

## Files

```
index.html  about/  services/  contact/  404.html     classic pages
about-us.html services.html contact-us.html home.html  old-URL forwarding stubs
css/main.css  js/main.js  fonts/  imgs/                classic assets
v1/   first redesign (Sora/Inter, cream), noindex, own assets, own CLAUDE.md
v2/   second redesign (Barlow, navy/gold), noindex, own assets
archive/  untouched builder export: the reference for content and layout (disallowed)
drafts/build-classic.py   one-time generator for the classic pages (gitignored)
drafts/build-v2.py        one-time generator for v2 (gitignored)
docs/redesign-decisions.md  decisions log, newest first
```

The header and footer are identical on every page except `aria-current` and the path prefix.
For a small change, edit the HTML on every page; for a structural change, edit
`drafts/build-classic.py` and regenerate, then check `git diff`.

## Design tokens (css/main.css)

| Token | Value | Use |
| --- | --- | --- |
| `--green` | `#85ab3f` | Original brand green: decorative, and headings on dark photo bands only |
| `--green-heading` | `#6a8f2e` | Large green headings on light (section titles, service h2s) |
| `--green-ink` | `#557724` | Small green text, nav hover/active, pill buttons (white label 5.2:1) |
| `--yellow` | `#fda81d` | Underline bar, "SUNSHINE" in the hero |
| `--orange` | `#f1720c` | Services dropdown top border |
| `--heading` | `#45494d` | Block headings |
| `--text` | `#505052` | Body text, 17px Quicksand 500 (darkened from the original `#626263` to AAA 8:1 for older readers) |
| `--band` / `--band-2` | `#f3f3f3` / `#f2f2f4` | Services band, alternate service rows, form fields |
| `--footer` | `#191919` | Footer, with `#e6e6fa` text and `#0088cc` credit link |

The original green `#85ab3f` is 2.7:1 on white, below AA even for large text, so green text and
buttons on light surfaces use the two AA shades. That is the only intended visual difference
from the original. Verify with `node tools/contrast-audit.mjs` (must print RESULT: PASS).

Layout: content area 1366px plus 100px side padding (`--max:1566px`, `--pad-x`), 20px at 979px
and below. Breakpoints 1024 (tiles 2-up), 979 (hamburger, tight padding), 800 (tiles 1-up),
768 (hero h1 36px), 767 (rows stack), 500 (hero h1 32px, images full width). Header is fixed
(121px, 103px on mobile) and the home hero sits under it at full viewport height.

## Senior-friendly rules (the founder is over 60)

Keep body text at 17px or more and no text below 14px; keep body grey at AAA contrast; form fields
keep visible labels above them (not placeholder-only) and errors appear in large red text under the
field; the phone number stays visible in the header on desktop and as the round call button on phones.

## Facts (client confirmed, 1 October 2026)

- Address: Plot No. 54, HIG II, Brindhavan Nagar, Phase 7 TNHB, Bagalur Road, Hosur, Krishnagiri
  District - 635 109. Map pin 12.7452569, 77.8298826 (https://maps.app.goo.gl/EZGnrQm15zKDybBs8).
- Phones +91 96267 14999 and +91 93986 98259. Emails svg@sunshinellp.co.in and svgtempl@gmail.com.
- Two promoters. Established 2017, registered as an LLP in 2019. LLPIN AAO-5050, GSTIN
  33ADWFS8622H1ZJ (shown in the footer and schema).
- Plants maintained: 3-stage and 4-stage, jaw, cone, VSI, hydrocyclones and bucket classifiers.
  Not HSI. 24x7 delivery. Work outside Tamil Nadu and Karnataka too.
- Do not publish approvals or certifications.
- No em dashes or en dashes in copy.

## Design skills (house)

Visual polish follows the **`refactoring-ui`** skill (hierarchy, spacing scale, type scale,
HSL/OKLCH ramps, depth, imagery, finishing touches). Load it for any CSS/UI pass, but on this
site keep changes faithful to the classic layout the client chose.

- Skill: `~/.claude/skills/refactoring-ui/` (also `~/.cursor/skills/refactoring-ui/`)
- Human PDF (do not paste book text here): `/Users/chetan/Downloads/Learning/refactoring-ui_compress 2.pdf`
- Full rebuilds: `site-rebuild` + `../_rebuild-kit/`. ProPage invariants (WCAG AA, real logo,
  photos-first, type-by-register, no em/en dashes) override generic taste.
