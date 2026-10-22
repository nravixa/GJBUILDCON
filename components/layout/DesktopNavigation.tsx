"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { primaryNavigation } from "@/data/navigation";

export const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary Desktop Navigation"
      className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-6 shrink-0"
    >
      {primaryNavigation.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "group font-sans text-[11px] xl:text-[12px] 2xl:text-[13px] uppercase tracking-[0.08em] xl:tracking-[0.11em] font-medium transition-colors duration-200 py-1.5 px-0.5 relative whitespace-nowrap",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284] rounded-sm",
              isActive
                ? "text-[#C2A284] font-semibold"
                : "text-[#D4CDC5] hover:text-[#FFFFFF]"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <span>{item.label}</span>
            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] rounded-full transition-all duration-300 pointer-events-none",
                isActive
                  ? "w-full bg-[#C2A284] shadow-[0_0_6px_rgba(194,162,132,0.5)]"
                  : "w-0 bg-[#C2A284]/60 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};

