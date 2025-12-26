"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { Container } from "./ui/Container";

const footerLinks = {
  services: [
    { label: "Managed IT", href: "/services/managed-it-services" },
    { label: "Website Development", href: "/services/website-development" },
    { label: "Cybersecurity", href: "/services/security-assessments" },
    { label: "Cloud Solutions", href: "/services/cloud-solutions" },
    { label: "VoIP and Phone Systems", href: "/services/voip-phone-systems" },
    {
      label: "Backup and Recovery",
      href: "/services/backup-disaster-recovery",
    },
  ],
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Why QuadTech", href: "/why-choose-us" },
    { label: "Resources", href: "/resources" },
    { label: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: siteConfig.linkedinUrl, label: "LinkedIn" },
  { icon: Instagram, href: siteConfig.instagramUrl, label: "Instagram" },
];

const currentYear = new Date().getUTCFullYear();

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0a1120] text-white pt-12 pb-8 relative overflow-hidden">
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-br from-[#0d9488]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-tl from-[#1e3a5f]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container size="responsive" className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-1"
          >
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.svg"
                alt="QuadTech Consulting"
                width={1100}
                height={300}
                className="!h-12 sm:!h-10 md:!h-8 !w-auto max-w-[200px] sm:max-w-[180px] md:max-w-[160px] brightness-0 invert"
                sizes="(min-width: 768px) 10rem, 12.5rem"
              />
            </Link>
            <p className="text-slate-300 mb-4 leading-relaxed text-sm">
              Your trusted IT partner for secure, scalable business growth. We
              deliver modern technology solutions with reliability,
              transparency, and a personal touch.
            </p>
            <p className="text-slate-400 text-xs font-medium mb-2">
              Connect with us
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const commonClasses =
                  "w-10 h-10 rounded-xl flex items-center justify-center text-slate-300 bg-white/[0.03] transition-all duration-300 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]";

                if (!social.href) {
                  return (
                    <span
                      key={social.label}
                      className={`${commonClasses} opacity-50 cursor-not-allowed`}
                      title={social.label}
                    >
                      <Icon
                        className="h-6 w-6 sm:h-5 sm:w-5"
                        aria-hidden="true"
                      />
                    </span>
                  );
                }

                const isExternal = social.href.startsWith("http");

                return (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.06, y: -1 }}
                  >
                    <Link
                      href={social.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className={`${commonClasses} hover:bg-[#14b8a6]/10 hover:text-white hover:border-[#14b8a6]/30 hover:shadow-[0_0_0_3px_rgba(20,184,166,0.12)]`}
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon
                        className="h-6 w-6 sm:h-5 sm:w-5"
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Desktop Services Navigation */}
            <nav className="hidden md:block" aria-label="Services navigation">
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Services
              </h4>
              <ul className="space-y-1.5">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                    >
                      <span className="w-0 h-0.5 bg-[#0d9488] group-hover:w-2 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Services Navigation */}
            <details
              className="md:hidden group col-span-2 border border-white/10 rounded-xl bg-white/[0.03]"
              aria-label="Mobile services navigation"
            >
              <summary className="flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]">
                Services
                <span
                  className="ml-4 text-slate-300 group-open:hidden"
                  aria-hidden="true"
                >
                  +
                </span>
                <span
                  className="ml-4 text-slate-300 hidden group-open:inline"
                  aria-hidden="true"
                >
                  -
                </span>
              </summary>
              <div className="px-2 pb-2">
                <ul className="space-y-1">
                  {footerLinks.services.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-200 hover:text-white transition-colors text-sm flex items-center rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Desktop Quick Links Navigation */}
            <nav
              className="hidden md:block"
              aria-label="Quick links navigation"
            >
              <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
                Quick Links
              </h4>
              <ul className="space-y-1.5">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-slate-300 hover:text-white transition-colors text-sm inline-flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                    >
                      <span className="w-0 h-0.5 bg-[#0d9488] group-hover:w-2 transition-all duration-200 mr-0 group-hover:mr-2" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Quick Links Navigation */}
            <details
              className="md:hidden group col-span-2 border border-white/10 rounded-xl bg-white/[0.03]"
              aria-label="Mobile quick links navigation"
            >
              <summary className="flex items-center justify-between px-4 py-3 text-sm font-bold uppercase tracking-wider text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]">
                Quick Links
                <span
                  className="ml-4 text-slate-300 group-open:hidden"
                  aria-hidden="true"
                >
                  +
                </span>
                <span
                  className="ml-4 text-slate-300 hidden group-open:inline"
                  aria-hidden="true"
                >
                  -
                </span>
              </summary>
              <div className="px-2 pb-2">
                <ul className="space-y-1">
                  {footerLinks.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-200 hover:text-white transition-colors text-sm flex items-center rounded-lg px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 md:col-span-1"
          >
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {siteConfig.phone && (
                <li>
                  <Link
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                  >
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    {siteConfig.phone}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {siteConfig.email}
                </Link>
              </li>
              <li className="text-slate-500 text-xs">
                Response within 1 business day
              </li>
              {siteConfig.addressLine1 && (
                <li className="hover:text-white transition-colors">
                  {siteConfig.addressLine1}
                </li>
              )}
              {siteConfig.addressLine2 && (
                <li className="hover:text-white transition-colors">
                  {siteConfig.addressLine2}
                </li>
              )}
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex w-full sm:w-auto justify-center items-center px-6 py-3 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:scale-105 active:scale-[0.99] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a1120]"
              >
                Talk to an IT Expert
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {currentYear} QuadTech Consulting. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-400">
              <Link
                href="/privacy"
                className="hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
