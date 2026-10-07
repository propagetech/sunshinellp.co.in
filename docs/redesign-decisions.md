# Sunshine Mining & Crushing Solutions LLP: redesign decisions log

This is the running decisions log for the rebuilt site. Newest entries first.
The design system and conventions live in `CLAUDE.md`; this file records the
choices and the reasoning behind them so they are not relitigated.

---

## Analytics: Cloudflare Web Analytics, not Google Analytics (7 October 2026)

The builder site carried a Universal Analytics tag (`UA-113020394-28`, still visible in `archive/`).
Google stopped processing UA data in 2023, so it had recorded nothing for years; the rewrite dropped it.

Decision: use **Cloudflare Web Analytics** for visitor counts, and Google Search Console for search data.

- Cookieless and does not track individuals, so no consent banner is needed and the site's
  no-tracking rule holds.
- No code in the repo. Enable it on the Pages project (`sunshinellp-co-in`, Manage, Web Analytics,
  Enable Web Analytics); Cloudflare injects the beacon on the next deployment. It cannot be enabled
  until the Pages project exists, so it is a go-live step.
- Small, deferred script (a few KB); re-run Lighthouse on Home after go-live to confirm the scores
  quoted to the client still hold.
- GA4 was rejected: an extra script and cookies on every page, a consent notice, and more than a
  four-page site whose goal is phone calls needs.


## Client chose the classic site (1 October 2026)

Sreenivasulu (9626714999) replied to the preview: keep the OLD website design and layout, not
either redesign, with these updates. All are applied to the classic site at the root.

| Topic | Client answer | On the site |
| --- | --- | --- |
| Version | Keep the old site and its design/layout | Builder site rewritten by hand to ProPage rules, same content and layout |
| Address | Plot No. 54, HIG II, Brindhavan Nagar, Phase 7 TNHB, Bagalur Road, Hosur, Krishnagiri District 635109 | Contact column, map, JSON-LD |
| Map | https://maps.app.goo.gl/EZGnrQm15zKDybBs8 (resolves to 12.7452569, 77.8298826) | Google Maps embed in the old 300px map slot, plus a link |
| Phones | 9626714999, 9398698259 | 6382307976 removed |
| Emails | svg@sunshinellp.co.in, svgtempl@gmail.com | admin@ and marketing@ removed; the form goes to svg@ with svgtempl@ in cc |
| Promoters | Two | "4 promoters" became "2 promoters" (home, about, directors) |
| LLPIN, GSTIN | Correct | Footer line on every page, `identifier` and `taxID` in schema |
| Start and registration | 2017 start, 2019 LLP: correct | About: "Established in the year 2017 ... and registered as an LLP in 2019" |
| Delivery | 24/7 | Existing "24x7 services" copy kept |
| Reach | Work outside Tamil Nadu and Karnataka too | Existing "offered in India" copy kept |
| Plants | 3-stage and 4-stage: jaw, cone, VSI, hydrocyclones/bucket classifiers; not HSI | One sentence added to Operation And Maintenance Contractors |
| Approvals, certifications | Do not include | None published. "Approval from PWD" stays as a service |
| Images | Keep the existing general images | All original images reused; the two banner photos that lived only on the old CDN are now self-hosted (`imgs/banner-about.webp`, `imgs/banner-services.webp`) |

Decisions:
- The first rebuild moved to `/v1/` (with its own `CLAUDE.md`), v2 stays at `/v2/`, both noindex and
  disallowed. `archive/` stays untouched as the reference.
- Rewritten to ProPage rules: semantic HTML, one CSS, one JS, self-hosted fonts, no jQuery, builder
  scripts, CDN or analytics (the Universal Analytics tag was dead). The form now composes a `mailto:`
  (the old one posted to a builder endpoint that no longer exists). The map needed a Maps key the
  site never had, so it is now an embed.
- Directory URLs (`/about/`, `/services/`, `/contact/`) with forwarding stubs and `_redirects` for the
  old `.html` URLs. Service anchors are now semantic (`#operation-maintenance` and so on).
- AA colour: green text and buttons on light surfaces use `#6a8f2e` (large headings) and `#557724`
  (small text, buttons) instead of `#85ab3f`, which is 2.7:1 on white. The 404 numerals and button
  were also darkened. Hero overlay 0.42 (was 0.37) for legibility.
- Accessibility additions with no visual change: one h1 per page (inner banners), visually hidden form
  labels, descriptive alt text, "Read More" links with hidden context, keyboard-operable dropdown.

