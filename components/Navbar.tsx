"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpenText,
  ChevronDown,
  FolderOpen,
  Menu,
  Newspaper,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { resourcePosts } from "@/lib/resources";
import { serviceCards, serviceCategoryOrder } from "@/lib/serviceCards";

const categorySlugMap: Record<string, string> = {
  Cybersecurity: "cybersecurity",
  "Cloud and Infrastructure": "cloud-infrastructure",
  "Web and Communications": "web-communications",
  "IT Management and Support": "it-management",
};

const serviceGroups = serviceCategoryOrder
  .map((category) => ({
    category,
    slug: categorySlugMap[category],
    items: serviceCards.filter((s) => s.category === category),
  }))
  .filter((g) => g.items.length > 0);

const latestResources = resourcePosts.slice(0, 3);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const servicesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resourcesCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const servicesWrapperRef = useRef<HTMLDivElement | null>(null);
  const resourcesWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const scrollPositionY = window.scrollY;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousOverflow = document.body.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollPositionY}px`;
    document.body.style.width = "100%";

    return () => {
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollPositionY);
    };
  }, [isOpen]);

  const clearServicesCloseTimer = () => {
    if (servicesCloseTimer.current) {
      clearTimeout(servicesCloseTimer.current);
      servicesCloseTimer.current = null;
    }
  };

  const clearResourcesCloseTimer = () => {
    if (resourcesCloseTimer.current) {
      clearTimeout(resourcesCloseTimer.current);
      resourcesCloseTimer.current = null;
    }
  };

  const scheduleCloseServices = () => {
    clearServicesCloseTimer();
    servicesCloseTimer.current = setTimeout(() => setServicesOpen(false), 120);
  };

  const scheduleCloseResources = () => {
    clearResourcesCloseTimer();
    resourcesCloseTimer.current = setTimeout(
      () => setResourcesOpen(false),
      120,
    );
  };

  // Close menus only when focus leaves the button + menu wrapper.
  const handleServicesBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (servicesWrapperRef.current?.contains(event.relatedTarget as Node)) {
      return;
    }
    scheduleCloseServices();
  };

  const handleResourcesBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (resourcesWrapperRef.current?.contains(event.relatedTarget as Node)) {
      return;
    }
    scheduleCloseResources();
  };

  return (
    <motion.nav
      className="fixed top-0 w-full backdrop-blur-xl z-50 transition-all duration-300 border-b border-slate-200/50 bg-white/95 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300 h-16 sm:h-20 lg:h-24">
          <div className="flex-shrink-0 flex items-center min-w-0">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity duration-200 flex items-center"
              aria-label="QuadTech Home"
            >
              <Image
                src="/logo.svg"
                alt="QuadTech Consulting"
                width={1100}
                height={300}
                className="transition-all duration-300 w-44 sm:w-56 md:w-64 lg:w-80 h-auto"
                sizes="(min-width: 1024px) 20rem, (min-width: 768px) 16rem, 14rem"
              />
            </Link>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <Link
                href="/#home"
                className="px-4 py-2 text-sm text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
              >
                Home
              </Link>

              <div
                className="relative"
                ref={servicesWrapperRef}
                onBlurCapture={handleServicesBlur}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    servicesOpen
                      ? "text-[#1e3a5f] bg-slate-50"
                      : "text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50"
                  }`}
                  onMouseEnter={() => {
                    clearServicesCloseTimer();
                    setServicesOpen(true);
                  }}
                  onMouseLeave={scheduleCloseServices}
                  onFocus={() => {
                    clearServicesCloseTimer();
                    setServicesOpen(true);
                  }}
                  onClick={() => {
                    clearServicesCloseTimer();
                    setServicesOpen((open) => !open);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      clearServicesCloseTimer();
                      setServicesOpen((open) => !open);
                    } else if (e.key === "Escape" && servicesOpen) {
                      setServicesOpen(false);
                    }
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-menu"
                >
                  Services
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      id="services-menu"
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => {
                        clearServicesCloseTimer();
                        setServicesOpen(true);
                      }}
                      onMouseLeave={() => {
                        clearServicesCloseTimer();
                        setServicesOpen(false);
                      }}
                      aria-label="Services menu"
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[480px] max-w-[92vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden z-50"
                    >
                      <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white">
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#0d9488] transition-colors group"
                        >
                          <FolderOpen size={16} />
                          Browse All Services
                          <ArrowRight
                            size={14}
                            className="ml-1 group-hover:translate-x-1 transition-transform"
                          />
                        </Link>
                      </div>

                      <div className="p-4 grid grid-cols-2 gap-3">
                        {serviceGroups.map((group, groupIndex) => {
                          const IconComponent = group.items[0]?.icon;
                          return (
                            <motion.div
                              key={group.category}
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: groupIndex * 0.05 }}
                            >
                              <Link
                                href={`/services/category/${group.slug}`}
                                className="group block p-4 rounded-xl hover:bg-gradient-to-br hover:from-slate-50 hover:to-white border border-transparent hover:border-slate-200 transition-all duration-200"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0d9488]/10 to-[#0d9488]/5 text-[#0d9488] flex items-center justify-center group-hover:from-[#0d9488] group-hover:to-[#0f766e] group-hover:text-white transition-all duration-200 group-hover:scale-110">
                                    {IconComponent && (
                                      <IconComponent
                                        size={18}
                                        strokeWidth={2}
                                      />
                                    )}
                                  </div>
                                  <span className="font-semibold text-slate-800 group-hover:text-[#1e3a5f] transition-colors text-sm">
                                    {group.category}
                                  </span>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>

                      <div className="px-5 py-5 bg-gradient-to-r from-[#1e3a5f] to-[#0f2744]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-sm">
                              Not sure where to start?
                            </p>
                            <p className="text-slate-300 text-xs mt-0.5">
                              Get a free IT assessment
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                          >
                            Schedule a Free Consultation
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/why-choose-us"
                className="px-4 py-2 text-sm text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-all duration-200 font-medium"
              >
                Why Choose Us
              </Link>

              <div
                className="relative"
                ref={resourcesWrapperRef}
                onBlurCapture={handleResourcesBlur}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    resourcesOpen
                      ? "text-[#1e3a5f] bg-slate-50"
                      : "text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50"
                  }`}
                  onMouseEnter={() => {
                    clearResourcesCloseTimer();
                    setResourcesOpen(true);
                  }}
                  onMouseLeave={scheduleCloseResources}
                  onFocus={() => {
                    clearResourcesCloseTimer();
                    setResourcesOpen(true);
                  }}
                  onClick={() => {
                    clearResourcesCloseTimer();
                    setResourcesOpen((open) => !open);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      clearResourcesCloseTimer();
                      setResourcesOpen((open) => !open);
                    } else if (e.key === "Escape" && resourcesOpen) {
                      setResourcesOpen(false);
                    }
                  }}
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                  aria-controls="resources-menu"
                >
                  Resources
                  <motion.span
                    animate={{ rotate: resourcesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      id="resources-menu"
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
                      onMouseEnter={() => {
                        clearResourcesCloseTimer();
                        setResourcesOpen(true);
                      }}
                      onMouseLeave={() => {
                        clearResourcesCloseTimer();
                        setResourcesOpen(false);
                      }}
                      aria-label="Resources menu"
                      className="absolute top-full right-0 mt-3 w-[380px] max-w-[92vw] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 overflow-hidden z-50"
                    >
                      <div className="px-5 py-4 border-b border-slate-100 bg-gradient-to-r from-slate-50 to-white flex items-center justify-between">
                        <Link
                          href="/resources"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#0d9488] transition-colors"
                        >
                          <BookOpenText size={16} />
                          All Resources
                        </Link>
                        <Link
                          href="/resources"
                          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-[#0d9488] transition-colors"
                        >
                          <Newspaper size={14} />
                          Blog
                          <ArrowRight size={12} />
                        </Link>
                      </div>

                      <div className="p-4">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 px-2">
                          Latest Guides
                        </p>
                        <div className="space-y-2">
                          {latestResources.map((post, index) => (
                            <motion.div
                              key={post.slug}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={`/resources/${post.slug}`}
                                className="group flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-br hover:from-slate-50 hover:to-white border border-transparent hover:border-slate-200 transition-all duration-200"
                              >
                                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#0d9488]/10 to-[#0d9488]/5 text-[#0d9488] flex items-center justify-center flex-shrink-0 group-hover:from-[#0d9488] group-hover:to-[#0f766e] group-hover:text-white transition-all duration-200">
                                  <Newspaper size={14} strokeWidth={2} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-slate-800 group-hover:text-[#1e3a5f] transition-colors line-clamp-2">
                                    {post.title}
                                  </p>
                                  <p className="text-xs text-slate-400 mt-1">
                                    {post.readingTime}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      <div className="px-5 py-5 bg-gradient-to-r from-[#1e3a5f] to-[#0f2744]">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-white font-semibold text-sm">
                              Have a question?
                            </p>
                            <p className="text-slate-300 text-xs mt-0.5">
                              We're here to help
                            </p>
                          </div>
                          <Link
                            href="/contact"
                            className="px-5 py-2.5 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
                          >
                            Schedule a Free Consultation
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className="ml-2 bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white text-sm px-6 py-2.5 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-[#1e3a5f] p-2 rounded-lg hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 max-h-[calc(100vh-6rem)] max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link
                href="/#home"
                className="block px-4 py-3 text-base text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-xl transition-all duration-200"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-menu"
                >
                  Services
                  <motion.span
                    animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 mt-1"
                    >
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-colors duration-100 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        All Services
                      </Link>
                      <div className="mt-2 space-y-2">
                        {serviceGroups.map((group) => (
                          <div key={group.category} className="px-2">
                            <Link
                              href={`/services/category/${group.slug}`}
                              className="block px-2 py-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#0d9488] transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {group.category}
                            </Link>
                            <div className="space-y-1 pl-2">
                              {group.items.map((service) => (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="block px-2 py-2 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-100"
                                  onClick={() => setIsOpen(false)}
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/why-choose-us"
                className="block px-4 py-3 text-base text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Why Choose Us
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-base text-slate-700 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-xl transition-all duration-200"
                  aria-expanded={mobileResourcesOpen}
                  aria-controls="mobile-resources-menu"
                >
                  Resources
                  <motion.span
                    animate={{ rotate: mobileResourcesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={18} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {mobileResourcesOpen && (
                    <motion.div
                      id="mobile-resources-menu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-1 mt-1"
                    >
                      <Link
                        href="/resources"
                        className="block px-4 py-2.5 text-sm text-slate-600 hover:text-[#1e3a5f] hover:bg-slate-50 rounded-lg transition-colors duration-100 font-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        All Resources
                      </Link>
                      <Link
                        href="/resources"
                        className="block px-4 py-2.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors duration-100"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="pt-4 px-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white px-6 py-3.5 rounded-xl hover:shadow-lg transition-all font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Schedule a Free Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
