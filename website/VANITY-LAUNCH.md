# Bathroom vanities: local launch preview

This category is implemented only in the `kabbie` GitHub-version repository. No Sites deployment, V2 repository or V3 repository is changed.

## Shopping strategy

Use a recognizable collection-first entry, then help customers answer the purchase-risk questions at the SKU level: dimensions, drawer orientation, sink position, plumbing access, what is included and what requires installation review. A dedicated top-navigation category appears on every generated page and in the mobile menu.

The preview contains five style/finish families, 19 sample cabinet configurations, two storage companions, three bathroom-size scenes, a single sample 15% year-end offer, local saved selections, measured and isometric views, and a downloadable JSON plan. The layout supports multiple units with left/right ordering, gaps and a wall offset. Fit results name exactly what is checked; toilets, showers, room doors, pipe envelopes, sink depth and structural supports are not modeled.

## Required before selling

Replace `vanity-data.mjs` with approved SKUs, construction specifications, dimensions, sink positions, available colors, cabinet inclusions, inventory and actual prices. Replace the generic assembly material with approved manuals and videos for each model, including floating-cabinet load-rated fixing details. Validate real sink/top compatibility and delivery/installation scope. Approve the promotion before activating it; this preview does not take payment or submit an order.

## Research references

- Lily Ann bathroom cabinets: https://www.lilyanncabinets.com/bathroom-cabinets - category and collection navigation with assembly resources. Used for competitive flow review; no competitor photography or copy is reused.
- 2025 U.S. Houzz Bathroom Trends Study: https://st.hzcdn.com/static/econ/2025_US_Houzz_Bathroom_Trends_Study__.pdf - wood and painted palettes, Shaker profiles and wall-mounted layouts inform the launch concepts. The five concepts are editorial choices, not a ranked bestseller claim.
- Lowe's installation overview: https://www.lowes.com/n/how-to/install-vanity-sink - demonstrates why pipework, sink and cabinet installation need their own review beyond flat-pack assembly.

## Generated visuals / final prompt set

Created using the built-in image-generation tool, then optimized as WebP assets in `website/dist/assets/vanities/`. All renders are illustrative concepts.

Shared render direction: premium photorealistic bathroom catalog/lifestyle image; landscape 3:2 composition, warm natural daylight, realistic cabinet construction, entire vanity visible, no people, text or logos.

- `vanity-white.webp`: 36-inch freestanding soft-white Shaker vanity; two framed doors, single undermount basin, pale quartz, brass fittings, warm ivory tile and rounded mirror.
- `vanity-oak.webp`: 48-inch freestanding natural-oak slim Shaker vanity; doors and right-hand drawer bank, single undermount basin, pale quartz, black fittings, warm limestone and round mirror.
- `vanity-reeded.webp`: 36-inch warm-walnut vanity; two vertically reeded doors, single undermount basin, pale stone, brass fittings and arched mirror.
- `vanity-floating.webp`: 48-inch floating oak slab vanity; two wide drawers, single undermount basin, pale quartz, nickel fittings, open space below and light greige tile.
- `vanity-navy.webp`: 60-inch navy Shaker double vanity; two basins, two door bays and central drawers, pale quartz, brass fittings and paired mirrors.
- `room-compact.webp`: approximately 5-by-7-foot powder-room inspiration with a white single vanity, toilet, mirror and warm pale tile; wide doorway view.
- `room-everyday.webp`: approximately 7-by-8-foot full-bath inspiration with an oak single vanity, toilet and tub/shower; warm ivory tile, wide doorway view.
- `room-primary.webp`: approximately 10-by-10-foot primary-bath inspiration with a navy double vanity, glass shower and screened toilet; wide doorway view.

Images show styling, not exact purchasable configurations or validated room layouts. Individual cabinet fronts and the simulator are drawn from the selected sample dimensions in code.

## Tutorial deliverables

- `dist/assets/vanities/kabbie-vanity-rta.webm`: original 48-second Kabbie illustrated assembly-preparation video, six chapters, no spoken audio.
- `dist/assets/vanities/kabbie-vanity-rta.vtt`: English captions; the HTML page also includes a full transcript.
- `dist/assets/vanities/kabbie-vanity-rta-guide.pdf`: original five-page preparation guide, illustrated sequence, plumbing measurement worksheet and purchase checklist. Generic guidance, not a final product installation manual.

