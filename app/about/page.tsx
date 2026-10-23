import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ShieldCheck,
  CheckCircle2,
  Award,
  Users,
  Compass,
  ArrowRight,
  HardHat,
  FileCheck,
  Building,
} from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { PageHeader } from "@/components/ui/PageHeader";
import { companyData } from "@/data/company";
import { auditedMilestones } from "@/data/stats";

export const metadata: Metadata = {
  title: "About Us | Leadership, Heritage & Construction Excellence",
  description:
    "Learn about GJ Buildcon (G and J Buildcon), led by Mr. Umesh Gatkal. Over a decade of proven civil construction, residential towers, commercial complexes, and structural permanence in Pune.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About GJ Buildcon | Civil Construction & Infrastructure Engineering",
    description:
      "Over a decade delivering residential, commercial, institutional civil construction with integrated foundation capabilities in Pune.",
    url: "https://gjbuildcon.com/about",
  },
};

const historicalTimeline = [
  {
    year: "2008",
    phase: "PHASE 01 // FOUNDATION",
    title: "Multinational Engineering Foundation",
    description:
      "Mr. Umesh Gatkal commenced his civil engineering career managing high-stakes construction projects with top multinational infrastructure entities, mastering modern formwork, RCC batching, and logistics.",
    tag: "Technical Groundwork",
  },
  {
    year: "2015",
    phase: "PHASE 02 // CIVIL EXPANSION",
    title: "Civil Project Leadership at Aditya Construction",
    description:
      "Worked with Aditya Construction in Pune, delivering turnkey civil contracting for residential towers, commercial complexes, and healthcare campuses with uncompromising schedule control.",
    tag: "Turnkey Civil Growth",
  },
  {
    year: "2021",
    phase: "PHASE 03 // GEOTECHNICAL FLEET",
    title: "Mechanized Heavy Rotary Fleet",
    description:
      "Recognizing regional delays in foundation subcontracting, invested in heavy hydraulic rotary rigs (MAIT & SANY) capable of rock socketing into challenging Deccan volcanic basalt.",
    tag: "Rotary Piling Fleet",
  },
  {
    year: "2025",
    phase: "PHASE 04 // CONSOLIDATION",
    title: "Consolidation into GJ Buildcon",
    description:
      "Consolidated turnkey civil contracting and specialized geotechnical piling under G and J Buildcon, creating a unified dual-vertical engineering firm delivering end-to-end structural certainty across Maharashtra.",
    tag: "Unified Civil Entity",
  },
];

