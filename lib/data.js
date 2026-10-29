// ALL website content lives here. Edit this file to update the site.

export const company = {
  name: "AZKIS Cosmopolitan",
  tagline: "Government & Defence — Mobility Made Seamless",
  established: 1973,
  registeredMod: 1975,
  staff: 15,
  emails: ["azkis@azkis.com.pk", "azkiscosmopolitan@gmail.com"],
  hours: "Mon – Fri, 9 am – 6 pm",
  whatsapp: "", // e.g. "923001234567" (country code, no + or spaces). Empty hides the button.
  offices: [
    {
      city: "Rawalpindi",
      label: "Head Office",
      address: ["Suite No. 75, 2nd Floor, Mobi Plaza,", "Haider Road, Saddar, Rawalpindi, Pakistan"],
      phones: ["+92-51-5512425", "+92-51-5514777"],
      fax: "92-21-5514352",
    },
    {
      // NOTE: the live website lists this address; the PowerPoint lists "Suite 725 & 726, UP Society".
      // Confirm which is current and edit here.
      city: "Karachi",
      label: "Branch Office",
      address: ["72 Dilkusha Chambers,", "Marston Road, Plaza Quarters, Karachi, Pakistan"],
      phones: ["+92-21-32721173", "+92-21-32736806"],
      fax: "92-21-32742870",
    },
  ],
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/power", label: "Power & Electrical" },
      { href: "/services/data", label: "Data & Networking" },
      { href: "/services/voice", label: "Voice & Communication" },
      { href: "/services/security", label: "Security & Low-Current" },
      { href: "/services/civil", label: "Civil & Construction" },
      { href: "/services/interior", label: "Interior & Finishing" },
      { href: "/services/energy", label: "Alternative Energy" },
      { href: "/services/turnkey", label: "Turnkey & Materials" },
      { href: "/services/procurement", label: "Procurement & Supply Chain" },
      { href: "/services/it", label: "IT Equipment & Networking" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products/defence", label: "Defence & Military" },
      { href: "/products/training", label: "Simulators & Training" },
      { href: "/products/aviation", label: "Aviation & Ground Support" },
      { href: "/products/safety", label: "Fire, CBRN & Safety" },
      { href: "/products/medical", label: "Medical & Healthcare" },
      { href: "/products/industrial", label: "Industrial & Workshop" },
      { href: "/products/energy", label: "Energy & Environment" },
      { href: "/products/construction", label: "Construction" },
    ],
  },
  { href: "/about#industries", label: "Industries" },
  { href: "/association", label: "Association" },
  { href: "/contact", label: "Contact" },
];

export const glance = [
  "A passion to serve our customers",
  "Group of professionals under one roof",
  "Extraordinary relations with our customers",
  "4 decades of experience",
  "Personalized, focused service",
  "Service flexibility",
  "Major project handling capability",
];

