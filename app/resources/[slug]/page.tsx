import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getResourcePost, resourcePosts } from "@/lib/resources";
import { serviceCards } from "@/lib/serviceCards";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return resourcePosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getResourcePost(slug);

  if (!post) {
    return { title: "Resource Not Found" };
  }

  return {
    title: `${post.title} | QuadTech Consulting`,
    description: post.description,
    alternates: {
      canonical: `/resources/${post.slug}`,
    },
    openGraph: {
      url: `/resources/${post.slug}`,
    },
    twitter: {
      title: `${post.title} | QuadTech Consulting`,
      description: post.description,
    },
  };
}

// Revalidate resource detail pages periodically for ISR.
export const revalidate = 3600;

export default async function ResourcePostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getResourcePost(slug);

  if (!post) {
    notFound();
    return null;
  }

  const relatedServices = (post.relatedServiceSlugs ?? [])
    .map((serviceSlug) => serviceCards.find((s) => s.slug === serviceSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 pt-28 sm:pt-32 lg:pt-36 pb-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/resources"
              className="inline-flex items-center text-gray-900 hover:text-gray-700 font-medium mb-8 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Resources
            </Link>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
              <span>{formatDate(post.date)}</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              {post.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 768px, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 to-transparent" />
            </div>
          </div>
        </div>

        <article className="py-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <p
                  key={`${post.slug}-${index}`}
                  className="text-lg text-gray-700 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Key Takeaways */}
            {post.takeaways && post.takeaways.length > 0 && (
              <div className="mt-10 p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Key takeaways
                </h3>
                <ul className="space-y-3">
                  {post.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex items-start gap-3">
                      <span
                        className="mt-2 h-2 w-2 rounded-full bg-[#0d9488] flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-base text-gray-700 leading-relaxed">
                        {takeaway}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Recommended Services */}
            {relatedServices.length > 0 && (
              <div className="mt-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    Recommended services
                  </h3>
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-[#0d9488] hover:text-[#14b8a6] transition-colors"
                  >
                    View all services
                  </Link>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {relatedServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-150 overflow-hidden focus:outline-none focus:ring-2 focus:ring-gray-900"
                      aria-label={`Learn more about ${service.title}`}
                    >
                      <div className="relative aspect-[16/9] overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center gap-2 text-gray-900">
                          <service.icon size={18} strokeWidth={2} />
                          <span className="text-sm font-semibold">Service</span>
                        </div>
                        <h4 className="mt-2 text-base font-bold text-gray-900 group-hover:text-[#0d9488] transition-colors">
                          {service.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 leading-relaxed line-clamp-3">
                          {service.description}
                        </p>
                        <div className="mt-4 inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:text-[#14b8a6]">
                          Learn More
                          <span
                            className="ml-2 transition-transform group-hover:translate-x-0.5"
                            aria-hidden="true"
                          >
                            →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Sources Section */}
            {post.sources && post.sources.length > 0 && (
              <div className="mt-10 p-6 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Sources and References
                </h3>
                <ul className="space-y-3">
                  {post.sources.map((source) => (
                    <li key={source.url} className="flex items-start gap-2">
                      <ExternalLink
                        size={16}
                        className="text-[#0d9488] mt-1 flex-shrink-0"
                      />
                      <div>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0d9488] hover:text-[#14b8a6] hover:underline font-medium"
                        >
                          {source.title}
                        </a>
                        <span className="text-gray-600 text-sm ml-2">
                          ({source.publisher})
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10 p-6 rounded-2xl border border-gray-100 bg-white shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Want help with this?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We can review your current setup and recommend a clear,
                budget-friendly plan.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
