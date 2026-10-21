import { CapabilityItem, FleetRig, PartnerDeveloper } from "@/types";

export const capabilitiesData: CapabilityItem[] = [
  {
    id: "civil-residential",
    vertical: "civil",
    title: "Residential Towers & Societies",
    subtitle: "High-density reinforced concrete residential complexes",
    description:
      "Precision execution of modern multi-story housing societies and luxury residential towers with uncompromising structural durability and spatial planning.",
    specs: ["RCC Framework", "Earthquake-Resistant Design", "Turnkey Finishing", "Pre-Cast Coordination"],
  },
  {
    id: "civil-commercial",
    vertical: "civil",
    title: "Commercial & Corporate Parks",
    subtitle: "Scalable commercial floorplates and retail infrastructure",
    description:
      "Constructing functional, modern commercial complexes designed for corporate scalability, heavy floor-load capacity, and durable architectural facades.",
    specs: ["High-Span Floorplates", "Corporate Safety Norms", "HVAC & Electrical Shafting", "Acoustic Insulation"],
  },
  {
    id: "civil-institutional",
    vertical: "civil",
    title: "Healthcare & Educational Campuses",
    subtitle: "Specialized design and durable public institutional works",
    description:
      "Specialized engineering for hospitals requiring medical-gas shafting and vibration resistance, as well as educational campuses built for high-volume pedestrian safety.",
    specs: ["Medical Facility Compliance", "Safe Ingress/Egress", "Acoustic Engineering", "Emergency Power Shafts"],
  },
  {
    id: "piling-augur",
    vertical: "piling",
    title: "Augur Rotary Piling (CFA / Large Diameter)",
    subtitle: "Deep heavy foundation engineering for high-rise loads",
    description:
      "High-precision deep drilling into hard basalt strata utilizing heavy hydraulic rotary rigs to ensure bedrock anchoring for high-rise towers.",
    specs: ["Borehole Diameters: 600mm–1500mm", "Hard Basalt Penetration", "Zero Vibration to Adjacent Plots", "Rapid Cycle Execution"],
  },
  {
    id: "piling-tripod",
    vertical: "piling",
    title: "Tripod & Bored Cast-In-Situ Piling",
    subtitle: "Economical foundation stability across varying soil profiles",
    description:
      "Proven foundation stabilization for medium-load structures and challenging ground profiles where spatial constraints prevent large rig entry.",
    specs: ["Economical Per-Meter Cost", "Varying Soil Formations", "Cast-In-Situ Rebar Cages", "Controlled Slurry Displacement"],
  },
  {
    id: "piling-tractor",
    vertical: "piling",
    title: "Tractor & Mobile Piling Units",
    subtitle: "Fast-turnaround agile urban foundation solutions",
    description:
      "High mobility piling units engineered for constrained urban residential infill sites requiring rapid repositioning and minimal site footprint.",
    specs: ["Narrow Access Sites", "Fast Turnaround Time", "Low Mobilization Cost", "Ideal for Plinth Shoring"],
  },
];

export const fleetData: FleetRig[] = [
  {
    id: "mait-rigs",
    name: "MAIT Hydraulic Rotary Rigs",
    make: "MAIT",
    badge: "Rotary Rig",
    category: "Hydraulic Rotary Rig",
    ownershipModel: "Operational Deployment",
    description:
      "Heavy hydraulic rotary rigs deployed for deep foundation drilling and bedrock penetration across Pune's volcanic basalt formations.",
  },
  {
    id: "sany-rigs",
    name: "SANY Heavy Rotary Piling Rigs",
    make: "SANY",
    badge: "Crawler Rig",
    category: "Hydraulic Rotary Rig",
    ownershipModel: "Operational Deployment",
    description:
      "Heavy hydraulic foundation units operating on continuous drilling cycles for large-scale structural piles and reinforced cast-in-situ works.",
  },
  {
    id: "hydra-cranes",
    name: "Hydra Mobile Cranes & Support Units",
    make: "Hydra",
    badge: "Support Fleet",
    category: "Mobile Heavy Crane",
    ownershipModel: "Operational Support",
    description:
      "Mobile site cranes deployed for heavy rebar cage placement, tremie pipe handling, and on-site material rigging to support deep foundation drilling cycles.",
  },
];

export const partnerDevelopers: PartnerDeveloper[] = [
  { id: "res-societies", name: "Residential High-Rise Societies", relationship: "RCC Frame Contracting & Basement Piling", verified: false },
  { id: "inst-campuses", name: "Educational & Institutional Trusts", relationship: "Campus Buildings & Structural Frameworks", verified: false },
  { id: "comm-floorplates", name: "Commercial & Corporate Floorplates", relationship: "Multi-Storey Office & Retail Civil Works", verified: false },
  { id: "healthcare-wings", name: "Healthcare & Diagnostic Facilities", relationship: "Specialized Structural & MEP Shaft Execution", verified: false },
  { id: "regional-dev", name: "Regional Real Estate Developers", relationship: "Turnkey Civil Superstructure Execution", verified: false },
  { id: "urban-redev", name: "Urban Housing Redevelopment", relationship: "Constrained Infill Piling & Podium Casting", verified: false },
  { id: "geotech-sub", name: "Deep Foundation Subcontracting", relationship: "Hard Basalt Socketing & Cast-in-Situ Piling", verified: false },
  { id: "infra-works", name: "Civic & Infrastructure Works", relationship: "Retaining Structures & Ground Stabilization", verified: false },
  { id: "private-commercial", name: "Private Commercial Developments", relationship: "Comprehensive Turnkey Site Delivery", verified: false },
];
