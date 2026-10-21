# Asset Inventory & Media Audit
**Subject:** GJ Buildcon Digital Assets & Media Analysis  
**Auditor:** NRAVIXA Technical Strategy & Creative Direction Team  
**Audit Date:** October 2026 (Phase 0 Discovery)  
**Status:** Complete

---

## 1. Asset Audit Methodology & Verification Criteria

To establish an authoritative baseline for the redesign demo, all media hosted on `https://gjbuildcon.com/` and referenced in public stylesheets were extracted, downloaded, and analyzed.

Assets were evaluated against five verification criteria:
1. **Authenticity:** Is the asset an authentic, proprietary asset of GJ Buildcon, or a third-party stock/template placeholder?
2. **Technical Suitability:** Resolution, aspect ratio, encoding efficiency, and visual clarity on modern Retina and 4K displays.
3. **Legal & Licensing Risk:** Presence of trademarked logos, foreign contractor watermarks, or unlicensed stock photos.
4. **Brand Cohesion:** Alignment with the target **Premium + Luxury + Architectural + Cinematic** aesthetic.
5. **Redesign Action:** How the asset should be treated during implementation.

---

## 2. Comprehensive Inventory of Discovered Assets

| Asset ID | Filename / Identifier | Source URL | Type / Format | Dimensions & File Size | Likely Purpose / Associated Section | Authenticity Status | Recommended Usage | Licensing & Integrity Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **AST-01** | `cropped-97e93160-cfee-4a18-8c76-ebe4a328f2e8-removebg-preview.png` | `.../wp-content/uploads/2025/09/` | PNG (Transparent) | 408 × 336 px<br>(31.5 KB) | Master Brand Logo (Header & Footer) | **Verified Authentic** | **Preserve & Vectorize** | Contains official roof motif, "GJ", "BUILDCON", and tagline *"Crafting Landmarks, Creating Legacies™"*. Recommend generating a clean SVG vector for crisp 4K rendering. |
| **AST-02** | `cropped-cropped-Add_a_little_bit_of_body_text__1_-removebg-preview-270x270.png` | `.../wp-content/uploads/2025/09/` | PNG (Transparent) | 270 × 270 px<br>(25.7 KB) | Favicon / Windows Tile Icon | **Verified Authentic (Draft)** | **Replace with Clean SVG Icon** | Original file uploaded with default Canva placeholder title (*"Add a little bit of body text"*). Replace with clean high-res SVG favicon. |
| **AST-03** | `9684549.webp` | `.../wp-content/uploads/2025/09/` | WebP (Raster) | 500 × 500 px<br>(10.0 KB) | GK Associates Testimonial Avatar | **Generic Stock Icon** | **Replace with Corporate Mark** | Generic blue circular user avatar. Replace with clean typographic badge or authentic developer partner logo. |
| **AST-04** | `1.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(579.5 KB) | Residential Projects (`/construction/` & `/about-us/`) | **Stock Photo (Unverified)** | **Replace with Architectural Asset** | Depicts an American drywall/timber renovation project with a female homeowner. Unrepresentative of Indian RCC multi-story residential construction. |
| **AST-05** | `2.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(350.2 KB) | Commercial Spaces (`/construction/`) | **Stock Photo (Unverified)** | **Replace with Commercial Tower Asset** | Low-resolution commercial building stock image. Replace with cinematic commercial architecture. |
| **AST-06** | `3.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(246.4 KB) | Schools & Hospitals (`/construction/`) | **Stock Photo (Unverified)** | **Replace with Institutional Architecture Asset** | Generic stock photo. Replace with dedicated hospital/institutional architectural imagery. |
| **AST-07** | `4.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(338.3 KB) | Infrastructure Development (`/construction/`) | **Stock Photo (Unverified)** | **Replace with Civil Infrastructure Asset** | Generic highway/earthwork stock photo. Replace with high-contrast civil engineering photography. |
| **AST-08** | `5.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(399.5 KB) | Tripod Piling (`/piling-services/`) | **Foreign Stock Photo (Mislabeled)** | **Replace with Foundation Piling Visual** | High-resolution photo of a red rapid impact compaction rig labeled "CAT" and "Cofra" (Dutch contractor). Mislabeled as "Tripod Piling". |
| **AST-09** | `6.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(418.7 KB) | Tractor Piling (`/piling-services/`) | **Stock Photo (Unverified)** | **Replace with Drilling Equipment Visual** | Generic drilling rig photo. Replace with specialized tractor/rotary piling unit visual. |
| **AST-10** | `7.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(586.7 KB) | Augur Piling (`/piling-services/`) | **Foreign Stock Photo (European)** | **Replace with Heavy Rotary Piling Visual** | High-resolution photo of an Italian Soilmec SR-45 rig with European workers in orange PPE and Wienerberger brick pallets. Excellent visual quality, but foreign provenance. |
| **AST-11** | `8.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(378.1 KB) | About Us Swiper Slide 1 | **Stock Photo (Atmospheric)** | **Demo Supplemental Asset** | Silhouette of workers on construction scaffolding against a sunset. High aesthetic value; suitable as secondary editorial backdrop. |
| **AST-12** | `9.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(401.2 KB) | About Us Swiper Slide 7 | **Stock Photo (Regional)** | **Demo Supplemental Asset** | Asian construction site with engineers in hard hats reviewing slab rebar. Believable regional execution context. |
| **AST-13** | `11.png` | `.../wp-content/uploads/2025/09/` | PNG (Raster) | 500 × 500 px<br>(258.6 KB) | About Us Swiper Slide 6 | **Foreign Stock Photo** | **Replace with Pune Skyline Visual** | Construction crane with Shanghai Lujiazui skyscraper skyline in background. Inappropriate for Pune local narrative. |
| **AST-14** | `1-1.png` to `4-1.png` | `.../wp-content/uploads/2022/09/` | PNG (Raster) | 500 × 500 px<br>(216–425 KB) | Bosa Theme Default Banner Slides | **Theme Demo Leftover** | **Discard Completely** | Leftover stock files from theme installation dated September 2022. |
| **AST-15** | `construction-image1.jpg` to `11.jpg` | `demo.bosathemes.com/...` | JPEG (Hotlinked) | Variable<br>(~80–180 KB) | Theme Demo Gallery Hotlinks | **Hotlinked External Demo Assets** | **Discard Completely** | Third-party demo server hotlinks across portfolio and homepage. Hotlinking creates extreme reliability and legal risk. |

---

## 3. Brand Asset Analysis & Color Extraction

### Master Logo Breakdown (`AST-01`)
- **Primary Mark:** An angled gable roof structure framing the letters **"GJ"**. A location waypoint pin floats above the central apex.
- **Roof / Pillar Structure Color:** Deep Teal / Dark Petrol Blue (`#005B60` / `#00484E`).
- **Letterform & Pin Color:** Rich Construction Amber / Warm Gold (`#F8B800` / `#F5A623`).
- **Wordmark ("BUILDCON"):** Solid Charcoal / Architectural Black (`#111827`).
- **Tagline:** *"Crafting Landmarks, Creating Legacies™"* in gold/amber.
- **Evaluation:** The logo has strong visual character and conveys foundation and architectural ambition. In the redesign, this mark should be respected and featured cleanly against high-contrast dark graphite and warm mineral backdrops.

