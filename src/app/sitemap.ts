import type { MetadataRoute } from "next";
import { locales, type Locale } from "@/i18n/config";
import { homeHref, sectorHref, sectorSlugs, serviceHref, serviceSlugs, type SectorId, type ServiceId } from "@/i18n/routes";
import { site } from "@/content/site";

const abs = (path: string) => `${site.url}${path === "/" ? "" : path}`;

/** One entry per page and language, each listing its counterpart for hreflang. */
function entries(pathFor: (l: Locale) => string, priority: number): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, abs(pathFor(l))]));
  return locales.map((l) => ({ url: abs(pathFor(l)), changeFrequency: "monthly", priority, alternates: { languages } }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...entries(homeHref, 1),
    ...(Object.keys(serviceSlugs) as ServiceId[]).flatMap((id) => entries((l) => serviceHref(l, id), 0.8)),
    ...(Object.keys(sectorSlugs) as SectorId[]).flatMap((id) => entries((l) => sectorHref(l, id), 0.7)),
  ];
}
