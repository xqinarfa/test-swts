export interface ServiceSubItem {
  number?: string;
  title: string;
  desc?: string;
}

export interface ServiceDetailItem {
  id: string;
  code: string;
  title: string;
  sectorId: "marine" | "offshore" | "power-plant" | "process-industry" | "data-center";
  sectorName: string;
  category: string;
  status: "Brochure Certified" | "Specialized Scope" | "Available on Request";
  summary: string;
  highlights: string[];
  subItems?: ServiceSubItem[];
  specifications?: string[];
  applicableAssets?: string[];
}

export interface SectorData {
  id: "marine" | "offshore" | "power-plant" | "process-industry" | "data-center";
  name: string;
  shortName: string;
  tagline: string;
  cardHeadline: string;
  description: string;
  secondaryDescription?: string;
  image: string;
  iconName: "Ship" | "Anchor" | "Zap" | "Factory" | "Server";
  serviceCount: number;
}

export const SERVICES_SECTORS: SectorData[] = [
  {
    id: "marine",
    name: "Marine Services",
    shortName: "Marine",
    tagline: "Comprehensive shipboard engineering, MRO & voyage technical support.",
    cardHeadline:
      "Comprehensive marine engineering, maintenance, repair, and technical support for global vessels.",
    description:
      "SWTS Batam provides comprehensive marine engineering, maintenance, repair, and technical support services for a wide range of vessels, including commercial ships, LNG carriers, oil and chemical tankers, bulk carriers, container vessels, offshore support vessels, dredgers, and offshore production units. Backed by highly skilled engineers and technicians, we are committed to ensuring the safe, reliable, and efficient operation of critical shipboard systems through advanced diagnostic technologies, industry best practices, and verified maritime classification standards.",
    secondaryDescription:
      "Our expertise supports vessel owners, ship managers, offshore operators, and shipyards in maximizing asset performance, minimizing downtime, extending equipment life cycles, and maintaining compliance with international maritime regulations and classification society requirements.",
    image: "/assets/services/marine-services.jpg",
    iconName: "Ship",
    serviceCount: 14,
  },
  {
    id: "offshore",
    name: "Offshore Services",
    shortName: "Offshore",
    tagline: "Engineered solutions for harsh marine environments and production units.",
    cardHeadline:
      "We do not simply provide services, we deliver engineered solutions for offshore assets.",
    description:
      "At SWTS Batam, we do not simply provide services, we deliver solutions. Our offshore engineering capabilities enable us to diagnose complex technical issues, develop effective corrective actions, and implement sustainable solutions that improve operational efficiency, equipment reliability, and long-term asset performance. Whether supporting routine maintenance, emergency repairs, system upgrades, or critical offshore projects, we remain committed to being a trusted partner in solving our customers' most challenging operational and engineering problems.",
    secondaryDescription:
      "With specialized equipment including portable flange facers, high-pressure hot oil flushing skids, and hydraulic bolting tools, we deploy offshore-certified teams directly to rigs, FPSOs, and platforms.",
    image: "/assets/services/offshore-services.jpg",
    iconName: "Anchor",
    serviceCount: 5,
  },
  {
    id: "power-plant",
    name: "Power Plant",
    shortName: "Power Plant",
    tagline: "Turbomachinery, engine overhauls & utility generation maintenance.",
    cardHeadline:
      "Comprehensive power plant engineering, turbomachinery & utility generation solutions.",
    description:
      "At SWTS Batam, we provide comprehensive power plant engineering and maintenance solutions designed to support safe, reliable, and efficient plant operations. Our capabilities cover critical mechanical, electrical, and rotating equipment services, enabling us to support preventive maintenance, corrective repairs, major overhauls, equipment installation, testing, and commissioning. By combining technical expertise, experienced personnel, and practical field solutions, we help our customers improve equipment reliability, minimize unplanned downtime, optimize operational performance, and extend the service life of critical power generation assets.",
    secondaryDescription:
      "From gas engine prime movers to multi-stage steam turbines and Woodward digital control retrofits, our engineers support base-load utilities, IPPs, and co-generation facilities.",
    image: "/assets/services/power-plant.jpg",
    iconName: "Zap",
    serviceCount: 10,
  },
  {
    id: "process-industry",
    name: "Process Industry",
    shortName: "Process",
    tagline: "Turnaround support, rotating equipment & instrumentation reliability.",
    cardHeadline:
      "Ensuring plant continuity, rotating machinery reliability & turnaround engineering.",
    description:
      "At SWTS Batam, we provide comprehensive process industry engineering and maintenance solutions supporting the reliability, efficiency, and continuity of critical plant operations. Our capabilities cover steam turbines, governors and control systems, compressors, pumps and rotating equipment, hydraulic and pneumatic systems, as well as electrical, instrumentation, and automation systems. We support our customers throughout the equipment lifecycle, from inspection, preventive and corrective maintenance to repair, overhaul, installation, alignment, testing, and commissioning. By combining technical expertise, experienced personnel, and practical field solutions, we help process industries minimize unplanned downtime, improve equipment performance, maintain production continuity, and extend the service life of critical plant assets.",
    secondaryDescription:
      "We partner closely with petrochemical, oil refining, pulp & paper, mining, and heavy processing facilities during scheduled turnarounds (TAR) and emergency plant shutdowns.",
    image: "/assets/services/process-industry.jpg",
    iconName: "Factory",
    serviceCount: 5,
  },
  {
    id: "data-center",
    name: "Data Center",
    shortName: "Data Center",
    tagline: "Mission-critical prime movers, standby generation & power resilience.",
    cardHeadline:
      "Mission-critical power resilience, standby prime movers & continuous facility uptime.",
    description:
      "At SWTS Batam, we provide comprehensive data center engineering and maintenance solutions focused on ensuring maximum availability, operational continuity, and reliability of mission-critical infrastructure. Our capabilities cover critical power systems, power management systems, generators, prime movers, fuel systems, cooling systems, mechanical equipment, electrical infrastructure, and facility support systems. We support our customers through preventive and corrective maintenance, generator engine overhauls, prime mover and fuel system overhauls, equipment upgrades, installation, testing, commissioning, and technical support. By combining technical expertise, experienced personnel, and practical field solutions, we help data center operators maintain power resilience, minimize downtime, optimize critical system performance, and ensure continuous operation of mission-critical facilities.",
    secondaryDescription:
      "Engineered for Tier III and Tier IV hyperscale and enterprise facilities demanding strict 99.999% uptime and rapid-start emergency power transition.",
    image: "/assets/services/data-center.jpg",
    iconName: "Server",
    serviceCount: 3,
  },
];

