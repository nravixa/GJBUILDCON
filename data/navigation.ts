import { NavItem } from "@/types";

export const primaryNavigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Executive overview & structural credentials",
  },
  {
    label: "About Us",
    href: "/about",
    description: "Heritage, founder narrative & engineering values",
  },
  {
    label: "Our Services",
    href: "/services-projects",
    badge: "Dual Showcase",
    description: "Civil construction, rotary piling & landmark projects",
  },
  {
    label: "Why Choose Us",
    href: "/why-choose-us",
    description: "The 6 pillars of GJ Buildcon engineering advantage",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Direct consultation terminal & verified contact",
  },
];

export const footerNavigation: { group: string; items: NavItem[] }[] = [
  {
    group: "Pages",
    items: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Services", href: "/services-projects" },
      { label: "Why Choose Us", href: "/why-choose-us" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    group: "Services & Fleet",
    items: [
      { label: "Residential Civil Towers", href: "/services-projects#civil-residential" },
      { label: "Commercial Floorplates", href: "/services-projects#civil-commercial" },
      { label: "Institutional & Hospitals", href: "/services-projects#civil-institutional" },
      { label: "Augur Rotary Piling (CFA)", href: "/services-projects#piling-augur" },
      { label: "Tripod Infill Piling", href: "/services-projects#piling-tripod" },
      { label: "Heavy Fleet (MAIT & SANY)", href: "/services-projects#fleet" },
      { label: "Completed Projects Gallery", href: "/services-projects#projects" },
    ],
  },
  {
    group: "Direct Connect",
    items: [
      { label: "Direct Phone: +91 91687 77272", href: "tel:+919168777272" },
      { label: "WhatsApp: +91 91687 77272", href: "https://wa.me/919168777272" },
      { label: "Email: gjconstruction111@gmail.com", href: "mailto:gjconstruction111@gmail.com" },
      { label: "Consultation Terminal", href: "/contact" },
      { label: "Pune HQ: Pimple Saudagar", href: "/contact#map" },
    ],
  },
];


