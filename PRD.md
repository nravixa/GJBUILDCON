# Product Requirements Document (PRD)
**Project:** NRAVIXA × GJ BUILDCON Website Redesign Demo  
**Document:** PRD.md  
**Role:** Technical Project Manager & Website Content Auditor  
**Date:** October 2026 (Phase 0 Planning)  
**Status:** Approved for Implementation Roadmap

---

## 1. Executive Context & Business Objectives

### Background
GJ Buildcon (operating legally as G and J Buildcon) is an established civil construction contractor and foundation piling specialist headquartered in Pimple Saudagar, Pune, Maharashtra. Established under the leadership of Mr. Umesh Gatkal (active in civil infrastructure since 2008), the firm has successfully delivered **over 25+ lakh sq. ft.** across residential societies, commercial complexes, healthcare facilities, schools, and temples. The firm commands a workforce of **700+ skilled laborers** and an in-house fleet of **heavy piling rigs (4 MAIT, 2 SANY, and Hydra cranes)**.

Despite these substantial operational capabilities, the company's current digital presence (`https://gjbuildcon.com`) is crippled by an outdated WordPress/Elementor template featuring unedited copy-paste agency text, empty title tags, broken links, unmoderated spam, and zero project case studies.

### Project Purpose & Intent
NRAVIXA is developing an unsolicited, speculative website redesign demo to demonstrate our creative and engineering capabilities. This project will serve as the centerpiece of an executive sales pitch to GJ Buildcon's leadership to secure a formal contract for a complete digital overhaul.

### Core Business Objectives
1. **Establish Commanding Tier-1 Authority:** Position GJ Buildcon as an elite civil engineering partner capable of executing complex high-rise structures and difficult geotechnical foundation piling.
2. **Prominently Showcase Operational Heavy Machinery:** Highlight the rare competitive advantage of owning in-house MAIT and SANY hydraulic rotary rigs.
3. **Make Past & Upcoming Projects Visually Compelling:** Transform vague category mentions into rich, architectural showcase pieces.
4. **Drive Direct High-Value Project Enquiries:** Streamline high-intent communication channels (Direct Dial, WhatsApp, and Structured RFP forms).
5. **Demonstrate NRAVIXA's Creative & Engineering Excellence:** Showcase cutting-edge Next.js architecture, cinematic art direction, and micro-animations inspired by international benchmarks (e.g., Nick Ho Motorsports).

---

## 2. Target Audience Personas

| Persona | Role / Profile | Primary User Needs & Objectives | Key Trigger Features |
| :--- | :--- | :--- | :--- |
| **Tier-1 Real Estate Developers** | Managing Directors & VPs of Procurement at firms like GK Associates, SNBP, GS Builders. | Seeking dependable turnkey RCC contractors who adhere to strict construction schedules, deliver structural strength, and possess their own machinery. | Audited track record stats (25+ Lakh Sq. Ft.), client partner roster, heavy in-house fleet specifications. |
| **Institutional & Commercial Planners** | Decision-makers for hospitals, private educational trusts, and commercial business parks. | Require rigorous compliance with seismic/structural safety standards, specialized institutional design capability, and high build quality. | Institutional Capability Vertical, structured safety standards, verified client testimonials. |
| **Geotechnical & Foundation Engineers** | Structural consultants and site planners needing deep piling contractors. | Need technical specifications: borehole diameter, torque capacity, rotary augur vs tripod piling, and rock penetration in Pune's basalt layer. | Piling Fleet Matrix (MAIT / SANY torque & depth specs), Geotechnical case studies. |
| **Society Redevelopment Committees** | Apartment owners and housing society boards in Pune micro-markets (Pimple Saudagar, Pimple Nilakh, Baner, Wakad). | Looking for trustworthiness, proven track records, financial stability, and visual proof of landmark projects. | Founder history timeline (2008–2025), localized Pune footprint map, direct contact terminal. |

---

## 3. Scope Boundaries: Speculative Demo vs. Future Production

### In-Scope for Phase 0–4 Demo
- Fully functional, responsive, and standalone Next.js web application built in the dedicated workspace (`c:\GJBUILDCON`).
- Complete information architecture covering Home, About, Civil Construction, Piling Engineering, Portfolio/Projects, Insights, and Contact.
- Curated, art-directed architectural photography and 3D visual concepts reflecting the brand's true operational scale.
- Advanced GSAP timeline choreography, ScrollTrigger section reveals, and desktop smooth scrolling.
- Controlled interactive contact form with client-side validation and simulated submission feedback.
- Production-ready semantic HTML, automated sitemap, Open Graph metadata, and zero-CLS performance optimization.

### Out-of-Scope for Demo (Deferred to Client Commission)
- Backend database (PostgreSQL / Supabase / MongoDB).
- Content Management System (Sanity / Strapi / Payload CMS).
- User authentication, login portals, or client dashboards.
- Payment gateways or leftover WooCommerce e-commerce modules.
- Paid SMS/WhatsApp automated notification APIs (Twilio / Gupshup).

---

## 4. Detailed Functional Requirements (FR)

### FR-01: Cinematic Monolithic Hero Stage
- **Description:** A dramatic, full-bleed entrance screen combining massive architectural typography, high-contrast structural visuals, and pinned operational metadata.
- **Components:**
  - Monumental display wordmark: `GJ BUILDCON`.
  - Official brand tagline: *"Crafting Landmarks, Creating Legacies™"*.
  - Geolocation & status HUD: `Pune, Maharashtra | Civil & Piling Specialists`.
  - Primary CTA: *"Explore Capabilities"* (smooth scroll) and *"Initiate Inquiry"* (modal trigger).

