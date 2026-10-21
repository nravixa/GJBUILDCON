"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { partnerDevelopers } from "@/data/capabilities";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const imageMainRef = useRef<HTMLDivElement>(null);
  const partnerGridRef = useRef<HTMLDivElement>(null);

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

      // Main showcase cards stagger
      if (showcaseRef.current) {
        const panels = showcaseRef.current.children;
        gsap.fromTo(
          panels,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: showcaseRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Main image scroll scrub parallax
      if (imageMainRef.current && sectionRef.current) {
        gsap.to(imageMainRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: showcaseRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Sector Typologies 3x3 grid stagger reveal
      if (partnerGridRef.current) {
        const cards = partnerGridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.06,
            ease: "power2.out",
            scrollTrigger: {
              trigger: partnerGridRef.current,
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
      id="projects"
      aria-label="Chapter 05: Regional Footprint & Typologies"
      className="border-b border-[#2D2622] bg-[#12100E] py-20 sm:py-28 lg:py-32 text-[#FFFFFF]"
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
              <span>Chapter 05 // Regional Footprint &amp; Typologies</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.96] text-[#FFFFFF]">
              Structural Delivery Footprint Across Pune
            </h2>
          </div>
          <div className="font-monument text-[10px] text-[#8F857B] uppercase tracking-[0.2em]">
            Pimple Saudagar · Pimple Nilakh · Ambegaon · Regional PMR
          </div>
        </div>

        {/* Lead Editorial Narrative */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <p className="font-futura text-base sm:text-lg text-[#C5BCB3] leading-relaxed">
            From high-density residential societies in Pimple Saudagar to expansive commercial floorplates and civic infrastructure in Ambegaon, GJ Buildcon&apos;s civil execution spans a comprehensive portfolio of completed structural works. Every structure is engineered with structural rigor, continuous quality control, and schedule certainty.
          </p>
        </div>

        {/* Asymmetrical Editorial Showcase: Dominant Feature (60%) + Supporting Typology (40%) */}
        <div
          ref={showcaseRef}
          className="grid grid-cols-1 lg:grid-cols-12 border border-[#2D2622] bg-[#2D2622] gap-[1px] mb-12 lg:mb-16"
        >
          
          {/* Dominant Feature: Residential & Commercial High-Density Schemes */}
          <div className="lg:col-span-7 bg-[#161311] p-8 sm:p-12 flex flex-col justify-between will-change-transform group">
            <div>
              <div className="flex items-center justify-between font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-4 pb-3 border-b border-[#2D2622]">
                <span>TYPOLOGY 01 // RESIDENTIAL SOCIETIES &amp; TOWNSHIPS</span>
                <span className="text-[#8F857B]">ACTIVE CORE MARKET</span>
              </div>
              
              <h3 className="font-bourbon text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.05] text-[#FFFFFF] mb-4">
                High-Density Residential Structural Frameworks
              </h3>
              
              <p className="font-futura text-sm sm:text-base text-[#C5BCB3] leading-relaxed mb-6">
                Turnkey multi-storey RCC frame construction, podium slabs, and basement shoring executed across prime PCMC residential corridors. Integrated formwork systems and dense rebar detailing ensure seismic durability and accelerated slab cycles.
              </p>

              <div className="space-y-3 pt-4 border-t border-[#2D2622] mb-8 font-futura text-xs">
                <div className="flex justify-between items-center text-[#8F857B]">
                  <span className="font-monument text-[10px] uppercase">Primary Corridors:</span>
                  <span className="text-[#FFFFFF] uppercase font-semibold">Pimple Saudagar &amp; Pimple Nilakh</span>
                </div>
                <div className="flex justify-between items-center text-[#8F857B]">
                  <span className="font-monument text-[10px] uppercase">Engineering Scope:</span>
                  <span className="text-[#FFFFFF] uppercase font-semibold">Turnkey RCC Frames, Masonry &amp; Piling</span>
                </div>
              </div>
            </div>

            {/* Dominant Visual Frame with Crosshairs */}
            <div>
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#2D2622] bg-[#12100E] group/img">
                <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>
                <div className="absolute top-2 right-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>

                <div ref={imageMainRef} className="relative w-full h-[115%] -top-[7.5%] will-change-transform">
                  <Image
                    src="/images/capabilities/infrastructure-scale-concept.webp"
                    alt="Expansive urban infrastructure project with deep trenching and foundation retaining works at dusk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-3.5 py-2 flex items-center justify-between font-monument text-[9px] text-[#C5BCB3] uppercase tracking-wider z-10">
                  <span>Fig. 5.1 // Structural Scale &amp; Civil Footprint</span>
                  <span className="text-[#8F857B]">SITE RECORD // ACTIVE PCMC CORRIDOR</span>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Column: Commercial Floorplates & Institutional Campuses (5 cols) */}
          <div className="lg:col-span-5 bg-[#181512] p-8 sm:p-12 flex flex-col justify-between space-y-8 will-change-transform">
            
            {/* Sub-Panel A: Commercial Floorplates */}
            <div className="border-b border-[#2D2622] pb-8">
              <div className="font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-2">
                TYPOLOGY 02 // COMMERCIAL FLOORPLATES
              </div>
              <h4 className="font-bourbon text-xl sm:text-2xl uppercase text-[#FFFFFF] mb-3">
                Commercial Complexes &amp; Retail Hubs
              </h4>
              <p className="font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed mb-4">
                Engineered for corporate tenants with wide column layouts, heavy live-load capacity, and synchronized MEP shafting across Pimple Gurav and Ambegaon corridors.
              </p>
              
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#2D2622] bg-[#12100E] group/sub">
                <Image
                  src="/images/capabilities/drilling-equipment-editorial.webp"
                  alt="Crawler rotary drilling rig on hard basalt rock platform with drilling mast and Kelly bar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover/sub:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-3 py-1.5 flex items-center justify-between font-monument text-[9px] text-[#C5BCB3] uppercase tracking-wider">
                  <span>Fig. 5.2 // Subterranean Heavy Plant</span>
                  <span className="text-[#8F857B]">GEOTECHNICAL RIGGING // BASALT STRATA</span>
                </div>
              </div>
            </div>

            {/* Sub-Panel B: Institutional & Civic Infrastructure */}
            <div>
              <div className="font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-2">
                TYPOLOGY 03 // INSTITUTIONAL INFRASTRUCTURE
              </div>
              <h4 className="font-bourbon text-xl sm:text-2xl uppercase text-[#FFFFFF] mb-3">
                Educational Campuses &amp; Hospitals
              </h4>
              <p className="font-futura text-xs sm:text-sm text-[#C5BCB3] leading-relaxed mb-4">
                Specialized civic campus execution including educational facilities with strict pedestrian safety norms and healthcare facilities requiring medical-gas ducting.
              </p>

              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm border border-[#2D2622] bg-[#12100E] group/sub2">
                <Image
                  src="/images/capabilities/concrete-steel-material-study.webp"
                  alt="Tactile material study of cast concrete, structural steel rebar ties and basalt stone"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover/sub2:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-3 py-1.5 flex items-center justify-between font-monument text-[9px] text-[#C5BCB3] uppercase tracking-wider">
                  <span>Fig. 5.3 // Material Integrity &amp; RCC Standards</span>
                  <span className="text-[#8F857B]">QUALITY AUDIT // CONCRETE TESTING</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* REGIONAL TYPOLOGIES MATRIX — Lenval Dark Architectural Grid */}
        <div id="partners" className="border border-[#2D2622] bg-[#161311] p-8 sm:p-12 rounded-sm">
          
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#2D2622] pb-6 mb-8">
            <div>
              <div className="font-monument text-[10px] uppercase tracking-[0.22em] text-[#C2A284] mb-1">
                Regional Sector Engagement
              </div>
              <h3 className="font-bourbon text-2xl sm:text-3xl uppercase text-[#FFFFFF]">
                Regional Construction &amp; Engineering Sectors
              </h3>
            </div>
            <div className="font-monument text-[10px] text-[#8F857B] uppercase tracking-[0.2em]">
              09 Core Structural Typologies
            </div>
          </div>

          {/* 3x3 Architectural Grid with 1px Bronze Hairlines */}
          <div ref={partnerGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-[#2D2622] bg-[#2D2622] gap-[1px]">
            {partnerDevelopers.map((dev) => (
              <motion.div
                key={dev.id}
                whileHover={{ y: -4, backgroundColor: "#1C1815" }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="p-6 bg-[#12100E] cursor-pointer flex flex-col justify-between min-h-[120px] will-change-transform transition-colors group"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="font-bourbon text-lg sm:text-xl uppercase text-[#FFFFFF] group-hover:text-[#C2A284] transition-colors tracking-tight">
                    {dev.name}
                  </span>
                  <span className="font-monument text-[8px] uppercase tracking-wider text-[#C2A284] bg-[#181512] border border-[#2D2622] px-1.5 py-0.5 rounded-none flex-shrink-0">
                    TYPOLOGY
                  </span>
                </div>
                <span className="font-futura text-xs text-[#8F857B] mt-3 uppercase">
                  {dev.relationship}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Transparent Editorial Disclaimer */}
          <div className="mt-8 pt-6 border-t border-[#2D2622] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-futura text-xs text-[#8F857B]">
            <span>
              Portfolio Note: Typologies illustrate structural delivery capability across Pune. Authentic jobsite photography and verified client project dossiers will be updated following owner confirmation.
            </span>
            <Link
              href="/capabilities"
              className="group inline-flex items-center gap-2 font-monument uppercase text-[11px] text-[#FFFFFF] hover:text-[#C2A284] transition-colors flex-shrink-0"
            >
              <span className="relative">
                Explore Technical Disciplines
                <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#2D2622] group-hover:bg-[#C2A284] transition-colors" />
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-[#C2A284] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

