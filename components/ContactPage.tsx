"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Link from "next/link";
import { type FormEvent, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import { siteConfig } from "@/lib/siteConfig";

const benefits = [
  "Free consultation with no obligation",
  "Speak directly with IT experts",
  "Solutions customized for your business",
  "Transparent pricing with no hidden fees",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (formData.get("botcheck")) {
      setStatus("idle");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Form is temporarily unavailable. Please email contact@quadtechconsulting.com.",
      );
      return;
    }

    const subject = name
      ? `New Website Inquiry: ${name} - QuadTech Consulting`
      : "New Website Inquiry - QuadTech Consulting";

    formData.set("access_key", accessKey);
    formData.set("subject", subject);
    formData.set("from_name", "QuadTech Website");
    if (email) {
      formData.set("replyto", email);
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch (_error) {
      setStatus("error");
      setErrorMessage(
        "Unable to send message. Please try again or email us directly.",
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Section
          variant="none"
          size="lg"
          containerSize="responsive"
          className="bg-gradient-to-br from-slate-50 via-white to-slate-100/50 pt-28 sm:pt-32 lg:pt-36"
        >
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0d9488] transition-colors text-sm font-medium"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] mb-5">
              Schedule a Free Consultation
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Tell us about your IT challenges and goals. We will review your
              current technology environment and identify opportunities to
              improve performance, strengthen security, and reduce costs.
            </p>
          </motion.div>

          {/* Form Grid */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-bold text-[#0f172a] mb-8">
                Contact Information
              </h2>

              <div className="space-y-6 mb-10">
                {siteConfig.phone && (
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Phone
                        className="text-white"
                        size={22}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-1">
                        Phone
                      </h3>
                      <a
                        href={`tel:${siteConfig.phone}`}
                        className="text-slate-600 hover:text-[#0d9488] transition-colors"
                      >
                        {siteConfig.phone}
                      </a>
                      <p className="text-sm text-slate-600">
                        Monday through Friday, 8am to 6pm EST
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-white" size={22} aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0f172a] mb-1">Email</h3>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-slate-600 hover:text-[#0d9488] transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {(siteConfig.addressLine1 || siteConfig.addressLine2) && (
                  <div className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPin
                        className="text-white"
                        size={22}
                        aria-hidden="true"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0f172a] mb-1">
                        Office
                      </h3>
                      {siteConfig.addressLine1 && (
                        <p className="text-slate-600">
                          {siteConfig.addressLine1}
                        </p>
                      )}
                      {siteConfig.addressLine2 && (
                        <p className="text-slate-600">
                          {siteConfig.addressLine2}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 bg-gradient-to-br from-[#1e3a5f] to-[#0f2744] rounded-3xl shadow-xl">
                <h3 className="font-bold text-white mb-4 text-lg">
                  Why Work With Us?
                </h3>
                <motion.ul
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="space-y-3"
                >
                  {benefits.map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      className="flex items-center gap-3 text-slate-200"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#0d9488]/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2
                          className="text-[#0d9488]"
                          size={14}
                          aria-hidden="true"
                        />
                      </div>
                      <span className="text-sm">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              <form
                className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200/80"
                onSubmit={handleSubmit}
              >
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#0f172a] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      autoComplete="name"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all bg-slate-50/50 hover:bg-slate-50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-[#0f172a] mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all bg-slate-50/50 hover:bg-slate-50"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-[#0f172a] mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      aria-describedby="phone-hint"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all bg-slate-50/50 hover:bg-slate-50"
                      placeholder="(555) 123-4567"
                    />
                    <p id="phone-hint" className="text-xs text-slate-500 mt-1">
                      Optional
                    </p>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-semibold text-[#0f172a] mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      autoComplete="organization"
                      className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all bg-slate-50/50 hover:bg-slate-50"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#0f172a] mb-2"
                  >
                    How Can We Help? *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#0d9488]/20 focus:border-[#0d9488] outline-none transition-all resize-none bg-slate-50/50 hover:bg-slate-50"
                    placeholder="Tell us about your IT challenges and goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "submitting"}
                  whileHover={
                    status !== "submitting" ? { scale: 1.02, y: -2 } : {}
                  }
                  whileTap={status !== "submitting" ? { scale: 0.98 } : {}}
                  className="w-full bg-gradient-to-r from-[#0d9488] to-[#0f766e] text-white px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold shadow-lg flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2
                        className="mr-2 animate-spin"
                        size={20}
                        aria-hidden="true"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2" size={20} aria-hidden="true" />
                    </>
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3"
                    role="alert"
                    aria-live="polite"
                  >
                    <CheckCircle2
                      className="text-green-600 flex-shrink-0 mt-0.5"
                      size={20}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-green-900">
                        Message sent successfully!
                      </p>
                      <p className="text-sm text-green-700 mt-1">
                        Thanks for reaching out! We will be in touch within one
                        business day.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle
                      className="text-red-600 flex-shrink-0 mt-0.5"
                      size={20}
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-semibold text-red-900">
                        Unable to send message
                      </p>
                      <p className="text-sm text-red-700 mt-1">
                        {errorMessage ? (
                          errorMessage
                        ) : (
                          <>
                            Something went wrong. Please try again or contact us
                            at{" "}
                            <a
                              href={`mailto:${siteConfig.email}`}
                              className="underline hover:text-red-900"
                            >
                              {siteConfig.email}
                            </a>
                            .
                          </>
                        )}
                      </p>
                    </div>
                  </motion.div>
                )}

                <p className="text-xs text-slate-600 text-center mt-6">
                  By submitting this form, you agree to receive communication
                  from QuadTech Consulting.
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs">No obligation</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-400">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-xs">
                        Response within 1 business day
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
