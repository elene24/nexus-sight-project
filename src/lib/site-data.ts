import {
  GraduationCap, BriefcaseBusiness, FileText,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  modules?: { title: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "training",
    title: "Training",
    short: "Practical, hands-on workshops delivered to institutions, teams, and professionals.",
    description:
      "Practical, hands-on workshops delivered to institutions, teams, and professionals. Each programme combines methodology with applied casework, so participants leave with techniques they can use in their daily work rather than theory alone. Sessions are adapted to the client's operating context and can be delivered as short sessions, full workshops, or extended training cycles.",
    icon: GraduationCap,
    modules: [
      { title: "OSINT Fundamentals", body: "An entry point to open source work: core concepts, the intelligence cycle, search and verification techniques, and the legal and ethical boundaries of collection. Designed for teams building an OSINT capability from the ground up." },
      { title: "Cyber Hygiene", body: "Protecting yourself and your organisation in the open information environment. Covers digital footprint reduction, operational security during research, account and device protection, and recognising social engineering attempts." },
      { title: "OSINT for Law Enforcement", body: "Applied open source techniques for investigative and operational work, including subject research, geolocation, digital evidence handling, and documentation standards that hold up to scrutiny." },
      { title: "OSINT for Diplomatic Monitoring", body: "Structured monitoring of the political and information environment for diplomatic missions and international organisations. Focused on tracking developments, mapping actors and narratives, and producing timely situational awareness." },
      { title: "OSINT for Investigative Journalism", body: "Verification and research methods for newsrooms and independent journalists. Covers source assessment, image and video verification, corporate and public records research, and building a defensible evidence trail." },
      { title: "OSINT for Countering Disinformation", body: "Identifying, analysing, and documenting manipulative information operations. Covers narrative and technique analysis, coordinated behaviour detection, and the analytical frameworks used to classify information threats." },
      { title: "Crafting Analytical Reports", body: "Turning research into product. Structured analytical techniques, managing uncertainty and confidence levels, source referencing, and writing for decision-makers who need clarity rather than volume." },
    ],
  },
  {
    slug: "reports",
    title: "Reports",
    short: "Analytical reporting on geopolitics, national security, and the international security environment.",
    description:
      "Analytical reporting on geopolitics, national security, and the international security environment. Products range from situational updates to in-depth thematic assessments, built on open sources and structured analytical methods. Reporting can be produced on a standing basis or commissioned for a specific question, region, or issue.",
    icon: FileText,
  },
  {
    slug: "consulting",
    title: "Consulting",
    short: "Advisory work on where open source capability adds value and how to build it.",
    description:
      "Advisory work on where open source capability adds value and how to build it. This includes assessing existing information practices, identifying where OSINT strengthens due diligence, risk assessment, and monitoring functions, and designing the workflows, tools, and internal standards needed to embed it into routine operations.",
    icon: BriefcaseBusiness,
  },
];


export type Activity = {
  slug: string;
  category: string;
  date: string;
  title: string;
  preview: string;
  cover: string;
  pinned?: boolean;
};

