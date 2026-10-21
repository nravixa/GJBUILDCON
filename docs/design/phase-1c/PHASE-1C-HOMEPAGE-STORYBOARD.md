# GJ BUILDCON — PHASE 1C: VISUAL ART DIRECTION LAB & PROTOTYPE APPROVAL
# DOCUMENT 03: HOMEPAGE STORYBOARD & SCENE CHOREOGRAPHY
**Document Path:** `docs/design/phase-1c/PHASE-1C-HOMEPAGE-STORYBOARD.md`  
**Role:** Senior Interaction Designer, Motion Director, Editorial UX Architect  
**Project:** NRAVIXA × GJ Buildcon Redesign Demo  
**Phase:** Phase 1C — Design Decision Package (Strictly Read-Only / Zero Code Modified)  
**Date:** October 2026  

---

## 1. THE OPENING SCENE: INTEGRATED ARRIVAL (ZERO SPLASH-SCREEN DELAY)

### 1.1 The Philosophy of Immediate Architectural Arrival
We reject generic intro loaders, rotating 3D progress wheels, and full-screen splash screens. In elite architectural web design, the opening moment is **integrated directly into the functional viewport**. 

When the visitor lands on `gjbuildcon.com`:
- **Time to First Contentful Paint:** <0.6s. The page does not hold back content behind an artificial overlay.
- **The First 400ms:** The 1px hairline top rule draws across the ceiling of the viewport, the brand wordmark docks in the top-left, and the monumental headline settles smoothly into position with a subtle 12px upward fade.
- **Immediate Accessibility:** Screen readers and search engine crawlers immediately access semantic `<h1>` copy without waiting for animation scripts to resolve.

---

## 2. THE HERO STORYBOARD: FRAME-BY-FRAME CHOREOGRAPHY

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────┐
│ HERO SCROLL TIMELINE                                                                            │
├──────────┬─────────────────────────────┬───────────────────────────────┬────────────────────────┤
│ Frame    │ Scroll Position             │ Spatial Action                │ Narrative Evolution    │
├──────────┼─────────────────────────────┼───────────────────────────────┼────────────────────────┤
│ Frame 01 │ 0% Scroll (Initial Viewport)│ Monumental type + Masked pic  │ Immediate authority    │
│ Frame 02 │ 0% – 25% Scroll             │ Headline elevates, image widens│ Spatial expansion     │
│ Frame 03 │ 25% – 60% Scroll            │ Hairline structural lintel    │ Brand tagline resolves │
│ Frame 04 │ 60% – 90% Scroll            │ Visual payoff & data docking  │ Verified delivery proof│
│ Frame 05 │ 90% – 100% Scroll           │ Hairline handoff into Thesis  │ Continuous narrative   │
└──────────┴─────────────────────────────┴───────────────────────────────┴────────────────────────┤
│ REDUCED-MOTION BEHAVIOR: Entire sequence renders in its completed static state (Frame 04/05).   │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

### FRAME 01: INITIAL VIEWPORT & FIRST IMPRESSION (0% Scroll)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ FRAME 01: INITIAL ARRIVAL (DESKTOP 1440 × 900)                                         │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [GJ BUILDCON]                       [01 // MONOGRAPH]            [TEL: +91 91687 77272]│
│ ────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                        │
│   ENGINEERING                                            │    ┌──────────────────┐     │
│   MAHARASHTRA'S                                          │    │                  │     │
│   STRUCTURAL CORE.                                       │    │  RECESSED        │     │
│                                                          │    │  VERTICAL        │     │
│   Civil Construction & Foundation Engineering            │    │  STRUCTURAL      │     │
│   10+ Years Contracting Discipline                       │    │  FRAME (3:4)     │     │
│                                                          │    │                  │     │
│                                                          │    └──────────────────┘     │
│ ──────────────────────────────────────────────────────── │ ─────────────────────────── │
│   PUNE, MAHARASHTRA                    EST. 2012         │    [ 25+ LAKH SQ. FT. ]     │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Top Viewport (0–72px):** Fixed architectural header on warm travertine bone (`#F7F5F0`). Left: `GJ BUILDCON` wordmark. Center: chapter marker `01 // MONOGRAPH`. Right: direct click-to-call link `+91 91687 77272`.
- **Left Viewport (Columns 1–7):** Monumental display title set in *Instrument Serif* (`72px`, leading: `1.02`):  
  **"Engineering Maharashtra's Structural Core."**  
  Underneath, a restrained 2-line subtitle in Swiss sans (*Inter*, `16px/24px`):  
  *Civil Construction & Deep Foundation Engineering · 10+ Years Contracting Discipline.*
- **Right Viewport (Columns 8–12):** A recessed `3:4` vertical structural frame bounded by a 1px hairline border, showcasing a soaring reinforced concrete column at dusk.
- **Bottom Baseline:** Continuous 1px hairline rule with geographic coordinates and audited scale:  
  *PUNE, MAHARASHTRA · EST. 2012 · 25+ LAKH SQ. FT. DELIVERED.*
