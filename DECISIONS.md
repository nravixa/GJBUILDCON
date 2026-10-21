# Architecture & Design Decision Records (ADR)
**Project:** NRAVIXA × GJ BUILDCON Redesign  
**Document:** DECISIONS.md  
**Status:** Approved & Implemented in Phase 1

---

## ADR-01: Next.js 16 App Router with Turbopack & React 19
- **Context:** Need an industry-standard framework capable of static pre-rendering, edge routing, zero-CLS image optimization, and minimal client JS overhead.
- **Decision:** Scaffolded Next.js 16.4 with Turbopack, React 19, and TypeScript 5 in strict mode.
- **Rationale:** Turbopack delivers sub-5s incremental compilation; Server Components by default ensure that marketing copy and structured data execute with 0 KB client hydration cost.
- **Consequences:** Prerendering requires static values; dynamic time functions like `new Date()` must not be invoked during server render without caching. Fixed year constants are used for static footer and copyright.

---

## ADR-02: Tailwind CSS v4 via `@tailwindcss/turbopack` & CSS Custom Properties
- **Context:** Need rapid styling with utility classes while preserving strict architectural token discipline without arbitrary one-off hex colors.
- **Decision:** Implemented Tailwind CSS v4 using `@theme` in `app/globals.css` synchronized with CSS Custom Properties in `:root`.
- **Rationale:** Tailwind CSS v4 operates natively with Turbopack without requiring complex legacy PostCSS/autoprefixer configurations. Standard `:root` variables allow direct CSS and GSAP variable references.

---

## ADR-03: Font Loading Architecture via `next/font/google`
- **Context:** Typography requires monumental architectural display weight, high-legibility modern body copy, and technical monospace labels.
- **Decision:**
  - Display Font: **Syne** (`600`, `700`, `800`) with `--font-display`.
  - Body Font: **Plus Jakarta Sans** (`400`, `500`, `600`, `700`) with `--font-sans`.
  - Telemetry Font: **Space Mono** (`400`, `700`) with `--font-mono`.
- **Rationale:** Loading through `next/font/google` guarantees zero external runtime network requests, zero privacy/GDPR liabilities, zero layout shift (built-in font metrics override), and self-hosting directly from Vercel's edge.

---

## ADR-04: Authentic Brand Asset Preservation (`AST-01`)
- **Context:** The existing company identity uses petrol teal (`#005B60`) and amber gold (`#F8B800`) with the tagline *“Crafting Landmarks, Creating Legacies™”*.
- **Decision:** Retain the authentic brand mark (`AST-01`) and house it in `public/images/brand/logo.png`. Direction B: Cinematic Engineering directly incorporates these exact brand colors as the primary system accents.
- **Rationale:** Pitching an executive team requires respecting their established brand equity; arbitrarily changing the logo undermines credibility.

---

## ADR-05: GSAP & Lenis Evaluation & Phasing
- **Context:** Phase 0 evaluated GSAP and Lenis for cinematic motion.
- **Decision:**
  - GSAP is deferred to Phase 2 (Hero timeline and ScrollTrigger section reveals) to prevent premature bundle overhead in Phase 1.
  - Lenis is evaluated as desktop-only progressive enhancement. On mobile/touch devices (< 1024px) and when `prefers-reduced-motion` is detected, Lenis will remain disabled to prevent touch interception issues.
- **Rationale:** Build the rock-solid semantic component foundation first before adding complex animation runtime hooks.

---

## ADR-06: Form Submission Integrity & Simulation State
- **Context:** Pitch demos must never mislead viewers into believing an unhooked form has sent a real lead to management.
- **Decision:** Contact and consultation forms will enforce strict client-side validation (Indian mobile regex, email syntax) but will explicitly indicate "Demo Submission Simulated" upon trigger.
- **Rationale:** Establishes trust and demonstrates honest engineering practices to the prospective client.

---

## ADR-07: Sanitization of Fleet Technical Claims & Zero Speculative Specs
- **Context:** Previous Phase 1 draft data included speculative torque ratings ("180 kNm") and drilling depths ("45+ Meters") that were not substantiated by the official company website or source audit.
- **Decision:** Purged all speculative numerical torque and depth claims from `data/capabilities.ts`. Retained only verified fleet facts: 4 MAIT hydraulic rotary rigs, 2 SANY rotary piling rigs, and dedicated Hydra cranes.
- **Rationale:** Strict adherence to factual accuracy. In an engineering pitch, fabricated technical specs destroy credibility with geotechnical professionals.

---

## ADR-08: Pune Regional Footprint & Architectural Typology Studies
- **Context:** The legacy website listed 25+ lakh sq. ft. delivered and upcoming localities (Pimple Saudagar, Pimple Nilakh, Pimple Gurav, Ambegaon) but lacked verified project photos for individual completed buildings.
- **Decision:** Rather than assigning unrelated stock photos to real names, created an authoritative "Regional Footprint & Sector Capability Studies" section with a transparent disclosure banner stating that structural typologies are illustrated for the pitch demo, and authentic project photos will be populated upon client authorization.
- **Rationale:** Preserves ethical integrity while showcasing the agency's ability to structure and present high-value case studies.

---

## ADR-09: Responsive Display Heading Typography Scale
- **Context:** Initial display heading scale applied `text-8xl` on large viewports, which caused long words such as "Construction" and "Foundation" to break awkwardly across lines on standard desktop screens.
- **Decision:** Scaled `sizeMap.hero` in `components/ui/DisplayHeading.tsx` to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl` with `break-normal` and balanced `<br className="hidden sm:inline" />` in `HeroSection.tsx`.
- **Rationale:** Guarantees that monumental typography remains balanced, impactful, and legible across all desktop (1440px) and mobile (390px) viewports without mid-word breaks.

---

## ADR-10: Single-Source Contact Integrity & WhatsApp Routing
- **Context:** During Phase 2.1 factual auditing, cross-referencing revealed that a secondary WhatsApp number (`+91 77099 09747`) was unverified in official website dumps (`https://gjbuildcon.com/`). The only published telephone number across all live pages is `+91 91687 77272`.
- **Decision:** Unified all direct telecommunication and WhatsApp links to target the verified corporate number `+91 91687 77272` (`wa.me/919168777272`).
- **Rationale:** Guarantees that any direct communication trigger clicked during a client presentation routes to the verified phone line of GJ Buildcon, maintaining 100% integrity.

---

## ADR-11: Standalone `/capabilities` Architecture & Asymmetric Editorial Design
- **Context:** Phase 3A required building a dedicated, standalone `/capabilities` page without relying on a generic collection of identical cards or destabilizing the existing homepage.
- **Decision:**
  - Implemented `app/capabilities/page.tsx` as a Server Component exporting comprehensive SEO metadata, semantic section hierarchy, and client layout integrations.
  - Used varied asymmetric editorial layouts: an architectural hero with an in-page navigation strip, a side-by-side comparative model explaining the "single-source contractor advantage" (eliminating piling-to-civil handover disputes), 50/50 alternating image/protocol modules for Civil Construction, and technical geological suitability matrices for Piling Disciplines.
  - Retained strict factual accuracy: highlighted the 4 MAIT, 2 SANY, and Hydra crane fleet without fabricating numerical torque or depth specifications.
  - Integrated navigation seamlessly by updating `primaryNavigation` and `footerNavigation` to support root-relative paths (`/capabilities`, `/#heritage`, `/#projects`, `/#enquiry`).
- **Rationale:** Delivers an authoritative, publication-grade technical presentation suitable for executive pitch review while maintaining 100% type safety and performance.