export const about = {
  intro:
    "AZKIS Cosmopolitan is an integrated infrastructure and turnkey project solutions company serving the banking, corporate, commercial and Ministry of Defence (MoD) sectors, backed by extensive experience in engineering, construction and infrastructure development.",
  story: [
    "Established in 1973 and registered with the Ministry of Defence in 1975, AZKIS Cosmopolitan has grown over four decades into a diversified marketing and engineering support organization, synonymous with cutting-edge technology and trading. After its initial success the company diversified into other fields and operations, and has served the MoD and its allied establishments with an impeccable record.",
    "The company delivers civil, electrical, mechanical and integrated infrastructure projects across commercial, corporate and public sectors, with experience in roads, airports, motorways, housing and industrial projects. Its expertise also covers power systems, structured cabling, voice systems, interiors, finishing and turnkey execution.",
    "AZKIS integrates energy-efficient and renewable energy solutions and manages projects from feasibility and design through construction, commissioning and post-completion support. We contribute our share to the development of the country and provide a base for foreign investors to promote their products in Pakistan.",
  ],
  philosophy:
    "AZKIS Cosmopolitan is well versed with business procedures and modalities, which has yielded excellent relations with many foreign companies and a very satisfied clientele. We believe in long-term, mutually beneficial relations based on honesty and customer confidence. We commit the same resources, time and energy to customer service as we do to our technical knowledge, providing round-the-clock service throughout the year.",
  pillars: [
    { title: "One-window delivery", text: "Multiple services managed through one team." },
    { title: "Banking-sector focus", text: "Solutions designed around branch requirements." },
    { title: "Coordinated execution", text: "Planning, installation, finishing and handover." },
  ],
  mission: {
    text: "To deliver dependable, safe and high-quality infrastructure and turnkey solutions through ethical business practices, technical expertise, innovation and advanced technologies.",
    extra:
      "We simplify project delivery through disciplined management, attention to detail and seamless coordination from planning to final handover, building long-term client relationships through exceptional service and repeat business.",
    values: ["Quality", "Safety", "Accountability"],
  },
  vision: {
    text: "To become a trusted national partner in banking and commercial infrastructure, recognized for reliable execution, integrated solutions, engineering excellence and exceptional quality.",
    extra:
      "We aspire to exceed client expectations through authenticity, hard work, innovation and responsive after-sales support, transforming ambitious ideas into reality.",
    values: [
      { title: "Trust", text: "Transparent working relationships" },
      { title: "Consistency", text: "Repeatable standards and quality" },
      { title: "Growth", text: "Capability across regions and sectors" },
    ],
  },
  md: {
    title: "Message from the Managing Director",
    text: "Establishing close relationships with our clients is a key element to reaching total solutions. We cultivate each client relationship from the initial concept to completion, often maintaining this contact years after a project is finished. We believe successful consulting is achieved through a balance of significant experience, a working knowledge of today's best practices, and access to cutting-edge technology. We offer expertise that goes beyond the “state of the practice” to include innovative solutions using techniques usually found in both Defence and Civil sectors.",
  },
};

export const team = [
  { title: "Management & Client Coordination", text: "Client liaison, planning, reporting and approvals.", icon: "users" },
  { title: "Project & Site Management", text: "Scheduling, site supervision, coordination and progress tracking.", icon: "clipboard" },
  { title: "Power, Data & Voice Engineers", text: "Installation, configuration, testing and commissioning.", icon: "bolt" },
  { title: "Civil & Finishing Teams", text: "Construction, masonry, flooring, glass, iron and finishing works.", icon: "building" },
  { title: "Procurement & Logistics", text: "Materials, vendor coordination, delivery and inventory.", icon: "truck" },
  { title: "Quality, Safety & Handover", text: "Inspection, snag resolution, documentation and handover.", icon: "shield" },
];

export const clients = [
  { title: "Ministry of Defence & allied establishments", text: "Import and indenting of foreign goods to MoD since 1975." },
  { title: "Banking & Financial Institutions", text: "New branches, renovations, relocations and maintenance." },
  { title: "Corporate & Commercial Offices", text: "Workplace power, connectivity, communication and fit-outs." },
  { title: "Retail & Service Networks", text: "Multi-site rollouts, standardization and branch upgrades." },
  { title: "Developers & Project Consultants", text: "Specialist subcontracting and integrated project packages." },
];

export const structure = {
  top: "Management Team",
  branches: [
    { head: "Commercial", items: ["Procurement", "Supplies"] },
    { head: "Project Management", items: ["Project Operation", "Construction"] },
    { head: "Admin / Finance", items: ["Planning / Design", "Engineering Consultancy"] },
  ],
};


