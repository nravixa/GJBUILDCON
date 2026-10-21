# Project Changelog
**Project:** NRAVIXA × GJ BUILDCON Redesign  
**Document:** CHANGELOG.md

---

## [Phase 3A: Capabilities Page Implementation] — October 2026
### Added
- **Standalone Engineering Capabilities Page (`app/capabilities/page.tsx`):**
  - Section 1: Monumental architectural hero stage featuring `/images/capabilities/hero_foundation_excavation.jpg`, transparent concept visualization disclosure, telemetry HUD metrics (`25+ Lakh Sq. Ft.`, `4 MAIT + 2 SANY Rigs`, `700+ Personnel`), and an in-page quick-jump navigation bar.
  - Section 2: Service Overview & Single-Source Advantage comparing conventional bifurcated contracting friction (boundary disputes, delayed handovers) against GJ Buildcon's integrated substructure-to-superstructure model.
  - Section 3: Four comprehensive civil construction sector categories (Residential Societies, Commercial Floorplates, Institutional & Healthcare Campuses with SNBP Group partner context, and Civic Infrastructure Retaining Works) with custom asymmetric alternating layouts and engineering checklists.
  - Section 4: Three verified deep geotechnical piling disciplines (Augur Rotary Piling for hard Deccan basalt, Tripod & Bored Cast-In-Situ Piling for congested urban sites, and Tractor Mobile Units for agile plinth/boundary shoring) with geological strata suitability profiles.
  - Section 5: In-House Equipment Fleet Relationship detailing 4 MAIT hydraulic rotary rigs, 2 SANY units, and Hydra mobile cranes, emphasizing plant ownership benefits (guaranteed mobilization, zero rental markups) without speculative technical specs.
  - Section 6: Project Consultation CTA providing direct verified corporate channels (`+91 91687 77272`, WhatsApp, `gjconstruction111@gmail.com`), pre-tender documentation checklist, and direct link to the homepage interactive terminal.
  - Section 7: Global shared footer integration (`SiteFooter`).
- **Hero Image Asset (`public/images/capabilities/hero_foundation_excavation.jpg`):** High-aesthetic architectural foundation excavation visual with rebar grid and pile caps at dusk.
- **Cross-Route Navigation Integration (`data/navigation.ts`):** Updated primary navigation and footer links to route cleanly between `/capabilities` and homepage section anchors (`/#hero`, `/#heritage`, `/#projects`, `/#enquiry`).

### Verified
- Zero TypeScript errors (`npx tsc --noEmit` exit code 0).
- Zero ESLint errors or warnings (`npm run lint` exit code 0).
- Successful static prerender across `/`, `/_not-found`, and `/capabilities` via Next.js Turbopack (`npm run build` exit code 0).
- Automated browser visual QA on desktop (1440x900) and mobile (390x844) viewports verifying zero overflow, responsive layout, and smooth anchor behavior.

---

## [Phase 2.1: Factual Accuracy & Release Audit] — October 2026
### Added
- **Forensic Audit Document (`docs/FACTUAL_ACCURACY_AUDIT.md`):** Claim-by-claim forensic verification matrix auditing all 22 rendered claims against official website dumps (`https://gjbuildcon.com/`).
- **Explicit Form Simulation Feedback:** Updated `EnquiryTerminal.tsx` to state unambiguously: *"Demo Simulation Confirmed — No email or external message was transmitted in this pitch demonstration. Form inputs were validated strictly in client memory."*
- **VS Code Linter Compatibility (`.vscode/settings.json`):** Suppressed false-positive IDE warnings for Tailwind CSS v4 `@theme` at-rules.

### Corrected
- **WhatsApp Target Correction:** Discovered that secondary number `+91 77099 09747` was unverified in official scrapes. Replaced WhatsApp target across `data/company.ts`, `data/navigation.ts`, and `EnquiryTerminal.tsx` with verified company telephone `+91 91687 77272` (`wa.me/919168777272`).
- **Superlative Neutralization:** Neutralized subjective "leading" phrasing in `StorySection.tsx` subtitle to *"an integrated civil and deep foundation piling contractor across Pune"*.

---

