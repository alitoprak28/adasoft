import type { MetadataRoute } from "next";
import { sectors } from "@/content/sectors";
import { services } from "@/content/services";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    ...services.map((s) => ({ url: `${site.url}/hizmetler/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...sectors.map((s) => ({ url: `${site.url}/sektorler/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
