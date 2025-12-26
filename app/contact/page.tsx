import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us | QuadTech Consulting",
  description:
    "Schedule a free IT consultation with QuadTech Consulting. We help growing businesses with managed IT, cybersecurity, cloud solutions, and more.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
  },
  twitter: {
    title: "Contact Us | QuadTech Consulting",
    description:
      "Schedule a free IT consultation with QuadTech Consulting. We help growing businesses with managed IT, cybersecurity, cloud solutions, and more.",
  },
};

export default function Contact() {
  return <ContactPage />;
}
