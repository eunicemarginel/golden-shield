export type SeedEntry = {
  title: string;
  slug: string;
  summary: string;
  body: string[];
};

export const coreServices: SeedEntry[] = [
  {
    title: "Building Guard",
    slug: "building-guard",
    summary:
      "Static guarding for commercial and industrial buildings, covering access control, visitor management and incident response.",
    body: [
      "Our building guards are stationed at lobbies, loading bays and perimeter checkpoints to control access, screen visitors and deter unauthorised entry. Officers are trained on your building's specific protocols, from tenant handover procedures to emergency evacuation.",
      "Each posting is backed by our 24/7 command centre, so incidents are logged, escalated and reviewed in real time rather than left to paper logbooks.",
    ],
  },
  {
    title: "Residential Guard",
    slug: "residential-guard",
    summary:
      "Dedicated guarding for condominiums and private estates, balancing resident privacy with visible, professional security presence.",
    body: [
      "Residential postings call for a different tone than commercial sites: officers are trained to be approachable to residents while remaining firm on access control, visitor registration and parcel/vendor management.",
      "We work with management committees to tailor patrol routes, gate protocols and incident reporting to the specific layout and rules of your estate.",
    ],
  },
  {
    title: "Campus Guarding",
    slug: "campus-guarding",
    summary:
      "Security for schools, universities and training campuses, balancing child/student safety with an open, welcoming environment.",
    body: [
      "Campus officers are screened and trained with the additional sensitivity required around minors and young adults, covering gate management, visitor screening and emergency lockdown procedures.",
      "We coordinate directly with campus administrators on drop-off/pick-up traffic flow, event days and after-hours facility access.",
    ],
  },
  {
    title: "24/7 Security Patrol Services",
    slug: "24-7-security-patrol-services",
    summary:
      "Scheduled and randomised patrols across your premises around the clock, with digital checkpoints and instant incident alerts.",
    body: [
      "Patrol routes are built around your site's specific vulnerabilities and logged digitally at each checkpoint, giving you a verifiable record of coverage rather than a paper-based guard tour sheet.",
      "Our command centre monitors patrol activity live, so a missed checkpoint or an incident triggers an immediate response rather than being discovered the next morning.",
    ],
  },
  {
    title: "Site Protection",
    slug: "site-protection",
    summary:
      "Perimeter and asset protection for construction sites, warehouses and industrial yards, including after-hours coverage.",
    body: [
      "Construction and industrial sites face a distinct risk profile — theft of materials and equipment, unauthorised access after hours, and safety compliance. Our officers are briefed on site-specific hazards and access procedures.",
      "Coverage can be paired with CCTV and mobile surveillance for sites that need round-the-clock protection without a full-time guard complement at every entrance.",
    ],
  },
  {
    title: "Licensed Officers",
    slug: "licensed-officers",
    summary:
      "PLRD-licensed security officers, screened, trained and rostered to Singapore's regulatory standards for every deployment.",
    body: [
      "Every officer we deploy is licensed by the Police Licensing & Regulatory Department, medically fit for security duties, and trained to a rank-appropriate WSQ standard.",
      "Rostering is planned weekly with layered relief coverage — from rest-day cover through to roving reliefs — so a shortfall at one site never leaves it unmanned.",
    ],
  },
  {
    title: "Security Concierge & Front Desk Services",
    slug: "security-concierge-front-desk-services",
    summary:
      "Front-of-house officers trained in customer service as well as security, for lobbies, offices and mixed-use developments.",
    body: [
      "Concierge officers combine a security officer's vigilance with front-desk customer service — greeting visitors, managing deliveries and handling enquiries, while still controlling access and monitoring for incidents.",
      "This service suits Grade-A offices, mixed-use developments and buildings where the security post doubles as the first point of contact for tenants and guests.",
    ],
  },
  {
    title: "Traffic Management & Marshalling",
    slug: "traffic-management-marshalling",
    summary:
      "Trained marshals directing vehicle and pedestrian flow at construction sites, events and high-traffic commercial premises.",
    body: [
      "Our marshals are trained in traffic control signalling and are equipped with reflective gear, cones and signage to safely direct vehicles and pedestrians at busy entrances, loading bays and event grounds.",
      "This service is commonly paired with event security or construction site protection where uncontrolled traffic flow poses a safety risk.",
    ],
  },
  {
    title: "Crowd Control for Events",
    slug: "crowd-control-for-events",
    summary:
      "Security planning and on-the-ground crowd management for concerts, festivals, corporate and private events in Singapore.",
    body: [
      "Under the Public Order Act 2017, events with a crowd size above 5,000 require a Notice of Intention to Organise an Event, along with an appropriate event security plan — we help plan and execute this.",
      "Coverage spans concert, festival, corporate, sporting and private event security, including access screening, crowd flow management and rapid incident response on the day.",
    ],
  },
  {
    title: "VIP Close Protection Services",
    slug: "vip-close-protection-services",
    summary:
      "Discreet, trained close-protection officers for executives, dignitaries and high-profile individuals in Singapore and overseas.",
    body: [
      "Our close protection officers are drawn from personnel with security, defence or law enforcement backgrounds, trained in threat assessment, route planning and low-profile protective coverage.",
      "Golden Shield is one of the few Singapore-based security companies able to mount protective operations overseas, in addition to local engagements.",
    ],
  },
  {
    title: "Cash-in-Transit Escort",
    slug: "valuables-in-transit-cash-in-transit-escort",
    summary:
      "Secure escort services for the movement of cash and valuables between premises, with trained officers and coordinated route planning.",
    body: [
      "Cash and valuables in transit represent a concentrated risk window. Our escort teams plan routes and timing to minimise predictability, with officers trained specifically for transit security.",
      "This service is coordinated closely with your finance or operations team to fit existing banking and collection schedules.",
    ],
  },
];

