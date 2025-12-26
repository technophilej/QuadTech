import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | QuadTech Consulting",
  description:
    "Read the terms and conditions governing your use of QuadTech Consulting services and website.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    url: "/terms",
  },
  twitter: {
    title: "Terms of Service | QuadTech Consulting",
    description:
      "Read the terms and conditions governing your use of QuadTech Consulting services and website.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-slate-600">
              Last updated: December 2024
            </p>
          </div>
        </div>

        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-slate max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Agreement to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using the QuadTech Consulting website and
                services, you agree to be bound by these Terms of Service. If
                you do not agree to these terms, please do not use our website
                or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Services Description
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                QuadTech Consulting provides IT consulting, managed services,
                cybersecurity, cloud solutions, and related technology services.
                The specific terms of any service engagement will be outlined in
                a separate service agreement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Use of Website
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to use our website only for lawful purposes and in a
                way that does not infringe the rights of others or restrict
                their use of the website. Prohibited behavior includes:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>
                  Attempting to gain unauthorized access to our systems or
                  networks
                </li>
                <li>
                  Transmitting any malicious code, viruses, or harmful content
                </li>
                <li>
                  Using automated systems to scrape or collect data without
                  permission
                </li>
                <li>Impersonating another person or entity</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                All content on this website, including text, graphics, logos,
                images, and software, is the property of QuadTech Consulting or
                its content suppliers and is protected by intellectual property
                laws. You may not reproduce, distribute, or create derivative
                works without our express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Disclaimer of Warranties
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website and services are provided "as is" without warranties
                of any kind, either express or implied. We do not warrant that
                our website will be uninterrupted, error-free, or free of
                viruses or other harmful components.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Limitation of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, QuadTech Consulting
                shall not be liable for any indirect, incidental, special,
                consequential, or punitive damages arising from your use of our
                website or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Indemnification
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                You agree to indemnify and hold harmless QuadTech Consulting,
                its officers, directors, employees, and agents from any claims,
                damages, losses, or expenses arising from your use of our
                website or violation of these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Third Party Links
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website may contain links to third party websites. We are
                not responsible for the content or privacy practices of these
                external sites. We encourage you to review the terms and privacy
                policies of any third party sites you visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Governing Law
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in
                accordance with the laws of the jurisdiction in which QuadTech
                Consulting operates, without regard to conflict of law
                principles.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Changes to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any
                time. Changes will be effective immediately upon posting to this
                page. Your continued use of our website after any changes
                constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions about these Terms of Service, please
                contact us at:
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Email:</strong>{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[#0d9488] hover:text-[#14b8a6]"
                >
                  {siteConfig.email}
                </a>
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-slate-200">
              <Link
                href="/"
                className="text-[#0d9488] hover:text-[#14b8a6] font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
