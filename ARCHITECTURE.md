# Technical Architecture & Engineering Specifications
**Project:** NRAVIXA × GJ BUILDCON Redesign  
**Document:** ARCHITECTURE.md  
**Role:** Next.js Architect, Frontend Performance Engineer & Accessibility Specialist  
**Date:** October 2026 (Phase 0 Planning)  
**Status:** Approved for Phase 1 Scaffolding

---

## 1. Technology Stack Selection & Evaluation

The chosen technical stack provides the optimal balance of raw performance, visual luxury, type safety, and deployment simplicity on Vercel.

| Layer | Selected Candidate | Architectural Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16.4 (App Router & Turbopack)** | Native Turbopack compilation (< 5s incremental builds), partial prefetching, automatic static generation, and built-in edge optimization. |
| **Core Library** | **React 19.3 / TypeScript 5** | Strict type-safety across all data contracts (`types/index.ts`). Functional components only. Zero runtime type drift. |
| **Styling Engine** | **Tailwind CSS v4 (`@tailwindcss/turbopack`)** | Configured via `@theme` directives in `app/globals.css` and CSS Custom Properties in `:root`. Zero legacy PostCSS overhead. |
| **Animation Engine** | **GSAP 3.12+ (Scheduled for Phase 2)** | Deferred to Phase 2 for Hero timeline sequencing and ScrollTrigger section reveals. Zero unnecessary runtime packages in Phase 1. |
| **Smooth Scrolling** | **Lenis (Evaluated for Phase 2)** | Progressive desktop-only enhancement. Completely disabled on mobile/touch viewports (< 1024px) and when `prefers-reduced-motion` is active. |
| **Iconography** | **Lucide React (`^1.55.0`)** | Tree-shakable SVG icon system matching engineering aesthetics with zero external font overhead. |
| **Utilities** | **`clsx` + `tailwind-merge`** | Implemented in `lib/utils.ts` (`cn()`) for bulletproof class name conflict resolution. |
| **Deployment Target** | **Vercel** | Native edge infrastructure, zero-config CI/CD, global asset caching, and automated Open Graph preview generation. |

---

## 2. Rendering Strategy & Component Boundaries

### Server Components by Default (RSC)
To maintain minimum client-side JavaScript execution and near-instant initial paint times:
- **100% of marketing copy, structured cards, data tables, and static page layouts are Server Components.**
- Server Components render to static HTML at build time (`output: 'export'` compatible or ISR).
- Zero hydration penalty for textual and static visual content.

### Client Component Boundaries (`'use client'`)
Client Components are strictly restricted to isolated interactive leaves:
1. `HeroAnimationCanvas.tsx`: Mounts GSAP entrance timeline and depth displacement.
2. `StickyHeritageTimeline.tsx`: Handles scroll-tied pinning and active milestone indicators.
3. `CapabilitiesTabs.tsx`: Manages interactive switching between Civil Construction verticals and Piling equipment rigs.
4. `ProjectFilterDeck.tsx`: Controls category filtering (Residential, Commercial, Institutional, Geotechnical).
5. `ContactInquiryForm.tsx`: Controlled form state, real-time input validation, and submission feedback.
6. `SmoothScrollProvider.tsx`: Manages desktop-only Lenis synchronization with GSAP `ScrollTrigger`.

```
                    ┌──────────────────────────────────────────────┐
                    │               App Layout (RSC)               │
                    │   - Global Meta, Fonts, Structured Data      │
                    └──────────────────────┬───────────────────────┘
                                           │
         ┌─────────────────────────────────┴─────────────────────────────────┐
         │                                                                   │
┌────────▼─────────────────────┐                         ┌───────────────────▼──────────────────┐
│     Page Canvas (RSC)        │                         │  Interactive Leaf Components (Client)│
│  - Static Semantic HTML      │                         │  - HeroAnimationCanvas.tsx           │
│  - Pre-rendered Content Deck │ ◄── [Props / Data Contract] ─── │  - StickyHeritageTimeline.tsx        │
│  - Server-optimized Images   │                         │  - ProjectFilterDeck.tsx             │
│  - Structured JSON-LD        │                         │  - ContactInquiryForm.tsx            │
└──────────────────────────────┘                         └──────────────────────────────────────┘
```

---

## 3. Directory & Routing Architecture

The project will be organized using the Next.js App Router convention with dedicated data layers:

```
c:\GJBUILDCON\
├── app/
│   ├── layout.tsx                # Root layout (fonts, metadata, smooth scroll wrapper)
│   ├── page.tsx                  # Homepage (Monolithic Hero, Stats, Capabilities, Heritage)
│   ├── about/
│   │   └── page.tsx              # Leadership, 2008-2025 Timeline, Fleet & Workforce
│   ├── capabilities/
│   │   ├── page.tsx              # Discipline overview hub
│   │   ├── civil-construction/   # Residential, Commercial, Institutional, Infrastructure
│   │   └── piling-foundations/   # MAIT/SANY fleet, Augur, Tripod, Tractor methods
│   ├── projects/
│   │   ├── page.tsx              # Portfolio filter deck & Pune regional footprint
│   │   └── [slug]/               # Dynamic project case study template
│   ├── insights/
│   │   └── page.tsx              # Technical articles & civil construction guides
│   ├── contact/
│   │   └── page.tsx              # Dedicated consultation terminal & office map
│   ├── sitemap.ts                # Dynamic, fully crawlable XML sitemap
│   └── robots.ts                 # Production search engine directives
├── components/
│   ├── ui/                       # Buttons, Badges, Modals, Hairline Dividers
│   ├── navigation/               # Sticky HUD Bar, Fullscreen Blueprint Drawer
│   ├── hero/                     # Cinematic Canvas, Monumental Wordmark, Metrics Bar
│   ├── capabilities/             # Dual vertical explorer, rig technical cards
│   ├── timeline/                 # ScrollTrigger heritage roadmap
│   ├── projects/                 # Landmark showcase cards, filter tabs
│   └── forms/                    # Controlled inquiry form with client/server validation
├── data/
│   ├── company.ts                # Verified business facts, contact endpoints, HQ address
│   ├── capabilities.ts           # Civil construction and piling specifications
│   ├── fleet.ts                  # In-house machinery specs (MAIT, SANY, Hydra)
│   ├── projects.ts               # Type-safe project portfolio items & Pune micro-markets
│   └── partners.ts               # Developer client relationships (GK, SNBP, GS Builders)
├── lib/
│   ├── animations.ts             # GSAP timeline presets, easing curves, ScrollTrigger configs
│   └── utils.ts                  # Class merge helpers, formatters (sq. ft., INR)
└── types/
    └── index.ts                  # TypeScript interfaces for all data entities
```

---

## 4. Animation Architecture & Scroll Mechanics

### GSAP & ScrollTrigger Standards
1. **Hardware Acceleration:** All animations are restricted exclusively to `transform` (`x`, `y`, `scale`) and `opacity`. Never animate layout-triggering properties (`width`, `height`, `top`, `margin`, `padding`).
2. **Context Cleanup:** Every GSAP effect inside a React component must be wrapped inside `gsap.context()` with comprehensive cleanup in `useEffect` or `useGSAP` return hooks to prevent memory leaks and orphaned triggers.
3. **ScrollTrigger Optimization:**
   - Use `fastScrollEnd` to prevent flickering on rapid mobile scrolling.
   - Throttled resize listeners via `ScrollTrigger.config({ ignoreMobileResize: true })`.

### Lenis Smooth Scrolling Evaluation Matrix
- **Desktop (Viewport ≥ 1024px, Fine Pointer):** Lenis enhances the cinematic feel by normalizing trackpad and mousewheel inertia. Synchronized with GSAP via `ScrollTrigger.update`.
- **Mobile / Touch (Viewport < 1024px or Coarse Pointer):** Lenis is **completely disabled**. Native touch inertia is strictly preserved to prevent touch lag, gesture hijacking, and browser address bar jumping.
- **Accessibility Safeguard:** When `window.matchMedia('(prefers-reduced-motion: reduce)').matches` is true, smooth scrolling is instantly terminated and all animations revert to static visibility.

---

## 5. Performance Engineering & Core Web Vitals

| Metric | Target | Technical Strategy |
| :--- | :--- | :--- |
| **LCP (Largest Contentful Paint)** | `< 1.8s` | Priority loading on hero background with `fetchPriority="high"`; zero-blocking client JS prior to initial render; font preloading via `next/font`. |
| **CLS (Cumulative Layout Shift)** | `0.00` | Rigid aspect ratio containers (`aspect-[16/9]`, `aspect-square`) on all media; fallback font size-adjust override; zero dynamic layout insertions. |
| **FID / INP (Interaction to Next Paint)** | `< 100ms` | Lightweight client bundles (< 85 KB initial client JS); offloading heavy computation from the main thread; passive scroll listeners. |
| **Asset Optimization** | Next-gen formats | Built-in Next.js image optimization converting all visuals to AVIF/WebP with responsive `srcset` (640px, 1080px, 1920px, 2560px). |

