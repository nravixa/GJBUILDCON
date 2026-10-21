# GJ BUILDCON — PHASE 1C: VISUAL ART DIRECTION LAB & PROTOTYPE APPROVAL
# DOCUMENT 04: PAGE ARCHITECTURE & ROUTE INVENTORY
**Document Path:** `docs/design/phase-1c/PHASE-1C-PAGE-INVENTORY.md`  
**Role:** Digital Art Director, Information Architect, Senior UX Strategist  
**Project:** NRAVIXA × GJ Buildcon Redesign Demo  
**Phase:** Phase 1C — Design Decision Package (Strictly Read-Only / Zero Code Modified)  
**Date:** October 2026  

---

## 1. STRATEGIC PRINCIPLE: LEAN, EVIDENCE-BACKED INFORMATION ARCHITECTURE

We reject the convention of generating dozens of half-empty pages filled with lorem ipsum copy and generic stock images. In commercial civil contracting, **a concise, evidence-dense website with 2–3 flawless pages is vastly more persuasive than a sprawling 12-page sitemap of shallow filler**.

Every proposed route is evaluated against three strict criteria:
1. **Audience Demand:** Does a prospective developer, institutional client, or structural consultant need this dedicated view?
2. **Evidentiary Substance:** Do we possess authentic, verified data from `docs/FACTUAL_ACCURACY_AUDIT.md` to support this page without fabricating claims?
3. **Release Phasing:** Is this route essential for the **Release 1 Pitch Demo**, or should it be slated for post-pitch client delivery?

---

## 2. COMPREHENSIVE ROUTE INVENTORY & EVALUATION

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ ROUTE INVENTORY & RELEASE PHASING                                                               │
├────────────┬─────────────────────────────┬──────────────────────────┬───────────────────────────┤
│ Route Path │ Page Title & Function       │ Evidence Support Status  │ Release Recommendation    │
├────────────┼─────────────────────────────┼──────────────────────────┼───────────────────────────┤
│ `/`        │ Homepage (Core Narrative)   │ Fully Verified Data      │ **RELEASE 1 (MANDATORY)** │
│ `/capabilities`│ Technical Engineering Dossier│ Verified Services/Fleet  │ **RELEASE 1 (MANDATORY)** │
│ `/404`     │ Architectural "Not Found"   │ System Utility           │ **RELEASE 1 (MANDATORY)** │
│ `/company` │ Leadership & Heritage       │ Verified Founder Timeline│ RELEASE 2 (Post-Pitch)    │
│ `/fleet`   │ Plant & Heavy Machinery     │ 4 MAIT / 2 SANY Verified │ RELEASE 2 (Post-Pitch)    │
│ `/projects`│ Completed Scheme Portfolio  │ LACKS AUTHENTIC PHOTOS   │ DEFERRED TO CLIENT ONBOARD│
│ `/contact` │ Standalone Executive Inquiry│ Verified Address/Phone   │ OPTIONAL (Integrated Home)│
└────────────┴─────────────────────────────┴──────────────────────────┴───────────────────────────┘
```

---

### Detailed Route Specifications

#### Route 01: `/` (Homepage)
- **Status in Workspace:** Existing (`app/page.tsx`).
- **Release Mandate:** **Release 1 (Mandatory).**
- **Primary Audience Question:** *"Who is GJ Buildcon, what is their delivered scale in Maharashtra, and do they own the heavy machinery required to execute my project?"*
- **Purpose:** Serve as the definitive brand entry point, delivering the 6-chapter architectural narrative: Hero, Thesis, Scale Ledger, Dual Disciplines, Plant Fleet Authority, and Partner Trust Ledger.
- **Verified Content Required:** 10+ Years Experience, 25+ Lakh Sq. Ft. Delivered, 700+ Manpower, 4 MAIT & 2 SANY rigs, 9 verified developer partners, registered Pimple Saudagar address, official phone line `+91 91687 77272`.
- **Visual System Alignment:** Governs the entire design system: warm travertine bone (`#F7F5F0`), 1px hairline rules, monumental serif typography, and controlled subterranean dark inversion.

#### Route 02: `/capabilities` (Engineering Capabilities & Discipline Dossier)
- **Status in Workspace:** Existing (`app/capabilities/page.tsx`).
- **Release Mandate:** **Release 1 (Mandatory).**
- **Primary Audience Question:** *"What are the exact civil verticals and geotechnical piling methodologies supported, and what is their plant machinery capacity?"*
- **Purpose:** Provide an exhaustive, tab-less technical specification dossier detailing the two primary pillars: (1) Heavy Civil Construction (Residential, Commercial, Institutional), and (2) Deep Foundation Engineering (Tripod, Tractor, and Augur/Rotary Piling).
- **Verified Content Required:** Verified civil sectors, verified piling verticals, in-house machinery roster, QA testing references (Pile Integrity Testing, Cube Compression).
- **Visual System Alignment:** Strict architectural dossier layout: tabular data tables, hairline borders, technical drawings, and zero generic marketing fluff.