- **Copy Amount:** 18 words total.
- **Emotional Impact:** Quiet monumentality; zero clutter; complete confidence.

---

### FRAME 02: INITIAL SCROLL ENGAGEMENT (0% → 25% Scroll)
- **What Changes Visually:** As the user scrolls, the left headline shifts subtly upward by 24px and fades slightly to 85% opacity, yielding visual dominance to the architectural frame.
- **The Media Expansion:** The right structural image expands smoothly from its `3:4` vertical crop into a wider `16:9` panoramic span, moving outward toward the right viewport edge.
- **What Remains Anchored:** The top header and the left margin baseline remain firmly locked, ensuring spatial stability.
- **Emotional Impact:** Gives the user the tactile sensation of walking into a large three-dimensional architectural space.

---

### FRAME 03: EVOLVING COMPOSITION & NARRATIVE SHIFT (25% → 60% Scroll)

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ FRAME 03: THE STRUCTURAL LINTEL DOCKS                                                  │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ [GJ BUILDCON]                       [01 // MONOGRAPH]            [TEL: +91 91687 77272]│
│ ────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                        │
│   ENGINEERING MAHARASHTRA'S STRUCTURAL CORE.                                           │
│   "Crafting Landmarks, Creating Legacies™"                                             │
│                                                                                        │
│   ┌──────────────────────────────────────────────────────────────────────────────┐     │
│   │                                                                              │     │
│   │   EXPANDED HORIZONTAL PANORAMIC FRAME (16:9)                                 │     │
│   │   Active site engineering: concrete pour and heavy piling rig assembly       │     │
│   │                                                                              │     │
│   └──────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                        │
│ ────────────────────────────────────────────────────────────────────────────────────── │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

- **Typographic Resolution:** The primary brand tagline resolves underneath the headline in clean, refined sans typography:  
  *"Crafting Landmarks, Creating Legacies™"*
- **Structural Lintel Dock:** A horizontal hairline rule draws across beneath the headline, visually "capping" the title like a concrete lintel.
- **Image Behavior:** The image achieves full width across Columns 3–12, revealing the raw physical textures of active foundation work: steel rebar cages, concrete slurry, and hydraulic machinery.

---

### FRAME 04: VISUAL PAYOFF & AUDITED DATA DOCK (60% → 90% Scroll)
- **The Payoff:** The panoramic visual locks into crisp edge-to-edge alignment.
- **Data Reveal:** Underneath the image, two verified engineering proof points settle cleanly into position along the lower hairline:  
  `25+ LAKH SQ. FT. DELIVERED VOLUME` | `700+ SKILLED WORKFORCE DEPLOYED`
- **Focal Shift:** The user transitions from experiencing abstract brand authority into absorbing concrete evidence of delivered scale.

---

### FRAME 05: SEAMLESS HANDOFF INTO SECTION 01 (90% → 100% Scroll)
- **The Transition:** The bottom hairline divider of the hero aligns seamlessly with the top boundary rule of **Section 01 (The Engineering Thesis)**.
- **Zero Disconnected Jump:** The hero visual scrolls out of view naturally with standard page velocity, handing the eye directly to the opening paragraph of Section 01.
- **Zero Scroll-Jacking:** The browser's native scroll engine remains 100% in control. At no point is the user trapped in an artificial scroll-freeze.

---

## 3. THE NEXT TWO HOMEPAGE SECTIONS: PACING & CONTINUITY

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│ CONTINUOUS NARRATIVE CONTINUITY (SECTIONS 01 & 02)                                     │
├────────────────────────────────────────────────────────────────────────────────────────┤
│ ─── HAIRLINE DATUM CONTINUES ───────────────────────────────────────────────────────── │
│                                                                                        │
│ SECTION 01: THE ENGINEERING THESIS                                                     │
│                                                                                        │
│   [EMPTY ASYMMETRIC BREATHING ROOM]    "For over a decade, GJ Buildcon has executed    │
│   Columns 1–4                          complex civil infrastructure and deep foundation│
│                                        piling across Maharashtra. Operating our own    │
│                                        fleet of heavy hydraulic rigs, we deliver       │
│                                        structural durability from bedrock to skyline." │
│                                        Columns 5–12 (Large Editorial Prose 28px/40px)  │
│                                                                                        │
│ ────────────────────────────────────────────────────────────────────────────────────── │
│                                                                                        │
│ SECTION 02: AUDITED SCALE LEDGER (HAIRLINE DATA TABLE — ZERO CARDS)                    │
│                                                                                        │
│   ┌───────────────┬────────────────────┬───────────────────┬───────────────────────┐   │
│   │ 10+           │ 25+ LAKH           │ 700+              │ 4 MAIT / 2 SANY       │   │
│   │ Years In      │ Sq. Ft. Delivered  │ Skilled On-Site   │ Heavy Hydraulic       │   │
│   │ Construction  │ Across Sectors     │ Workforce         │ Piling Rig Units      │   │
│   └───────────────┴────────────────────┴───────────────────┴───────────────────────┘   │
│                                                                                        │
│ ────────────────────────────────────────────────────────────────────────────────────── │
│ SECTION 03 (PREVIEW): DUAL DISCIPLINES DIPTYCH [Civil Infra vs Deep Piling]            │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Section 01: The Engineering Thesis
- **Purpose:** Articulate the operational philosophy of GJ Buildcon with literary restraint.
- **Spatial Composition:** Asymmetric 12-column layout. Columns 1–4 remain empty negative space on warm travertine bone (`#F7F5F0`); Columns 5–12 house the editorial thesis in large-scale prose (`28px/40px` desktop).
- **Copy:**  
  *"For over a decade, GJ Buildcon has executed complex civil infrastructure and deep foundation piling across Maharashtra. Operating our own fleet of heavy hydraulic rigs, we deliver structural durability from bedrock to skyline."*
- **Visual Connection:** Connected to the hero above by a continuous 1px hairline rule.

### 3.2 Section 02: Audited Scale Ledger
- **Purpose:** Present verified operational scale with tabular dignity, completely replacing the rejected 4-card grid.
- **Spatial Composition:** A full-width, 4-column hairline data table spanning the 1536px container. Each column is separated by a 1px vertical hairline rule (`#DCD7CD`). Figures are set in monumental tabular numerals (`56px`), with 2-line descriptions in secondary ink below.
- **The Verified Metrics:**  
  1. `10+` — *Years in Construction (Est. 2012 / Founder heritage starting 2008)*  
  2. `25+ LAKH` — *Sq. Ft. Delivered Across Residential, Commercial, Schools & Hospitals*  
  3. `700+` — *Skilled On-Site Manpower Capacity*  
  4. `4 MAIT / 2 SANY` — *Heavy Hydraulic Piling Rigs in In-House Fleet*
- **Visual Connection:** Bounded top and bottom by continuous hairline rules. Zero background boxes, zero rounded corners, zero drop shadows.

### 3.3 Section 03 (Preview): Dual Disciplines Diptych
- **Handoff:** The lower rule of the Scale Ledger opens directly into the **Dual Disciplines Diptych**, splitting the screen 50/50 between *Civil Construction & Infrastructure* (left) and *Deep Foundation & Piling Engineering* (right).

---

## 4. MOBILE-SPECIFIC STORYBOARD (390 × 844 VIEWPORT)

Mobile must not be a crushed replica of desktop. It is choreographed as an **independent editorial scroll sequence**:

```
┌─────────────────────────────────────────┐
│ MOBILE FRAME 01: INITIAL ARRIVAL        │
│ Viewport: 390 × 844 px                  │
├─────────────────────────────────────────┤
│ [GJ BUILDCON]             [CALL DIRECT] │
│ ─────────────────────────────────────── │
│                                         │
│ ENGINEERING                             │
│ MAHARASHTRA'S                           │
│ STRUCTURAL CORE.                        │
│                                         │
│ Civil Construction & Piling Engineering │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │                                     │ │
│ │   PANORAMIC ARCHITECTURAL           │ │
│ │   CONSTRUCTION FRAME (16:9)         │ │
│ │                                     │ │
│ └─────────────────────────────────────┘ │
│                                         │
│ ─────────────────────────────────────── │
│ 25+ LAKH SQ. FT.     10+ YEARS          │
│ Delivered Volume     Discipline         │
└─────────────────────────────────────────┘
```

### Mobile Architectural Decisions:
1. **Typographic Wrapping:** The headline scales to `34px` (leading: `1.08`), wrapping cleanly in 3 deliberate lines without awkward hyphenation.
2. **Media Staging:** The desktop `3:4` vertical column converts immediately into a centered, full-width `16:9` photographic frame on mobile, preventing narrow vertical slivers.
3. **Zero Hover Dependence:** All links and actions have prominent touch targets (minimum `44 × 44px`).
4. **Header Streamlining:** The mobile header shows only the `GJ BUILDCON` wordmark and a high-contrast click-to-call icon button (`tel:+919168777272`), freeing up screen height for the headline.
5. **Scroll Height Budget:** Total mobile scroll height for the homepage opening and first two sections is kept strictly under **1,650px**, reducing scroll fatigue by over 50%.

---

> **NEXT:** Continue to [`docs/design/phase-1c/PHASE-1C-PAGE-INVENTORY.md`](file:///c:/GJBUILDCON/docs/design/phase-1c/PHASE-1C-PAGE-INVENTORY.md) for the complete multi-page architecture and 404 page concept.
