import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionTitle } from "@/components/ui/section-heading";
import { site } from "@/content/site";
import { QuoteWizard } from "./quote-wizard";

export function QuoteSection() {
  return (
    <Section id="teklif" tone="mist" aria-labelledby="teklif-title">
      <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div className="flex flex-col gap-[18px]">
          <Eyebrow>Teklif al</Eyebrow>
          <SectionTitle id="teklif-title">Projenizi bir dakikada anlatın</SectionTitle>
          <p className="text-[17px] leading-relaxed text-muted">
            Üç kısa soruyu yanıtlayın; ihtiyacınızı inceleyip size özel bir teklifle dönelim. Ücretsiz ve bağlayıcı değil.
          </p>
          <div className="mt-3 flex flex-col gap-3 border-t border-line pt-6">
            <p className="text-[15px] font-bold text-navy">Form doldurmak istemiyor musunuz?</p>
            <p className="flex items-center gap-2.5 text-[15.5px] text-body">
              <Icon name="chat" size={20} strokeWidth={2} className="text-lagoon-ink" />
              WhatsApp: {site.contact.phoneDisplay}
            </p>
            <p className="flex items-center gap-2.5 text-[15.5px] text-body">
              <Icon name="mail" size={20} strokeWidth={2} className="text-lagoon-ink" />
              E-posta: {site.contact.email}
            </p>
          </div>
        </div>
        <QuoteWizard />
      </Container>
    </Section>
  );
}
