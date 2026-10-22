"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Phone, ArrowUpRight } from "lucide-react";
import { primaryNavigation } from "@/data/navigation";
import { companyData } from "@/data/company";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Auto-close on route change
  const prevPathname = useRef(pathname);
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      prevPathname.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 flex lg:hidden"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#121417]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Lenval-Inspired Architectural Slide Drawer */}
      <div
        ref={drawerRef}
        className="relative ml-auto flex h-full w-[88%] max-w-sm flex-col justify-between border-l border-[#2D2622] bg-[#12100E] p-6 sm:p-8 shadow-2xl text-[#FFFFFF] animate-fadeIn"
      >
        <div>
          {/* Header with Logo */}
          <div className="flex items-center justify-between border-b border-[#2D2622] pb-5">
            <Link
              href="/"
              onClick={onClose}
              className="flex items-center gap-3 focus-visible:outline-none group"
              aria-label="GJ Buildcon Home"
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-[#3E342B]/80 bg-[#161311] shadow-sm group-hover:border-[#C2A284] transition-colors">
                <Image
                  src="/images/hero/logo.jpeg"
                  alt="GJ Buildcon Official Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-bourbon text-sm tracking-[0.14em] uppercase text-[#FFFFFF] group-hover:text-[#C5BCB3] transition-colors font-bold whitespace-nowrap">
                  GJ BUILDCON
                </span>
                <span className="font-sans text-[10px] tracking-[0.12em] uppercase font-semibold text-[#C5BCB3] mt-0.5 whitespace-nowrap">
                  PUNE &amp; MAHARASHTRA
                </span>
              </div>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle showLabel={false} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                aria-label="Close mobile navigation menu"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2D2622] bg-[#181512] text-[#FFFFFF] hover:border-[#C2A284] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C2A284]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Monumental Links List */}
          <nav className="mt-6 flex flex-col space-y-2" aria-label="Mobile Routes">
            {primaryNavigation.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`group flex items-center justify-between py-3 border-b border-[#2D2622]/60 font-sans text-sm sm:text-base uppercase tracking-[0.08em] font-semibold transition-colors ${
                    isActive
                      ? "text-[#C2A284]"
                      : "text-[#D4CDC5] hover:text-[#FFFFFF]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <div className="flex items-center gap-2.5">
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#C2A284]" />}
                    <span>{item.label}</span>
                  </div>
                  <ArrowUpRight className={`h-4 w-4 transition-all ${isActive ? "text-[#C2A284] opacity-100" : "opacity-40 group-hover:opacity-100"}`} />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-[#2D2622] pt-6 flex flex-col gap-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded-full border border-[#2D2622] bg-[#181512] hover:bg-[#221D18] hover:border-[#C2A284]/60 py-3 font-sans text-xs uppercase tracking-wider font-semibold text-[#FFFFFF] transition-all"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span>Let&apos;s Talk</span>
          </Link>

          <a
            href={`tel:${companyData.phone}`}
            className="flex items-center justify-center gap-2 rounded-full border border-[#2D2622] bg-transparent py-2.5 font-sans text-xs uppercase tracking-wider font-semibold text-[#D4CDC5] hover:text-[#FFFFFF] hover:border-[#C5BCB3] transition-colors"
          >
            <Phone className="h-3.5 w-3.5 text-[#C2A284]" />
            <span>Call: {companyData.phoneDisplay}</span>
          </a>

          <div className="text-[10px] font-sans uppercase tracking-wider text-[#A89F95] text-center pt-1">
            PUNE &amp; MAHARASHTRA // 18.5986&deg; N, 73.7978&deg; E
          </div>
        </div>
      </div>
    </div>
  );
};
