"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const benefits = [
  "Expert Support When You Need It",
  "Flexible Month-to-Month Service",
  "Clear and Honest Pricing",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28 md:pb-12 lg:pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100/50"
      aria-label="Welcome to QuadTech Consulting"
    >
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#0d9488]/6 to-transparent rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#1e3a5f]/6 to-transparent rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>

      {/* Ultra-wide optimized container with constrained text and bleeding image */}
      <div className="max-w-[1280px] 2xl:max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Text content constrained for readability */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 xl:col-span-5 max-w-xl lg:max-w-none"
          >
            <motion.div
              custom={0}
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-3 py-2 bg-[#0f172a] text-white rounded-full text-xs font-medium mb-5 max-w-[calc(100vw-2rem)] overflow-hidden"
            >
              <span className="w-2 h-2 bg-[#0d9488] rounded-full animate-pulse" />
              <span className="whitespace-nowrap overflow-hidden text-ellipsis">
                Trusted IT Partner for Growing Businesses
              </span>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeInUp}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-[1.15] mb-4 sm:mb-5"
            >
              Reliable IT Solutions{" "}
              <span className="text-[#0f766e] block lg:inline">
                for Growing
              </span>{" "}
              <span className="text-[#0f766e] block lg:inline">Businesses</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-5 sm:mb-6 leading-relaxed max-w-lg"
            >
              QuadTech Consulting helps businesses stay secure, productive, and
              scalable with modern IT solutions tailored to their needs.
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeInUp}
              className="flex flex-col gap-2 mb-6 sm:mb-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0d9488]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2
                      className="text-[#0d9488]"
                      size={14}
                      aria-hidden="true"
                    />
                  </div>
                  <span className="text-sm font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div custom={4} variants={fadeInUp}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-all duration-300 font-semibold shadow-lg shadow-[#0d9488]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d9488] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2" size={20} aria-hidden="true" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image allowed to expand on ultra-wide screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className="lg:col-span-7 xl:col-span-7 relative mt-8 lg:mt-0 lg:pl-4 xl:pl-6 2xl:pl-8"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] ring-1 ring-slate-200/50 lg:aspect-[16/10] xl:aspect-[16/9] w-full">
              <Image
                src="/images/hero-team.jpg"
                alt="IT consulting team collaborating on technology solutions"
                width={800}
                height={450}
                sizes="(max-width: 1023px) 100vw, (max-width: 1599px) 60vw, 50vw"
                className="object-cover absolute inset-0 w-full h-full"
                priority
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
