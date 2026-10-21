import React from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { HeroSection } from "@/components/sections/HeroSection";
import { ThesisSection } from "@/components/sections/ThesisSection";
import { ScaleLedgerSection } from "@/components/sections/ScaleLedgerSection";
import { DisciplinesDiptychSection } from "@/components/sections/DisciplinesDiptychSection";
import { MachineryBasaltSection } from "@/components/sections/MachineryBasaltSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { StorySection } from "@/components/sections/StorySection";
import { EnquiryTerminal } from "@/components/sections/EnquiryTerminal";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#12100E] text-[#FFFFFF] selection:bg-[#C2A284]/30 selection:text-[#FFFFFF]">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#181512] focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-bold focus:text-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-[#C2A284] shadow-xl"
      >
        Skip to main content
      </a>

      {/* Global Accessible Architectural Header */}
      <SiteHeader />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        {/* Chapter 00: The Tectonic Split Hero */}
        <HeroSection />

        {/* Chapter 01: The Engineering Thesis Transition */}
        <ThesisSection />

        {/* Chapter 02: Operational Scale Ledger */}
        <ScaleLedgerSection />

        {/* Chapter 03: Engineering Disciplines Diptych */}
        <DisciplinesDiptychSection />

        {/* Chapter 04: Subterranean Basalt Machinery */}
        <MachineryBasaltSection />

        {/* Section E: Pune Regional Footprint, Sector Typologies & Developer Partners */}
        <ProjectsSection />

        {/* Section F: Heritage Timeline & Leadership Narrative */}
        <StorySection />

        {/* Section G: Direct Consultation Terminal & Verified Contact */}
        <EnquiryTerminal />
      </main>

      {/* Section H: Global Site Footer */}
      <SiteFooter />
    </div>
  );
}
