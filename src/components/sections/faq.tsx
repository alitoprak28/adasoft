import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionTitle } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref } from "@/i18n/routes";
import type { Faq } from "@/content/services";
import { whatsappHref } from "@/content/site";

export function FaqSection({ locale, title, items }: { locale: Locale; title: string; items: Faq[] }) {
  const d = getDictionary(locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: locale,
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <Section tone="mist" aria-labelledby="sss-title">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
        <div className="flex flex-col gap-4">
          <Eyebrow>{d.faq.eyebrow}</Eyebrow>
          <SectionTitle id="sss-title">{title}</SectionTitle>
          <p className="text-[17px] leading-relaxed text-muted">
            {d.faq.notHere}{" "}
            <Link href={whatsappHref(anchorHref(locale, "contact"))} className="font-bold text-ocean hover:text-ocean-700">
              {d.common.whatsapp}
            </Link>
            {d.faq.reply}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          {items.map((f) => (
            <details key={f.q} className="faq rounded-2xl border border-line bg-white">
              <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 px-[22px] py-[18px] text-[17px] font-bold text-navy">
                {f.q}
                <Icon name="chevronDown" size={20} strokeWidth={2.4} className="faq-chev shrink-0 text-ocean" />
              </summary>
              <p className="px-[22px] pb-5 text-[15.5px] leading-[1.65] text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}
