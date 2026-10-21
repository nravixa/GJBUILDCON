# PHASE 3B-5 SPRINT REPORT: EMAIL CONFIGURATION & CONTROLLED END-TO-END VERIFICATION

**Project:** GJ Buildcon (`C:\GJBUILDCON`)  
**Phase:** Phase 3B-5 — Email Configuration & Controlled End-to-End Verification  
**Date:** October 12, 2026  
**Status:** Audit & Quality Gates Completed — Controlled Test Paused (Awaiting Credentials & Domain Verification)  
**Intended Production Host:** Vercel  
**Intended Production Domain:** `gjbuildcon.com`  

---

## 1. Executive Summary

Phase 3B-5 conducted an evidence-based audit and operational readiness inspection of the enquiry email dispatch pipeline across [`lib/emailService.ts`](file:///C:/GJBUILDCON/lib/emailService.ts), [`app/api/enquiry/route.ts`](file:///C:/GJBUILDCON/app/api/enquiry/route.ts), [`lib/enquiryValidation.ts`](file:///C:/GJBUILDCON/lib/enquiryValidation.ts), and [`components/sections/EnquiryTerminal.tsx`](file:///C:/GJBUILDCON/components/sections/EnquiryTerminal.tsx).

The inspection confirmed that:
1. **Zero Secret Exposure:** No API keys, credentials, or personal secrets are present in source code, `.env.example`, git history, or build logs. Git properly ignores `.env*` files.
2. **Fail-Safe Integrity:** When provider credentials are unconfigured, the endpoint fails safely with HTTP `503 Service Unavailable` (`PROVIDER_NOT_CONFIGURED`). No misleading client success state is ever rendered.
3. **Delivery Provider Status:** Resend is the chosen transactional delivery provider. The production environment variable `RESEND_API_KEY` is currently unset locally, and the sender domain `gjbuildcon.com` is not yet verified on Resend DNS.
4. **Controlled Test Status:** Per Phase 3B-5 rules ("*If credentials or sender verification are missing, do not send a test. Provide the exact safe setup checklist and stop*"), live email transmission to external inboxes was paused until the owner configures credentials and verifies DNS.
5. **Quality Gates Passed:** All automated checks (`npm run lint`, `npx tsc --noEmit`, `npx tsx tests/enquiry.test.ts`, `npm run build`) exited with code 0.

---

## 2. Files Inspected & Modified

| File | Status | Scope & Purpose |
| :--- | :--- | :--- |
| [`lib/emailService.ts`](file:///C:/GJBUILDCON/lib/emailService.ts) | **Inspected (Preserved)** | Direct Resend REST API integration via native `fetch`, HTML entity escaping, plain-text generation, 10s timeout, and structured error codes. |
| [`app/api/enquiry/route.ts`](file:///C:/GJBUILDCON/app/api/enquiry/route.ts) | **Inspected (Preserved)** | 32 KB body size guard, JSON parsing, sliding-window rate limit, honeypot absorption, server validation, and honest HTTP status mappings. |
| [`lib/enquiryValidation.ts`](file:///C:/GJBUILDCON/lib/enquiryValidation.ts) | **Inspected (Preserved)** | Server-side validation, field length caps, Indian/international phone normalization, email regex verification, and CRLF header injection defenses. |
| [`lib/rateLimit.ts`](file:///C:/GJBUILDCON/lib/rateLimit.ts) | **Inspected (Preserved)** | In-memory sliding-window IP rate limiter (5 requests / 15 minutes per IP) with automated stale key purging. |
| [`.env.example`](file:///C:/GJBUILDCON/.env.example) | **Inspected (Preserved)** | Template documenting required variable names with safe placeholder tokens only. |
| [`components/sections/EnquiryTerminal.tsx`](file:///C:/GJBUILDCON/components/sections/EnquiryTerminal.tsx) | **Inspected (Preserved)** | Form terminal UI, field-level error associations, `aria-required`, `aria-busy`, and honest status alert rendering. |
| [`tests/enquiry.test.ts`](file:///C:/GJBUILDCON/tests/enquiry.test.ts) | **Inspected (Executed)** | 11 automated test scenarios covering payload size, validation, honeypot, rate limiting, and mock transport. |
| [`docs/PHASE_3B_5_SPRINT_REPORT.md`](file:///C:/GJBUILDCON/docs/PHASE_3B_5_SPRINT_REPORT.md) | **Created** | Phase 3B-5 verification report and owner setup checklist. |

---

## 3. Confirmed Environment Variables (Names Only)

The application architecture utilizes the following environment variables. **No secret values or live credentials are stored in code or printed in this report:**

| Variable Name | Scope | Required | Description / Default Behavior |
| :--- | :--- | :-: | :--- |
| `RESEND_API_KEY` | Server-Only | **Yes** | API key issued by Resend (`re_...`). When unset, endpoint safely returns HTTP 503 (`PROVIDER_NOT_CONFIGURED`). |
| `ENQUIRY_TO_EMAIL` | Server-Only | **Optional** | Destination inbox for technical specifications. Defaults to official corporate address `gjconstruction111@gmail.com`. |
| `ENQUIRY_FROM_EMAIL` | Server-Only | **Optional** | Authorized sender identity. Defaults to `"GJ Buildcon Consultations <onboarding@resend.dev>"` for sandbox, or `"GJ Buildcon Consultations <consultations@gjbuildcon.com>"` once verified. |
| `NEXT_PUBLIC_SITE_URL` | Public / Client | **Optional** | Canonical base URL (`https://gjbuildcon.com`). |

*Credential Protection Check:*
- `.gitignore` line 34 verifies `.env*` is excluded from git tracking.
- `.env.local` does not exist on the local machine.
- No production secrets are present in `.env.example` or repository files.

---

## 4. Sender & Recipient Configuration Status

| Parameter | Configuration Target | Observed Reality & Verification Evidence |
| :--- | :--- | :--- |
| **Recipient Address (`to`)** | `gjconstruction111@gmail.com` | **Confirmed in code & data:** Set as official corporate email in `data/company.ts` and `lib/emailService.ts`. Owned and controlled by GJ Buildcon management. |
| **Sender Address (`from`)** | `consultations@gjbuildcon.com` | **Unverified on DNS:** Resend requires DKIM, SPF, and DMARC DNS records before allowing sending from `@gjbuildcon.com`. Default code fallback is `onboarding@resend.dev`. |
| **Provider Credentials** | Resend API Key (`re_...`) | **Unconfigured locally:** `RESEND_API_KEY` is not present in local environment variables. |
| **Tamper Resistance** | Server-enforced routing | **Confirmed:** The client payload cannot supply `to`, `from`, or routing headers; destination is strictly bound on the server. |

---

## 5. Provider Verification Status (Observed Evidence)

* **Resend Account & Domain Status:**
  - Observed: The domain `gjbuildcon.com` does not yet have active Resend DKIM/SPF DNS records configured.
  - Resend Sandbox Limitation: While Resend provides `onboarding@resend.dev` as a testing sender, Resend enforces a strict security restriction allowing `onboarding@resend.dev` to deliver **only** to the single verified email address associated with the Resend account owner. Attempting to deliver to `gjconstruction111@gmail.com` via `onboarding@resend.dev` without account ownership returns HTTP `403 validation_error`.
  - Conclusion: Sending live emails requires completing the domain verification steps in the Resend dashboard or logging into the authorized Resend account.

---

## 6. Tests Performed & Actual Outcomes

### 6.1 Automated Test Suite (`tests/enquiry.test.ts`)
Executed on Node 24 test runner (`node:test`):

1. **Scenario 1:** Valid request normalizes fields and builds sanitized email content — **PASS**
2. **Scenario 1b:** Valid request accepts transmission when mock provider responds OK — **PASS**
3. **Scenario 2:** Rejects payload missing required 'name' or 'phone' (HTTP 422) — **PASS**
4. **Scenario 3:** Rejects payload with invalid email syntax (HTTP 422) — **PASS**
5. **Scenario 4:** Rejects payload with invalid phone numbers (HTTP 422) — **PASS**
6. **Scenario 5:** Route returns 400 Bad Request on malformed JSON payload — **PASS**
7. **Scenario 6:** Route returns 413 Payload Too Large for oversized requests (>32 KB) — **PASS**
8. **Scenario 7:** Honeypot-filled request is silently absorbed without dispatching email — **PASS**
9. **Scenario 8:** Reports honest 502 error when delivery provider rejects request — **PASS**
10. **Scenario 9:** Reports honest 503 error when `RESEND_API_KEY` is not configured — **PASS**
11. **Scenario 10:** Enforces sliding-window rate limit on repeated submissions from same IP — **PASS**

### 6.2 Live Runtime Endpoint Verification (`http://localhost:3005/api/enquiry`)
Executed against the running local server:

| Test Case | Payload | HTTP Status | Response Body | Verification Note |
| :--- | :--- | :---: | :--- | :--- |
| **Missing API Key** | Valid contact details | **503** | `{ success: false, code: "PROVIDER_NOT_CONFIGURED", error: "..." }` | Fails safely; no false success. |
| **Honeypot Trap** | `fax_number: "http://spam.com"` | **200** | `{ success: true, message: "..." }` | Absorbed silently; zero email dispatched. |
| **Malformed JSON** | `"{ invalid json"` | **400** | `{ success: false, error: "Malformed or invalid JSON payload." }` | Request rejected before validation. |
| **Invalid Fields** | `{ name: "", phone: "" }` | **422** | `{ success: false, errors: { name: "...", phone: "..." } }` | Returns explicit field error map. |

---

## 7. Inbox Receipt Status

> **CONFIRMED STATUS:**  
> **No email was received in an inbox during this phase.**  
> Per Phase 3B-5 explicit mandate: *"If credentials or sender verification are missing, do not send a test. Provide the exact safe setup checklist and stop."*  
> Because `RESEND_API_KEY` is unconfigured and the sender domain is not yet verified on DNS, no live external transmission was attempted, preventing spurious provider errors or spam flag triggers.

---

## 8. Remaining Limitations & Operational Notes

1. **In-Memory Rate Limiting in Serverless:**
   - The sliding-window rate limiter in [`lib/rateLimit.ts`](file:///C:/GJBUILDCON/lib/rateLimit.ts) stores IP timestamps in process memory.
   - On Vercel, serverless function instances scale dynamically across multiple regions. In-memory state is maintained per warm instance rather than globally across all lambda instances.
   - *Recommendation:* For standard corporate civil engineering consultation volumes (tens of enquiries per day), this protection is completely adequate. If high-volume distributed DDoS protection is required post-launch, an external Redis store (e.g. Upstash) can be introduced.
2. **Domain Reputation & Warm-Up:**
   - When sending from a newly created subdomain or domain (`consultations@gjbuildcon.com`), initial emails may trigger spam filters in corporate email suites if DMARC or DKIM are not properly aligned. The owner must verify DKIM and SPF records in their DNS provider.

---

## 9. Quality Gate Summary

All commands were run directly on `C:\GJBUILDCON`:

| Quality Gate | Command | Actual Exit Code | Result |
| :--- | :--- | :---: | :--- |
| **ESLint** | `npm run lint` | **0** | Clean. 0 errors, 0 warnings. |
| **TypeScript** | `npx tsc --noEmit` | **0** | Clean. 0 compilation or type errors. |
| **Enquiry Test Suite** | `npx tsx tests/enquiry.test.ts` | **0** | **11/11 tests passing.** |
| **Next.js Production Build** | `npm run build` | **0** | Turbopack compilation succeeded. All static and dynamic routes compiled. |

---

## 10. Owner Safe Setup Checklist for Live Email Delivery

Follow these exact steps when ready to activate live email delivery:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                  GJ BUILDCON — EMAIL ACTIVATION CHECKLIST                   │
└─────────────────────────────────────────────────────────────────────────────┘

[ ] Step 1: Resend Account Setup
    1. Sign up or log into https://resend.com
    2. Navigate to "Domains" -> "Add Domain"
    3. Enter domain: gjbuildcon.com

[ ] Step 2: Configure DNS Records in Domain Registrar
    Add the three DNS records provided by Resend to your DNS manager
    (e.g., Cloudflare, GoDaddy, Namecheap):
    - DKIM: TXT record (Host: resend._domainkey.gjbuildcon.com, Value: [from Resend])
    - SPF:  MX / TXT record (Host: bounces.gjbuildcon.com, Value: [from Resend])
    - DMARC: TXT record (Host: _dmarc.gjbuildcon.com, Value: v=DMARC1; p=none;)
    Click "Verify Domain" in Resend and wait until status shows "Verified".

[ ] Step 3: Generate API Key
    1. In Resend, go to "API Keys" -> "Create API Key"
    2. Name: "GJ Buildcon Production"
    3. Permission: "Sending access" (or Full access)
    4. Copy key (starts with "re_...") into a secure password manager.

[ ] Step 4: Configure Vercel Hosting Environment Variables
    In your Vercel Project Dashboard (Settings -> Environment Variables):
    - RESEND_API_KEY = re_...
    - ENQUIRY_TO_EMAIL = gjconstruction111@gmail.com
    - ENQUIRY_FROM_EMAIL = GJ Buildcon Consultations <consultations@gjbuildcon.com>
    Apply to: Production and Preview environments.

[ ] Step 5: Controlled Live Verification
    1. Submit one real consultation specification from the website enquiry terminal.
    2. Verify HTTP 200 response: "Consultation Request Transmitted".
    3. Check inbox for gjconstruction111@gmail.com to confirm receipt.
    4. Check Resend Dashboard -> "Emails" to confirm "Delivered" status.
```

---

## 11. Explicit Confirmations

> **EXPLICIT CONFIRMATION:**  
> - **NO deployment occurred.**  
> - **NO DNS changes or domain purchases occurred.**  
> - **NO live credentials or secrets were exposed.**  
> - **NO simulated or misleading success messages were introduced.**  
> - **All code remains fully tested and validated locally.**

---

**STOPPED. Ready for your review and explicit approval.**
