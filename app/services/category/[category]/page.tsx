import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import {
  categoryDescriptions,
  serviceCards,
  serviceCategoryOrder,
} from "@/lib/serviceCards";

const categorySlugMap: Record<string, string> = {
  cybersecurity: "Cybersecurity",
  "cloud-infrastructure": "Cloud and Infrastructure",
  "web-communications": "Web and Communications",
  "it-management": "IT Management and Support",
};

const categorySlugReverse: Record<string, string> = {
  Cybersecurity: "cybersecurity",
  "Cloud and Infrastructure": "cloud-infrastructure",
  "Web and Communications": "web-communications",
  "IT Management and Support": "it-management",
};

export function generateStaticParams() {
  return Object.keys(categorySlugMap).map((slug) => ({ category: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const categoryName = categorySlugMap[category];

  if (!categoryName) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${categoryName} Services | QuadTech Consulting`,
    description:
      categoryDescriptions[categoryName as keyof typeof categoryDescriptions],
    alternates: {
      canonical: `/services/category/${category}`,
    },
    openGraph: {
      url: `/services/category/${category}`,
    },
    twitter: {
      title: `${categoryName} Services | QuadTech Consulting`,
      description:
        categoryDescriptions[categoryName as keyof typeof categoryDescriptions],
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryName = categorySlugMap[category];

  if (!categoryName) {
    notFound();
    return null;
  }

  const services = serviceCards.filter((s) => s.category === categoryName);
  const description =
    categoryDescriptions[categoryName as keyof typeof categoryDescriptions];

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              All Services
            </Link>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {categoryName}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
              {description}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-200 p-8 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="relative -mx-8 -mt-8 mb-6 aspect-[16/9] overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  <div className="mb-5 text-gray-900">
                    <service.icon size={48} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-200">
                    {service.title}
                  </h2>
                  <p className="text-base text-gray-600 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:text-[#14b8a6] group-hover:translate-x-1 transform transition-transform duration-200">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </span>
                </Link>
              ))}
            </div>

            {/* Other Categories */}
            <div className="mt-12 pt-10 border-t border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Explore Other Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {serviceCategoryOrder
                  .filter((cat) => cat !== categoryName)
                  .map((cat) => (
                    <Link
                      key={cat}
                      href={`/services/category/${categorySlugReverse[cat]}`}
                      className="group p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100"
                    >
                      <h4 className="font-bold text-gray-900 mb-2 group-hover:text-[#0d9488] transition-colors">
                        {cat}
                      </h4>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {
                          categoryDescriptions[
                            cat as keyof typeof categoryDescriptions
                          ]
                        }
                      </p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-950 via-slate-900 to-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your IT?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's discuss how our {categoryName} services can help your
              business thrive.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors font-semibold shadow-lg"
            >
              Schedule a Free Consultation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
