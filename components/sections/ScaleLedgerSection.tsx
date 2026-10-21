"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const ScaleLedgerSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

      if (cardsRef.current) {
        const items = cardsRef.current.children;
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
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
      id="scale"
      aria-label="Chapter 02: Operational Scale Ledger"
      className="border-b border-[#2D2622] bg-[#161311] py-20 sm:py-28 lg:py-32 text-[#FFFFFF]"
    >
      <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#2D2622] pb-8"
        >
          <div>
            <div className="font-monument text-[10px] uppercase tracking-[0.22em] text-[#C2A284] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
              <span>Chapter 02 // Operational Scale Ledger</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.96] text-[#FFFFFF]">
              Operational Scale Ledger
            </h2>
          </div>
          <div className="font-monument text-[10px] text-[#8F857B] uppercase tracking-[0.2em]">
            Operational Track Record · Core Capabilities
          </div>
        </div>

        {/* 4-Column Hairline Data Ledger — Lenval Dark Architectural Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#2D2622] bg-[#2D2622] gap-[1px]"
        >
          
          {/* Column 01: Years of Discipline */}
          <motion.div
            whileHover={{ y: -4, backgroundColor: "#1C1815" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] cursor-default relative group"
          >
            <div className="absolute top-3 right-3 font-mono text-[9px] text-[#8F857B]/40">01</div>
            <div>
              <div className="font-bourbon text-5xl sm:text-6xl tracking-tight text-[#FFFFFF] tabular-nums leading-none">
                10<span className="text-[#C2A284] font-normal text-4xl sm:text-5xl">+</span>
              </div>
              <div className="mt-4 font-monument text-[11px] uppercase tracking-[0.16em] text-[#FFFFFF]">
                Years in Construction
              </div>
            </div>
            <p className="mt-6 font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed">
              Continuous civil contracting history in Maharashtra; founder timeline rooted in regional engineering since 2008.
            </p>
          </motion.div>

          {/* Column 02: Delivered Volume */}
          <motion.div
            whileHover={{ y: -4, backgroundColor: "#1C1815" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] cursor-default relative group"
          >
            <div className="absolute top-3 right-3 font-mono text-[9px] text-[#8F857B]/40">02</div>
            <div>
              <div className="font-bourbon text-3xl sm:text-4xl tracking-tight text-[#FFFFFF] leading-none uppercase">
                PROVEN<span className="text-[#C2A284] font-normal text-xl sm:text-2xl ml-1">SCALE</span>
              </div>
              <div className="mt-4 font-monument text-[11px] uppercase tracking-[0.16em] text-[#FFFFFF]">
                Delivered Structural Volume
              </div>
            </div>
            <p className="mt-6 font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed">
              Demonstrated execution spanning residential societies, commercial floorplates, schools, healthcare facilities, and civic complexes.
            </p>
          </motion.div>

          {/* Column 03: Skilled Workforce */}
          <motion.div
            whileHover={{ y: -4, backgroundColor: "#1C1815" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] cursor-default relative group"
          >
            <div className="absolute top-3 right-3 font-mono text-[9px] text-[#8F857B]/40">03</div>
            <div>
              <div className="font-bourbon text-3xl sm:text-4xl tracking-tight text-[#FFFFFF] leading-none uppercase">
                CORE<span className="text-[#C2A284] font-normal text-xl sm:text-2xl ml-1">CREWS</span>
              </div>
              <div className="mt-4 font-monument text-[11px] uppercase tracking-[0.16em] text-[#FFFFFF]">
                Skilled On-Site Workforce
              </div>
            </div>
            <p className="mt-6 font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed">
              Deployable civil engineering labor capacity, supported by dedicated site supervisors and technical project managers.
            </p>
          </motion.div>

          {/* Column 04: Heavy Rotary Fleet */}
          <motion.div
            whileHover={{ y: -4, backgroundColor: "#1C1815" }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[260px] cursor-default relative group"
          >
            <div className="absolute top-3 right-3 font-mono text-[9px] text-[#8F857B]/40">04</div>
            <div>
              <div className="font-bourbon text-3xl sm:text-4xl tracking-tight text-[#FFFFFF] leading-none uppercase">
                ROTARY<span className="text-[#C2A284] font-normal text-xl sm:text-2xl ml-1">FLEET</span>
              </div>
              <div className="mt-4 font-monument text-[11px] uppercase tracking-[0.16em] text-[#FFFFFF]">
                Heavy Piling Fleet Capabilities
              </div>
            </div>
            <p className="mt-6 font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed">
              Specialized heavy rotary drilling rigs and mobile support cranes deployed for deep rock socketing and continuous pile execution.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
