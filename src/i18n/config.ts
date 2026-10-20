export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const localeLabels: Record<Locale, string> = { tr: "TR", en: "EN" };
export const ogLocale: Record<Locale, string> = { tr: "tr_TR", en: "en_US" };
