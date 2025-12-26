"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Headphones,
  MessageSquare,
  Shield,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { Section } from "./ui/Section";

const values = [
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description:
      "We explain options in plain language and set realistic expectations. No jargon, no surprises—just honest guidance you can act on.",
  },
  {
    icon: Headphones,
    title: "Responsive Support",
    description:
      "When something breaks, you have a team that responds quickly and follows through until it's resolved. We stay close to your day-to-day reality.",
  },
  {
    icon: Shield,
    title: "Practical Security",
    description:
      "We help you understand where you're at risk and prioritize the improvements that matter most. No fear tactics, just sensible protection.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Guidance",
    description:
      "A simple roadmap that connects technology decisions to your business goals. We recommend what makes sense, not what's most expensive.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function WhyChooseUsContent() {
  return (
    <>
      <Section
        variant="default"
        size="lg"
        containerSize="responsive"
        className="pt-28 sm:pt-32 lg:pt-36"
        ariaLabel="About Us Hero"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto px-4 sm:px-0"
        >
          <span className="inline-block px-4 py-2 bg-[#0f172a] text-white rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
            A Hands-On IT Partner You Can Rely On
          </h1>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed">
            We started QuadTech to give growing businesses an IT partner they
            can actually talk to. We focus on keeping your systems stable,
            responding when you need help, and recommending technology that
            makes sense for how your team works every day.
          </p>
        </motion.div>
      </Section>

      <Section
        variant="light"
        size="md"
        containerSize="responsive"
        ariaLabel="Our Values"
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl border border-slate-200 h-full"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0d9488]/10 flex items-center justify-center mb-4">
                <value.icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-[#0d9488]"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-lg font-bold text-[#0f172a] mb-2">
                {value.title}
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section
        variant="default"
        size="md"
        containerSize="responsive"
        ariaLabel="Call to Action"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-base md:text-lg text-slate-600 mb-6 max-w-2xl mx-auto px-4 sm:px-0">
            Schedule a free consultation to review your current technology
            environment and identify opportunities to improve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-all duration-300 font-semibold"
          >
            Schedule a Free Consultation
            <ArrowRight size={20} aria-hidden="true" />
          </Link>
        </motion.div>
      </Section>
    </>
  );
}
