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

export const faqs: { question: string; answer: string; category: string }[] = [
  {
    question: "Are your security officers licensed?",
    answer:
      "Yes. Every officer we deploy is licensed by Singapore's Police Licensing & Regulatory Department (PLRD) according to their rank, and Golden Shield is a member of the Security Association of Singapore.",
    category: "general",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are headquartered in Singapore and serve clients island-wide, with the capability to mount security operations overseas for select engagements.",
    category: "general",
  },
  {
    question: "Do you offer 24/7 monitoring?",
    answer:
      "Yes. Our command centre operates around the clock, monitoring CCTV, alarms, access control and patrol activity across all client sites.",
    category: "products",
  },
  {
    question: "Can I get a customised security quote?",
    answer:
      "Yes. Every site is different, so we start with a free security assessment to understand your requirements before recommending a manpower and technology mix.",
    category: "general",
  },
  {
    question: "What is virtual guard patrolling?",
    answer:
      "Virtual guard patrolling uses AI-assisted camera analytics to monitor a site remotely, alerting our command centre to suspicious activity in real time without requiring a physical officer on site at all times.",
    category: "products",
  },
  {
    question: "Are you able to provide armed security?",
    answer:
      "Armed security is available for select international engagements in line with local regulations. Domestic Singapore deployments follow Singapore's licensing framework for security officers.",
    category: "services",
  },
  {
    question: "How quickly can you deploy officers to a new site?",
    answer:
      "Deployment timelines depend on the scope of the engagement, but our layered relief and rostering system means we can typically mobilise officers for standard guarding assignments within a short lead time. Contact us with your requirements for a specific timeline.",
    category: "services",
  },
  {
    question: "Do you support multi-site clients with centralised reporting?",
    answer:
      "Yes. Property managers and businesses with multiple sites can view monitoring, patrol and incident data across their full portfolio through our command centre and mobile app.",
    category: "products",
  },
];
