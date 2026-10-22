import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Truck,
  Compass,
  Cpu,
  Clock,
  Users,
  ArrowRight,
  Phone,
  FileCheck2,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHeader } from "@/components/ui/PageHeader";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Why Choose Us | Civil Construction & Engineering Advantage | GJ Buildcon",
  description:
    "Discover why leading Pune developers and institutions choose GJ Buildcon for turnkey civil construction, multi-storey RCC execution, and integrated foundation engineering.",
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    title: "Why Choose GJ Buildcon | Civil Construction Advantage",
    description:
      "Integrated turnkey civil construction, comprehensive construction plant, and single-point accountability in Pune.",
    url: "https://gjbuildcon.com/why-choose-us",
  },
};

const pillars = [
  {
    num: "01",
    title: "Integrated Dual-Vertical Synergy",
    icon: <Cpu className="h-6 w-6 text-[#C2A284]" />,
    lead: "Piling and superstructure civil execution under one unified contract.",
    details:
      "On typical construction projects, developers hire one contractor for piling and another for the RCC frame. When plinth levels don't match or pile cut-offs are delayed, both parties blame each other. At GJ Buildcon, one dedicated engineering team handles both foundation piling and superstructure RCC, providing end-to-end structural accountability.",
  },
  {
    num: "02",
    title: "Operational Heavy Rotary Fleet",
    icon: <Truck className="h-6 w-6 text-[#C2A284]" />,
    lead: "Direct operational deployment of MAIT and SANY hydraulic rotary rigs.",
    details:
      "We do not rely on machine rental brokers or third-party crane availability. Our dedicated fleet of heavy hydraulic rotary rigs and Hydra support cranes is mobilized directly to your site, ensuring zero downtime and immediate start on schedule.",
  },
  {
    num: "03",
    title: "Maharashtra Deccan Basalt Strata Mastery",
    icon: <Compass className="h-6 w-6 text-[#C2A284]" />,
    lead: "Over 15 years penetrating Pune's notoriously hard volcanic basalt bedrock.",
    details:
      "Pune's subsoil requires high-torque rotary rigs and specialized tungsten-carbide rock roller bits to socket into unweathered basalt bedrock. Our geotechnical operators understand the exact drilling RPM, torque, and bentonite slurry density required to prevent borehole collapse.",
  },
  {
    num: "04",
    title: "Zero-Defect Quality Assurance & Testing",
    icon: <ShieldCheck className="h-6 w-6 text-[#C2A284]" />,
    lead: "Strict adherence to IS 456, IS 2911, and IS 1893 seismic standards.",
    details:
      "Every batch of concrete undergoes slump and cube compressive strength testing at 7, 14, and 28 days. Piling foundations are verified using non-destructive integrity testing (PIT) and crosshole sonic logging (CSL) with full technical documentation provided to clients.",
  },
  {
    num: "05",
    title: "Critical-Path Schedule Certainty",
    icon: <Clock className="h-6 w-6 text-[#C2A284]" />,
    lead: "Disciplined slab casting cycles and synchronized material logistics.",
    details:
      "We implement Critical Path Method (CPM) project management. Reinforcement steel, formwork shuttering, and ready-mix concrete are scheduled 72 hours in advance to maintain rapid, uninterrupted 14-day residential slab casting cycles.",
  },
  {
    num: "06",
    title: "Hands-On Leadership on Site",
    icon: <Users className="h-6 w-6 text-[#C2A284]" />,
    lead: "Founder Mr. Umesh Gatkal and senior site civil engineers present on site.",
    details:
      "We believe structural quality is won or lost in the field, not in distant boardroom meetings. Our leadership inspects rebar tying, cover block placement, and tremie concreting directly on site, ensuring total alignment with architectural blueprints.",
  },
];

const comparisons = [
  {
    parameter: "Contractual Structure",
    gjBuildcon: "Single-point turnkey contract covering deep piling and complete RCC superstructure",
    conventional: "Fragmented multi-vendor contracts with separate piling and civil contractors",
  },
  {
    parameter: "Subterranean Machinery",
    gjBuildcon: "Direct deployment of heavy hydraulic rotary rigs (MAIT & SANY) with zero rental delays",
    conventional: "Third-party rig rental brokers with high risk of machine breakdowns and mobilization hold-ups",
  },
  {
    parameter: "Deccan Basalt Penetration",
    gjBuildcon: "Specialized high-torque rock augurs with verified socketing into hard volcanic rock",
    conventional: "Underpowered tripod rigs causing slow progress and refusal in hard basalt layers",
  },
  {
    parameter: "Quality Accountability",
    gjBuildcon: "Zero finger-pointing; single warranty for foundation stability and RCC framework",
    conventional: "Endless disputes over pile cutoff levels, rebar lap splices, and raft settlement",
  },
  {
    parameter: "Site Leadership",
    gjBuildcon: "Daily on-site supervision by founder Mr. Umesh Gatkal and senior site civil engineers",
    conventional: "Delegated to junior subcontractors or temporary labour contractors",
  },
  {
    parameter: "Testing & Documentation",
    gjBuildcon: "Third-party cube tests, ultrasonic pile integrity tests, and documented QC dossiers",
    conventional: "Minimal testing conducted only when demanded by municipal inspectors",
  },
];