export const services = [
  {
    id: "power", short: "Power & Electrical", img: "/images/services_image/Electric.jpg", icon: "bolt",
    title: "Power & Electrical",
    text: "Distribution boards, wiring, lighting, cable routing, earthing, UPS and backup power for commercial and institutional facilities.",
    heading: "Power & Electrical Infrastructure Solutions",
    paras: [
      "AZKIS Cosmopolitan provides comprehensive power and electrical solutions for commercial buildings, banking facilities, government institutions, corporate offices, healthcare facilities and industrial environments. Our services cover the complete electrical infrastructure lifecycle, from initial site assessment and system planning to material procurement, installation, testing and commissioning. We focus on delivering reliable, safe and efficient electrical systems that support the operational requirements of modern facilities.",
      "Our electrical installation services include the development of electrical distribution networks, installation of main and sub-distribution boards, circuit protection systems, internal wiring, power outlets, lighting systems and dedicated electrical supplies for equipment and machinery. We coordinate electrical layouts with architectural, civil and technical requirements to ensure that installations are properly integrated into the overall building infrastructure.",
      "We also undertake cable routing, conduit installation, cable tray systems, power cabling and earthing arrangements to support safe and organized electrical distribution. Where required, our scope includes UPS systems, backup power integration, emergency lighting and other power continuity solutions designed to support essential business operations.",
      "AZKIS Cosmopolitan emphasizes proper installation practices, quality materials, technical coordination and systematic testing before project handover. Our objective is to provide dependable electrical infrastructure that meets project specifications, applicable safety requirements and the long-term operational needs of our clients.",
    ],
    points: [
      "Electrical distribution networks", "Main & sub-distribution boards", "Circuit protection & internal wiring",
      "Lighting, power outlets & dedicated supplies", "Cable routing, conduit & cable trays", "Earthing arrangements",
      "UPS, backup power & emergency lighting", "Systematic testing before handover",
    ],
  },
  {
    id: "data", short: "Data & Networking", img: "/images/services_image/ITNetworking.png", icon: "network",
    title: "Data & Networking",
    text: "Structured cabling, LAN / WAN, Cat6 & fiber, racks, switches, Wi-Fi and network testing for offices and branches.",
    heading: "Data Networking & IT Infrastructure Solutions",
    paras: [
      "AZKIS Cosmopolitan delivers integrated data and networking solutions that enable secure, reliable and efficient connectivity across offices, bank branches, government facilities, corporate environments and multi-location organizations. We understand that modern business operations depend on stable network infrastructure for communication, information exchange, centralized systems and day-to-day productivity. Our services are designed to establish a structured and scalable foundation for these operational requirements.",
      "Our networking scope includes structured cabling, LAN and WAN infrastructure, Cat6 and Cat6A cabling, fiber optic installations, network racks, patch panels, cable management systems and communication cabinets. We plan and deploy network infrastructure according to site layouts, equipment requirements and anticipated connectivity needs, ensuring that the installation remains organized, accessible and suitable for future expansion.",
      "We also provide network equipment installation and configuration, including switches, routers, wireless access points, firewalls and associated connectivity devices. Depending on project requirements, our work may include VLAN configuration, IP addressing, wireless coverage planning, network segmentation and coordination with internet service providers to establish reliable connectivity between users, devices and business systems.",
      "In addition to new installations, AZKIS Cosmopolitan supports network relocation, infrastructure upgrades, fault identification, cable testing, troubleshooting and maintenance. Every project is approached with attention to technical accuracy, structured documentation and system testing, helping clients maintain dependable connectivity and an infrastructure that can adapt to changing business requirements.",
    ],
    points: [
      "Structured cabling — Cat6 & Cat6A", "Fiber optic installations", "LAN & WAN infrastructure",
      "Racks, patch panels & cable management", "Switches, routers, access points & firewalls", "VLAN, IP addressing & network segmentation",
      "Relocation, upgrades & fault identification", "Cable testing, troubleshooting & maintenance",
    ],
  },
  {
    id: "voice", short: "Voice & Communication", img: "/images/services_image/VoiceAndCommunication.png", icon: "phone",
    title: "Voice & Communication",
    text: "PABX / IP-PBX systems, IP telephones, extensions, voice cabling, VoIP and conference-room communication.",
    heading: "Voice & Business Communication Solutions",
    paras: [
      "AZKIS Cosmopolitan provides professional voice and communication infrastructure for businesses and institutions that require reliable internal communication and seamless connectivity between departments, offices and branches. Our solutions are designed to support efficient business communication through integrated telephony systems, structured voice cabling and modern digital communication technologies.",
      "Our services cover the installation and configuration of PABX and IP-PBX systems, analog telephone exchanges, IP telephones, telephone extensions and associated communication cabling. We assist in planning extension layouts, allocating telephone points, connecting departments and establishing communication systems that suit the operational structure of each facility. For multi-branch organizations, we coordinate communication infrastructure according to the client's technical requirements and existing systems.",
      "AZKIS Cosmopolitan also supports VoIP-based communication, SIP-enabled telephony and conference room communication systems where applicable. Our scope can include video conferencing equipment, meeting room audio systems, intercom facilities and other communication solutions required for professional office environments.",
      "Our approach emphasizes compatibility, clear voice transmission, proper configuration and dependable system performance. From new office installations to the expansion or modernization of existing communication infrastructure, we coordinate installation, testing, troubleshooting and handover to help clients maintain effective and uninterrupted business communication.",
    ],
    points: [
      "PABX & IP-PBX systems", "Analog exchanges & IP telephones", "Telephone extensions & voice cabling",
      "VoIP & SIP-enabled telephony", "Video conferencing & meeting-room audio", "Intercom facilities",
      "Multi-branch communication planning", "Testing, troubleshooting & handover",
    ],
  },
  {
    id: "security", short: "Security & Low-Current", img: "/images/services_image/SecurityandLowCurrent.png", icon: "camera",
    title: "Security & Low-Current",
    text: "CCTV (IP & analog), NVR / DVR, access control, biometrics, fire alarms, public address and intercoms.",
    heading: "Integrated Security & Low-Current Systems",
    paras: [
      "AZKIS Cosmopolitan provides integrated electronic security and low-current solutions designed to improve the safety, monitoring, access management and operational control of commercial buildings, banking facilities, corporate offices, healthcare institutions and government premises. Our solutions combine appropriate security technologies with the required cabling, power, connectivity and installation infrastructure to deliver coordinated systems that meet individual project requirements.",
      "Our security services include CCTV surveillance systems using IP and analog technologies, network video recorders, digital video recorders, surveillance storage and monitoring arrangements. We support camera placement planning, cable routing, equipment installation and system configuration to provide effective coverage of designated areas. Where required, remote viewing and centralized monitoring can also be incorporated, subject to the client's network, security policies and system capabilities.",
      "We also undertake access control installations, biometric identification systems, RFID-based access solutions, electronic door locks and controlled entry arrangements. These systems can be designed to support authorized access to offices, restricted areas, equipment rooms and other sensitive locations. Additional low-current services may include fire detection and alarm systems, public address systems, intercoms, video door phones and related electronic infrastructure, according to project scope and applicable requirements.",
      "Our work extends from the initial assessment and equipment selection to installation, configuration, functional testing and handover. By coordinating multiple low-current systems within one project, AZKIS Cosmopolitan helps clients establish an integrated security environment that supports visibility, access management and operational reliability.",
    ],
    points: [
      "IP & analog CCTV with NVR / DVR", "Remote viewing & centralized monitoring", "Access control & biometric identification",
      "RFID-based access & electronic door locks", "Fire detection & alarm systems", "Public address, intercoms & video door phones",
      "Assessment & equipment selection", "Functional testing & handover",
    ],
  },
  {
    id: "civil", short: "Civil & Construction", img: "/images/services_image/Consction.jpg", icon: "building",
    title: "Civil Construction & Infrastructure",
    text: "Building alterations, masonry, concrete, flooring, waterproofing, renovation and refurbishment of commercial premises.",
    heading: "Civil Construction & Infrastructure Development",
    paras: [
      "AZKIS Cosmopolitan provides civil construction, renovation and infrastructure development services for banking facilities, commercial properties, corporate offices, healthcare environments, government establishments and other institutional projects. Our civil works are planned around the functional requirements of each site, with attention to construction quality, material specifications, site coordination and project timelines.",
      "Our capabilities include building alterations, masonry, plastering, concrete works, floor preparation, tile and marble installation, waterproofing, painting preparation and other civil activities required for the development or refurbishment of commercial spaces. We coordinate site execution with electrical, networking, security and interior teams to ensure that civil activities support the complete project rather than operate independently of other technical requirements.",
      "AZKIS Cosmopolitan also undertakes renovation and refurbishment work for existing buildings and operational premises. This may involve modifications to internal layouts, repair of damaged surfaces, replacement of finishes, installation of doors and windows, glass and aluminum works, and preparation of areas for new electrical or communication infrastructure. Site conditions, building requirements and approved drawings are considered before the relevant work is executed.",
      "Throughout the construction process, our focus remains on proper site supervision, workmanship, material coordination, progress monitoring and quality checks. We aim to deliver functional, durable and professionally finished spaces that align with the client's approved scope, technical specifications and practical operational needs.",
    ],
    points: [
      "Building alterations & masonry", "Plastering & concrete works", "Floor preparation, tile & marble installation",
      "Waterproofing & painting preparation", "Renovation & refurbishment", "Doors, windows, glass & aluminum works",
      "Preparation for electrical & communication infrastructure", "Site supervision & quality checks",
    ],
  },
  {
    id: "interior", short: "Interior & Finishing", img: "/images/services_image/interiorfinishing.png", icon: "brush",
    title: "Interior Fit-Out & Finishing",
    text: "Office layouts, partitions, false ceilings, flooring, wall finishes, reception counters, cabinetry and workstations.",
    heading: "Interior Fit-Out & Finishing Solutions",
    paras: [
      "AZKIS Cosmopolitan offers interior fit-out and finishing solutions for corporate offices, bank branches, commercial facilities, healthcare environments and institutional spaces. We help transform existing or newly constructed premises into functional, organized and professionally finished environments by coordinating interior elements with the building's operational, architectural and technical requirements.",
      "Our interior works may include office layout development, partitioning, false ceilings, flooring, tiles, marble, wall finishes, painting, glass installations, aluminum framing and related finishing activities. We also coordinate the installation of reception counters, workstations, cabinetry, storage units and other built-in elements required for practical and efficient workplace arrangements. Material selection and finishing details are aligned with the client's design preferences, approved specifications and project budget.",
      "A key aspect of our approach is the integration of interior works with electrical distribution, lighting, structured cabling, telephone points, CCTV, access control and other building systems. This coordination helps ensure that service outlets, equipment locations and concealed infrastructure are properly considered during execution, reducing unnecessary rework and supporting a cleaner final appearance.",
      "From site measurements and material coordination to installation, finishing inspections and snag resolution, AZKIS Cosmopolitan manages the activities required to complete the agreed interior scope. Our objective is to deliver spaces that combine functionality, durability, professional presentation and suitability for everyday business operations.",
    ],
    points: [
      "Office layout development & partitioning", "False ceilings & flooring", "Tiles, marble & wall finishes",
      "Painting, glass installations & aluminum framing", "Reception counters & workstations", "Cabinetry & storage units",
      "Integration with power, data, CCTV & access control", "Finishing inspections & snag resolution",
    ],
  },
  {
    id: "energy", short: "Alternative Energy", img: "/images/services_image/AlternativeEnergy.jpg", icon: "leaf",
    title: "Alternative Energy & Renewable Power",
    text: "Solar PV and rooftop systems, inverters, battery storage, hybrid arrangements and energy monitoring.",
    heading: "Alternative Energy & Renewable Power Solutions",
    paras: [
      "AZKIS Cosmopolitan provides alternative energy solutions for commercial, corporate and institutional clients seeking to improve energy efficiency, strengthen power availability and explore renewable energy options. Our services focus on identifying suitable system configurations based on the client's energy requirements, site conditions, available infrastructure and intended operational benefits.",
      "Our renewable energy scope includes solar photovoltaic installations, rooftop solar systems, solar inverters, associated electrical infrastructure and the integration of solar generation with suitable existing power arrangements. Depending on the project, solutions may be designed for self-consumption, hybrid operation or other configurations permitted by the applicable utility and regulatory framework. Site assessment and system planning help establish the appropriate capacity, equipment requirements and installation approach.",
      "Where required, AZKIS Cosmopolitan can also coordinate battery storage, inverter-based backup arrangements and energy monitoring systems. These solutions may help businesses manage selected critical loads, improve visibility into energy usage and support continuity during certain power interruptions, depending on the installed system's design and capacity.",
      "Our project approach covers the coordination of equipment procurement, electrical installation, system integration, testing and commissioning. We aim to provide practical and well-coordinated energy solutions that support responsible energy use and reliable operation, while ensuring that the final system configuration is appropriate for the client's site and technical requirements.",
    ],
    points: [
      "Solar photovoltaic & rooftop solar systems", "Solar inverters & electrical infrastructure", "Self-consumption & hybrid configurations",
      "Battery storage & inverter-based backup", "Energy monitoring systems", "Site assessment & system planning",
      "Equipment procurement & system integration", "Testing & commissioning",
    ],
  },
  {
    id: "turnkey", short: "Turnkey & Materials", img: "/images/services_image/Turnkeyprojects.png", icon: "clipboard",
    title: "Turnkey Projects & Material Supply",
    text: "One coordinated team for civil, electrical, data, voice, security, interiors, furniture and signage — from requirements to handover.",
    heading: "Turnkey Projects, Procurement & Material Supply",
    paras: [
      "AZKIS Cosmopolitan provides integrated turnkey project solutions and material procurement services for banking, government and defence, corporate, healthcare and commercial sectors. Our approach is designed for clients who prefer a coordinated project delivery model rather than managing separate contractors, suppliers and technical teams for each activity. By bringing procurement, installation and project coordination together, we help simplify project execution and establish a clear process from initial requirements to final handover.",
      "Our turnkey services can cover the development, renovation, refurbishment and fit-out of offices, bank branches, institutional premises and commercial facilities. Depending on the approved project scope, this may include civil construction, electrical infrastructure, data and networking, voice communication, CCTV and access control, interior finishing, furniture, signage and other building-related requirements. Each discipline is coordinated according to the site's needs, technical specifications and agreed deliverables.",
      "Material procurement is an important part of our service offering. We coordinate the sourcing and supply of electrical equipment, cables, networking hardware, communication devices, security systems, construction materials, finishing products, fixtures and other project-related items. Procurement activities are organized around approved specifications, availability, delivery schedules and project requirements, with attention to material compatibility and coordination between different work packages.",
      "AZKIS Cosmopolitan also supports site supervision, contractor coordination, installation management, progress monitoring and quality checks throughout the execution process. At completion, the agreed scope may include system testing, commissioning, snag resolution, documentation and formal handover. Our objective is to provide clients with a single coordinated point of contact for multiple project requirements, helping improve accountability, simplify communication and support a more organized delivery process.",
    ],
    points: [
      "Development, renovation, refurbishment & fit-out", "Civil, electrical, data & voice packages", "CCTV, access control & interior finishing",
      "Furniture, signage & building-related items", "Sourcing of electrical, IT, security & construction materials", "Site supervision & contractor coordination",
      "Progress monitoring & quality checks", "Testing, commissioning & formal handover",
    ],
  },
  {
    id: "procurement", short: "Procurement & Supply", img: "/images/services_image/Procurement.jpg", art: "/images/services/procurment.jpg", icon: "truck",
    title: "Procurement & Supply Chain",
    text: "Supply to government departments, MoD, military establishments and banks — from institutional goods to specialized vehicles.",
    heading: "Procurement & Supply Chain Solutions",
    paras: [
      "AZKIS Cosmopolitan provides comprehensive procurement, material supply and supply chain solutions to government departments, the Ministry of Defence (MoD), military establishments, banking institutions and public and private sector organizations. Our capabilities extend from general institutional supplies and technical equipment to specialized vehicles, including armoured trucks and other vehicle requirements, with experience in procurement assignments involving the Pakistan Army and Pakistan Navy.",
      "We facilitate the sourcing and supply of electrical equipment, IT and networking products, communication and security systems, construction materials, office equipment, specialized vehicles and other institutional goods. Our procurement process includes supplier identification, quotation coordination, specification assessment, purchase coordination, logistics planning, documentation and delivery management, according to client requirements and contractual obligations.",
      "Whether fulfilling individual purchase orders, bulk material requirements, specialized equipment procurement or supply needs for large-scale infrastructure projects, AZKIS Cosmopolitan offers a coordinated and reliable procurement approach. By combining supply chain capabilities with our technical services and turnkey project expertise, we provide clients with a single point of coordination for diverse procurement, material supply and project-related requirements.",
    ],
    points: [
      "Government departments, MoD & military establishments", "Banking, public & private sector organizations", "Electrical, IT, communication & security equipment",
      "Specialized vehicles, including armoured trucks", "Pakistan Army & Pakistan Navy procurement experience", "Supplier identification & quotation coordination",
      "Specification assessment & purchase coordination", "Logistics, documentation & delivery management",
    ],
  },
  {
    id: "it", short: "IT Equipment", img: "/images/services_image/ITProcurement.png", art: "/images/services/it-equipment.jfif", icon: "monitor",
    title: "IT Equipment & Networking",
    text: "New and refurbished laptops, desktops and servers, plus Cisco, TP-Link, Tenda, Grandstream and Fortinet networking and security.",
    heading: "IT Equipment & Networking Solutions",
    paras: [
      "AZKIS Cosmopolitan provides comprehensive IT equipment procurement and supply solutions for government departments, defence organizations, banking institutions, corporate offices and other public and private sector entities. Our portfolio covers new and refurbished laptops, desktop computers, workstations, monitors, IT accessories, computer peripherals and essential computing hardware to meet diverse organizational requirements.",
      "We also source and supply networking and connectivity equipment from recognized brands, including Cisco, TP-Link, Tenda and Grandstream. Our networking portfolio includes switches, routers, wireless access points, PoE solutions and related network infrastructure products. In addition, we facilitate the supply of Fortinet FortiGate firewalls and other suitable network security appliances to support organizational security and connectivity requirements.",
      "Our wider IT supply portfolio can include servers, storage devices, network racks, patch panels, cables, components and enterprise infrastructure hardware. We coordinate product sourcing, specification matching, quotations, procurement and delivery according to client requirements, approved budgets and applicable procurement procedures.",
      "Whether supporting individual equipment purchases, bulk institutional procurement, office IT deployments or enterprise network upgrades, AZKIS Cosmopolitan aims to provide dependable sourcing and coordinated supply. By combining IT hardware procurement with our networking, security and infrastructure capabilities, we offer clients a single point of coordination for a broad range of technology requirements.",
    ],
    points: [
      "New & refurbished laptops, desktops & workstations", "Monitors, IT accessories & peripherals", "Cisco, TP-Link, Tenda & Grandstream equipment",
      "Switches, routers, access points & PoE solutions", "Fortinet FortiGate firewalls & security appliances", "Servers, storage & enterprise hardware",
      "Network racks, patch panels, cables & components", "Bulk institutional procurement",
    ],
  },
];

