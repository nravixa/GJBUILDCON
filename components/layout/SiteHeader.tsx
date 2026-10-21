"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

          {/* Center: Architectural Wordmark & Brand Logo */}
          <div className="flex items-center justify-start lg:justify-center flex-1 lg:flex-initial">
            <Link
              href="/"
              className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] p-1"
              aria-label="GJ Buildcon Home"
            >
              <div className="relative h-11 w-11 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] shadow-md group-hover:border-[#C2A284] transition-all">
                <Image
                  src="/images/hero/logo.jpeg"
                  alt="GJ Buildcon Official Logo"
                  fill
                  sizes="(max-width: 640px) 44px, 48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-bourbon text-base sm:text-lg tracking-[0.16em] text-[#FFFFFF] group-hover:text-[#C5BCB3] transition-colors leading-none uppercase font-bold">
                  G J &nbsp; B U I L D C O N
                </span>
                <span className="font-sans text-[11px] sm:text-xs tracking-[0.12em] uppercase font-semibold text-[#C5BCB3] mt-1">
                  PUNE &amp; MAHARASHTRA
                </span>
              </div>
            </Link>
          </div>

          {/* Right: Live Telemetry & Lenval-Style LET'S TALK */}
          <div className="flex-1 flex items-center justify-end gap-4 sm:gap-6">
            {/* Live Pune Time */}
            <div className="hidden xl:flex items-center gap-2 font-sans text-xs uppercase tracking-wider font-medium text-[#C5BCB3]">
              <span>{puneTime}</span>
            </div>

            {/* Dark Mode / Light Mode Wavy Toggle Switch */}
            <ThemeToggle />

            {/* Lenval Signature "● LET'S TALK" Button */}
            <Link
              href="/#enquiry"
              className="inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#181512] hover:bg-[#221D18] hover:border-[#C2A284]/50 px-4 sm:px-5 py-2 font-sans text-xs sm:text-[13px] uppercase tracking-wider font-semibold text-[#FFFFFF] transition-all duration-300 shadow-sm"
              aria-label="Jump to project consultation"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </Link>

            {/* Mobile Menu Toggle Button */}
            <button
              id="mobile-menu-toggle"
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
