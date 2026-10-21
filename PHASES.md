# Implementation Roadmap & Phase Deliverables
**Project:** NRAVIXA × GJ BUILDCON Redesign  
**Document:** PHASES.md  
**Role:** Technical Project Manager  
**Date:** October 2026 (Phase 0 Planning)  
**Status:** Phase 0 Complete — Phase 1 Ready for Execution

---

## Roadmap Overview

```
PHASE 0 (Complete) ──► PHASE 1 ─────────► PHASE 2 ─────────► PHASE 3 ─────────► PHASE 4
Discovery, Audit &     Design System &    Core Page          Projects, Pune     Audit, SEO,
Technical Planning     Tokens Scaffold    Engineering        Footprint & RFP    Pitch Prep
```

---

## Phase 0: Discovery, Website Audit & Technical Planning
**Status:** `COMPLETED`  
**Focus:** Investigation of existing public web footprint, comparative design analysis, and architectural foundation.

### Deliverables Completed
- [x] Comprehensive crawl and audit of `https://gjbuildcon.com/` (8 pages + sitemaps + robots).
- [x] Reverse-engineering of design reference `https://nickho-motorsports.nl/`.
- [x] Discovery and extraction of brand logo, color codes, and tagline (*"Crafting Landmarks, Creating Legacies™"*).
- [x] Documentation of critical legacy website defects (e.g., "Vistaro Infotech" remnant, broken `0 +` counters, comment spam, empty title tags).
- [x] Generation of `docs/SOURCE_CONTENT_INVENTORY.md` mapping all existing content to redesign locations.
- [x] Generation of `docs/ASSET_INVENTORY.md` detailing authenticity and licensing status of all media.
- [x] Creation of core project documentation: `README.md`, `PRD.md`, `ARCHITECTURE.md`, `RULES.md`, `DESIGN.md`, and `PHASES.md`.

---

## Phase 1: Brand System, Design Tokens & Project Scaffolding
**Status:** `COMPLETED`  
**Focus:** Project initialization, CSS token configuration, typography setup, and foundational component library.

### Deliverables Completed
- [x] Initialized Next.js 16.4 App Router with Turbopack, React 19, TypeScript 5, and Tailwind CSS v4.
- [x] Implemented Design Tokens in `app/globals.css` (Titanium Obsidian, Basalt Slate, Construction Amber, Architectural Petrol).
- [x] Configured Google Fonts via `next/font/google` (`Syne`, `Plus Jakarta Sans`, `Space Mono`) with zero CLS.
- [x] Created type-safe data layer (`types/index.ts`, `data/company.ts`, `data/navigation.ts`, `data/stats.ts`, `data/capabilities.ts`).
- [x] Built core component library (`Container`, `Section`, `SectionDivider`, `EyebrowLabel`, `TechnicalLabel`, `DisplayHeading`, `PrimaryButton`, `SecondaryButton`, `TextLink`, `StatDisplay`, `ImageFrame`, `ServiceCard`, `ProjectCard`).
- [x] Implemented accessible navigation shell (`DesktopNavigation`, `MobileNavigation` with focus management and touch support, `SiteHeader`, `SiteFooter`).
- [x] Verified authentic master brand logo (`AST-01`) placed at `public/images/brand/logo.png`.
- [x] Executed quality checks: `npx tsc --noEmit` (0 errors), `eslint` (0 warnings), `npm run build` (Static generation passed).
- [x] Built Phase 1 verification showcase in `app/page.tsx`.

---

## Phase 2: Homepage Implementation
**Status:** `COMPLETED`  
**Focus:** Construction of the primary narrative flow on the Homepage and integrated capabilities.

### Deliverables Completed
- [x] **Monolithic Hero Stage (`HeroSection.tsx`):**
  - Full-bleed architectural background visual (`/images/hero/hero_architectural_monolith.jpg`) with layered contrast gradients.
  - Monumental typography with balanced scale and verified headline (*"Civil Construction & Deep Foundation Engineering"*).
  - Geolocation & status telemetry HUD (*Pune, Maharashtra • 18.5986° N, 73.7978° E • 4 MAIT + 2 SANY Fleet • 25+ Lakh Sq. Ft.*).
  - Primary enquiry CTA, secondary capabilities CTA, and direct call action.
  - Transparent concept demonstration attribution badge.
- [x] **Audited Milestone Figures & Core Strengths (`MilestonesSection.tsx`):**
  - Verified static KPI milestones (`10+ Years`, `25+ Lakh Sq. Ft.`, `700+ Manpower`, `09+ Heavy Piling Fleet Units`).
  - Omission of misleading animated counters in favor of grounded engineering proof.
  - Three factual core strengths cards (In-House Piling Ownership, Multi-Sector Civil Delivery, Mobilized Workforce Capacity).
- [x] **Dual-Vertical Capability Hub & Heavy Fleet Roster (`CapabilitiesSection.tsx`):**
  - Interactive discipline filter tabs toggling between "All Disciplines", "Civil Construction", and "Deep Foundation Piling".
  - Pillar 01 (Civil Construction): Residential, Commercial, and Institutional/Healthcare sectors with technical protocols.
  - Pillar 02 (Geotechnical & Piling): Augur Rotary Piling, Tripod Cast-in-Situ Piling, and Tractor Mobile Units.
  - In-House Heavy Fleet Roster spotlighting 4 MAIT hydraulic rotary rigs, 2 SANY units, and Hydra mobile cranes.
