"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import { MarqueeTicker } from "@/components/ui/MarqueeTicker";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { useTheme } from "@/components/theme/ThemeProvider";

const MotionLink = motion.create(Link);

export const HeroSection: React.FC = () => {
  const { theme, isMounted } = useTheme();
  const isLight = isMounted && theme === "light";
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "power3.out",
            delay: 0.3,
          }
        );
      }

      if (scrollIndicatorRef.current) {
        gsap.fromTo(
          scrollIndicatorRef.current,
          { opacity: 0, y: -10 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            delay: 0.8,
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="hero"
        aria-label="Lenval Architecture Hero — Creators of Refined Structures"
        className={`relative min-h-[92vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden transition-colors duration-700 ${
          isLight ? "bg-[#F7F5F0] text-[#191B1F]" : "bg-[#12100E] text-[#FFFFFF]"
        }`}
      >
        {/* Full-Bleed Atmospheric Background Visual (Dark Mode) */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
            isLight ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          aria-hidden={isLight}
        >
          <Image
            src="/images/hero/hero-foundation-engineering.webp"
            alt="Atmospheric heavy foundation engineering and rotary drilling rig at dawn"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.08]"
          />
          {/* Lenval Signature Vignette Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-[#12100E]/45 to-black/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#12100E]/30 to-[#12100E]/80" />

          {/* Architectural Drafting Wireframe Sketches */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="100%" x2="70%" y2="0" stroke="#C5BCB3" strokeWidth="0.75" />
            <line x1="30%" y1="100%" x2="100%" y2="20%" stroke="#C5BCB3" strokeWidth="0.75" />
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#C5BCB3" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#C5BCB3" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Full-Bleed Luminous Daytime Visual (Bright / Light Mode) */}
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-700 ease-in-out ${
            isLight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          aria-hidden={!isLight}
        >
          <Image
            src="/images/hero/hero-bright-architectural.jpg"
            alt="Sunlit luxury civil construction landmark with travertine facade in daytime Pune"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.98] contrast-[1.05]"
          />
          {/* Bright Mode Editorial Sunlit Gradient Overlays for High-Contrast Readable Typography */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F7F5F0] via-[#F7F5F0]/50 to-white/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F5F0]/85 via-[#F7F5F0]/30 to-transparent" />

          {/* Architectural Drafting Wireframe Sketches in Crisp Graphite */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="0" y1="100%" x2="70%" y2="0" stroke="#191B1F" strokeWidth="0.75" />
            <line x1="30%" y1="100%" x2="100%" y2="20%" stroke="#191B1F" strokeWidth="0.75" />
            <line x1="15%" y1="0" x2="15%" y2="100%" stroke="#191B1F" strokeWidth="0.5" strokeDasharray="6 6" />
            <line x1="85%" y1="0" x2="85%" y2="100%" stroke="#191B1F" strokeWidth="0.5" strokeDasharray="6 6" />
          </svg>
        </div>

        {/* Top Spacer */}
        <div className="relative z-10 pt-8 px-6 sm:px-10 lg:px-16 mx-auto w-full max-w-[1536px]">
          <div className="flex items-center justify-between font-monument text-[10px] uppercase tracking-[0.22em] text-[#C5BCB3]">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>PUNE &amp; MAHARASHTRA REGIONAL DEPLOYMENT</span>
            </div>
            <div className="hidden sm:block text-[#8F857B]">
              COORDINATES: 18.5986&deg; N, 73.7978&deg; E
            </div>
          </div>
        </div>

        {/* Monumental Content Stage (Lenval-style bottom layout) */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-16 pb-12 sm:pb-16 mx-auto w-full max-w-[1536px] flex flex-col justify-end flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            
            {/* Left Lower: Credential Summary & Action Triggers */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="max-w-md">
                <span className="font-monument text-[10px] uppercase tracking-[0.2em] text-[#C2A284] block mb-2">
                  CIVIL EXECUTION &amp; ROTARY PILING
                </span>
                <p className="font-futura text-sm sm:text-base text-[#C5BCB3] leading-relaxed">
                  Turnkey multi-storey reinforced concrete construction and deep hydraulic rotary rock socketing into challenging Deccan basalt strata across Western Maharashtra.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <motion.a
                  href="#thesis"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-monument text-[10px] uppercase tracking-[0.16em] transition-all duration-300 shadow-sm group ${
                    isLight
                      ? "border border-[#191B1F] bg-[#191B1F] hover:bg-transparent"
                      : "border border-[#FFFFFF] bg-[#FFFFFF] hover:bg-transparent"
                  }`}
                >
                  <span className={isLight ? "text-white group-hover:text-[#191B1F] transition-colors" : "text-[#12100E] group-hover:text-white transition-colors"}>
                    Explore Vision
                  </span>
                  <ArrowDown className={`h-3 w-3 ${isLight ? "text-white group-hover:text-[#191B1F] transition-colors" : "text-[#12100E] group-hover:text-white transition-colors"}`} />
                </motion.a>

                <MotionLink
                  href="/capabilities"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 font-monument text-[10px] uppercase tracking-[0.16em] backdrop-blur-sm transition-all duration-300 ${
                    isLight
                      ? "border border-[#DCD7CD] bg-[#FFFFFF]/90 text-[#191B1F] hover:border-[#9E7D5C] hover:bg-[#ECE8E0]"
                      : "border border-[#2D2622] bg-[#181512]/80 text-[#FFFFFF] hover:border-[#C2A284] hover:bg-[#1F1B17]"
                  }`}
                >
                  <span>Capabilities</span>
                </MotionLink>
              </div>
            </div>

            {/* Right Lower: Monumental Lenval Serif Headline */}
            <div
              ref={headlineRef}
              className="lg:col-span-7 flex flex-col items-start lg:items-end text-left lg:text-right"
            >
              <h1 className="font-bourbon text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] leading-[0.96] uppercase text-[#FFFFFF] tracking-normal font-normal">
                Creators of Refined<br />
                Foundations &amp; Iconic<br />
                Structures
              </h1>
            </div>

          </div>

          {/* Centered Scroll to Explore Indicator */}
          <div
            ref={scrollIndicatorRef}
            className="mt-12 sm:mt-16 pt-6 border-t border-[#2D2622]/80 flex flex-col items-center justify-center gap-2.5"
          >
            <a
              href="#thesis"
              className="group flex flex-col items-center gap-2 font-monument text-[9px] uppercase tracking-[0.25em] text-[#8F857B] hover:text-[#FFFFFF] transition-colors"
            >
              <span>Scroll to Explore</span>
              <div className="w-[1px] h-6 bg-[#2D2622] group-hover:bg-[#C2A284] transition-colors relative overflow-hidden">
                <motion.div
                  animate={{ y: [0, 24] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="w-full h-2.5 bg-[#FFFFFF]"
                />
              </div>
            </a>
          </div>

        </div>
      </section>

      {/* Marquee Ticker Styled in Lenval Espresso Theme */}
      <MarqueeTicker />
    </>
  );
};
