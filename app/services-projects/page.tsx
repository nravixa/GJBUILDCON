import React from "react";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ServicesProjectsView } from "@/components/sections/ServicesProjectsView";

export const metadata: Metadata = {
  title: "Our Services | Civil Construction, Piling & Landmark Gallery",
  description:
    "Explore GJ Buildcon's dual-vertical civil construction and deep foundation piling services alongside our built landmark projects across Pune, PCMC, and Maharashtra.",
  keywords: [
    "GJ Buildcon Services",
    "GJ Buildcon Projects",
    "Civil Construction Pune",
    "Piling Services Pune",
    "Augur Rotary Piling",
    "Residential Towers Civil Contractor",
    "Commercial Projects Pune",
    "Hydraulic Rotary Piling Fleet",
  ],
  alternates: {
    canonical: "/services-projects",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://gjbuildcon.com/services-projects",
    title: "Our Services | GJ Buildcon — Civil Construction & Rotary Piling",
    description:
      "Comprehensive civil construction, deep foundation rotary piling, and landmark project gallery by GJ Buildcon across Pune and Western Maharashtra.",
    siteName: "GJ Buildcon",
    images: [
      {
        url: "/images/hero/hero-foundation-engineering.webp",
        width: 1200,
        height: 630,
        alt: "GJ Buildcon Heavy Engineering, Rotary Piling Fleet & Landmark Projects",
      },
    ],
  },
};

export default function ServicesProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#12100E] text-[#FFFFFF] selection:bg-[#C2A284]/30 selection:text-[#FFFFFF]">
      <SiteHeader />

      <main className="flex-1">
        <ServicesProjectsView />
      </main>

      <SiteFooter />
    </div>
  );
}
