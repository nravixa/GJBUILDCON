import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  MessageSquare,
  Layers,
  HardHat,
  Compass,
  FileText,
  ChevronRight,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { companyData } from "@/data/company";
import { fleetData } from "@/data/capabilities";

export const metadata: Metadata = {
  title: "Engineering Capabilities | Civil Construction & Piling Disciplines",
  description:
    "Comprehensive civil construction and deep foundation piling capabilities by GJ Buildcon in Pune. Specialized hydraulic rotary rigs, residential societies, commercial floorplates, and institutional campuses.",
  keywords: [
    "GJ Buildcon Capabilities",
    "Civil Construction Pune",
    "Deep Foundation Piling",
    "Augur Rotary Piling",
    "Tripod Piling Pune",
    "Tractor Piling",
    "Hydraulic Piling Rigs",
    "Rotary Drilling Rig Pune",
    "Residential Towers Civil Contractor",
    "Commercial Infrastructure Pune",
  ],
  alternates: {
    canonical: "/capabilities",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gjbuildcon.com/capabilities",
    title: "Engineering Capabilities | GJ Buildcon — Civil Construction & Piling Disciplines",
    description:
      "Comprehensive civil construction and deep foundation piling capabilities in Pune. Specialized hydraulic rotary rigs, residential towers, commercial structures.",
    siteName: "GJ Buildcon",
    images: [
      {
        url: "/images/hero/hero-foundation-engineering.webp",
        width: 1200,
        height: 630,
        alt: "GJ Buildcon Heavy Engineering & Rotary Piling Fleet",
      },
    ],
  },
};