Spelling and punctuation fixes (wording kept): "has been emerged" to "has emerged"; missing full stop
after "power crushing plants"; "delivers" to "deliver"; "service providers" to "service provider";
"Errection" to "Erection"; "moto" to "motto"; "post-due" to "past-due"; "Puzzulona" to "Puzzolana";
"expertize" to "has expertise"; "early face" to "early phase"; "geo statistics" to "geostatistics";
"technology- based" to "technology-based"; "up gradation" to "upgradation"; "equipment's solution" to
"equipment solution"; "Customers/ dealers" to "customers/dealers"; "Our teams accumulated" to "Our
team's accumulated"; "Sunshine Mining and crushing solution" to "Sunshine Mining & Crushing
Solutions"; "Multidisciplinary Engineering And Technical Services Team Offers..." to sentence case;
"offered in the India" to "offered in India"; the cut-off "regional expertise and cultural" now ends
"regional expertise."; "We are doing to get the approval" to "We help get the approval"; "setting of
Laboratory" to "setting up of Laboratory"; the PWD policy sentence split at the date; stray spaces
in "( P.Sand) ,", "( RP/PL/ML)", "( PWD)", "Macadam(WMM)", "12mm", "We specialize in :", "Our
Commitment :" and double spaces; en dashes in the values list became colons.

Left as published (flag to the client if wanted): "LA act 1857" (the Land Acquisition Act year),
the 09.03.2023 policy date, "Sunshine Mining is the number one solutions provider" (Vision), and the
title-case service names.

---

## Public-record facts (29 September 2026)

A third-party research brief (sources: filesure company page for LLPIN AAO-5050, IndiaMART Hosur
maintenance-contractor listings) gave registry and directory data. What we did with each item:

| Item | Public record | Status on the site |
| --- | --- | --- |
| Entity | Limited Liability Partnership, LLPIN AAO-5050 | v2 About panel only, marked "to be confirmed". Not in schema, footer or the live site |
| Incorporated | 11 March 2019 | Wording on both builds: "Working since 2017, registered as an LLP in 2019". Schema `foundingDate` stays 2017 (the company's own claim) |
| GSTIN | 33ADWFS8622H1ZJ (check digit valid, state 33 Tamil Nadu, PAN type F firm/LLP) | v2 About panel only, marked "to be confirmed" |
| Address | 2nd Floor, 86/20, Srinivasa Nilayam, Phase 7, TNHB, Brindavan Nagar, Pappanna Thottam, Hosur, Krishnagiri, Tamil Nadu 635109 | Published on both builds (footer, contact, JSON-LD `streetAddress`). Settles the archive variant noted below |
| Directory services | Crusher O&M, stone-crusher AMC, cone-crusher / sand-cone maintenance | AMC added to v2 (it is also in the archive). Cone, VSI and HSI maintenance NOT published (marketplace only) |

filesure returned 403 when re-checked, so the LLPIN and the incorporation date were not independently re-verified.

Claims softened on both builds: "one of the prominent providers" became "an established provider"; "delivered
across India" became "Hosur, Krishnagiri and Bangalore, and wider Tamil Nadu and Karnataka".

Not followed from the brief: a Google Map embed and a web form (house rules: no third-party requests, no
backend); narrowing the site to O&M only (the eight services come from the company's own site); a projects
gallery before real photos exist.

### Owner to confirm
- LLPIN AAO-5050 and GSTIN 33ADWFS8622H1ZJ (then move them into the footer, the About panel on both builds,
  and JSON-LD `legalName`, `identifier`, `taxID`).
- Founding: is 2017 the start of trading, with the LLP in 2019? Which year should `foundingDate` carry?
- The "2nd Floor" address form.
- The "24x7" delivery service and whether mining and crushing work is offered pan-India.
- Cone crusher, VSI, HSI and sand-cone maintenance: offered or not.
- Whether breakdown maintenance belongs in the plant enquiry starter (added in v2 as a work type under O&M).

---

## v2 alternative (28 September 2026)

A second version lives in `v2/` for the owner to compare with the live site, following the nxtronikx.com
approach the client liked. Brief, global and local competitor scans, and art direction:
`docs/v2-redesign-prompt.md`. Visual system adapted from Vulcan Materials (layout and rhythm only, no brand,
copy or assets), services index from Heidelberg Materials. Same facts, same five pages, same contact details.
v2 pages are `noindex, nofollow` and `/v2/` is disallowed in `robots.txt`. v2 is self-contained (its own
`css/`, `js/`, `fonts/`, `imgs/`). The pages were generated once by `drafts/build-v2.py` (dev only, gitignored)
so the header and footer are identical and the FAQ schema matches the visible answers; edit the HTML directly
from now on.

- Header brand: v2 uses `imgs/logo-horizontal.webp`, a horizontal lockup cut from the real logo (sun emblem +
  real "SunShine" wordmark) with `make-logo-lockup.mjs`, on a light chip. The footer uses the full stacked logo.
  The live site's header pairs a 44px logo with a CSS text wordmark, which the house rules do not allow; fix it
  there too if v2 is not chosen.
- Keywords to pages: Home targets "M.Sand suppliers in Hosur" and crusher O&M; Services targets O&M, raising
  contractors, crusher erection and statutory permissions; FAQ targets the 2023 M.Sand policy, PWD approval and
  M.Sand vs P.Sand; Contact targets "M.Sand quote" and delivery to Bangalore.
- New FAQ entries (M.Sand vs P.Sand, manpower, accounting, statutory permissions) reuse archive wording only.
- Policy date: the archive says the Tamil Nadu M.Sand policy was released on 09.03.2023; news reports (DT Next,
  10 March 2023) give 10 March 2023. v2 says "March 2023". Needs owner input if an exact date is wanted.
- Address variant: the archive home page reads "86/20, Srinivasa Nilayan, TNHB Phase 7, Brindavan Nagar,
  Pappanna Thottam, Hosur"; the archive contact page reads "86/20, Srinivasa Nilayam, Phase 7, Brindavan Nagar".
  Resolved 29 September 2026: both builds now publish the full registry form (see Public-record facts).
- Photos: the on-theme photos from the old site read as stock. v2 uses them with descriptive alt text only and
  never labels them as Sunshine plants or projects. `photo-excavator.webp` is 257 by 171 and is not used (too
  small for any slot). Real plant, fleet and team photos are still needs-owner-input.
- Not published (nothing to verify): BIS, ISO, NABL or PWD approval of Sunshine's own product, capacities,
  project or client counts. Competitors lead with these; ask the owner which are real.
- To promote v2: move its files to the root, delete the robots meta on each page, drop `Disallow: /v2/`, and
  add forwarding pages or a redirect for `/v2/` URLs, as was done for nxtronikx.

---

## The business

**Sunshine Mining & Crushing Solutions LLP** is a mining, crushing and aggregate
services company based in Hosur, Tamil Nadu, India. Established in 2017 by four
promoters with specialised skills in planning, mining and crushing, logistics,
statutory fulfilment and accounting. It positions itself as a "concept-to-closure"
solution provider across the mining project life cycle, plus trading of manufactured
sand (M.Sand), plastering sand (P.Sand) and aggregates for the Bangalore and Hosur
construction market.

### Services (from the existing site, copy rewritten, no facts invented)
1. Operation and Maintenance Contractors (crusher plant O&M)
2. Raising Contractors in Mining (mine contracting, mine development, technical services)
3. Trading: M.Sand, P.Sand and Aggregate Supply (40/20/12/06 mm aggregate, quarry dust, WMM, GSB; GPS tracking)
4. Accounting Job Work (book-keeping, taxes, audit, payroll)
5. All Statutory Permissions for Mines and Crushers (concessions, liaison, land acquisition, CSR/EHS)
6. New Crusher Erection and Plant Audits (Puzzolana/Propel/Metso turnkey plants)
7. Manpower Services (geological, geotechnical, electrical, mechanical, civil expertise)
8. M.Sand / P.Sand product approval from PWD Tamil Nadu and on-site lab setup (per the 2023 M.Sand policy)

### Contact (verified REAL from the old contact page, used consistently across pages)
- Email: admin@sunshinellp.co.in, marketing@sunshinellp.co.in (lead with admin@)
- Phone: +91 96267 14999, +91 63823 07976, +91 93986 98259
- Address: 86/20, Srinivasa Nilayam, Phase 7, Brindavan Nagar, Hosur, Krishnagiri Dt, Tamil Nadu 635 109, India
- Geo: 12.7436805, 77.8243748 (from the old Google Map embed)

These contact details are consistent between the old home and contact pages, are real
business addresses/numbers (not builder placeholder text), so they are kept and used
in the footer, the contact page, the `tel:` and `wa.me` links and the JSON-LD.

## Canonical domain

Production canonical is **https://www.sunshinellp.co.in/** (with `www`), directory
(trailing-slash) form. Every canonical, OG `og:url`, sitemap `loc` and JSON-LD
`@id`/`url` uses it. Preview is the GitHub Pages project page
`https://propagetech.github.io/sunshinellp.co.in/` (a subpath), which is why assets and
internal links are depth-aware relative (see URL convention below).

## Brand and colour (derived from `imgs/logo.webp`)

The logo is a rising sun: a gold/amber sunburst over a green hill, with "SunShine" set
in blue. So the palette is three brand hues on a warm cream field:

- **Gold/amber** (the sun) is the primary brand accent and primary-button fill.
- **Leaf green** (the hill) is the secondary accent.
- **Blue** (the wordmark) is the tertiary/link accent and dark-section anchor.

Cream/off-white background keeps the warm, optimistic "sunshine" feel and reads as
premium rather than the cold white of the old builder template.

Every pairing was verified against WCAG 2.1 AA (text >= 4.5:1, large text / UI >= 3:1)
by computing ratios, then re-verified DOM-aware with `tools/contrast-audit.mjs`.

| Token | Hex | Use | Contrast |
| --- | --- | --- | --- |
| `--cream` | `#f7f3e9` | Page background | base |
| `--cream-2` | `#fbf8f0` | Alt section background | base |
| `--surface` | `#ffffff` | Cards | base |
| `--ink` | `#1f2730` | Primary text | 13.6:1 on cream |
| `--ink-2` | `#454f5b` | Secondary text | 7.5:1 on cream |
| `--ink-3` | `#586472` | Muted / meta text | 5.4:1 on cream |
| `--slate` | `#1c2b36` | Dark sections | white 14.5:1 |
| `--slate-2` | `#16222b` | Footer | white 16.2:1 |
| `--cream-muted` | `#c5cdd6` | Secondary text on slate | 9.0:1 on slate |
| `--gold` | `#f0a818` | Sun accent, primary-button fill, decorative | label 7.1:1, fill |
| `--gold-strong` | `#805a04` | Gold text (eyebrow, brand) / borders / icons on light | 5.6:1 on cream |
| `--gold-on-dark` | `#f3bb4d` | Gold text / eyebrow on slate | 8.3:1 on slate |
| `--green` | `#6ba539` | Green decorative fill | fill only |
| `--green-ink` | `#3d6b16` | Green text / secondary-button fill | 5.7:1 on cream, white 6.3:1 |
| `--green-on-dark` | `#a7d36a` | Green text on slate | 8.4:1 on slate |
| `--blue` | `#1e73be` | Blue decorative fill | UI 4.5:1 on cream |
| `--blue-ink` | `#155a96` | Blue text / links on light | 6.5:1 on cream |

Button rules that keep contrast valid:
- **Primary** = `--gold` fill with `--slate` label (7.1:1) and a `#b07f0c` border so the
  component boundary is >= 3:1 on cream.
- **Secondary** = transparent with `--blue-ink` border and `--blue-ink` label on light;
  on slate the border/label become `--gold-on-dark` / white.
- `--gold` is only 1.8:1 on cream, so it is NEVER used for text on a light surface. Use
  `--gold-strong` (#805a04, AA for small text such as the eyebrow and brand wordmark) on
  light, and `--gold-on-dark` on slate. `--gold` is fine as a fill behind dark text, on
  slate, or as a decorative shape.
- `--green` (2.7:1 on cream) is decorative-fill only; for green text use `--green-ink`.

Focus ring: 3px `--blue-ink` on light, `--gold-on-dark` on slate.

### Contrast rule: colour belongs to the component, not the container
A reusable component class (`.eyebrow`, `.tag`) owns its colour. Container/layout
selectors must not set `color` on bare descendants, or a selector like `.cta-band p`
(0-1-1) out-specifies a component class like `.eyebrow` (0-1-0) nested inside it and
silently repaints it. Where descriptive text needs a colour, it is excluded with
`:not(.eyebrow)`. A "for dark backgrounds" colour is never reachable on a light surface
through the cascade. Verified by the DOM audit, never by eye.

## Typography

- Headings: **Sora** (a geometric, confident, slightly technical sans) at 600/700. It
  reads as solid and industrial, fitting a mining/engineering business, while staying
  modern and premium.
- Body and UI: **Inter** at 400/500/600/700.
- Both are self-hosted woff2 (latin subset) with `font-display: swap`. Critical weights
  (`inter-400`, `sora-700`) are preloaded in each page head. No Google Fonts / CDN.

## Information architecture (pages)

The old site had Home, About Us, Services (eight services as anchors) and Contact. The
rebuild keeps that and adds an FAQ and a styled 404:

| Page | File | URL |
| --- | --- | --- |
| Home | `index.html` | `/` |
| About | `about/index.html` | `/about/` |
| Services | `services/index.html` | `/services/` (eight services, anchor targets) |
| FAQ | `faq/index.html` | `/faq/` (FAQPage schema) |
| Contact | `contact/index.html` | `/contact/` (email-led, no backend) |
| 404 | `404.html` | served by GitHub Pages at unknown paths |

## Content approach

Rewrite the existing copy for clarity and outcomes (lower risk, audit-ready plants,
reliable supply, compliant operations). No facts are invented: services, the 2017
founding, the four promoters, the equipment brands, the aggregate sizes and the 2023
PWD M.Sand policy all come from the old site. The grandiose "global network" stock
phrasing is toned down to what is credible for a Hosur-based LLP.

## Imagery plan

The old `imgs/` mixes genuine on-site mining/crushing/aggregate photos with generic
stock (an office desk for "accounting", a gavel for "statutory permissions", wooden
blocks, a person signing paper). After a visual montage pass:

- **Kept (genuine, on-theme) photos**, renamed `photo-*.webp`: crusher O&M, mine quarry,
  M.Sand stockpile, conveyor/erection, manpower (rebar/workers), crusher plant, conveyor
  with gravel, plant by a field. Used in the hero, service heroes and the gallery.
- **Dropped from photo use** (generic stock): the office/gavel/blocks/signing images.
  For those service cards (accounting, statutory permission, PWD approval) the page uses
  original undraw-style flat SVG illustrations recoloured to brand instead.
- Original undraw-style brand SVGs live in `imgs/illustrations/`.
- Favicon, OG card (1200x630) and PNG app icons are generated FROM the logo.

## Schema types

- Home: `ProfessionalService` (`@id` `#organization`, with address + telephone + geo, all
  real) + `WebSite` + `WebPage`.
- About: `AboutPage` + `BreadcrumbList`.
- Services: `CollectionPage` + a `Service` `ItemList` of all eight services + `BreadcrumbList`.
- FAQ: `FAQPage` (schema answer text matches the visible answer text exactly) + `BreadcrumbList`.
- Contact: `ContactPage` + `BreadcrumbList`.
The `#organization` node is the single source of truth; other pages reference it by `@id`.

## URL convention: directory URLs, path-portable

Each page is a folder with `index.html`, served at `/slug/`. Home is `index.html` at `/`.
`404.html` stays at the repo root. Assets and internal links are depth-aware relative so
the site works at BOTH the production root domain AND the github.io project subpath:
- Home (depth 0): `css/...`, `imgs/...`, `about/`, home link `./`.
- Inner pages (depth 1): `../css/...`, `../services/`, home link `../`.
- `404.html`: root-absolute `/css/...` (served at arbitrary depths; correct for the
  production root, degraded only on the github.io preview, an acceptable edge case).
Canonical, `og:url`, sitemap `loc` and JSON-LD `@id`/`url` stay ABSOLUTE on the
production domain in trailing-slash form, regardless of where the site is previewed.

## Standards (definition of done)

Semantic HTML5, one `css/main.css`, one `js/main.js` (progressive enhancement; the site
works fully with JS disabled). Self-hosted fonts. WCAG 2.1 AA, DOM-audited green. Per-page
title/description/canonical/OG/Twitter, `robots.txt` (Disallow `/archive/`, points at the
sitemap), full `sitemap.xml`, `site.webmanifest`, favicon, styled 404. No em dashes
anywhere. Contact is email-led with a `mailto:` compose and a no-JS native mailto form;
nothing is stored on the site.

## Items needing the owner's confirmation

- Phone numbers and the postal address are taken as real from the old site (they are
  specific and consistent, not placeholder text). Worth a quick confirm before go-live
  that all three numbers and the address are current.
- Two emails were listed (admin@ and marketing@). The rebuild leads with admin@ and lists
  marketing@ as a secondary contact. Confirm the preferred primary inbox.
