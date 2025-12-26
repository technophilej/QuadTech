import { ArrowRight, BookOpen } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import { resourcePosts } from "@/lib/resources";
import { formatDateShort } from "@/lib/utils";

const POSTS_PER_PAGE = 6;

export const metadata: Metadata = {
  title: "Resources | QuadTech Consulting",
  description:
    "Practical IT and cybersecurity guides from QuadTech Consulting. Learn best practices for security, cloud, email migrations, and IT operations.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Resources | QuadTech Consulting",
    description:
      "Practical IT and cybersecurity guides on security, cloud, email migrations, and IT operations from QuadTech Consulting.",
    url: "/resources",
  },
  twitter: {
    title: "Resources | QuadTech Consulting",
    description:
      "Practical IT and cybersecurity guides on security, cloud, email migrations, and IT operations from QuadTech Consulting.",
  },
};

// Allow ISR for the listing page while keeping it fast and cacheable.
export const revalidate = 3600;

export default async function ResourcesPage(props: {
  searchParams?: Promise<{ page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = Math.ceil(resourcePosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;

  // Guard against out-of-range pagination requests.
  if (currentPage < 1 || currentPage > Math.max(totalPages, 1)) {
    notFound();
  }
  const paginatedPosts = resourcePosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE,
  );

  const featuredPost = currentPage === 1 ? resourcePosts[0] : null;
  const regularPosts =
    currentPage === 1 ? paginatedPosts.slice(1) : paginatedPosts;

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <section className="bg-white pt-28 sm:pt-32 lg:pt-36 pb-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#0d9488]/10 flex items-center justify-center">
                <BookOpen size={20} className="text-[#0d9488]" />
              </div>
              <span className="text-sm font-semibold text-[#0d9488] uppercase tracking-wide">
                Resources
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">
              IT Insights for Growing Businesses
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl">
              Short, practical guides to help you make confident IT decisions,
              written for business owners and teams.
            </p>
          </div>
        </section>

        {featuredPost && (
          <section className="bg-slate-50 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Link
                href={`/resources/${featuredPost.slug}`}
                className="group block bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[280px]">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover object-center"
                      sizes="(min-width: 768px) 50vw, 100vw"
                      priority
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-[#0d9488]/10 text-[#0d9488] rounded-full text-xs font-semibold mb-4 w-fit">
                      Featured
                    </span>
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <span>{formatDateShort(featuredPost.date)}</span>
                      <span>•</span>
                      <span>{featuredPost.readingTime}</span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-[#0d9488] transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {featuredPost.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {featuredPost.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-1 rounded-full bg-slate-100 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read Article
                      <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentPage === 1 && (
              <h2 className="text-xl font-bold text-[#0f172a] mb-6">
                More Articles
              </h2>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {regularPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/${post.slug}`}
                  className="group bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 overflow-hidden"
                  aria-label={`Read ${post.title}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span>{formatDateShort(post.date)}</span>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h3 className="text-base font-bold text-[#0f172a] mb-2 group-hover:text-[#0d9488] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center text-[#0d9488] font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      Read More
                      <ArrowRight size={14} className="ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              basePath="/resources"
            />
          </div>
        </section>

        <section className="py-10 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[#0f172a] mb-3">
              Have Questions About Your IT?
            </h2>
            <p className="text-base text-slate-600 mb-6">
              We're happy to discuss your technology challenges and share
              practical recommendations, no strings attached.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d9488] text-white rounded-xl hover:bg-[#0f766e] transition-colors font-semibold"
            >
              Schedule a Free Consultation
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
