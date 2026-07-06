import type { StaticImageData } from "next/image";

import petvilleShot from "@/public/images/projects/petville_project.png";
import authHeroShot from "@/public/images/projects/auth-hero_project.webp";
import hitgirlShot from "@/public/images/projects/hitgirl_project.png";
import ryderrrShot from "@/public/images/projects/carpool_project.jpg";

export const siteConfig = {
  name: "Musthafa Altaf",
  title: "Musthafa Altaf",
  description:
    "Full-stack developer building web, mobile and AI systems — Colombo, Sri Lanka.",
  url: "https://musthafaaltaf.com",
  resumeUrl: "/resume.pdf",
  gaId: "G-VE8V7E4MEJ",
  email: "musthafaaltaf2001@gmail.com",
  location: "Colombo, Sri Lanka",
  timeZone: "Asia/Colombo",
};

export const hero = {
  statement: "Musthafa Altaf builds software with care",
  subline:
    "Full-stack developer crafting web, mobile and AI systems — from Colombo, Sri Lanka.",
};

export const about = {
  /** **text** marks key phrases rendered in full-ink emphasis */
  paragraph:
    "I'm a full-stack developer with 3+ years of experience shipping products end to end — **AI-powered knowledge platforms**, **HIPAA-compliant healthcare systems**, and a pet-services marketplace I **co-founded and grew to 500+ users** in its first three months. I care about the details: interfaces that feel effortless, and systems that don't fall over.",
  stack: [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "Node.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "AWS",
    "Azure",
    "Docker",
    "LlamaIndex",
  ],
};

export interface Role {
  company: string;
  href?: string;
  title: string;
  period: string;
  location: string;
  blurb: string;
  chips: string[];
}

export const experience: Role[] = [
  {
    company: "Serendip",
    href: "https://goserendip.com",
    title: "Full-Stack Developer",
    period: "Dec 2024 — Present",
    location: "Remote · United States",
    blurb:
      "Building the Agentic RAG pipeline behind hitgirl.ai — query success up from 50% to 90%+, ingesting 100,000+ documents per organization from Google Drive, Dropbox and OneDrive — alongside the platform's auth, chat and file management.",
    chips: ["Next.js", "Python", "Celery", "Docker", "LlamaIndex"],
  },
  {
    company: "Auth Hero",
    href: "https://auth-hero.com",
    title: "Software Engineer · Contract",
    period: "Mar 2025 — Jan 2026",
    location: "Remote · Silicon Valley",
    blurb:
      "Led the HIPAA refactor onto Azure's FHIR API (25+ resources) and built a multi-portal workers'-compensation platform serving clinicians, employers, insurers and patients.",
    chips: ["Next.js", "tRPC", "React Native", "Azure FHIR"],
  },
  {
    company: "Petville",
    href: "https://petville.co",
    title: "Co-Founder",
    period: "Dec 2023 — Aug 2024",
    location: "Remote",
    blurb:
      "Co-founded a pet-services marketplace that reached 500+ users in three months. Sole developer of the B2B merchant dashboard — inventory, bookings, analytics, payments and courier dispatch.",
    chips: ["React", "Node.js", "Google Cloud"],
  },
  {
    company: "GreenSHeart",
    title: "Software Engineer",
    period: "Mar 2023 — Nov 2023",
    location: "Remote",
    blurb:
      "Built real-time patient alerting on AWS Lambda, monitoring seven health metrics from smartwatch-connected patients and notifying clinicians the moment readings crossed safe thresholds.",
    chips: ["AWS Lambda", "React"],
  },
  {
    company: "The Estée Lauder Companies",
    title: "Software Engineer Intern",
    period: "Nov 2022 — Feb 2023",
    location: "Kuala Lumpur, Malaysia",
    blurb:
      "Led a team of five interns to the program's top-ranked solution — an audio-guided shopping app for visually impaired users — presented to New York leadership, earning the only private follow-up with the CTO.",
    chips: ["React Native", "Azure Cloud Vision"],
  },
];

export interface Project {
  title: string;
  tagline: string;
  description: string;
  href?: string;
  chips: string[];
  /** Featured cards without an image render a wordmark placeholder tile */
  image?: StaticImageData;
  /** Backdrop color behind logo artwork */
  imageBg?: string;
  /** "contain" for logos; screenshots default to cover */
  imageFit?: "contain" | "cover";
}

