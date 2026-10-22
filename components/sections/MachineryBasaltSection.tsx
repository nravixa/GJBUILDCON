"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const MachineryBasaltSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const imageParallaxRef = useRef<HTMLDivElement>(null);
  const dossierRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header reveal
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Lead narrative reveal
      if (narrativeRef.current) {
        gsap.fromTo(
          narrativeRef.current,
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
            scrollTrigger: {
              trigger: narrativeRef.current,
              start: "top 85%",
              once: true,
            },
          }
        );
      }

      // Image frame entrance & scroll scrub parallax
      if (imageFrameRef.current) {
        gsap.fromTo(
          imageFrameRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: imageFrameRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      if (imageParallaxRef.current && sectionRef.current) {
        gsap.to(imageParallaxRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Dossier items staggered reveal
      if (dossierRef.current) {
        const units = dossierRef.current.children;
        gsap.fromTo(
          units,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.95,
            stagger: 0.14,
            ease: "power3.out",
            scrollTrigger: {
              trigger: dossierRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="machinery"
      aria-label="Chapter 04: Civil Execution & Heavy Plant"
      className="relative border-b border-[#2D2622] bg-[#161311] text-[#FFFFFF] py-20 sm:py-28 lg:py-32 scroll-mt-12"
    >
      <span id="fleet" className="sr-only">Fleet Anchor</span>
      <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#2D2622] pb-8"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
              <span>Chapter 04 // Civil Execution &amp; Heavy Plant</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.12] sm:leading-[1.15] text-[#FFFFFF] font-bold tracking-tight">
              Construction Machinery &amp; Heavy Plant
            </h2>
          </div>
          <div className="font-sans text-xs text-[#A89F95] uppercase tracking-[0.15em] font-medium">
            Structural Lifting · Modular Formwork · Foundation Support
          </div>
        </div>

        {/* Lead Narrative */}
        <div ref={narrativeRef} className="max-w-3xl mb-12 lg:mb-16">
          <p className="font-sans text-base sm:text-lg text-[#E2DDD5] leading-relaxed">
            Delivering large-scale civil projects and landmark high-rise structures demands heavy lifting equipment, advanced concrete batching, and precision staging. GJ Buildcon commands a comprehensive machinery plant—from mobile rigging cranes and modular formwork systems to integrated rotary foundation equipment.
          </p>
        </div>

        {/* Asymmetrical Machinery Showcase: Visual Left (58%) + Technical Dossier Right (42%) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start border border-[#2D2622] bg-[#12100E] p-8 sm:p-10 lg:p-12 rounded-sm relative">
          
          {/* Visual Column */}
          <div ref={imageFrameRef} className="lg:col-span-7 flex flex-col justify-between h-full will-change-transform">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden rounded-sm border border-[#2D2622] bg-[#181512] group">
              <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>
              <div className="absolute top-2 right-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>

              <div ref={imageParallaxRef} className="relative w-full h-[115%] -top-[7.5%] will-change-transform">
                <Image
                  src="/images/capabilities/structural-foundation-concept.webp"
                  alt="High-rise construction staging, structural framework, and heavy civil machinery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              {/* Technical Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-4 py-2.5 flex items-center justify-between font-sans text-xs text-[#E2DDD5] uppercase tracking-wider font-medium z-10">
                <span>Fig. 4.1 // Civil Infrastructure &amp; Heavy Lifting Execution</span>
                <span className="text-[#A89F95]">ASSET LOG // PUNE FIELD SITES</span>
              </div>
            </div>

            {/* Technical Sub-Caption */}
            <div className="mt-4 pt-4 border-t border-[#2D2622] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs text-[#A89F95] font-medium">
              <span>APPLICATION: TURNKEY RCC SUPERSTRUCTURE &amp; PILING</span>
              <span className="text-[#C2A284]">PUNE REGIONAL DEPLOYMENT</span>
            </div>
          </div>

          {/* Dossier Column */}
          <div ref={dossierRef} className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Unit 01: Tower Cranes & Rigging */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="border-b border-[#2D2622] pb-6 will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">ASSET 01 // STRUCTURAL LIFTING</span>
                <span className="text-[#A89F95]">HEAVY RIGGING</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                Tower Cranes &amp; Mobile Rigging Units
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                Heavy-duty mobile cranes and tower lifting systems for vertical material transport, structural steel placement, and multi-tier framework erection.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Role: Superstructure Lifting &amp; High-Elevation Placement
              </div>
            </motion.div>

            {/* Unit 02: Formwork Systems */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="border-b border-[#2D2622] pb-6 will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">ASSET 02 // CONCRETE &amp; FORMWORK</span>
                <span className="text-[#A89F95]">SURFACE SPEC</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                Engineered Modular Formwork Systems
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                Industrial aluminium and steel shuttering systems ensuring tight structural tolerances, rapid vertical pouring cycles, and monolithic concrete finishes.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Role: High-Rise Core Walls &amp; Monolithic Slab Casting
              </div>
            </motion.div>

            {/* Unit 03: Integrated Foundation Support Rigs */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">SUPPORT 03 // FOUNDATION RIGS</span>
                <span className="text-[#A89F95]">SUB-GRADE SPEC</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                Hydraulic Rotary &amp; Augur Piling Rigs
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                Specialized track-mounted hydraulic rigs (MAIT / SANY) deployed for sub-grade bored piling and basalt rock socketing to establish unshakeable project bases.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Role: Bedrock Anchoring &amp; Geotechnical Foundation Support
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