export const SERVICES_CATALOGUE: ServiceDetailItem[] = [
  // -------------------------------------------------------------------------
  // 1. MARINE SERVICES (14 items: a to n)
  // -------------------------------------------------------------------------
  {
    id: "marine-main-aux-engine",
    code: "M-01",
    title: "Main Engine & Auxiliary Engine Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Engine Systems",
    status: "Brochure Certified",
    summary:
      "Comprehensive overhaul, troubleshooting, precision calibration, and scheduled maintenance for 2-stroke and 4-stroke marine propulsion engines and auxiliary diesel generator sets.",
    highlights: [
      "In-situ crankshaft deflection, journal inspection & precision line-boring",
      "Cylinder liner honing, deglazing & calibration up to 800 mm bore",
      "Piston crown, skirt reconditioning & connecting rod bush alignment",
      "Class survey overhaul & 24/7 voyage/anchorage emergency repair attendance",
    ],
    specifications: [
      "Engine Types: 2-Stroke Low Speed & 4-Stroke Medium/High Speed",
      "Applicable Makers: MAN Energy Solutions, Wärtsilä, Yanmar, Daihatsu, Caterpillar, MAK",
      "Compliance: Class Society Rules (Lloyd's Register, DNV, ABS, BV, ClassNK)",
    ],
    applicableAssets: [
      "Container Ships",
      "Bulk Carriers",
      "Crude & Chemical Tankers",
      "LNG / LPG Carriers",
      "Offshore Support Vessels (OSV / AHTS)",
    ],
  },
  {
    id: "marine-governor-services",
    code: "M-02",
    title: "Governor Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Speed & Control",
    status: "Brochure Certified",
    summary:
      "Authorized servicing, test-bench benchmarking, overhaul, and dynamic calibration of marine mechanical-hydraulic and digital electronic engine governors.",
    highlights: [
      "Authorized Woodward, Heinzmann & Regulateurs Europa service standards",
      "Comprehensive disassembly, chemical cleaning & ultrasonic bath inspection",
      "Hydro-mechanical test bench calibration & dynamic droop/speed tuning",
      "Immediate replacement exchange units and genuine emergency spare kits",
    ],
    specifications: [
      "Bench Capacity: Up to 500 Nm actuator output torque",
      "Governor Families: Woodward UG, PGA, SG, 2301A/D; Heinzmann DC, KG; Europa 1100 series",
      "Testing: High-speed precision tachometer & hydraulic reaction measurement",
    ],
  },
  {
    id: "marine-fuel-pump-services",
    code: "M-03",
    title: "Fuel Pump Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Fuel Injection",
    status: "Brochure Certified",
    summary:
      "Precision reconditioning, lapping, barrel & plunger replacement, and high-pressure flow calibration for high-capacity marine fuel injection pumps.",
    highlights: [
      "High-pressure hydrostatic test bench pressure & volumetric delivery validation",
      "Lapping of delivery valves, sealing faces & distributor blocks",
      "Plunger and barrel clearance matching to sub-micron tolerances",
      "Complete compatibility with Heavy Fuel Oil (HFO), MDO, and ultra-low sulfur MGO",
    ],
    specifications: [
      "Pressure Rating: Testing up to 1,800+ bar injection pressures",
      "Makers Supported: Bosch, L'Orange, Woodward Diesel Systems, Yanmar, Daihatsu",
    ],
  },
  {
    id: "marine-hydraulic-services",
    code: "M-04",
    title: "Hydraulic Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Fluid Power",
    status: "Brochure Certified",
    summary:
      "Turnkey hydraulic maintenance, system troubleshooting, steering gear servicing, deck machinery hydraulics, valve remote control, and hydraulic power pack overhauls.",
    highlights: [
      "Marine steering gear ram seals, rotary vane actuators & hunting gear calibration",
      "Cylinder rod re-chroming/HVAF coating and barrel honing up to 8m length",
      "Deck machinery overhauls: anchor windlasses, mooring winches, deck cranes & hatch covers",
      "Proportional valve bench testing, spool lapping & pressure relief recertification",
    ],
    specifications: [
      "Hydrostatic Test Bench: Up to 700 bar testing capability",
      "Flushing Cleanliness: Target ISO 4406 15/13/10 or NAS 1638 Class 6",
    ],
  },
  {
    id: "marine-pump-services",
    code: "M-05",
    title: "Pump Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Rotating Equipment",
    status: "Specialized Scope",
    summary:
      "Specialized 7-stage lifecycle engineering for marine cargo, ballast, bilge, boiler feed, and seawater cooling pumps with dedicated in-house machining and laser alignment.",
    highlights: [
      "Inspection & condition assessment with vibration monitoring and thermal diagnostics",
      "Preventive & corrective maintenance: cleaning, lubrication, adjustment & parts renewal",
      "Complete workshop dismantling, chemical de-scaling & ultrasonic non-destructive testing",
      "Precision reverse-indicator & laser optical alignment to drive motors",
      "Turnkey installation, pipe-strain verification, hydrostatic test & dock/sea trials",
    ],
    subItems: [
      {
        number: "1",
        title: "Pump Inspection & Condition Assessment",
        desc: "Visual inspection, leakage checks, vibration monitoring, temperature measurement, pressure and flow verification, and assessment of major pump components.",
      },
      {
        number: "2",
        title: "Preventive & Corrective Maintenance",
        desc: "Cleaning, lubrication, tightening, adjustment, component replacement, and corrective repairs to maintain pumps in reliable operating condition.",
      },
      {
        number: "3",
        title: "Pump Dismantling & Overhaul",
        desc: "Complete workshop teardown, component cleaning, wear-ring clearance verification, and casing cavitation inspection.",
      },
      {
        number: "4",
        title: "Pump & Motor Alignment",
        desc: "Laser optical shaft alignment to eliminate radial/axial vibration and prevent premature bearing and coupling failure.",
      },
      {
        number: "5",
        title: "Pump Installation & Replacement",
        desc: "Turnkey mechanical installation, foundation leveling, pipe-strain verification, and coupling guard fitting.",
      },
      {
        number: "6",
        title: "Repair & Component Replacement",
        desc: "In-house casing reclamation, shaft reconditioning, impeller dynamic balancing, and mechanical seal fitting.",
      },
      {
        number: "7",
        title: "Testing & Commissioning",
        desc: "Hydrostatic casing testing, electrical load verification, and live flow performance validation during sea/dock trials.",
      },
    ],
    specifications: [
      "Pump Types: Centrifugal, screw, gear, piston, deepwell cargo & submerged ballast pumps",
      "Makers: Shinko, Taiko Kikai, Hamworthy, Framo, Desmi, Allweiler, IMO",
    ],
  },
  {
    id: "marine-turbine-services",
    code: "M-06",
    title: "Turbine Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Turbomachinery",
    status: "Available on Request",
    summary:
      "Inspection, blading examination, rotor dynamic balancing, casing refurbishment, and bearing replacement for marine turbochargers, cargo pump steam turbines, and generator drives.",
    highlights: [
      "Turbocharger nozzle ring, rotor blading & gas casing NDT inspection",
      "Multi-plane high-precision dynamic balancing for high-speed rotors",
      "Journal bearing and thrust collar re-metalling with ASTM B23 white metal",
      "Emergency cartridge exchange and overhaul at Batam anchorage",
    ],
    specifications: [
      "Equipment: ABB, MAN, Mitsubishi MET turbochargers & Coppus/Elliott steam turbines",
      "Balancing: ISO 1940 Grade G2.5 precision",
    ],
  },
  {
    id: "marine-compressor-services",
    code: "M-07",
    title: "Compressor Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Compressed Air",
    status: "Available on Request",
    summary:
      "Scheduled overhaul, valve plate lapping, and reconditioning for high-pressure marine starting air compressors, service air units, and shipboard refrigeration compressors.",
    highlights: [
      "Suction and discharge valve plate lapping, spring testing & seat restoration",
      "Cylinder liner honing, piston ring renewal & gudgeon pin clearance verification",
      "Intercooler/aftercooler ultrasonic cleaning, tube bundling & hydrostatic testing",
      "Capacity delivery testing, relief valve setting & automated safety trip checks",
    ],
    specifications: [
      "Pressure Ranges: Up to 30–40 bar starting air & 7–10 bar service air",
      "Makers: Sperre, Sauer & Sohn, Hatlapa, Hamworthy, Tanabe, Sabroe",
    ],
  },
  {
    id: "marine-propulsion-services",
    code: "M-08",
    title: "Propulsion Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Propulsion & Shafting",
    status: "Brochure Certified",
    summary:
      "Specialized maintenance, optical shaft alignment, tailshaft inspection, stern tube seal replacement, controllable pitch propeller (CPP) hub overhauls, and thruster servicing.",
    highlights: [
      "Stern tube mechanical face and lip seal bonding & replacement afloat / in dock",
      "CPP propeller hub dismantling, blade palm O-ring renewal & pitch actuator calibration",
      "Bow and stern tunnel thruster gear backlash inspection & bearing replacement",
      "Optical laser and intermediate shaft alignment from main engine flywheel to tailshaft",
    ],
    specifications: [
      "Systems: CPP hubs, fixed-pitch shafts, azimuth thrusters, Schottel, Berg, Kongsberg",
      "Alignment Method: Dual-axis laser optical alignment systems",
    ],
  },
  {
    id: "marine-pneumatic-alpha-lubricator",
    code: "M-09",
    title: "Pneumatic Maneuvring System & Alpha Lubricator System",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Engine Automation",
    status: "Brochure Certified",
    summary:
      "Inspection, diagnostic testing, valve block overhaul, and timing calibration for engine-room pneumatic maneuvring control systems and electronic MAN Alpha cylinder lubricators.",
    highlights: [
      "Alpha Lubricator MCU, pump station, feedback sensors & injection pulse timing calibration",
      "Pneumatic logic control valves, starting air distributors & stop cylinder overhauls",
      "Bridge telegraph to governor actuator response tuning and remote order synchronization",
      "Air filter, regulator, coalescing dryer & lubricator loop condition verification",
    ],
    specifications: [
      "Systems: MAN B&W Alpha Lubricator, Wärtsilä Pulse Lubricating System, Nabtesco Maneuvring",
      "Diagnostic Tools: Dedicated diagnostic communicators & pulse timing oscilloscopes",
    ],
  },
  {
    id: "marine-valve-actuator-services",
    code: "M-10",
    title: "Valve & Actuator Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Flow Control",
    status: "Available on Request",
    summary:
      "Comprehensive refurbishment, in-situ lapping, high-pressure shell/seat leak testing, and actuator overhaul for shipboard isolation, ballast, safety, and cargo valves.",
    highlights: [
      "Class-certified seat leakage testing and safety relief valve (SRV) pop pressure recertification",
      "Pneumatic, hydraulic, and electric valve actuator dismantling, sealing & positioner calibration",
      "In-situ and workshop lapping for gate, globe, check, and butterfly valve seating faces",
      "Cryogenic and high-temperature valve refurbishment for LNG and steam services",
    ],
    specifications: [
      "Test Standards: API 598, ISO 5208, ASME B16.34",
      "Test Medium: Hydrostatic water, pneumatic air, and high-pressure nitrogen gas",
    ],
  },
  {
    id: "marine-purifier-services",
    code: "M-11",
    title: "Purifier Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Separation Systems",
    status: "Available on Request",
    summary:
      "Complete workshop overhaul, dynamic bowl balancing, vertical spindle renewal, and automated control calibration for marine centrifugal fuel and lubricating oil purifiers.",
    highlights: [
      "Dynamic multi-plane balancing of separator bowl assemblies to prevent bearing damage",
      "Vertical spindle and horizontal drive shaft bearing and worm gear replacement",
      "Operating water disc, friction clutch, and bowl disc stack chemical de-sludging",
      "Automated EPC control panel, solenoid valve block, and water transducer verification",
    ],
    specifications: [
      "Makers Supported: Alfa Laval, Westfalia (GEA), Mitsubishi Kakoki Kaisha (MKK)",
      "Balancing Precision: ISO 1940 Grade G2.5",
    ],
  },
  {
    id: "marine-electrical-automation",
    code: "M-12",
    title: "Electrical Automation Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Electrical & Control",
    status: "Brochure Certified",
    summary:
      "Marine electrical system troubleshooting, Main Switchboard (MSB) maintenance, generator protection testing, Power Management System (PMS) calibration, and alarm monitoring (AMS).",
    highlights: [
      "Air circuit breaker (ACB) primary and secondary current injection testing",
      "PMS automatic synchronizing, load sharing, non-essential tripping & black-out recovery testing",
      "Insulation resistance (Megger) surveying, switchboard busbar cleaning & torque checks",
      "PLC automation programming, sensor calibration, and 24/7 anchorage service attendance",
    ],
    specifications: [
      "Switchboard Voltages: Low Voltage (440V / 690V) and Medium Voltage (3.3kV / 6.6kV)",
      "Test Instruments: Primary Injection Test Sets, Multi-function Relay Testers, Thermography",
    ],
  },
  {
    id: "marine-navigation-equipment",
    code: "M-13",
    title: "Navigation Equipment Services",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Bridge Electronics",
    status: "Brochure Certified",
    summary:
      "SOLAS and IMO compliant servicing, calibration, repair, annual survey attendance, and equipment supply for commercial vessel bridge navigation and GMDSS communication suites.",
    highlights: [
      "Annual Performance Tests (APT) and radio surveys for all major classification societies",
      "Gyrocompass overhaul, sphere replacement, fluid replenishment & settling calibration",
      "Marine radar magnetron, transceiver restoration, and tuning for X-band and S-band suites",
      "ECDIS, AIS, GPS/GNSS, speed logs, and echo sounder installation and certification",
    ],
    specifications: [
      "Compliance: IMO / SOLAS / Class Society Mandates",
      "Service Footprint: Batam shipyards, anchorages, and Singapore straits boarding",
    ],
  },
  {
    id: "marine-cryogenic-workshop",
    code: "M-14",
    title: "Cryogenic Pump & Valve Repair Workshop",
    sectorId: "marine",
    sectorName: "Marine Services",
    category: "Cryogenics & LNG",
    status: "Available on Request",
    summary:
      "Clean-environment dismantling, component restoration, cryogenic seal fitting, and insulation resistance validation for LNG submerged motor cargo pumps, spray pumps, and cryogenic valves.",
    highlights: [
      "Operating temperature rating down to -196°C for LNG and liquefied gas equipment",
      "Submerged electric motor stator insulation testing, surge testing & cryogenic rewinding",
      "Impeller and inducer dynamic balancing with precision tolerance verification",
      "Hydrostatic shell testing, pneumatic cryogenic seat leakage validation & thermal contraction checks",
    ],
    specifications: [
      "Equipment Handled: Shinko, Ebara, Carter, Nikkiso LNG cargo & spray pumps",
      "Cleanroom Environment: Controlled particulate workshop for ultra-clean reassembly",
    ],
  },

  // -------------------------------------------------------------------------
  // 2. OFFSHORE SERVICES (5 items: a to e)
  // -------------------------------------------------------------------------
  {
    id: "offshore-flange-management",
    code: "O-01",
    title: "Flange Management",
    sectorId: "offshore",
    sectorName: "Offshore Services",
    category: "Joint Integrity",
    status: "Brochure Certified",
    summary:
      "Complete engineered joint integrity solutions, controlled hydraulic torquing, bolt tensioning, flange face distortion inspection, and tagged QA/QC registers for leak-free operations.",
    highlights: [
      "Controlled hydraulic torquing and simultaneous multi-stud tensioning",
      "ASME PCC-1 compliant tightening calculations, gasket selection & bolt load verification",
      "Ultrasonic bolt stress measurement (Elongation verification) for critical joints",
      "Comprehensive cloud-synced flange tag register with full traceability for commissioning",
    ],
    specifications: [
      "Equipment: Hydraulic torque wrenches up to 50,000+ Nm, multi-stud bolt tensioners",
      "Partnership / Tooling: Tritorc Controlled Bolting & In-Situ Tools",
    ],
    applicableAssets: [
      "FPSO / FSO Production Units",
      "Jack-Up & Semi-Submersible Rigs",
      "Offshore Wellhead Platforms",
      "Subsea Manifolds & Pipeline Risers",
    ],
  },
  {
    id: "offshore-insitu-machining",
    code: "O-02",
    title: "Insitu Machining Services",
    sectorId: "offshore",
    sectorName: "Offshore Services",
    category: "On-Site Machining",
    status: "Brochure Certified",
    summary:
      "Portable on-site precision field machining that eliminates the logistical cost and downtime of demounting large offshore equipment and piping structures.",
    highlights: [
      "On-site flange facing from 2 inches up to 3,000+ mm diameter with spiral/concentric serrations",
      "Cold pipe cutting and weld bevel preparation for high-wall offshore tubulars",
      "In-situ line boring for crane pedestal pivot pins, mooring brackets & rudder trunks",
      "On-site milling for compressor/engine skids, foundation soleplates & chock pads",
    ],
    specifications: [
      "Capacity: Flange facing ID/OD mounted up to 3.2 meters diameter",
      "Surface Finish: ASME B16.5 stock finish (125–250 Ra µin) & mirror finish",
    ],
  },
  {
    id: "offshore-hot-oil-flushing",
    code: "O-03",
    title: "Hot Oil Flushing",
    sectorId: "offshore",
    sectorName: "Offshore Services",
    category: "Fluid Cleanliness",
    status: "Brochure Certified",
    summary:
      "High-velocity turbulent hot oil flushing, chemical pickling, and micro-filtration to achieve strict ISO 4406 and NAS 1638 particle cleanliness on offshore hydraulic and lube circuits.",
    highlights: [
      "High-flow heating skids generating turbulent flow (Reynolds Number Re > 4,000)",
      "Continuous in-line laser particle monitoring for immediate ISO 4406 / NAS 1638 verification",
      "System dehydration, vacuum moisture removal & varnish removal technology",
      "Formal certificate of cleanliness with microscopic membrane patch laboratory photos",
    ],
    specifications: [
      "Target Cleanliness: ISO 4406:1999 class 14/12/9 or NAS 1638 Class 5/6",
      "Heating Capacity: Thermal oil heating units with digital PID temperature regulation",
    ],
  },
  {
    id: "offshore-valve-services",
    code: "O-04",
    title: "Valve Services",
    sectorId: "offshore",
    sectorName: "Offshore Services",
    category: "Valve Integrity",
    status: "Brochure Certified",
    summary:
      "In-situ and workshop inspection, overhaul, seat lapping, packing renewal, and high-pressure hydrostatic/gas certification for offshore production valves.",
    highlights: [
      "High-pressure hydrostatic and nitrogen gas bubble leak testing up to API 6D standards",
      "In-situ seat and wedge lapping for large-bore gate, globe, ball, and check valves",
      "Emergency shutdown (ESD) and pressure safety valve (PSV) pop recertification",
      "Hydraulic and pneumatic actuator dismantling, seal replacement & stroke speed testing",
    ],
    specifications: [
      "Test Ratings: Up to ASME Class 2500 (420 bar) / API 10,000 psi",
      "Compliance: API 598, API 6D, ASME B16.34, ISO 10423",
    ],
  },
  {
    id: "offshore-cable-termination",
    code: "O-05",
    title: "Cable Termination Works – HV, MV & Fiber Optic",
    sectorId: "offshore",
    sectorName: "Offshore Services",
    category: "Electrical Infrastructure",
    status: "Available on Request",
    summary:
      "Offshore-certified high voltage (HV), medium voltage (MV), and fiber optic cable jointing, termination, heat-shrink/cold-shrink assembly, and OTDR testing.",
    highlights: [
      "HV & MV cable glanding, shielding & stress-cone cold-shrink/heat-shrink terminations",
      "Precision fiber optic fusion splicing, enclosure sealing & OTDR loss certification",
      "VLF (Very Low Frequency) high-potential testing, Tan Delta & sheath integrity testing",
      "Fully BOSIET/OPITO certified offshore electrical and instrumentation technicians",
    ],
    specifications: [
      "Voltage Rating: Medium & High Voltage systems up to 33 kV",
      "Testing: VLF Hipot Test sets, Megger 10kV insulation testers, EXFO OTDR analyzers",
    ],
  },

  // -------------------------------------------------------------------------
  // 3. POWER PLANT SERVICES (10 items: a to j)
  // -------------------------------------------------------------------------
  {
    id: "power-steam-turbine-services",
    code: "P-01",
    title: "Steam Turbine Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Turbomachinery",
    status: "Available on Request",
    summary:
      "Turnkey major casing lifts, rotor non-destructive testing (NDT), blading inspection, diaphragm refurbishment, labyrinth seal replacement, and dynamic balancing for power generation turbines.",
    highlights: [
      "Rotor runout, journal ovality & ultrasonic/magnetic particle defect mapping",
      "Labyrinth packing, inter-stage diaphragm & carbon seal ring refurbishment",
      "Main stop valve (MSV), governor control valve & emergency trip throttle overhaul",
      "Multi-plane rotor dynamic balancing to ISO 1940 Grade G2.5 standards",
    ],
    specifications: [
      "Turbine Classes: Utility power generation & industrial co-generation units (5 MW to 150+ MW)",
      "Makers: Siemens, GE, Westinghouse, Mitsubishi, Alstom, Shin Nippon, Elliott",
    ],
    applicableAssets: [
      "Combined Cycle Power Plants (CCPP)",
      "Coal-Fired Utility Stations",
      "Geothermal Power Stations",
      "Industrial Co-Generation Skids",
    ],
  },
  {
    id: "power-gas-engine-services",
    code: "P-02",
    title: "Gas Engine Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Prime Movers",
    status: "Available on Request",
    summary:
      "Top-end, intermediate, and major scheduled overhauls for heavy stationary gas engines, including ignition tuning, cylinder head reconditioning, and crankshaft alignment.",
    highlights: [
      "Cylinder head reconditioning: valve seat cutting, valve guide renewal & hydro testing",
      "Gas mixer, electronic throttle body & pre-chamber spark plug overhaul",
      "Crankshaft deflection measurement, main bearing clearance & line-boring verification",
      "Combustion balancing, emissions tuning (NOx/CO) & knock detection calibration",
    ],
    specifications: [
      "Makers: Jenbacher, MWM, Caterpillar, Wärtsilä, Cummins, Waukesha",
      "Fuel: Natural gas, biogas, flare gas, and synthesis gas",
    ],
  },
  {
    id: "power-dual-fuel-engine-services",
    code: "P-03",
    title: "Dual Fuel Engine Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Multi-Fuel Generation",
    status: "Available on Request",
    summary:
      "Specialized maintenance, sensor calibration, and combustion balancing for dual-fuel power generation engines operating on gas with diesel pilot injection.",
    highlights: [
      "Gas admission valve (GAV) bench overhaul, stroke verification & seat leak testing",
      "Micro-pilot diesel fuel injector calibration, atomization checks & nozzle testing",
      "Fuel switch-over transition diagnostics to ensure zero load shedding during changeover",
      "Exhaust cylinder temperature balancing and knock monitoring sensor calibration",
    ],
    specifications: [
      "Makers: Wärtsilä DF series, MAN dual-fuel engines, Bergen gas/diesel power generators",
    ],
  },
  {
    id: "power-governor-services",
    code: "P-04",
    title: "Governor Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Speed & Load Control",
    status: "Available on Request",
    summary:
      "Precision calibration, droop response adjustment, actuator testing, and overhaul for mechanical-hydraulic and electronic speed governors on utility generator sets.",
    highlights: [
      "Woodward UG-8, UG-40, TG, 2301A/D & 505 series digital governor refurbishment",
      "Grid synchronization droop tuning, frequency regulation & load rejection response testing",
      "Hydraulic actuator seal kit renewal, feedback LVDT calibration & spring force checks",
      "Emergency field calibration during planned plant outages and sudden governor hunting",
    ],
    specifications: [
      "Supported Brands: Woodward, Heinzmann, Regulateurs Europa, Europa governors",
    ],
  },
  {
    id: "power-woodward-control-solutions",
    code: "P-05",
    title: "Woodward Control Solutions",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Authorized Control Systems",
    status: "Available on Request",
    summary:
      "Authorized hardware integration, control logic tuning, firmware upgrades, and diagnostic troubleshooting for Woodward turbine governors and engine management panels.",
    highlights: [
      "Woodward Micronet, Peak 150, 505, 505XT & 2301E digital control configuration",
      "Steam turbine extraction control logic, overspeed trip & valve linearization programming",
      "Woodward ProAct, CPC & TM-55 hydraulic actuator driver tuning and testing",
      "Genuine Woodward replacement cards, power supply units & authorized firmware support",
    ],
    specifications: [
      "Authorized Alliance: Regional partnership delivering factory-certified Woodward expertise",
    ],
  },
  {
    id: "power-gas-valve-services",
    code: "P-06",
    title: "Gas Valve Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Gas Train Equipment",
    status: "Available on Request",
    summary:
      "Disassembly, seat precision lapping, elastomer renewal, bubble-tight leak testing, and positioner calibration for power generation fuel gas shut-off and control valves.",
    highlights: [
      "Fuel gas emergency shut-off valve (ESV) rapid closing speed & seal integrity testing",
      "Precision seat lapping to eliminate fuel gas seat leakage and prevent unburned emissions",
      "High-pressure helium/nitrogen bubble leak testing compliant with ANSI/FCI 70-2 Class VI",
      "Electro-pneumatic positioner calibration, 4-20mA stroke linearity & fail-safe testing",
    ],
    specifications: [
      "Compliance: ATEX / IECEx certified workshop procedures for explosion-proof valve trains",
    ],
  },
  {
    id: "power-pump-services",
    code: "P-07",
    title: "Pump Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Utility & Feedwater",
    status: "Available on Request",
    summary:
      "Overhaul, dynamic balancing, and laser optical alignment for high-pressure boiler feed pumps (BFP), condensate extraction pumps (CEP), and cooling water circulating pumps.",
    highlights: [
      "Multi-stage high-pressure boiler feed pump barrel disassembly and balance disc refacing",
      "Impeller ceramic coating restoration for erosion and cavitation prevention",
      "Cartridge mechanical seal rebuilding and API flush plan piping reconditioning",
      "Laser alignment to eliminate thermal growth misalignment between turbine/motor and pump",
    ],
    specifications: [
      "Pressure Capability: Boiler feed pumps up to 180+ bar discharge pressure",
      "Makers: Sulzer, Flowserve, KSB, Torishima, Ebara",
    ],
  },
  {
    id: "power-compressor-services",
    code: "P-08",
    title: "Compressor Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Compression Systems",
    status: "Available on Request",
    summary:
      "Maintenance, vibration analysis, and major mechanical overhaul for fuel gas boosters, plant instrument air compressors, and hydrogen/inert gas reciprocating compressors.",
    highlights: [
      "Crosshead pin, connecting rod bearing & piston rod runout verification",
      "Compressor suction and discharge plate valve lapping and spring tension validation",
      "Screw compressor rotor profile inspection, clearance setting & radial bearing renewal",
      "Continuous vibration monitoring, FFT frequency spectrum analysis & baseline recording",
    ],
    specifications: [
      "Types: Reciprocating multi-stage compressors, centrifugal boosters, rotary screw packages",
      "Makers: Ariel, Atlas Copco, Ingersoll Rand, Dresser-Rand, Nuovo Pignone",
    ],
  },
  {
    id: "power-retrofit-control-systems",
    code: "P-09",
    title: "Retrofit of Control Systems",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "System Modernization",
    status: "Available on Request",
    summary:
      "Modernization of obsolete analog turbine and engine controls with modern digital PLC/DCS architectures, touchscreen HMIs, and redundant SIL-rated safety trip systems.",
    highlights: [
      "Conversion of obsolete mechanical governors to digital speed and load control units",
      "Integration of SIL-2 / SIL-3 electronic overspeed protection trip systems",
      "Modern touchscreen HMI development for intuitive plant operator diagnostics",
      "Reduced fuel consumption, improved transient load acceptance & trip elimination",
    ],
    specifications: [
      "Platforms: Allen-Bradley, Siemens S7, Woodward, Schneider Electric Modicon",
    ],
  },
  {
    id: "power-electrical-automation",
    code: "P-10",
    title: "Electrical Automation Services",
    sectorId: "power-plant",
    sectorName: "Power Plant",
    category: "Power Systems & MV",
    status: "Available on Request",
    summary:
      "Generator protection relay secondary injection testing, Automatic Voltage Regulator (AVR) calibration, medium voltage switchgear servicing, and generator stator testing.",
    highlights: [
      "Generator insulation diagnostics: Tan Delta, Partial Discharge & Polarization Index",
      "AVR tuning, static exciter testing & reactive power (kVAR) load sharing calibration",
      "Medium voltage (6.6kV / 11kV) circuit breaker maintenance and vacuum interrupter testing",
      "Plant SCADA telemetry integration, automated synchronization & black-start sequence testing",
    ],
    specifications: [
      "Standards: IEEE, IEC 60034, NEMA, Class Utility specifications",
    ],
  },

  // -------------------------------------------------------------------------
  // 4. PROCESS INDUSTRY (5 items: a to e)
  // -------------------------------------------------------------------------
  {
    id: "process-steam-turbine-services",
    code: "I-01",
    title: "Steam Turbine Services",
    sectorId: "process-industry",
    sectorName: "Process Industry",
    category: "Mechanical Drive Turbines",
    status: "Available on Request",
    summary:
      "Turnaround overhauls, bearing inspections, rotor dynamic balancing, and trip mechanism testing for steam turbines driving critical process compressors, blowers, and pumps.",
    highlights: [
      "Trip and throttle emergency valve reconditioning and zero-leakage seat lapping",
      "Journal bearing and tilting pad thrust bearing refurbishment and clearance verification",
      "In-situ rotor blading inspection, dye-penetrant NDT & casing joint face scraping",
      "Carbon ring gland seal replacement to eliminate process steam leakage",
    ],
    specifications: [
      "Applications: Petrochemical, oil refining, pulp & paper, palm oil mills & fertilizer plants",
      "Makers: Dresser-Rand, Coppus, Peter Brotherhood, Shin Nippon, Elliott, Nadrowski",
    ],
    applicableAssets: [
      "Petrochemical Plants",
      "Oil & Gas Refineries",
      "Chemical Processing Skids",
      "Pulp & Paper Mills",
      "Fertilizer Manufacturing Units",
    ],
  },
  {
    id: "process-governor-services",
    code: "I-02",
    title: "Governor Services",
    sectorId: "process-industry",
    sectorName: "Process Industry",
    category: "Process Speed Control",
    status: "Available on Request",
    summary:
      "Precision calibration, linkage adjustment, and test-bench overhaul for mechanical-hydraulic governors maintaining critical process speeds without hunting or fluctuations.",
    highlights: [
      "Stabilization of process RPM to eliminate pressure and flow surges in downstream lines",
      "Mechanical drive linkage backlash elimination and actuator servo seal renewal",
      "Speed droop and isochronous response tuning under rapid process load changes",
      "24/7 turnaround emergency repair support during scheduled plant shutdowns",
    ],
    specifications: [
      "Supported Models: Woodward TG-13, TG-17, UG-8, 2301 series & Heinzmann hydraulic systems",
    ],
  },
  {
    id: "process-compressor-services",
    code: "I-03",
    title: "Compressor Services",
    sectorId: "process-industry",
    sectorName: "Process Industry",
    category: "Process Gas Machinery",
    status: "Available on Request",
    summary:
      "Mechanical refurbishment, dry gas seal servicing, labyrinth ring fitting, and alignment for process gas compressors, screw compressors, and centrifugal plant blowers.",
    highlights: [
      "Dry gas seal cartridge replacement and high-pressure nitrogen buffer seal checks",
      "Horizontal split casing joint flatness verification and re-machining",
      "Rotor dynamic balancing, journal bearing fitting & alignment to drive motors",
      "Vibration baseline logging, FFT harmonic spectral analysis & lube oil console overhaul",
    ],
    specifications: [
      "Process Gases: Hydrocarbons, ammonia, nitrogen, hydrogen, air, and acid gas streams",
    ],
  },
  {
    id: "process-hydraulic-services",
    code: "I-04",
    title: "Hydraulic Services",
    sectorId: "process-industry",
    sectorName: "Process Industry",
    category: "Plant Fluid Power",
    status: "Available on Request",
    summary:
      "Refurbishment of industrial Hydraulic Power Units (HPUs), heavy process cylinders, proportional servo valves, nitrogen accumulators, and fluid cleanliness management.",
    highlights: [
      "Proportional and servo valve bench calibration, spool lap testing & amplifier tuning",
      "Heavy hydraulic cylinder barrel honing up to 800 mm ID & piston rod HVAF restoration",
      "Bladder and piston accumulator nitrogen pre-charge testing and recertification",
      "Closed-loop chemical flushing and high-efficiency filtration to ISO 4406 Class 14/12/9",
    ],
    specifications: [
      "Partnership / Components: Bosch Rexroth, Parker, Eaton Vickers, Danfoss Hydraulics",
    ],
  },
  {
    id: "process-electrical-automation",
    code: "I-05",
    title: "Electrical Automation Services",
    sectorId: "process-industry",
    sectorName: "Process Industry",
    category: "Instrumentation & Drives",
    status: "Available on Request",
    summary:
      "Variable Frequency Drive (VFD) maintenance, industrial electric motor overhaul, 4-20mA instrumentation loop calibration, and DCS/PLC automation during plant turnarounds.",
    highlights: [
      "VFD inverter module diagnostic testing, DC bus capacitor bank health & cooling fan renewal",
      "Heavy electric motor rewinding, Vacuum Pressure Impregnation (VPI) & dynamic rotor balancing",
      "Process transmitter calibration: differential pressure, thermocouple, RTD & Coriolis flowmeters",
      "Dedicated electrical crews for scheduled plant turnaround shutdowns (TAR)",
    ],
    specifications: [
      "Drives & Motors: WEG, Danfoss, ABB, Siemens, Schneider Electric",
    ],
  },

  // -------------------------------------------------------------------------
  // 5. DATA CENTER (3 items: a to c)
  // -------------------------------------------------------------------------
  {
    id: "data-center-power-management",
    code: "D-01",
    title: "Power Management Systems (PMS)",
    sectorId: "data-center",
    sectorName: "Data Center",
    category: "Power Continuity",
    status: "Available on Request",
    summary:
      "Engineering, routine verification, and diagnostics for standby generator automatic synchronization, Automatic Transfer Switch (ATS) logic, and UPS integration for zero-downtime uptime.",
    highlights: [
      "Black start emergency simulation, ATS closed-transition sequencing & bus synchronization",
      "Load bank testing: resistive and reactive stepped testing up to 100% rated capacity",
      "Automated generator paralleling, load shedding, and reserve capacity control logic",
      "Redundant 24V/12V DC starter battery bank health testing, impedance mapping & charging checks",
    ],
    specifications: [
      "Standard Compliance: Uptime Institute Tier III & Tier IV Availability Mandates",
      "Switchgear: Low & Medium Voltage Paralleling Switchgear",
    ],
    applicableAssets: [
      "Hyperscale Data Center Campuses",
      "Colocation Facilities",
      "Enterprise Banking Data Centers",
      "Telecommunication Switching Exchanges",
    ],
  },
  {
    id: "data-center-generator-engine-overhauls",
    code: "D-02",
    title: "Generator Engine Overhauls",
    sectorId: "data-center",
    sectorName: "Data Center",
    category: "Emergency Standby Power",
    status: "Available on Request",
    summary:
      "Comprehensive top-end, intermediate, and major overhauls for high-horsepower diesel generator prime movers powering mission-critical data center campuses.",
    highlights: [
      "Cylinder head reconditioning, multi-angle valve seat cutting & injector sleeve replacement",
      "Main bearing, con-rod bearing renewal & crankshaft optical deflection checks",
      "Turbocharger complete overhaul, dynamic rotor balancing & intercooler ultrasonic cleaning",
      "Post-overhaul full-load resistive/reactive load bank commissioning with thermal imaging",
    ],
    specifications: [
      "Engine Ratings: 1,500 kVA to 3,500+ kVA standby diesel generator sets",
      "Makers: Cummins (QSK60, QSK78), MTU (Series 4000), Caterpillar (3516, C175), Perkins",
    ],
  },
  {
    id: "data-center-prime-mover-fuel-systems",
    code: "D-03",
    title: "Prime Mover & Fuel System Overhauls",
    sectorId: "data-center",
    sectorName: "Data Center",
    category: "Fuel Resilience",
    status: "Available on Request",
    summary:
      "Critical fuel system conditioning, day-tank transfer pumps, fuel polisher maintenance, high-pressure common rail injector calibration, and rapid-start governor response tuning.",
    highlights: [
      "Fuel polishing, microbial decontamination, particulate filtration & water separation",
      "Redundant AC/DC fuel transfer pumps and duplex strainer overhauls",
      "Common rail high-pressure fuel pump and electronic injector test-bench calibration",
      "Governor transient response optimization ensuring rapid start-up to full frequency in < 10 seconds",
    ],
    specifications: [
      "Fuel Cleanliness Target: ISO 4406 14/13/10; Zero microbial sludge in bulk storage tanks",
      "Start-Up Performance: Rapid governor ramp-up meeting NFPA 110 Type 10 standards",
    ],
  },
];