## [Phase 2: Homepage Implementation] — October 2026
### Added
- **Architectural Hero Stage (`components/sections/HeroSection.tsx`):**
  - Integrated full-bleed dusk architectural visual (`/images/hero/hero_architectural_monolith.jpg`) with layered contrast gradients.
  - Headline strictly based on verified business facts: *"Civil Construction & Deep Foundation Engineering"*.
  - Added company tagline *"Crafting Landmarks, Creating Legacies™"* and factual supporting copy.
  - Telemetry strip displaying verified headquarters (Pimple Saudagar), coordinates (18.5986° N, 73.7978° E), fleet composition (4 MAIT + 2 SANY + Hydra), and delivered volume (25+ Lakh Sq. Ft.).
  - Primary enquiry CTA jumping to `#enquiry`, secondary CTA jumping to `#capabilities`, and direct call action.
  - Transparent media attribution disclosure badge for pitch demonstration.
- **Audited Milestones & Core Strengths (`components/sections/MilestonesSection.tsx`):**
  - High-contrast 4-metric display for verified figures (`10+ Years`, `25+ Lakh Sq. Ft. Delivered Volume`, `700+ Skilled Manpower`, `09+ Heavy Piling Fleet Units`).
  - Strict omission of gimmicky animated counters to maintain truthful engineering presentation.
  - Three factual core strengths: In-House Piling Ownership, Multi-Sector Civil Delivery, and Mobilized Workforce Capacity.
- **Dual-Vertical Capability Hub & Fleet Roster (`components/sections/CapabilitiesSection.tsx`):**
  - Interactive discipline filter tabs toggling between "All Disciplines", "Civil Construction", and "Deep Foundation Piling".
  - Pillar 01 (Civil Construction): Residential Towers, Commercial Complexes, and Healthcare/Educational Campuses with specific engineering protocols.
  - Pillar 02 (Geotechnical & Piling): Augur Rotary Piling, Tripod Cast-in-Situ Piling, and Tractor Mobile Units.
  - In-House Heavy Fleet Roster spotlighting 4 MAIT rigs, 2 SANY units, and Hydra mobile cranes.
- **Pune Regional Footprint & Developer Partners (`components/sections/ProjectsSection.tsx`):**
  - Regional pipeline analysis covering active micro-markets: Pimple Saudagar, Pimple Nilakh, Pimple Gurav, and Ambegaon.
  - Transparent pitch demonstration disclaimer clarifying that structural typologies are shown while individual project photography undergoes client authorization.
  - Institutional trust ecosystem grid displaying all 9 verified developer partners (GK Associates, SNBP Group, GS Builders, Surya Skies, Sahyadri, Patel Oswal, Rainbow, Rachana, GK Vandan).
- **Corporate Heritage Timeline (`components/sections/StorySection.tsx`):**
  - Chronological 4-stage progression of founder Mr. Umesh Gatkal: 2008 (MNC Engineering Foundation) → 2015 (Aditya Construction) → 2021 (G&J Constructions) → 2025 (GJ Buildcon).
  - Authentic company vision and mission quotes extracted verbatim from verified sources.
- **Engineering Consultation Terminal (`components/sections/EnquiryTerminal.tsx`):**
  - Left column: Direct verified communication channels (Phone, WhatsApp Business, Tenders Email, Corporate Headquarters).
  - Right column: Interactive project consultation form with client-side required field validation.
  - Transparent demo simulation banner informing users how payloads route to management in live production.
- **Homepage Assembly (`app/page.tsx`):**
  - Semantic HTML shell with skip-to-main-content accessible link.
  - Cohesive responsive layout connecting all Phase 2 sections.
- **Header Updates (`components/layout/SiteHeader.tsx`):**
  - Added primary project enquiry button.
  - Updated navigation links to point to semantic homepage section anchors (`#hero`, `#capabilities`, `#fleet`, `#heritage`, `#projects`, `#enquiry`).

### Fixed / Sanitized
- Purged speculative torque and depth claims from `data/capabilities.ts` in strict compliance with the zero-invented-specs rule.
- Removed unsubstantiated "Leading" claim from `SiteFooter.tsx`.
- Adjusted `sizeMap.hero` font size in `components/ui/DisplayHeading.tsx` and eliminated mid-word hyphenation/breaking.
- Resolved all 7 unused-import ESLint warnings across section components.

---

