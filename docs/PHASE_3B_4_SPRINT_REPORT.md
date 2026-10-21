# SPRINT REPORT: PHASE 3B-4 — SEO, SECURITY & ACCESSIBILITY HARDENING

**Project:** GJ Buildcon (`C:\GJBUILDCON`)  
**Design Direction:** Subterranean Monograph (Travertine & Basalt, Instrument Serif + Inter + Space Mono)  
**Previous Approved Phase:** Phase 3B-3 — Asset Authenticity & Evidence Audit  
**Phase Status:** Phase Complete — Pending Owner Review & Approval  
**Report Date:** October 12, 2026  

---

## 1. Summary of Work

Phase 3B-4 executed a targeted hardening sprint across four primary pillars without disturbing the established Subterranean Monograph design system, altering the verified enquiry pipeline, or introducing external dependencies:
1. **Technical SEO & Metadata:** Configured native Next.js App Router metadata structures (`alternates.canonical`, OpenGraph images, indexable metadata on `/` and `/capabilities`, and programmatic `noindex, nofollow` on custom 404).
2. **Robots & Sitemap Generation:** Implemented native `app/robots.ts` and `app/sitemap.ts` metadata routes that dynamically expose `/robots.txt` and `/sitemap.xml` strictly covering verified public routes (`/` and `/capabilities`) without fictitious endpoints or fabricated timestamps.
3. **Browser Security Hardening:** Implemented standard HTTP response security headers in `next.config.ts` (`X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=(), browsing-topics=()`, `Strict-Transport-Security: max-age=31536000`). Evaluated Content-Security-Policy (CSP) requirements against Next.js 16 / React 19 Turbopack hydration mechanisms.
4. **Form & Interactive Accessibility Hardening:** Upgraded `components/sections/EnquiryTerminal.tsx` with explicit `aria-required="true"`, `aria-busy={isSubmitting}`, reduced-motion safeguards (`motion-reduce:animate-none` on spinners), and high-contrast `focus-visible` architectural rings.
5. **Route-Level Architectural Coherence:** Audited the visual relationship between the monolithic travertine header (`#F7F5F0`) and the dark subterranean engineering dossier (`#0B0D11`) on `/capabilities`, confirming intentional structural grounding without visual mismatch or color degradation.

All quality gates (`npm run lint`, `npx tsc --noEmit`, `npm run build`, `npx tsx tests/enquiry.test.ts`) were executed and verified locally with exit code 0.

---

## 2. Initial State & Audit Findings

| Domain | Pre-Sprint State | Finding / Deficiency |
| :--- | :--- | :--- |
| **Robots & Sitemap** | `app/robots.ts` and `app/sitemap.ts` missing | Requests to `/robots.txt` and `/sitemap.xml` returned HTTP 404. |
| **Canonical URLs** | Canonical `/` set on root layout only | `/capabilities` inherited canonical `/`, misrepresenting the route canonical target to search engines. |
| **404 Metadata** | `app/not-found.tsx` lacked metadata export | Error coordinates lacked an explicit `noindex, nofollow` robot directive. |
| **Icons & Favicon** | Root metadata lacked `icons` configuration | Browser requests for `/favicon.ico` fell back to server defaults rather than authentic brand logo asset. |
| **HTTP Security Headers** | `next.config.ts` lacked `headers()` configuration | HTTP responses lacked standard browser defense headers against clickjacking and MIME-type sniffing. |
| **Enquiry Accessibility** | Inputs lacked `aria-required` and `aria-busy` | Screen readers relied solely on HTML5 `required`; spinners continued animated cycling under `prefers-reduced-motion`. |
| **Capabilities Theme** | Flagged in Phase 3A as potential canvas mismatch | Verified that the ivory header functions as a permanent global masthead anchoring the dark technical chapter. |

---

## 3. Files Created or Changed

