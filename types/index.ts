/**
 * Core type definitions for GJ Buildcon application data contracts
 */

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  description?: string;
}

export interface MetricStat {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  suffix?: string;
  verified: boolean;
}

export interface CapabilityItem {
  id: string;
  vertical: "civil" | "piling";
  title: string;
  subtitle: string;
  description: string;
  specs?: string[];
  iconName?: string;
}

export interface FleetRig {
  id: string;
  name: string;
  make: "MAIT" | "SANY" | "Hydra";
  quantity?: number;
  badge?: string;
  category: "Hydraulic Rotary Rig" | "Mobile Heavy Crane" | "Continuous Flight Auger";
  torqueCapacity?: string;
  maxDrillingDepth?: string;
  boreholeDiameter?: string;
  description: string;
  ownershipModel?: string;
}

export interface ProjectSummary {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Institutional" | "Temples" | "Geotechnical";
  location: string;
  sqft?: string;
  year?: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  client?: string;
  summary: string;
  isConceptDemo: boolean;
}

export interface PartnerDeveloper {
  id: string;
  name: string;
  relationship: string;
  verified: boolean;
}

export interface CompanyMetadata {
  legalName: string;
  brandName: string;
  tagline: string;
  foundedYear: number;
  founderName: string;
  experienceYears: string;
  deliveredVolume: string;
  workforceCount: string;
  fleetCount: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    locality: string;
    city: string;
    pincode: string;
    state: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}
