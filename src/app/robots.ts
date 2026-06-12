import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://quotexwallahacademy.com/sitemap.xml",
    host: "https://quotexwallahacademy.com",
  };
}
