export interface DetailedProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Institutional" | "Piling & Geotechnical";
  location: string;
  corridor: string;
  sqft?: string;
  pilingSpecs?: string;
  status: "Completed" | "Ongoing" | "Upcoming";
  year: string;
  client?: string;
  image: string;
  summary: string;
  scope: string[];
  keyFeatures: string[];
}

export const projectCategories = [
  "All",
  "Residential",
  "Commercial",
  "Institutional",
  "Piling & Geotechnical",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectsData: DetailedProject[] = [
  {
    id: "pimple-saudagar-residency",
    title: "High-Rise Residential Society Phase I & II",
    category: "Residential",
    location: "Pimple Saudagar, Pune",
    corridor: "PCMC Residential Hub",
    sqft: "185,000 sq.ft Built-Up",
    status: "Completed",
    year: "2023–2024",
    client: "Prominent PCMC Developer Group",
    image: "/images/capabilities/res_proj_1.png",
    summary:
      "Comprehensive multi-tower residential complex featuring earthquake-resistant RCC frame, two-level podium slab, automated basement drainage, and architectural facade finishing.",
    scope: [
      "Turnkey RCC Structure Execution",
      "Basalt Rock Socketed Foundation Piles",
      "Post-Tensioned Podium Slab Casting",
      "Comprehensive Masonry & External Plastering",
    ],
    keyFeatures: [
      "Zero honeycombing monolithic concrete finish",
      "Seismic Zone III engineered compliance",
      "14-day rapid floor cycle achieved",
      "Integrated rainwater harvesting shafts",
    ],
  },
  {
    id: "baner-commercial-hub",
    title: "Apex Corporate Floorplates & Commercial Hub",
    category: "Commercial",
    location: "Baner–Balewadi Corridor, Pune",
    corridor: "West Pune IT/Corporate Corridor",
    sqft: "120,000 sq.ft Commercial Space",
    status: "Completed",
    year: "2023",
    client: "Regional Commercial Holdings",
    image: "/images/capabilities/comm_spaces_2.png",
    summary:
      "Modern multi-storey commercial complex designed for corporate scalability, high-span open floorplates, high-load structural columns, and synchronized MEP shafting.",
    scope: [
      "Large-Span Column Grid RCC Structure",
      "Heavy Live-Load Floor Capacity (5.0 kN/sq.m)",
      "Dedicated Fire & HVAC Vertical Ducting",
      "Double-Basement Retention System",
    ],
    keyFeatures: [
      "Column-free flexible office spaces",
      "Integrated acoustic buffer zones",
      "Pre-engineered structural glazing anchorage",
      "Fast-track delivery 30 days ahead of schedule",
    ],
  },
  {
    id: "pimple-nilakh-residential-towers",
    title: "Premium Riverfront Luxury Apartments",
    category: "Residential",
    location: "Pimple Nilakh, Pune",
    corridor: "Mula River Promenade",
    sqft: "210,000 sq.ft Residential Development",
    status: "Ongoing",
    year: "2024–2025",
    client: "Luxury Living Ventures",
    image: "/images/capabilities/swiper_9.png",
    summary:
      "Twin 18-storey residential towers rising along the riverfront, requiring deep cantilever retention, water-retaining basement diaphragm walls, and premium turnkey RCC construction.",
    scope: [
      "Deep Excavation Retention & Anchored Shoring",
      "Twin Tower Superstructure RCC Framework",
      "Waterproofing & Podium Landscaping Slabs",
      "Turnkey Plastering and Architectural Detailing",
    ],
    keyFeatures: [
      "High-grade M35/M40 concrete mix designs",
      "Laser-guided slab levelling",
      "Submersible dewatering and sump design",
      "Currently advancing on schedule on 14th floor",
    ],
  },
  {
    id: "ambegaon-healthcare-campus",
    title: "Multispecialty Hospital & Diagnostic Wing",
    category: "Institutional",
    location: "Ambegaon, Pune",
    corridor: "South Pune Civic Zone",
    sqft: "95,000 sq.ft Healthcare Wing",
    status: "Completed",
    year: "2022–2023",
    client: "Healthcare Charitable Trust",
    image: "/images/capabilities/schools_hosp_3.png",
    summary:
      "Specialized healthcare facility engineered with vibration-dampened foundation beds for MRI and linear accelerator suites, medical-gas vertical shafts, and high-volume pedestrian access.",
    scope: [
      "Vibration-Isolated Foundation Slabs",
      "Medical Gas & Radiation Shielded Vaults",
      "Uninterrupted Power Backup Civil Shafts",
      "Ramp & Emergency Ingress/Egress Engineering",
    ],
    keyFeatures: [
      "Strict NABH acoustic & structural compliance",
      "Anti-microbial epoxy-ready floor screeds",
      "Heavy load containment for diagnostic machinery",
      "Durable zero-settlement foundation guarantee",
    ],
  },
  {
    id: "tathawade-logistics-complex",
    title: "High-Span Logistics Park & Heavy Superstructure",
    category: "Commercial",
    location: "Tathawade–Wakad Belt, Pune",
    corridor: "Mumbai–Pune Expressway Feeder",
    sqft: "160,000 sq.ft Warehouse & Offices",
    status: "Ongoing",
    year: "2024–2025",
    client: "National Supply Chain Logistics",
    image: "/images/capabilities/comm_spaces_2.png",
    summary:
      "High-clearance commercial warehouse facility with laser-screed floor slabs, heavy industrial forklift transit endurance, and integrated corporate administration block.",
    scope: [
      "Pre-Engineered Building (PEB) Civil Foundation Footings",
      "Jointless FM2 Toleranced Floor Concrete Slabs",
      "Heavy Truck Ingress Aprons & Loading Docks",
      "Perimeter Drainage and Retention Ponds",
    ],
    keyFeatures: [
      "Abrasion-resistant floor surface hardeners",
      "12-meter clear internal vertical headroom",
      "Accelerated foundation grid delivery",
      "Phase 1 delivered and commissioned",
    ],
  },
  {
    id: "pcmc-civic-infrastructure",
    title: "Civic Transit Substructure & Retaining Earthworks",
    category: "Institutional",
    location: "Pimpri-Chinchwad, Pune",
    corridor: "PCMC Arterial Corridor",
    sqft: "Multi-Level Civil Groundwork",
    status: "Completed",
    year: "2023",
    client: "Civic Municipal Subcontract",
    image: "/images/capabilities/infra_dev_4.png",
    summary:
      "Massive reinforced concrete retaining walls, grade separation structures, and stormwater arterial conduits engineered for high ground-pressure and heavy vehicular loading.",
    scope: [
      "Mass Gravity & Cantilever RCC Retaining Walls",
      "Ground Anchor Stabilization into Basalt Strata",
      "Heavy Earthmoving & Deep Trenching Logistics",
      "Engineered Subsurface Geotextile Filtration",
    ],
    keyFeatures: [
      "Heavy load bearing capacity (IRC Class 70R)",
      "Sulphate-resistant cement concrete mix",
      "Rapid monolithic slip-form wall execution",
      "Zero traffic disruption during key pours",
    ],
  },
  {
    id: "hinjawadi-rotary-piling",
    title: "Hard Basalt Deep Rotary Piling Scheme",
    category: "Piling & Geotechnical",
    location: "Hinjawadi Phase III, Pune",
    corridor: "Deccan Basalt Plateau",
    pilingSpecs: "180 Bored Piles (Dia 900mm–1200mm, Depth 22m)",
    status: "Completed",
    year: "2024",
    client: "IT Park Infrastructure Consortium",
    image: "/images/capabilities/augur_piling_7.png",
    summary:
      "Deep foundation socketing into hard volcanic basalt bedrock using heavy hydraulic rotary rigs (MAIT & SANY). Zero vibration impact on adjacent operational server facilities.",
    scope: [
      "1200mm Diameter CFA Boring into Solid Basalt",
      "Full Depth Rebar Cage Fabrication & Rigging",
      "Tremie Slurry Displacement Concreting",
      "Crosshole Sonic Logging (CSL) Integrity Testing",
    ],
    keyFeatures: [
      "Bedrock penetration up to 24 meters",
      "100% pile integrity test pass rate",
      "Zero groundwater ingress containment",
      "Rig mobilization completed within 48 hours",
    ],
  },
  {
    id: "urban-tripod-piling-pune",
    title: "Constrained Infill Tripod Piling Scheme",
    category: "Piling & Geotechnical",
    location: "Shivajinagar / Model Colony, Pune",
    corridor: "Dense Urban City Core",
    pilingSpecs: "65 Bored Cast-In-Situ Piles (Dia 600mm)",
    status: "Completed",
    year: "2024",
    client: "Urban Redevelopment Society",
    image: "/images/capabilities/tripod_piling_5.png",
    summary:
      "Precision tripod bored cast-in-situ piling conducted within narrow 6-meter lane access and zero plot-setback conditions, preserving structural stability of neighboring century-old heritage properties.",
    scope: [
      "Tripod Winch Rotary Drilling in Confined Space",
      "Vibration-Free Chiselling & Slurry Bailing",
      "Prefabricated Cage Splicing on Constrained Footprint",
      "Plinth Beam Integration and Load Transfer",
    ],
    keyFeatures: [
      "Zero acoustic disturbance during evening hours",
      "Non-destructive seismic vibration monitoring",
      "High axial load capacity per pile unit",
      "Smooth coordination with municipal authorities",
    ],
  },
  {
    id: "ravet-tractor-mobile-piling",
    title: "Rapid Urban Housing Mobile Tractor Piling",
    category: "Piling & Geotechnical",
    location: "Ravet, Pune",
    corridor: "Rapid Urban Expansion Zone",
    pilingSpecs: "95 Foundation Piles (Dia 500mm–750mm)",
    status: "Completed",
    year: "2024",
    client: "Boutique Residential Builder",
    image: "/images/capabilities/tractor_piling_6.png",
    summary:
      "Agile tractor-mounted rotary drilling rigs deployed for speedy foundation stabilization across multi-plot boutique villa and low-rise residential societies.",
    scope: [
      "High-Mobility Tractor Rig Boring",
      "Rapid Plinth Shoring and Soil Retention",
      "Fast Turnaround Concreting Cycles",
      "Direct Foundation Bedrock Grounding",
    ],
    keyFeatures: [
      "Mobilized and rigged in under 3 hours",
      "35% lower mobilization overhead for client",
      "Completed entire 95-pile scheme in 12 working days",
      "Clean site turnover with zero mud spillage",
    ],
  },
];
