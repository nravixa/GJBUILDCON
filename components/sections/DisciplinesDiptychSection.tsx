"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const DisciplinesDiptychSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);

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

      // Panels staggered reveal
      const panels = [panel1Ref.current, panel2Ref.current].filter(Boolean);
      if (panels.length > 0) {
        gsap.fromTo(
          panels,
          { opacity: 0, y: 45 },
          {
            opacity: 1,
            y: 0,
            duration: 1.05,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: panel1Ref.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }

      // Image scrub parallax inside frames
      if (image1Ref.current && sectionRef.current) {
        gsap.to(image1Ref.current, {
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

      if (image2Ref.current && sectionRef.current) {
        gsap.to(image2Ref.current, {
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="disciplines"
      aria-label="Chapter 03: Engineering Disciplines Diptych"
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
              <span>Chapter 03 // Engineering Disciplines</span>
            </div>
            <h2 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[0.96] text-[#FFFFFF]">
              The Dual-Vertical Framework
            </h2>
          </div>
          <div className="font-monument text-[10px] text-[#8F857B] uppercase tracking-[0.2em]">
            Superstructure Civil Execution · Subterranean Piling Engineering
          </div>
        </div>

        {/* Asymmetrical 2-Part Diptych Grid with Fine Architectural Hairline Divider */}
        <div className="grid grid-cols-1 lg:grid-cols-2 border border-[#2D2622] bg-[#2D2622] gap-[1px]">
          
          {/* Panel 01: Turnkey Civil Construction & Infrastructure */}
          <div
            ref={panel1Ref}
            className="bg-[#161311] p-8 sm:p-12 flex flex-col justify-between will-change-transform group"
          >
            <div>
              {/* Technical Indicator */}
              <div className="flex items-center justify-between font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-4 pb-3 border-b border-[#2D2622]">
                <span>01 // SUPERSTRUCTURE &amp; CIVIL EXECUTION</span>
                <span className="text-[#8F857B]">ABOVE-GRADE</span>
              </div>

              {/* Title & Editorial Description */}
              <h3 className="font-bourbon text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.05] text-[#FFFFFF] mb-4">
                Turnkey Civil Construction &amp; Infrastructure
              </h3>
              <p className="font-futura text-sm sm:text-base text-[#C5BCB3] leading-relaxed mb-8">
                From high-density residential societies to expansive commercial floorplates and institutional healthcare facilities, GJ Buildcon delivers turnkey RCC structural frameworks. Backed by experienced on-site tradesmen and dedicated supervisory crews, projects progress with structural rigor from initial ground-breaking through structural completion.
              </p>

              {/* Typologies Architectural List */}
              <div className="space-y-4 pt-4 border-t border-[#2D2622]">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#2D2622]/60 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Residential Societies &amp; Townships
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    RCC Structural Frames &amp; Masonry
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#2D2622]/60 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Commercial Complexes &amp; Floorplates
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    Large-Span Column Layouts
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Institutional Campuses, Schools &amp; Hospitals
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    Civic Infrastructure
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Architectural Visual Container with Crosshairs */}
            <div className="mt-8 pt-6 border-t border-[#2D2622]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm border border-[#2D2622] bg-[#12100E] group/img">
                <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>
                <div className="absolute top-2 right-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>
                
                <div ref={image1Ref} className="relative w-full h-[115%] -top-[7.5%] will-change-transform">
                  <Image
                    src="/images/capabilities/structural-foundation-concept.webp"
                    alt="Monolithic reinforced concrete superstructure and foundation grid under construction"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                </div>
                {/* Architectural Caption Metadata */}
                <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-3.5 py-2 flex items-center justify-between font-monument text-[9px] text-[#C5BCB3] uppercase tracking-wider z-10">
                  <span>Fig. 3.1 // RCC Framework Execution</span>
                  <span className="text-[#8F857B]">SPECIFICATION // PUNE STRUCTURAL DOSSIER</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="/capabilities"
                  className="group inline-flex items-center gap-2 font-monument text-[11px] uppercase tracking-[0.2em] text-[#FFFFFF] hover:text-[#C2A284] transition-colors"
                >
                  <span className="relative">
                    Explore Civil Specifications
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#2D2622] group-hover:bg-[#C2A284] transition-colors" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#C2A284] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="font-monument text-[9px] text-[#8F857B] uppercase tracking-wider">
                  MULTI-CATEGORY TRACK RECORD
                </span>
              </div>
            </div>
          </div>

          {/* Panel 02: Deep Foundation & Piling Solutions */}
          <div
            ref={panel2Ref}
            className="bg-[#181512] p-8 sm:p-12 flex flex-col justify-between will-change-transform group"
          >
            <div>
              {/* Technical Indicator */}
              <div className="flex items-center justify-between font-monument text-[10px] text-[#C2A284] uppercase tracking-[0.18em] mb-4 pb-3 border-b border-[#2D2622]">
                <span>02 // SUBTERRANEAN &amp; GEOTECHNICAL</span>
                <span className="text-[#8F857B]">BELOW-GRADE</span>
              </div>

              {/* Title & Editorial Description */}
              <h3 className="font-bourbon text-2xl sm:text-3xl lg:text-4xl uppercase leading-[1.05] text-[#FFFFFF] mb-4">
                Deep Foundation &amp; Piling Solutions
              </h3>
              <p className="font-futura text-sm sm:text-base text-[#C5BCB3] leading-relaxed mb-8">
                Sub-surface stability dictates structural permanence. Deploying specialized heavy rotary drilling rigs and crawler equipment, we engineer cast-in-situ bored piles, auger piling, and mobile foundation solutions into challenging Deccan basalt strata across Maharashtra.
              </p>

              {/* Methodologies Architectural List */}
              <div className="space-y-4 pt-4 border-t border-[#2D2622]">
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#2D2622]/60 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Heavy Rotary Augur Piling
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    Hard Deccan Basalt Socketing
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 pb-3 border-b border-[#2D2622]/60 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Tractor-Mounted Piling Units
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    Constrained Site Accessibility
                  </span>
                </motion.div>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 cursor-default"
                >
                  <span className="font-monument text-xs uppercase text-[#FFFFFF] tracking-wide">
                    Tripod &amp; Bored Cast-in-Situ Systems
                  </span>
                  <span className="font-futura text-xs text-[#8F857B] uppercase">
                    Low-Vibration Urban Foundation
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Architectural Visual Container with Crosshairs */}
            <div className="mt-8 pt-6 border-t border-[#2D2622]">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-sm border border-[#2D2622] bg-[#12100E] group/img">
                <div className="absolute top-2 left-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>
                <div className="absolute top-2 right-2 z-20 font-mono text-[10px] text-[#C2A284]/70 select-none">+</div>

                <div ref={image2Ref} className="relative w-full h-[115%] -top-[7.5%] will-change-transform">
                  <Image
                    src="/images/capabilities/foundation-construction-process.webp"
                    alt="Deep foundation piling operation with civil engineers, rebar pile cage and crane support on site"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover/img:scale-105"
                  />
                </div>
                {/* Architectural Caption Metadata */}
                <div className="absolute bottom-0 inset-x-0 bg-[#12100E]/90 backdrop-blur-sm border-t border-[#2D2622] px-3.5 py-2 flex items-center justify-between font-monument text-[9px] text-[#C5BCB3] uppercase tracking-wider z-10">
                  <span>Fig. 3.2 // Piling Operations &amp; Rigging</span>
                  <span className="text-[#8F857B]">SPECIFICATION // BASALT DRILLING RIG</span>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 flex items-center justify-between">
                <Link
                  href="/capabilities"
                  className="group inline-flex items-center gap-2 font-monument text-[11px] uppercase tracking-[0.2em] text-[#FFFFFF] hover:text-[#C2A284] transition-colors"
                >
                  <span className="relative">
                    Explore Piling Fleet &amp; Methods
                    <span className="absolute left-0 -bottom-0.5 h-[1px] w-full bg-[#2D2622] group-hover:bg-[#C2A284] transition-colors" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-[#C2A284] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="font-monument text-[9px] text-[#8F857B] uppercase tracking-wider">
                  HEAVY ROTARY PILING
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

