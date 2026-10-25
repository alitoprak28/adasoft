import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { homeHref } from "@/i18n/routes";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <section className="bg-deep flex min-h-[60vh] items-center px-5 py-24 sm:px-8">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
        <p className="font-display text-[88px] leading-none font-bold tracking-[-0.04em] text-aqua/80 sm:text-[120px]">404</p>
        <h1 className="text-[36px] leading-tight font-bold tracking-[-0.03em] text-white sm:text-[48px]">{t.title}</h1>
        <p className="text-[17px] leading-relaxed text-on-dark-2">{t.text}</p>
        <ButtonLink href={homeHref(locale)} variant="aqua">
          {t.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
