"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CloudCog,
  Globe,
  MonitorCog,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import type { ComponentType } from "react";
import { Section } from "./ui/Section";

const categoryCards: {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<{
    size?: number;
    strokeWidth?: number;
    className?: string;
  }>;
}[] = [
  {
    slug: "it-management",
    title: "IT Management and Support",
    description:
      "Keep your systems reliable with proactive maintenance, routine checks, and responsive support when something is not working.",
    icon: MonitorCog,
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    description:
      "Reduce risk with practical security measures, clear best practices for your team, and monitoring that helps you spot issues early.",
    icon: ShieldCheck,
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud and Infrastructure",
    description:
      "Use cloud tools and infrastructure that scale with your business, support remote work, and keep your files organized.",
    icon: CloudCog,
  },
  {
    slug: "web-communications",
    title: "Web and Communications",
    description:
      "Establish a professional online presence and streamline how your team communicates with modern websites and phone solutions.",
    icon: Globe,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function Services() {
  return (
    <Section
      id="services"
      size="md"
      variant="light"
      containerSize="responsive"
      ariaLabel="Our Services"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-2 bg-[#0f172a] text-white rounded-full text-sm font-semibold mb-4">
          Our Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
          Solutions Built Around Your Business
        </h2>
        <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Whether you need day-to-day IT help, stronger security, or a clearer
          plan for the next year, we start with where you are and build from
          there.
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={containerVariants}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {categoryCards.map((category) => {
          const CategoryIcon = category.icon;
          return (
            <motion.div key={category.slug} variants={itemVariants}>
              <Link
                href={`/services/category/${category.slug}`}
                aria-label={`Learn more about ${category.title}`}
                className="block bg-white rounded-xl p-5 border border-slate-200 hover:border-[#0d9488]/30 hover:shadow-lg transition-all duration-300 h-full group"
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-slate-100 group-hover:bg-[#0d9488]/10 flex items-center justify-center mb-4 transition-colors duration-300">
                    <CategoryIcon
                      size={24}
                      strokeWidth={1.5}
                      className="text-[#0f172a] group-hover:text-[#0d9488] transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base mb-4 flex-grow leading-relaxed">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transition-transform duration-300">
                    Learn More
                    <ArrowRight size={16} className="ml-1.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-8"
      >
        <Link
          href="/services"
          className="inline-flex items-center text-[#0f172a] font-semibold hover:text-[#0d9488] transition-colors group"
        >
          View All Services
          <ArrowRight
            size={18}
            className="ml-2 group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </motion.div>
    </Section>
  );
}
