# Sunshine v2: generated prompt and design brief

## Role

Senior product designer and front-end engineer for B2B industrial-services websites
(mining, crushing and aggregate supply), working to the ProPage house standard and the
Refactoring UI skill.

## Prompt (as executed, 28 September 2026)

> Build a second, alternative version of sunshinellp.co.in in `v2/`, alongside the live site,
> following the approach the owner liked on nxtronikx.com. First scan global mining, crushing and
> aggregates leaders for the strongest UI and UX, pick one reference, and adopt its layout system,
> rhythm and interaction patterns. Do not copy its brand, copy, images, logo or code. Also scan local
> Hosur, Krishnagiri and Bangalore competitors and map keywords to pages. Keep every Sunshine fact from
> `docs/redesign-decisions.md` exactly as published (no new certifications, numbers, clients or claims).
> Keep the ProPage invariants: hand-built static, works with JS off, one CSS and one JS, self-hosted
> fonts, relative directory URLs, WCAG 2.1 AA verified by `tools/contrast-audit.mjs`, real logo on a
> light chip, photos-first, mailto enquiry starters, no em or en dashes. Mark v2 `noindex` and disallow
> it in robots until the owner picks a version. It must not look like the nxtronikx v2 (editorial serif,
> pill header, 28px stage panels).

## Global UI/UX scan (live, September 2026)

| Site | UI | UX | Take |
| --- | --- | --- | --- |
| Vulcan Materials (vulcanmaterials.com) | Full-bleed quarry photo, short uppercase heavy condensed headline, sticky white bar, tabbed strip on the hero's bottom edge, navy stat band with a faint contour texture and a gold rule before each number, tight radii, navy plus gold | The task (find a facility) sits in the hero. Count-up stats, auto-rotating hero, scroll-trapping map, cookie banner | **Primary reference** for the visual system |
| Heidelberg Materials (heidelbergmaterials.com) | White header, offset panel hero, one oversized rounded corner, deep green | A vertical list on the left with the panel on the right: a clean index. Hero is off-topic; tabs need JS | Borrow the list-plus-panel service index |
| Macmahon (macmahon.com.au) | Utility bar plus mega-menu, split hero, cards overlapping the hero edge | Clear contractor positioning; services as a hairline list with arrows | Borrow the utility bar and the hairline service list |
| Thiess (thiess.com) | Video hero, 96px bold sans, pill shapes, photo service rail | Clear service tiles; heavy overlays, video carries the message | Skip the pills |
| Sandvik Rock Processing | Headline set on white, full-bleed photo under it, spare | Fast to read; news lazy-loads blank | Borrow type-above-photo for inner-page heroes |
| Metso, Martin Marietta, Holcim, Tarmac | Event carousels, intro animations, news-led | Value proposition buried; content hidden until motion ends | Skip |

## Local competitors (Hosur, Krishnagiri, Bangalore)

Wilgro Infra (washed M/P-Sand, blue metal, Bangalore delivery areas), Conecc (M-Sand and AAC blocks),
Thriveni Sands (large Hosur M-sand producer), Robo Silicon (national M-sand brand, no Hosur plant shown),
KVT Blue Metals (IS 383, PWD approval shown, not local), Aadhi Boomi Mining and GEMS (Salem statutory
consultants). Each does one slice: sand, paperwork, or machines. Local crusher O&M and raising contractors
have almost no web presence.

Angle for Sunshine, using only its own services: the one Hosur partner across a crusher's whole life
(permit, erect, approve, operate, supply). Gaps to own: a plain-language view of the 2023 M.Sand policy and
PWD approval, the O&M and raising-contractor search space, and one page that shows the whole owner journey.

## What v2 adopts from the reference, and what it fixes

Adopted: full-bleed photo hero with the headline top-left in a heavy condensed uppercase face; a task
module in the hero (three email enquiry starters plus a phone line); an index strip of four anchors across
the hero's bottom edge; a thin notice bar under the hero; a navy stat band with a contour texture and a
gold rule before each number; tight 4 to 8px corners; a utility bar above a sticky white header; a hairline
service list with arrows (Macmahon); a list-plus-panel services page (Heidelberg); type above the photo on
inner pages (Sandvik).

Fixed: no count-up numbers (final values are in the HTML); no auto-rotating hero; no embedded map (a
Google Maps link only, no third-party request); no cookie banner (there are no cookies); the value
proposition names what, where and who in the first screen; the headline sits on a solid navy scrim and is
audited; the services index is plain anchor links with every panel visible, so nothing depends on JS.

## Art direction (v2)

- Register: industrial / bold, "quarry grade". Strong, utilitarian, confident; the opposite of the
  nxtronikx editorial serif.
- Type: Barlow Condensed 600/700 for display, headings, labels and buttons (uppercase through CSS),
  Barlow 400/600 for body. Self-hosted woff2, latin subset.
- Colour: logo navy `#0d2236` for dark bands, sun gold `#f2a91c` as the primary-button fill, hill green
  for ticks and tags, crushed-stone neutrals (`#f3f1ec`, `#e9e5dc`) for light surfaces. Every pair is in
  the token comments of `v2/css/main.css` and passes the DOM audit.
- Shape: 4px buttons, 8px cards, one light source from above, hairlines instead of boxes where possible.
- Signature: rising-sun contour arcs (original artwork drawn from the logo's sun) on the navy bands, and
  the five-step life-cycle rail (Permit, Erect, Approve, Operate, Supply). The aggregate card draws the
  40, 20, 12 and 6 mm grades to relative size.

## Facts rule

Only the facts in `docs/redesign-decisions.md`. Stat numerals are counts of things already published
(the 2017 founding, the four promoters, the eight services, the 24x7 delivery service), never tonnes,
capacities, project counts or client counts. Equipment brands are text, never their logos.
