import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { ogLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getSiteText, site } from "@/content/site";
import { fontVariables } from "@/lib/fonts";

export function shellMetadata(locale: Locale): Metadata {
  const d = getDictionary(locale);
  return {
    metadataBase: new URL(site.url),
    title: { default: d.meta.homeTitle, template: d.meta.titleTemplate },
    description: getSiteText(locale).description,
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: Object.values(ogLocale).filter((l) => l !== ogLocale[locale]),
      siteName: site.name,
    },
  };
}

/** Root document for one language: <html lang>, header, footer and the WhatsApp button. */
export function SiteShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={`${fontVariables} h-full`}>
      <body className="flex min-h-full flex-col">
        <SiteHeader locale={locale} />
        <main id="icerik" className="flex-1">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <WhatsAppFab locale={locale} />
      </body>
    </html>
  );
}
