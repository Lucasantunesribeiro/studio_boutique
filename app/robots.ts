import { MetadataRoute } from "next";
import { SEO } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/"],
    },
    sitemap: `${SEO.url}/sitemap.xml`,
  };
}
