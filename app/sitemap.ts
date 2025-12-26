import type { MetadataRoute } from "next";

import { resourcePosts } from "@/lib/resources";
import { serviceCards } from "@/lib/serviceCards";
import { siteConfig } from "@/lib/siteConfig";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },
    { url: `${baseUrl}/resources`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },
    { url: `${baseUrl}/why-choose-us`, lastModified: now },
    { url: `${baseUrl}/privacy`, lastModified: now },
    { url: `${baseUrl}/terms`, lastModified: now },
  ];

  // Keep category slugs in sync with Navbar + services routing.
  const categoryRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/category/cybersecurity`, lastModified: now },
    {
      url: `${baseUrl}/services/category/cloud-infrastructure`,
      lastModified: now,
    },
    {
      url: `${baseUrl}/services/category/web-communications`,
      lastModified: now,
    },
    { url: `${baseUrl}/services/category/it-management`, lastModified: now },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = serviceCards.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
  }));

  const resourceRoutes: MetadataRoute.Sitemap = resourcePosts.map((p) => ({
    url: `${baseUrl}/resources/${p.slug}`,
    lastModified: now,
  }));

  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
  ];
}
