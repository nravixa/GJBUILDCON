import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Home, Layers } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

export const metadata: Metadata = {
  title: "404 — Coordinate Not Found",
  description: "The requested structural coordinate does not exist in the GJ Buildcon engineering index.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5F0] text-[#191B1F] selection:bg-[#9A4A32]/20 selection:text-[#191B1F]">
      {/* Skip to Main Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-[#191B1F] focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-bold focus:text-[#F7F5F0] focus:outline-none focus:ring-2 focus:ring-[#9A4A32] shadow-xl"
      >
        Skip to main content
      </a>

      {/* Global Architectural Header */}
      <SiteHeader />

      {/* Main Structural Void Chapter */}
      <main id="main-content" className="flex-1 flex flex-col justify-center relative overflow-hidden py-20 sm:py-28 lg:py-36">
        
        {/* Subtle Architectural Hairline Grid Watermark */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="mx-auto w-full max-w-[1536px] h-full px-4 sm:px-8 lg:px-12 grid grid-cols-4 lg:grid-cols-12 divide-x divide-[#DCD7CD]/60">
            <div className="h-full" />
            <div className="h-full hidden sm:block" />
            <div className="h-full hidden sm:block" />
            <div className="h-full" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
            <div className="h-full hidden lg:block" />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[1536px] px-4 sm:px-8 lg:px-12">
          
          {/* Architectural Framing Box */}
          <div className="border border-[#DCD7CD] bg-[#FFFFFF] p-8 sm:p-14 lg:p-20 relative shadow-sm">
            
            {/* Massive 404 Watermark Typography */}
            <div className="absolute right-6 top-4 sm:right-12 sm:top-8 font-display text-[7rem] sm:text-[11rem] lg:text-[15rem] leading-none text-[#191B1F]/[0.06] select-none pointer-events-none font-normal">
              404
            </div>

            {/* Header Telemetry */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#DCD7CD] pb-6 mb-8 sm:mb-12">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#9A4A32]">
                <Compass className="h-3.5 w-3.5" />
                <span>ERROR // 404 STRUCTURAL VOID</span>
              </div>
              <div className="font-mono text-xs text-[#5A5E66] uppercase tracking-wide">
                UNCHARTED BLUEPRINT COORDINATE
              </div>
            </div>

            {/* Main Error Monograph Statement */}
            <div className="max-w-3xl relative z-10">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl uppercase leading-[0.96] text-[#191B1F] mb-6">
                This Coordinate Lies Beyond the Grid
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#5A5E66] leading-relaxed mb-10 max-w-2xl">
                The requested structural path does not exist within the current GJ Buildcon engineering registry. The specification may have been moved, re-indexed, or never established in this corridor.
              </p>

              {/* Recovery Action Links */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-[#DCD7CD]">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 border border-[#191B1F] bg-[#191B1F] text-[#F7F5F0] px-6 py-3.5 font-mono text-xs uppercase tracking-wider hover:bg-[#9A4A32] hover:border-[#9A4A32] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A4A32]"
                >
                  <Home className="h-4 w-4" />
                  <span>Return to Operational Overview</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <Link
                  href="/capabilities"
                  className="inline-flex items-center justify-center gap-2 border border-[#DCD7CD] bg-[#ECE8E0] text-[#191B1F] px-6 py-3.5 font-mono text-xs uppercase tracking-wider hover:border-[#191B1F] hover:bg-[#DCD7CD] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9A4A32]"
                >
                  <Layers className="h-4 w-4 text-[#9A4A32]" />
                  <span>Explore Engineering Capabilities</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Bottom Datum Telemetry */}
            <div className="mt-12 sm:mt-16 pt-6 border-t border-[#DCD7CD] flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-xs text-[#8A8F99]">
              <div>
                REGISTRY: G AND J BUILDCON · PUNE METROPOLITAN REGION
              </div>
              <div className="flex items-center gap-2 text-[#5A5E66]">
                <span className="h-2 w-2 rounded-full bg-[#2D6A4F]" />
                <span>CORE SYSTEM OPERATIONAL · CIVIL & PILING SERVICES</span>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Global Architectural Footer */}
      <SiteFooter />
    </div>
  );
}
