"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageSquare, Mail, MapPin, ArrowUpRight, Check } from "lucide-react";
import { companyData } from "@/data/company";
import { partnerDevelopers } from "@/data/capabilities";

export const SiteFooter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setIsLoading(true);
    // Simulate brief luxury dispatch transition
    setTimeout(() => {
      setIsLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 400);
  };

  return (
    <footer
      id="site-footer"
      className="relative z-10 overflow-hidden bg-[#0D0F12] text-[#A89179] pt-20 sm:pt-28 pb-10 border-t border-[#262930]/80 selection:bg-[#9A4A32]/30 selection:text-[#F7F5F0]"
    >
      {/* MDE-Inspired Ambient Backdrop with Atmospheric Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#121417]/95 via-[#0D0F12]/90 to-[#0A0B0E] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(191,161,130,0.06),transparent_70%)] z-10" />
        <div className="relative w-full h-full opacity-15 mix-blend-luminosity">
          <Image
            src="/images/hero/hero-site.png"
            alt="GJ Buildcon Strata Foundation"
            fill
            sizes="100vw"
            className="object-cover object-bottom"
          />
        </div>
      </div>

      <div className="relative z-20 mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        
        {/* ========================================================= */}
        {/* UPPER ARCHITECTURAL MASTER GRID (3 Columns inspired by MDE) */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 lg:pb-24 border-b border-[#262930]/60">
          
          {/* COLUMN 1: Brand Navigation & Disciplines (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <Link
              href="/"
              className="group inline-flex items-center gap-3.5 mb-6 pb-4 border-b border-[#262930]/50 max-w-[320px] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284]"
              aria-label="GJ Buildcon Home"
            >
              <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] shadow-md group-hover:border-[#C2A284] transition-colors">
                <Image
                  src="/images/hero/logo.jpeg"
                  alt="GJ Buildcon Official Logo"
                  fill
                  sizes="(max-width: 640px) 48px, 56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bourbon text-base uppercase tracking-[0.18em] text-[#FFFFFF] group-hover:text-[#DDB983] transition-colors font-bold">
                  GJ BUILDCON
                </span>
                <span className="font-sans text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-[#C2A284] mt-1.5">
                  Crafting Landmarks, Creating Legacies
                </span>
              </div>
            </Link>
            <ul className="space-y-3.5 font-sans text-xs tracking-wider uppercase text-[#A89F95]">
              <li>
                <Link
                  href="/capabilities#civil-residential"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Residential Structural Works
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities#civil-commercial"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Commercial &amp; Corporate Floorplates
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities#civil-institutional"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Institutional &amp; Healthcare Campuses
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities#piling-augur"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Rotary Augur Piling (CFA / Large Dia)
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities#piling-tripod"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Tripod Bored Cast-In-Situ Piling
                </Link>
              </li>
              <li>
                <Link
                  href="/capabilities#piling-tractor"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Urban Infill &amp; Tractor Piling Units
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: Center Feature (Newsletter Dispatch + Socials) (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center order-first lg:order-none pb-4 lg:pb-0">
            <div className="w-full max-w-md">
              <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-gold-gradient mb-3">
                Subscribe to our Expertise
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#A89F95] max-w-xs mx-auto mb-6 leading-relaxed">
                Receive confidential technical monographs, strata data, and heavy foundation engineering updates.
              </p>

              {/* MDE-Inspired Minimalist Underline Form with Sliding Arrow Button */}
              {subscribed ? (
                <div className="py-4 px-6 border border-[#CBA985]/30 bg-[#16191F]/60 flex items-center justify-center gap-2 text-[#DFC4A4] font-sans text-xs font-semibold uppercase tracking-wider animate-fadeIn">
                  <Check className="h-4 w-4 text-[#DDB983]" />
                  <span>Technical Dispatch Registered</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="relative w-full mb-8"
                  aria-label="Subscribe to Technical Monograph"
                >
                  <div className="relative flex items-center border-b border-[#CBA985]/40 focus-within:border-[#DFC4A4] transition-colors">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ENTER CORPORATE E-MAIL"
                      className="w-full bg-transparent py-3 pr-20 font-sans text-xs uppercase tracking-wider text-[#FFFFFF] placeholder-[#A89F95] focus:outline-none focus:ring-0"
                      aria-label="Enter corporate email"
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="mde-button-arrow absolute right-0 flex items-center gap-2 py-3 pl-2 font-sans text-xs font-semibold uppercase tracking-widest text-[#DDB983] hover:text-[#FFFFFF] transition-colors cursor-pointer disabled:opacity-50"
                      aria-label="Send technical subscription"
                    >
                      <span className="text-gold-gradient font-semibold">
                        {isLoading ? "..." : "Send"}
                      </span>
                      {/* MDE-Style Sliding Arrow Icon */}
                      <span className="relative flex h-3 w-3 overflow-hidden text-[#DFC4A4]">
                        <svg
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mde-arrow-in absolute inset-0 h-full w-full stroke-current"
                          aria-hidden="true"
                        >
                          <path
                            d="M3.62938 2.5343L9.653 2.81771L9.96112 8.87081"
                            strokeWidth="1.2"
                          />
                          <line
                            y1="-0.5"
                            x2="8.78973"
                            y2="-0.5"
                            transform="matrix(0.703762 -0.710435 0.706841 0.707373 3.64453 9.47949)"
                            strokeWidth="1.2"
                          />
                        </svg>
                        <svg
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mde-arrow-out absolute inset-0 h-full w-full stroke-current"
                          aria-hidden="true"
                        >
                          <path
                            d="M3.62938 2.5343L9.653 2.81771L9.96112 8.87081"
                            strokeWidth="1.2"
                          />
                          <line
                            y1="-0.5"
                            x2="8.78973"
                            y2="-0.5"
                            transform="matrix(0.703762 -0.710435 0.706841 0.707373 3.64453 9.47949)"
                            strokeWidth="1.2"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </form>
              )}

              {/* MDE Circular Social Channels Row (me-socials) */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${companyData.whatsapp.replace("+", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBA985]/30 text-[#CBA985] hover:border-[#DFC4A4] hover:bg-[#CBA985]/10 hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDB983]"
                  aria-label="Connect via WhatsApp Channel"
                  title="WhatsApp Channel"
                >
                  <MessageSquare className="h-4 w-4" />
                </a>

                <a
                  href={`tel:${companyData.phone}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBA985]/30 text-[#CBA985] hover:border-[#DFC4A4] hover:bg-[#CBA985]/10 hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDB983]"
                  aria-label="Executive Voice Line"
                  title="Direct Phone Line"
                >
                  <Phone className="h-4 w-4" />
                </a>

                <a
                  href={`mailto:${companyData.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBA985]/30 text-[#CBA985] hover:border-[#DFC4A4] hover:bg-[#CBA985]/10 hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDB983]"
                  aria-label="Direct Email Channel"
                  title="Executive Email"
                >
                  <Mail className="h-4 w-4" />
                </a>

                <a
                  href="https://maps.google.com/?q=18.5986,73.7978"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CBA985]/30 text-[#CBA985] hover:border-[#DFC4A4] hover:bg-[#CBA985]/10 hover:text-[#FFFFFF] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DDB983]"
                  aria-label="Headquarters Coordinates (Google Maps)"
                  title="Pune Headquarters"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Corporate Record & Assistance (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-start lg:items-end lg:text-right">
            <div className="mb-6">
              <span className="font-sans text-sm font-semibold uppercase tracking-[0.14em] text-gold-gradient block pb-2 border-b border-[#262930]/50 max-w-[260px] lg:ml-auto">
                Corporate Record &amp; Access
              </span>
            </div>
            <ul className="space-y-3.5 font-sans text-xs tracking-wider uppercase text-[#A89F95]">
              <li>
                <Link
                  href="/#scale"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Operational Scale Ledger
                </Link>
              </li>
              <li>
                <Link
                  href="/#machinery"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Heavy Machinery Fleet (MAIT / SANY)
                </Link>
              </li>
              <li>
                <Link
                  href="/#heritage"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Heritage Timeline (2008–2025)
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Pune Regional Footprint
                </Link>
              </li>
              <li>
                <Link
                  href="/#enquiry"
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5"
                >
                  Executive Enquiry Terminal
                </Link>
              </li>
              <li>
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-[#DDB983] transition-colors duration-300 block py-0.5 font-sans text-xs text-[#DDB983] font-medium"
                >
                  {companyData.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ========================================================= */}
        {/* MIDDLE REGIONAL SECTORS STRIP (Subtle Architectural Bar) */}
        {/* ========================================================= */}
        <div className="py-8 border-b border-[#262930]/60">
          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-3 mb-4">
            <span className="font-sans text-xs uppercase tracking-[0.15em] font-semibold text-gold-gradient">
              Regional Construction Sectors // Structural Typologies
            </span>
            <span className="font-sans text-xs text-[#8E929C] tracking-wider uppercase font-medium">
              Pune Metropolitan Region Footprint
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-xs text-[#A89F95]">
            {partnerDevelopers.map((p, idx) => (
              <span key={p.id} className="inline-flex items-center gap-2">
                <span className="hover:text-[#DDB983] transition-colors duration-200">
                  {p.name}
                </span>
                {idx < partnerDevelopers.length - 1 && (
                  <span className="text-[#3E434D]">·</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* SHOWSTOPPER MONUMENTAL BRAND SLOGAN (Bourbon St Typeface from MDE) */}
        {/* ========================================================= */}
        <div className="py-12 sm:py-16 lg:py-20 text-center select-none overflow-hidden flex flex-col items-center">
          <div className="relative h-24 w-24 sm:h-28 sm:w-28 mb-6 rounded-2xl overflow-hidden border border-[#3E342B]/90 bg-[#161311] shadow-2xl p-1.5 transition-transform duration-500 hover:scale-105">
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#181512]">
              <Image
                src="/images/hero/logo.jpeg"
                alt="GJ Buildcon Official Insignia"
                fill
                sizes="(max-width: 640px) 96px, 112px"
                className="object-contain"
              />
            </div>
          </div>
          <div
            className="font-bourbon text-slogan-gradient uppercase tracking-tight text-[13.5vw] lg:text-[12.2vw] leading-[1.05] transition-transform duration-700 hover:scale-[1.01] font-extrabold"
            aria-label="GJ Buildcon"
          >
            GJ Buildcon
          </div>
          <div className="font-sans text-xs tracking-[0.2em] uppercase font-semibold text-[#A89F95] mt-3">
            Subterranean Monograph • Heavy Civil &amp; Foundation Engineering
          </div>
        </div>

        {/* ========================================================= */}
        {/* BOTTOM LEGAL & COLOPHON BAR (Futura & PP Monument from MDE) */}
        {/* ========================================================= */}
        <div className="pt-8 border-t border-[#262930]/60 flex flex-col lg:flex-row items-center justify-between gap-6 font-sans text-xs uppercase tracking-wider text-[#A89F95]">
          
          {/* Left: Copyright & Coordinates */}
          <div className="text-center lg:text-left space-y-1">
            <p className="text-[#C5BCB3]">
              &copy; 2026 {companyData.legalName}. All rights reserved.
            </p>
            <p className="text-xs text-[#8E929C] tracking-widest font-sans font-medium">
              PUNE, MAHARASHTRA // 18.5986&deg; N, 73.7978&deg; E
            </p>
          </div>

          {/* Center: Legal & Specification Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#C5BCB3] font-medium">
            <Link
              href="/#scale"
              className="hover:text-[#DDB983] underline underline-offset-4 decoration-[#3E434D] hover:decoration-[#DDB983] transition-all"
            >
              Audited Scale
            </Link>
            <Link
              href="/#machinery"
              className="hover:text-[#DDB983] underline underline-offset-4 decoration-[#3E434D] hover:decoration-[#DDB983] transition-all"
            >
              Fleet Specs
            </Link>
            <Link
              href="/capabilities"
              className="hover:text-[#DDB983] underline underline-offset-4 decoration-[#3E434D] hover:decoration-[#DDB983] transition-all"
            >
              Capabilities
            </Link>
            <Link
              href="/#heritage"
              className="hover:text-[#DDB983] underline underline-offset-4 decoration-[#3E434D] hover:decoration-[#DDB983] transition-all"
            >
              Corporate Heritage
            </Link>
          </div>

          {/* Right: Pitch Colophon & Top Navigation */}
          <div className="flex items-center gap-4 text-center lg:text-right">
            <span className="font-sans font-semibold border border-[#262930] bg-[#14161B] px-3 py-1.5 text-xs text-[#C5BCB3] tracking-wider">
              DEMO // REDESIGN BY NRAVIXA
            </span>
            <a
              href="#site-header"
              className="font-sans font-semibold inline-flex items-center gap-1 text-[#DDB983] hover:text-[#FFFFFF] transition-colors text-xs tracking-widest"
              aria-label="Back to top of page"
            >
              <span>TOP</span>
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