export const categories = [
  {
    id: "defence", img: "/images/services/miliary_defence.jfif", art: "/images/services/miliary_defence.jfif", icon: "shield", title: "Defence & Military",
    blurb: "Hardware, optics and power systems for the armed forces.",
    items: [
      { name: "Military Hardware / Systems", desc: "Land, sea and air systems indented for MoD and allied establishments." },
      { name: "APU (Auxiliary Power Unit) for Tanks", desc: "Auxiliary power for armoured platforms." },
      { name: "Night Vision Devices", desc: "Binoculars, monoculars and weapon-mounted night vision." },
    ],
  },
  {
    id: "training", img: "/images/services/simulatorss.jfif", art: "/images/services/simulatorss.jfif", icon: "monitor", title: "Simulators & Training",
    blurb: "Simulation systems for driver, pilot and weapons training.",
    items: [
      { name: "Vehicle Driving Simulators", desc: "Car, jeep, bus, truck and motorcycle driving simulators." },
      { name: "Tank & Aviation Simulators", desc: "Tank and aviation simulators and civil armed forces training systems." },
      { name: "Small Arms & Sniper Training Simulators", desc: "Rifle and sniper simulators for training on weapons and anti-terrorism." },
    ],
  },
  {
    id: "aviation", img: "/images/services/aviation.jfif", art: "/images/services/aviation.jfif", icon: "plane", title: "Aviation & Ground Support",
    blurb: "Aircraft servicing and airfield maintenance equipment.",
    items: [
      { name: "Aircraft Refuelers", desc: "Mobile refuelling vehicles for airfields." },
      { name: "Aviation Parts", desc: "Spares and components for aviation platforms." },
      { name: "Runway Rubber Removal", desc: "Truck-mounted systems that restore runway friction." },
    ],
  },
  {
    id: "safety", img: "/images/services/fire_workers.jfif", art: "/images/services/fire_workers.jfif", icon: "flame", title: "Fire, CBRN & Safety",
    blurb: "Protection against fire, contamination and pressure-related emergencies.",
    items: [
      { name: "Firefighting Vehicles / Equipment", desc: "Fire vehicles, portable pumps and fire-fighting equipment." },
      { name: "CBRN / NBC Decontamination Products", desc: "Decontamination units for chemical, biological, radiological and nuclear threats." },
      { name: "Gamow Bags", desc: "Portable hyperbaric chambers for altitude sickness." },
    ],
  },
  {
    id: "medical", img: "/images/services/medical.jfif", art: "/images/services/medical.jfif", icon: "cross", title: "Medical & Healthcare",
    blurb: "Field and hospital equipment.",
    items: [
      { name: "Medical Products / Hospital Beds", desc: "Hospital beds, stretchers and emergency dressings." },
      { name: "Hospital Equipment", desc: "Equipment for hospitals and clinics." },
      { name: "Mobile Hospitals", desc: "Deployable medical facilities." },
    ],
  },
  {
    id: "industrial", img: "/images/services/industrial.jfif", art: "/images/services/industrial.jfif", icon: "cog", title: "Industrial & Workshop",
    blurb: "Machinery for workshops, plants and heavy work sites.",
    items: [
      { name: "Workshop Machinery / Equipment", desc: "CNC machining centres, water-jet cutters and blasting cabinets." },
      { name: "Heavy Machinery Parts", desc: "Parts for heavy and industrial machinery." },
      { name: "Earthmoving Construction Machinery", desc: "Loaders and earthmoving plant." },
      { name: "Compressors", desc: "Industrial air compressors." },
    ],
  },
  {
    id: "energy", img: "/images/services/energy.jfif", art: "/images/services/energy.jfif", icon: "leaf", title: "Energy & Environment",
    blurb: "Cleaner power and waste conversion.",
    items: [
      { name: "Alternate Energies", desc: "Alternative and renewable energy systems." },
      { name: "Waste to Energy Plants", desc: "Plants that convert waste into usable energy." },
    ],
  },
  {
    id: "construction", img: "/images/services/construction.jfif", art: "/images/services/construction.jfif", icon: "building", title: "Construction",
    blurb: "Building work for civil and government clients.",
    items: [
      { name: "Construction — Civil & Government", desc: "Construction in both civil and government establishments." },
    ],
  },
];

