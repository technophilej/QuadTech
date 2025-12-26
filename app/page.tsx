import type { Metadata } from "next";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Services from "@/components/Services";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: `${siteConfig.name} - Your Trusted IT Partner`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
  twitter: {
    title: `${siteConfig.name} - Your Trusted IT Partner`,
    description: siteConfig.description,
  },
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <Services />
        <About />
        <ContactCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
