import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gjbuildcon.com";

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/capabilities`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
