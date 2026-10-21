"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { companyData } from "@/data/company";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const StorySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);
  const milestonesGridRef = useRef<HTMLDivElement>(null);
  const leadershipRef = useRef<HTMLDivElement>(null);

  const milestones = [
    {
      year: "2008",
      stage: "STAGE // 01",
      title: "Multinational Engineering Foundation",
      description:
        "Mr. Umesh Gatkal commenced his career with multinational infrastructure firms, mastering site logistics, reinforced concrete quality control, and large-scale structural planning.",
      focus: "Technical Groundwork",
    },
    {
      year: "2015",
      stage: "STAGE // 02",
      title: "Establishment of Aditya Construction",
      description:
        "Founded Aditya Construction in Pune, delivering high-density residential societies and commercial civil contracts with zero-tolerance structural execution.",
      focus: "Turnkey Civil Growth",
    },
    {
      year: "2021",
      stage: "STAGE // 03",
      title: "Mechanized Geotechnical Fleet",
      description:
        "Expanded into specialized geotechnical engineering, mobilizing heavy hydraulic rotary rigs for deep foundation piling into challenging Deccan basalt strata.",
      focus: "Geotechnical Fleet",
    },
    {
      year: "2025",
      stage: "STAGE // 04",
      title: "Consolidation into GJ Buildcon",
      description:
        "Unified turnkey civil contracting and heavy foundation piling under G and J Buildcon, creating an integrated engineering entity with dedicated site workforce and extensive structural delivery across Maharashtra.",
      focus: "Integrated Operations",
    },
  ];

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

      // Narrative reveal
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

      // 4 Milestone cards staggered entrance
      if (milestonesGridRef.current) {
        const cards = milestonesGridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: milestonesGridRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Leadership stance bar reveal
      if (leadershipRef.current) {
        gsap.fromTo(
          leadershipRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: leadershipRef.current,
              start: "top 85%",
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
      id="heritage"
      aria-label="Chapter 06: Corporate Heritage & Leadership Evolution"
      className="border-b border-[#2D2622] bg-[#161311] py-20 sm:py-28 lg:py-32 text-[#FFFFFF]"
    >
      <div className="mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 border-b border-[#2D2622] pb-8"
        >
          <div>
            <div className="font-sans text-xs uppercase tracking-[0.2em] font-semibold text-[#C2A284] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
              <span>Chapter 06 // Corporate Heritage &amp; Leadership</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.12] sm:leading-[1.15] text-[#FFFFFF] font-bold tracking-tight">
              The Discipline of Permanence
            </h2>
          </div>
          <div className="font-sans text-xs text-[#A89F95] uppercase tracking-[0.15em] font-medium">
            Leadership: {companyData.founderName} · Continuous Timeline Since 2008
          </div>
        </div>

        {/* Lead Editorial Narrative */}
        <div ref={narrativeRef} className="max-w-3xl mb-12 lg:mb-16">
          <p className="font-sans text-base sm:text-lg text-[#E2DDD5] leading-relaxed">
            Engineering leadership is forged through continuous site execution. Founded on over a decade of hands-on structural engineering, GJ Buildcon represents a methodical evolution from multinational infrastructure management to an integrated civil and deep foundation contractor across Maharashtra.
          </p>
        </div>

        {/* Chronological 4-Stage Hairline Ledger — Lenval Dark Architectural Grid */}
        <div
          ref={milestonesGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-[#2D2622] bg-[#2D2622] gap-[1px] mb-12 lg:mb-16"
        >
          {milestones.map((m) => (
            <motion.div
              key={m.year}
              whileHover={{ y: -5, backgroundColor: "#1C1815" }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="bg-[#12100E] p-8 sm:p-10 flex flex-col justify-between min-h-[300px] will-change-transform relative transition-colors group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#2D2622] mb-5">
                  <span className="font-bourbon text-3xl font-extrabold tracking-tight text-[#FFFFFF] tabular-nums">
                    {m.year}
                  </span>
                  <span className="font-sans text-xs font-semibold text-[#C2A284] uppercase tracking-[0.18em]">
                    {m.stage}
                  </span>
                </div>

                {m.year === "2025" && (
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] mb-4 shadow-sm">
                    <Image
                      src="/images/hero/logo.jpeg"
                      alt="GJ Buildcon Official Logo"
                      fill
                      sizes="44px"
                      className="object-contain"
                    />
                  </div>
                )}

                <h3 className="font-bourbon text-xl uppercase leading-snug text-[#FFFFFF] mb-3 group-hover:text-[#C2A284] transition-colors font-bold tracking-tight">
                  {m.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-[#2D2622] flex items-center justify-between font-sans text-xs uppercase tracking-wider text-[#A89F95] font-medium">
                <span>FOCUS: {m.focus}</span>
                <span className="text-[#C2A284]">MILESTONE</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Executive Leadership Stance Bar */}
        <motion.div
          ref={leadershipRef}
          whileHover={{ y: -2 }}
          transition={{ duration: 0.2 }}
          className="border border-[#2D2622] bg-[#181512] p-8 sm:p-10 rounded-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 will-change-transform"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="relative h-12 w-12 sm:h-14 sm:w-14 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] shadow-md">
              <Image
                src="/images/hero/logo.jpeg"
                alt="GJ Buildcon Official Mark"
                fill
                sizes="(max-width: 640px) 48px, 56px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-sans text-xs font-semibold text-[#C2A284] uppercase tracking-[0.18em] mb-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Founder &amp; Principal Contractor</span>
              </div>
              <div className="font-bourbon text-2xl uppercase leading-snug text-[#FFFFFF] font-bold tracking-tight">
                Mr. Umesh Gatkal
              </div>
              <div className="font-sans text-xs text-[#A89F95] mt-1 font-medium">
                10+ Years Dedicated Regional Construction Execution across Pune &amp; Maharashtra
              </div>
            </div>
          </div>
          <div className="font-sans text-xs sm:text-sm text-[#E2DDD5] leading-relaxed max-w-md">
            Direct executive oversight on every deep foundation rig deployment and major structural concrete pour across Western Maharashtra.
          </div>
        </motion.div>

      </div>
    </section>
  );
};