export const enforcementServices: SeedEntry[] = [
  {
    title: "Outcome-Based Contract (OBC) Consultancy",
    slug: "outcome-based-contract-obc-consultancy",
    summary:
      "Consultancy to help organisations design and transition to outcome-based security contracts that reward performance over headcount.",
    body: [
      "Outcome-based contracting shifts security procurement away from pure manpower headcount toward measurable security outcomes, often blending fewer officers with more technology.",
      "We work with clients' procurement and security teams to design OBC frameworks, define measurable KPIs, and manage the transition from legacy manned-guarding contracts.",
    ],
  },
  {
    title: "Private Investigation",
    slug: "private-investigation",
    summary:
      "Discreet investigative services for corporate due diligence, internal incidents and personal matters, conducted within the law.",
    body: [
      "Our investigators handle corporate due diligence, internal fraud or misconduct enquiries, and other confidential investigative work, always conducted within Singapore's legal and regulatory framework.",
      "Engagements are scoped individually and handled with strict confidentiality throughout.",
    ],
  },
  {
    title: "Private Property Wheel Clamping",
    slug: "private-property-wheel-clamping-services",
    summary:
      "Licensed wheel-clamping enforcement for private carparks and estates to deter and address unauthorised parking.",
    body: [
      "Unauthorised parking on private property is addressed through licensed wheel-clamping enforcement, carried out in compliance with Singapore's private property parking regulations.",
      "We work with property managers to set enforcement policies, signage and release procedures before enforcement begins.",
    ],
  },
  {
    title: "Red Teaming & Physical Breach Testing",
    slug: "red-teaming-physical-breach-testing",
    summary:
      "Simulated physical breach exercises that stress-test your site's security controls the way a real intruder would.",
    body: [
      "Red-teaming exercises simulate real intrusion attempts — testing access control, guard response and detection systems — to surface gaps that a paper audit alone would miss.",
      "Findings are compiled into an after-action report with prioritised recommendations, and can feed directly into your broader security risk assessment.",
    ],
  },
  {
    title: "Security Risk Assessment & Audits",
    slug: "security-risk-assessment-audits",
    summary:
      "Independent audits of your site's security posture, covering manpower deployment, technology coverage and procedural gaps.",
    body: [
      "Our audits assess root causes, threats and operational variables specific to your site, benchmarked against regulatory requirements and industry practice.",
      "The output is a practical, cost-effective remediation plan — not just a compliance checklist — covering manpower, technology and procedure.",
    ],
  },
];

