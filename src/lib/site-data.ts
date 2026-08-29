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
