"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

export const ThesisSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const imageFrameRef = useRef<HTMLDivElement>(null);
  const narrativeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });

      if (headerRef.current) {
        tl.fromTo(
          headerRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power2.out" },
          0
        );
      }

      if (imageFrameRef.current) {
        tl.fromTo(
          imageFrameRef.current,
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 1.1, ease: "power3.out" },
          0.15
        );
      }

      if (narrativeRef.current) {
        tl.fromTo(
          narrativeRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.out" },
          0.25
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="thesis"
      aria-label="Chapter 01: About GJ Buildcon & The Engineering Thesis"
      className="relative border-b border-[#2D2622] bg-[#12100E] py-24 sm:py-32 lg:py-40 text-[#FFFFFF] overflow-hidden"
    >
      {/* Architectural Blueprint Vector Wireframe Sketches in Background */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="#C5BCB3" strokeWidth="0.5" />
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#C5BCB3" strokeWidth="0.5" strokeDasharray="4 8" />
          <circle cx="85%" cy="30%" r="180" stroke="#C5BCB3" strokeWidth="0.5" fill="none" strokeDasharray="3 6" />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        
        {/* Eyebrow Header */}
        <div ref={headerRef} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12 sm:pb-16 border-b border-[#2D2622]/80">
          <div>
            <div className="font-sans text-xs uppercase tracking-wider font-semibold text-[#C2A284] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C2A284]" />
              <span>ABOUT GJ BUILDCON // OPERATIONAL STANCE</span>
            </div>
            <h2 className="mt-3 font-bourbon text-3xl sm:text-4xl lg:text-5xl uppercase leading-[1.15] text-[#FFFFFF] font-bold tracking-tight">
              The Engineering Thesis
            </h2>
          </div>
          <div className="font-sans text-xs uppercase tracking-wider font-semibold text-[#C5BCB3]">
            WESTERN MAHARASHTRA • FOUNDATION TO SUPERSTRUCTURE
          </div>
        </div>

        {/* Editorial 2-Column Split: Framed Visual + Manifesto */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Framed Architectural Engineering Visual with Crosshairs */}
          <div ref={imageFrameRef} className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-[#2D2622] bg-[#161311] group">
              
              {/* Technical Architectural Corner Crosshairs */}
              <div className="absolute top-2 left-2 z-20 font-mono text-xs text-[#C2A284]/80 select-none">+</div>
              <div className="absolute top-2 right-2 z-20 font-mono text-xs text-[#C2A284]/80 select-none">+</div>
              <div className="absolute bottom-2 left-2 z-20 font-mono text-xs text-[#C2A284]/80 select-none">+</div>
              <div className="absolute bottom-2 right-2 z-20 font-mono text-xs text-[#C2A284]/80 select-none">+</div>

              <Image
                src="/images/capabilities/structural-foundation-concept.webp"
                alt="Monolithic reinforced concrete superstructure and structural framework under construction in Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center brightness-[0.8] contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-black/20" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-20 rounded border border-[#2D2622] bg-[#161311]/90 backdrop-blur-md p-3">
                <div className="font-sans text-xs uppercase tracking-wider font-semibold text-[#C2A284]">
                  STRUCTURAL MASTERY
                </div>
                <div className="mt-1 font-sans text-xs text-[#E2DDD5] leading-normal font-normal">
                  Monolithic reinforced concrete framework &amp; structural execution across Pune.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Lenval Monumental Manifesto & Narrative */}
          <div ref={narrativeRef} className="lg:col-span-7 flex flex-col justify-center">
            <blockquote className="font-bourbon text-2xl sm:text-3xl lg:text-4xl leading-[1.25] text-[#FFFFFF] font-semibold tracking-normal border-none p-0 m-0 uppercase">
              &ldquo;For over a decade, GJ Buildcon has engineered premier residential towers, commercial landmarks, and critical civil infrastructure across Pune with uncompromising structural strength.&rdquo;
            </blockquote>

            <p className="mt-8 font-sans text-base sm:text-lg text-[#E2DDD5] leading-relaxed font-normal">
              Founded by Mr. Umesh Gatkal, our firm delivers end-to-end building construction—from precision concrete superstructures to integrated deep foundation support. By deploying specialized civil machinery, experienced engineering crews, and stringent quality control, we build resilient landmarks that define Pune&apos;s urban skyline.
            </p>

            {/* Editorial Metadata Badges */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-8 border-t border-[#2D2622]">
              <div>
                <span className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#C5BCB3]">
                  PRACTICE ESTABLISHED
                </span>
                <span className="mt-1 block font-bourbon text-xl font-bold text-[#FFFFFF]">
                  2014
                </span>
              </div>
              <div>
                <span className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#C5BCB3]">
                  PROJECT FOOTPRINT
                </span>
                <span className="mt-1 block font-bourbon text-xl font-bold text-[#FFFFFF]">
                  100+ SITES
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block font-sans text-xs uppercase tracking-wider font-semibold text-[#C5BCB3]">
                  ENGINEERING REACH
                </span>
                <span className="mt-1 block font-bourbon text-xl font-bold text-[#C2A284]">
                  PMR REGION
                </span>
              </div>
            </div>

            {/* Editorial Learn More Link */}
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 font-sans text-xs sm:text-[13px] uppercase tracking-wider font-semibold text-[#FFFFFF] hover:text-[#C2A284] transition-colors"
              >
                <span className="relative">
                  LEARN MORE ABOUT OUR PRACTICE
                  <span className="absolute left-0 -bottom-1 h-[1px] w-full bg-[#2D2622] group-hover:bg-[#C2A284] transition-colors" />
                </span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C2A284]" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

