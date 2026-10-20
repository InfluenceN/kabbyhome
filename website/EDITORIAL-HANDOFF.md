# Editorial redesign — October 15, 2026

## Route map

All 77 existing routes remain available. No redirects or URL replacements were required.

| Previous destination | New primary navigation | Retained use |
| --- | --- | --- |
| Inspiration → `/projects/` | Kitchen Inspiration → `/kitchen-inspiration/` | `/projects/` remains the explicitly illustrative concept portfolio and comparisons directory. |
| Planning & Help → `/how-it-works/` | Ideas & Guides → `/ideas-guides/` | `/how-it-works/` remains the cabinet process guide. |
| `/resources/` | Ideas & Guides library linked above existing resources | Existing guide URLs remain unchanged. |
| Customer story destinations | `/neighbor-stories/` from both new menus | One canonical story URL pattern: `/neighbor-stories/{slug}/`. No verified projects are available. |
| Visit Showroom | Unchanged | Geographic service pages are not customer stories. |

New routes: three hubs plus twelve article previews = 92 total routes. Existing product detail pages now link to relevant guide drafts. Header/footer link to the new hubs. FAQ, Request a Quote, cabinet planner and catalog routes are retained.

## Content management

`editorial-data.mjs` stores article slug, category, summary, hero media, sections, optional author/reviewer, dates, calculated reading time, related product/article IDs, review needs and status. The first four drafts contain the most developed content; the other eight are shorter initial drafts. All twelve are labeled review drafts, carry `noindex,follow`, have no publication date or claimed reviewer, and are omitted from the sitemap. No expert credentials are invented. The Expert Tips category is a browsing category, not a verified expert byline.

`editorial-pages.mjs` supplies the reusable hub, article, story and contextual product-reading templates. `dist/editorial.js` handles search, category filtering, keyboard storage tabs and future story filtering. `dist/editorial.css` provides responsive editorial styling. `check-editorial.mjs` verifies content references, route uniqueness, fragment links, draft indexing and the story empty state.

### Review before final article publication

1. Confirm editorial accuracy and product-specific advice. Measurement, mounting, hardware, finish care, loads, clearances and renovation advice require qualified review where relevant.
2. Use actual installation manuals and applicable local requirements for technical statements; these drafts intentionally do not prescribe mounting fasteners, load ratings or universal clearances.
3. Add reviewer identity only with verified credentials and consent. Record completed review and publication approval in the data/workflow.
4. Replace draft labels with publication metadata only after review. Update the template/schema/indexing rules intentionally; changing a data label alone does not publish an article.
5. Confirm all illustration usage records and choose final photography; current media are retained existing Site assets, not client proof or precise installation diagrams.

## Neighbor Stories

The collection is empty. `verifiedStories()` gates entries by verification and permission fields; the index exposes filters only for actual verified records with populated attributes. The shared template supports overview, actual client problem, needs, original layout, solution, finishes, accessories, before/after media, improvements, approved feedback and related products. Never promote a generated concept into a client story.

For each future entry, obtain permission-cleared before and after images of the same project, documented project facts, cabinet and accessory specifications, location approval, explicit feedback permission and final editorial approval. Record media attribution/usage permissions for each asset. Do not add personal addresses or identifying details without permission.

## Storage integrity and missing media

Storage comparisons reuse existing illustrative product geometry and accessory references. Models are matched by catalog accessory kind and available planning width. Exact usable openings, mounting, depth, movement paths and capacity still require confirmation. Basic cabinet purchase remains a complete option.

The “Inside the transformation” section is an explicitly labeled concept explanation. It does not claim measured results or a real customer before-and-after. The two external image links supplied previously could not be loaded; neither has been embedded. Matched, permission-cleared project photographs are still needed.

No real demonstration videos were supplied. “Accessories in Action” links to the existing interactive cabinet concept; it is not labeled as video.

## Reference research

Patterns reviewed: IKEA’s problem-led organization guidance and contextual product links; Semihandmade’s visual past-project collection; Home Depot’s task-based installation guide. All Amber Leaf article wording is original. No competitor images or text were copied.

- [IKEA kitchen cabinet organization](https://www.ikea.com/us/en/rooms/kitchen/how-to/how-to-organize-kitchen-cabinets-and-drawers-8-ideas-that-save-time-and-space-pube8ed7a50/)
- [Semihandmade Past Projects](https://www.semihandmade.com/blogs/past-projects)
- [Home Depot cabinet installation guide](https://www.homedepot.com/c/ah/how-to-install-kitchen-cabinets/9ba683603be9fa5395fab9039ac0c70)

## Verification

Build, all-route link/asset checks, commerce checks, solution compatibility checks and editorial integrity checks pass. Browser QA covers desktop/mobile overflow, search, categories, empty Neighbor Stories, roving keyboard tabs, desktop mega menus, Escape dismissal and mobile navigation. No runtime errors observed. Automated axe is not installed; accessibility was checked through semantic markup, names, keyboard behavior and responsive reading order. No package/lint configuration exists; syntax checks were used for changed modules.
