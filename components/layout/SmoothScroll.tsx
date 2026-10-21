"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Respect user's reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
    });

    // Synchronize Lenis with GSAP ScrollTrigger (from Heron AI App pattern)
    lenis.on("scroll", ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // Expose window inspection references for runtime analysis
    if (typeof window !== "undefined") {
      (window as unknown as { __lenis: Lenis }).__lenis = lenis;
      (window as unknown as { __gsap: typeof gsap }).__gsap = gsap;
      (window as unknown as { __ScrollTrigger: typeof ScrollTrigger }).__ScrollTrigger = ScrollTrigger;
    }

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (typeof window !== "undefined") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
        delete (window as unknown as { __gsap?: typeof gsap }).__gsap;
        delete (window as unknown as { __ScrollTrigger?: typeof ScrollTrigger }).__ScrollTrigger;
      }
    };
  }, []);

  return <>{children}</>;
};
