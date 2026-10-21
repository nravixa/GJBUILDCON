# Engineering Rules, Standards & Project Principles
**Project:** NRAVIXA × GJ BUILDCON Redesign  
**Document:** RULES.md  
**Role:** Technical Project Manager & Frontend Performance Engineer  
**Date:** October 2026 (Phase 0 Planning)  
**Status:** Mandatory for All Subsequent Phases

---

## 1. Non-Negotiable Project Principles

### Principle 01: Absolute Factual Integrity
- **No Fabricated Claims:** Never invent awards, safety certifications, ISO stamps, square footage metrics, client partnerships, or project completions that are not verified in the source audit.
- **Accurate Historical Record:** The leadership timeline must strictly follow verified facts: Mr. Umesh Gatkal (construction career started 2008 in MNCs → founded Aditya Construction 2015 → co-founded G&J Constructions 2021 → expanded to G&J Buildcon 2025).
- **No Bogus Reviews:** Testimonials and client quotes must either be verified directly from source materials or explicitly flagged as *“Illustrative Endorsement Template — Requires Client Sign-off”*.

### Principle 02: Total Workspace & Production Isolation
- **Dedicated Local Environment:** All redesign work is strictly quarantined in `c:\GJBUILDCON`.
- **Zero Production Risk:** Never attempt to connect to, scrape destructively, reconfigure, or overwrite the live WordPress hosting environment at `https://gjbuildcon.com` or Hostinger servers.

### Principle 03: Honest Media Attribution
- **No Stock Misrepresentation:** Never present a generic stock photograph or 3D concept render as an actual completed building of GJ Buildcon.
- **Copyright Protection:** Do not copy protected imagery, video files, or proprietary brand assets from the reference website (`https://nickho-motorsports.nl/`).

### Principle 04: Honest Form Behavior
- **No Fake "Sent!" Deceptions:** If a contact form does not have an active production endpoint attached during the demo, the interface must explicitly notify the user:  
  *“Demo Simulation: In production, this inquiry is routed via Server Action directly to management.”*

---

## 2. Coding Standards & TypeScript Conventions

### Next.js & React Architecture
1. **Server Components First:** Write components as React Server Components (RSC) by default. Add `'use client'` only to leaf components requiring event listeners, browser hooks, or GSAP animations.
2. **Strict TypeScript:** No `any` types. All data models (projects, equipment, team members, contact submissions) must have explicit interfaces in `types/index.ts`.
3. **Clean Code & Functional Style:** Pure functional components with explicit prop typing. No class components.
4. **Imports Order:**
   - Framework & external libraries (`react`, `next`, `gsap`, `lucide-react`)
   - Internal components (`@/components/...`)
   - Data & utilities (`@/data/...`, `@/lib/...`)
   - Types & interfaces (`@/types/...`)

### Styling & Design Tokens
1. **Token Discipline:** Rely strictly on CSS custom properties defined in `:root` and mirrored in Tailwind configurations. Never hardcode arbitrary hex colors directly inside component JSX classes.
2. **Tailwind Hierarchy:** Keep classes structured logically: layout (`flex`, `grid`) → sizing (`w-full`, `h-12`) → spacing (`p-4`, `m-2`) → typography (`text-base`, `font-bold`) → visuals (`bg-slate-900`, `border`).
3. **Responsive Breakpoints:** Design mobile-first, targeting `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px), and `2xl` (1536px).

---

## 3. Asset Handling & Performance Rules

1. **No External Hotlinking:** Never link to external demo URLs like `demo.bosathemes.com`. All imagery must reside locally in `public/assets/` or on an approved CDN.
2. **Next.js Image Optimization:** Always use `<Image />` from `next/image` for raster photography with explicit `alt`, `sizes`, and aspect ratio containers.
3. **Modern Formats:** Convert all raster photography to WebP/AVIF. SVG is mandatory for logos, brand marks, and technical icons.
4. **Zero Cumulative Layout Shift (CLS):** Reserve layout dimensions for all visual media prior to rendering.

---

## 4. Animation & Motion Rules

1. **Transform & Opacity Only:** Animate only hardware-accelerated properties (`transform`, `opacity`). Never animate `width`, `height`, `margin`, or `padding`.
2. **GSAP Context Lifecycle:** Every `gsap` animation within React must be registered inside `gsap.context()` or `@gsap/react` `useGSAP` hook, with explicit cleanup on component unmount.
3. **Reduced-Motion Compliance:** Respect `prefers-reduced-motion`. When active, disable all scroll-driven translations and GSAP stagger sequences.
4. **Touch Device Restraint:** Never enable Lenis or smooth scroll interception on touch devices or viewports below 1024px.

---

## 5. Accessibility (A11y) & Usability Rules

1. **Contrast Standards:** Ensure all text passes WCAG 2.1 AA standards (minimum 4.5:1 for body copy; 3:1 for large display headers).
2. **Visible Focus Rings:** Never remove focus outlines without providing a high-visibility custom replacement (`focus-visible:ring-2 focus-visible:ring-amber-500`).
3. **Semantic Hierarchy:** Exactly one `<h1>` per page. Maintain strict sequential heading levels without skipping.
4. **Form Labels:** Every `<input>`, `<select>`, and `<textarea>` must have an associated semantic `<label>` or explicit `aria-label`.

---

## 6. Security & Secret Protection Rules

1. **Zero Secret Leakage:** Never commit `.env.local` files, API keys, or private tokens to Git repositories.
2. **No Client Secrets:** Environment variables prefixed with `NEXT_PUBLIC_` must never contain private tokens or management passwords.
3. **Sanitization:** All contact form inputs must be sanitized using Zod schemas before processing to prevent cross-site scripting (XSS) or injection attacks.
