# NRAVIXA × GJ BUILDCON
### Speculative Redesign Demo & Technical Foundation
**Agency:** NRAVIXA — Premium Technology Studio (`https://nravixa.vercel.app/`)  
**Client / Subject:** GJ Buildcon (`https://gjbuildcon.com/`)  
**Current Status:** Phase 3A Completed — Capabilities Page Implemented & Verified (`/capabilities`)  
**Target Aesthetic:** Premium + Luxury + Architectural + Cinematic + Immersive

---

## 1. Project Overview & Commercial Context

This repository contains the architectural foundation and speculative redesign demo for **GJ Buildcon** (G and J Buildcon), an established Pune-based civil engineering contractor and heavy foundation piling specialist.

### Commercial & Operational Reality
- **Status of Engagement:** Unsolicited, speculative redesign demo created by **NRAVIXA**. GJ Buildcon has not yet commissioned this project or provided formal requirements.
- **Strategic Purpose:** Designed as the high-impact centerpiece for an upcoming executive sales pitch to GJ Buildcon's leadership (specifically Managing Director Mr. Umesh Gatkal).
- **Isolation Guarantee:** This project is engineered in an entirely independent, standalone repository (`c:\GJBUILDCON`). It does not modify, scrape destructively, replace, or deploy over the client's existing live website.

---

## 2. Executive Summary of Phase 0 Discoveries

Through a comprehensive audit of `https://gjbuildcon.com/`, public stylesheets, media assets, and sitemaps, NRAVIXA's multidisciplinary team identified both the company's authentic strengths and critical digital liabilities:

### Verified Authentic Business Credentials
- **Operational Scale:** Over **10+ years** of direct civil engineering experience (heritage dating back to 2008).
- **Delivered Volume:** More than **25+ lakh sq. ft.** successfully constructed across residential complexes, commercial spaces, schools, hospitals, and temples.
- **Skilled Workforce:** Backed by **700+ active on-site workers** and dedicated technical supervisory staff.
- **In-House Heavy Machinery Fleet:** Rare competitive differentiator of owning and operating **4 MAIT hydraulic rotary rigs**, **2 SANY rigs**, and dedicated **Hydra mobile cranes**.
- **Developer Relationships:** Proven delivery track record with leading Pune real estate developers (*GK Associates, SNBP Group, GS Builders, Surya Skies Developers, Sahyadri Group, Patel Oswal Housing, Rainbow Group, Rachana Group, GK Vandan*).
- **Headquarters:** Flat No-3, First Floor, B Wing, Ganga Park, Pimple Saudagar, Pune 411027.
- **Official Tagline:** Discovered within the original vector brand lockup:  
  **“Crafting Landmarks, Creating Legacies™”**

### Critical Deficiencies on Live Website
- **Third-Party Agency Copy-Paste Error:** The live homepage founder bio contains an unedited reference to an unrelated company: *"...instrumental in shaping Vistaro Infotech into a trusted name in Construction and piling services"*.
- **Broken Metrics & Placeholders:** Unedited Elementor strings: `[H2] Add Your Heading Text Here` and raw counters displaying `0 + Happy Customers`, `0 + Skilled Employees`.
- **E-Commerce Overhead:** Leftover WooCommerce cart and wishlist scripts loading on an institutional B2B contractor site.
- **Broken SEO & Sitemaps:** Empty `<title></title>` tag on homepage; XML sitemap only indexes 3 shopping cart pages and 1 Lorem Ipsum demo post from 2022.
- **Misrepresented Stock Imagery:** Almost all project and rig visuals are generic stock photos (e.g., American timber drywall renovations, Shanghai skyline, European Soilmec/Cofra rigs).

---

## 3. Project Documentation Directory

Detailed strategic and architectural deliverables are organized within this repository:

