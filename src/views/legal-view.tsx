import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { languageAlternates, legalHref, type LegalId } from "@/i18n/routes";
import { getLegalDoc, legalUpdated } from "@/content/legal";

export function legalMetadata(locale: Locale, id: LegalId): Metadata {
  const doc = getLegalDoc(locale, id);
  return {
    title: doc.title,
    description: doc.metaDescription,
    alternates: { canonical: legalHref(locale, id), languages: languageAlternates({ tr: legalHref("tr", id), en: legalHref("en", id) }) },
  };
}

export function LegalView({ locale, id }: { locale: Locale; id: LegalId }) {
  const t = getDictionary(locale).legal;
  const doc = getLegalDoc(locale, id);
  const other: LegalId = id === "privacy" ? "dataProtection" : "privacy";
  return (
    <section aria-labelledby="legal-title" className="bg-white px-5 py-14 sm:px-8 sm:py-20">
      <article className="mx-auto flex max-w-[760px] flex-col gap-10">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">{t.eyebrow}</p>
          <h1 id="legal-title" className="text-[36px] leading-[1.1] font-extrabold tracking-[-0.03em] text-navy sm:text-[48px]">
            {doc.title}
          </h1>
          <p className="text-sm font-semibold text-muted">
            {t.updated}: {legalUpdated[locale]}
          </p>
          <p className="text-[17px] leading-relaxed text-body">{doc.intro}</p>
        </header>

        {doc.sections.map((s) => (
          <section key={s.heading} className="flex flex-col gap-3.5">
            <h2 className="text-[22px] font-extrabold tracking-[-0.01em] text-navy">{s.heading}</h2>
            {s.items && (
              <ul className="flex flex-col gap-2 text-base leading-relaxed text-body">
                {s.items.map((item) => (
                  <li key={item} className="flex gap-2.5">
                    <Icon name="check" size={18} strokeWidth={2.4} className="mt-1 shrink-0 text-lagoon-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {s.paragraphs?.map((p) => (
              <p key={p} className="text-base leading-relaxed text-body">
                {p}
              </p>
            ))}
          </section>
        ))}

        <Link
          href={legalHref(locale, other)}
          className="inline-flex min-h-11 items-center gap-1.5 self-start border-t border-line pt-6 text-[15px] font-bold text-ocean hover:text-ocean-700"
        >
          {getLegalDoc(locale, other).title}
          <Icon name="arrowRight" size={16} strokeWidth={2.4} />
        </Link>
      </article>
    </section>
  );
}
