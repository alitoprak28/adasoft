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
      className="relative scroll-mt-4 overflow-hidden bg-navy px-5 py-20 sm:px-8 sm:py-26"
    >
      <IslandWatermark className="pointer-events-none absolute top-1/2 -right-15 hidden w-[640px] -translate-y-1/2 opacity-10 lg:block" />
      <Container className="relative flex flex-col items-start gap-6">
        <h2 id="iletisim-title" className="max-w-[720px] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-[50px]">
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
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-[15.5px] text-on-dark-2">
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
