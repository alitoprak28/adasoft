import { HeroMap } from "@/components/brand/hero-map";
import { ButtonLink, CheckList } from "@/components/ui/button-link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref } from "@/i18n/routes";
import { getSiteText, whatsappHref } from "@/content/site";

const delay = (s: number) => ({ animationDelay: `${s}s` });

export function HomeHero({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.hero;
  return (
    <section aria-labelledby="hero-title" className="bg-deep relative overflow-hidden px-5 pt-12 pb-20 sm:px-8 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-10">
        <div className="flex flex-col items-start gap-7 sm:gap-8">
          <h1
            id="hero-title"
            className="rise text-[46px] leading-[0.98] font-bold tracking-[-0.03em] text-white sm:text-[72px] lg:text-[80px]"
            style={delay(0)}
          >
            {t.titleA}
            <br />
            {t.titleB}
          </h1>
          <p className="rise max-w-[520px] text-[17px] leading-relaxed text-on-dark-2 sm:text-[19px]" style={delay(0.12)}>
            {t.lead}
          </p>
          <div className="rise flex flex-wrap gap-3" style={delay(0.24)}>
            <ButtonLink href={anchorHref(locale, "quote")} variant="aqua">
              {t.cta}
            </ButtonLink>
            <ButtonLink href={whatsappHref(anchorHref(locale, "contact"))} variant="ghostLight" icon="chat">
              {d.common.whatsapp}
            </ButtonLink>
          </div>
          <div className="rise w-full max-w-[520px] border-t border-white/10 pt-6" style={delay(0.36)}>
            <CheckList items={getSiteText(locale).trustPoints} dark />
          </div>
        </div>
        <HeroMap locale={locale} label={t.mapLabel} className="mx-auto max-w-[640px] lg:max-w-none" />
      </div>
    </section>
  );
}