export default function CapabilitiesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0B0D11] text-[#F2F0E9] selection:bg-amber-500 selection:text-slate-950">
      {/* Keyboard Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-amber-500 focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-bold focus:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white shadow-xl"
      >
        Skip to main content
      </a>

      {/* Global Header */}
      <SiteHeader />

      <main id="main-content" className="flex-1">
        {/* =========================================================================
            SECTION 1: EDITORIAL ARCHITECTURAL HERO
            ========================================================================= */}
        <section
          id="hero"
          aria-label="Capabilities Overview Hero"
          className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between overflow-hidden border-b border-white/10 bg-[#0B0D11] pt-12 pb-16 lg:pt-16 lg:pb-20"
        >
          {/* Subtle Ambient Radial Glows */}
          <div className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[140px]" />
          <div className="pointer-events-none absolute bottom-0 left-[-100px] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[130px]" />

          <Container className="relative z-10 flex flex-col justify-between flex-1">
            {/* Top Eyebrow & Navigation Hierarchy */}
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#94A3B8] mb-6">
                <Link href="/" className="hover:text-amber-400 transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3 w-3 text-[#A89F95]" />
                <span className="text-amber-400 font-semibold">Engineering Capabilities</span>
                <span className="hidden sm:inline text-white/30">•</span>
                <span className="hidden sm:inline text-[#A89F95]">Operational Scale Footprint</span>
              </div>

              <div className="max-w-4xl">
                <EyebrowLabel variant="teal" icon={<Layers className="h-3.5 w-3.5" />}>
                  Dual-Pillar Contracting Architecture // Pune & Western Maharashtra
                </EyebrowLabel>

                <h1 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#FFFFFF] leading-[1.12] sm:leading-[1.15]">
                  Dual-Pillar Civil Construction &amp; Deep Foundation Engineering.
                </h1>

                <p className="mt-6 max-w-3xl font-sans text-base sm:text-lg text-[#E2DDD5] leading-relaxed">
                  From Deccan volcanic basalt bedrock boring to multi-story reinforced concrete superstructures.
                  GJ Buildcon integrates heavy rotary piling and full-scope civil contracting under one unified,
                  disciplined command structure in Pune.
                </p>
              </div>
            </div>

            {/* Monumental Hero Media Frame */}
            <div className="mt-10 lg:mt-12 relative w-full overflow-hidden rounded-2xl border border-white/15 bg-slate-950 shadow-2xl">
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
                <Image
                  src="/images/capabilities/foundation-drilling-concept.webp"
                  alt="Deep foundation borehole drilling in basalt strata with heavy rotary rig and casing"
                  fill
                  priority
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center"
                />

                {/* Subtle Cinematic Vignette & Grid */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0D11] via-[#0B0D11]/30 to-black/30" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(14,77,84,0.2),transparent_70%)]" />

                {/* Top Badge: Honest Architectural Concept Disclosure */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/20 bg-black/75 px-3 py-1 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold backdrop-blur-md">
                    SPECIFICATION // GEOTECHNICAL DRILLING DOSSIER
                  </span>
                  <span className="hidden md:inline rounded-full border border-white/10 bg-black/60 px-3 py-1 font-mono text-xs text-slate-200 backdrop-blur-md">
                    Subsurface Excavation &amp; Rotary Piling Study
                  </span>
                </div>

                {/* Bottom Overlay Telemetry Data */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="max-w-xl">
                    <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold block mb-1">
                      Integrated Subsurface Matrix
                    </span>
                    <p className="font-sans text-xs sm:text-sm text-slate-100 backdrop-blur-sm bg-black/40 p-2.5 rounded-lg border border-white/10 leading-relaxed">
                      Coordinating deep hydraulic rotary borehole socketing with reinforced pile cap and superstructure casting,
                      eliminating typical handover delays between independent contractors.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <div className="rounded-xl border border-white/10 bg-black/70 px-4 py-2 font-mono text-right backdrop-blur-md">
                      <span className="block text-xs uppercase tracking-wider text-slate-300">Fleet Spec</span>
                      <span className="font-bold text-amber-400 text-sm">Hydraulic Rotary</span>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/70 px-4 py-2 font-mono text-right backdrop-blur-md">
                      <span className="block text-xs uppercase tracking-wider text-slate-300">Track Record</span>
                      <span className="font-bold text-white text-sm">Multi-Category</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick-Jump Section Navigation Bar */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#141820]/90 p-3 sm:p-4 backdrop-blur-lg">
              <span className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] px-2 font-semibold">
                Jump to Section:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#overview"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#CBD5E1] transition-all hover:border-amber-400 hover:text-white"
                >
                  01 // Dual Advantage
                </a>
                <a
                  href="#civil"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#CBD5E1] transition-all hover:border-amber-400 hover:text-white"
                >
                  02 // Civil Works
                </a>
                <a
                  href="#piling"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#CBD5E1] transition-all hover:border-amber-400 hover:text-white"
                >
                  03 // Piling Methods
                </a>
                <a
                  href="#fleet"
                  className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-xs text-[#CBD5E1] transition-all hover:border-amber-400 hover:text-white"
                >
                  04 // Heavy Fleet
                </a>
                <a
                  href="#enquiry"
                  className="rounded-lg bg-amber-500 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-amber-400 shadow-sm"
                >
                  05 // Project Enquiry
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            SECTION 2: SERVICE OVERVIEW & THE SINGLE-SOURCE ADVANTAGE
            ========================================================================= */}
        <Section spacing="default" surface="slate" className="border-b border-white/10" id="overview">
          <Container>
            <div className="max-w-3xl mb-12">
              <EyebrowLabel variant="amber" icon={<ShieldCheck className="h-3.5 w-3.5" />}>
                Contracting Architecture &amp; Delivery Model
              </EyebrowLabel>
              <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
                The Single-Source Advantage: Eliminating Contractor Boundary Friction.
              </h2>
              <p className="mt-4 font-sans text-base text-[#94A3B8] leading-relaxed">
                In conventional project procurement across Maharashtra, developers contract separate geotechnical
                drilling agencies and superstructure civil firms. This divided setup frequently causes disputes over
                pile cut-off levels, delayed borehole handovers, and finger-pointing during structural transitions.
              </p>
            </div>

            {/* Asymmetric Two-Column Editorial Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
              {/* Conventional Fragmented Model (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-red-500/20 bg-[#0B0D11]/90 p-7 sm:p-8">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-red-400 font-bold">
                      Conventional Model
                    </span>
                    <span className="font-mono text-xs text-[#A89F95] font-medium">Bifurcated Tenders</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-4">
                    Split Sub-Contractors &amp; Schedule Bottlenecks
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Separate piling vendors mobilize, drill, and vacate the site. The subsequent civil contractor
                    then disputes pile coordinates, cut-off tolerances, or excavation clearance, causing weeks of idle downtime.
                  </p>

                  <ul className="space-y-3 font-sans text-xs text-[#E2DDD5]">
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <span>Conflicting site staging, bentonite slurry clearing, and crane access disputes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <span>Multiple mobilization fees and separate management overheads.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                      <span>Divided structural liability when foundation-to-column load transfers occur.</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-red-300 uppercase tracking-wider font-medium">
                    Result: Extended preliminary schedules &amp; unplanned developer cost overruns.
                  </span>
                </div>
              </div>

              {/* GJ Buildcon Single-Source Model (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-teal-500/40 bg-gradient-to-br from-[#141820] to-[#0E4D54]/20 p-7 sm:p-8 shadow-xl">
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-teal-500/30 mb-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-teal-400 font-bold">
                      GJ Buildcon Unified Model
                    </span>
                    <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-2.5 py-0.5 font-mono text-xs text-teal-300 font-semibold">
                      Single Accountable Contractor
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-4">
                    Integrated Subsurface &amp; Superstructure Execution
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    By operating both heavy rotary piling machinery and full-scale civil construction crews under
                    one engineering management team, GJ Buildcon turns foundation completion directly into pile cap
                    casting and column framework erection without missing a single casting day.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl border border-white/10 bg-[#0B0D11]/60 p-4">
                      <span className="font-mono text-xs text-amber-400 font-semibold block mb-1">
                        Pillar 01: Geotechnical Piling
                      </span>
                      <p className="font-sans text-xs text-[#E2DDD5] leading-normal">
                        Bedrock borehole socketing, rebar cage hoisting via mobile Hydra cranes, and tremie concrete pouring.
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0B0D11]/60 p-4">
                      <span className="font-mono text-xs text-teal-400 font-semibold block mb-1">
                        Pillar 02: Civil Superstructure
                      </span>
                      <p className="font-sans text-xs text-[#E2DDD5] leading-normal">
                        Direct pile-cap excavation, basement retaining, multi-level RCC framing, and turnkey finishing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 4-Stage Continuum Strip */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-semibold block mb-3">
                    Unified Delivery Continuum
                  </span>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center font-mono text-xs">
                    <div className="rounded-lg bg-black/40 border border-white/10 p-2">
                      <span className="text-amber-400 block font-bold">01 // BORE</span>
                      <span className="text-slate-200 text-xs">Basalt Socketing</span>
                    </div>
                    <div className="rounded-lg bg-black/40 border border-white/10 p-2">
                      <span className="text-amber-400 block font-bold">02 // CAST</span>
                      <span className="text-slate-200 text-xs">Tremie Pouring</span>
                    </div>
                    <div className="rounded-lg bg-black/40 border border-white/10 p-2">
                      <span className="text-teal-400 block font-bold">03 // TIE</span>
                      <span className="text-slate-200 text-xs">Cap &amp; Plinth</span>
                    </div>
                    <div className="rounded-lg bg-black/40 border border-white/10 p-2">
                      <span className="text-teal-400 block font-bold">04 // ERECT</span>
                      <span className="text-slate-200 text-xs">RCC Frame</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Metrics Summary Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-[#0B0D11] p-6 text-center">
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-amber-400 block">Extensive</span>
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">Delivered Volume</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white block">Heavy Rigs</span>
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">Rotary Drilling Fleet</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-teal-400 block">Dedicated</span>
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">On-Site Workforce</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-white block">10+ Years</span>
                <span className="font-mono text-xs text-[#94A3B8] uppercase tracking-wider">Construction Heritage</span>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            SECTION 3: CIVIL CONSTRUCTION CATEGORIES DEEP-DIVE
            ========================================================================= */}
        <Section spacing="default" surface="base" className="border-b border-white/10" id="civil">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <EyebrowLabel variant="teal" icon={<Building2 className="h-3.5 w-3.5" />}>
                  Vertical 01 // Turnkey Civil Construction
                </EyebrowLabel>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
                  Superstructure Civil Contracting Across Core Sectors.
                </h2>
                <p className="mt-3 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  Reinforced concrete engineering executed with strict quality control, structured pour schedules,
                  and turnkey structural coordination for institutional, commercial, residential, and civic clients.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#141820] px-4 py-2 self-start md:self-auto font-mono text-xs text-[#94A3B8]">
                <span>Supported Scope: </span>
                <span className="text-teal-400 font-semibold">Substructure to Turnkey Shell</span>
              </div>
            </div>

            {/* Alternating Asymmetric Editorial Modules */}
            <div className="space-y-16">
              {/* Category 1: Residential Societies & High-Rise Towers */}
              <div
                id="civil-residential"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-[#141820]/70 p-6 sm:p-8 lg:p-10"
              >
                <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                  <Image
                    src="/images/capabilities/structural-foundation-concept.webp"
                    alt="Reinforced concrete superstructure and column grid under active construction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/75 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-amber-400 backdrop-blur-sm border border-white/10">
                    CIVIL SPECIFICATION // RCC RESIDENTIAL FRAMEWORK
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>Civil Category 01</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Residential Housing Societies &amp; Multi-Story Towers
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Precision casting of high-density housing communities, gated residential enclaves, and multi-story
                    societies across Pune. We emphasize earthquake-resistant structural frameworks, durable external plastering,
                    and disciplined casting cycles that protect developer delivery commitments.
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A89F95] font-semibold block mb-3">
                      Structural Protocols &amp; Execution Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Seismic-Resistant RCC Framing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Basement Parking &amp; Podium Slabs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Turnkey Masonry &amp; Waterproofing</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>System Formwork Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 2: Commercial & Corporate Complexes */}
              <div
                id="civil-commercial"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-[#141820]/70 p-6 sm:p-8 lg:p-10"
              >
                <div className="lg:col-span-6 lg:order-2 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                  <Image
                    src="/images/capabilities/infrastructure-scale-concept.webp"
                    alt="Expansive infrastructure and commercial floorplate construction at dusk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/75 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold backdrop-blur-sm border border-white/10">
                    CIVIL SPECIFICATION // COMMERCIAL FLOORPLATES
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>Civil Category 02</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Commercial Floorplates &amp; Corporate Parks
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Engineered for high-volume foot traffic, heavy mechanical equipment loads, and flexible interior layouts.
                    Our commercial civil works incorporate large column grids, vertical service shafts, and rigid facade
                    mounting interfaces built to institutional building codes.
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A89F95] font-semibold block mb-3">
                      Structural Protocols &amp; Execution Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>High-Span Open Floorplates</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Dedicated Central HVAC Shafting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Heavy Dead- &amp; Live-Load Capacity</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Corporate Egress &amp; Safety Norms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 3: Institutional Campuses & Healthcare Facilities */}
              <div
                id="civil-institutional"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-[#141820]/70 p-6 sm:p-8 lg:p-10"
              >
                <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                  <Image
                    src="/images/capabilities/concrete-steel-material-study.webp"
                    alt="Structural materials study of textured cast concrete, steel rebar ties and basalt aggregate"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/75 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold backdrop-blur-sm border border-white/10">
                    CIVIL SPECIFICATION // CAMPUS &amp; CIVIC WORKS
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>Civil Category 03</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Educational Campuses &amp; Healthcare Facilities
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-4">
                    Specialized civil engineering requiring heightened compliance: medical gas shafting and vibration
                    attenuation for diagnostic imaging wings, along with high-durability school buildings built for student
                    safety and high pedestrian traffic.
                  </p>
                  <p className="font-mono text-xs text-amber-400/90 mb-6 bg-amber-500/5 p-3 rounded-lg border border-amber-500/20">
                    Institutional Delivery Track Record: Demonstrated civil execution for regional educational trusts and healthcare organizations across the Pune Metropolitan Region.
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A89F95] font-semibold block mb-3">
                      Structural Protocols &amp; Execution Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Medical Compliance Shaft Integration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Vibration-Damped Foundation Ties</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>High-Throughput Pedestrian Safety</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Emergency Service Conduits</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Category 4: Infrastructure Utilities & Retaining Systems */}
              <div
                id="civil-infrastructure"
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl border border-white/10 bg-[#141820]/70 p-6 sm:p-8 lg:p-10"
              >
                <div className="lg:col-span-6 lg:order-2 relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                  <Image
                    src="/images/capabilities/foundation-construction-process.webp"
                    alt="Foundation retaining and deep pile execution on infrastructure worksite"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 rounded-md bg-black/75 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold backdrop-blur-sm border border-white/10">
                    CIVIL SPECIFICATION // UTILITY TRENCHES &amp; SHORING
                  </div>
                </div>

                <div className="lg:col-span-6 lg:order-1">
                  <div className="flex items-center gap-2 text-teal-400 font-mono text-xs uppercase tracking-wider mb-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
                    <span>Civil Category 04</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                    Infrastructure Utilities &amp; Structural Retaining Works
                  </h3>
                  <p className="font-sans text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Essential civic infrastructure executed with structural resilience: massive reinforced retaining walls
                    withstanding lateral earth pressures, stormwater culvert systems, subterranean utility trenches,
                    and internal high-load concrete transit roads built to industrial specifications.
                  </p>

                  <div className="border-t border-white/10 pt-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#A89F95] font-semibold block mb-3">
                      Structural Protocols &amp; Execution Highlights
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-sans text-xs text-[#E2E8F0]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Reinforced Earth Retaining Walls</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Subterranean Utility Ducting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>High-Load Concrete Pavements</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
                        <span>Monsoon Stormwater Culverts</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            SECTION 4: GEOTECHNICAL PILING DISCIPLINES
            ========================================================================= */}
        <Section spacing="default" surface="slate" className="border-b border-white/10" id="piling">
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <EyebrowLabel variant="amber" icon={<Wrench className="h-3.5 w-3.5" />}>
                  Vertical 02 // Deep Foundation Geotechnics
                </EyebrowLabel>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
                  Deep Piling Disciplines Tailored to Deccan Volcanic Strata.
                </h2>
                <p className="mt-3 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  Pune&apos;s complex geological topography transitions from alluvial topsoils into dense Deccan volcanic
                  hard basalt. GJ Buildcon deploys three verified piling methods matched to strata density, spatial access, and load specifications.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0B0D11] px-4 py-2 self-start md:self-auto font-mono text-xs text-amber-400">
                <span>Fleet Capability: </span>
                <span className="font-bold text-white">Hydraulic Rotary Rigs</span>
              </div>
            </div>

            {/* Three Technical Foundation Modules */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Discipline 1: Augur Rotary Piling */}
              <div
                id="piling-augur"
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0D11] p-6 sm:p-7 transition-all hover:border-amber-500/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 mb-6">
                    <Image
                      src="/images/capabilities/drilling-equipment-editorial.webp"
                      alt="Heavy rotary crawler drilling rig standing on fractured basalt platform with Kelly bar"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-md bg-black/80 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold border border-white/10">
                      PILING SPECIFICATION // DEEP BASALT SOCKETING
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Discipline 01 // Heavy Rig
                    </span>
                    <span className="rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 font-mono text-xs font-semibold text-amber-300">
                      Hard Basalt
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Augur Rotary Piling (Large-Diameter CFA / Bored)
                  </h3>
                  <p className="font-mono text-xs text-[#C5BCB3] mb-4">
                    High-capacity foundation drilling into Deccan volcanic bedrock
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Utilizing heavy hydraulic rotary rigs equipped with Kelly bars and specialized auger bits to penetrate
                    through dense basalt strata. Guarantees true bedrock anchoring for high-rise residential towers and heavy commercial podiums.
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-xs text-[#C5BCB3]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Primary Strata:</span>
                      <span className="text-white font-semibold">Hard Deccan Basalt</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Key Machine:</span>
                      <span className="text-amber-400 font-semibold">Hydraulic Rotary Rigs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Vibration Risk:</span>
                      <span className="text-white">Minimal / Rotary Cut</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Application:</span>
                      <span className="text-white">High-Rise Columns</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-amber-300 uppercase tracking-wider font-medium block">
                    Zero speculative torque claims — verified rotary boring
                  </span>
                </div>
              </div>

              {/* Discipline 2: Tripod & Bored Cast-In-Situ Piling */}
              <div
                id="piling-tripod"
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0D11] p-6 sm:p-7 transition-all hover:border-amber-500/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 mb-6">
                    <Image
                      src="/images/capabilities/hydraulic-rig-detail.webp"
                      alt="Mechanical drive unit and hydraulic hose assemblies for deep foundation rotary piling"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-md bg-black/80 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold border border-white/10">
                      PILING SPECIFICATION // BORED CAST-IN-SITU RIGGING
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Discipline 02 // Urban Infill
                    </span>
                    <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 font-mono text-xs font-semibold text-blue-300">
                      Constrained Sites
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Tripod &amp; Bored Cast-In-Situ Piling
                  </h3>
                  <p className="font-mono text-xs text-[#C5BCB3] mb-4">
                    Proven foundation stabilization for narrow urban plots
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Winch and drop-chisel tripod apparatus deployed with temporary casing and bentonite slurry circulation.
                    Ideal for tight city lanes and sensitive boundary plots where heavy crawler rigs cannot maneuver safely.
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-xs text-[#C5BCB3]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Primary Strata:</span>
                      <span className="text-white font-semibold">Clay, Silt &amp; Murrum</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Access Width:</span>
                      <span className="text-white font-semibold">Narrow City Approaches</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Concreting Method:</span>
                      <span className="text-white">Bottom-Up Tremie Pipe</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Economic Profile:</span>
                      <span className="text-amber-400">Cost-Effective Mobilization</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-amber-300 uppercase tracking-wider font-medium block">
                    Tailored for medium-rise &amp; infill residential plots
                  </span>
                </div>
              </div>

              {/* Discipline 3: Tractor & Mobile Piling Units */}
              <div
                id="piling-tractor"
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0B0D11] p-6 sm:p-7 transition-all hover:border-amber-500/40"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950 mb-6">
                    <Image
                      src="/images/hero/hero-foundation-engineering.webp"
                      alt="Mobile rotary hydraulic rig positioned on engineered foundation platform"
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-md bg-black/80 px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-amber-400 font-semibold border border-white/10">
                      PILING SPECIFICATION // AGILE MOBILE INFILL UNITS
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                      Discipline 03 // Rapid Mobile
                    </span>
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 font-mono text-xs font-semibold text-emerald-300">
                      Fast Turnaround
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2">
                    Tractor &amp; Mobile Piling Units
                  </h3>
                  <p className="font-mono text-xs text-[#C5BCB3] mb-4">
                    High-mobility foundation units for agile shoring &amp; retaining
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed mb-6">
                    Self-propelled mobile units configured for rapid site transit and fast setup.
                    Deployed primarily for perimeter shoring, retaining wall piles, plinth stabilization, and fast-track suburban projects.
                  </p>

                  <div className="space-y-2 border-t border-white/10 pt-4 font-mono text-xs text-[#C5BCB3]">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Mobility:</span>
                      <span className="text-white font-semibold">Direct Road Travel</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Setup Time:</span>
                      <span className="text-emerald-400 font-semibold">Immediate / Under 2 Hrs</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Staging Area:</span>
                      <span className="text-white">Minimal Plot Clearance</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-300">Best Application:</span>
                      <span className="text-white">Plinth Shoring &amp; Retention</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-xs text-amber-300 uppercase tracking-wider font-medium block">
                    Zero heavy-hauler low-bed trailer requirements
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            SECTION 5: DRILLING EQUIPMENT & FLEET CAPABILITIES
            ========================================================================= */}
        <Section spacing="default" surface="base" className="border-b border-white/10" id="fleet">
          <Container>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <EyebrowLabel variant="amber" icon={<HardHat className="h-3.5 w-3.5" />}>
                  Plant &amp; Heavy Fleet Capabilities // Geotechnical Assets
                </EyebrowLabel>
                <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
                  Drilling Equipment &amp; Fleet Capabilities: Geotechnical Execution in Basalt.
                </h2>
                <p className="mt-3 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                  Deep foundation piling in Deccan basalt demands specialized drilling machinery and experienced rigging crews. GJ Buildcon deploys dedicated heavy rotary drilling rigs and crane support units to maintain continuous operational cycles.
                </p>
              </div>

              <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-2.5 font-mono text-xs text-amber-400 self-start lg:self-auto">
                <span className="block font-bold">Heavy Rotary &amp; Support Fleet</span>
                <span className="text-slate-300 text-[11px]">Directly Maintained by Certified Crews</span>
              </div>
            </div>

            {/* Roster Cards with Operational Figures */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {fleetData.map((rig) => (
                <div
                  key={rig.id}
                  className="rounded-2xl border border-white/10 bg-[#141820] p-6 sm:p-7 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-3">
                      <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                        {rig.make} Engineering
                      </span>
                      <span className="rounded-md border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 font-mono text-xs font-bold text-amber-400">
                        {rig.badge || (rig.quantity ? `${rig.quantity} ${rig.quantity === 1 ? "Unit" : "Units"}` : "Support Fleet")}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-white mb-1">
                      {rig.name}
                    </h3>
                    <span className="font-mono text-xs text-teal-400 block mb-4">
                      {rig.category}
                    </span>

                    <p className="font-sans text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-6">
                      {rig.description}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4 font-mono text-xs text-[#94A3B8]">
                    <div className="flex items-center justify-between mb-1">
                      <span>Deployment:</span>
                      <span className="text-white">Active Pune Sites</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Fleet Status:</span>
                      <span className="text-amber-400 font-semibold">{rig.ownershipModel || "Operational Fleet"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Operational Fleet Benefits Grid */}
            <div className="rounded-2xl border border-white/10 bg-[#0E4D54]/15 p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold block mb-4">
                What Dedicated Fleet Deployment Delivers for Project Timelines
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs sm:text-sm text-[#CBD5E1]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-1">Synchronized Site Mobilization</strong>
                    <p className="text-[#94A3B8] leading-relaxed">
                      We dispatch specialized rigs according to site excavation readiness, aligning drilling cycles directly with project milestones.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-1">Optimized Foundation Economics</strong>
                    <p className="text-[#94A3B8] leading-relaxed">
                      Dedicated plant mobilization eliminates unnecessary brokerage overhead, providing competitive, transparent unit rates in foundation BOQs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold mb-1">Dedicated Rigging Technicians</strong>
                    <p className="text-[#94A3B8] leading-relaxed">
                      Operated exclusively by full-time company mechanics and crane riggers familiar with Pune basalt formation behaviors.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            SECTION 6: PROJECT CONSULTATION & ENQUIRY TERMINAL CTA
            ========================================================================= */}
        <Section spacing="default" surface="slate" className="border-b border-white/10" id="enquiry">
          <Container>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#141820] via-[#0B0D11] to-[#0E4D54]/25 p-8 sm:p-12 lg:p-16 shadow-2xl">
              {/* Background Architectural Accent Lines */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(245,158,11,0.08),transparent)]" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Narrative (7 cols) */}
                <div className="lg:col-span-7">
                  <EyebrowLabel variant="amber" icon={<Compass className="h-3.5 w-3.5" />}>
                    Project Scoping &amp; Engineering Consultation
                  </EyebrowLabel>

                  <h2 className="mt-4 font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#F2F0E9] leading-tight">
                    Ready to Scope Your Geotechnical Piling or Civil Tender?
                  </h2>

                  <p className="mt-4 font-sans text-sm sm:text-base text-[#CBD5E1] leading-relaxed max-w-xl">
                    Whether you require large-diameter rotary piling into basalt or a comprehensive civil superstructure
                    package, our engineering directors are ready to review your strata bore logs and structural designs.
                  </p>

                  {/* Pre-Tender Checklist */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-400 font-bold block mb-3">
                      Recommended Documents for Technical Review:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs text-[#94A3B8]">
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-teal-400" />
                        <span>Soil Investigation Bore Logs</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-teal-400" />
                        <span>Foundation Pile Load Schedules</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-teal-400" />
                        <span>RCC Architectural Layouts</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-teal-400" />
                        <span>Site Spatial Approach Dimensions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Direct Action Card (5 cols) */}
                <div className="lg:col-span-5 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#0B0D11]/90 p-6 sm:p-8 backdrop-blur-md">
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-400 block">
                    Direct Corporate Channels
                  </span>

                  {/* Phone Direct */}
                  <a
                    href={`tel:${companyData.phone}`}
                    className="flex items-center justify-between rounded-xl bg-amber-500 p-4 font-sans font-bold text-slate-950 transition-all hover:bg-amber-400 shadow-md"
                    aria-label={`Call direct: ${companyData.phoneDisplay}`}
                  >
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-slate-900 font-mono">
                          Direct Engineering Line
                        </span>
                        <span className="text-base font-extrabold">{companyData.phoneDisplay}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5" />
                  </a>

                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/${companyData.whatsapp.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 font-sans font-medium text-white transition-all hover:bg-white/10"
                    aria-label="Direct WhatsApp Message"
                  >
                    <div className="flex items-center gap-3">
                      <MessageSquare className="h-5 w-5 text-emerald-400" />
                      <div>
                        <span className="block text-xs uppercase tracking-wider text-slate-400 font-mono">
                          WhatsApp Business
                        </span>
                        <span className="text-sm font-semibold">{companyData.phoneDisplay}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-400" />
                  </a>

                  {/* Full Interactive Terminal Link */}
                  <Link
                    href="/#enquiry"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-teal-500/40 bg-teal-500/10 py-3.5 font-sans text-xs font-bold text-teal-300 transition-all hover:bg-teal-500/20"
                  >
                    <span>Launch Full Homepage Consultation Terminal</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="mt-2 pt-3 border-t border-white/5 text-center font-mono text-xs text-slate-300">
                    Headquarters: Flat No-3, B Wing, Ganga Park, Pimple Saudagar, Pune
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      {/* Global Shared Footer */}
      <SiteFooter />
    </div>
  );
}
