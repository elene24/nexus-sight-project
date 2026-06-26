import {
  Search, ShieldCheck, FileSearch, Radar, Building2, Lock, GraduationCap, BriefcaseBusiness,
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
  { slug: "open-source-intelligence", title: "Open Source Intelligence", short: "Structured collection and analysis from open, deep, and dark web sources.", description: "We design tailored OSINT programs that map subjects, networks, and risk indicators across public records, social signals, and technical infrastructure.", icon: Search },
  { slug: "investigations", title: "Investigations", short: "Discreet investigations supporting legal, corporate, and security matters.", description: "Multi-disciplinary investigative teams combining OSINT, human sources, and forensic analysis to surface verifiable findings.", icon: FileSearch },
  { slug: "due-diligence", title: "Due Diligence", short: "Enhanced background checks for partners, hires, and transactions.", description: "Risk-graded profiles with regulatory, reputational, and integrity signals, delivered to international standards.", icon: ShieldCheck },
  { slug: "threat-intelligence", title: "Threat Intelligence", short: "Proactive monitoring of threats to people, brands, and infrastructure.", description: "Continuous collection across adversary forums, social platforms, and dark web markets, mapped to your assets.", icon: Radar },
  { slug: "corporate-intelligence", title: "Corporate Intelligence", short: "Market, competitor, and strategic intelligence for executive decisions.", description: "Bespoke research products supporting M&A, market entry, geopolitical exposure, and litigation strategy.", icon: Building2 },
  { slug: "cyber-intelligence", title: "Cyber Intelligence", short: "Adversary, exposure, and digital footprint analysis.", description: "Identify attack surface, leaked credentials, infrastructure overlaps, and adversary activity targeting your organisation.", icon: Lock },
  { slug: "training", title: "Training Modules", short: "Practitioner-led OSINT, investigations, and security training.", description: "Modular programs delivered to analysts, investigators, and security teams — from foundations to advanced tradecraft.", icon: GraduationCap },
  { slug: "consulting", title: "Consulting", short: "Strategic advisory across intelligence and security programs.", description: "Stand up, mature, or audit intelligence functions with senior advisors who have built them at scale.", icon: BriefcaseBusiness },
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
  { slug: "1", category: "Conference", date: "Mar 2026", title: "OSINTUS at the Global Intelligence Summit", preview: "Our team led a panel on adversary infrastructure and the future of open source tradecraft.", cover: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=70" },
  { slug: "2", category: "Partnership", date: "Feb 2026", title: "New strategic partnership announced", preview: "A new collaboration with a leading European cybersecurity firm to extend our regional coverage.", cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70" },
  { slug: "3", category: "Briefing", date: "Jan 2026", title: "Quarterly threat landscape briefing", preview: "Our analysts published the Q1 intelligence outlook covering geopolitics, cybercrime, and disinformation.", cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70" },
  { slug: "4", category: "Training", date: "Dec 2025", title: "Advanced OSINT cohort completes program", preview: "Twenty-two practitioners completed our most rigorous training module to date.", cover: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=70" },
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
  { slug: "tradecraft-2026", title: "Tradecraft in 2026: where open source ends and intelligence begins", excerpt: "How collection, verification, and analysis are evolving in a world saturated by synthetic content.", author: "L. Beridze", date: "Mar 12, 2026", readTime: "9 min", tags: ["Tradecraft", "OSINT"] },
  { slug: "shell-companies", title: "Mapping shell company networks at scale", excerpt: "A practical framework for surfacing beneficial ownership across opaque jurisdictions.", author: "K. Adams", date: "Feb 28, 2026", readTime: "12 min", tags: ["Investigations", "Due Diligence"] },
  { slug: "disinformation", title: "The disinformation supply chain", excerpt: "Vendors, operators, and amplifiers — the industrial structure of modern influence operations.", author: "N. Tavadze", date: "Feb 14, 2026", readTime: "7 min", tags: ["Threat Intel"] },
  { slug: "cyber-exposure", title: "Reading an organisation's digital exposure", excerpt: "What attackers see first, and what defenders consistently miss in attack surface reviews.", author: "M. Hoffman", date: "Jan 22, 2026", readTime: "8 min", tags: ["Cyber"] },
  { slug: "due-diligence-asia", title: "Due diligence across Central Asia: a field note", excerpt: "Working with primary sources where public records are thin and intermediaries dominate.", author: "L. Beridze", date: "Jan 06, 2026", readTime: "6 min", tags: ["Due Diligence", "Region"] },
  { slug: "geopolitics", title: "Geopolitics is now an operational concern", excerpt: "Why intelligence teams should sit closer to the boardroom than the SOC.", author: "K. Adams", date: "Dec 18, 2025", readTime: "5 min", tags: ["Strategy"] },
];

export const TEAM = [
  { name: "Levan Beridze", role: "Founder & Managing Director", bio: "Former intelligence officer with 18+ years across government and private practice.", photo: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=600&q=70" },
  { name: "Kira Adams", role: "Head of Investigations", bio: "Leads complex multi-jurisdiction inquiries for legal and corporate clients.", photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=70" },
  { name: "Nika Tavadze", role: "Director of Threat Intelligence", bio: "Cyber and influence operations specialist; built CTI programs at Fortune 500s.", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=70" },
  { name: "Marc Hoffman", role: "Principal Analyst, Cyber", bio: "Adversary infrastructure and attack surface analysis at scale.", photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=70" },
  { name: "Sophia Ortiz", role: "Senior Investigator", bio: "Financial crime, asset tracing, and beneficial ownership specialist.", photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=70" },
  { name: "David Kapanadze", role: "Head of Training", bio: "Designs and delivers OSINT and investigations curricula worldwide.", photo: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=600&q=70" },
];

export const PARTNERS = [
  "Concordia", "Helios Labs", "Atlas Risk", "Northwind Capital", "Sentinel-9",
  "Polaris Group", "Mercator", "Veridian", "Kestrel Cyber", "Halcyon",
  "Stratton Advisory", "Westgate",
];

export const OPENINGS = [
  { title: "Senior OSINT Analyst", location: "Tbilisi / Remote", type: "Full-time" },
  { title: "Investigations Lead — EMEA", location: "London", type: "Full-time" },
  { title: "Cyber Threat Intelligence Analyst", location: "Remote", type: "Full-time" },
  { title: "Junior Research Analyst", location: "Tbilisi", type: "Full-time" },
];
