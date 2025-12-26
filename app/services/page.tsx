import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import {
  categoryDescriptions,
  serviceCards,
  serviceCategoryOrder,
} from "@/lib/serviceCards";

export const metadata: Metadata = {
  title: "Services | QuadTech Consulting",
  description:
    "Explore QuadTech Consulting services including managed IT, cybersecurity, cloud solutions, backup and disaster recovery, VoIP, and strategic IT consulting.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | QuadTech Consulting",
    description:
      "Explore managed IT, cybersecurity, cloud, backup and disaster recovery, VoIP, and IT consulting services from QuadTech Consulting.",
    url: "/services",
  },
  twitter: {
    title: "Services | QuadTech Consulting",
    description:
      "Explore managed IT, cybersecurity, cloud, backup and disaster recovery, VoIP, and IT consulting services from QuadTech Consulting.",
  },
};

export default function ServicesLandingPage() {
  const groups = serviceCategoryOrder
    .map((name) => ({
      name,
      items: serviceCards.filter((s) => s.category === name),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Section
          variant="default"
          size="lg"
          containerSize="responsive"
          className="pt-28 sm:pt-32 lg:pt-36"
        >
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-[#0f172a] text-white rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              Solutions for Every Business Need
            </h1>
            <p className="text-base md:text-lg text-slate-600">
              From proactive IT support to cybersecurity and cloud strategy, we
              help you build a reliable, secure foundation for growth.
            </p>
          </div>
        </Section>

        {/* Services Categories Section */}
        <Section variant="light" size="md" containerSize="responsive">
          {groups.map((group) => (
            <div key={group.name} className="mb-12">
              <div className="mb-6 max-w-3xl">
                <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-2">
                  {group.name}
                </h2>
                <p className="text-base text-slate-600">
                  {categoryDescriptions[group.name]}
                </p>
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.items.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-200 p-5 focus:outline-none focus:ring-2 focus:ring-[#0d9488]"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <div className="relative -mx-5 -mt-5 mb-4 aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-t-xl">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={400}
                        height={225}
                        className="object-cover object-center w-full h-full transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 via-transparent to-transparent" />
                    </div>
                    <div className="mb-3 text-[#0d9488]">
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transform transition-transform duration-200">
                      Learn More
                      <ArrowRight size={16} className="ml-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </Section>

        {/* CTA Section */}
        <Section variant="default" size="md" containerSize="responsive">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0f172a] mb-4">
              Not sure where to start?
            </h2>
            <p className="text-base md:text-lg text-slate-600 mb-6 px-4 sm:px-0">
              We'll review your current setup and recommend the best next steps
              based on your goals and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-7 py-3.5 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-colors font-semibold"
            >
              Schedule a Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
