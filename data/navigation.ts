import { NavItem } from "@/types";

export const primaryNavigation: NavItem[] = [
  {
    label: "Overview",
    href: "/",
    description: "Executive summary & operational scale",
  },
  {
    label: "Capabilities",
    href: "/capabilities",
    badge: "Dual Vertical",
    description: "Civil construction & deep foundation piling",
  },
  {
    label: "Heavy Fleet",
    href: "/#fleet",
    badge: "Rotary",
    description: "Hydraulic rotary drilling & mobile crane units",
  },
  {
    label: "Heritage",
    href: "/#heritage",
    description: "2008–2025 leadership & milestone timeline",
  },
  {
    label: "Projects",
    href: "/#projects",
    badge: "Pipeline",
    description: "Extensive Pune structural footprint & typologies",
  },
  {
    label: "Enquiry",
    href: "/#enquiry",
    description: "Consultation terminal & direct contact",
  },
];

export const footerNavigation: { group: string; items: NavItem[] }[] = [
  {
    group: "Capabilities",
    items: [
      { label: "Residential Civil Works", href: "/capabilities#civil-residential" },
      { label: "Commercial Floorplates", href: "/capabilities#civil-commercial" },
      { label: "Institutional & Hospitals", href: "/capabilities#civil-institutional" },
      { label: "Augur Foundation Piling", href: "/capabilities#piling-augur" },
      { label: "Tripod & Urban Piling", href: "/capabilities#piling-tripod" },
    ],
  },
  {
    group: "Company",
    items: [
      { label: "Heritage Timeline (2008–2025)", href: "/#heritage" },
      { label: "Heavy Rotary Fleet", href: "/capabilities#fleet" },
      { label: "Regional Sector Engagements", href: "/#partners" },
      { label: "Pune Regional Footprint", href: "/#projects" },
    ],
  },
  {
    group: "Direct Connect",
    items: [
      { label: "Direct Phone: +91 91687 77272", href: "tel:+919168777272" },
      { label: "WhatsApp: +91 91687 77272", href: "https://wa.me/919168777272" },
      { label: "Email: gjconstruction111@gmail.com", href: "mailto:gjconstruction111@gmail.com" },
      { label: "Consultation Terminal", href: "/#enquiry" },
    ],
  },
];
