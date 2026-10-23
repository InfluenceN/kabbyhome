# Amber Leaf website

Multi-page static website generated from `build.mjs`. Source and deployable pages are both tracked; no dependencies or build service are required to serve `dist`.

```sh
node build.mjs
node check.mjs
node preview.mjs
```

Preview: http://127.0.0.1:4173

Edit page content and templates in `build.mjs`, styles in `dist/site.css`, and interactions in `dist/site.js`. `build.mjs` writes 52 HTML routes, catalog data and a sitemap. Re-run it after editing content. The hosting identity is in `.openai/hosting.json`.

Implemented: responsive editorial homepage, desktop visual mega menus and mobile navigation, three illustrative collections, image-detail carousels, local favorites, style/color/material filters, image hotspots, five-step homeowner/professional planner with validation and plain-text download, 20 searchable FAQs, 16 location pages, seven comparison frameworks, five guides, service pages, professional and sustainability pages.

Company content needed before public launch: actual catalog/pricebook/specifications, permitted project photography and local case studies, service coverage/policies, certification and partnership evidence. Generated photography and collection concepts are marked illustrative. City pages are excluded from indexing until useful local proof is available. Comparisons are frameworks, not verified current retailer product reviews. Two peer-reviewed research sources support methodological background, not product-specific claims.

The planner and favorites use browser storage only. Plans are downloaded, not submitted; no payment, order or quote is sent. The quote summary opens a prefilled email to info@amberleafhome.us; the user must review and send it. The five-step flow offers design help or plan review, an editable cabinet dimension schedule, independent door/color/material preferences, installation scope, and an itemized quote request. Confirmed pricing and service fees are still required for automatic dollar quotes. The privacy page describes current behavior. Browser WebMCP tools expose catalog filtering and a read-only device-local plan where supported.

Hosting defaults to owner-private; no custom company domain is connected.

Showroom: 1201 W 36th Pl, Chicago, IL 60609. Studio / Factory: 1200 W 37th St. Phone: +1 773-247-8282. Email: info@amberleafhome.us. Hours: Monday–Saturday 9 AM–6 PM, Sunday closed. Supplied by the user; direction links keep the two addresses distinct.

Base cabinet planning presets: illustrated cupboard/drawer/sink/narrow choices, width chips and quantity controls; common U.S. 34.5-inch base height and 24-inch box depth. These dimensions are industry reference presets, not confirmed Amber Leaf inventory or a regional popularity ranking. Selection is retained in browser storage and quote-request email/download. Source: KraftMaid kitchen-cabinet-sizes guide.

Accessory previews: built-in ImageGen product-mockup photography for drawer organizers, roll-out shelves, waste bins, corner shelves, pantry pull-out, concealed hinge, brass handles/knob, and under-cabinet LED lighting. Prompt set: individual realistic premium product close-ups in neutral contemporary kitchens, warm daylight, landscape framing, no logos/text/people; illustrative rather than verified products. Asset files: dist/assets/accessory-{drawers,shelves,bins,corner,pantry,hinge,handle,light}.png. Fade on hover and keyboard focus, static preview on touch and reduced motion, icon fallback on image error.
