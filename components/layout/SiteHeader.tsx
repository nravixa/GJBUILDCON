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
        <div className="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 lg:grid lg:grid-cols-[1fr_auto_1fr]">
          
          {/* 1. LEFT GROUP: Navigation links (Desktop) */}
          <div className="hidden lg:flex items-center justify-start min-w-0 pr-2 xl:pr-4">
            <DesktopNavigation />
          </div>

          {/* 2. CENTER GROUP: Company logo & Brand name (Desktop: Centered; Mobile: Left aligned) */}
          <div className="flex items-center justify-start lg:justify-center shrink-0">
            <Link
              href="/"
              className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] p-1 rounded-sm"
              aria-label="GJ Buildcon Home"
            >
              <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] shadow-md group-hover:border-[#C2A284] transition-all">
                <Image
                  src="/images/hero/logo.jpeg"
                  alt="GJ Buildcon Official Logo"
                  fill
                  sizes="44px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-bourbon text-base sm:text-lg tracking-[0.14em] text-[#FFFFFF] group-hover:text-[#C5BCB3] transition-colors leading-none uppercase font-bold whitespace-nowrap">
                  GJ BUILDCON
                </span>
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.12em] uppercase font-semibold text-[#C5BCB3] mt-1 whitespace-nowrap">
                  PUNE &amp; MAHARASHTRA
                </span>
              </div>
            </Link>
          </div>

          {/* 3. RIGHT GROUP: Pune time, Theme toggle, LET'S TALK button & Mobile toggle */}
          <div className="flex items-center justify-end min-w-0 gap-2.5 sm:gap-3.5 xl:gap-5 pl-2">
            {/* Live Pune Location & Time Pill (Desktop xl+) */}
            <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-[#A89F95] whitespace-nowrap bg-[#181512] border border-[#2D2622] rounded-full px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>{puneTime}</span>
            </div>

            {/* Dark/Light Mode Functional Theme Toggle */}
            <ThemeToggle />

            {/* Refined Pill-Shaped "LET'S TALK" Button (Desktop & Tablet) */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#2D2622] bg-[#181512] hover:bg-[#221D18] hover:border-[#C2A284]/60 px-4 py-2 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] transition-all duration-300 shadow-sm shrink-0 whitespace-nowrap"
              aria-label="Jump to project consultation"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-10 w-10 lg:hidden items-center justify-center rounded-full border border-[#2D2622] bg-[#181512] text-[#FFFFFF] hover:border-[#C2A284] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] shrink-0"
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
