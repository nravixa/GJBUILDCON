"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { capabilitiesData, fleetData } from "@/data/capabilities";
import { Building2, CheckCircle2, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export const CapabilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"all" | "civil" | "piling">("all");

  const civilCapabilities = capabilitiesData.filter((c) => c.vertical === "civil");
  const pilingCapabilities = capabilitiesData.filter((c) => c.vertical === "piling");

  // Map local image assets with honest AI concept labelling
  const getImageForId = (id: string) => {
    switch (id) {
      case "civil-residential":
        return "/images/capabilities/structural-foundation-concept.webp";
      case "civil-commercial":
        return "/images/capabilities/infrastructure-scale-concept.webp";
      case "civil-institutional":
        return "/images/capabilities/concrete-steel-material-study.webp";
      case "piling-augur":
        return "/images/capabilities/drilling-equipment-editorial.webp";
      case "piling-tripod":
        return "/images/capabilities/hydraulic-rig-detail.webp";
      case "piling-tractor":
        return "/images/hero/hero-foundation-engineering.webp";
      default:
        return "/images/capabilities/foundation-construction-process.webp";
    }
  };

  return (
    <Section spacing="default" surface="base" className="border-b border-white/10" id="capabilities">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <EyebrowLabel variant="amber" icon={<Building2 className="h-3 w-3" />}>
              Engineering Disciplines & Core Competencies
            </EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
              Dual-Vertical Operational Execution.
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              GJ Buildcon unites turnkey civil structural execution with specialized deep foundation piling engineering under one disciplined operational structure.
            </p>
          </div>

          {/* Interactive Discipline Filter Tabs */}
          <div
            role="tablist"
            aria-label="Capabilities Vertical Filter"
            className="flex items-center gap-1 rounded-full border border-white/10 bg-[#141820] p-1.5"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "all"}
              onClick={() => setActiveTab("all")}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                activeTab === "all"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-[#94A3B8] hover:text-white"
              )}
            >
              All Disciplines
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "civil"}
              onClick={() => setActiveTab("civil")}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                activeTab === "civil"
                  ? "bg-teal-500 text-slate-950 shadow-sm"
                  : "text-[#94A3B8] hover:text-white"
              )}
            >
              Civil Construction
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "piling"}
              onClick={() => setActiveTab("piling")}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs font-semibold transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500",
                activeTab === "piling"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "text-[#94A3B8] hover:text-white"
              )}
            >
              Deep Foundation Piling
            </button>
          </div>
        </div>

        {/* PILLAR 1: CIVIL CONSTRUCTION */}
        {(activeTab === "all" || activeTab === "civil") && (
          <div className="mb-16">
            <div className="flex items-center gap-3 border-b border-teal-500/30 pb-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-bold">
                VERTICAL 01 // CIVIL CONSTRUCTION & INFRASTRUCTURE
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              <span className="font-sans text-xs text-[#94A3B8] hidden sm:inline">
                Turnkey RCC Frameworks • Multi-Story Societies • Institutional Campuses
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {civilCapabilities.map((cap, idx) => (
                <div
                  key={cap.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141820] p-6 transition-all duration-300 hover:border-teal-500/40 hover:bg-[#191F2B]"
                >
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                      <Image
                        src={getImageForId(cap.id)}
                        alt={`${cap.title} illustrative reference`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-2.5 right-2.5 rounded-full bg-black/80 px-2.5 py-1 font-monument text-[8px] uppercase tracking-wider text-slate-300 backdrop-blur-sm border border-white/10">
                        SPECIFICATION // STRUCTURAL EXECUTION
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest">
                        DISCIPLINE 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#F2F0E9] group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#94A3B8]">
                      {cap.subtitle}
                    </p>

                    <p className="mt-4 font-sans text-sm text-[#CBD5E1] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  {cap.specs && (
                    <div className="mt-6 border-t border-white/5 pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#64748B] block mb-2">
                        Engineering Protocols
                      </span>
                      <ul className="space-y-1.5">
                        {cap.specs.map((spec, specIdx) => (
                          <li key={specIdx} className="flex items-center gap-2 font-sans text-xs text-[#CBD5E1]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-teal-400 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PILLAR 2: DEEP FOUNDATION PILING & ROTARY FLEET */}
        {(activeTab === "all" || activeTab === "piling") && (
          <div className="mt-12">
            <div className="flex items-center gap-3 border-b border-amber-500/30 pb-4 mb-8">
              <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-bold">
                VERTICAL 02 // GEOTECHNICAL & PILING SOLUTIONS
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              <span className="font-sans text-xs text-[#94A3B8] hidden sm:inline">
                Augur Rotary • Tripod Cast-In-Situ • Tractor Units • Hard Basalt Penetration
              </span>
            </div>

            {/* 3-Column Piling Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {pilingCapabilities.map((cap, idx) => (
                <div
                  key={cap.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-[#141820] p-6 transition-all duration-300 hover:border-amber-500/40 hover:bg-[#191F2B]"
                >
                  <div>
                    {/* Visual Thumbnail */}
                    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950">
                      <Image
                        src={getImageForId(cap.id)}
                        alt={`${cap.title} illustrative equipment asset`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                      />
                      <div className="absolute top-2.5 right-2.5 rounded-md bg-black/70 px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-300 backdrop-blur-sm border border-white/10">
                        Rig Asset
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest">
                        PILING METHOD 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#F2F0E9] group-hover:text-white transition-colors">
                      {cap.title}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#94A3B8]">
                      {cap.subtitle}
                    </p>

                    <p className="mt-4 font-sans text-sm text-[#CBD5E1] leading-relaxed">
                      {cap.description}
                    </p>
                  </div>

                  {/* Technical Specs List */}
                  {cap.specs && (
                    <div className="mt-6 border-t border-white/5 pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#64748B] block mb-2">
                        Geotechnical Specifications
                      </span>
                      <ul className="space-y-1.5">
                        {cap.specs.map((spec, specIdx) => (
                          <li key={specIdx} className="flex items-center gap-2 font-sans text-xs text-[#CBD5E1]">
                            <CheckCircle2 className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Heavy Drilling Equipment & Fleet Capabilities Deck */}
            <div id="fleet" className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#141820] to-[#0B0D11] p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-1">
                    <Wrench className="h-3.5 w-3.5" />
                    <span>Drilling Equipment &amp; Fleet Capabilities</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                    Heavy Machinery Capabilities. Specialized Ground Engineering.
                  </h3>
                </div>
                <span className="rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 font-mono text-xs text-amber-400 self-start sm:self-auto">
                  Rotary Piling Rigs &amp; Support Units
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {fleetData.map((rig) => (
                  <div key={rig.id} className="rounded-xl border border-white/5 bg-[#0B0D11]/70 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-white">
                        {rig.make}
                      </span>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[11px] text-amber-400 font-bold">
                        {rig.badge || (rig.quantity ? `${rig.quantity} ${rig.quantity === 1 ? "Unit" : "Units"}` : "Support Fleet")}
                      </span>
                    </div>
                    <h4 className="font-display text-base font-bold text-[#F2F0E9] mb-1">
                      {rig.name}
                    </h4>
                    <span className="font-mono text-[11px] text-[#94A3B8] block mb-3">
                      {rig.category}
                    </span>
                    <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
                      {rig.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
};
