"use client";

import React from "react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = "",
  showLabel = false,
}) => {
  const { theme, toggleTheme, isMounted } = useTheme();

  // Prevent hydration mismatch by assuming bright mode (light) until mounted
  const isDark = isMounted ? theme === "dark" : false;

  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      {showLabel && (
        <span className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#C5BCB3] select-none">
          {isDark ? "Dark" : "Light"}
        </span>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
        title={isDark ? "Switch to light theme" : "Switch to dark theme"}
        onClick={toggleTheme}
        className="group relative inline-flex h-[28px] w-[54px] shrink-0 cursor-pointer items-center rounded-full p-[3px] border border-[#2D2622] hover:border-[#C2A284]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C2A284] focus-visible:ring-offset-2 focus-visible:ring-offset-[#12100E] transition-all duration-300 shadow-sm active:scale-95"
      >
        {/* Inner SVG Track with Layered Fluid Waves */}
        <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
          {/* ============================================================== */}
          {/* STATE 1: Sky Cyan / Blue Waves (Light Mode — Knob on Left)    */}
          {/* ============================================================== */}
          <svg
            viewBox="0 0 54 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              isDark ? "opacity-0" : "opacity-100"
            }`}
          >
            <defs>
              {/* Sky Cyan Base Gradient */}
              <linearGradient id="theme-blue-base" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7DD3FC" />
                <stop offset="45%" stopColor="#38BDF8" />
                <stop offset="100%" stopColor="#0284C7" />
              </linearGradient>

              {/* Central Dipping Fluid Wave */}
              <linearGradient id="theme-blue-wave-1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#BAE6FD" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0284C7" stopOpacity="0.9" />
              </linearGradient>

              {/* Lower Sweeping Wave */}
              <linearGradient id="theme-blue-wave-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0369A1" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.3" />
              </linearGradient>

              {/* Subtle Warm Travertine / Sunlight Highlight matching our brand */}
              <radialGradient id="theme-sun-warmth" cx="80%" cy="20%" r="55%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#E0F2FE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base Fill */}
            <rect width="54" height="28" rx="14" fill="url(#theme-blue-base)" />

            {/* Wave Layer 1 — Smooth Curving Organic Crest */}
            <path
              d="M-2,12 C10,6 22,24 38,13 C46,8 52,14 56,12 L56,28 L-2,28 Z"
              fill="url(#theme-blue-wave-1)"
            />

            {/* Wave Layer 2 — Secondary Lower Curving Swoosh */}
            <path
              d="M-2,20 C14,14 30,24 44,18 C50,15 54,22 56,20 L56,28 L-2,28 Z"
              fill="url(#theme-blue-wave-2)"
            />

            {/* Top-Right Soft Sky Glow */}
            <rect width="54" height="28" rx="14" fill="url(#theme-sun-warmth)" />

            {/* Subtle Brand Horizon Hairline / Sheen */}
            <path
              d="M4,3 C18,2 38,3 50,5"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeOpacity="0.4"
            />
          </svg>

          {/* ============================================================== */}
          {/* STATE 2: Luminous Lime / Emerald Waves (Dark Mode — Knob Right)*/}
          {/* ============================================================== */}
          <svg
            viewBox="0 0 54 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`absolute inset-0 h-full w-full transition-opacity duration-500 ease-in-out ${
              isDark ? "opacity-100" : "opacity-0"
            }`}
          >
            <defs>
              {/* Vibrant Lime to Emerald Base Gradient */}
              <linearGradient id="theme-green-base" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#BEF264" />
                <stop offset="40%" stopColor="#84CC16" />
                <stop offset="75%" stopColor="#22C55E" />
                <stop offset="100%" stopColor="#15803D" />
              </linearGradient>

              {/* Central Sweeping Wave */}
              <linearGradient id="theme-green-wave-1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D9F99D" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#16A34A" stopOpacity="0.85" />
              </linearGradient>

              {/* Lower Emerald Contour */}
              <linearGradient id="theme-green-wave-2" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#15803D" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#22C55E" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#A3E635" stopOpacity="0.2" />
              </linearGradient>

              {/* Top-Right Yellow-Gold Ambient Shimmer (matching brand gold) */}
              <radialGradient id="theme-gold-shimmer" cx="75%" cy="25%" r="50%">
                <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.65" />
                <stop offset="50%" stopColor="#BEF264" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Base Fill */}
            <rect width="54" height="28" rx="14" fill="url(#theme-green-base)" />

            {/* Wave Layer 1 — High Crest Fluid Wave */}
            <path
              d="M-2,14 C12,6 26,20 40,11 C48,6 52,14 56,10 L56,28 L-2,28 Z"
              fill="url(#theme-green-wave-1)"
            />

            {/* Wave Layer 2 — Lower Contour Swoop */}
            <path
              d="M-2,22 C12,18 28,26 42,19 C48,16 52,24 56,21 L56,28 L-2,28 Z"
              fill="url(#theme-green-wave-2)"
            />

            {/* Top-Right Shimmer Glow (behind knob) */}
            <rect width="54" height="28" rx="14" fill="url(#theme-gold-shimmer)" />

            {/* Subtle Brand Gold Rim Highlight */}
            <path
              d="M4,3 C18,2 38,3 50,5"
              stroke="#FEF08A"
              strokeWidth="0.75"
              strokeLinecap="round"
              strokeOpacity="0.5"
            />
          </svg>
        </div>

        {/* ============================================================== */}
        {/* Porcelain Sliding Thumb Knob                                   */}
        {/* ============================================================== */}
        <span
          className={`pointer-events-none relative z-10 block h-[22px] w-[22px] rounded-full transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark ? "translate-x-[26px]" : "translate-x-0"
          }`}
          style={{
            background: "linear-gradient(145deg, #FFFFFF 0%, #F1F5F9 100%)",
            boxShadow:
              "0 2px 5px rgba(0, 0, 0, 0.22), 0 1px 2px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.95)",
          }}
        >
          {/* Micro Ambient Depth Ring inside Knob */}
          <span className="absolute inset-0 rounded-full ring-1 ring-black/5" />
        </span>
      </button>
    </div>
  );
};