export default function WhyChooseUsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#12100E] text-[#FFFFFF] selection:bg-[#C2A284]/30 selection:text-[#FFFFFF]">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <PageHeader
          badge="The Engineering Advantage"
          title="Why Choose GJ Buildcon for Your Projects"
          subtitle="Explore the six operational pillars that set GJ Buildcon apart: turnkey civil structural execution, comprehensive construction plant, geotechnical strata mastery, and uncompromising on-site accountability."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Why Choose Us" },
          ]}
        />

        {/* Section 1: The 6 Pillars */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            
            <div className="max-w-2xl mb-16">
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                Foundational Strengths
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold">
                The 6 Pillars of Structural Certainty
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
                Engineered from the ground up to solve the most frequent pain points faced by developers, structural designers, and project management consultants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pillars.map((pillar) => (
                <div
                  key={pillar.num}
                  className="rounded-2xl border border-[#2D2622] bg-[#161311] p-8 flex flex-col justify-between hover:border-[#C2A284]/60 transition-all duration-300 group shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3 rounded-xl bg-[#181512] border border-[#2D2622]">
                        {pillar.icon}
                      </div>
                      <span className="font-bourbon text-3xl font-extrabold text-[#C2A284]/50 group-hover:text-[#C2A284] transition-colors">
                        {pillar.num}
                      </span>
                    </div>

                    <h3 className="font-bourbon text-2xl font-bold uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors mb-2">
                      {pillar.title}
                    </h3>

                    <p className="font-sans text-xs uppercase tracking-wider font-semibold text-[#C2A284] mb-4">
                      {pillar.lead}
                    </p>

                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed">
                      {pillar.details}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2D2622] flex items-center gap-2 font-mono text-[11px] text-[#A89F95] uppercase">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#C2A284]" />
                    <span>VERIFIED OPERATIONAL PRINCIPLE</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: Comparative Analysis Table */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#161311]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            
            <div className="max-w-3xl mb-16">
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                Head-to-Head Evaluation
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold">
                GJ Buildcon Integrated vs. Conventional Contractors
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
                See why leading developers switch from fragmented multiple sub-contractors to our unified dual-vertical execution.
              </p>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto rounded-2xl border border-[#2D2622] bg-[#12100E] shadow-xl">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-[#2D2622] bg-[#181512]">
                    <th className="p-6 font-sans text-xs uppercase tracking-wider font-semibold text-[#A89F95] w-1/4">
                      Execution Parameter
                    </th>
                    <th className="p-6 font-bourbon text-base sm:text-lg uppercase font-bold text-[#C2A284] w-3/8 bg-[#C2A284]/5 border-x border-[#2D2622]">
                      GJ Buildcon Approach
                    </th>
                    <th className="p-6 font-sans text-xs uppercase tracking-wider font-semibold text-[#A89F95] w-3/8">
                      Conventional Market Approach
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2622] font-sans text-xs sm:text-sm">
                  {comparisons.map((row, idx) => (
                    <tr key={idx} className="hover:bg-[#161311]/50 transition-colors">
                      <td className="p-6 font-semibold text-[#FFFFFF] uppercase tracking-wide">
                        {row.parameter}
                      </td>
                      <td className="p-6 text-[#E2DDD5] leading-relaxed bg-[#C2A284]/5 border-x border-[#2D2622]">
                        <div className="flex items-start gap-2.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{row.gjBuildcon}</span>
                        </div>
                      </td>
                      <td className="p-6 text-[#A89F95] leading-relaxed">
                        <div className="flex items-start gap-2.5">
                          <XCircle className="h-4 w-4 text-rose-400/80 shrink-0 mt-0.5" />
                          <span>{row.conventional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* Section 3: Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#181512] via-[#1F1B17] to-[#181512]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
            <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold max-w-2xl text-[#FFFFFF]">
              Experience the GJ Buildcon Engineering Advantage
            </h2>
            <p className="mt-4 font-sans text-base text-[#D4CDC5] max-w-xl">
              Schedule an executive technical consultation to review your structural design, pile layouts, and construction timeline with our leadership.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#12100E] hover:bg-transparent hover:text-[#FFFFFF] transition-all"
              >
                <span>Initiate Site Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services-projects#projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#12100E] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] hover:border-[#C2A284] transition-all"
              >
                <span>Explore Projects &amp; Gallery</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
