import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | QuadTech Consulting",
  description:
    "Learn how QuadTech Consulting collects, uses, and protects your personal information.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    url: "/privacy",
  },
  twitter: {
    title: "Privacy Policy | QuadTech Consulting",
    description:
      "Learn how QuadTech Consulting collects, uses, and protects your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-28 sm:pt-32 lg:pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f172a] mb-4">
              Privacy Policy
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
                Introduction
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                QuadTech Consulting ("we," "our," or "us") respects your privacy
                and is committed to protecting your personal information. This
                Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website or use our
                services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect information about you in a variety of ways,
                including:
              </p>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                Personal Data
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you contact us through our website, we may collect
                personally identifiable information such as your name, email
                address, phone number, and company name.
              </p>
              <h3 className="text-xl font-semibold text-[#0f172a] mb-3">
                Usage Data
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may automatically collect certain information when you visit
                our website, including your IP address, browser type, operating
                system, referring URLs, and information about how you interact
                with our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                How We Use Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you information about our services</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Protect against fraudulent or unauthorized activity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Information Sharing
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy. We may share information with trusted
                service providers who assist us in operating our website and
                conducting our business, provided they agree to keep this
                information confidential.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Data Security
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational security
                measures to protect your personal information against
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the Internet or
                electronic storage is completely secure.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Your Rights
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Depending on your location, you may have certain rights
                regarding your personal information, including the right to
                access, correct, or delete your data. To exercise these rights,
                please contact us using the information below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to
                enhance your experience. You can set your browser to refuse
                cookies, but some features of our website may not function
                properly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Changes to This Policy
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                Contact Us
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                If you have questions about this Privacy Policy, please contact
                us at:
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
