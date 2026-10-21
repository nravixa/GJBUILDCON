import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { EyebrowLabel } from "@/components/ui/EyebrowLabel";
import { StatDisplay } from "@/components/ui/StatDisplay";
import { auditedMilestones } from "@/data/stats";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const MilestonesSection: React.FC = () => {
  return (
    <Section spacing="default" surface="slate" className="border-b border-white/10" id="credentials">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <EyebrowLabel variant="teal" icon={<ShieldCheck className="h-3 w-3" />}>
              Audited Operational Scale & Credentials
            </EyebrowLabel>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[#F2F0E9]">
              Verified Scale. Tested Permanence.
            </h2>
            <p className="mt-3 font-sans text-sm sm:text-base text-[#94A3B8] leading-relaxed">
              Every metric below represents verifiable operational capacity and historical project execution delivered across the Pune Metropolitan Region.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 font-mono text-xs text-[#CBD5E1]">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Independently Documented Track Record</span>
          </div>
        </div>

        {/* 4-Column Stat Display Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 border-b border-white/10 pb-12">
          {auditedMilestones.map((metric, idx) => (
            <StatDisplay
              key={metric.id}
              index={`METRIC // 0${idx + 1}`}
              value={metric.value}
              suffix={metric.suffix}
              label={metric.label}
              sublabel={metric.sublabel}
            />
          ))}
        </div>

        {/* Factual Core Strengths Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/5 bg-[#0B0D11]/60 p-5">
            <div className="flex items-center gap-2.5 text-amber-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-4 w-4 text-amber-400 flex-shrink-0" />
              <span>Heavy Rotary Fleet Capabilities</span>
            </div>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              Deployment of specialized hydraulic rotary rigs eliminates operational friction, supporting uninterrupted deep foundation schedules.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-[#0B0D11]/60 p-5">
            <div className="flex items-center gap-2.5 text-teal-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-4 w-4 text-teal-400 flex-shrink-0" />
              <span>Multi-Sector Civil Delivery</span>
            </div>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              Proven execution across diverse structural typologies spanning high-density residential towers, commercial complexes, healthcare facilities, educational campuses, and temples.
            </p>
          </div>

          <div className="rounded-xl border border-white/5 bg-[#0B0D11]/60 p-5">
            <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 flex-shrink-0" />
              <span>Mobilized Workforce Capacity</span>
            </div>
            <p className="font-sans text-xs text-[#94A3B8] leading-relaxed">
              A dedicated workforce of skilled construction tradesmen and specialized site management personnel capable of rapid multi-site mobilization.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};
