import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/siteConfig";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${siteConfig.name} - Your Trusted IT Partner`,
    template: "%s | QuadTech Consulting",
  },
  description: siteConfig.description,
  // Default social image for pages that don't override it.
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteConfig.name} - Your Trusted IT Partner`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-team.jpg",
        width: 1200,
        height: 630,
        alt: "QuadTech Consulting team collaborating",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/icon.svg?v=4", type: "image/svg+xml" },
      { url: "/favicon.svg?v=4", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/favicon.svg?v=4", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg?v=4", type: "image/svg+xml" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} - Your Trusted IT Partner`,
    description: siteConfig.description,
    images: ["/images/hero-team.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased overflow-x-hidden`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0d9488] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            src="https://plausible.io/js/script.js"
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            strategy="lazyOnload"
          />
        ) : null}
        <Script id="ld-json-organization" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            contactPoint: [
              {
                "@type": "ContactPoint",
                email: siteConfig.email,
                telephone: siteConfig.phone || undefined,
                contactType: "customer service",
              },
            ],
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
