# Current status — survey replacement

As requested, the Request a Quote page now uses the shared kitchen survey from kitchen-survey-form.mjs. The earlier separate enquiry/verification form is removed from the page and its script is no longer loaded. The image and showroom sidebar remain. The survey prepares a brief for the visitor to review and send by email; no automatic delivery or marketing signup occurs. The previous adapter files are inactive references.

---

# Separate renovation quote form — prepared for email connection

The owner chose “Prepare the form first; connect email later” on October 15, 2026.

Live form: /request-quote/. Cabinet planner: /start-order/ (independent and unchanged).

Current mode: validates email syntax, renovation timeframe, optional ZIP; keeps optional discount consent unchecked. Prepares a reviewable email/download. Does not store form entries in browser storage, send codes, mark addresses verified, submit leads, or activate email subscriptions. The UI states that the visitor must send the email and Amber Leaf confirms signup separately. Verification screen is hidden.

Future activation: configure the HTTPS `endpoint` in dist/quote-service-config.js only after a real server service is deployed. Never expose provider credentials in the browser. The client is prepared for:

POST /start
Request: {name,email,timeline,zip,notes,discounts,consentVersion}
Response only after successful code dispatch: {sent:true,challengeId:"opaque-server-id",retryAfter:60}

POST /verify
Request: {challengeId,code}
Response only after valid one-time code and durable lead submission: {submitted:true,reference:"server-reference",discountSignup:boolean}
Discount signup must occur only for explicitly opted-in, verified addresses. A verified address alone must not subscribe users.

Server requirements before enabling:
- Verified sending domain and transactional mail provider; delivery-status/error handling.
- Server-side email/field validation, cryptographically generated codes, hashed code storage, expiring server-side challenges, limited attempts, IP/address rate limits, resend cooldowns and one-time atomic consumption. No code or delivery secret in client storage, URLs, logs, or response bodies.
- Secure durable lead storage, auditable consent version/timestamp and actual marketing-service connection with working unsubscribe. No analytics PII.
- Same-origin or allowlisted CORS; bounded payload sizes, abuse protection and generic errors that do not disclose whether an address already exists.
- Idempotent completion so a network retry cannot create duplicate leads/signups.

The frontend does not treat a success HTTP status alone as successful delivery/submission; it requires the explicit server response fields above. This frontend adapter is not a deployed verification backend. No live email verification is claimed or available until the service is connected.
