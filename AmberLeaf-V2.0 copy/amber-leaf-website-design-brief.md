# Amber Leaf website architecture and design brief

Prepared October 8, 2026. This is a proposed architecture and interaction specification, not a deployed website. Company positioning comes from the client brief; product inventory, prices, certifications, project credentials, service availability and addresses require company verification before publication.

## 1. Design direction

Build an editorial cabinet showroom with a practical buying journey. Let visitors recognize a kitchen visually, understand its construction and likely budget, then start an order or request design help. Give contractors and developers a visible route to specification, repeatable unit packages and project coordination.

Suggested homepage headline: **Cabinetry for the way you live. Built for the way you build.** Supporting copy: “Explore kitchen cabinets for your home, or plan cabinetry for your next development.” Use the client-provided 5–5,000 unit capability in a supporting proof section once verified. Do not imply that every project size has already been completed.

Visual language: warm ivory backgrounds, dark charcoal typography, restrained olive accents, generous whitespace, natural wood and lived-in kitchen photography. Pair an expressive serif heading face with a legible sans serif for navigation, specifications and forms. Avoid text over busy cabinetry; place essential information on solid backgrounds. Meet WCAG AA contrast and use comfortably sized body copy.

### Reference translation

| Reference | Apply to Amber Leaf |
|---|---|
| [Willow Bath and Vanity](https://willowbathandvanity.com/) | Separate browse entrances for category, finish/color, size and collection. Keep selected size and finish visible with product details. |
| [Naked Kitchens Studio](https://www.nakedkitchens.com/collections/categories/studio) | A gallery-led collection with clear product captions. Adopt the client's requested multiple images within each style; interactive carousel behavior was not verified from the text extraction. |
| [Doimo Desco](https://www.doimocucine.com/en/impronta/desco/) | Use alternating room photographs, close-up details and adjacent concise editorial text. Treat the client's layout preference as the visual direction. |
| Magnet navigation screenshot | Use color swatches, door-profile thumbnails and grouped text links in a visual mega menu. |
| Kvik and Magnet detail screenshots | Make image hotspots explain storage, materials and components; provide the same details in text. |
| Semihandmade screenshot | Show illustrated sample kitchen packages by cabinet count and layout. These are examples, not universal room-size formulas or Amber Leaf prices. |

## 2. Navigation and sitemap

Desktop header: linked Amber Leaf wordmark; **Chicago Kitchen Cabinets · Services · Locations Served · Projects · FAQ · Resources**; search and a prominent **Start your order** button. A slim utility row can hold **For contractors & developers**, **Visit a showroom**, and contact information. On smaller desktop widths, move navigation into a menu before labels collide. Mobile uses a labeled Menu button, nested accordions and a persistent start-order action that does not cover content.

Use the requested full SEO phrases in page titles, headings and contextual copy. Inside menus, use concise labels such as “Installation” and “Oak Park.” Users should not have to scan repeated “Kitchen Cabinets” text to find a destination.

```text
/
├── /chicago-kitchen-cabinets/
│   ├── /chicago-kitchen-cabinets/collections/
│   ├── /chicago-kitchen-cabinets/collections/{collection}/
│   ├── /chicago-kitchen-cabinets/styles/{style}/
│   ├── /chicago-kitchen-cabinets/colors/{color}/
│   ├── /chicago-kitchen-cabinets/materials/{material}/
│   └── /chicago-kitchen-cabinets/products/{product}/
├── /start-order/
├── /services/
│   ├── /services/kitchen-cabinets-pricing/
│   ├── /services/kitchen-cabinets-installation/
│   ├── /services/custom-kitchen-cabinets/
│   ├── /services/kitchen-cabinet-showrooms-chicago/
│   ├── /services/cabinet-makers/
│   ├── /services/kitchen-remodel/
│   ├── /services/kitchen-design/
│   ├── /services/kitchen-cabinet-trends-2027/
│   └── /services/best-kitchen-cabinets-chicago/
├── /locations/
│   └── /locations/{city}/
├── /projects/
│   ├── /projects/{project}/
│   └── /projects/comparisons/{comparison}/
├── /faq/
├── /resources/
│   ├── /resources/cabinet-cost-guide/
│   ├── /resources/chicago-remodeling-guide/
│   ├── /resources/cabinet-materials-guide/
│   ├── /resources/kitchen-design-guide/
│   └── /resources/chicago-homeowner-guide/
├── /professionals/
├── /about/
├── /sustainability/
├── /community/
└── /contact/
```

**Resolve pricing overlap:** the pricing service page explains Amber Leaf packages, quote inclusions and how to buy. The Cabinet Cost Guide explains budgeting, cost drivers and cost methodology; give it the heading “Kitchen Cabinet Cost in Chicago.” A menu link labeled “Kitchen Cabinet Cost” points there. Do not create another near-identical cost page merely to match a keyword.

**Resolve Projects overlap:** the Projects landing page defaults to real installations and has a second tab or section, “Compare your options.” Comparisons remain accessible under the requested navigation while case studies retain their own identity.

**Other service intent:** Cabinet Makers describes actual manufacturing/sourcing and customization responsibility. Kitchen Remodel clarifies whether Amber Leaf provides full remodeling or cabinetry within a contractor-led remodel. Best Kitchen Cabinets Chicago is a transparent selection guide with criteria and tradeoffs, not an unsupported self-awarded ranking. Trends 2027 is dated and distinguishes observed preferences from forecasts.

### Visual mega menus

Chicago Kitchen Cabinets: a “View all cabinets” link; Style thumbnails (Shaker, slab/modern, transitional, only as stocked); Color swatches with names; Material thumbnails; Size links for individual cabinet dimensions, separate from kitchen package sizes; one photographed featured kitchen; links to compare brands and start an order.

Services: Plan & budget; Design & customize; Install & visit. Show all requested destinations in those three groups and one showroom/project image. Locations: a searchable list of all 16 cities, a service-area illustration and “Check your address.” Projects: photographed residential and multifamily examples plus comparison links. Resources: five guide cards with descriptive titles. FAQ: four categories and search.

Menus open by click and keyboard activation; hover may supplement these actions. Use explicit close controls, Escape, logical focus management and visible expanded states. Images supplement text; every destination has a readable label. Mobile replaces large image grids with a few preview thumbnails and a full text list.

## 3. Homepage composition

1. **Hero:** one strong real kitchen photograph; headline and concise positioning alongside it; “Explore cabinets” and “Start your order.” Secondary link: “Planning a development?” Add a visible invitation immediately below the hero: **“Everyone is welcome at our Chicago showroom.”** Supporting copy: “Homeowners, designers, contractors and developers—come explore cabinet styles, see finishes in person and talk through your ideas.” Link: **“Visit our Chicago showroom.”**
2. **Browse your way:** visual cards for style, color, material and size. Plain-language captions pair recognizable features with collection names.
3. **Featured kitchens:** three gallery cards; each shows a room, door detail and storage image through explicit arrows. Captions show style, material and pricing basis when available.
4. **Designed for daily life:** an editorial image/text split with a hotspot example for drawers, pantry and corner storage.
5. **Find your kitchen scale:** compact, medium and large illustrated examples linking into the estimator.
6. **Choose with confidence:** a concise Amber Leaf comparison teaser linking to the comparison hub; discuss fit, construction, customization, service and total installed scope.
7. **Projects near you:** authentic neighborhood and multifamily work, with location, scope and permission-cleared photographs.
8. **Built with responsibility:** specific sourcing, repairability and community evidence with links to documentation.
9. **How it works:** choose → measure → review design/quote → confirm → delivery/installation. Only describe services actually offered.
10. **Visit our Chicago showroom:** a welcoming showroom photograph beside the heading **“Come in. Get inspired. Everyone is welcome.”** Supporting copy: “Whether you're gathering ideas for your home or planning your next development, we'd love to welcome you to our Chicago showroom. Explore cabinet styles, see materials and finishes up close, and talk with our team.” Show the verified address, opening hours, directions and contact details. Primary action: **“Get directions.”** Secondary action: **“Plan your visit.”** Make the invitation inclusive of visitors at every stage, including those just browsing. State walk-in availability or appointment requirements once the company confirms its policy; do not imply an appointment is required merely by offering booking. Include service-area and contact alternatives. End with selected FAQs and resource links.

Keep the Chicago Kitchen Cabinets landing page more transactional: short Chicago introduction, collection filters, products, prices/quote basis, service details, brand comparison section, local projects and a direct order-start module. Avoid duplicating the entire homepage.

## 4. Cabinet browsing and collection pages

Provide two views using the same product data: **Gallery** for inspiration and **Details** for specifications. Gallery cards need a collection name plus a descriptive subtitle, for example “Illustrative collection name · natural oak slab doors.” Names and example labels must not be presented as actual inventory until confirmed.

Filters: category (base, wall, tall/pantry, drawer, island); style; finish/color; material; width/height/depth for products; budget with an explicit pricing basis; availability only when maintained. Use visible selected-filter chips, result counts, sorting, Clear all and URL-preserved state. A room-size filter belongs to package examples rather than individual cabinets.

Each gallery card offers 3–5 labeled views: room, door profile, finish detail and storage. Include image count, arrows and touch swipe; no automatic cycling. Separate the carousel controls from the collection link. Save favorites without requiring an account. Comparison supports a small manageable set, such as three selections.

Collection detail sequence: breadcrumb → room gallery → plain-language summary → finish and material choices → annotated photo → construction specifications → example package budget → related projects → availability/process → order/sample/design actions.

Product detail includes SKU, actual dimensions, material by component, finish, hardware, compatible accessories, price basis, assembly state, lead-time basis, care, warranty and downloadable specifications. Show the selected variant clearly. Distinguish wood species from a wood-look finish and door material from cabinet-box material.

### Image hotspots

Use 2–4 deliberate hotspots per photograph, anchored to the photographed component. On activation, show a small panel with component name, material, dimensions, functionality and verified component price or “Request price.” Add “View specifications” and “Add to my plan” where supported.

A tooltip saying “White oak door” should identify which component is oak; it must not imply that every visible cabinet surface is solid oak. Keep component prices separate from the kitchen-package total. Never lift competitor prices into Amber Leaf estimates.

Hotspots are real buttons with descriptive accessible names, keyboard focus and touch targets. Escape/Close returns focus to the initiating button. On mobile, use a bottom sheet. Include an always-available “Details in this image” list so overlapping dots, screen readers and users who prefer text can access everything. Each image has its own coordinates and associated components.

## 5. Size selection and starting an order

First ask **“What are you planning?”** with Home renovation and Contractor/developer options. Then ask **“Which kitchen looks closest to yours?”** Show sample photos plus dimensioned floor plans:

| Example package | Illustrative scale | Information shown |
|---|---|---|
| Compact | Example with 5 cabinet units | Exact sample wall lengths, listed base/wall/tall units and appliance gaps |
| Medium | Example with 12 cabinet units | Exact L-shaped or galley plan, item schedule and storage |
| Large | Company-validated larger example | Exact perimeter and island layout, listed components |

Counts describe the displayed example only. A single room area cannot establish cabinet capacity: openings, wall lengths, appliances, cabinet widths, clearance and layout matter. Define what counts as one cabinet unit; doors and drawers are not separate cabinet boxes. Include “I'm not sure,” “Upload my plan,” and manual dimensions.

Order flow:

1. Choose project type and approximate location.
2. Select a sample layout or enter measurements; optional plan upload.
3. Choose style, finish, material and storage preferences.
4. Choose supply-only or installation if available.
5. Review the complete selection, assumptions and estimate/quote basis.
6. Submit for a quote or continue to checkout for accurately priced, configured products.

Show step count, save status, Back, Edit and a persistent summary. Do not demand contact information before visitors can browse. Ask for contact details when saving a shareable plan or submitting. Preserve progress on validation errors and give a clear confirmation with reference number and verified response expectations.

A contractor path adds unit count, repeated layouts, phasing, site logistics, specifications, bid deadline and document upload. Avoid forcing professionals through a homeowner-only room quiz.

Estimates must state currency, date, cabinet schedule, material/finish, hardware, delivery, assembly, tax and installation inclusion/exclusion. Until Amber Leaf supplies a pricebook, show “Request a package estimate,” rather than fabricated dollar ranges. Do not take payment on an unverified layout; review measurements and compatibility first. Final price and scope approval must be explicit.

## 6. Service and local page templates

Service page: clear answer to the visitor's need → actual scope → photographed example → steps and responsibilities → price drivers → timing basis → related projects → focused FAQ → consultation/order CTA. Chicago is the primary context in copy and metadata, while the menu remains “Services.”

Create location routes for **Oak Lawn, Oak Brook, Cicero, Maywood, Oak Park, Brookfield, Berwyn, Downers Grove, Naperville, Schaumburg, Arlington Heights, Evanston, Skokie, Joliet, Tinley Park and Orland Park**. Use lower-case hyphenated city slugs.

Each location page includes:

- H1 “Kitchen Cabinets in [City]” and a concise, factual service introduction.
- A neighborhood project story: everyday needs, layout constraints, selected cabinets, scope and results. Obtain homeowner/photo permissions; omit private street addresses.
- Actual service coverage, what is included and how to confirm an address.
- Available design, delivery and installation options, with responsible party clear.
- Relevant package examples and links to the actual cabinets pictured.
- Local FAQs reflecting genuine questions and service conditions.
- Contact details and the real serving showroom or office, clearly labeled if outside that city.
- Google Map with an accessible address/directions link; distinguish a coverage illustration from a business location marker.
- Related guides and nearby service locations where useful.

Publish a dedicated page when useful local evidence and service information exist. Otherwise cover the city in the locations hub until that evidence is available. Do not invent local projects, offices, resident testimonials or municipal expertise. Avoid pages that only replace place names; Google's [spam policies](https://developers.google.com/search/docs/essentials/spam-policies) explicitly address doorway and scaled-content abuse.

## 7. Projects and comparison guides

Project filters: homeowner/multifamily; location; style; material; verified unit-count categories. Case studies show brief, constraints, solution, cabinet schedule, imagery, delivered scope and substantiated results. Developer examples should explain repeatability, phasing and coordination using actual evidence.

Comparison articles:

- IKEA vs Custom Cabinets
- Home Depot Cabinets vs Custom Cabinets
- Menards vs Custom Cabinets
- Builder Grade vs Custom Cabinets
- Stock vs Semi-Custom vs Custom Cabinets
- Shaker vs Modern Cabinets
- White Oak vs Maple Cabinets

Every guide starts with who each option suits and a concise answer. Compare equivalent scopes using dated sources: specified product line, construction, sizes, customization, hardware, finish, supply/assembly/installation responsibilities, lead time, warranty and total cost basis. Retailers carry multiple lines; do not treat an entire retailer as one construction standard. “Builder grade” is not a precise universal specification. Material and style comparisons should explain tradeoffs rather than name a universal winner.

An “Amber Leaf fit” panel explains demonstrable strengths and limits. A homepage/catalog “How Amber Leaf compares” module links to this evidence. Verify named-brand details from current official specifications; company assertions need supporting documentation.

## 8. Twenty categorized FAQs

Use searchable, anchored questions and accordions; expanded answers must be accessible and link to deeper pages. Keep question wording consistent across service and resource references.

**Budget and purchasing**
1. How much do kitchen cabinets cost in Chicago?
2. What is included in an Amber Leaf cabinet quote?
3. How do stock, semi-custom and custom cabinet prices differ?
4. Can I order cabinets without installation?
5. How do I start an order if I do not know my measurements?

**Materials and durability**
6. How long do kitchen cabinets last?
7. What are the best cabinet materials for my needs?
8. How do custom cabinets compare with builder-grade cabinets?
9. What is the difference between solid wood, plywood and MDF components?
10. What sourcing and emissions documentation is available?

**Design and planning**
11. What is the difference between Shaker and modern slab cabinets?
12. Should I choose white oak or maple?
13. How many cabinets will fit in my kitchen?
14. Can I see finish samples before deciding?
15. Can you design around existing appliances and plumbing?

**Delivery, installation and support**
16. How long does cabinet installation take?
17. How long will my cabinet order take to arrive?
18. Which Chicago-area locations do you serve?
19. How do you support contractors and developments of 5–5,000 units?
20. What happens if an item arrives damaged or needs warranty service?

Answer cost and timing questions with maintained company data and explicit assumptions. Answer durability through construction, use, moisture, maintenance and warranty distinctions; do not invent a universal lifespan. FAQ content is useful for people and answering questions, but it should not be sold as a guaranteed rich-result feature. Check current [Google documentation updates](https://developers.google.com/search/updates) when implementing search markup.

## 9. Resource articles and evidence policy

Create these as editorial drafts with a named author/reviewer, review date, sources next to claims, descriptive headings, original illustrations and a practical checklist. Do not imply that peer-reviewed research can establish local prices, contractor quality or current permit requirements.

| Article | Draft thesis and sections | Evidence needed |
|---|---|---|
| Cabinet Cost Guide | “A cabinet budget is most useful when it specifies what is being bought.” Define scope, itemized example schedules, construction/finish cost drivers, installation and total-budget worksheet. | Dated Amber Leaf quotes/pricebook for costs; disclose sample size and scope. Scientific research does not supply Chicago retail prices. |
| Chicago Remodeling Guide | “Start by clarifying responsibilities and measuring the existing kitchen.” Discuss survey, design, approvals, trades, sequence and site access. | Current City of Chicago and relevant municipal sources for permits; qualified project review. |
| Cabinet Materials Guide | “Choose materials by component and use case.” Explain boxes, doors, finishes, hardware, moisture exposure, documentation and maintenance. | Peer-reviewed materials/indoor-environment studies for specific claims; product technical sheets for actual products. |
| Kitchen Design Guide | “Plan around storage, movement and daily tasks.” Explain layout, appliance interfaces, storage, inclusive access and measuring checklist. | Relevant peer-reviewed ergonomics research after selection and full-text review; current applicable accessibility/design guidance. |
| Chicago Homeowner Guide | “Compare a written scope before comparing totals.” Explain selecting a supplier, contract scope, samples, measurements, responsibilities, maintenance and local contacts. | Current official consumer/local guidance; company process documents; research where material or environmental claims arise. |

### Verified peer-reviewed starting sources

1. [Eco-innovation of a wooden childhood furniture set: an example of environmental solutions in the wood sector](https://pubmed.ncbi.nlm.nih.gov/22542234/), *Science of the Total Environment* (2012). Suitable as background on life-cycle assessment and design for environment. It studies furniture other than kitchen cabinets; it does not substantiate Amber Leaf product impacts.
2. [Environmental sustainability assessment of wooden furniture produced in Pakistan](https://pubmed.ncbi.nlm.nih.gov/35019094/), *Environmental Science and Pollution Research* (2022). Useful background on accounting for production inputs and scope in environmental assessments. Its manufacturing context cannot establish the footprint of a Chicago supplier.

These records are starting points, not a completed literature review. Review methods, full text and applicability before publishing numerical or comparative claims. Keep material sustainability separate from company-specific certification: publish actual supplier documentation, certificate scope, repair/replacement availability and verified community partnerships. Avoid broad “eco-friendly” claims unsupported by product evidence.

## 10. Search and AI discovery

The goal is to become a credible, easy-to-understand candidate when people search or ask an assistant for cabinets. No architecture can guarantee ranking or AI recommendations. Google states that its AI search features use foundational SEO practices and do not require special AI markup: [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features).

Recommended implementation:

- Publish indexable HTML with crawlable links, useful page titles, one clear primary heading, breadcrumbs and XML sitemaps. Keep essential product and service text outside image-only or client-only experiences.
- Give each primary intent a canonical page. Curate valuable style/material landing pages; manage filter combinations to avoid an endless index of near-duplicates. Preserve useful filter URLs for users without automatically indexing every permutation.
- Maintain a coherent company entity: real name, phone, address, service area, hours, ownership/process information and genuine project proof. Maintain accurate business profiles for real locations.
- Use applicable Organization/LocalBusiness, BreadcrumbList, Product/Offer and Article structured data only where the visible content supports it. Do not fabricate prices, inventory, branches, reviews or certifications. Validate markup and eligibility before launch.
- Make important facts explicit: what Amber Leaf sells, whom it serves, where it serves, how orders work, what is supplied or installed and what documentation is available.
- Write concise answers followed by scope, evidence and detail. Link from cabinet → project → location → relevant guide, making each relationship useful to visitors.
- Publish original photographs with descriptive alt text and captions, optimized dimensions and responsive formats. Use image sitemaps where appropriate; do not keyword-stuff alt text.
- Keep brand comparisons fair, sourced and reviewed. Earn independent references through actual projects, partnerships and useful research-informed resources.
- Configure crawler access intentionally; access alone does not guarantee citations or recommendations. Do not add hidden AI instructions or keyword blocks.

Track organic landing-page visits, qualified homeowner and professional inquiries, order completion, showroom bookings, guide-assisted conversions and attributable AI referrals. Sample repeatable AI recommendation queries by geography and intent, recording date and model/service; treat results as variable observations rather than stable rankings.

## 11. Nielsen's ten heuristics applied

The following are Amber Leaf design applications of [Jakob Nielsen's ten usability heuristics](https://www.nngroup.com/articles/ten-usability-heuristics/).

| Heuristic | Concrete application |
|---|---|
| Visibility of system status | Show selected filters, result count, gallery image count, order step, save status and submission confirmation. |
| Match between system and real world | Use familiar material/style terms, inches and dimension diagrams; explain cabinet-count units and price scope. |
| User control and freedom | Back/Edit, Clear all, undo removal, close menus/hotspots and preserve selections when leaving a flow. |
| Consistency and standards | Keep price units, dimensions, button labels, swatches and navigation behavior consistent across templates. |
| Error prevention | Check units, dimensions and component compatibility; review layout and scope before final purchase. |
| Recognition rather than recall | Pair names with photos, show saved choices and visible breadcrumbs, and provide illustrated layout examples. |
| Flexibility and efficiency of use | Let novices use the visual guide and professionals upload plans or specify products directly. |
| Aesthetic and minimalist design | Use one primary action per section, short adjacent captions and optional deeper specifications. |
| Help users recognize, diagnose and recover from errors | Use field-specific plain-language errors, a suggested correction and preserved form data. |
| Help and documentation | Offer measuring guidance, searchable FAQs, scope definitions and reachable human assistance at the point of need. |

Additional accessibility requirements: semantic headings, labeled fields, visible keyboard focus, reduced-motion support, non-color-only swatch identification, screen-reader updates for changing results, accessible carousels and logical reading order. Cookie controls, if needed, should be easy to understand and should not reproduce the reference's large obstructive modal by default.

## 12. Content model, release priorities and validation

CMS entities: collection, product/variant, finish, material, accessory, image/hotspot, package layout, project, service, location, FAQ and article. Connect them through relationships rather than copying specifications into many pages. Price, lead time and certification data should have an owner and review date. A hotspot links to the actual component/variant rather than a detached text claim.

**First release:** six navigation destinations, homepage, cabinet hub, actual collection/product templates, order/quote flow, core services, project hub, FAQ, contact/showroom and locations hub. Add individual city pages where evidence is ready. Publish the cost/material guides after substantive review.

**Second release:** evidence-backed comparison articles, further local case studies, remaining guides, professional project support and validated pricing estimator. Prepare the 2027 trends page with clearly labeled forecasts.

Required company inputs: brand assets; product catalog and variant specifications; pricebook and exclusions; showroom/contact details; delivery/installation scope; service coverage; lead-time and warranty policies; licensed project images; contractor/developer references; sourcing/certification records; documented community work.

Before release, test whether a homeowner can find a natural-wood modern style, understand price inclusions, inspect a pictured component, check service coverage and start a quote. Test whether a professional can submit multiple unit layouts. Test keyboard/touch navigation, filter recovery, form errors, mobile hotspot panels and readable image/text layouts. Verify indexability, canonical handling, structured data and all factual claims. Record task completion and confusion; resolve observed failures before expanding page volume.
