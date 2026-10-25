import { IslandWatermark } from "@/components/brand/hero-map";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/layout";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, anchorId } from "@/i18n/routes";
import { emailHref, phoneHref, site, whatsappHref } from "@/content/site";

// Padding widens the tap area; the negative margin keeps the list spacing unchanged.
const contactLink = "-my-1.5 flex items-center gap-2.5 py-1.5 transition-colors hover:text-white";

type Props = {
  locale: Locale;
  title?: string;
  text?: string;
  showContacts?: boolean;
};

export function CtaBand({ locale, title, text, showContacts = true }: Props) {
  const d = getDictionary(locale);
  const contactHref = anchorHref(locale, "contact");
  return (
    <section
      id={anchorId(locale, "contact")}
      aria-labelledby="iletisim-title"
      className="bg-deep relative scroll-mt-4 overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
    >
      <IslandWatermark className="pointer-events-none absolute top-1/2 -right-24 hidden w-[720px] -translate-y-1/2 lg:block" />
      <Container className="relative flex flex-col items-start gap-6">
        <h2 id="iletisim-title" className="max-w-[720px] text-[36px] leading-[1.05] font-bold tracking-[-0.03em] text-white sm:text-[56px]">
          {title ?? d.cta.homeTitle}
        </h2>
        <p className="max-w-[580px] text-lg leading-relaxed text-on-dark">{text ?? d.cta.homeText}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href={whatsappHref(contactHref, d.common.whatsappMessage)} variant="aqua" icon="chat">
            {d.common.whatsapp}
          </ButtonLink>
          <ButtonLink href={anchorHref(locale, "quote")} variant="ghostLight">
            {d.cta.form}
          </ButtonLink>
        </div>
        {showContacts && (
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-6 text-[15.5px] text-on-dark-2">
            <li>
              <a href={phoneHref} className={contactLink}>
                <Icon name="phone" size={18} strokeWidth={2} className="text-aqua" />
                {site.contact.phoneDisplay}
              </a>
            </li>
            {site.contact.email && (
              <li>
                <a href={emailHref} className={contactLink}>
                  <Icon name="mail" size={18} strokeWidth={2} className="text-aqua" />
                  {site.contact.email}
                </a>
              </li>
            )}
          </ul>
        )}
      </Container>
    </section>
  );
}
