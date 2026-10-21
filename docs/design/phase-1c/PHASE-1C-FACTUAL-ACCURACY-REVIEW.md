# GJ BUILDCON — PHASE 1C: VISUAL ART DIRECTION LAB & PROTOTYPE APPROVAL
# DOCUMENT 05: FACTUAL ACCURACY REVIEW & EVIDENTIARY GATE
**Document Path:** `docs/design/phase-1c/PHASE-1C-FACTUAL-ACCURACY-REVIEW.md`  
**Role:** Senior Content Auditor, Fact-Checking Lead, Technical Strategist  
**Project:** NRAVIXA × GJ Buildcon Redesign Demo  
**Phase:** Phase 1C — Design Decision Package (Strictly Read-Only / Zero Code Modified)  
**Date:** October 2026  

---

## 1. THE EVIDENTIARY GATE: RULES OF FACTUAL ENGAGEMENT

In an agency pitch demo, **credibility is fragile**. If a prospective client sees inflated metrics, fabricated torque specs, or unauthorized partner logos, trust collapses immediately.

The governing rules of this factual-accuracy review are absolute:
1. **Source of Truth:** All claims are verified against `docs/FACTUAL_ACCURACY_AUDIT.md` (which extracted raw text from `https://gjbuildcon.com/`).
2. **Zero Fabrication:** If an engineering specification (torque, depth, acreage) does not exist in the public record, it is strictly purged.
3. **No Plausible Guesses:** Conflicting numbers are not resolved by picking the larger or more "impressive" figure.
4. **Transparent Concept Demarcation:** Conceptual 3D visuals are badged as such and never presented as completed structures.
5. **Typographic Integrity Over Numeric Filler:** A disciplined typographic statement with zero metrics is vastly superior to a beautiful graphic displaying false data.

---

## 2. CLAIM-BY-CLAIM FORENSIC AUDIT TABLE