## [Phase 1: Brand System, Design Tokens & Component Foundation] — October 2026
### Added
- **Next.js 16.4 Application Foundation:** Scaffolded with Turbopack, React 19, TypeScript 5, and Tailwind CSS v4 in strict configuration.
- **Design Tokens System in `app/globals.css`:**
  - Surface Tokens: Titanium Obsidian (`#0B0D11`), Basalt Slate (`#141820`), Elevated Surface (`#191F2B`).
  - Brand Accents: Construction Amber (`#F59E0B`, contrast 8.87:1 AAA), Architectural Petrol (`#0E4D54`), Precision Teal (`#14B8A6`).
  - Text Tokens: Warm Architectural White (`#F2F0E9`, contrast 17.05:1 AAA), Technical Slate (`#94A3B8`, contrast 7.72:1 AAA).
  - Structural Lines: Hairline borders (`rgba(242, 240, 233, 0.08)`).
- **Typography Integration in `app/layout.tsx`:** Self-hosted Google Fonts via `next/font/google` for `Syne` (display), `Plus Jakarta Sans` (body), and `Space Mono` (telemetry).
- **Type-Safe Data Layer:**
  - `types/index.ts`: TypeScript contracts for Nav, Metrics, Capabilities, Fleet, and Projects.
  - `data/company.ts`: Single source of verified truth for corporate metadata, address, and contacts.
  - `data/navigation.ts`: Header and footer routes.
  - `data/stats.ts`: Verified operational metrics (`10+ Years`, `25+ Lakh Sq. Ft.`, `700+ Manpower`, `9+ Heavy Rigs`).
  - `data/capabilities.ts`: Civil construction and deep foundation piling specifications.
- **Foundational Component Library:**
  - `components/ui/Container.tsx`: Responsive width and gutter constraints.
  - `components/ui/Section.tsx`: Semantic section container with surface token switching.
  - `components/ui/SectionDivider.tsx`: Architectural hairline divider with optional technical labels.
  - `components/ui/EyebrowLabel.tsx`: Micro-pill label with category variants.
  - `components/ui/TechnicalLabel.tsx`: Monospace measurement and coordinate label.
  - `components/ui/DisplayHeading.tsx`: Responsive clamp display typography with gradient option.
  - `components/ui/PrimaryButton.tsx`: Amber high-conversion button with accessible focus rings.
  - `components/ui/SecondaryButton.tsx`: Outline and glass variants with micro-interactions.
  - `components/ui/TextLink.tsx`: Animated underline link with directional arrow.
  - `components/ui/StatDisplay.tsx`: Audited metric card with index and status badge.
  - `components/ui/ImageFrame.tsx`: Aspect ratio container with vignette and badge support.
  - `components/ui/ServiceCard.tsx`: Discipline capability card with key technical standards checklist.
  - `components/ui/ProjectCard.tsx`: Landmark showcase card with category and status indicators.
- **Responsive Layout Shell:**
  - `components/layout/DesktopNavigation.tsx`: Desktop navigation bar with active route indicators.
  - `components/layout/MobileNavigation.tsx`: Accessible mobile slide-over drawer with ESC key support and focus trap safety.
  - `components/layout/SiteHeader.tsx`: Floating HUD header with master logo link and quick call action.
  - `components/layout/SiteFooter.tsx`: Monumental footer with partner developers roster, legal disclaimers, and contact terminal.
- **Phase 1 Verification Showcase in `app/page.tsx`:** Live rendering verifying all tokens, contrast badges, component cards, and authentic logo asset (`AST-01`).
- **Authentic Brand Media:** Added `public/images/brand/logo.png` extracted from verified site uploads.

### Fixed
- Fixed Next.js 16 static prerendering issue by replacing dynamic `new Date().getFullYear()` with static year constant `2026`.
- Resolved all ESLint warnings (unused imports, hook dependencies) to achieve a zero-warning build.

---

## [Phase 0: Project Discovery, Website Audit & Technical Planning] — October 2026
### Added
- Completed crawl and forensic audit of `https://gjbuildcon.com/` across 8 pages and sitemaps.
- Analyzed design reference `https://nickho-motorsports.nl/`.
- Authored `docs/SOURCE_CONTENT_INVENTORY.md` and `docs/ASSET_INVENTORY.md`.
- Established root planning documents: `README.md`, `PRD.md`, `ARCHITECTURE.md`, `RULES.md`, `PHASES.md`, `DESIGN.md`.
