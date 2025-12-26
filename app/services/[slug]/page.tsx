import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Script from "next/script";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Section } from "@/components/ui/Section";
import { serviceCards } from "@/lib/serviceCards";
import { siteConfig } from "@/lib/siteConfig";

const getServiceCard = (slug: string) =>
  serviceCards.find((s) => s.slug === slug);

/**
 * Get context-aware CTA text based on service type
 */
const getServiceCtaText = (slug: string): string => {
  switch (slug) {
    case "cybersecurity-training":
      return "Schedule Training Consultation";
    case "security-assessments":
      return "Get Security Assessment";
    case "backup-disaster-recovery":
      return "Discuss Backup Solutions";
    case "penetration-testing":
      return "Request Penetration Test";
    case "compliance-security":
      return "Discuss Compliance Needs";
    case "website-development":
      return "Start Website Project";
    case "cloud-solutions":
      return "Explore Cloud Options";
    default:
      return "Schedule a Free Consultation";
  }
};

/**
 * Service data with full details for each service page
 */
const servicesData: Record<
  string,
  {
    title: string;
    description: string;
    longDescription: string;
    features: string[];
    benefits: string[];
  }
> = {
  "managed-it-services": {
    title: "Managed IT Services",
    description:
      "Continuous monitoring and maintenance that prevents problems before they impact your operations.",
    longDescription:
      "Our Managed IT Services provide comprehensive technology support tailored to your business needs. We proactively monitor your systems, resolve issues before they become problems, and ensure your infrastructure runs smoothly so you can focus on growing your business.",
    features: [
      "Proactive Monitoring",
      "Remote and On-site Support",
      "Infrastructure Management",
      "Help Desk Support",
      "Patch Management",
      "Vendor Management",
    ],
    benefits: [
      "Reduce downtime and increase productivity",
      "Predictable monthly IT costs",
      "Access to a team of IT experts",
      "Focus on your core business",
    ],
  },
  "website-development": {
    title: "Website Development and Support",
    description:
      "Modern, high-performance websites built to convert visitors into customers with ongoing technical support.",
    longDescription:
      "We design and develop custom websites that reflect your brand and drive results. From simple landing pages to complex web applications, our team delivers responsive, fast, and secure solutions with ongoing maintenance and support.",
    features: [
      "Custom Web Apps",
      "Performance Optimization",
      "Maintenance Plans",
      "SEO-Friendly Design",
      "Mobile Responsive",
      "Content Management",
    ],
    benefits: [
      "Professional online presence",
      "Increased lead generation",
      "Better user experience",
      "Ongoing technical support",
    ],
  },
  "email-domain-migration": {
    title: "Email/Domain Migration",
    description:
      "Seamless migration of your email systems and domains with minimal disruption.",
    longDescription:
      "Moving to a new email platform or domain can be complex. We handle the entire migration process, ensuring all your emails, contacts, and calendars transfer seamlessly with minimal downtime.",
    features: [
      "Seamless Transitions",
      "Complete Data Transfer",
      "Post-Migration Support",
      "DNS Management",
      "User Training",
      "Backup and Verification",
    ],
    benefits: [
      "Careful planning to minimize data loss",
      "Minimal business disruption",
      "Expert guidance throughout",
      "Ongoing support after migration",
    ],
  },
  "cybersecurity-training": {
    title: "Cybersecurity Training",
    description:
      "Empower your team to recognize and prevent cyber threats with engaging, practical training programs.",
    longDescription:
      "Your employees are your first line of defense against cyber threats. Our training programs teach your team to identify phishing attempts, handle sensitive data properly, and follow security best practices to protect your organization.",
    features: [
      "Phishing Simulations",
      "Security Awareness",
      "Compliance Training",
      "Interactive Modules",
      "Progress Tracking",
      "Custom Scenarios",
    ],
    benefits: [
      "Reduce human error risks",
      "Meet compliance requirements",
      "Build a security-first culture",
      "Protect sensitive data",
    ],
  },
  "compliance-security": {
    title: "State Compliance and Security",
    description:
      "Navigate complex regulatory requirements with expert guidance and implementation support.",
    longDescription:
      "Staying compliant with industry regulations can be overwhelming. We help you understand your requirements, implement necessary controls, and prepare for audits so you can operate with confidence.",
    features: [
      "Gap Analysis",
      "Policy Creation",
      "Audit Preparation",
      "Risk Assessment",
      "Documentation",
      "Ongoing Compliance Monitoring",
    ],
    benefits: [
      "Avoid costly penalties",
      "Build customer trust",
      "Streamlined audit process",
      "Clear compliance roadmap",
    ],
  },
  "penetration-testing": {
    title: "Penetration Testing",
    description:
      "Discover security weaknesses through ethical hacking before malicious actors exploit them.",
    longDescription:
      "Our certified security experts simulate real-world attacks on your systems to identify vulnerabilities. We provide detailed reports with prioritized recommendations to strengthen your security posture.",
    features: [
      "Network Testing",
      "Application Security",
      "Executive Reports",
      "Social Engineering Tests",
      "Remediation Guidance",
      "Retesting",
    ],
    benefits: [
      "Find vulnerabilities before hackers do",
      "Prioritized remediation plan",
      "Meet compliance requirements",
      "Protect your reputation",
    ],
  },
  "security-assessments": {
    title: "Security Assessments",
    description:
      "Comprehensive evaluation of your entire security posture with actionable improvement roadmaps.",
    longDescription:
      "Get a complete picture of your organization's security health. We evaluate your policies, procedures, and technical controls to identify gaps and provide a clear roadmap for improvement.",
    features: [
      "Perimeter Analysis",
      "Risk Evaluation",
      "Remediation Plans",
      "Policy Review",
      "Vulnerability Scanning",
      "Security Scoring",
    ],
    benefits: [
      "Understand your risk exposure",
      "Prioritize security investments",
      "Improve overall security posture",
      "Executive-ready reports",
    ],
  },
  "cloud-solutions": {
    title: "Cloud Solutions",
    description:
      "Strategic cloud adoption and optimization that reduces costs while improving scalability and reliability.",
    longDescription:
      "Whether you're moving to the cloud or optimizing your existing setup, we help you leverage cloud technology to reduce costs, improve flexibility, and scale your infrastructure as your business grows.",
    features: [
      "Migration Strategy",
      "Cost Optimization",
      "Hybrid Solutions",
      "Cloud Security",
      "Performance Monitoring",
      "Disaster Recovery",
    ],
    benefits: [
      "Reduce infrastructure costs",
      "Scale on demand",
      "Improve reliability",
      "Access anywhere",
    ],
  },
  "voip-phone-systems": {
    title: "VoIP and Phone Systems",
    description:
      "Business calling solutions with call routing, IVR, and softphone/desk phone provisioning.",
    longDescription:
      "Upgrade your business communications with modern VoIP solutions. We set up and manage phone systems that integrate with your existing tools, reduce costs, and provide professional features like auto-attendants and call analytics.",
    features: [
      "Number Porting",
      "Call Routing and IVR",
      "Teams/Zoom Phone Setup",
      "Softphone Apps",
      "Call Analytics",
      "Voicemail to Email",
    ],
    benefits: [
      "Lower phone bills",
      "Work from anywhere",
      "Professional call handling",
      "Easy scalability",
    ],
  },
  "backup-disaster-recovery": {
    title: "Backup and Disaster Recovery",
    description:
      "Automated backups and tested recovery plans to keep your data safe and your team online.",
    longDescription:
      "Protect your business from data loss with automated backup solutions and tested disaster recovery plans. We ensure your critical data is safe and can be restored quickly when you need it most.",
    features: [
      "Offsite Backups",
      "M365/Google Backup",
      "Recovery Testing",
      "Ransomware Protection",
      "RTO/RPO Planning",
      "Bare Metal Recovery",
    ],
    benefits: [
      "Peace of mind",
      "Fast recovery times",
      "Protection from ransomware",
      "Business continuity",
    ],
  },
  "it-consulting-vcio": {
    title: "IT Consulting (vCIO)",
    description:
      "Strategic planning and guidance to align technology investments with your business goals.",
    longDescription:
      "Get executive-level IT guidance without the full-time cost. Our virtual CIO services provide strategic technology planning, budgeting, and vendor management to ensure your IT investments drive business results.",
    features: [
      "Roadmaps and Budgeting",
      "Vendor Management",
      "Policy and Governance",
      "Technology Reviews",
      "Strategic Planning",
      "Quarterly Business Reviews",
    ],
    benefits: [
      "Align IT with business goals",
      "Optimize technology spending",
      "Expert guidance on demand",
      "Long-term technology strategy",
    ],
  },
};

