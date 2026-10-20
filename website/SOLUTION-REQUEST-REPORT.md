# Solution-based cabinet requests — October 14, 2026

Existing private Sites identity and prior routes retained. The existing configurator, catalog data, finish selections, independent color versions, compatibility rules, saved cabinet project, editing/removal/undo and email-brief mechanism were reused. The primary workspace has unrelated local reversion edits, so work was performed in an isolated checkout of the published source without overwriting them.

## Implemented
- Three independent /start-order/ starting paths: whole kitchen, individual cabinets, and standalone accessories for existing cabinets. Product, width, finish, style, storage and material query behavior preserved. Ordinary cabinet browsing no longer implicitly preselects a premium accessory; intentionally selected storage links still carry that choice.
- Whole-kitchen project type, layout and optional room notes, followed by existing per-cabinet size/finish configuration and optional needs-based storage. Project context is editable and included in the consolidated brief.
- Clear basic-cabinet explanation with inclusions controlled by verified per-model data. Unknown shelving/hardware/dividers are not presented as guaranteed inclusions.
- Keep My Basic Cabinet and Explore Storage Upgrades are equally available. Basic-only choice clears add-ons and suppresses further recommendations; no default paid upgrade is added.
- Data-driven needs-to-accessory mapping, maximum three initial recommendations, explanations, reference images, price status, basic demonstrations, and all-compatible browsing. Incompatible accessories are hidden. Width changes remove invalid selections with a visible explanation.
- Bulk application to matching completed configurations; explicitly basic-only cabinets remain unchanged. Selected organizers appear in the persistent visual summary.
- Standalone organizer discovery, interior measurements, cabinet type, obstructions and quantity, with editing/removal. Standalone requests can coexist with cabinets and never require a new cabinet.
- Consolidated cost-status review separating basic cabinets, optional organizers, savings and services. Browser-local persistence includes kitchen context and standalone items. The mobile summary is collapsible.
- Homepage positioning and new problem/solution cards. Active homepage factory-direct emphasis replaced by helpful cabinet/storage language.
- Central business data in solution-data.mjs: verified origin claims, per-model inclusions, prices, availability, clearance and promotion rules. No US-made claim is currently published because supporting evidence has not been supplied. Accessories are not assigned cabinet origin claims.
- Pure pricing engine derives amounts from business product data, rejects invalid quantities/matches, honors verified promotions and date/quantity caps, limits savings to eligible accessory cost, excludes standalone units from cabinet bundle discounts, and ignores customer-provided totals. All amounts are non-binding estimates pending specification review; there is no checkout/payment system.
- Non-personal interaction hooks added for path choice, basic storage, recommendation views/selections and organizer addition/removal. No PII or query strings are emitted. No submission/order/revenue success is falsely tracked.

## Verification
node build.mjs; node check.mjs; node check-commerce.mjs; node check-solutions.mjs; JavaScript syntax checks.
76 route/link/asset checks passed. Recommendation/pricing tests cover opt-out, clearance, availability, incompatible widths, promotion dates/minimums/caps, removal recalculation, excess standalone quantity, missing prices, included-item exclusion, and ignored client totals.
Chrome tests passed: basic-only brief; compatible upgrade and visual summary; multi-cabinet request with upgrades for only some units; whole-kitchen context; standalone-only request without a cabinet line; mixed requests; bulk assignment; width correction feedback; standalone editing/removal; reload/resume; compact mobile summary and no overflow. No runtime errors in tested journeys.

## Requires verified business data or backend support
- US origin substantiation for each applicable cabinet SKU, exact product construction and base inclusions.
- Verified SKU mapping, inventory/standalone availability, internal accessory specifications and approved factory product photography/CAD. Current cabinet geometry and accessory images remain explicitly illustrative.
- Actual cabinet/accessory/finish pricebook and eligible promotion rules. No discounts or dollar totals are invented. The user-supplied $199 banner remains an unspecified starting message, not a pricebook.
- Real form submission, uploads, server-side authoritative repricing, order/payment processing, actual submission/order analytics and cross-device storage. The existing workflow prepares an email brief for the visitor to review and send; it does not display a sent-success confirmation. Optional photos/floor plans are attached in the visitor's email app.