export const partners = [
  // Add partner companies here. Example:
  // { name: "Partner Name", country: "Country", scope: "What they supply", url: "https://..." },
];

export const approach = [
  { title: "Understand", text: "We study the requirement, the end user and the approval route." },
  { title: "Source", text: "We work with trusted local and international principals to find the right product." },
  { title: "Import & indent", text: "We handle documentation, import and indenting to MoD and other clients." },
  { title: "Support", text: "Installation, training and round-the-clock after-sales service." },
];

// Process shown on the home page ("One-Window Project Solution")
export const process = [
  { icon: "ruler", title: "Planning & Design" },
  { icon: "cube", title: "Material Procurement" },
  { icon: "cog", title: "Installation & Integration" },
  { icon: "check", title: "Testing & Commissioning" },
  { icon: "handshake", title: "Handover & Support" },
];

// "Why AZKIS" strip on the home page
export const why = [
  { icon: "shield", title: "Quality & Safety", text: "Highest standards in every project." },
  { icon: "users", title: "Technical Expertise", text: "Skilled team with proven experience." },
  { icon: "clock", title: "On-Time Delivery", text: "Committed to your timelines." },
  { icon: "handshake", title: "Accountability", text: "One partner. Full responsibility." },
];

// Featured projects (home page). PLACEHOLDER: generic project types taken from the design.
// Replace with real projects (and drop photos in public/images/projects/) when available.
export const projects = [
  { title: "Bank Branch Network", tags: "Power | Data | CCTV | Access Control", img: "/images/projects/bank.jpg" },
  { title: "Corporate Office", tags: "Networking | ELV | Interiors", img: "/images/projects/office.jpg" },
  { title: "Commercial Building", tags: "Construction | MEP | Turnkey", img: "/images/projects/commercial.jpg" },
  { title: "Industrial Facility", tags: "Electrical | Civil | Automation", img: "/images/projects/industrial.jpg" },
];

// Industries strip (home page) - taken from the "Who we serve" slide + MoD
export const industries = [
  { icon: "shield", title: "Defence & MoD" },
  { icon: "bank", title: "Banking & Finance" },
  { icon: "building", title: "Corporate Offices" },
  { icon: "cart", title: "Retail & Service" },
  { icon: "factory", title: "Developers & Consultants" },
];

// Social links: only those with a URL are shown in the footer.
export const social = [
  { name: "LinkedIn", short: "in", url: "" },
  { name: "Facebook", short: "f", url: "" },
  { name: "Instagram", short: "ig", url: "" },
];

// "What We Do" block on the home page - copy from the live website (azkis.com.pk)
export const whatWeDo = {
  title: "Government & Defence Imports, Indenting and Turnkey Projects",
  text: "AZKIS Cosmopolitan is a composite company, always looking for new avenues, engaged in imports/indenting of foreign goods to the MoD. Everything you can imagine in the defence sector, backed by four decades of experience.",
};