- [x] **Pune Regional Footprint & Developer Partners (`ProjectsSection.tsx`):**
  - Regional pipeline analysis covering active micro-markets (Pimple Saudagar, Pimple Nilakh, Pimple Gurav, Ambegaon).
  - Factual presentation standard notice detailing that structural typologies are illustrated for the pitch demo.
  - Institutional trust ecosystem grid displaying all 9 verified developer partners (GK Associates, SNBP Group, GS Builders, Surya Skies, Sahyadri, Patel Oswal, Rainbow, Rachana, GK Vandan).
- [x] **Corporate Heritage Timeline (`StorySection.tsx`):**
  - Chronological 4-stage progression of founder Mr. Umesh Gatkal: 2008 (MNC Engineering) → 2015 (Aditya Construction) → 2021 (G&J Constructions) → 2025 (GJ Buildcon).
  - Authentic company vision and mission statements.
- [x] **Direct Consultation Terminal & Contact (`EnquiryTerminal.tsx`):**
  - Left column: Direct verified channels (Phone, WhatsApp, Email, Office Address).
  - Right column: Interactive project consultation form with client-side required field validation and authentic simulation response banner.
- [x] **Quality Assurance & Visual Verification:**
  - `npx tsc --noEmit` passed (0 errors).
  - `npm run lint` passed (0 errors, 0 warnings).
  - `npm run build` passed (Turbopack static generation completed).
  - Browser subagent visual inspection verified on desktop (1440x900) and mobile (390x844).

---

## Phase 3A: Capabilities Page Implementation (`/capabilities`)
**Status:** `COMPLETED`  
**Focus:** Dedicated, publication-grade standalone technical capability page for civil construction verticals and deep foundation piling disciplines.

### Deliverables Completed
- [x] **Section 1: Editorial Architectural Hero:** Full-bleed hero stage with foundation excavation photography, concept disclosure, telemetry HUD (`25+ Lakh Sq. Ft.`, `4 MAIT + 2 SANY Rigs`, `700+ Personnel`), and in-page anchor jump bar.
- [x] **Section 2: Service Overview & The Single-Source Advantage:** In-depth comparative analysis explaining how unified piling and civil execution eliminates common contractor handover bottlenecks.
- [x] **Section 3: Civil Construction Categories:** Alternating editorial feature modules for Residential High-Rise, Commercial Floorplates, Healthcare & Educational Campuses (SNBP Group partner context), and Civil Infrastructure Retaining Systems.
- [x] **Section 4: Geotechnical Piling Disciplines:** Technical method profiles for Augur Rotary Piling (hard basalt bedrock), Tripod Bored Cast-in-Situ Piling (urban infill), and Tractor Mobile Piling Units (rapid shoring).
- [x] **Section 5: In-House Equipment Fleet Relationship:** Detailed breakdown of plant ownership advantages across 4 MAIT rigs, 2 SANY units, and Hydra mobile cranes without fabricated performance claims.
- [x] **Section 6: Project Consultation CTA:** Direct verified communication channels (`+91 91687 77272`, WhatsApp, `gjconstruction111@gmail.com`), pre-tender technical checklist, and link to homepage interactive terminal.
- [x] **Section 7: Global Shared Footer:** Reused `SiteFooter` component.
- [x] **Verification:** `npx tsc --noEmit` (0 errors), `npm run lint` (0 errors, 0 warnings), `npm run build` (Static route generated), browser subagent inspection at 1440x900 and 390x844.

---

## Phase 3B: Projects Showcase & Regional Pune Footprint
**Status:** `READY TO START`  
**Focus:** Dedicated portfolio showcase, localized geographical micro-markets, and verified developer partnership records.

---

## Phase 4: Optimization, Performance Auditing & Pitch Packaging
**Status:** `PENDING PHASE 3`  
**Dependencies:** Complete web application.  
**Focus:** Performance tuning, SEO schema validation, accessibility verification, and executive pitch deck creation.

### Scope of Work
1. **Performance Hardening:**
   - Verify image optimization pipeline (100% AVIF/WebP with responsive `sizes`).
   - Validate desktop smooth scrolling vs. mobile native touch inertia.
   - Bundle analysis to ensure client JS footprint remains < 90 KB gzipped.
2. **SEO & Social Optimization:**
   - Validate XML sitemap at `/sitemap.xml` and `robots.txt`.
   - Implement `HomeAndConstructionBusiness` JSON-LD structured data.
   - Test Open Graph dynamic previews on Twitter/LinkedIn card validators.
3. **Accessibility (WCAG 2.1 AA) Audit:**
   - Complete keyboard tab sequence walkthrough.
   - Screen reader validation for all interactive modals and buttons.
   - Test `prefers-reduced-motion` override.
4. **Executive Pitch Presentation Package:**
   - Prepare side-by-side comparison report (Legacy WordPress vs. NRAVIXA Redesign).
   - Highlight resolved vulnerabilities and projected conversion lift.

### Acceptance Criteria
- Zero console errors or accessibility violations.
- Clean Vercel deployment preview with fast global edge delivery.
- Fully packaged pitch demonstration ready for GJ Buildcon executive review.
