"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Handshake, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const duration = 2000;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: Users, value: 12, suffix: "+", label: "Clients Served" },
  { icon: Handshake, value: 100, suffix: "%", label: "Committed to You" },
  { icon: Sparkles, value: 5, suffix: "+", label: "Years Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-white"
      aria-label="About QuadTech Consulting"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="/images/about-team.jpg"
                alt="QuadTech team collaborating on IT solutions"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block px-4 py-2 bg-slate-100 text-[#0f172a] rounded-full text-sm font-semibold mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4 leading-tight">
              Technology That Powers Your Ambition
            </h2>
            <p className="text-base text-slate-600 mb-4 leading-relaxed">
              We partner with small and mid-sized businesses to deliver managed
              IT services, cybersecurity, cloud solutions, and communications
              systems that actually work.
            </p>
            <p className="text-base text-slate-600 mb-6 leading-relaxed">
              Our team becomes an extension of yours, solving problems before
              they slow you down. We believe in transparent communication,
              practical solutions, and building long-term relationships.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-2 sm:p-3 bg-slate-50 rounded-xl"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#0d9488]/10 flex items-center justify-center mx-auto mb-1 sm:mb-2">
                    <stat.icon
                      size={16}
                      className="text-[#0d9488] sm:hidden"
                      aria-hidden="true"
                    />
                    <stat.icon
                      size={20}
                      className="text-[#0d9488] hidden sm:block"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-[#0f172a]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 leading-tight">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/why-choose-us"
              className="inline-flex items-center text-[#0d9488] font-semibold hover:text-[#0f766e] transition-colors group"
            >
              Learn Why Businesses Choose Us
              <ArrowRight
                size={18}
                className="ml-2 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