export const ACTIVITIES: Activity[] = [
  { slug: "nato-liaison-office", category: "Training", date: "Jun 12, 2026", title: "OSINTUS x NATO Liaison Office in Georgia", pinned: true, preview: "On 3 June 2026, OSINTUS delivered a one-day professional training session for the NATO Liaison Office (NLO) team in Georgia, tailored to their operational context and covering core OSINT methodologies.", cover: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=70" },
  { slug: "norwegian-embassy", category: "Diplomatic", date: "Jun 2, 2026", title: "OSINTUS x Royal Norwegian Embassy in Georgia", preview: "On 22 May 2026, OSINTUS delivered another OSINT for Diplomatic Monitoring session — this time for the Royal Norwegian Embassy in Tbilisi, with a representative of the Estonian Embassy also in attendance.", cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70" },
  { slug: "netherlands-embassy", category: "Diplomatic", date: "May 20, 2026", title: "OSINTUS x Embassy of the Netherlands in Georgia", preview: "On 30 April 2026, OSINTUS delivered an OSINT for Diplomatic Monitoring training for the team of the Embassy of the Netherlands in Georgia.", cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70" },
  { slug: "halmstad-university", category: "Academia", date: "May 15, 2026", title: "OSINTUS x Halmstad University", preview: "Tornike Dzamunashvili lectured on OSINT Fundamentals for Academic Research at Halmstad University, Sweden, as part of the SAYP Policy Integration and Transparency Practices module.", cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70" },
  { slug: "eap-civic-tech-hackathon", category: "Award", date: "Apr 27, 2026", title: "OSINTUS x 2026 EaP Civic Tech Hackathon", pinned: true, preview: "The T.R.A.C.E. team — represented by OSINTUS with international partners — won the 2026 EaP Civic Tech Award in Chișinău: an AI-powered platform tracking pro-Russian narratives across borders.", cover: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=70" },
  { slug: "nato-hq", category: "Visit", date: "Mar 14, 2026", title: "OSINTUS x NATO Headquarters", preview: "OSINTUS Founder Tornike Dzamunashvili visited NATO HQ in Brussels for exchanges on resilience, hybrid threats, disinformation, and partnerships in the South Caucasus.", cover: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=70" },
  { slug: "radio-marneuli", category: "Training", date: "Dec 9, 2025", title: "OSINTUS x Radio Marneuli", preview: "A tailored OSINT session for journalists at Radio Marneuli — covering disinformation, decentralisation, and support for ethnic-minority communities in Georgia.", cover: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=70" },
  { slug: "rebrand", category: "Announcement", date: "Sep 12, 2025", title: "We have rebranded: OSINT Time is now OSINTUS", preview: "Our transition from a project to an organisation — a stronger focus, broader energy, and ambitions reaching from local to international.", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70" },
];

export type Insight = {
  slug: string;
  title: string;
  url?: string;
};

// OSINTUS on Medium — links to be added by the team.
export const INSIGHTS: Insight[] = [
  { slug: "investigating-target", title: "Investigating the Target Online" },
  { slug: "search-engines", title: "Search Engines" },
  { slug: "setting-up-workspace", title: "Setting up your OSINT Workspace" },
  { slug: "intro-to-internet", title: "Introduction to the Internet" },
  { slug: "psychology-of-analysis", title: "Psychology of Intelligence Analysis and Structured Analytical Techniques (SAT)" },
  { slug: "intelligence-cycle", title: "Introduction to the Intelligence Cycle (IC)" },
  { slug: "intro-to-osint", title: "Introduction to Open-Source Intelligence (OSINT)" },
  { slug: "resource-list", title: "– Resource List" },
];

export const TEAM = [
  { name: "Tornike Dzamunashvili", role: "Founder & Executive Director", bio: "Tornike Dzamunashvili is an open-source intelligence (OSINT) specialist and trainer with expertise in intelligence analysis, crime analysis, and security risk assessment. He serves as Director of the Education Department at OSINT for Ukraine (Netherlands), where he leads an international remote team in designing and delivering OSINT training programmes and producing educational content focused on building digital resilience, promoting OSINT practices, and countering disinformation. He is actively engaged with the Association of Schools of Political Studies of the Council of Europe (France) and the Tbilisi School of Political Studies (Georgia), contributing to initiatives that promote democratic culture, civic engagement, and the empowerment of emerging leaders. Locally, he founded OSINTUS (Georgia), a company advancing open-source intelligence education, training, and consulting. Tornike holds Bachelor's and Master's degrees in Law and International Law, as well as a programme in National Security and Public Policy from the Georgian Foundation for Strategic and International Studies (Rondeli Foundation).", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=70" },
  { name: "Business Development Advisor", role: "Advisory Board", bio: "…", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=70" },
  { name: "Legal & Compliance Advisor", role: "Advisory Board", bio: "…", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=70" },
  { name: "Brand & Design Advisor", role: "Advisory Board", bio: "…", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=70" },
  { name: "Finance Advisor", role: "Advisory Board", bio: "…", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=70" },
];

export const PARTNERS = [
  "Tbilisi Humanitarian University",
  "Society22",
  "Halmstad University",
  "Embassy of the Netherlands in Georgia",
  "Embassy of Norway in Georgia",
];

export const OPENINGS = [
  { title: "OSINT Trainer (Contract)", location: "Tbilisi / Remote", type: "Contract" },
  { title: "Junior Research Analyst", location: "Tbilisi", type: "Full-time" },
  { title: "Partnerships & Outreach Lead", location: "Tbilisi", type: "Full-time" },
];

export const TRUSTED_BY = [
  "NATO",
  "Norwegian Embassy in Georgia",
  "Embassy of the Netherlands in Georgia",
  "Swedish Institute (Svenska institutet)",
  "Halmstad University",
  "European Union",
  "Eastern Partnership Civil Society Facility",
  "Erasmus+",
  "Tbilisi School of Political Studies",
  "School of Civic Education",
  "Radio Marneuli",
];