const coreValues = [
  {
    title: "Structural Permanence",
    icon: <ShieldCheck className="h-6 w-6 text-[#C2A284]" />,
    description:
      "We build structures engineered to endure generations. Concrete mix designs, cover blocks, and rebar lap lengths are audited to stringent IS 456 standards.",
  },
  {
    title: "Structural Rigor & Strata Mastery",
    icon: <Compass className="h-6 w-6 text-[#C2A284]" />,
    description:
      "Civil construction and superstructure execution grounded in deep technical understanding of Pune's Deccan basalt geotechnical conditions and seismic engineering.",
  },
  {
    title: "Zero Finger-Pointing",
    icon: <CheckCircle2 className="h-6 w-6 text-[#C2A284]" />,
    description:
      "By uniting deep foundation piling and superstructure RCC execution under one entity, clients avoid the friction of two conflicting contractors on site.",
  },
  {
    title: "Direct Leadership on Site",
    icon: <Users className="h-6 w-6 text-[#C2A284]" />,
    description:
      "Founder Mr. Umesh Gatkal and senior site civil engineers conduct daily on-site oversight, guaranteeing that specifications on paper are honored in the pour.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#12100E] text-[#FFFFFF] selection:bg-[#C2A284]/30 selection:text-[#FFFFFF]">
      <SiteHeader />

      <main className="flex-1">
        {/* Page Header */}
        <PageHeader
          badge="Heritage & Leadership Narrative"
          title="The Engineering Legacy of GJ Buildcon"
          subtitle="From multinational construction roots in 2008 to comprehensive civil infrastructure delivery today, our journey is defined by structural integrity, technical rigor, and uncompromised execution across Pune."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]}
        />

        {/* Section 1: Executive Overview & Leadership */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Portrait & Credentials */}
              <div className="lg:col-span-5">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-[#3E342B] bg-[#181512] shadow-2xl">
                  <Image
                    src="/images/capabilities/structural-foundation-concept.webp"
                    alt="GJ Buildcon Civil Engineering Leadership & Structural Site Execution"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent" />
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-[#C2A284]/30 bg-[#12100E]/90 p-5 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95]">
                          Leadership Experience
                        </div>
                        <div className="font-bourbon text-2xl text-[#FFFFFF] font-bold">
                          Mr. Umesh Gatkal
                        </div>
                        <div className="font-sans text-xs text-[#C2A284] uppercase tracking-wider font-semibold mt-0.5">
                          Founder &amp; Principal Director
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="font-bourbon text-3xl font-extrabold text-[#C2A284]">
                          10+
                        </span>
                        <span className="block font-sans text-[10px] text-[#A89F95] uppercase">
                          Years in Field
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Founder Narrative */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
                  <span>Founder Narrative &amp; Corporate Vision</span>
                </div>
                
                <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight font-bold mb-6">
                  &ldquo;Every Landmark Begins with Uncompromising Structural Engineering.&rdquo;
                </h2>

                <div className="space-y-4 font-sans text-base text-[#D4CDC5] leading-relaxed">
                  <p>
                    GJ Buildcon (G and J Buildcon) was established under the leadership of Mr. Umesh Gatkal to bridge a critical gap in Pune&apos;s construction ecosystem: the divide between deep foundation piling contractors and superstructure civil builders.
                  </p>
                  <p>
                    With direct field experience spanning high-density residential societies in Pimple Saudagar, commercial tech hubs in Baner, and institutional healthcare wings in Ambegaon, Mr. Gatkal built an organization anchored in engineering discipline rather than commercial shortcuts.
                  </p>
                  <p>
                    Today, GJ Buildcon operates with dedicated in-house civil engineering crews, quality control supervisors, and an operational fleet of hydraulic rotary piling rigs. We take complete ownership from bedrock socketing to the final terrace waterproofing parapet.
                  </p>
                </div>

                <div className="mt-8 pt-8 border-t border-[#2D2622] grid grid-cols-2 sm:grid-cols-3 gap-6">
                  <div>
                    <div className="font-bourbon text-2xl sm:text-3xl font-bold text-[#C2A284]">
                      100%
                    </div>
                    <div className="font-sans text-xs text-[#A89F95] uppercase tracking-wider mt-1">
                      Direct Site Supervision
                    </div>
                  </div>
                  <div>
                    <div className="font-bourbon text-2xl sm:text-3xl font-bold text-[#FFFFFF]">
                      IS 456
                    </div>
                    <div className="font-sans text-xs text-[#A89F95] uppercase tracking-wider mt-1">
                      Strict RCC Standard
                    </div>
                  </div>
                  <div>
                    <div className="font-bourbon text-2xl sm:text-3xl font-bold text-[#C2A284]">
                      Pune, MH
                    </div>
                    <div className="font-sans text-xs text-[#A89F95] uppercase tracking-wider mt-1">
                      Headquarters &amp; Yard
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Historical Timeline */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#161311]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            
            <div className="max-w-2xl mb-16">
              <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                Milestones &amp; Evolution
              </div>
              <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold">
                From Technical Foundation to Dual-Vertical Mastery
              </h2>
              <p className="mt-4 font-sans text-sm sm:text-base text-[#A89F95] leading-relaxed">
                A chronological record of our organic growth, fleet investments, and organizational milestones across Maharashtra.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {historicalTimeline.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2D2622] bg-[#12100E] p-8 flex flex-col justify-between hover:border-[#C2A284]/50 transition-colors group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bourbon text-3xl font-extrabold text-[#C2A284]">
                        {item.year}
                      </span>
                      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded bg-[#181512] text-[#A89F95] border border-[#2D2622]">
                        {item.tag}
                      </span>
                    </div>

                    <div className="font-sans text-xs uppercase tracking-wider text-[#A89F95] mb-2 font-medium">
                      {item.phase}
                    </div>

                    <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors mb-4">
                      {item.title}
                    </h3>

                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#2D2622] flex items-center gap-2 font-sans text-xs text-[#A89F95]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
                    <span>Documented Corporate Milestone</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: Engineering Values & Standards */}
        <section className="py-20 sm:py-28 border-b border-[#2D2622] bg-[#12100E]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
              <div className="max-w-2xl">
                <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3">
                  Core Engineering Values
                </div>
                <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold">
                  Principles That Guide Every Footing &amp; Slab
                </h2>
              </div>
              <div className="font-sans text-xs text-[#A89F95] uppercase tracking-wider">
                Audited to IS 456, IS 2911 &amp; IS 1893
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-[#2D2622] bg-[#161311] p-8 flex flex-col justify-between hover:border-[#C2A284]/60 transition-colors"
                >
                  <div>
                    <div className="mb-6 p-3 rounded-lg bg-[#181512] border border-[#2D2622] inline-block">
                      {val.icon}
                    </div>
                    <h3 className="font-bourbon text-xl font-bold uppercase text-[#FFFFFF] mb-3">
                      {val.title}
                    </h3>
                    <p className="font-sans text-sm text-[#D4CDC5] leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#2D2622] font-mono text-xs text-[#C2A284]">
                    PRINCIPLE // 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Call to Action */}
        <section className="py-16 sm:py-20 bg-gradient-to-r from-[#181512] via-[#1F1B17] to-[#181512] border-b border-[#2D2622]">
          <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16 text-center flex flex-col items-center">
            <h2 className="font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase font-bold max-w-2xl text-[#FFFFFF]">
              Ready to Discuss Your Next Structural Landmark?
            </h2>
            <p className="mt-4 font-sans text-base text-[#D4CDC5] max-w-xl">
              Connect directly with our engineering leadership to review blueprints, borehole logs, and structural delivery schedules.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services-projects"
                className="inline-flex items-center gap-2 rounded-full border border-[#FFFFFF] bg-[#FFFFFF] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#12100E] hover:bg-transparent hover:text-[#FFFFFF] transition-all"
              >
                <span>View Our Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#12100E] px-7 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] hover:border-[#C2A284] transition-all"
              >
                <span>Contact Engineering Team</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
