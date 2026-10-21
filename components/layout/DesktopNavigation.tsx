"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const lenvalNav = [
  { label: "About Us", href: "/#thesis" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#enquiry" },
];

export const DesktopNavigation: React.FC = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary Desktop Navigation"
      className="hidden lg:flex items-center gap-6 xl:gap-8"
    >
      {lenvalNav.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "font-sans text-xs sm:text-[13px] uppercase tracking-[0.12em] font-medium transition-colors duration-300 py-2 relative",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284]",
              isActive
                ? "text-[#FFFFFF] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#FFFFFF]"
                : "text-[#D4CDC5] hover:text-[#FFFFFF]"
            )}
            aria-current={isActive ? "page" : undefined}
          >
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};
