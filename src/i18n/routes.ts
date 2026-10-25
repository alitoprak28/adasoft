// URL scheme for both languages. Turkish stays unprefixed; English lives under /en.
// Kept free of page copy so the header can import it on the client.
import type { Locale } from "./config";

export const serviceSlugs = {
  ai: { tr: "yapay-zeka", en: "ai-solutions" },
  web: { tr: "web-siteleri", en: "websites" },
  mobile: { tr: "mobil-uygulama", en: "mobile-apps" },
  ecommerce: { tr: "e-ticaret", en: "e-commerce" },
  custom: { tr: "ozel-yazilim", en: "custom-software" },
  games: { tr: "oyun-gelistirme", en: "game-development" },
  design: { tr: "grafik-tasarim", en: "graphic-design" },
  marketing: { tr: "dijital-pazarlama", en: "digital-marketing" },
  hosting: { tr: "bakim-hosting-destek", en: "maintenance-hosting-support" },
} as const satisfies Record<string, Record<Locale, string>>;

export const sectorSlugs = {
  tourism: { tr: "turizm-otel", en: "tourism-hotels" },
  realEstate: { tr: "emlak", en: "real-estate" },
  construction: { tr: "insaat-mimarlik", en: "construction-architecture" },
  education: { tr: "egitim", en: "education" },
  health: { tr: "saglik", en: "healthcare" },
  automotive: { tr: "otomotiv", en: "automotive" },
  food: { tr: "restoran-kafe", en: "restaurants-cafes" },
  logistics: { tr: "lojistik-ticaret", en: "logistics-trade" },
  retail: { tr: "kobi-perakende", en: "smes-retail" },
} as const satisfies Record<string, Record<Locale, string>>;

export const legalSlugs = {
  privacy: { tr: "gizlilik", en: "privacy" },
  dataProtection: { tr: "kvkk", en: "data-protection" },
} as const satisfies Record<string, Record<Locale, string>>;

export type ServiceId = keyof typeof serviceSlugs;
export type SectorId = keyof typeof sectorSlugs;
export type LegalId = keyof typeof legalSlugs;

const bases = {
  tr: { home: "/", services: "/hizmetler", sectors: "/sektorler" },
  en: { home: "/en", services: "/en/services", sectors: "/en/industries" },
} as const satisfies Record<Locale, Record<string, string>>;

/** In-page section anchors on the homepage. */
export const anchors = {
  services: { tr: "hizmetler", en: "services" },
  sectors: { tr: "sektorler", en: "industries" },
  process: { tr: "surec", en: "process" },
  projects: { tr: "projeler", en: "projects" },
  quote: { tr: "teklif", en: "quote" },
  about: { tr: "hakkimizda", en: "about" },
  contact: { tr: "iletisim", en: "contact" },
} as const satisfies Record<string, Record<Locale, string>>;

export type AnchorKey = keyof typeof anchors;

export const homeHref = (locale: Locale) => bases[locale].home;
export const anchorId = (locale: Locale, key: AnchorKey) => anchors[key][locale];
export const anchorHref = (locale: Locale, key: AnchorKey) => `${bases[locale].home}#${anchors[key][locale]}`;
export const serviceHref = (locale: Locale, id: ServiceId) => `${bases[locale].services}/${serviceSlugs[id][locale]}`;
export const sectorHref = (locale: Locale, id: SectorId) => `${bases[locale].sectors}/${sectorSlugs[id][locale]}`;
export const legalHref = (locale: Locale, id: LegalId) => `${locale === "tr" ? "" : bases[locale].home}/${legalSlugs[id][locale]}`;

export function serviceIdFromSlug(locale: Locale, slug: string): ServiceId | undefined {
  return (Object.keys(serviceSlugs) as ServiceId[]).find((id) => serviceSlugs[id][locale] === slug);
}

export function sectorIdFromSlug(locale: Locale, slug: string): SectorId | undefined {
  return (Object.keys(sectorSlugs) as SectorId[]).find((id) => sectorSlugs[id][locale] === slug);
}

export function localeFromPath(pathname: string): Locale {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "tr";
}

/** The same page in the other language; falls back to that language's homepage. */
export function alternateHref(pathname: string, target: Locale): string {
  const from = localeFromPath(pathname);
  if (from === target) return pathname;
  const path = pathname.replace(/\/$/, "") || "/";
  const legal = (Object.keys(legalSlugs) as LegalId[]).find((id) => legalHref(from, id) === path);
  if (legal) return legalHref(target, legal);
  for (const kind of ["services", "sectors"] as const) {
    const prefix = `${bases[from][kind]}/`;
    if (!path.startsWith(prefix)) continue;
    const slug = path.slice(prefix.length);
    if (kind === "services") {
      const id = serviceIdFromSlug(from, slug);
      if (id) return serviceHref(target, id);
    } else {
      const id = sectorIdFromSlug(from, slug);
      if (id) return sectorHref(target, id);
    }
  }
  return homeHref(target);
}

/** Absolute alternates for metadata (hreflang). */
export function languageAlternates(paths: Record<Locale, string>) {
  return { tr: paths.tr, en: paths.en, "x-default": paths.tr };
}
