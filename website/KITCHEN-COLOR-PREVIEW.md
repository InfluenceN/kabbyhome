# Realistic kitchen rendering — connection pending

The earlier canvas recoloring and manual masking tools have been removed at the owner's request. The homepage now has two steps: choose a photo and choose a catalog finish. It shows the original photo unchanged. The generation button is disabled and explicitly says realistic AI rendering is unavailable until a service is connected. No upload, fake generated result or hidden API request occurs.

Production runtime variables were checked and contain no image-service credentials. OpenAI Developers was discovered as an available, uninstalled integration and suggested for secure credential setup. Sites instructions require using its openai-platform-api-key skill and approval before provisioning an OPENAI_API_KEY. No secrets were requested in chat, persisted or exposed.

The source photo is a temporary object URL in browser memory, revoked on replacement/page exit. Finish selection updates the cabinet-plan URL. File validation covers type, size and decoding. No photo is stored or sent to analytics.

Next required work after connection: server-side image-edit endpoint; allowlisted finish prompts preserving room geometry; explicit photo transmission notice/consent; identity and abuse controls; timeout/error handling; actual returned image before success; before/after comparison and download. API keys remain server-only. Use the official image-edit documentation rather than a browser-side key or simulated filter.

Official reference: https://developers.openai.com/api/reference/resources/images/methods/edit


## Credential follow-up

A key was created through the secure Platform picker and saved to the explicitly approved `/Users/ivywang/Documents/GitHub/AmberLeaf-V2.0/.env.local`. It is configured as a secret runtime variable on the existing Site. No key is in source or browser code. A real image-edit test returned `credit_balance_exhausted` / `insufficient_quota`: the selected Platform account needs credits. No output was generated and no replacement key was created. The painting tool remains removed and generation stays disabled.

`render/kitchen-render.mjs` contains the server-only handler prepared for the next server migration; it is not deployed yet. It validates file format, finish, origin and consent, uses a fixed server prompt, returns actual image data only on success, and classifies credit exhaustion separately from transient rate limits. Resume the server migration and live verification after the account has credits.

## Gemini flow adaptation
The owner selected Gemini and requested the Avera reference flow. The homepage now supports four look cards, catalog finish selection, lighting choices and a no-island preference, plus original-photo preview and a live selection summary. No customer API-key field is included. Google AI Studio returned a network/520 error on repeated setup attempts; no usable Gemini key or server endpoint is connected. Generation remains explicitly disabled. Before/after and rendered-image download must be added when a real server-returned image is available. The existing `render/kitchen-render.mjs` is an undeployed OpenAI handler, not the Gemini implementation. Do not activate it as Gemini or present these local selections as a generated image.

## Direct Gemini private preview
The owner requested the reference renderer's actual behavior. The homepage now implements its session-key approach: a password field holds a user-supplied Gemini key only in the current page, no storage, no key in source, and no company credential. Explicit photo-transmission consent is required before Generate. Requests go directly to Google's generateContent endpoint using the x-goog-api-key header and the reference model gemini-3.1-flash-image. Uploaded photos are validated/decoded and resized to a maximum 2048-pixel edge before sending, while the original preview stays unchanged. Successful returned image data enables comparison and download; failures never display a simulated result. No estimates or invented rates are included.

Validated with intercepted test responses at desktop and mobile widths: consent/input gating, request format, success image parsing, comparison slider/download, quota errors and absence of persisted key. No paid live call was made: a usable Gemini key has not been connected. This is an owner-private testing flow, not a server-managed customer launch. Before changing audience or launching for customers, replace the session-key field with a server-side Gemini integration and appropriate access/cost controls.

## Quote-page journey, October 16
Owner confirmed email connection is deferred. `/request-quote/` now presents a right-side draggable demonstration (above the form on mobile), kitchen brief, inline photo/color/lighting setup BEFORE contact, email/access request, render controls, then optional PDF-email preference. The renderer root is the full quote form so relocated controls remain functional. Customer access delivery is disabled and explicitly pending; advanced session-key rendering remains available for private testing. PDF preference is included in a manually shared brief but no email is sent automatically. PDF download is implemented and tested. Do not claim an API key or access code was issued, emailed, verified or redeemed.