export const products: SeedEntry[] = [
  {
    title: "CCTV",
    slug: "cctv",
    summary:
      "High-definition surveillance camera systems for continuous site monitoring, integrated with our command centre.",
    body: [
      "Our CCTV deployments range from single-site installations to multi-camera networks feeding into our 24/7 command centre for centralised monitoring.",
      "Footage retention, camera placement and resolution are scoped to your site's specific risk areas rather than a one-size-fits-all package.",
    ],
  },
  {
    title: "Access Control System & Intercom",
    slug: "access-control-intercom",
    summary:
      "Card, biometric and intercom-based access management to control who enters your premises and when.",
    body: [
      "Access control ranges from card and biometric readers at entry points to integrated intercom systems for visitor verification before granting entry.",
      "Systems can be tied into your guard roster and CCTV so that access events are logged alongside patrol and incident records.",
    ],
  },
  {
    title: "Virtual Guard Patrolling",
    slug: "virtual-guard-patrolling",
    summary:
      "AI-assisted remote monitoring that detects suspicious activity in real time and alerts our command centre for immediate response.",
    body: [
      "Virtual guard patrolling extends coverage to sites or hours where a physical officer isn't cost-effective, using camera analytics to flag unusual activity for a remote operator to verify and act on.",
      "It's commonly deployed alongside a lighter on-site manpower presence, or as standalone coverage for low-traffic hours.",
    ],
  },
  {
    title: "Alarms",
    slug: "alarms",
    summary:
      "Integrated intrusion detection systems that trigger real-time alerts to our command centre on unauthorised access.",
    body: [
      "Alarm systems are integrated with our command centre so a triggered zone is verified and escalated immediately, rather than relying on an on-site siren alone.",
      "Configuration is tailored to your premises' entry points, restricted zones and operating hours.",
    ],
  },
  {
    title: "Mobile Surveillance",
    slug: "mobile-surveillance",
    summary:
      "Portable, rapidly-deployable surveillance units for temporary sites, events or short-term security needs.",
    body: [
      "For construction sites, event grounds or temporary premises, mobile surveillance units provide camera coverage without the lead time or cost of a permanent installation.",
      "Units can be relocated as a project or event progresses through different phases.",
    ],
  },
  {
    title: "Command — 24/7 Central Remote Monitoring",
    slug: "central-remote-monitoring",
    summary:
      "Our centralised command centre platform for continuous, multi-site oversight of cameras, alarms and patrol activity.",
    body: [
      "Command is the operational backbone connecting CCTV, alarms, access control and patrol data from every client site into one 24/7-staffed centre.",
      "Operators verify alerts, dispatch response and maintain a full audit trail — giving clients a single point of visibility across all their sites.",
    ],
  },
  {
    title: "Connectivity",
    slug: "connectivity",
    summary:
      "Secure network infrastructure connecting surveillance, sensors and access control back to our command centre.",
    body: [
      "Reliable connectivity underpins every other technology solution we deploy — without it, cameras and sensors are only as good as their last recorded frame.",
      "We assess and, where needed, supplement your site's network infrastructure to ensure consistent, secure links back to Command.",
    ],
  },
  {
    title: "Remote Gate Release & Intercom Management",
    slug: "remote-gate-release-intercom-management",
    summary:
      "Video-verified remote entry systems allowing our command centre to authorise access without an officer at every gate.",
    body: [
      "Visitors or vehicles at a gate can be verified via video and granted entry remotely, reducing the need for a stationed officer at every access point.",
      "This is particularly effective for secondary or after-hours entrances with lower traffic volumes.",
    ],
  },
  {
    title: "License Plate Whitelisting Services",
    slug: "license-plate-whitelisting",
    summary:
      "Automated vehicle access using license plate recognition, granting entry to pre-approved vehicles without manual checks.",
    body: [
      "License plate recognition automates vehicle access for tenants, staff or approved contractors, reducing queueing at carpark entrances while maintaining an access log.",
      "Unrecognised vehicles are flagged for manual verification rather than granted automatic entry.",
    ],
  },
  {
    title: "Smart Building Integration (IoT)",
    slug: "smart-building-integration-iot",
    summary:
      "Integrating security systems with your building's broader smart infrastructure for unified monitoring and control.",
    body: [
      "Security shouldn't operate in isolation from the rest of a smart building's systems. We integrate surveillance, access and alarm data with broader building management platforms where required.",
      "This gives facilities teams a single operating picture across security and building systems.",
    ],
  },
  {
    title: "Facial Recognition Attendance Systems",
    slug: "facial-recognition-attendance",
    summary:
      "Biometric facial recognition for staff attendance tracking and access authorisation, reducing buddy-punching and manual logs.",
    body: [
      "Facial recognition attendance replaces manual sign-in sheets or card-based systems with a biometric check, useful for sites with high staff turnover such as construction or dormitories.",
      "Data can feed into your existing HR or payroll systems depending on integration requirements.",
    ],
  },
  {
    title: "AI Human & Vehicle Detection Analytics",
    slug: "ai-human-vehicle-detection-analytics",
    summary:
      "AI analytics that identify and classify human and vehicle movement in camera feeds, flagging anomalies for review.",
    body: [
      "Rather than relying on a human operator to watch every feed, AI detection analytics continuously scan for human or vehicle activity in restricted zones and flag anomalies for review.",
      "This reduces alert fatigue by filtering out routine movement and surfacing genuinely unusual activity.",
    ],
  },
  {
    title: "Mobile App Security Management",
    slug: "mobile-app-security-management",
    summary:
      "A mobile app giving clients and teams real-time visibility into monitoring, alerts and incident management on the go.",
    body: [
      "Clients can review live camera feeds, patrol status and incident alerts from a mobile app rather than waiting on a call or email from the command centre.",
      "This is particularly useful for property managers or business owners overseeing multiple sites.",
    ],
  },
  {
    title: "Security Robot Deployment",
    slug: "security-robot-deployment",
    summary:
      "Autonomous patrol robots that conduct scheduled surveillance rounds, supplementing manpower in large or repetitive-patrol environments.",
    body: [
      "Autonomous robots are suited to large, open premises where scheduled patrol rounds are repetitive and time-consuming for human officers — think warehouses, carparks and industrial yards.",
      "Robots feed live video and sensor data back to Command, with officers dispatched when the robot flags an anomaly.",
    ],
  },
  {
    title: "Occupancy & Crowd Heat Mapping",
    slug: "occupancy-crowd-heat-mapping",
    summary:
      "AI analytics that monitor crowd density and movement patterns, useful for events, retail and high-traffic venues.",
    body: [
      "Heat mapping analytics track how crowds move and concentrate across a venue, helping identify bottlenecks or overcrowding risk before they become a safety issue.",
      "This is particularly valuable for event organisers and retail or exhibition venues managing variable foot traffic.",
    ],
  },
  {
    title: "Predictive Maintenance for Security Hardware",
    slug: "predictive-maintenance",
    summary:
      "Smart diagnostics that flag security hardware likely to need maintenance before it fails, reducing coverage gaps.",
    body: [
      "A camera or sensor that fails silently creates a blind spot until someone notices. Predictive maintenance diagnostics flag hardware showing early signs of failure so it can be addressed proactively.",
      "This keeps your surveillance and access control coverage consistent rather than discovering gaps after an incident.",
    ],
  },
];