export const featuredProjects: Project[] = [
  {
    title: "Petville",
    tagline: "Pet care, affordable and convenient",
    description:
      "A B2C/B2B marketplace where pet owners find products and services, and pet businesses reach customers. Grew to 500+ active users within three months of launch; I built the entire merchant dashboard — inventory, appointments, sales-funnel analytics, payments and courier dispatch.",
    href: "https://petville.co/",
    chips: ["React", "Node.js", "Recharts", "Google Cloud"],
    image: petvilleShot,
    imageBg: "#EFE9E7",
    imageFit: "contain",
  },
  {
    title: "Auth Hero",
    tagline: "Workers' compensation, without the paperwork",
    description:
      "A multi-portal healthcare platform automating workers'-compensation insurance workflows for clinicians, employers, insurers and patients — HIPAA-compliant on Azure's FHIR API, replacing a paper process that cost patients treatment time.",
    href: "https://auth-hero.com",
    chips: ["Next.js", "tRPC", "React Native", "Azure FHIR"],
    image: authHeroShot,
    imageBg: "#FFFFFF",
    imageFit: "contain",
  },
  {
    title: "Hitgirl.ai",
    tagline: "An AI knowledge platform that actually finds answers",
    description:
      "An Agentic-RAG knowledge platform ingesting 100,000+ documents per organization from Google Drive, Dropbox and OneDrive. I built the retrieval pipeline that lifted query success from 50% to over 90%, plus the platform's auth, chat and file management.",
    href: "https://hitgirl.ai",
    chips: ["Next.js", "Python", "Celery", "LlamaIndex"],
    image: hitgirlShot,
    imageFit: "contain",
  },
  // Logo to come from Musthafa
  {
    title: "BMBFA",
    tagline: "Community, in your pocket",
    description:
      "A React Native community app built at Serendip — gatherings, member profiles and a redesigned onboarding flow on a .NET backend. Grew the platform from near-zero to 50+ monthly active users, 20+ new signups a month and 100+ club members.",
    chips: ["React Native", ".NET"],
  },
  // Placeholder copy — final details to come from Musthafa
  {
    title: "Ryderrr",
    tagline: "Ride-sharing for Sri Lankan commuters",
    description:
      "The newest venture, currently in validation: a carpooling platform for Sri Lanka, already past 25 early signups before a line of product code — proving the demand first, building second.",
    chips: ["In validation"],
    image: ryderrrShot,
    imageBg: "#FFCC01",
    imageFit: "contain",
  },
];

export const otherProjects: Project[] = [
  {
    title: "Student Internship Management Program",
    tagline: "Matching students with internships",
    description:
      "Students upload a resume and skills; employers post openings and review applicants.",
    href: "https://github.com/MusthafaAltaf2001/student_internship_management_program",
    chips: ["React", "MongoDB"],
  },
  {
    title: "VISE",
    tagline: "Audio-guided shopping for visually impaired users",
    description:
      "Built with Jo Malone London during my Estée Lauder internship — Azure computer vision identifies products and reads them aloud.",
    href: "https://github.com/MusthafaAltaf2001/vise",
    chips: ["React Native", "Azure Cloud Vision"],
  },
  {
    title: "ReportCare",
    tagline: "Real-time patient health monitoring",
    description:
      "A clinician-facing platform that watches smartwatch-connected patients and raises alerts the moment a reading turns dangerous.",
    href: "https://github.com/MusthafaAltaf2001/reportcare-clinician",
    chips: ["React", "AWS Lambda"],
  },
];

export const now = {
  paragraph:
    "Right now I'm deep in agentic AI at Serendip — retrieval pipelines, tool-using LLMs, and the unglamorous plumbing that makes them reliable. Off the clock I'm usually learning something new or plotting the next side project.",
};

export interface Social {
  name: string;
  href: string;
}

export const socials: Social[] = [
  { name: "GitHub", href: "https://github.com/MusthafaAltaf2001" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/musthafaaltaf/" },
  { name: "Instagram", href: "https://www.instagram.com/musthafa.altaf/" },
];
