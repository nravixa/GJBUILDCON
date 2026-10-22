"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Wrench,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  HardHat,
  Cpu,
  Layers,
  ChevronRight,
  MapPin,
  Calendar,
  X,
  Maximize2,
  Check,
  Compass,
} from "lucide-react";
import { PageHeader } from "@/components/ui/PageHeader";
import { capabilitiesData, fleetData, partnerDevelopers } from "@/data/capabilities";
import {
  projectsData,
  projectCategories,
  ProjectCategory,
  DetailedProject,
} from "@/data/projects";
import { companyData } from "@/data/company";

export const ServicesProjectsView: React.FC = () => {
  // Services filtering state
  const [activeServiceFilter, setActiveServiceFilter] = useState<"all" | "civil" | "piling">("all");

  // Projects filtering state & Modal state
  const [activeProjectCategory, setActiveProjectCategory] = useState<ProjectCategory>("All");
  const [selectedProject, setSelectedProject] = useState<DetailedProject | null>(null);

  const civilCapabilities = capabilitiesData.filter((c) => c.vertical === "civil");
  const pilingCapabilities = capabilitiesData.filter((c) => c.vertical === "piling");

  const displayedCapabilities =
    activeServiceFilter === "all"
      ? capabilitiesData
      : activeServiceFilter === "civil"
      ? civilCapabilities
      : pilingCapabilities;

  const filteredProjects =
    activeProjectCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeProjectCategory);

  // Local image mapping for services
  const getImageForService = (id: string) => {
    switch (id) {
      case "civil-residential":
        return "/images/capabilities/res_proj_1.png";
      case "civil-commercial":
        return "/images/capabilities/comm_spaces_2.png";
      case "civil-institutional":
        return "/images/capabilities/schools_hosp_3.png";
      case "piling-augur":
        return "/images/capabilities/augur_piling_7.png";
      case "piling-tripod":
        return "/images/capabilities/tripod_piling_5.png";
      case "piling-tractor":
        return "/images/capabilities/tractor_piling_6.png";
      default:
        return "/images/capabilities/foundation-construction-process.webp";
    }
  };

  const executionSteps = [
    {
      step: "01",
      title: "Architectural & Structural Engineering",
      description:
        "Detailed review of structural blueprints, seismic load modeling, foundation layouts, and municipal building compliance.",
    },
    {
      step: "02",
      title: "Site Mobilization & Plant Staging",
      description:
        "Rapid deployment of construction machinery, tower cranes, material hoists, and on-site engineering supervision crews.",
    },
    {
      step: "03",
      title: "Sub-Grade Foundation & Piling Support",
      description:
        "Deep foundation socketing into Deccan basalt strata or high-load raft casting to establish an unshakeable structural base.",
    },
    {
      step: "04",
      title: "RCC Superstructure & Monolithic Pouring",
      description:
        "Precision column casting, shear wall construction, and high-tolerance post-tensioned / RCC slab casting with rapid cycle execution.",
    },
    {
      step: "05",
      title: "Masonry, Weatherproofing & MEP Shafting",
      description:
        "Integrated brickwork, external weather-resistant plastering, plumbing risers, fire ducts, and electrical conduits.",
    },
    {
      step: "06",
      title: "Quality Audit & Landmark Handover",
      description:
        "Non-destructive cube strength testing, finishing snag audits, and certified turnkey delivery on schedule.",
    },
  ];

  return (
    <>
      {/* Top Page Header */}
      <PageHeader
        badge="Civil Construction, Infrastructure & Landmark Gallery"
        title="Our Services"
        subtitle="Explore our comprehensive civil construction solutions, multi-storey building execution, modern infrastructure development, and specialized geotechnical foundation support across Pune."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Services" },
        ]}
      />

      {/* Quick Navigation Jump Bar */}
      <div className="sticky top-20 z-30 border-b border-[#2D2622] bg-[#12100E]/95 backdrop-blur-md py-3 px-6 sm:px-10 lg:px-16 transition-all">
        <div className="mx-auto flex max-w-[1536px] flex-wrap items-center justify-between gap-3 font-sans text-xs uppercase tracking-wider">
          <div className="flex items-center gap-2 text-[#A89F95]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2A284]" />
            <span className="font-semibold text-[#FFFFFF]">Quick Section Jump:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 font-medium">
            <a
              href="#services"
              className="rounded-full border border-[#2D2622] bg-[#181512] px-3.5 py-1 text-[#C5BCB3] hover:border-[#C2A284] hover:text-[#FFFFFF] transition-all"
            >
              1. Construction &amp; Civil Services
            </a>
            <a
              href="#fleet"
              className="rounded-full border border-[#2D2622] bg-[#181512] px-3.5 py-1 text-[#C5BCB3] hover:border-[#C2A284] hover:text-[#FFFFFF] transition-all"
            >
              2. Construction Plant &amp; Fleet
            </a>
            <a
              href="#protocol"
              className="rounded-full border border-[#2D2622] bg-[#181512] px-3.5 py-1 text-[#C5BCB3] hover:border-[#C2A284] hover:text-[#FFFFFF] transition-all"
            >
              3. Execution Protocol
            </a>
            <a
              href="#projects"
              className="rounded-full border border-[#C2A284]/40 bg-[#C2A284]/10 px-3.5 py-1 text-[#C2A284] hover:bg-[#C2A284]/20 hover:text-[#FFFFFF] transition-all font-semibold"
            >
              4. Completed Projects Gallery &darr;
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 1: OUR SERVICES                                                   */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E] scroll-mt-36">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
          
          {/* Section 1 Header & Filter Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
                <span>SECTION 01 // CIVIL CONSTRUCTION &amp; CAPABILITIES</span>
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#FFFFFF]">
                Turnkey Construction &amp; Civil Engineering Services
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-[#D4CDC5] max-w-2xl leading-relaxed">
                End-to-end residential, commercial, and institutional civil construction delivered with structural durability, complemented by secondary deep foundation engineering.
              </p>
            </div>

            {/* Filter Tabs */}
            <div
              role="tablist"
              aria-label="Services Filter"
              className="inline-flex rounded-full border border-[#2D2622] bg-[#181512] p-1.5 self-start md:self-auto"
            >
              <button
                type="button"
                onClick={() => setActiveServiceFilter("all")}
                className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeServiceFilter === "all"
                    ? "bg-[#C2A284] text-[#12100E] shadow-sm"
                    : "text-[#D4CDC5] hover:text-[#FFFFFF]"
                }`}
              >
                All Services ({capabilitiesData.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveServiceFilter("civil")}
                className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeServiceFilter === "civil"
                    ? "bg-[#C2A284] text-[#12100E] shadow-sm"
                    : "text-[#D4CDC5] hover:text-[#FFFFFF]"
                }`}
              >
                Civil Construction ({civilCapabilities.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveServiceFilter("piling")}
                className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                  activeServiceFilter === "piling"
                    ? "bg-[#C2A284] text-[#12100E] shadow-sm"
                    : "text-[#D4CDC5] hover:text-[#FFFFFF]"
                }`}
              >
                Piling Engineering ({pilingCapabilities.length})
              </button>
            </div>
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCapabilities.map((item) => (
              <article
                key={item.id}
                id={item.id}
                className="rounded-2xl border border-[#2D2622] bg-[#161311] overflow-hidden flex flex-col justify-between hover:border-[#C2A284]/60 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Visual Asset Container */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#12100E]">
                    <Image
                      src={getImageForService(item.id)}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161311] via-transparent to-transparent opacity-80" />
                    
                    {/* Vertical Tag */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider border backdrop-blur-md ${
                          item.vertical === "civil"
                            ? "border-emerald-500/30 bg-emerald-950/60 text-emerald-300"
                            : "border-[#C2A284]/30 bg-[#181512]/80 text-[#C2A284]"
                        }`}
                      >
                        {item.vertical === "civil" ? "Civil Superstructure" : "Deep Foundation Piling"}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] mb-2 font-medium">
                      {item.subtitle}
                    </div>

                    <h3 className="font-bourbon text-2xl font-bold uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors mb-4">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Technical Specs List */}
                    {item.specs && item.specs.length > 0 && (
                      <div className="pt-4 border-t border-[#2D2622]">
                        <div className="font-sans text-[11px] uppercase tracking-widest text-[#A89F95] font-semibold mb-3">
                          Key Engineering Standards:
                        </div>
                        <ul className="space-y-2">
                          {item.specs.map((spec, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-center gap-2 font-sans text-xs text-[#E2DDD5]"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#C2A284] shrink-0" />
                              <span>{spec}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-between rounded-xl border border-[#2D2622] bg-[#181512] px-4 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#D4CDC5] hover:text-[#FFFFFF] hover:border-[#C2A284] hover:bg-[#1F1B17] transition-all"
                  >
                    <span>Request Scope &amp; Estimates</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Heavy Rotary Fleet & Machinery (Anchor: #fleet) */}
      <section id="fleet" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#161311] scroll-mt-36">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
          
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                Heavy Plant &amp; Construction Machinery
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#FFFFFF]">
                Construction Plant &amp; Heavy Fleet
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
                Direct operational deployment of construction lifting equipment, modular staging systems, and secondary foundation drilling units ensures zero project delays.
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-xl border border-[#2D2622] bg-[#12100E] px-4 py-2 font-mono text-xs text-[#C2A284]">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Zero Subcontractor Dependency</span>
            </div>
          </div>

          {/* Fleet Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fleetData.map((rig) => (
              <div
                key={rig.id}
                className="rounded-2xl border border-[#2D2622] bg-[#12100E] p-8 flex flex-col justify-between hover:border-[#C2A284]/60 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="rounded-full border border-[#C2A284]/30 bg-[#C2A284]/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#C2A284]">
                      {rig.badge || rig.category}
                    </span>
                    <span className="font-sans text-xs text-[#A89F95] font-semibold">
                      Make: {rig.make}
                    </span>
                  </div>

                  <h3 className="font-bourbon text-2xl font-bold uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors mb-3">
                    {rig.name}
                  </h3>

                  <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed mb-6">
                    {rig.description}
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-[#2D2622] font-sans text-xs">
                  <div className="flex justify-between items-center text-[#A89F95]">
                    <span>Model Category:</span>
                    <span className="text-[#FFFFFF] font-semibold uppercase">{rig.category}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#A89F95]">
                    <span>Deployment:</span>
                    <span className="text-[#C2A284] font-semibold">{rig.ownershipModel || "Direct Deployment"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* The 6-Stage Execution Protocol (Anchor: #protocol) */}
      <section id="protocol" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E] scroll-mt-36">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-2xl mb-16">
            <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
              Quality Assurance &amp; Workflow
            </div>
            <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#FFFFFF]">
              The 6-Stage Integrated Construction Protocol
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
              From architectural engineering review to final turnkey handover, our structured construction workflow ensures uncompromising structural durability and schedule certainty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executionSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-[#2D2622] bg-[#161311] p-8 flex flex-col justify-between hover:border-[#C2A284]/40 transition-colors"
              >
                <div>
                  <div className="font-bourbon text-4xl font-extrabold text-[#C2A284] mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-3">
                    {step.title}
                  </h3>
                  <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#2D2622] font-mono text-[11px] text-[#A89F95] uppercase">
                  STAGE VERIFICATION &amp; INSPECTION PASS
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Distinct Architectural Section Divider */}
      <div className="relative py-12 bg-[#181512] border-b border-[#2D2622] overflow-hidden text-center">
        <div className="mx-auto max-w-[1536px] px-6 sm:px-10 lg:px-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#C2A284]/30 bg-[#C2A284]/10 px-5 py-2 font-sans text-xs uppercase tracking-[0.2em] text-[#C2A284] font-semibold">
            <span>Engineering Execution in the Field</span>
            <span className="text-[#A89F95]">✦</span>
            <span>Documented Structural Delivery</span>
          </div>
          <div className="mt-3 font-bourbon text-2xl sm:text-3xl uppercase font-bold text-[#FFFFFF] tracking-tight">
            See Our Capabilities Transformed Into Concrete Landmarks
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 2: OUR PROJECTS & VISUAL GALLERY                                  */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E] scroll-mt-36">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
          
          {/* Section 2 Header & Filter Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
                <span>SECTION 02 // BUILT STRUCTURAL RECORD &amp; GALLERY</span>
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#FFFFFF]">
                Our Projects &amp; Visual Gallery
              </h2>
              <p className="mt-3 font-sans text-sm sm:text-base text-[#D4CDC5] max-w-2xl leading-relaxed">
                Explore residential towers, commercial corporate floorplates, healthcare wings, and secondary foundation schemes executed across the Pune Metropolitan Region.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Project Category Filter"
              className="flex flex-wrap items-center gap-2"
            >
              {projectCategories.map((cat) => {
                const count =
                  cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length;
                const isActive = activeProjectCategory === cat;

                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveProjectCategory(cat)}
                    className={`rounded-full px-5 py-2 font-sans text-xs uppercase tracking-wider font-semibold transition-all ${
                      isActive
                        ? "bg-[#C2A284] text-[#12100E] shadow-sm"
                        : "border border-[#2D2622] bg-[#181512] text-[#D4CDC5] hover:text-[#FFFFFF] hover:border-[#C2A284]/50"
                    }`}
                  >
                    {cat} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="rounded-2xl border border-[#2D2622] bg-[#161311] overflow-hidden flex flex-col justify-between hover:border-[#C2A284]/60 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Visual Frame */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#12100E]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161311] via-transparent to-transparent opacity-80" />

                    {/* Status & Category Badges */}
                    <div className="absolute top-4 inset-x-4 flex items-center justify-between">
                      <span className="rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider border border-[#2D2622] bg-[#12100E]/80 backdrop-blur-md text-[#C2A284]">
                        {project.category}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 font-sans text-[11px] font-semibold uppercase tracking-wider border backdrop-blur-md ${
                          project.status === "Completed"
                            ? "border-emerald-500/30 bg-emerald-950/70 text-emerald-300"
                            : "border-amber-500/30 bg-amber-950/70 text-amber-300"
                        }`}
                      >
                        ● {project.status}
                      </span>
                    </div>

                    {/* Click to expand hover hint */}
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View full details of ${project.title}`}
                      className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]"
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#12100E]/90 px-4 py-2 font-sans text-xs uppercase tracking-wider font-semibold text-white shadow-xl">
                        <Maximize2 className="h-3.5 w-3.5 text-[#C2A284]" />
                        <span>Inspect Dossier</span>
                      </span>
                    </button>
                  </div>

                  {/* Metadata & Title */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 font-sans text-xs text-[#A89F95] mb-2">
                      <MapPin className="h-3.5 w-3.5 text-[#C2A284] shrink-0" />
                      <span>{project.location}</span>
                      <span>•</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-bourbon text-xl sm:text-2xl font-bold uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors mb-3">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed mb-6 line-clamp-3">
                      {project.summary}
                    </p>

                    {/* Key Metric Strip */}
                    <div className="py-3 px-4 rounded-xl border border-[#2D2622] bg-[#181512] font-sans text-xs flex justify-between items-center text-[#A89F95]">
                      <span>Scope Scale:</span>
                      <span className="text-[#FFFFFF] font-semibold uppercase">
                        {project.sqft || project.pilingSpecs || "Civil Superstructure"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Footer Action Button */}
                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="w-full flex items-center justify-between rounded-xl border border-[#2D2622] bg-[#181512] px-4 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#D4CDC5] hover:text-[#FFFFFF] hover:border-[#C2A284] hover:bg-[#1F1B17] transition-all"
                  >
                    <span>View Engineering Dossier</span>
                    <ArrowRight className="h-4 w-4 text-[#C2A284]" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Regional Operational Corridors (Anchor: #corridors) */}
      <section id="corridors" className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#161311] scroll-mt-36">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
          
          <div className="max-w-2xl mb-16">
            <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
              Regional Distribution
            </div>
            <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-[#FFFFFF]">
              Pune &amp; Maharashtra Operational Corridors
            </h2>
            <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
              Active site presence across prime municipal zones, industrial corridors, and expanding residential hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-[#2D2622] bg-[#12100E] p-6">
              <div className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-2">
                Corridor 01
              </div>
              <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-2">
                Pimple Saudagar &amp; PCMC
              </h3>
              <p className="font-sans text-xs text-[#A89F95] leading-relaxed">
                Headquarters location. High-density residential societies, podium casting, and turnkey RCC superstructure delivery.
              </p>
            </div>

            <div className="rounded-xl border border-[#2D2622] bg-[#12100E] p-6">
              <div className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-2">
                Corridor 02
              </div>
              <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-2">
                Baner, Balewadi &amp; Hinjawadi
              </h3>
              <p className="font-sans text-xs text-[#A89F95] leading-relaxed">
                IT corridor &amp; commercial floorplates. Large-span column frames and hard basalt rotary CFA foundation piling.
              </p>
            </div>

            <div className="rounded-xl border border-[#2D2622] bg-[#12100E] p-6">
              <div className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-2">
                Corridor 03
              </div>
              <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-2">
                Ambegaon &amp; South Pune
              </h3>
              <p className="font-sans text-xs text-[#A89F95] leading-relaxed">
                Institutional campuses, diagnostic hospitals, civic retaining earthworks, and heavy deep trench retention.
              </p>
            </div>

            <div className="rounded-xl border border-[#2D2622] bg-[#12100E] p-6">
              <div className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-2">
                Corridor 04
              </div>
              <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-2">
                Ravet, Tathawade &amp; Expressway
              </h3>
              <p className="font-sans text-xs text-[#A89F95] leading-relaxed">
                Rapid residential expansion, logistics parks, agile mobile tractor piling rigs, and fast turnaround schemes.
              </p>
            </div>
          </div>

          {/* Sector Typologies Strip */}
          <div className="mt-16 pt-12 border-t border-[#2D2622]">
            <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-6">
              Key Sector Engagements &amp; Typologies
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {partnerDevelopers.slice(0, 5).map((partner) => (
                <div
                  key={partner.id}
                  className="rounded-lg border border-[#2D2622] bg-[#12100E] p-4 text-center"
                >
                  <div className="font-sans text-xs uppercase font-semibold text-[#FFFFFF]">
                    {partner.name}
                  </div>
                  <div className="font-sans text-[11px] text-[#A89F95] mt-1">
                    {partner.relationship}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Project Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
        >
          {/* Backdrop */}
          <div
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Dialog Content */}
          <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#3E342B] bg-[#161311] p-6 sm:p-10 shadow-2xl text-[#FFFFFF]">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#2D2622] bg-[#12100E] text-[#D4CDC5] hover:text-[#FFFFFF] hover:border-[#C2A284] transition-colors focus:outline-none"
              aria-label="Close project modal"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Visual */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#2D2622] bg-[#12100E] mb-6">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 850px"
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider bg-[#12100E]/90 text-[#C2A284] border border-[#2D2622]">
                  {selectedProject.category}
                </span>
                <span className="rounded-full px-3 py-1 font-sans text-xs font-semibold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-500/30">
                  {selectedProject.status}
                </span>
              </div>
            </div>

            {/* Modal Content Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 font-sans text-xs text-[#A89F95] mb-2 uppercase tracking-wider">
                <MapPin className="h-3.5 w-3.5 text-[#C2A284]" />
                <span>{selectedProject.location}</span>
                <span>•</span>
                <span>{selectedProject.corridor}</span>
                <span>•</span>
                <span>{selectedProject.year}</span>
              </div>
              <h3
                id="modal-project-title"
                className="font-bourbon text-2xl sm:text-3xl lg:text-4xl uppercase font-bold text-[#FFFFFF]"
              >
                {selectedProject.title}
              </h3>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#D4CDC5] leading-relaxed mb-6">
              {selectedProject.summary}
            </p>

            {/* Scope & Key Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[#2D2622] mb-8">
              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-3">
                  Contracted Civil Scope:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.scope.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-sans text-xs text-[#E2DDD5]">
                      <Check className="h-3.5 w-3.5 text-[#C2A284] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-sans text-xs uppercase tracking-wider text-[#C2A284] font-semibold mb-3">
                  Technical Specifications:
                </h4>
                <ul className="space-y-2">
                  {selectedProject.keyFeatures.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-sans text-xs text-[#E2DDD5]">
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-6 border-t border-[#2D2622]">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-[#2D2622] bg-transparent px-5 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold text-[#D4CDC5] hover:text-[#FFFFFF] transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] px-6 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold text-[#12100E] hover:bg-transparent hover:text-[#FFFFFF] transition-all"
              >
                <span>Inquire for Similar Project</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      )}

      {/* Global Bottom Consultation CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#181512] via-[#1F1B17] to-[#181512]">
        <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
          <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold max-w-2xl text-[#FFFFFF]">
            Ready to Discuss Your Civil Scheme or Rotary Piling?
          </h2>
          <p className="mt-4 font-sans text-base text-[#D4CDC5] max-w-xl">
            Our engineering team is ready to inspect your site, evaluate strata logs, and present an optimized proposal within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#12100E] hover:bg-transparent hover:text-[#FFFFFF] transition-all"
            >
              <span>Initiate Site Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${companyData.phone}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#12100E] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] hover:border-[#C2A284] transition-all"
            >
              <Phone className="h-3.5 w-3.5 text-[#C2A284]" />
              <span>Call {companyData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