### FR-02: Audited Milestone & Performance Bar
- **Description:** High-impact numerical proof bar replacing the legacy site's broken `0 +` counters.
- **Metrics Displayed:**
  - `10+` Years of Civil Leadership (founded on 2008 MNC heritage)
  - `25+` Lakh Sq. Ft. Successfully Delivered
  - `700+` Skilled Manpower on Active Sites
  - `09+` Advanced Machinery Fleet (MAIT, SANY, Hydra)

### FR-03: Dual-Vertical Capability Explorer
- **Description:** An interactive discipline explorer providing equal emphasis to civil engineering and geotechnical foundation piling.
- **Vertical 1 — Civil Construction:** Residential complexes, Commercial office towers, Hospitals & educational institutions, Infrastructure & civil works.
- **Vertical 2 — Piling & Deep Foundations:** Large-diameter Augur Rotary piling, Tripod foundation piling, Tractor urban piling, Sheet piling & shoring.

### FR-04: Heavy Piling Fleet Technical Deck
- **Description:** Technical specification cards showcasing the in-house machinery fleet.
- **Roster:**
  - 4× MAIT Hydraulic Drilling Rigs (Italian rotary engineering, deep hard-rock augur penetration).
  - 2× SANY Heavy Piling Rigs (high-torque foundation drilling).
  - Dedicated Hydra Mobile Cranes (on-site heavy lift and cage insertion).

### FR-05: Foundational Heritage & Leadership Timeline
- **Description:** Pinned interactive scroll sequence telling the authentic story of founder Mr. Umesh Gatkal:
  - **2008:** Inception of construction journey with leading multinational civil infrastructure firms.
  - **2015:** Founding of Aditya Construction, focusing on urban infrastructure and real estate development.
  - **2021:** Co-founding of G&J Constructions, expanding into large-scale civil contracting.
  - **2025:** Establishment of G&J Buildcon, consolidating civil construction and advanced deep foundation piling.

### FR-06: Interactive Pune Regional Footprint & Landmark Showcase
- **Description:** Filterable project showcase displaying delivered and pipeline landmarks across Pune's prime micro-markets:
  - Locations highlighted: *Pimple Saudagar, Pimple Nilakh, Pimple Gurav, Ambegaon, Baner, Wakad*.
  - Category filters: *All, Residential, Commercial, Healthcare & Education, Deep Foundations*.

### FR-07: Institutional Partner Ecosystem
- **Description:** Clean, high-contrast credibility wall featuring verified developer client partnerships:
  - *GK Associates, SNBP Group, GS Builders, Surya Skies Developers, Sahyadri Group, Patel Oswal Housing, Rainbow Group, Rachana Group, GK Vandan*.

### FR-08: Construction Intelligence & Editorial Hub
- **Description:** Modern static editorial cards preserving the 4 educational tracks from the legacy blog:
  - Civil Construction Techniques & Durability
  - Deep Foundation & Soil Mechanics (Augur vs. Tripod Piling)
  - Landmark Case Studies & Structural Milestone Analysis
  - Pune Real Estate Growth & Sustainable Infrastructure

### FR-09: Multi-Channel Lead Generation Terminal
- **Description:** High-converting contact terminal offering zero friction for high-value inquiries.
- **Channels:**
  - One-click Direct Dial: `+91 9168777272`
  - WhatsApp Business Chat: `+91 7709909747`
  - Direct Inquiries Email: `gjconstruction111@gmail.com`
  - Registered Headquarters Card: `Flat No-3, 1st Floor, B Wing, Ganga Park, Pimple Saudagar, Pune 411027`
  - Controlled RFP Form with input validation for project vertical, site location, and estimated square footage.

### FR-10: Responsive Fullscreen Blueprint Navigation
- **Description:** Minimalist floating HUD header with a full-screen drawer revealing discipline shortcuts, fleet telemetry, active project locations, and direct contact buttons.

---

## 5. Non-Functional Requirements (NFR)

1. **Performance:** LCP under 1.8s on 4G/broadband; 0.00 CLS; initial client JS bundle < 90 KB gzipped.
2. **SEO & Crawlability:** 100% valid HTML5 semantics; unique title and description tags on every page; valid JSON-LD `HomeAndConstructionBusiness` structured data; automated XML sitemap.
3. **Accessibility:** WCAG 2.1 AA compliant contrast (≥ 6.8:1); full keyboard tab index; visible focus indicators; screen reader labels; zero flashing animations.
4. **Motion Gracefulness:** Native fallback for `prefers-reduced-motion`; zero layout recalculation during scroll; smooth scrolling disabled on touch devices to ensure native fluidity.
5. **Security & Data Handling:** Zero client-side API secret leaks; strict form sanitization; Content Security Policy compliant.

---

## 6. Demo Acceptance Criteria & Pitch Scorecard

| Evaluation Dimension | Passing Criteria for Pitch Success |
| :--- | :--- |
| **Visual Wow Factor** | The first 5 seconds must produce an immediate "luxury tier-1" impression, directly matching the cinematic quality of Nick Ho Motorsports. |
| **Factual Integrity** | 100% of authentic business facts preserved; zero fabricated claims, fake awards, or false certifications. |
| **Technical Polish** | Zero broken links, zero console errors, zero layout shifts, flawless responsive behavior across 375px mobile, 768px tablet, and 1920px desktop. |
| **Sales Conversion Potential** | Clear, unmissable call-to-actions for direct phone and WhatsApp contact prominently accessible at all times. |
