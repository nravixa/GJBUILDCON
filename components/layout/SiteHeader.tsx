"use client";

import React, { useState } from "react";
import Link from "next/link";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export const SiteHeader: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [puneTime, setPuneTime] = useState<string>("PUNE, IN");

  React.useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        });
        setPuneTime(`PUNE, IN • ${timeStr}`);
      } catch {
        setPuneTime("PUNE, IN • IST");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <header
        id="site-header"
        className="sticky top-0 z-40 w-full border-b border-[#2D2622] bg-[#12100E]/90 backdrop-blur-md transition-all duration-300 text-[#FFFFFF]"
      >
        <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-6 sm:px-10 lg:px-16">
          
          {/* Left: Navigation Menu */}
          <div className="flex-1 hidden lg:flex items-center">
            <DesktopNavigation />
          </div>

          {/* Center: Lenval-style Minimal Architectural Wordmark */}
          <div className="flex items-center justify-start lg:justify-center flex-1 lg:flex-initial">
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] p-1"
              aria-label="GJ Buildcon Home"
            >
              <div className="flex flex-col items-center">
                <span className="font-bourbon text-base sm:text-lg tracking-[0.25em] text-[#FFFFFF] group-hover:text-[#C5BCB3] transition-colors leading-none uppercase">
                  G J &nbsp; B U I L D C O N
                </span>
                <span className="font-monument text-[8px] tracking-[0.3em] uppercase text-[#8F857B] mt-1">
                  PUNE &amp; MAHARASHTRA
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Live Telemetry & Lenval-Style LET'S TALK */}
          <div className="flex-1 flex items-center justify-end gap-4 sm:gap-6">
            {/* Live Pune Time */}
            <div className="hidden xl:flex items-center gap-2 font-monument text-[9px] uppercase tracking-[0.18em] text-[#8F857B]">
              <span>{puneTime}</span>
            </div>

            {/* Dark Mode / Light Mode Wavy Toggle Switch */}
            <ThemeToggle />

            {/* Lenval Signature "● LET'S TALK" Button */}
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#181512] hover:bg-[#221D18] hover:border-[#C2A284]/50 px-3.5 sm:px-5 py-2 font-monument text-[9px] sm:text-[10px] uppercase tracking-[0.16em] text-[#FFFFFF] transition-all duration-300 shadow-sm"
              aria-label="Jump to project consultation"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 lg:hidden items-center justify-center rounded-full border border-[#2D2622] bg-[#181512] text-[#FFFFFF] hover:border-[#C2A284] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284]"
              aria-expanded={mobileMenuOpen}
              aria-label="Open mobile navigation menu"
            >
              <div className="flex flex-col gap-1.5 w-4">
                <span className="block h-[1.5px] w-full bg-[#FFFFFF]" />
                <span className="block h-[1.5px] w-full bg-[#FFFFFF]" />
              </div>
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