| Document | Description |
| :--- | :--- |
| **[PRD.md](file:///c:/GJBUILDCON/PRD.md)** | **Product Requirements Document:** Business objectives, audience personas, functional requirements (F-01 to F-10), non-functional constraints, and pitch scorecard. |
| **[ARCHITECTURE.md](file:///c:/GJBUILDCON/ARCHITECTURE.md)** | **Technical Architecture:** Next.js App Router specifications, Server vs. Client component boundaries, GSAP motion choreography, Lenis smooth scrolling evaluation, and zero-CLS performance. |
| **[DESIGN.md](file:///c:/GJBUILDCON/DESIGN.md)** | **Creative Direction & Design System:** In-depth reverse-engineering of `https://nickho-motorsports.nl/`, visual exploration of 3 directions, color tokens, and typography pairings. |
| **[RULES.md](file:///c:/GJBUILDCON/RULES.md)** | **Engineering Rules & Principles:** Non-negotiable principles of factual accuracy, accessibility (WCAG 2.1 AA), TypeScript rigor, and asset licensing rules. |
| **[PHASES.md](file:///c:/GJBUILDCON/PHASES.md)** | **Implementation Roadmap:** Phase-by-phase deliverables, dependencies, and acceptance criteria from Phase 0 to Phase 4. |
| **[STATUS.md](file:///c:/GJBUILDCON/STATUS.md)** | **Project Status:** Live implementation status, verification metrics, and acceptance checklist. |
| **[DECISIONS.md](file:///c:/GJBUILDCON/DECISIONS.md)** | **Architecture Decision Records:** Rationale for Next.js 16, Tailwind v4, font self-hosting, and motion boundaries. |
| **[CHANGELOG.md](file:///c:/GJBUILDCON/CHANGELOG.md)** | **Changelog:** Detailed chronological record of all additions, changes, and fixes. |
| **[docs/SOURCE_CONTENT_INVENTORY.md](file:///c:/GJBUILDCON/docs/SOURCE_CONTENT_INVENTORY.md)** | **Website Audit & Content Mapping:** Complete page-by-page mapping of all 8 discovered pages, status tags, and defect logs. |
| **[docs/ASSET_INVENTORY.md](file:///c:/GJBUILDCON/docs/ASSET_INVENTORY.md)** | **Media & Asset Audit:** Forensic analysis of all discovered imagery, logos, format specifications, and supplemental asset guidelines. |

---

## 4. Technical Stack Summary

- **Framework:** Next.js 16.4 (App Router, Turbopack, Server Components by default)
- **Runtime & Library:** React 19 / TypeScript 5 (Strict Mode)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/turbopack`) + CSS Custom Properties
- **Typography:** Self-hosted Google Fonts (`Syne`, `Plus Jakarta Sans`, `Space Mono`) via `next/font/google`
- **Icons & Utilities:** Lucide React, `clsx`, `tailwind-merge`
- **Animation:** GSAP 3.12+ (Scheduled for Phase 2 Hero & Timeline reveals)
- **Smooth Scrolling:** Lenis (Evaluated: progressive enhancement on desktop only, disabled on touch/reduced-motion)
- **Deployment:** Vercel (Edge-optimized static generation)

---

## 5. Current Stage: Phase 2 Complete (Ready for Phase 3)

Phase 2 homepage implementation is complete. The application features a cinematic, architectural design adhering strictly to verified facts from the audit:
- Hero section with telemetry strip, authentic logo, and attribution badge
- Audited milestone KPIs and factual core strengths (no fake counters)
- Interactive dual-vertical capability explorer (Civil Construction + Deep Foundation Piling)
- In-house heavy fleet roster (4 MAIT, 2 SANY, Hydra mobile cranes)
- Pune regional footprint & typology pipeline with transparent demo disclosure
- Verified developer partner roster (9 partners)
- Founder heritage timeline (2008–2025 progression)
- Interactive consultation terminal with validated form fields and simulation feedback
- Accessible site header and footer

### Local Execution Instructions

To run and verify the project locally:

```bash
# 1. Install dependencies (already installed)
npm install

# 2. Run TypeScript typecheck
npx tsc --noEmit

# 3. Run ESLint across code directories
npm run lint

# 4. Build optimized production bundle
npm run build

# 5. Start production server locally
npm run start -- -p 3000
```