---

## 4. Supplemental Imagery Strategy for the Demo

Because the client's current website relies heavily on unverified stock photos and theme demo hotlinks, the NRAVIXA redesign demo must introduce a **curated, art-directed supplemental image suite**.

### Strict Ethical & Professional Standards
> [!IMPORTANT]
> **No Misrepresentation Rule:**  
> Supplemental imagery used for the pitch demo must be classified as **"Art-Directed Architectural & Engineering Concepts"** or **"Capability Illustrations"**. They must **NEVER** be presented as actual finished projects of GJ Buildcon without formal client verification.

### Curated Image Specifications for Redesign Demo

| Visual Role | Subject Matter | Intended Composition | Target Aspect Ratio & Format | Placement in Redesign |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Stage Visual** | Monolithic modern concrete & steel architectural structure rising into dusk sky | Dramatic low-angle view, cinematic contrast, golden hour warmth against dark graphite sky | 16:9 / 21:9 Ultra-wide<br>WebP / AVIF (min 2560px) | Homepage Hero Canvas |
| **Heritage / Founder Visual** | Precision engineering blueprint overlaid on structural foundation execution | Macro architectural details, measuring calipers, steel rebar grid, refined lighting | 4:5 Editorial Portrait<br>WebP / AVIF (min 1600px) | About Us Leadership & Heritage Timeline |
| **Piling Rig Showcase 01** | Heavy Rotary Drilling Rig (MAIT / SANY class) operating on deep foundation strata | Bold mechanical profile, drilling auger penetrating ground, dust and power lighting | 16:9 Landscape<br>WebP / AVIF (min 1920px) | Piling Services: Augur / Rotary Section |
| **Piling Rig Showcase 02** | Hydraulic Crane & Tripod Rig assembly on an urban civil construction site | Structured industrial geometry, vertical cabling, mechanical precision | 4:3 Balanced<br>WebP / AVIF (min 1600px) | Piling Services: Tripod & Urban Piling Section |
| **Civil Showcase: Residential** | Premium residential tower with sculptural concrete balconies and warm ambient interior lighting | Geometric architectural perspective, dusk light, clean concrete finishes | 16:10 Architectural<br>WebP / AVIF (min 1920px) | Capabilities: Residential Vertical |
| **Civil Showcase: Commercial** | Modern glass-and-steel commercial headquarters with landscaped podium | Diagonal perspective, structural rhythm, crisp reflections | 16:10 Architectural<br>WebP / AVIF (min 1920px) | Capabilities: Commercial Vertical |
| **Civil Showcase: Institutional** | State-of-the-art educational campus or specialized hospital facade | Expansive, grounded institutional scale, clean horizontal lines | 16:10 Architectural<br>WebP / AVIF (min 1920px) | Capabilities: Schools & Hospitals Vertical |
| **Client Brand Badges** | Minimalist architectural monogram emblems for partner developers (GK, SNBP, GS Builders) | Clean geometric typography on dark graphite badges | 1:1 Monogram Vectors<br>Inline SVG | Trust Ecosystem / Client Marquee |

---

## 5. Asset Optimization & Delivery Pipeline

All media in the redesigned application must conform to modern performance standards:
1. **Next-Gen Encoding:** 100% of raster photography converted to **AVIF** with **WebP** fallback. Zero raw PNGs over 100 KB for photographic content.
2. **Responsive Image Sizes:** Generated in 640w, 1080w, 1920w, and 2560w variants using `next/image` with explicit `sizes` definitions.
3. **No External Hotlinking:** All media hosted locally within the project repository (`public/assets/...`) or served via verified CDN endpoints with static caching.
4. **Zero Layout Shift:** Every image component must declare explicit aspect ratios or intrinsic width/height to guarantee 0 CLS.