#### Route 03: `/404` (Custom Architectural "Not Found" Experience)
- **Status in Workspace:** Proposed (will be created in implementation phase).
- **Release Mandate:** **Release 1 (Mandatory).**
- **Primary Audience Question:** *"I followed a broken link—how do I return to the primary engineering dossier?"*
- **Purpose:** Maintain total brand continuity even during navigation failure. Replaces generic browser or framework 404 pages with a bespoke architectural statement.
- **Detailed Concept Below (Section 3).**

#### Route 04: `/company` (Leadership, Vision & Heritage)
- **Status in Workspace:** None.
- **Release Mandate:** **Release 2 (Post-Pitch Expansion).**
- **Primary Audience Question:** *"Who founded this company and what is their operational background?"*
- **Evaluation:** The founder timeline (Mr. Umesh Gatkal: 2008 MNC → 2015 Aditya Construction → 2021 G&J Constructions → 2025 G&J Buildcon) is verified, along with the authentic vision and mission statements. However, for the pitch demo, this content is already elegantly integrated into Chapter 01 of the homepage. Creating a separate shallow page dilutes focus.

#### Route 05: `/projects` (Completed Projects & Landmark Case Studies)
- **Status in Workspace:** None.
- **Release Mandate:** **Deferred Pending Authentic Client Photography.**
- **Primary Audience Question:** *"Can I see photographs and structural details of specific buildings GJ Buildcon has constructed?"*
- **Evaluation:** **Critical Factual Boundary.** The live website currently has zero authentic completed project photographs (only foreign stock images of American timber homes, European rigs, and Shanghai cranes). Creating a dedicated `/projects` gallery using AI or stock images would violate the project's ethical guidelines. A dedicated projects gallery will be built only when Mr. Umesh Gatkal provides authentic job-site photography.

#### Route 06: `/contact` (Standalone Executive Inquiries)
- **Status in Workspace:** None (handled via homepage footer).
- **Release Mandate:** **Optional / Homepage Integration Sufficient.**
- **Evaluation:** All verified contact channels (phone `+91 91687 77272`, email `gjconstruction111@gmail.com`, headquarters in Ganga Park, Pimple Saudagar) are already prominently accessible across the global header and homepage footer. A separate route is unnecessary for the demo.

---

## 3. CUSTOM 404 EXPERIENCE CONCEPT: "THE STRUCTURAL VOID"

The custom 404 page must feel like a deliberate, art-directed component of the **Architectural Monograph**, not an afterthought error screen.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ WIREFRAME: CUSTOM 404 EXPERIENCE (DESKTOP 1440 × 900)                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [GJ BUILDCON]                       [404 // STRUCTURAL VOID]     [TEL: +91 91687 77272]│
│ ────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                        │
│   4 0 4                                                                                │
│                                                                                        │
│   T H I S   C O O R D I N A T E                                                        │
│   L I E S   B E Y O N D   T H E   G R I D .                                            │
│                                                                                        │
│   The requested structural path does not exist within the current                      │
│   GJ Buildcon engineering documentation.                                               │
│                                                                                        │
│   ┌─────────────────────────────────────────────────────────┐                          │
│   │ [RETURN TO HOMEPAGE DOSSIER]    [VIEW CAPABILITIES]     │                          │
│   └─────────────────────────────────────────────────────────┘                          │
│                                                                                        │
│ ────────────────────────────────────────────────────────────────────────────────────── │
│   PUNE, MAHARASHTRA               EST. 2012             CIVIL & FOUNDATION CONTRACTING │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### Concept Elements:
1. **The Architectural Premise:** "Structural Void / Uncharted Grid." Evokes an empty blueprint parcel or unexcavated plot.
2. **Visual Treatment:** Built on the same warm travertine bone canvas (`#F7F5F0`) with 1px hairline rules. An immense, muted `404` watermark set in *Instrument Serif* sits in the background at 20% opacity.
3. **Typographic Hierarchy:**  
   *Heading:* "This Coordinate Lies Beyond the Grid."  
   *Prose:* "The requested structural path does not exist within current GJ Buildcon documentation. Return to the primary engineering register or consult our capabilities dossier."
4. **Action Affordances:** Clean hairline button links: `[Return to Homepage Dossier →]` and `[Explore Capabilities →]`.
5. **No Clichés:** Zero generic illustrations of construction workers with broken shovels, caution tape, or cartoon detour signs.

---

> **NEXT:** Continue to [`docs/design/phase-1c/PHASE-1C-FACTUAL-ACCURACY-REVIEW.md`](file:///c:/GJBUILDCON/docs/design/phase-1c/PHASE-1C-FACTUAL-ACCURACY-REVIEW.md) for the claim-by-claim evidentiary review.
