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
      aria-label="Chapter 04: Subterranean Basalt Machinery"
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
              <span>Chapter 04 // Subterranean Basalt Machinery</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.12] sm:leading-[1.15] text-[#FFFFFF] font-bold tracking-tight">
              The Basalt Drilling Fleet
            </h2>
          </div>
          <div className="font-sans text-xs text-[#A89F95] uppercase tracking-[0.15em] font-medium">
            Drilling Equipment &amp; Fleet Capabilities · Rock Socketing Engineering
          </div>
        </div>

        {/* Lead Narrative */}
        <div ref={narrativeRef} className="max-w-3xl mb-12 lg:mb-16">
          <p className="font-sans text-base sm:text-lg text-[#E2DDD5] leading-relaxed">
            Sub-surface rock socketing in Pune&apos;s dense Deccan basalt formation requires high-capacity hydraulic machinery. GJ Buildcon deploys a dedicated rotary drilling fleet—ensuring continuous deep foundation schedules from initial mobilization to final pile cut-off.
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
                  src="/images/capabilities/hydraulic-rig-detail.webp"
                  alt="High-pressure hydraulic lines, heavy crawler tracks and mechanical mast assembly of a rotary piling rig"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              {/* Technical Caption */}
              <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-4 py-2.5 flex items-center justify-between font-sans text-xs text-[#E2DDD5] uppercase tracking-wider font-medium z-10">
                <span>Fig. 4.1 // Hydraulic Assembly &amp; Drive System</span>
                <span className="text-[#A89F95]">ASSET LOG // PUNE FIELD FLEET</span>
              </div>
            </div>

            {/* Technical Sub-Caption */}
            <div className="mt-4 pt-4 border-t border-[#2D2622] flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-sans text-xs text-[#A89F95] font-medium">
              <span>APPLICATION: CAST-IN-SITU BORED PILING</span>
              <span className="text-[#C2A284]">PUNE REGIONAL DEPLOYMENT</span>
            </div>
          </div>

          {/* Dossier Column */}
          <div ref={dossierRef} className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Unit 01: MAIT Fleet */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="border-b border-[#2D2622] pb-6 will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">ASSET 01 // ROTARY DRILLING</span>
                <span className="text-[#A89F95]">ROTARY SPEC</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                MAIT Hydraulic Rotary Rigs
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                Track-mounted heavy hydraulic rotary drilling rigs engineered for deep bored cast-in-situ piles through fractured and solid basalt strata.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Strata: Solid Basalt Socketing · Heavy Operational Fleet
              </div>
            </motion.div>

            {/* Unit 02: SANY Fleet */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="border-b border-[#2D2622] pb-6 will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">ASSET 02 // CRAWLER DRILLING</span>
                <span className="text-[#A89F95]">CRAWLER SPEC</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                SANY Heavy Rotary Units
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                High-torque crawler rotary rigs utilized for large-diameter bored foundation shafts and heavy vertical load-bearing columns.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Strata: Large-Diameter Piling · Continuous Drilling Cycles
              </div>
            </motion.div>

            {/* Unit 03: Support Cranes & Hydra */}
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="will-change-transform cursor-default transition-colors hover:border-[#C2A284]/40"
            >
              <div className="flex items-center justify-between font-sans text-xs font-semibold mb-2">
                <span className="text-[#C2A284] uppercase tracking-[0.18em]">SUPPORT 03 // SITE LOGISTICS</span>
                <span className="text-[#A89F95]">RIGGING FLEET</span>
              </div>
              <h3 className="font-bourbon text-xl sm:text-2xl uppercase leading-snug text-[#FFFFFF] mb-2 font-bold tracking-tight">
                Hydra Cranes &amp; Auxiliary Units
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                Mobile site cranes and auxiliary utility fleet managing heavy steel rebar cage placement, tremie pipe deployment, and concrete logistics.
              </p>
              <div className="mt-3 font-sans text-xs text-[#A89F95] uppercase font-medium">
                Role: Rebar Cage Handling &amp; Tremie Concrete Pouring
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
