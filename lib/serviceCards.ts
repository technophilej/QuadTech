import {
  Briefcase,
  Cloud,
  Globe,
  HardDrive,
  Lock,
  Mail,
  Phone,
  Search,
  Server,
  Shield,
  ShieldCheck,
} from "lucide-react";
import type { ComponentType } from "react";

export type ServiceCard = {
  title: string;
  slug: string;
  description: string;
  image: string;
  category:
    | "Cybersecurity"
    | "Cloud and Infrastructure"
    | "Web and Communications"
    | "IT Management and Support";
  icon: ComponentType<{
    size?: number;
    className?: string;
    strokeWidth?: number;
  }>;
};

export const serviceCategoryOrder: ServiceCard["category"][] = [
  "Cybersecurity",
  "Cloud and Infrastructure",
  "Web and Communications",
  "IT Management and Support",
];

export const categoryDescriptions: Record<ServiceCard["category"], string> = {
  Cybersecurity:
    "Protect your business from evolving threats with proactive security strategies, compliance expertise, and comprehensive risk reduction services.",
  "Cloud and Infrastructure":
    "Build scalable, reliable IT infrastructure with modern cloud solutions and robust business continuity planning.",
  "Web and Communications":
    "Establish a strong digital presence and streamline business communications with modern web and telephony solutions.",
  "IT Management and Support":
    "Keep your technology running smoothly with expert monitoring, proactive maintenance, and strategic IT leadership.",
};

export const serviceCards: ServiceCard[] = [
  {
    icon: Shield,
    title: "Cybersecurity Training",
    slug: "cybersecurity-training",
    description:
      "Empower your team to recognize and prevent cyber threats through engaging, practical training programs that build lasting security awareness.",
    image: "/images/cybersecurity-1.jpg",
    category: "Cybersecurity",
  },
  {
    icon: Lock,
    title: "State Compliance and Security",
    slug: "compliance-security",
    description:
      "Navigate complex regulatory requirements with expert guidance, thorough documentation, and hands-on implementation support.",
    image: "/images/compliance.jpg",
    category: "Cybersecurity",
  },
  {
    icon: Search,
    title: "Penetration Testing",
    slug: "penetration-testing",
    description:
      "Discover security weaknesses through controlled ethical hacking before malicious actors find and exploit them.",
    image: "/images/penetration-testing.jpg",
    category: "Cybersecurity",
  },
  {
    icon: ShieldCheck,
    title: "Security Assessments",
    slug: "security-assessments",
    description:
      "Comprehensive evaluation of your entire security posture with clear findings and actionable improvement roadmaps.",
    image: "/images/security-assessment.jpg",
    category: "Cybersecurity",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    description:
      "Strategic cloud adoption and optimization that reduces costs while improving scalability, reliability, and team productivity.",
    image: "/images/cloud-solutions.jpg",
    category: "Cloud and Infrastructure",
  },
  {
    icon: HardDrive,
    title: "Backup and Disaster Recovery",
    slug: "backup-disaster-recovery",
    description:
      "Automated backups and thoroughly tested recovery plans that keep your data safe and your team productive.",
    image: "/images/backup-recovery.jpg",
    category: "Cloud and Infrastructure",
  },
  {
    icon: Globe,
    title: "Website Development and Support",
    slug: "website-development",
    description:
      "Modern, high-performance websites built to convert visitors into customers, backed by ongoing technical support and maintenance.",
    image: "/images/web-development.jpg",
    category: "Web and Communications",
  },
  {
    icon: Mail,
    title: "Email/Domain Migration",
    slug: "email-domain-migration",
    description:
      "Seamless migration of your email systems and domains with minimal disruption to your daily operations.",
    image: "/images/email-migration.jpg",
    category: "Web and Communications",
  },
  {
    icon: Phone,
    title: "VoIP and Phone Systems",
    slug: "voip-phone-systems",
    description:
      "Professional business phone systems with intelligent call routing, auto attendant features, and flexible device options.",
    image: "/images/voip-phone.jpg",
    category: "Web and Communications",
  },
  {
    icon: Server,
    title: "Managed IT Services",
    slug: "managed-it-services",
    description:
      "Continuous monitoring and proactive maintenance that prevents problems before they impact your operations.",
    image: "/images/managed-it.jpg",
    category: "IT Management and Support",
  },
  {
    icon: Briefcase,
    title: "IT Consulting (vCIO)",
    slug: "it-consulting-vcio",
    description:
      "Strategic IT leadership and planning that aligns your technology investments with your business goals and growth trajectory.",
    image: "/images/it-consulting.jpg",
    category: "IT Management and Support",
  },
];
