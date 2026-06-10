import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://goldenkeyventures.in";
  
  // Since it's currently a single page app with sections, the only entry is the home page.
  // When they add new routes, they can easily append items to this array.
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
