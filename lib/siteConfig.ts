export const siteConfig = {
  name: "QuadTech Consulting",
  tagline: "Technology That Powers Your Ambition",
  description:
    "We partner with small and mid-sized businesses to deliver managed IT services, cybersecurity, cloud solutions, and communications systems that actually work. Our team becomes an extension of yours, solving problems before they slow you down.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://quadtechconsulting.com"),
  email: "contact@quadtechconsulting.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "(207) 751-5564",
  addressLine1: process.env.NEXT_PUBLIC_ADDRESS_LINE1 ?? "",
  addressLine2: process.env.NEXT_PUBLIC_ADDRESS_LINE2 ?? "",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
  twitterUrl: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  instagramUrl:
    process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
    "https://www.instagram.com/p/DSoDD2cEUzB/",
};