## Validation

Run `node build-pages.mjs` and `node check-pages.mjs` from `website/`. The artifact checker validates internal references and canonical prefixes. Browser coverage includes category navigation, all style families, widths and sink layouts, sample stock filtering, offer arithmetic, multiple products, fit warnings, floor-plumbing conflicts with floating cabinetry, saved state, exported plan contents, responsive layouts, tutorial playback/captions and PDF delivery.

## Cabinet explorer update

Product cards now offer an interactive, dimensioned 3D concept viewer instead of the former plumbing-notes disclosure. The software renderer uses the selected sample width/depth/height and the appropriate frame, slab or reeded front, door/drawer orientation, and cabinet color. Controls support pointer orbit, keyboard orbit, zoom, front/rear views, open fronts and a cutaway. No manufacturer CAD is available; internal details remain illustrative.

The assembly panel uses attributed manufacturer references from the official RTA Cabinet Store Primary White assembly library:
- V30 Assembly: https://www.youtube.com/watch?v=q20fu7xHLCA - 30-inch double-door vanity.
- VSBDR36 Assembly: https://www.youtube.com/watch?v=iB26eN5BkVw - 36-inch vanity with drawers.

The videos load on demand through YouTube's privacy-enhanced embed and retain an external YouTube fallback. They are not represented as Kabby Home products, a Kabby designer's footage or exact instructions for all sample SKUs. Floating and double-sink selections display the difference in scope explicitly. Kabbie's preparation video remains secondary and the printable guide is unchanged.

## Material-render update

The cabinet explorer now lazily loads a local Three.js WebGL renderer with physically based materials, procedural wood grain, a studio environment, reflective fittings, softened cabinet edges and cast shadows. The optional styled top, basins and faucets can be turned off to inspect the cabinet alone. Rotation, zoom, opening fronts and cutaway controls remain available. The reference collection image appears alongside the rendered sample.

This replaces the software-drawn polygon illustration. Geometry and finishes are sample interpretations of the generated collection imagery and sample dimensions, not verified supplier CAD. Exact manufacturing details and sale inclusions still need supplier confirmation. Three.js 0.180.0 and its license are served from `dist/vendor/three/`; no third-party CDN is needed to use the 3D viewer.

## Six-finish replacement

The vanity collection now uses Colorado White, Craftsman Natural Shaker, Shaker Off-White, Craftsman Lily Green, Mocha Shaker and York Driftwood Grey. Catalog spellings were normalized for Craftsman and Driftwood. The 24 sample cabinet configurations, color swatches, collection images, 3D surface materials and the Colorado White 36-inch promotion all reference this set. No stock or price is represented as confirmed manufacturer inventory.

The renderer now reads `material`, `color`, `frontType` and `hardware` from the collection record instead of relying on the retired finish IDs. The new finish catalog uses its own browser-storage key; previous sample plans are left in the old storage key rather than silently recolored or deleted.

New images were created with the built-in image-generation tool as illustrative edits, retaining the bathrooms, proportions and styling of the original reference images:
- `dist/assets/vanities/finish-colorado-white.webp`: change only cabinet surfaces from soft white to a crisp, neutral Colorado White; retain the Shaker profile and realistic satin paint.
- `dist/assets/vanities/finish-lily-green.webp`: change only cabinet surfaces to muted sage Lily Green, approximately #8c9b81; retain the framed doors and brass fittings.
- `dist/assets/vanities/finish-mocha-shaker.webp`: refinish the oak cabinet in deep warm Mocha brown, approximately #684b37; preserve natural grain, profile, black fittings and the room.
- `dist/assets/vanities/finish-driftwood-grey.webp`: refinish the oak cabinet in weathered warm Driftwood Grey, approximately #928d82, with visible grain and subtle glaze; retain the room and black fittings.
- `dist/assets/vanities/room-primary-lily-green.webp`: change only the navy vanity in the primary-bathroom scene to sage Lily Green; retain the entire room and brass hardware.

The existing white image is reused as `finish-off-white.webp`, and the existing natural-oak image as `finish-natural-shaker.webp`. These are sample finish interpretations, not color-certified manufacturer photography. Collection naming references: https://www.lilyanncabinets.com/ and https://www.lilyanncabinets.com/wood-cabinets.html .
