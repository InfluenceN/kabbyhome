# Amber Leaf UX redesign — October 14, 2026

Updated the existing private Sites project appgprj_6ac82b995af48191a9404f5ec62004f1; retained all prior routes and the four finishes.

## Audit and implementation
- Static generator, shared navigation, gallery renderer, catalog compatibility rules and browser-local cabinet project reused. No framework replacement or unrelated refactor.
- Six concise navigation categories with keyboard/focus image previews and mobile disclosure menus. Primary estimate CTA and secondary quote action.
- Homepage purchasing hierarchy, kitchen size cards, five layout diagrams, whole-kitchen and individual-cabinet paths, interactive storage explorer, and five purchasing steps. Existing hero controls, finish stories, image highlights and animated process scenes preserved.
- New /kitchens/, /estimate-your-kitchen/ and /measurement-guide/ routes with canonical URLs and sitemap entries.
- Six-step scope estimator, optional measurements, back navigation, device-local persistence, explicit itemized pricing status, and kitchen choices included in the quote brief.
- Catalog width filtering, selected-filter summary, collapsible refinement, simpler cards, visible Quote required status, and progressive width/storage controls.
- Cabinet project duplication, quantity editing and non-destructive addition from discovery, alongside existing independent colors, editing, removal and undo.
- Privacy-safe analytics event hook (amber:analytics, optional existing dataLayer). Event names and route paths only; no PII, measurement notes or query strings. No analytics provider configured. Successful submission and confirmed order events intentionally absent because neither transaction exists.

## Validation
node build.mjs; node check.mjs; node check-commerce.mjs; node --check dist/commerce.js; node --check dist/planning.js.
76 generated routes; local links/assets, headings and responsive metadata passed. Chrome tested desktop navigation, width filtering, estimator progression, quote preparation with kitchen scope, mobile navigation and absence of horizontal overflow on main pages. Cabinet duplication, quantity edits, removal undo and saved-project resume passed. Accessory explorer passed. No browser runtime errors during tested journeys.

## Business and backend dependencies
No SKU pricebook or verified dimension/material inventory supplied. $199 is the user-provided banner starting price with unspecified inclusions; it is not used to calculate a package total. No fictitious totals, warranties, lead times, testimonials or installed projects added. Cabinet geometry remains explicitly illustrative; verified photography or accurate factory CAD is needed before replacing primary representations. Kitchen size cards are scope starters, not fixed priced bundles; cabinet quantities require a room plan. Existing generated kitchen and accessory imagery stays labeled conceptual/reference.

Quote briefs are prepared locally and opened in the visitor's email app; no message is automatically sent. Real submission, upload, order/payment processing, response tracking, cross-device project storage and live analytics reporting require configured services. Physical construction, warranty, cancellation and delivery terms still need business confirmation.

## Competitor review
Reviewed Semihandmade homepage, pricing estimator and design services. It offers BOXI complete cabinets as well as IKEA fronts. Adapted its clear discovery and planning structure without copying its prices or making inaccurate doors-only claims.
Sources: https://www.semihandmade.com/ ; https://www.semihandmade.com/pages/estimator ; https://www.semihandmade.com/pages/design-services .
