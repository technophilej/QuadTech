import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhyChooseUsContent from "@/components/WhyChooseUsContent";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "Discover why businesses trust QuadTech Consulting for their IT needs. Clear communication, responsive support, practical security, and strategic guidance.",
  alternates: {
    canonical: "/why-choose-us",
  },
  openGraph: {
    url: "/why-choose-us",
  },
  twitter: {
    title: "Why Choose Us",
    description:
      "Discover why businesses trust QuadTech Consulting for their IT needs. Clear communication, responsive support, practical security, and strategic guidance.",
  },
};

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="flex-1">
        <WhyChooseUsContent />
      </main>
      <Footer />
    </div>
  );
}