export const industries: {
  title: string;
  slug: string;
  summary: string;
  body: string[];
  relatedServiceSlugs?: string[];
  relatedProductSlugs?: string[];
}[] = [
  {
    title: "Schools & Higher Education",
    slug: "schools-higher-education",
    summary:
      "Security programmes for schools, colleges and universities that balance student safety with an open campus environment.",
    body: [
      "Campuses need visible, approachable security that doesn't feel like a lockdown — controlling gate access and visitor flow while staying sensitive to a learning environment with minors and young adults.",
      "We work with school administrators on drop-off/pick-up traffic, event-day coverage and emergency response planning.",
    ],
    relatedServiceSlugs: ["campus-guarding", "traffic-management-marshalling"],
    relatedProductSlugs: ["access-control-intercom", "cctv"],
  },
  {
    title: "Retail",
    slug: "retail",
    summary:
      "Loss prevention and customer-facing security for retail stores, malls and shopping precincts.",
    body: [
      "Retail security has to protect stock and staff without making customers feel surveilled. Our officers and technology are deployed to deter theft while supporting a positive shopping experience.",
      "AI detection and crowd heat mapping are particularly useful for larger retail environments managing peak-hour foot traffic.",
    ],
    relatedServiceSlugs: ["security-concierge-front-desk-services"],
    relatedProductSlugs: ["cctv", "occupancy-crowd-heat-mapping"],
  },
  {
    title: "Manufacturing",
    slug: "manufacturing",
    summary:
      "Site protection for factories and manufacturing facilities, covering perimeter security, asset protection and access control.",
    body: [
      "Manufacturing sites combine valuable equipment, restricted areas and shift-based staff movement. Our officers are briefed on site-specific safety protocols alongside standard security duties.",
      "Access control and license plate whitelisting help manage staff and vendor vehicle movement across large industrial sites.",
    ],
    relatedServiceSlugs: ["site-protection"],
    relatedProductSlugs: ["access-control-intercom", "license-plate-whitelisting"],
  },
  {
    title: "Healthcare",
    slug: "healthcare",
    summary:
      "Security for hospitals, clinics and healthcare facilities, balancing patient safety, access control and a calm environment.",
    body: [
      "Healthcare facilities require security that can de-escalate rather than confront, while still controlling access to restricted wards and protecting staff and patients.",
      "We have direct experience supporting institutional healthcare clients, including engagements with the Ministry of Health.",
    ],
    relatedServiceSlugs: ["security-concierge-front-desk-services", "licensed-officers"],
    relatedProductSlugs: ["access-control-intercom"],
  },
  {
    title: "Law Enforcement",
    slug: "law-enforcement",
    summary:
      "Specialist support services for law enforcement and government-adjacent security requirements.",
    body: [
      "Our management and operations team brings direct security, defence and law enforcement backgrounds to engagements requiring that specific domain experience.",
      "This includes higher-tier deployments such as close protection and enforcement consultancy.",
    ],
    relatedServiceSlugs: ["vip-close-protection-services"],
  },
  {
    title: "Banking & Finance",
    slug: "banking-finance",
    summary:
      "Security for financial institutions and corporate offices, covering access control, cash-in-transit and risk assessment.",
    body: [
      "Financial institutions carry a distinct risk profile around cash handling, access control and reputational exposure from any security incident.",
      "We support this sector with cash-in-transit escort, security risk audits and access control integration.",
    ],
    relatedServiceSlugs: [
      "valuables-in-transit-cash-in-transit-escort",
      "security-risk-assessment-audits",
    ],
    relatedProductSlugs: ["access-control-intercom"],
  },
  {
    title: "Hotels & Resorts",
    slug: "hotels-resorts",
    summary:
      "Discreet, service-oriented security for hotels and resorts that protects guests without disrupting hospitality.",
    body: [
      "Hospitality security needs to be nearly invisible to guests while still controlling access, managing incidents and supporting event security for functions and conferences.",
      "Our concierge-trained officers fit naturally into a hotel's front-of-house operations.",
    ],
    relatedServiceSlugs: ["security-concierge-front-desk-services", "crowd-control-for-events"],
  },
  {
    title: "Commercial Real Estate",
    slug: "commercial-real-estate",
    summary:
      "Building security for Grade-A offices and commercial developments, from front desk to command-centre monitoring.",
    body: [
      "Commercial developments need a security presence that reflects the building's tenant profile — professional, responsive and integrated with building management systems.",
      "We combine building guard deployments with smart building integration for a unified security and facilities operating picture.",
    ],
    relatedServiceSlugs: ["building-guard"],
    relatedProductSlugs: ["smart-building-integration-iot"],
  },
  {
    title: "Property Management",
    slug: "property-management",
    summary:
      "Security partnerships for property management firms overseeing multiple residential and commercial sites.",
    body: [
      "Property managers overseeing multiple sites need consistent standards and centralised visibility rather than managing each site's security independently.",
      "Our command centre and mobile app give property management teams oversight across their full portfolio from a single view.",
    ],
    relatedServiceSlugs: ["residential-guard"],
    relatedProductSlugs: ["central-remote-monitoring", "mobile-app-security-management"],
  },
  {
    title: "Logistics",
    slug: "logistics",
    summary:
      "Security for warehouses, distribution centres and logistics hubs, covering asset protection and vehicle access control.",
    body: [
      "Logistics sites move high volumes of goods and vehicles daily, making access control and asset protection the priority over static guarding alone.",
      "License plate whitelisting and security robot patrols are well suited to large logistics footprints with repetitive perimeter checks.",
    ],
    relatedServiceSlugs: ["site-protection"],
    relatedProductSlugs: ["license-plate-whitelisting", "security-robot-deployment"],
  },
  {
    title: "Dormitory",
    slug: "dormitory",
    summary:
      "Security and access management for worker dormitories, supporting resident safety and facility compliance.",
    body: [
      "Dormitories house large resident populations with specific access, attendance and compliance requirements.",
      "Facial recognition attendance and access control help manage resident movement at scale, alongside on-site officer presence.",
    ],
    relatedServiceSlugs: ["licensed-officers"],
    relatedProductSlugs: ["facial-recognition-attendance"],
  },
  {
    title: "Exhibition & Trade Show",
    slug: "exhibition-trade-show",
    summary:
      "Event security for exhibitions, trade shows and conferences, covering access screening and crowd management.",
    body: [
      "Exhibitions and trade shows bring large volumes of visitors and exhibitors through controlled access points over a short, high-intensity period.",
      "We plan access screening, crowd flow and traffic marshalling around the event's specific schedule and floor plan.",
    ],
    relatedServiceSlugs: ["crowd-control-for-events", "traffic-management-marshalling"],
    relatedProductSlugs: ["occupancy-crowd-heat-mapping"],
  },
];