| File | Status | Scope of Changes |
| :--- | :--- | :--- |
| [`app/robots.ts`](file:///C:/GJBUILDCON/app/robots.ts) | **Created** | Implemented `MetadataRoute.Robots` returning `User-Agent: *`, `Allow: /`, `Disallow: /api/`, and canonical sitemap link. |
| [`app/sitemap.ts`](file:///C:/GJBUILDCON/app/sitemap.ts) | **Created** | Implemented `MetadataRoute.Sitemap` listing verified indexable routes (`/` and `/capabilities`) without fictitious endpoints or fabricated timestamps. |
| [`app/layout.tsx`](file:///C:/GJBUILDCON/app/layout.tsx) | **Modified** | Configured `icons` resolving to authentic logo `/images/brand/logo.png` (icon & apple) and OpenGraph image `/images/hero/hero_architectural_monolith.jpg`. |
| [`app/capabilities/page.tsx`](file:///C:/GJBUILDCON/app/capabilities/page.tsx) | **Modified** | Added route-specific `alternates.canonical: "/capabilities"` and dedicated OpenGraph metadata card. |
| [`app/not-found.tsx`](file:///C:/GJBUILDCON/app/not-found.tsx) | **Modified** | Exported `metadata: Metadata` with `title: "404 — Coordinate Not Found"` and `robots: { index: false, follow: false }`. |
| [`next.config.ts`](file:///C:/GJBUILDCON/next.config.ts) | **Modified** | Added `async headers()` configuring nosniff, frame-deny, referrer-policy, permissions-policy, and HSTS headers. |
| [`components/sections/EnquiryTerminal.tsx`](file:///C:/GJBUILDCON/components/sections/EnquiryTerminal.tsx) | **Modified** | Added `aria-required="true"`, `aria-busy={isSubmitting}`, `motion-reduce:animate-none` on spinner, high-contrast `focus-visible` rings, and error alert roles. |
| [`docs/PHASE_3B_4_SPRINT_REPORT.md`](file:///C:/GJBUILDCON/docs/PHASE_3B_4_SPRINT_REPORT.md) | **Created** | Comprehensive Phase 3B-4 Sprint Report and technical audit ledger. |

---

## 4. SEO & Metadata Decisions

- **Domain Baseline:** Used the verified company production domain `https://gjbuildcon.com` (as established in `metadataBase` in `app/layout.tsx`). No unconfirmed, placeholder, or fictitious domain was introduced.
- **Title Architecture:** Maintained the editorial title template `%s | GJ Buildcon — Civil Construction & Piling Engineering`.
  - Homepage title: `GJ Buildcon | Civil Construction & Piling Experts in Pune`
  - Capabilities title: `Engineering Capabilities | Civil Construction & Piling Disciplines | GJ Buildcon — Civil Construction & Piling Engineering`
  - 404 title: `404 — Coordinate Not Found | GJ Buildcon — Civil Construction & Piling Engineering`
- **Canonical Harmonization:**
  - Root layout sets canonical baseline to `https://gjbuildcon.com`.
  - `/capabilities` explicitly overrides canonical to `https://gjbuildcon.com/capabilities`.
- **Custom 404 Robots Directive:** Configured `robots: { index: false, follow: false }` to instruct crawlers to never index structural 404 error coordinates.
- **Factual Integrity:** Metadata descriptions remain strictly factual (residential, commercial, institutional civil construction, and heavy rotary piling with MAIT & SANY equipment in Pune); no exaggerated claims or unearned accolades were added.

---

## 5. Robots & Sitemap Behavior

- **`app/robots.ts`:**
  - Route: Generates `/robots.txt` dynamically at build and runtime.
  - User-Agent: `*`
  - Allow: `/` (public indexable pages)
  - Disallow: `/api/` (protects `/api/enquiry` and internal endpoints from search engine scraping)
  - Sitemap Reference: `https://gjbuildcon.com/sitemap.xml`
  - Verification: Confirmed HTTP 200 with `Content-Type: text/plain` returning exact directive lines.
- **`app/sitemap.ts`:**
  - Route: Generates `/sitemap.xml` dynamically at build and runtime.
  - Urls Included:
    1. `https://gjbuildcon.com` (priority 1.0, changefreq: weekly)
    2. `https://gjbuildcon.com/capabilities` (priority 0.8, changefreq: monthly)
  - Routes Excluded: No fictitious `/projects` route, no `/api/*` endpoints, no `/_not-found` error routes, no internal documentation files.
  - Timestamps: Omitted `lastModified` to avoid fabricating unverified historical publication timestamps.
  - Verification: Confirmed HTTP 200 with `Content-Type: application/xml`.

---

## 6. Favicon Status

- **Current Implementation:** Configured `icons` in `app/layout.tsx` metadata referencing the authentic company brand asset `/images/brand/logo.png` (32,270 bytes PNG).
- **Resolution:** The browser resolves `/images/brand/logo.png` cleanly for browser tab icons and Apple touch icon references.
- **Known Limitation & Recommendation:** `logo.png` is a composite raster logo mark (containing emblem and wordmark typography). While it resolves and displays the authentic brand asset without substitution, a dedicated high-density 32×32 / 48×48 `.ico` or SVG icon mark should be provided by the client prior to production launch to ensure pixel-perfect legibility at miniature tab dimensions.
- **Authenticity Compliance:** No speculative vector mark was generated; no unrelated placeholder icons were substituted.

---

## 7. Security Headers Implemented, Purpose, and Limitations

Configured via `async headers()` in `next.config.ts` applying to `/(.*)`:

| Header | Value | Purpose | Known Scope & Limitations | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| `X-Content-Type-Options` | `nosniff` | Prevents browsers from MIME-sniffing responses away from declared Content-Type, mitigating script injection attacks via uploaded/static assets. | Applies across all static, dynamic, and API routes. | **Verified locally** (HTTP 200 & 422 responses) |
| `X-Frame-Options` | `DENY` | Blocks embedding in `<iframe>`, `<frame>`, `<embed>`, or `<object>`, neutralizing clickjacking and UI redressing attacks. | Denies framing from all origins including same-origin. | **Verified locally** |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Protects visitor privacy by sending full URL only on same-origin requests, origin only on cross-origin HTTPS requests, and no referrer on protocol downgrades. | Standard modern privacy baseline. | **Verified locally** |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), browsing-topics=()` | Explicitly disables sensitive hardware sensors and tracking features that the application never requests or requires. | Disables APIs site-wide. Additional features can be restricted as needed. | **Verified locally** |
| `Strict-Transport-Security` | `max-age=31536000` | Instructs browsers to communicate exclusively over HTTPS for one full year (31,536,000 seconds). | Standard HSTS policy. **Does not include `includeSubDomains` or `preload`** to avoid breaking potential unverified client subdomains before DNS audit. Note: Localhost HTTP ignores HSTS by browser spec. | **Verified locally** (Header sent in response) |

---

## 8. CSP Status & Evidence for Any Chosen Directives

- **Status:** **Documented as Pending for Production Deployment Middleware.**
- **Technical Rationale & Runtime Evidence:**
  - Next.js 16.4.0 with React 19 and Turbopack renders Server Components with inline bootstrap scripts (`self.__next_f.push(...)`) and inline font/style preloads for hydration.
  - A static Content-Security-Policy header defined in `next.config.ts` without `'unsafe-inline'` or `'unsafe-eval'` immediately breaks Next.js client hydration and interactive components.
  - Adding `'unsafe-inline'` and `'unsafe-eval'` to a static header provides illusory protection and violates the hardening principle ("Do not solve CSP problems by blindly enabling broad `unsafe-eval`").
  - The correct, secure Next.js architecture for CSP requires a Next.js `middleware.ts` that generates a dynamic cryptographic nonce per request (`crypto.randomUUID()`), injects it into response headers, and applies the nonce to `<script nonce={nonce}>` tags.
  - Because configuring nonce-based middleware interacts directly with edge runtime environments, CDN caching layers, and production hosting providers (e.g. Vercel, Node server), setting a premature static CSP would destabilize the local application.
- **Prerequisite for Production CSP:**
  - Client confirmation of final hosting infrastructure (Vercel vs. Docker / Node.js).
  - Introduction of a nonce-generating Next.js middleware with directives:
    `default-src 'self'; script-src 'self' 'nonce-{NONCE}'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none';`

---

## 9. Accessibility Fixes Made

Inspected and hardened `components/sections/EnquiryTerminal.tsx`:
1. **Explicit Programmatic Association:**
   - Both mandatory inputs (`client-name` and `client-phone`) now feature explicit `aria-required="true"` in addition to native HTML5 `required`.
   - Mandatory field indicators feature visual asterisks enclosed in `<span className="text-[#9A4A32]" aria-hidden="true">*</span>` to prevent duplicate screen reader announcements.
2. **Dynamic Error Associations (`aria-describedby` & `aria-invalid`):**
   - Each input maintains `aria-invalid={!!fieldErrors[fieldName]}`.
   - Field error text uses stable programmatic IDs (`client-name-error`, `client-phone-error`, `client-email-error`) with `role="alert"`.
   - Error messages are associated via `aria-describedby={fieldErrors[fieldName] ? "..." : undefined}` only when errors are present.
3. **Submission State & Live Announcements:**
   - Form submission button reflects active state with `aria-busy={isSubmitting}`.
   - Submission-level server errors are announced via `<div id="enquiry-server-error" role="alert" aria-live="assertive">`.
   - Successful transmission is announced via `<div role="status" aria-live="polite">`.
4. **Reduced-Motion Compliance:**
   - The submission spinner icon `<Loader2 />` has been updated with `motion-reduce:animate-none` alongside `animate-spin`, respecting users who have configured `prefers-reduced-motion: reduce`.
5. **High-Contrast Focus Indicators:**
   - Replaced weak outline defaults with architectural focus indicators: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A4A32] focus-visible:ring-offset-2` on buttons, inputs, select dropdowns, and textareas.
6. **Form State Preservation:**
   - Confirmed that entered form data is never wiped on validation failure or network transmission failure.

---

## 10. Capabilities-Page Visual Consistency Decision

- **Audit Subject:** The visual relationship between the shared header (`SiteHeader.tsx`, styled in ivory/travertine `#F7F5F0`) and the dark canvas (`#0B0D11`) on `/capabilities`.
- **Evaluation & Decision:**
  - Inspected in browser subagent on both desktop (1440×900) and mobile (390×844) viewports.
  - The shared travertine `SiteHeader` sits as an intentional, monolithic masthead across the entire site (`/`, `/capabilities`, and `/_not-found`).
  - Below the masthead, the dark geotechnical dossier on `/capabilities` begins with a subtle architectural border (`border-b border-[#2A2E35]`) and monospace breadcrumb telemetry (`HOME > ENGINEERING CAPABILITIES`), creating an intentional transition into the subterranean chapter.
  - All navigation links, brand typography, phone call badge, and CTA button maintain clear, accessible contrast on the header.
  - **Decision:** The contrast between the permanent masthead and the dark chapter is intentional within the Subterranean Monograph design system. No artificial color inversion or theme mutation was introduced, preserving global navigation stability and avoiding layout shifts.

---

## 11. Commands Run with Actual Exit Outcomes

All checks were executed in `C:\GJBUILDCON` on the actual codebase.

| Command | Purpose | Exit Code | Outcome |
| :--- | :--- | :---: | :--- |
| `npx tsx tests/enquiry.test.ts` (Pre-change) | Verify baseline test suite | **0** | Passed (11/11 tests passing) |
| `npm run lint` | ESLint project syntax & rules | **0** | Clean run with 0 errors, 0 warnings |
| `npx tsc --noEmit` | TypeScript strict type checking | **0** | Clean run with 0 type errors |
| `npm run build` | Next.js Turbopack production build | **0** | Successful compilation; static pages and API routes generated |
| `npx tsx tests/enquiry.test.ts` (Post-change) | Verify zero regression on API pipeline | **0** | Passed (11/11 tests passing) |
| `node scratch/test_routes.mjs` | Automated HTTP header & metadata audit | **0** | Confirmed all 5 security headers and SEO metadata on `/`, `/capabilities`, and `/404` |

---

## 12. Browser and Responsive Verification Performed

Using the automated browser subagent, all primary user-facing views were tested on the active production server (`http://localhost:3005`):

1. **Desktop Viewport (1440 × 900):**
   - Homepage (`/`): Rendered with high visual fidelity; verified header navigation, Tectonic Split hero, counters, diptych, machinery chapter, and enquiry terminal.
   - Console logs: **0 errors, 0 warnings, 0 hydration mismatches.**
2. **Enquiry Terminal Section (`#enquiry`):**
   - Verified programmatic labels, required indicators, and focus states.
   - Honeypot spam guard remains hidden from visual viewport (`aria-hidden="true"`, `tabIndex={-1}`).
3. **Engineering Capabilities Page (`/capabilities`):**
   - Rendered cleanly with active navigation state, breadcrumb trail, and dual-pillar layout.
   - Console logs: **0 errors, 0 warnings.**
4. **Custom 404 Route (`/nonexistent-route-for-test`):**
   - Rendered custom error layout ("THIS COORDINATE LIES BEYOND THE GRID") with HTTP 404 status.
   - Title displayed: `404 — Coordinate Not Found | GJ Buildcon — Civil Construction & Piling Engineering`.
   - Meta robots: `noindex`.
5. **Mobile Viewport (390 × 844):**
   - Homepage and navigation tested on mobile screen size.
   - Hamburger navigation menu toggle functioning smoothly.
   - Typography scales down without clipping or truncation.
   - **Zero horizontal overflow detected across the entire scroll height.**

---

## 13. Issues Not Resolved & Why

1. **Dedicated 32×32 Favicon Icon Asset:**
   - The authentic logo (`/images/brand/logo.png`) is linked as the favicon. While functional, a dedicated square icon symbol (`favicon.ico` or SVG) should be provided by the client's design team to ensure optimal small-tab rendering. No speculative vector was created per safety constraints.
2. **Runtime Cryptographic Nonce CSP:**
   - A static CSP without nonces breaks Next.js 16 / React 19 hydration. A full CSP requires production middleware with per-request nonce generation, pending hosting confirmation.

---

## 14. Items Requiring Production Domain, Hosting, or Owner Confirmation

1. **Owner Confirmation of Favicon Mark:** Confirm whether the client wishes to provide a standalone symbol mark or utilize the existing authentic logo.
2. **Hosting Environment for Nonce CSP:** Confirm target deployment platform (Vercel, AWS ECS, self-hosted Node server) to finalize the per-request nonce middleware.
3. **Subdomain HTTPS Audit for HSTS Preload:** Before adding `includeSubDomains` or submitting to the HSTS Preload list, verify that all DNS subdomains under `gjbuildcon.com` support HTTPS.

---

## 15. Explicit Statement: No Deployment Occurred

> **EXPLICIT CONFIRMATION:**  
> No code, configuration, or assets were deployed to production.  
> No external DNS, hosting dashboards, domains, or third-party email transports were registered or modified.  
> All work was performed and verified locally within `C:\GJBUILDCON`.

---

## 16. Recommended Next Phase: Phase 3B-5

**Recommended Next Phase:** **Phase 3B-5 — Live Email Verification & Production Readiness Gate**  
- Setup and live verification of the configured email transport (`RESEND_API_KEY`) in a staging/production sandbox.
- End-to-end receipt testing to verify deliverability to the official inbox (`gjconstruction111@gmail.com`).
- Final pre-launch deployment checklist review.
