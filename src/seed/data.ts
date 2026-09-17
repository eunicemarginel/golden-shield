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
      "There's no single \"best\" security company — the right fit depends on your property type, industry, budget, and whether you need manpower, technology, or both. What separates a strong provider from an average one is proper licensing, an experienced management team, well-trained and well-supervised officers, clear response procedures, and the flexibility to build a solution around your site rather than sell a one-size-fits-all package.",
    category: "general",
  },
  {
    question: "How do I choose a good security company in Singapore?",
    answer:
      "Start with the fundamentals: proper PLRD licensing, an experienced management team, and officers who are genuinely trained and supervised on site, not just deployed and forgotten. From there, look at what backs up the manpower — 24/7 support, CCTV and access control capability, and a willingness to customise the solution to your site rather than offer a standard package. Golden Shield builds every engagement around this combination of trained personnel, careful operational planning, and modern technology.",
    category: "general",
  },
  {
    question: "What services does a security company provide?",
    answer:
      "A full-service security company typically covers guarding and patrols across condominiums, commercial buildings, industrial sites and construction projects, alongside event security, crowd control and traffic management. Many also offer concierge services, retail loss prevention, executive protection, and technology-driven solutions like access control, CCTV surveillance and remote monitoring — Golden Shield provides all of the above under one roof.",
    category: "services",
  },
  {
    question: "How much does it cost to hire a security guard in Singapore?",
    answer:
      "Pricing depends on how many officers you need, your operating hours, the qualifications required for the role, and how long the deployment runs — round-the-clock coverage naturally costs more than a single shift. Add-ons like patrol rounds, access control, command centre monitoring or other technology will also affect the total. Because every site is different, we provide a customised quotation rather than a flat rate.",
    category: "general",
  },
  {
    question: "Are security companies in Singapore required to be licensed?",
    answer:
      "Yes — security agencies operating in Singapore are regulated and must hold a valid licence to operate legally. Golden Shield is licensed by Singapore's Police Licensing & Regulatory Department (PLRD), and every officer we deploy is certified to the appropriate rank for their role.",
    category: "general",
  },
  {
    question: "What does a security officer do?",
    answer:
      "A security officer's core job is protecting people, property and assets by staying alert on the ground and responding quickly when something's wrong. Day to day, that can mean access control and visitor management, patrols, CCTV monitoring, incident reporting, emergency response, crowd management, and simply being a visible deterrent against unauthorised activity.",
    category: "general",
  },
  {
    question: "What is 24/7 security guarding?",
    answer:
      "24/7 security guarding means continuous coverage around the clock, with officers rotating through shifts so the site is never left unmonitored. It's the standard for condominiums, commercial buildings, industrial facilities, construction sites, and any location where a gap in coverage — even overnight — is a real risk.",
    category: "services",
  },
  {
    question: "Do condominiums need security guards in Singapore?",
    answer:
      "Most condominiums in Singapore do employ security officers, and for good reason — managing visitor access, verifying contractors, handling deliveries and controlling vehicle entry all benefit from a trained officer on site rather than an unmanned system alone. This is usually paired with supporting technology: CCTV, intercoms, remote gate management and a clear incident response process.",
    category: "services",
  },
  {
    question: "What security services are suitable for commercial buildings?",
    answer:
      "Commercial buildings typically need a mix of static guarding, lobby or concierge security, access control and CCTV monitoring, backed by clear visitor management and emergency response procedures. The right combination depends on the building's size, occupancy, operating hours and risk profile — a 24-hour office tower has different needs from a single-tenant warehouse office.",
    category: "services",
  },
  {
    question: "What security is required for industrial facilities?",
    answer:
      "Industrial sites carry valuable equipment, inventory and machinery, which usually calls for stronger perimeter and access control than a typical commercial building. That often means manned guarding combined with perimeter patrols, CCTV, vehicle monitoring, visitor and contractor management, alarm monitoring and remote surveillance working together rather than any one measure alone.",
    category: "services",
  },
  {
    question: "Do construction sites need security guards?",
    answer:
      "Yes — construction sites are a common target for theft, vandalism and unauthorised entry into hazardous areas, and a security presence significantly reduces that risk. Typical coverage includes entry and exit control, contractor verification, vehicle monitoring, night patrols, CCTV surveillance and protection for equipment and materials, often combining physical guarding with surveillance technology for stronger coverage.",
    category: "services",
  },
  {
    question: "What is mobile security patrol?",
    answer:
      "Mobile security patrol involves trained officers conducting scheduled or randomised inspection rounds across a property, rather than being stationed at one fixed point. Patrols typically cover building perimeters, entrances and exits, restricted areas, gates, car parks and equipment — checking for signs of trespassing, tampering or other suspicious activity along the way.",
    category: "services",
  },
  {
    question: "What is the difference between security guards and mobile patrols?",
    answer:
      "A security guard is stationed at a specific location for their assigned shift, providing a constant, visible presence at that point. A mobile patrol team instead moves between multiple locations on a scheduled or randomised route, extending coverage across a wider area. Many sites use both together — a fixed presence where it matters most, and patrols to cover everything in between.",
    category: "services",
  },
  {
    question: "What is event security?",
    answer:
      "Event security is the planning and on-the-ground deployment of trained personnel to protect guests, staff, performers, organisers and property throughout an event. It typically covers access control, crowd and queue management, VIP protection, traffic management, emergency coordination and protecting restricted areas — planned around the specific layout and schedule of the event.",
    category: "services",
  },
  {
    question: "When should I hire security for an event?",
    answer:
      "Event security applies to corporate functions, exhibitions, conferences, concerts, private functions and any large gathering that needs crowd management or controlled access. The earlier you plan, the better — deciding on entrances, restricted areas, emergency routes, officer numbers and crowd-control measures well ahead of the date avoids scrambling to fix gaps at the last minute.",
    category: "services",
  },
  {
    question: "What is crowd control security?",
    answer:
      "Crowd control security is about keeping people moving safely and predictably through queues, entrances, exits and restricted zones at events, public gatherings and other high-traffic locations. Done well, it prevents the bottlenecks and congestion that turn into genuine safety risks, and keeps emergency evacuation routes clear if they're ever needed.",
    category: "services",
  },
  {
    question: "What is traffic marshalling?",
    answer:
      "Traffic marshalling is the management of vehicle and pedestrian movement around a property, workplace or event — directing entry and exit, managing parking and delivery vehicles, and keeping pedestrian crossings and restricted vehicle zones safe and orderly. It's especially valuable anywhere vehicle and foot traffic overlap under time pressure, like event load-in or a busy construction site.",
    category: "services",
  },
  {
    question: "What is security concierge service?",
    answer:
      "Security concierge blends front-of-house hospitality with genuine security responsibility — the same officer who greets visitors and manages deliveries is also handling visitor registration, access control and incident reporting. It's a natural fit for corporate offices, condominiums and commercial buildings that want a welcoming first impression without compromising on security.",
    category: "services",
  },
  {
    question: "What is retail loss prevention?",
    answer:
      "Retail loss prevention focuses on reducing theft, shoplifting, fraud and other activity that eats into inventory and revenue. Loss prevention officers watch for suspicious behaviour, monitor high-risk areas of the store, and work alongside the retailer's own internal procedures rather than replacing them — the goal is to close gaps, not just add a uniform on the floor.",
    category: "services",
  },
  {
    question: "What is executive protection?",
    answer:
      "Executive protection is specialised personal security for executives, dignitaries and other high-profile individuals who face an elevated risk profile. It covers security planning, coordinated movement, close escorting and ongoing threat awareness, tailored to the specific individual and situation rather than delivered as a standard package.",
    category: "services",
  },
  {
    question: "What is CCTV monitoring?",
    answer:
      "CCTV monitoring uses surveillance cameras to observe a property and flag potential security incidents as they happen, whether the footage is reviewed on-site or remotely. It gives security officers visibility across entrances, common areas, perimeters and restricted zones that would otherwise be impossible to cover by sight alone.",
    category: "products",
  },
  {
    question: "Is CCTV better than security guards?",
    answer:
      "Neither replaces the other — they solve different problems. CCTV offers continuous visual coverage and a recorded account of what happened; officers are the ones who actually investigate a situation, engage with people, and physically respond when something's wrong. Sites that combine both get stronger protection than either approach delivers alone.",
    category: "products",
  },
  {
    question: "What is remote CCTV monitoring?",
    answer:
      "Remote CCTV monitoring means your cameras are watched from a separate location or central command centre rather than only reviewed on-site after the fact. When an alarm triggers or something looks suspicious, an operator reviews it in real time and follows a defined response procedure — extending coverage without needing personnel watching multiple screens at every individual site.",
    category: "products",
  },
  {
    question: "What is virtual guard patrolling?",
    answer:
      "Virtual guard patrolling uses remotely monitored cameras and detection technology to run scheduled surveillance checks across a site without an officer physically walking the route every time. It's a strong complement to physical guarding, particularly for large areas or off-hours coverage where a camera-monitorable zone doesn't justify a permanent post.",
    category: "products",
  },
  {
    question: "What is an access control system?",
    answer:
      "An access control system governs who can enter specific areas of a building — through access cards, PIN codes, mobile credentials, biometrics or facial recognition, or a manned intercom. Beyond simply keeping unauthorised people out, it creates a reliable record of who came and went, and when.",
    category: "products",
  },
  {
    question: "Can CCTV and access control systems work together?",
    answer:
      "Yes, and integrating the two makes both stronger. When someone badges through a controlled door, linked CCTV footage can confirm exactly who it was, turning a bare access log into verified evidence. That combination improves both situational awareness in the moment and investigation quality after an incident.",
    category: "products",
  },
  {
    question: "What is License Plate Recognition?",
    answer:
      "License Plate Recognition (LPR) uses cameras and software to automatically identify vehicle number plates as they pass. It's commonly used for vehicle access control, car park security, whitelisting approved vehicles, keeping entry and exit records, and supporting investigations into vehicle-related incidents — and it integrates directly with gates and barriers for automated entry.",
    category: "products",
  },
  {
    question: "What is remote gate release?",
    answer:
      "Remote gate release lets an authorised operator speak with a visitor and approve or deny entry remotely, usually paired with intercoms, CCTV, vehicle cameras and broader access control and monitoring systems. It's an effective way to manage lower-traffic entrances without needing a permanently stationed officer at every gate.",
    category: "products",
  },
  {
    question: "What is AI video analytics in security?",
    answer:
      "AI video analytics applies software to CCTV footage to automatically flag specific activity — people or vehicles in restricted zones, unusual movement, or crowd conditions worth a closer look — and routes those alerts to security personnel for assessment. It effectively gives every camera a second set of eyes that never gets tired or distracted.",
    category: "products",
  },
  {
    question: "Can security technology reduce manpower requirements?",
    answer:
      "In the right environment, yes — CCTV analytics, remote monitoring, access control and virtual patrols can automate the repetitive parts of surveillance and access management, freeing officers to focus on higher-value work rather than routine watching. The right balance between manpower and technology depends entirely on your site's specific operational and security requirements, which is exactly what a proper assessment should map out.",
    category: "products",
  },
  {
    question: "What should I ask before hiring a security company?",
    answer:
      "Ask about their licensing status, direct experience with properties similar to yours, and how officers are trained and supervised once deployed. Also ask how they handle absences, incident reporting, 24/7 support, and whether their CCTV and access control capabilities integrate cleanly with your site. Price matters, but weigh it against operational capability, service quality and reliability — the cheapest quote isn't always the best value.",
    category: "general",
  },
  {
    question: "Can I hire security guards for a short-term assignment?",
    answer:
      "Yes — temporary and short-term security is a normal request, whether it's for a one-off event, a temporary project, construction activity, emergency coverage, short-term property protection, or simply extra manpower during a peak period. Golden Shield handles both short-term deployments and longer-term contracts, so you're not locked into a full annual commitment for a one-week need.",
    category: "general",
  },
  {
    question: "Can businesses combine security manpower and technology?",
    answer:
      "Yes, and it's increasingly the norm rather than the exception — pairing trained officers with CCTV, access control, alarms, remote monitoring and video analytics. Technology handles the constant, wide-area watching, while officers step in to investigate alerts and handle anything that genuinely requires human judgement.",
    category: "products",
  },
  {
    question: "Does every property need the same security solution?",
    answer:
      "No — requirements vary significantly based on the type of property, its operating hours, occupancy, visitor traffic, valuable assets and specific risk factors. A condominium is usually focused on visitor and vehicle management, while an industrial facility needs stronger perimeter protection; the right solution addresses your site's actual risks, not a generic template.",
    category: "general",
  },
  {
    question: "Why hire a professional security company instead of managing security internally?",
    answer:
      "A professional security company brings trained personnel, operational supervision, deployment planning, established incident procedures and specialised expertise that's genuinely difficult to replicate in-house. Outsourcing lets your organisation stay focused on its core operations while an experienced provider handles the day-to-day realities of security management.",
    category: "general",
  },
  {
    question: "Is Golden Shield Security Services a licensed security company in Singapore?",
    answer:
      "Yes — Golden Shield is a Singapore-based security agency licensed by the Police Licensing & Regulatory Department (PLRD). We provide both professional security manpower and technology-driven solutions, built around the specific protection each client actually needs.",
    category: "general",
  },
  {
    question: "What types of properties can Golden Shield protect?",
    answer:
      "Our work spans residential condominiums, commercial buildings, industrial facilities, construction sites, retail properties, schools and campuses, healthcare facilities, events, religious institutions and high-value assets. Every arrangement is customised to the specific site rather than delivered as a standard package.",
    category: "general",
  },
  {
    question: "Does Golden Shield provide both security guards and security technology?",
    answer:
      "Yes — we provide security manpower alongside technology-based solutions, and most engagements combine both. Depending on the project, that can include security officers, CCTV surveillance, access control, remote monitoring, virtual guard patrolling and other integrated security technologies working together.",
    category: "general",
  },
  {
    question: "Does Golden Shield provide 24/7 security services?",
    answer:
      "Yes. We provide round-the-clock security for sites that need continuous protection, combining security officers, patrol services and technology-based monitoring in whatever mix suits the location and its specific requirements.",
    category: "general",
  },
  {
    question: "How can I get a security quotation in Singapore?",
    answer:
      "Share some basic details about your property, operating hours, the number of security positions you need, and your main security concerns. We'll review your requirements and recommend the right combination of manpower and technology — contact us to get started on an assessment or quotation.",
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
      "Both full-time and part-time schedules are available. You'll be rostered to a consistent site with full relief coverage, ongoing training, and a clear path to progress into senior officer, supervisor or controller roles. Benefits include annual wage increments, performance bonuses, festive period incentives, and company-paid upgrading training.",
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
      "Both full-time and part-time schedules are available. Suited to officers with prior guarding experience looking to step into more responsibility, with a clear path toward Security Supervisor. Benefits include annual wage increments, performance bonuses, festive period incentives, and company-paid upgrading training.",
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
      "Both full-time and part-time schedules are available. This role suits candidates with prior supervisory or senior officer experience in the security industry. Benefits include annual wage increments, performance bonuses, festive period incentives, and company-paid upgrading training.",
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

export type PostSeed = {
  title: string;
  slug: string;
  excerpt: string;
  publishedDate: string;
  body: string[];
};

export const additionalPosts: PostSeed[] = [
  {
    title: "Understanding PLRD Licensing: What It Means When You Hire a Security Vendor",
    slug: "understanding-plrd-licensing-singapore",
    excerpt:
      "Every security agency operating in Singapore must be licensed by the Police Licensing & Regulatory Department — here's what that actually covers, and what to check before you sign.",
    publishedDate: "2026-06-02T09:00:00.000Z",
    body: [
      "In Singapore, security agencies and the officers they deploy are regulated by the Police Licensing & Regulatory Department (PLRD) under the Private Security Industry Act. A valid PLRD licence means the agency has met requirements around company registration, management fit-and-proper checks, and officer training standards — it isn't just a formality, it's the baseline that separates a legitimate vendor from an unregulated one.",
      "When evaluating a security vendor, ask to see the agency's licence and confirm that individual officers hold the appropriate rank certification for the role you're hiring them for (a Basic Security Officer certificate differs from supervisory or specialist certifications). A vendor that can't produce this readily, or seems vague about it, is a real warning sign — licensing gaps create liability exposure for your organisation too, not just the vendor.",
    ],
  },
  {
    title: "Manned Guarding vs AI Surveillance: Why Most Sites in Singapore Need Both",
    slug: "manned-guarding-vs-ai-surveillance",
    excerpt:
      "AI detection and virtual patrolling extend coverage, but they don't replace an officer's judgement on the ground. Here's how the two actually complement each other.",
    publishedDate: "2026-07-08T09:00:00.000Z",
    body: [
      "AI-powered surveillance is very good at what it's good at: watching every camera feed simultaneously without fatigue, flagging unusual activity at 3am, and covering large or low-traffic areas that don't justify a full-time officer post. What it can't do is make a judgement call when it matters — de-escalate a confrontation, verify identity face-to-face, or physically respond to an incident in progress.",
      "That's why most sites we work with in Singapore end up with a blended approach rather than choosing one over the other: technology handles constant, wide-area monitoring and flags anomalies, while officers are deployed where human presence and decision-making actually change the outcome — entrances, high-risk zones, and incident response. The right mix depends on your site's layout and risk profile, which is exactly what a proper security assessment should map out before recommending either.",
    ],
  },
  {
    title: "What to Look for in a CCTV and Surveillance System for Your Business",
    slug: "cctv-surveillance-system-checklist",
    excerpt:
      "Camera count isn't the metric that matters. Coverage, retention, and who's actually watching the footage are what determine whether a CCTV system earns its cost.",
    publishedDate: "2026-08-05T09:00:00.000Z",
    body: [
      "It's easy to judge a CCTV proposal by camera count, but the more important questions are about coverage and follow-through: are entrances, loading bays and cash-handling areas actually in frame, or just the easy-to-mount spots? How long is footage retained, and does that match how quickly an incident is typically reported? And critically — is anyone actually watching in real time, or is footage only ever reviewed after something has already gone wrong?",
      "The biggest gap we see in existing systems isn't camera quality, it's the lack of a monitoring plan behind the hardware. A camera that only gets reviewed retroactively is a recording device, not a security measure. Pairing CCTV with a staffed command centre — or at minimum, AI analytics that flag anomalies for review — is what turns footage into something that can actually prevent or interrupt an incident, not just document it afterward.",
    ],
  },
  {
    title: "Event Security Planning: A Checklist for Singapore Organisers",
    slug: "event-security-planning-checklist-singapore",
    excerpt:
      "From crowd estimates to the Public Order Act, here's what to plan for before your event date, not after.",
    publishedDate: "2026-09-02T09:00:00.000Z",
    body: [
      "Event security planning should start well before the event date, not the week of. Key things to map out early: expected crowd size and flow, entrances and exits (including emergency egress), restricted or VIP zones, traffic and parking management, and how officers will communicate and escalate issues during the event. Under Singapore's Public Order Act 2017, events expected to draw more than 5,000 attendees generally require a Notice of Intention to Organise an Event, along with an appropriate security plan — this isn't something to leave to the last minute.",
      "Officer-to-attendee ratios, briefing content, and coordination with venue staff or police (for larger events) should all be settled well ahead of time, not improvised on the day. The organisers who avoid last-minute scrambles are the ones who treat security planning as part of event planning from the start, not a checkbox added once the venue and date are locked in.",
    ],
  },
];
