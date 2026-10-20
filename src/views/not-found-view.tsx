import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { homeHref } from "@/i18n/routes";

export function NotFoundView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).notFound;
  return (
    <section className="dots-light flex min-h-[60vh] items-center bg-mist px-5 py-24 sm:px-8">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
        <p className="text-sm font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">404</p>
        <h1 className="text-[40px] leading-tight font-extrabold tracking-[-0.03em] text-navy sm:text-[52px]">{t.title}</h1>
        <p className="text-[17px] leading-relaxed text-body">{t.text}</p>
        <ButtonLink href={homeHref(locale)} trailingArrow>
          {t.cta}
        </ButtonLink>
      </div>
    </section>
  );
}
