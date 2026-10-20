import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionTitle } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorId } from "@/i18n/routes";
import { site } from "@/content/site";
import { QuoteWizard } from "./quote-wizard";

export function QuoteSection({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.quote;
  const { step, ...wizard } = d.wizard;
  return (
    <Section id={anchorId(locale, "quote")} tone="mist" aria-labelledby="teklif-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="teklif-title">{t.title}</SectionTitle>
          <p className="text-[17px] leading-relaxed text-muted">{t.intro}</p>
          <div className="mt-3 flex flex-col gap-3 border-t border-line pt-6">
            <p className="text-[15px] font-bold text-navy">{t.noForm}</p>
            <p className="flex items-center gap-2.5 text-[15.5px] text-body">
              <Icon name="chat" size={20} strokeWidth={2} className="text-lagoon-ink" />
              {t.whatsappLabel}: {site.contact.phoneDisplay}
            </p>
            <p className="flex items-center gap-2.5 text-[15.5px] text-body">
              <Icon name="mail" size={20} strokeWidth={2} className="text-lagoon-ink" />
              {t.emailLabel}: {site.contact.email}
            </p>
          </div>
        </div>
        <QuoteWizard t={{ ...wizard, stepLabels: [1, 2, 3].map(step) }} />
      </Container>
    </Section>
  );
}