export const faqs: {
  question: string;
  answer: string;
  category: "general" | "services" | "products" | "industries";
}[] = [
  {
    question: "Which is the best security company in Singapore?",
    answer:
      "Selection depends on protection type, property, industry, budget, and whether manpower or technology is needed. Evaluate licensing, experience, officer quality, supervision, response procedures, technology capabilities, and customisation ability.",
    category: "general",
  },
  {
    question: "How do I choose a good security company in Singapore?",
    answer:
      "Consider proper licensing, management experience, officer training and professionalism, site supervision procedures, 24/7 support availability, CCTV and access control capabilities, and customisation flexibility. Golden Shield combines trained personnel, operational planning, and modern technology.",
    category: "general",
  },
  {
    question: "What services does a security company provide?",
    answer:
      "Services include security guards, patrols, condominium security, commercial building security, industrial security, construction site security, event security, crowd control, traffic management, concierge security, retail loss prevention, executive protection, access control, CCTV surveillance, remote monitoring, and security technology solutions.",
    category: "services",
  },
  {
    question: "How much does it cost to hire a security guard in Singapore?",
    answer:
      "Costs vary based on number of officers, operating hours, qualifications, site responsibilities, deployment duration, and 24-hour coverage needs. Additional requirements like patrols, access control, command centre monitoring, or security technology affect overall costs. Golden Shield provides customised quotations.",
    category: "general",
  },
  {
    question: "Are security companies in Singapore required to be licensed?",
    answer:
      "Yes. Security agencies operating in Singapore are regulated and must meet the applicable licensing requirements. Golden Shield is licensed by Singapore's Police Licensing & Regulatory Department (PLRD).",
    category: "general",
  },
  {
    question: "What does a security officer do?",
    answer:
      "Officers protect people, property, and assets by monitoring premises and responding to security issues. Responsibilities may include access control, visitor management, patrols, CCTV monitoring, incident reporting, emergency response, crowd management, entrance/exit checks, and deterring unauthorised activity.",
    category: "general",
  },
  {
    question: "What is 24/7 security guarding?",
    answer:
      "24/7 security guarding provides continuous security coverage throughout the day and night. Officers operate in shifts ensuring premises remain monitored. Commonly used for condominiums, commercial buildings, industrial facilities, construction sites, and locations requiring constant protection.",
    category: "services",
  },
  {
    question: "Do condominiums need security guards in Singapore?",
    answer:
      "Many condominiums employ security officers for access management, visitor control, contractor verification, and deliveries. Security may include CCTV monitoring, visitor management, vehicle access control, patrols, intercom systems, remote gate management, and incident response.",
    category: "services",
  },
  {
    question: "What security services are suitable for commercial buildings?",
    answer:
      "Suitable services include security officers, lobby/concierge security, access control, CCTV monitoring, visitor management, patrols, emergency response, vehicle access management, and remote monitoring. Appropriate solutions depend on building size, occupancy, operating hours, and risk profile.",
    category: "services",
  },
  {
    question: "What security is required for industrial facilities?",
    answer:
      "Industrial properties often require stronger perimeter and access controls due to valuable equipment, inventory, and machinery. Solutions include manned guarding, perimeter patrols, CCTV, vehicle monitoring, access control, visitor/contractor management, alarm monitoring, and remote surveillance.",
    category: "services",
  },
  {
    question: "Do construction sites need security guards?",
    answer:
      "Security guards prevent unauthorised entry, theft, vandalism, and hazardous area access. Construction security may include entry/exit control, contractor verification, vehicle monitoring, night patrols, CCTV surveillance, and equipment/material protection. Combined guarding and surveillance provide stronger coverage.",
    category: "services",
  },
  {
    question: "What is mobile security patrol?",
    answer:
      "Mobile security patrol involves trained security personnel conducting scheduled or random inspections of a property. Officers check building perimeters, entrances, exits, restricted areas, gates, car parks, equipment, and signs of trespassing or suspicious activity.",
    category: "services",
  },
  {
    question: "What is the difference between security guards and mobile patrols?",
    answer:
      "A security guard is normally stationed at a specific location for an assigned period, while a mobile patrol team visits and checks locations according to scheduled or random patrol routes. Some organisations use both approaches for permanent presence and wider coverage.",
    category: "services",
  },
  {
    question: "What is event security?",
    answer:
      "Event security involves planning and deploying trained personnel to help protect guests, staff, performers, organisers and property during an event. Services include access control, crowd management, queue management, VIP protection, traffic management, emergency coordination, and restricted-area protection.",
    category: "services",
  },
  {
    question: "When should I hire security for an event?",
    answer:
      "Event security applies to corporate functions, exhibitions, conferences, concerts, private functions, and large gatherings requiring crowd management or controlled access. Early planning enables determination of entrances, restricted areas, emergency routes, officer deployment, and crowd-control requirements.",
    category: "services",
  },
  {
    question: "What is crowd control security?",
    answer:
      "Crowd control security manages safe, orderly people movement at events, public gatherings, and high-traffic locations. Personnel manage queues, entrances, exits, restricted zones, crowd flow, and emergency evacuation routes. Proper planning minimises congestion and safety risks.",
    category: "services",
  },
  {
    question: "What is traffic marshalling?",
    answer:
      "Traffic marshalling involves managing vehicle and pedestrian movement around a property, workplace or event. Traffic marshals assist with vehicle entry/exit, parking areas, delivery vehicles, pedestrian crossings, event traffic, and restricted vehicle zones.",
    category: "services",
  },
  {
    question: "What is security concierge service?",
    answer:
      "Security concierge combines security responsibilities with front-of-house support. Services include visitor registration, access management, general enquiries, contractor management, deliveries, lobby monitoring, and incident reporting. Suitable for corporate offices, condominiums, and commercial buildings.",
    category: "services",
  },
  {
    question: "What is retail loss prevention?",
    answer:
      "Retail loss prevention focuses on reducing theft, shoplifting, fraud, and activities causing inventory/financial losses. Loss prevention officers monitor customer activity, identify suspicious behaviour, observe high-risk areas, and support the retailer's internal security procedures.",
    category: "services",
  },
  {
    question: "What is executive protection?",
    answer:
      "Executive protection provides specialised personal security for executives, dignitaries, high-profile individuals and others who may require additional protection. Services include security planning, movement coordination, escorting, and threat awareness based on requirements and risk profile.",
    category: "services",
  },
  {
    question: "What is CCTV monitoring?",
    answer:
      "CCTV monitoring uses surveillance cameras to observe activity around a property and identify potential security incidents. Systems monitored on-site or remotely support security officers by providing visibility across entrances, common areas, perimeters, and restricted locations.",
    category: "products",
  },
  {
    question: "Is CCTV better than security guards?",
    answer:
      "CCTV and security guards perform different functions and are most effective together. CCTV provides continuous visual coverage and recorded evidence; officers investigate situations, interact with people, and respond physically. Integrated approaches provide stronger protection than either alone.",
    category: "products",
  },
  {
    question: "What is remote CCTV monitoring?",
    answer:
      "Remote CCTV monitoring allows property cameras to be monitored from another location or central facility. When suspicious activity or alarms occur, operators review situations and follow response procedures. This improves surveillance coverage while reducing on-site personnel watching multiple screens.",
    category: "products",
  },
  {
    question: "What is virtual guard patrolling?",
    answer:
      "Virtual guard patrolling uses remotely monitored CCTV cameras and security technology to conduct scheduled surveillance checks without requiring an officer to physically patrol every location. It complements physical officers and is useful for camera/sensor-monitorable areas.",
    category: "products",
  },
  {
    question: "What is an access control system?",
    answer:
      "An access control system manages who is allowed to enter specific areas of a building or property. Access is controlled via access cards, PIN codes, mobile credentials, biometric identification, facial recognition, or intercom systems, preventing unauthorised entry while maintaining access records.",
    category: "products",
  },
  {
    question: "Can CCTV and access control systems work together?",
    answer:
      "Yes. CCTV and access control systems can be integrated to provide stronger security. When someone enters controlled doors, CCTV footage verifies the person. Combining systems improves situational awareness and incident investigation capabilities.",
    category: "products",
  },
  {
    question: "What is License Plate Recognition?",
    answer:
      "License Plate Recognition (LPR) uses cameras and software to identify vehicle licence plates. LPR supports vehicle access control, car park security, approved vehicle whitelisting, entry/exit records, and vehicle-related incident investigation, and integrates with gates and barriers.",
    category: "products",
  },
  {
    question: "What is remote gate release?",
    answer:
      "Remote gate release enables an authorised operator to communicate with visitors and remotely approve or reject access to a property. Combined with intercoms, CCTV, vehicle cameras, access control, and remote monitoring, it reduces the need for permanently stationed personnel.",
    category: "products",
  },
  {
    question: "What is AI video analytics in security?",
    answer:
      "AI video analytics uses software to analyse CCTV footage and identify specific activities or events. Depending on the system, analytics may detect people, vehicles, restricted area movement, unusual activity, and crowd conditions, with alerts sent to security personnel for assessment.",
    category: "products",
  },
  {
    question: "Can security technology reduce manpower requirements?",
    answer:
      "In some environments, security technology reduces repetitive tasks, allowing personnel to focus on higher-value responsibilities. CCTV analytics, remote monitoring, access control, and virtual patrols automate surveillance and access management. The appropriate manpower/technology balance depends on operational and security requirements.",
    category: "products",
  },
  {
    question: "What should I ask before hiring a security company?",
    answer:
      "Ask about proper licensing, experience with similar properties, officer training/supervision, absence procedures, incident reporting, 24/7 support availability, CCTV/access control integration, customisation capability, and service quality monitoring. Consider price alongside operational capability, service quality, and reliability.",
    category: "general",
  },
  {
    question: "Can I hire security guards for a short-term assignment?",
    answer:
      "Yes. Temporary or short-term security services can be arranged for requirements such as events, temporary projects, construction activities, emergency coverage, short-term property protection, or additional manpower during peak periods. Golden Shield provides both temporary and longer-term solutions.",
    category: "general",
  },
  {
    question: "Can businesses combine security manpower and technology?",
    answer:
      "Yes. Modern security operations increasingly combine trained security officers with technologies such as CCTV, access control, alarms, remote monitoring and video analytics. Technology monitors multiple locations while officers investigate alerts and handle situations requiring human judgement.",
    category: "products",
  },
  {
    question: "Does every property need the same security solution?",
    answer:
      "No. Security requirements vary according to the type of property, operating hours, number of occupants, visitor traffic, valuable assets and potential security risks. Condominiums focus on visitor/vehicle management; industrial facilities require perimeter protection. Solutions should address actual site risks.",
    category: "general",
  },
  {
    question: "Why hire a professional security company instead of managing security internally?",
    answer:
      "Professional companies provide trained personnel, operational supervision, deployment planning, incident procedures, and specialised expertise. Outsourcing allows organisations to focus on primary operations while experienced providers manage day-to-day security requirements.",
    category: "general",
  },
  {
    question: "Is Golden Shield Security Services a licensed security company in Singapore?",
    answer:
      "Yes. Golden Shield Security Services is a Singapore-based security agency licensed by the Police Licensing & Regulatory Department (PLRD). The company provides professional security manpower and technology-driven solutions for customised protection.",
    category: "general",
  },
  {
    question: "What types of properties can Golden Shield protect?",
    answer:
      "Golden Shield's services cover residential condominiums, commercial buildings, industrial facilities, construction sites, retail properties, schools/campuses, healthcare facilities, events, religious institutions, and high-value assets. Security arrangements are customised according to individual site requirements.",
    category: "general",
  },
  {
    question: "Does Golden Shield provide both security guards and security technology?",
    answer:
      "Yes. Golden Shield provides security manpower together with technology-based security solutions. Depending on the project, solutions incorporate security officers, CCTV surveillance, access control, remote monitoring, virtual guard patrolling, and integrated security technologies.",
    category: "general",
  },
  {
    question: "Does Golden Shield provide 24/7 security services?",
    answer:
      "Yes. Golden Shield can provide round-the-clock security for sites requiring continuous protection. Deployments include security officers, patrol services, and technology-based monitoring depending on location and security requirements.",
    category: "general",
  },
  {
    question: "How can I get a security quotation in Singapore?",
    answer:
      "Provide information about your property, operating hours, number of security positions, and main security concerns. Golden Shield reviews requirements and recommends an appropriate security manpower and technology combination — contact us for an assessment or quotation.",
    category: "general",
  },
];