---

## 6. Search Engine Optimization (SEO) Architecture

Unlike the legacy WordPress site where core pages were excluded from the XML sitemap and title tags were empty, the redesign implements a complete institutional SEO architecture:

1. **Semantic Hierarchy:** Exactly one `<h1>` per page. Strict heading order (`H1` → `H2` → `H3`).
2. **Dynamic Metadata API:** Every route declares unique, descriptive metadata:
   - Dynamic Open Graph cards with 1200×630px social preview images.
   - Canonical URL tags enforcing the primary domain (`https://gjbuildcon.com`).
   - Meta robots directives (`index, follow, max-image-preview:large`).
3. **Automated XML Sitemap:** Next.js route `app/sitemap.ts` programmatically generates valid XML containing all marketing routes and project slugs with accurate `lastModified` timestamps.
4. **Factual Structured Data (JSON-LD):**
   ```json
   {
     "@context": "https://schema.org",
     "@type": "HomeAndConstructionBusiness",
     "name": "GJ Buildcon",
     "alternateName": "G and J Buildcon",
     "description": "Leading civil construction contractor and foundation piling specialist in Pune, Maharashtra. Over 25+ lakh sq. ft. delivered.",
     "url": "https://gjbuildcon.com",
     "telephone": "+91-9168777272",
     "email": "gjconstruction111@gmail.com",
     "address": {
       "@type": "PostalAddress",
       "streetAddress": "Flat No-3, First Floor, B Wing, Ganga Park, Pimple Saudagar",
       "addressLocality": "Pune",
       "postalCode": "411027",
       "addressRegion": "Maharashtra",
       "addressCountry": "IN"
     },
     "geo": {
       "@type": "GeoCoordinates",
       "latitude": "18.5986",
       "longitude": "73.7978"
     }
   }
   ```
   *Strict Rule:* No fabricated aggregate review ratings or false certification schema will be included.

---

## 7. Accessibility Architecture (WCAG 2.1 AA Compliance)

1. **Keyboard Navigability:** Full tab order navigation across all interactive elements with high-visibility custom focus rings (`ring-2 ring-amber-500 ring-offset-2 ring-offset-slate-900`).
2. **Color Contrast:** All body typography achieves a contrast ratio of ≥ 6.8:1 against its background (exceeding WCAG AA 4.5:1). Display typography achieves ≥ 18:1.
3. **Screen Reader Optimization:** Meaningful, descriptive `aria-label` attributes on icon-only buttons, modal closers, and expandable navigation menus.
4. **Form Accessibility:** Explicit `<label>` associations for every input, `aria-required="true"`, and clear inline validation error messaging with `role="alert"`.
5. **Reduced Motion Engine:** Comprehensive CSS and JS support for `prefers-reduced-motion: reduce`.

---

## 8. Contact Experience & Lead Generation Architecture

### Demo State vs. Production Implementation
- **For the Demo Version:**
  - The contact form will feature complete client-side controlled state and Zod validation (validating Indian phone format `+91 XXXXX XXXXX`, email syntax, project type, and inquiry volume).
  - When submitted, the form will display a realistic processing indicator followed by an explicit demo notice: *"Demo Submission Simulated: In a production environment, this triggers an automated SMS to management and generates a lead in your CRM."*
  - **Zero Deception:** The UI will never pretend to have sent an email to a real server if no API endpoint is connected.

### Low-Cost Production Strategy for Client Handoff
When GJ Buildcon approves the redesign, the recommended production integration path is:
1. **Server-Side API Route:** Next.js Server Action with Zod schema validation.
2. **Spam Prevention:** Cloudflare Turnstile (invisible, zero-cost, highly effective against bot spam).
3. **Transactional Delivery:** Resend or Amazon SES (delivers formatted HTML notifications to `gjconstruction111@gmail.com` with automated WhatsApp webhook notifications via Twilio/Gupshup).
4. **Security & Secrets:** All API keys stored exclusively in server environment variables (`.env.local`), never exposed in browser bundles.