```
┌──────────────────────────────────────────────────────────────────────────────────────────────────────────────────┐
│ CLAIM-BY-CLAIM FORENSIC VERIFICATION AUDIT                                                                        │
├────┬─────────────────────────────┬──────────────────────────┬──────────────────────┬─────────────┬───────────────┤
│ #  │ Exact Rendered Claim        │ Source Evidence Location │ Audit Status         │ Prototype   │ Action / Note │
│    │                             │ (`https://gjbuildcon.com/`)│                      │ Approval    │               │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 01 │ "10+ Years in Construction" │ Homepage Content Block 2;│ **VERIFIED**         │ **APPROVED**│ Retained as   │
│    │                             │ About Us Blocks 2 & 7    │                      │             │ core metric   │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 02 │ "25+ Lakh Sq. Ft. Delivered │ Homepage Blocks 3 & 8;   │ **VERIFIED**         │ **APPROVED**│ Retained as   │
│    │ Volume"                     │ About Us Block 2         │                      │             │ primary proof │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 03 │ "700+ Skilled Manpower"     │ Homepage Block 4;        │ **VERIFIED**         │ **APPROVED**│ Retained as   │
│    │                             │ About Us Block 3         │                      │             │ workforce kpi │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 04 │ "9+ Dedicated Site Staff"   │ Homepage Block 4;        │ **VERIFIED**         │ **APPROVED**│ Retained as   │
│    │                             │ About Us Block 3         │                      │             │ team metric   │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 05 │ Heavy Fleet: 4 MAIT, 2 SANY,│ Homepage Block 2;        │ **VERIFIED**         │ **APPROVED**│ Retained as   │
│    │ and Hydra Cranes            │ About Us Block 3         │                      │             │ machinery kpi │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 06 │ "Hydra Cranes Count = 3"    │ Scrapes state "Hydra     │ **UNVERIFIED**       │ **EXCLUDED**│ State "Hydra  │
│    │                             │ Crane" with no numeral   │ (Assumption)         │             │ Cranes" only  │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 07 │ Piling Torque (180 kNm) &   │ Phase 1 draft data; zero │ **CONTRADICTED /     │ **STRICTLY  │ Completely    │
│    │ Boring Depth (45m)          │ presence on live site    │ UNVERIFIED**         │ EXCLUDED**  │ purged        │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 08 │ "100+ Acre Industrial Park" │ Phase 1 draft; zero      │ **UNVERIFIED**       │ **STRICTLY  │ Purged from   │
│    │ Landmark Claim              │ presence on live site    │                      │ EXCLUDED**  │ all mockups   │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 09 │ 9 Developer Partners (Text):│ About Us Block 6 text:   │ **VERIFIED (TEXT)**  │ **APPROVED  │ Use text-only │
│    │ GK Associates, SNBP, etc.   │ "GK Associates, SNBP..." │                      │ AS TEXT**   │ ledger        │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 10 │ Partner Corporate Logos     │ Zero vector/image logos  │ **PERMISSION         │ **EXCLUDED  │ Do not render │
│    │ (Vector marks / graphics)   │ exist on live website    │ REQUIRED**           │ GRAPHICS**  │ third-party TM│
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 11 │ Founder Identity & Timeline:│ Homepage Heading [H5];   │ **VERIFIED**         │ **APPROVED**│ Sanitize past │
│    │ Mr. Umesh Gatkal (2008–2025)│ About Us Heading [H5]    │                      │             │ agency typo   │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 12 │ Official Brand Tagline:     │ Master Logo vector lockup│ **VERIFIED**         │ **APPROVED**│ Primary brand │
│    │ "Crafting Landmarks..."     │ (`AST-01`, `logo.png`)   │                      │             │ headline      │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 13 │ Official Phone Line:        │ Published across 4+ pages│ **VERIFIED**         │ **APPROVED**│ Retain exact  │
│    │ `+91 91687 77272`           │ on live website          │                      │             │ tel link      │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 14 │ Official Inquiries Email:   │ Published across 3 pages │ **VERIFIED**         │ **APPROVED**│ Retain exact  │
│    │ `gjconstruction111@gmail...`│ on live website          │                      │             │ mailto link   │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 15 │ Corporate Headquarters:     │ Published across 3 pages │ **VERIFIED**         │ **APPROVED**│ Semantic      │
│    │ Ganga Park, Pimple Saudagar │ on live website          │                      │             │ address block │
├────┼─────────────────────────────┼──────────────────────────┼──────────────────────┼─────────────┼───────────────┤
│ 16 │ Regional Growth Corridors:  │ Portfolio page [H1]:     │ **VERIFIED**         │ **APPROVED**│ Geographic    │
│    │ Pimple Saudagar/Gurav/etc.  │ Pimple Saudagar/Gurav... │                      │             │ footprint     │
└────┴─────────────────────────────┴──────────────────────────┴──────────────────────┴─────────────┴───────────────┘
```

---

## 3. STRICT EXCLUSIONS & ACTIONABLE DECISIONS

### 3.1 Claims Strictly Excluded from Customer-Facing Mockups
1. **Excluded: Speculative Rig Torque (180 kNm) & Depth (45m):**
   - *Rationale:* Zero equipment telemetry appears on the live site. Publishing fabricated numbers could lead to legal or contractual disputes. Piling capabilities are described through verified machine classes (MAIT, SANY, Hydra) and standard engineering methodologies (Tripod, Tractor, Augur/Rotary).
2. **Excluded: "100+ Acre Industrial Park" Claim:**
   - *Rationale:* This claim originated in an earlier AI draft and has zero supporting evidence on `https://gjbuildcon.com/`. It has been completely purged from the prototype narrative.
3. **Excluded: Third-Party Trademark Logos:**
   - *Rationale:* Scraping unauthorized logos of developers (e.g., Godrej, Kumar World) carries trademark liability. Verified partners are listed exclusively as clean typographic inscriptions.

### 3.2 Outstanding Questions for Client Onboarding
During future sales engagement with Mr. Umesh Gatkal, the following items will be formally submitted for confirmation:
- [ ] Confirm exact unit count of Hydra Mobile Cranes (2 vs 3 units).
- [ ] Confirm specific names and locations of signature completed residential towers or educational campuses.
- [ ] Obtain written permission to display official vector marks for developer partners.
- [ ] Request authentic high-resolution job-site photography to replace prototype concept imagery.

---

> **NEXT:** Continue to [`docs/design/phase-1c/PHASE-1C-OWNER-APPROVAL.md`](file:///c:/GJBUILDCON/docs/design/phase-1c/PHASE-1C-OWNER-APPROVAL.md) for the final owner approval checklist and comparative decision matrix.
