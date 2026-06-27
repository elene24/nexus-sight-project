import {
  Search, ShieldCheck, FileSearch, Radar, GraduationCap, BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  { slug: "osint-training", title: "OSINT Training", short: "Practitioner-led training programmes in Open-Source Intelligence.", description: "Tailored OSINT curricula for diplomats, journalists, NGOs, public institutions, academia, and security teams — from foundations to advanced tradecraft.", icon: GraduationCap },
  { slug: "consulting", title: "Consulting", short: "Strategic advisory across OSINT, cyber hygiene, and information environment monitoring.", description: "We help organisations design and mature OSINT capabilities, strengthen operational security posture, and build resilience against disinformation.", icon: BriefcaseBusiness },
  { slug: "open-source-intelligence", title: "Open-Source Intelligence", short: "Structured collection, verification, and analysis from open sources.", description: "Bespoke OSINT engagements mapping subjects, networks, and risk indicators across public records, social signals, and technical infrastructure.", icon: Search },
  { slug: "diplomatic-monitoring", title: "OSINT for Diplomatic Monitoring", short: "Information environment monitoring for embassies and diplomatic missions.", description: "Our signature programme — delivered to NATO, the Royal Norwegian Embassy, the Embassy of the Netherlands, and other diplomatic teams in Georgia.", icon: Radar },
  { slug: "investigations", title: "Investigations & Verification", short: "Verification of digital content, sources, and online subjects.", description: "Multi-method verification combining OSINT tradecraft, forensic analysis, and structured analytical techniques.", icon: FileSearch },
  { slug: "cyber-hygiene", title: "Cyber Hygiene & OPSEC", short: "Practical digital safety for individuals, teams, and institutions.", description: "Hands-on training and audits covering operational security, account hygiene, device hardening, and safe online research practice.", icon: ShieldCheck },
];

export type Activity = {
  slug: string;
  category: string;
  date: string;
  title: string;
  preview: string;
  cover: string;
};

