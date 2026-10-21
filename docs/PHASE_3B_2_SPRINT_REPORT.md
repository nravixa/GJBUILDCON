# GJ BUILDCON — PHASE 3B-2 SPRINT REPORT
## Real Enquiry Delivery & Server-Side Validation

**Project:** GJ BUILDCON Official Website  
**Location:** `C:\GJBUILDCON`  
**Phase:** Phase 3B-2 — Real Enquiry Delivery & Server-Side Validation  
**Date:** October 12, 2026  
**Auditor / Engineer:** Senior Multidisciplinary Engineering & Systems Architecture Team  
**Status:** COMPLETE — ALL QUALITY GATES PASSED (11/11 AUTOMATED TESTS PASSED)  

---

## 1. Executive Summary

Phase 3B-2 was executed under explicit authorization to eliminate the simulated client-side enquiry submission in [`components/sections/EnquiryTerminal.tsx`](file:///c:/GJBUILDCON/components/sections/EnquiryTerminal.tsx) and implement a real, secure, server-side enquiry delivery pipeline.

The previous implementation displayed a deceptive `"Demo Submission Confirmed"` message in client memory without transmitting the enquiry data to an email inbox, backend API, or persistent storage.

### Core Achievements
1. **Elimination of Simulated Confirmation:** Completely removed `"Demo Submission Confirmed"` and mock client-side confirmation flows.
2. **Dedicated Server-Side API Endpoint:** Built [`app/api/enquiry/route.ts`](file:///c:/GJBUILDCON/app/api/enquiry/route.ts), processing incoming JSON specifications with strict protocol checks.
3. **Zero-Dependency Email Service:** Implemented [`lib/emailService.ts`](file:///c:/GJBUILDCON/lib/emailService.ts) leveraging the industry-standard Resend REST API via native Node.js `fetch` (zero additional npm packages added to `package.json`).
4. **Comprehensive Validation & Sanitization:** Developed [`lib/enquiryValidation.ts`](file:///c:/GJBUILDCON/lib/enquiryValidation.ts) with strict field-length caps, Indian/international phone normalization, email regex verification, enum validation, CRLF header injection defenses, and full HTML entity escaping.
5. **Multi-Layered Abuse Protection:** Enforced a 32 KB request body limit, an invisible honeypot trap (`fax_number`), and sliding-window IP rate limiting via [`lib/rateLimit.ts`](file:///c:/GJBUILDCON/lib/rateLimit.ts).
6. **Honest & Accessible UX:** Updated [`components/sections/EnquiryTerminal.tsx`](file:///c:/GJBUILDCON/components/sections/EnquiryTerminal.tsx) with live submit indicators, disabled controls during transit, field-level `aria-invalid` / `aria-describedby` linkages, and form data preservation on transmission failures.
7. **Comprehensive Test Suite:** Created [`tests/enquiry.test.ts`](file:///c:/GJBUILDCON/tests/enquiry.test.ts) covering all 10 required audit scenarios + provider mock; 100% passed (11/11 tests).

---

## 2. Modified & Created Files

| # | File Path | Status | Scope & Purpose |
| :-: | :--- | :-: | :--- |
| **01** | [`lib/enquiryValidation.ts`](file:///c:/GJBUILDCON/lib/enquiryValidation.ts) | **Created** | Server-side validation, field normalization, CRLF sanitization, honeypot detection, and HTML entity escaping. |
| **02** | [`lib/rateLimit.ts`](file:///c:/GJBUILDCON/lib/rateLimit.ts) | **Created** | In-memory sliding-window IP rate limiter (5 requests / 15 minutes per IP) with automated stale key purging. |
| **03** | [`lib/emailService.ts`](file:///c:/GJBUILDCON/lib/emailService.ts) | **Created** | Server-only dispatch adapter invoking Resend REST API via native `fetch` with 10s timeout and clear error classifications. |
| **04** | [`app/api/enquiry/route.ts`](file:///c:/GJBUILDCON/app/api/enquiry/route.ts) | **Created** | Dedicated Next.js Route Handler enforcing 32KB payload limits, JSON parsing, rate limiting, validation, and provider dispatch. |
| **05** | [`components/sections/EnquiryTerminal.tsx`](file:///c:/GJBUILDCON/components/sections/EnquiryTerminal.tsx) | **Modified** | Replaced client demo simulation with genuine `/api/enquiry` dispatch, honeypot input, accessible alerts, and field preservation. |
| **06** | [`.env.example`](file:///c:/GJBUILDCON/.env.example) | **Created** | Safe placeholder template documenting server-only delivery variables without exposing secrets. |
| **07** | [`tests/enquiry.test.ts`](file:///c:/GJBUILDCON/tests/enquiry.test.ts) | **Created** | Automated test suite using Node.js built-in runner (`node:test`) verifying all 10 minimum audit requirements. |

---

## 3. Delivery Architecture & Provider Selection

### Selected Provider: Resend (REST API via Native Fetch)

To maintain maximum maintainability and zero footprint overhead, **Resend** was chosen as the delivery provider.

- **Direct REST Integration:** We avoided installing third-party npm packages (such as `resend` or `@react-email/render`) by dispatching directly to `https://api.resend.com/emails` via Node.js native `fetch`.
- **Cost Implications:** Resend offers a permanent free tier allowing up to **3,000 emails/month** (100 emails/day), which is more than sufficient for high-value B2B civil engineering and rotary piling inquiries.
- **Fail-Safe Operation:** If the provider API key is not configured, the endpoint returns HTTP `503 Service Unavailable` with code `PROVIDER_NOT_CONFIGURED`. No simulated success is ever reported.

### Submission Lifecycle Diagram

```
[ Visitor fills Specification Form ]
                 │
                 ▼
[ Client Validation: Name & Phone check ]
                 │
                 ▼
[ POST /api/enquiry (JSON body) ]
                 │
                 ├── Body > 32 KB? ─────────► HTTP 413 Payload Too Large
                 ├── Malformed JSON? ───────► HTTP 400 Bad Request
                 ├── Rate limit exceeded? ──► HTTP 429 Too Many Requests
                 ├── Honeypot filled? ──────► HTTP 200 (Silent Drop / No Email)
                 ├── Invalid fields? ───────► HTTP 422 Unprocessable Content
                 │
                 ▼
[ Server-Only Email Dispatch (lib/emailService.ts) ]
                 │
                 ├── RESEND_API_KEY missing? ──► HTTP 503 (PROVIDER_NOT_CONFIGURED)
                 ├── Provider Rejection? ─────► HTTP 502 (PROVIDER_REJECTED)
                 ├── Network Timeout? ────────► HTTP 500 (DELIVERY_FAILED)
                 │
                 ▼
[ Provider Confirmed 200 OK ] ──────────────► HTTP 200 { success: true }
                 │
                 ▼
[ UI Displays: "Consultation Request Transmitted" ]
```

---

## 4. Environment Variables Specification

The email delivery pipeline requires three server-only environment variables. These must be stored in `.env.local` for local testing and set in the deployment dashboard (e.g., Vercel / Railway / AWS):

| Variable Name | Exposure | Required | Description / Format |
| :--- | :--- | :-: | :--- |
| `RESEND_API_KEY` | Server Only | **Yes** | Resend API credential beginning with `re_...`. |
| `ENQUIRY_TO_EMAIL` | Server Only | **Yes** | Destination inbox for technical specifications (e.g. `gjconstruction111@gmail.com`). |
| `ENQUIRY_FROM_EMAIL` | Server Only | **Yes** | Verified sender identity on custom domain (e.g. `consultation@gjbuildcon.com`). |

> [!IMPORTANT]
> **Zero Exposure Guarantee:** None of these variables use `NEXT_PUBLIC_*`. They are never passed to the browser bundle, rendered in HTML attributes, or emitted in API responses or logs.

A safe template was created at [`.env.example`](file:///c:/GJBUILDCON/.env.example):
```bash
# GJ BUILDCON — Production Environment Variables
# Copy this file to .env.local for local execution.
# NEVER commit .env.local or real API credentials to source control.

RESEND_API_KEY="re_123456789_abcdefghijklmnopqrstuvwxyz"
ENQUIRY_TO_EMAIL="gjconstruction111@gmail.com"
ENQUIRY_FROM_EMAIL="consultation@gjbuildcon.com"
```

---

## 5. Provider Setup & Sender Verification Guide

To enable real inbox delivery when ready for production launch:

1. **Create Resend Account:** Sign up at [https://resend.com](https://resend.com).
2. **Obtain API Key:**
   - Navigate to **API Keys** in the dashboard.
   - Click **Create API Key**, name it `GJBUILDCON-Production`, and select **Sending access** (Restricted or Full Access).
   - Copy the key starting with `re_`.
3. **Verify Sending Domain (`gjbuildcon.com`):**
   - In Resend, go to **Domains** → **Add Domain** (`gjbuildcon.com`).
   - Add the generated DNS records into the DNS manager of `gjbuildcon.com`:
     - **DKIM (CNAME / TXT):** For cryptographic signing.
     - **SPF (TXT):** Authorizing Resend mail servers.
     - **Return-Path (CNAME):** For bounce management.
   - Wait for DNS propagation and click **Verify Domain**.
4. **Configure Environment Variables:**
   - In Vercel / hosting environment:
     - `RESEND_API_KEY` = `re_...`
     - `ENQUIRY_TO_EMAIL` = `gjconstruction111@gmail.com`
     - `ENQUIRY_FROM_EMAIL` = `consultation@gjbuildcon.com`
5. **Testing Mode Before Domain Verification:**
   - Resend provides a testing sender: `onboarding@resend.dev`.
   - In sandbox mode, Resend only delivers to the account owner's email address until the custom domain is verified.

---

## 6. Server-Side Validation, Normalization & Sanitization

All incoming requests to `/api/enquiry` are validated independently on the server in [`lib/enquiryValidation.ts`](file:///c:/GJBUILDCON/lib/enquiryValidation.ts):

| Field | Requirement | Validation & Normalization Rule |
| :--- | :-: | :--- |
| `name` | **Required** | Trimmed, 2 to 100 characters. Rejects single-character or blank strings. |
| `phone` | **Required** | Strips spaces, dashes, parentheses. Normalized to E.164-compatible phone number (10 to 15 digits). Accepts Indian formats (e.g. `9876543210`, `+91 98765 43210`, `09876543210`). |
| `email` | Optional | If provided, max 254 characters and checked against RFC 5322 regex. Stripped if blank. |
| `vertical` | Optional | Must match one of 7 approved project disciplines: `Residential Civil Works`, `Commercial Complex`, `Institutional Infrastructure`, `Augur Rotary Piling`, `Tripod Piling`, `Tractor Piling`, `Comprehensive Joint Venture`. Default fallback applied if omitted. |
| `location` | Optional | Trimmed, capped at 150 characters. |
| `message` | Optional | Trimmed, capped at 3,000 characters. |
| **CRLF Defense** | System | Newline (`\r`, `\n`) characters stripped from single-line fields to prevent email header injection attacks. |
| **HTML Escaping** | System | All fields inserted into HTML emails are passed through `escapeHtml()` converting `&`, `<`, `>`, `"`, and `'`. |

---

## 7. Abuse Protection & Reliability

1. **Request Body Size Limit:** The raw request stream is size-audited. Payloads exceeding 32 KB are rejected immediately with HTTP `413 Payload Too Large`.
2. **Invisible Honeypot Trap:** The form includes a field named `fax_number`, hidden via CSS `sr-only` (`aria-hidden="true"`, `tabIndex={-1}`). Automated spam scrapers filling this field receive a mock HTTP `200 OK` without triggering any outgoing provider request or email delivery.
3. **Sliding-Window IP Rate Limiter:** [`lib/rateLimit.ts`](file:///c:/GJBUILDCON/lib/rateLimit.ts) restricts each IP address to **5 submissions per 15-minute window**. Exceeded quotas receive HTTP `429 Too Many Requests` with a descriptive retry advisory. Automatic cleanup purges expired records hourly.
4. **Client-Side Submit Debouncing:** The submit button is immediately disabled upon click, displaying an animated spinner and `"Transmitting Specifications..."`. Multiple rapid clicks cannot spawn parallel requests.
5. **Form State Preservation:** In the event of a validation error or network failure, entered fields remain in the state so users never lose their typed specifications.
6. **Graceful Timeout & Error Masking:** External HTTP dispatches to Resend feature an explicit 10-second `AbortSignal` timeout. Stack traces, authorization tokens, and provider internal error payloads are never exposed to the client.

---

## 8. Honest User Experience & Accessibility

### State Transitions

- **Default / Clean State:** Accessible form with clearly identified mandatory fields (`Full Name *`, `Contact Phone / WhatsApp *`).
- **Validation Failure:** Field-specific error labels rendered beneath invalid inputs with `aria-invalid="true"` and `aria-describedby` links. Accessible `role="alert"` live region at top of form.
- **In-Transit State:** Submit button disabled, displaying `<Loader2 className="animate-spin" />` and `"Transmitting Specifications..."`. All inputs disabled to prevent mutation during flight.
- **Provider Unconfigured (HTTP 503):** Transparently displays an alert banner explaining that direct dispatch is awaiting provider configuration, offering direct contact via telephone (`+91 91687 77272`) or WhatsApp. Form values are completely preserved.
- **Confirmed Acceptance (HTTP 200):** Only upon confirmed acceptance does the form transition to `role="status"` displaying:
  > **Consultation Request Transmitted**  
  > Thank you, **[Name]**. Your project specifications have been securely received by the GJ Buildcon engineering desk. A principal engineer will review your structural requirements and respond directly via your contact details.

### Elimination of Unsubstantiated Claims
- The misleading `"Demo Submission Confirmed"` notification has been entirely eliminated.
- The UI never claims that an enquiry has reached an inbox or permanent database unless confirmed by the server response.

---

## 9. Automated Test Suite Execution

A dedicated test suite was built in [`tests/enquiry.test.ts`](file:///c:/GJBUILDCON/tests/enquiry.test.ts) utilizing Node.js 24's native `node:test` runner.

### Test Execution Command
```bash
npx tsx tests/enquiry.test.ts
```

### Test Results Matrix

| # | Test Scenario | Expected Status / Behavior | Actual Outcome | Status |
| :-: | :--- | :--- | :--- | :-: |
| **01** | Valid request with provider configured (mocked) | HTTP 200 `{ success: true, messageId }` | HTTP 200 Received | **PASS** |
| **02** | Missing required field (`name`) | HTTP 422 `{ errors: { name } }` | HTTP 422 with field error | **PASS** |
| **03** | Invalid email format (`not-an-email`) | HTTP 422 `{ errors: { email } }` | HTTP 422 with email error | **PASS** |
| **04** | Invalid phone format (`12345`) | HTTP 422 `{ errors: { phone } }` | HTTP 422 with phone error | **PASS** |
| **05** | Malformed JSON payload (`{invalid-json`) | HTTP 400 Bad Request | HTTP 400 Received | **PASS** |
| **06** | Oversized request body (> 32 KB) | HTTP 413 Payload Too Large | HTTP 413 Received | **PASS** |
| **07** | Honeypot triggered (`fax_number` present) | HTTP 200 Silent drop (0 provider calls) | HTTP 200, 0 emails sent | **PASS** |
| **08** | Provider rejection (HTTP 403 / 422 from Resend) | HTTP 502 Bad Gateway | HTTP 502 Received | **PASS** |
| **09** | Missing server configuration (no API key) | HTTP 503 Service Unavailable | HTTP 503 Received | **PASS** |
| **10** | Rate limit enforcement (> 5 requests) | HTTP 429 Too Many Requests | HTTP 429 on 6th request | **PASS** |
| **11** | Phone normalization (+91, spaces, dashes) | Validated & normalized to clean digits | Successfully normalized | **PASS** |

**Summary: 11 tests passed, 0 failures, 0 skipped (Duration: ~105ms).**

---

## 10. Quality Gates & Live Verification

### Gate 1: Code Linting
```bash
npm run lint
```
- **Outcome:** Clean exit (code 0). Zero ESLint errors, zero warnings.

### Gate 2: TypeScript Type Checking
```bash
npx tsc --noEmit
```
- **Outcome:** Clean exit (code 0). Zero TypeScript compiler errors across all routes, components, and libraries.

### Gate 3: Production Build
```bash
npm run build
```
- **Output:**
  ```
  ▲ Next.js 16.4.0 (Turbopack)
  ✓ Compiled successfully in 10.7s
  ✓ Generating static pages using 6 workers (5/5) in 4.8s
  Route (app)
  ┌ ○ /
  ├ ○ /_not-found
  ├ ƒ /api/enquiry
  └ ○ /capabilities
  ```
- **Outcome:** Clean exit (code 0). Route `/api/enquiry` successfully compiled as a dynamic (`ƒ`) server-rendered endpoint.

### Gate 4: Live HTTP Protocol Testing (`localhost:3005`)
Direct HTTP requests executed against the live Next.js server instance:
- **Unconfigured Provider Check:** `POST /api/enquiry` returned `HTTP 503 Service Unavailable` with `code: 'PROVIDER_NOT_CONFIGURED'` and direct phone fallback.
- **Honeypot Trap Check:** `POST /api/enquiry` with `fax_number: 'spammer'` returned `HTTP 200 OK` silently.
- **Field Validation Check:** Empty body returned `HTTP 422 Unprocessable Content` with field-keyed validation messages.
- **Oversized Body Check:** 40 KB body returned `HTTP 413 Payload Too Large`.
- **Malformed JSON Check:** Bad JSON syntax returned `HTTP 400 Bad Request`.

### Gate 5: Live Browser Inspection
- Navigated to `http://localhost:3005/#enquiry`.
- Submitted an empty form: verified that field-level error messages appeared with `aria-invalid` markers.
- Submitted valid inquiry: verified submit button spinner (`Transmitting Specifications...`), followed by honest `Transmission Alert` banner stating provider configuration status and direct phone numbers, with all entered input preserved in the form fields.

---

## 11. Current Operational State & Production Readiness

### What Genuinely Works Right Now
1. **Server API Pipeline:** The Next.js API route `/api/enquiry` is fully operational, protected by rate limiting, payload capping, honeypot defenses, and strict validation.
2. **Honest User Feedback:** Users submitting inquiries receive truthful server feedback. No simulated or fake success is ever generated.
3. **Data Preservation:** User inputs are safely preserved if server transmission encounters an issue.
4. **Resend REST Integration:** The code to dispatch emails to Resend is fully implemented and tested with mocked provider responses.

### What Still Requires External Configuration Before Live Email Delivery
1. **Resend API Key (`RESEND_API_KEY`):** Must be created in the client's Resend account and configured in `.env.local` or hosting environment.
2. **Domain DNS Verification:** The client must add DKIM/SPF DNS records for `gjbuildcon.com` in their domain registrar to authorize outgoing email.
3. **Controlled Live Delivery Test:** Once the domain is verified and credentials are set, an authorized test submission should be performed to verify receipt in `gjconstruction111@gmail.com`.

### Known Limitations & Recommended Follow-Up Work
1. **Serverless Rate Limiting:** The in-memory sliding-window rate limiter protects individual serverless instances. For high-volume multi-region serverless deployments, an external KV store (e.g. Upstash Redis) is recommended if automated spam volume increases.
2. **Persistent Lead Storage:** Currently, inquiries are transmitted via email. A future sprint may add an audited database record (e.g., PostgreSQL or Supabase) to guarantee that email deliverability glitches never cause missed inquiries.

---

## 12. Conclusion

Phase 3B-2 has fully eliminated simulated client confirmations and replaced them with an honest, robust, server-side enquiry delivery architecture. All 11 automated test scenarios, lint checks, type checks, production builds, and live browser validations passed with zero regressions.

**Phase 3B-2 is complete.** The project is ready for owner review.
