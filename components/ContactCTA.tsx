"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Section } from "./ui/Section";

type ContactCTAProps = {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
  serviceName?: string;
  variant?: "light" | "dark" | "gradient";
  size?: "sm" | "md" | "lg";
  showPhone?: boolean;
};

export default function ContactCTA({
  heading = "Ready to Elevate Your Technology?",
  subheading = "Schedule a free consultation to review your current technology environment. We will identify opportunities to improve performance, strengthen security, and reduce costs.",
  ctaText = "Schedule a Free Consultation",
  ctaLink = "/contact",
  serviceName,
  variant = "light",
  size = "md",
  showPhone = false,
}: ContactCTAProps) {
  // Context-aware heading if service name is provided
  const contextHeading = serviceName
    ? `Ready to Improve Your ${serviceName}?`
    : heading;

  // Context-aware subheading if service name is provided
  const contextSubheading = serviceName
    ? `Schedule a free consultation to see how our ${serviceName} can help your business thrive in today's digital landscape.`
    : subheading;

  // Map component variant to Section variant
  const getSectionVariant = () => {
    switch (variant) {
      case "light":
        return "light";
      case "dark":
        return "dark";
      case "gradient":
        return "gradient";
      default:
        return "light";
    }
  };

  // Map component size to Section size
  const getSectionSize = () => {
    switch (size) {
      case "sm":
        return "sm";
      case "md":
        return "md";
      case "lg":
        return "lg";
      default:
        return "md";
    }
  };

  // CTA button styles based on variant
  const ctaStyles = {
    light: "bg-[#0d9488] text-white hover:bg-[#0f766e]",
    dark: "bg-white text-gray-900 hover:bg-gray-100",
    gradient: "bg-white text-gray-900 hover:bg-gray-100",
  };

  return (
    <Section
      id="contact"
      variant={getSectionVariant()}
      size={getSectionSize()}
      containerSize="responsive"
      className={
        variant === "gradient"
          ? "bg-gradient-to-r from-gray-950 via-slate-900 to-gray-800 text-white"
          : undefined
      }
      ariaLabel="Contact Us"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 ${variant === "light" ? "text-[#0f172a]" : "text-white"}`}
        >
          {contextHeading}
        </h2>

        <p
          className={`text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 ${variant === "light" ? "text-slate-600" : "text-gray-200"}`}
        >
          {contextSubheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={ctaLink}
            className={`inline-flex items-center gap-2 px-6 py-3 lg:px-8 lg:py-4 ${ctaStyles[variant]} rounded-full transition-all duration-300 font-semibold shadow-md hover:shadow-lg`}
          >
            {ctaText}
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

          {showPhone && siteConfig.phone && (
            <Link
              href={`tel:${siteConfig.phone}`}
              className={`inline-flex items-center gap-2 ${variant === "light" ? "text-gray-600 hover:text-gray-900" : "text-white hover:text-[#0d9488]"} transition-colors`}
            >
              <Phone size={16} />
              Call {siteConfig.phone}
            </Link>
          )}
        </div>

        <p
          className={`mt-4 text-sm ${variant === "light" ? "text-slate-500" : "text-gray-400"}`}
        >
          No obligation · Response within 1 business day
        </p>
      </motion.div>
    </Section>
  );
}