export const ACTIVITIES: Activity[] = [
  { slug: "nato-liaison-office", category: "Training", date: "Jun 12, 2026", title: "OSINTUS x NATO Liaison Office in Georgia", preview: "On 3 June 2026, OSINTUS delivered a one-day professional training session for the NATO Liaison Office (NLO) team in Georgia, tailored to their operational context and covering core OSINT methodologies.", cover: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=70" },
  { slug: "norwegian-embassy", category: "Diplomatic", date: "Jun 2, 2026", title: "OSINTUS x Royal Norwegian Embassy in Georgia", preview: "On 22 May 2026, OSINTUS delivered another OSINT for Diplomatic Monitoring session — this time for the Royal Norwegian Embassy in Tbilisi, with a representative of the Estonian Embassy also in attendance.", cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70" },
  { slug: "netherlands-embassy", category: "Diplomatic", date: "May 20, 2026", title: "OSINTUS x Embassy of the Netherlands in Georgia", preview: "On 30 April 2026, OSINTUS delivered an OSINT for Diplomatic Monitoring training for the team of the Embassy of the Netherlands in Georgia.", cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70" },
  { slug: "halmstad-university", category: "Academia", date: "May 15, 2026", title: "OSINTUS x Halmstad University", preview: "Tornike Dzamunashvili lectured on OSINT Fundamentals for Academic Research at Halmstad University, Sweden, as part of the SAYP Policy Integration and Transparency Practices module.", cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70" },
  { slug: "eap-civic-tech-hackathon", category: "Award", date: "Apr 27, 2026", title: "OSINTUS x 2026 EaP Civic Tech Hackathon", preview: "The T.R.A.C.E. team — represented by OSINTUS with international partners — won the 2026 EaP Civic Tech Award in Chișinău: an AI-powered platform tracking pro-Russian narratives across borders.", cover: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=70" },
  { slug: "nato-hq", category: "Visit", date: "Mar 14, 2026", title: "OSINTUS x NATO Headquarters", preview: "OSINTUS Founder Tornike Dzamunashvili visited NATO HQ in Brussels for exchanges on resilience, hybrid threats, disinformation, and partnerships in the South Caucasus.", cover: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1200&q=70" },
  { slug: "radio-marneuli", category: "Training", date: "Dec 9, 2025", title: "OSINTUS x Radio Marneuli", preview: "A tailored OSINT session for journalists at Radio Marneuli — covering disinformation, decentralisation, and support for ethnic-minority communities in Georgia.", cover: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=70" },
  { slug: "rebrand", category: "Announcement", date: "Sep 12, 2025", title: "We have rebranded: OSINT Time is now OSINTUS", preview: "Our transition from a project to an organisation — a stronger focus, broader energy, and ambitions reaching from local to international.", cover: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70" },
];

export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const INSIGHTS: Insight[] = [
  { slug: "intro-to-osint", title: "Introduction to Open-Source Intelligence (OSINT)", excerpt: "Foundations of OSINT: what it is, what it is not, and how it sits within the wider intelligence discipline.", author: "OSINTUS", date: "Medium", readTime: "8 min", tags: ["OSINT", "Foundations"] },
  { slug: "intelligence-cycle", title: "Introduction to the Intelligence Cycle (IC)", excerpt: "Direction, collection, processing, analysis, dissemination — a working model for structured intelligence production.", author: "OSINTUS", date: "Medium", readTime: "7 min", tags: ["Tradecraft"] },
  { slug: "psychology-of-analysis", title: "Psychology of Intelligence Analysis and Structured Analytical Techniques (SAT)", excerpt: "Cognitive bias, mindset traps, and the structured techniques analysts use to discipline judgement.", author: "OSINTUS", date: "Medium", readTime: "10 min", tags: ["Analysis", "SAT"] },
  { slug: "intro-to-internet", title: "Introduction to the Internet", excerpt: "What every OSINT practitioner should know about how the internet is built before they collect from it.", author: "OSINTUS", date: "Medium", readTime: "6 min", tags: ["Foundations"] },
  { slug: "setting-up-workspace", title: "Setting up your OSINT Workspace", excerpt: "A practical setup for a secure, repeatable, and compartmentalised research environment.", author: "OSINTUS", date: "Medium", readTime: "9 min", tags: ["OPSEC", "Workspace"] },
  { slug: "search-engines", title: "Search Engines", excerpt: "Using general and specialised search engines effectively — operators, pivots, and limits.", author: "OSINTUS", date: "Medium", readTime: "8 min", tags: ["Collection"] },
  { slug: "investigating-target", title: "Investigating the Target Online", excerpt: "A practitioner's walkthrough for investigating a subject across the open web.", author: "OSINTUS", date: "Medium", readTime: "11 min", tags: ["Investigations"] },
  { slug: "resource-list", title: "OSINT Resource List", excerpt: "A curated, working list of tools and resources used across our practice.", author: "OSINTUS", date: "Medium", readTime: "5 min", tags: ["Resources"] },
];

export const TEAM = [
  { name: "Tornike Dzamunashvili", role: "Founder & Executive Director", bio: "OSINT specialist and trainer with expertise in intelligence analysis, crime analysis, and security risk assessment. Director of the Education Department at OSINT for Ukraine (Netherlands), leading an international remote team designing and delivering OSINT programmes. Engaged with the Council of Europe Schools of Political Studies (France) and the Tbilisi School of Political Studies. Bachelor's and Master's in Law and International Law; National Security and Public Policy programme at the Rondeli Foundation.", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=70" },
  { name: "Business Development Advisor", role: "Advisory Board", bio: "Senior advisor supporting OSINTUS's growth across local and international markets.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=70" },
  { name: "Legal & Compliance Advisor", role: "Advisory Board", bio: "Senior advisor on legal, regulatory, and compliance matters across jurisdictions.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=70" },
  { name: "Brand & Design Advisor", role: "Advisory Board", bio: "Senior advisor on brand identity, design systems, and creative direction.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=70" },
  { name: "Finance Advisor", role: "Advisory Board", bio: "Senior advisor on financial planning, controls, and sustainability.", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=70" },
];

export const PARTNERS = [
  "Tbilisi Humanitarian University",
  "Society22",
  "Halmstad University",
  "Embassy of the Netherlands in Georgia",
  "Royal Norwegian Embassy in Georgia",
  "NATO Liaison Office in Georgia",
  "OSINT for Ukraine",
  "Tbilisi School of Political Studies",
  "Radio Marneuli",
  "The Hague Humanity Hub",
  "Eastern Partnership Civil Society Facility",
  "Swedish Institute (SAYP)",
];

export const OPENINGS = [
  { title: "OSINT Trainer (Contract)", location: "Tbilisi / Remote", type: "Contract" },
  { title: "Junior Research Analyst", location: "Tbilisi", type: "Full-time" },
  { title: "Partnerships & Outreach Lead", location: "Tbilisi", type: "Full-time" },
];