export type JobOpeningSeed = {
  title: string;
  slug: string;
  employmentType: "full-time" | "part-time";
  summary: string;
  body: string[];
};

export const jobOpenings: JobOpeningSeed[] = [
  {
    title: "Security Officer",
    slug: "security-officer",
    employmentType: "full-time",
    summary:
      "Licensed security officers needed across residential, commercial and industrial sites island-wide. Full-time and part-time schedules available.",
    body: [
      "We're looking for PLRD-licensed security officers to join our guarding teams across Singapore, covering access control, visitor management, patrols and incident reporting at client sites.",
      "Both full-time and part-time schedules are available. You'll be rostered to a consistent site with full relief coverage, ongoing training, and a clear path to progress into senior officer, supervisor or controller roles. Benefits include annual wage increments, performance and AWS bonuses, festive period incentives, and company-paid upgrading training.",
    ],
  },
  {
    title: "Senior Security Officer",
    slug: "senior-security-officer",
    employmentType: "full-time",
    summary:
      "Experienced officers to take on added responsibility on-site, mentoring junior officers and handling escalations. Full-time and part-time schedules available.",
    body: [
      "Senior Security Officers take on the same core guarding duties as our Security Officers, with added responsibility for mentoring junior officers on site and being the first point of escalation for incidents before they reach a Controller or Supervisor.",
      "Both full-time and part-time schedules are available. Suited to officers with prior guarding experience looking to step into more responsibility, with a clear path toward Security Supervisor. Benefits include annual wage increments, performance and AWS bonuses, festive period incentives, and company-paid upgrading training.",
    ],
  },
  {
    title: "Security Supervisor",
    slug: "security-supervisor",
    employmentType: "full-time",
    summary:
      "Oversee guarding teams across one or more sites — rostering, incident management and client liaison. Full-time and part-time schedules available.",
    body: [
      "Security Supervisors oversee day-to-day guarding operations across their assigned site(s) — managing officer rostering and relief coverage, handling incident escalations, conducting site checks, and acting as the main point of contact for the client.",
      "Both full-time and part-time schedules are available. This role suits candidates with prior supervisory or senior officer experience in the security industry. Benefits include annual wage increments, performance and AWS bonuses, festive period incentives, and company-paid upgrading training.",
    ],
  },
  {
    title: "Customer Service Concierge",
    slug: "customer-service-concierge",
    employmentType: "full-time",
    summary:
      "Front-of-house concierge officers combining customer service with security awareness for lobbies and front desks. Full-time and part-time schedules available.",
    body: [
      "Our Customer Service Concierge officers are the first point of contact at a building's lobby or front desk — greeting visitors, managing deliveries, handling enquiries and registering guests, while staying alert to access control and security procedures.",
      "Both full-time and part-time schedules are available. This role suits candidates with a strong customer service background who also want security industry experience. Benefits include annual wage increments, performance bonuses, festive period incentives, and company-paid upgrading training.",
    ],
  },
];