/**
 * Generate static params for all service pages
 */
export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

/**
 * Generate metadata for each service page
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | QuadTech Consulting`,
    description: service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      url: `/services/${slug}`,
    },
    twitter: {
      title: `${service.title} | QuadTech Consulting`,
      description: service.description,
    },
  };
}

/**
 * Service Detail Page
 * Displays full information about a specific service
 */
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData[slug];
  const serviceCard = getServiceCard(slug);

  if (!service || !serviceCard) {
    notFound();
    return null;
  }

  const IconComponent = serviceCard.icon;
  const serviceImage = serviceCard.image;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "United States",
    serviceType: service.title,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Script id={`service-jsonld-${slug}`} type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <Navbar />
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 hero-spacing">
          <div className="container-responsive">
            <Link
              href="/#services"
              className="inline-flex items-center text-gray-700 hover:text-[#0d9488] font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Services
            </Link>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gray-900 text-white mb-5">
                  <IconComponent size={28} />
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
                  {service.title}
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6 max-w-2xl">
                  {service.longDescription}
                </p>

                {/* Service-specific CTA */}
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors font-semibold shadow-md hover:shadow-xl"
                >
                  {getServiceCtaText(slug)}
                </Link>

                {/* CTA microcopy */}
                <p className="mt-3 text-sm text-gray-500">
                  No obligation · Response within 1 business day
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[16/9] w-full">
                <Image
                  src={serviceImage}
                  alt={service.title}
                  width={800}
                  height={slug === "cybersecurity-training" ? 450 : 400}
                  className="w-full h-full object-cover absolute inset-0"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Features and Benefits */}
        <div className="section-spacing-md bg-white">
          <div className="container-responsive">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Features */}
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="w-1.5 h-6 bg-gray-900 rounded-full mr-3"></span>
                  What's Included
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-3 mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-base text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5 flex items-center">
                  <span className="w-1.5 h-6 bg-[#0d9488] rounded-full mr-3"></span>
                  Benefits
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start">
                      <CheckCircle
                        className="text-[#0d9488] mr-3 mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span className="text-base text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Section - Only for Cybersecurity Training */}
        {slug === "cybersecurity-training" && (
          <div className="section-spacing-md bg-gradient-to-b from-white to-slate-50 border-t border-slate-100">
            <div className="container-responsive">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
                How Our Training Works
              </h2>
              <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
                Our cybersecurity training process is designed to build lasting
                security awareness through practical, engaging education.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-slate-200/70">
                  <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center text-[#0d9488] font-bold text-xl mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Assessment
                  </h3>
                  <p className="text-gray-600">
                    We analyze your team's current security awareness and
                    identify knowledge gaps to create a customized training
                    plan.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-slate-200/70">
                  <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center text-[#0d9488] font-bold text-xl mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Hands-On Training
                  </h3>
                  <p className="text-gray-600">
                    Engaging, interactive sessions teach your team to recognize
                    and respond to common security threats.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center text-center border border-slate-200/70">
                  <div className="w-12 h-12 rounded-full bg-[#0d9488]/10 flex items-center justify-center text-[#0d9488] font-bold text-xl mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Ongoing Reinforcement
                  </h3>
                  <p className="text-gray-600">
                    Regular simulations and refresher modules ensure security
                    awareness becomes part of your company culture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mini FAQ - Only for Cybersecurity Training */}
        {slug === "cybersecurity-training" && (
          <div className="section-spacing-md bg-white border-t border-slate-100">
            <div className="container-responsive">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    How long does a typical training program take?
                  </h3>
                  <p className="text-gray-600">
                    Our core training modules can be completed in 2-3 hours,
                    broken into convenient 15-30 minute sessions. We also offer
                    comprehensive programs with regular refreshers over 3-6
                    months for maximum retention.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    Can training be customized for our industry?
                  </h3>
                  <p className="text-gray-600">
                    Absolutely. We tailor all training materials to address the
                    specific threats and compliance requirements relevant to
                    your industry, whether healthcare, finance, education, or
                    other sectors.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    How do you measure training effectiveness?
                  </h3>
                  <p className="text-gray-600">
                    We use pre and post-training assessments, phishing
                    simulation metrics, and behavior change tracking to measure
                    improvement. Regular reports help you see the tangible
                    impact on your security posture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Explore Other Services */}
        <div className="section-spacing-md bg-white border-t border-gray-100">
          <div className="container-responsive">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
              Explore Our Other IT Solutions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {serviceCards
                .filter((card) => card.slug !== slug)
                .slice(0, 4)
                .map((card) => {
                  const ServiceIcon = card.icon;
                  return (
                    <Link
                      key={card.slug}
                      href={`/services/${card.slug}`}
                      className="group flex flex-col items-center p-4 sm:p-5 rounded-xl border border-gray-200 hover:border-[#0d9488]/30 hover:shadow-lg transition-all duration-300 bg-slate-50 hover:bg-white"
                    >
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gray-100 text-gray-500 flex items-center justify-center mb-3 group-hover:bg-[#0d9488]/10 group-hover:text-[#0d9488] transition-colors">
                        <ServiceIcon size={24} />
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center group-hover:text-[#0d9488] transition-colors">
                        {card.title}
                      </span>
                    </Link>
                  );
                })}
            </div>
            <div className="mt-8 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[#0d9488] font-medium hover:text-[#0f766e] transition-colors"
              >
                View all services
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <ContactCTA
          variant="gradient"
          size="md"
          serviceName={service.title}
          ctaText={getServiceCtaText(slug)}
          showPhone={true}
        />

        {/* Footer link back */}
        <Section variant="light" size="sm" containerSize="responsive">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center text-[#0d9488] hover:text-[#14b8a6] font-medium transition-colors"
            >
              <ArrowLeft size={16} className="mr-1.5" />
              Back to Home
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors"
            >
              View All Services
              <ArrowRight size={16} className="ml-1.5" />
            </Link>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
