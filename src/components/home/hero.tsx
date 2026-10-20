import { HeroMap } from "@/components/brand/hero-map";
import { ButtonLink, CheckList } from "@/components/ui/button-link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref } from "@/i18n/routes";
import { getSiteText, whatsappHref } from "@/content/site";

export function HomeHero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.hero;
  return (
    <section aria-labelledby="hero-title" className="dots-light bg-mist px-5 pt-6 pb-16 sm:px-8 sm:pt-14 sm:pb-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-14">
        <div className="flex flex-col items-start gap-6 sm:gap-7">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-foam px-3.5 py-2 text-sm font-bold text-lagoon-deep">
            <span className="size-2 rounded-full bg-aqua" />
            {t.pill}
          </p>
          <h1 id="hero-title" className="text-[42px] leading-[1.04] font-extrabold tracking-[-0.035em] text-navy sm:text-[68px]">
            {t.titleA}
            <br />
            <span className="text-ocean">{t.titleB}</span>
          </h1>
          <p className="max-w-[540px] text-[17px] leading-relaxed text-body sm:text-[19px]">{t.lead}</p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={anchorHref(locale, "quote")} trailingArrow>
              {t.cta}
            </ButtonLink>
            <ButtonLink href={whatsappHref(anchorHref(locale, "contact"))} variant="secondary" icon="chat">
              {d.common.whatsapp}
            </ButtonLink>
          </div>
          <CheckList items={getSiteText(locale).trustPoints} className="mt-1" />
        </div>
        <HeroMap locale={locale} label={t.mapLabel} />
      </div>
    </section>
  );
}
