import { BASE_LINK, DOMAIN } from "@/constants";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: BASE_LINK + "/sitemap.xml",
    host: DOMAIN,
  };
}
