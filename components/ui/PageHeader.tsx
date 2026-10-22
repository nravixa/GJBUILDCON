"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
}) => {
  const { theme, isMounted } = useTheme();
  const isLight = isMounted && theme === "light";

  return (
    <section
      aria-label={title}
      className={`relative border-b overflow-hidden py-16 sm:py-20 lg:py-24 transition-colors duration-500 ${
        isLight
          ? "border-[#DCD7CD] bg-[#ECE8E0] text-[#191B1F]"
          : "border-[#2D2622] bg-[#161311] text-[#FFFFFF]"
      }`}
    >
      {/* Background Architectural Drafting Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line
            x1="0"
            y1="100%"
            x2="100%"
            y2="0"
            stroke={isLight ? "#191B1F" : "#C2A284"}
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
          <line
            x1="20%"
            y1="0"
            x2="20%"
            y2="100%"
            stroke={isLight ? "#191B1F" : "#C2A284"}
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
          <line
            x1="80%"
            y1="0"
            x2="80%"
            y2="100%"
            stroke={isLight ? "#191B1F" : "#C2A284"}
            strokeWidth="0.5"
            strokeDasharray="4 8"
          />
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1536px] px-6 sm:px-10 lg:px-16">
        {/* Breadcrumbs Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 font-sans text-xs uppercase tracking-[0.16em]">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <li key={idx} className="flex items-center gap-2">
                  {crumb.href && !isLast ? (
                    <Link
                      href={crumb.href}
                      className="text-[#A89F95] hover:text-[#C2A284] transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#C2A284] font-semibold">
                      {crumb.label}
                    </span>
                  )}
                  {!isLast && (
                    <ChevronRight className="h-3 w-3 text-[#78716A]" />
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Badge Eyebrow */}
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C2A284]/30 bg-[#C2A284]/10 px-3.5 py-1 mb-4 font-sans text-xs uppercase tracking-[0.18em] font-semibold text-[#C2A284]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C2A284] animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* Monumental Page Title */}
        <h1 className="font-bourbon text-3xl sm:text-5xl lg:text-6xl uppercase leading-[1.12] tracking-tight font-extrabold max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 font-sans text-base sm:text-lg text-[#C5BCB3] max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};
