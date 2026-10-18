import { IslandWatermark } from "@/components/brand/hero-map";
import { ButtonLink } from "@/components/ui/button-link";
import { Icon } from "@/components/ui/icon";
import { Container } from "@/components/ui/layout";
import { site, whatsappHref } from "@/content/site";

type Props = {
  title?: string;
  text?: string;
  showContacts?: boolean;
};

export function CtaBand({
  title = "Bir kahve içip projenizi konuşalım.",
  text = "Lefkoşa, Girne, Gazimağusa ya da online. Size en uygun yerde buluşalım.",
  showContacts = true,
}: Props) {
  return (
    <section id="iletisim" aria-labelledby="iletisim-title" className="relative scroll-mt-4 overflow-hidden bg-navy px-5 py-20 sm:px-8 sm:py-26">
      <IslandWatermark className="pointer-events-none absolute top-1/2 -right-15 hidden w-[640px] -translate-y-1/2 opacity-10 lg:block" />
      <Container className="relative flex flex-col items-start gap-6">
        <h2 id="iletisim-title" className="max-w-[720px] text-[34px] leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-[50px]">
          {title}
        </h2>
        <p className="max-w-[580px] text-lg leading-relaxed text-on-dark">{text}</p>
        <div className="mt-2 flex flex-wrap gap-3">
          <ButtonLink href={whatsappHref()} variant="aqua" icon="chat">
            WhatsApp&apos;tan yazın
          </ButtonLink>
          <ButtonLink href="/#teklif" variant="ghostLight">
            Teklif formunu doldurun
          </ButtonLink>
        </div>
        {showContacts && (
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-3 text-[15.5px] text-on-dark-2">
            <li className="flex items-center gap-2.5">
              <Icon name="phone" size={18} strokeWidth={2} className="text-aqua" />
              {site.contact.phoneDisplay}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="mail" size={18} strokeWidth={2} className="text-aqua" />
              {site.contact.email}
            </li>
            <li className="flex items-center gap-2.5">
              <Icon name="pin" size={18} strokeWidth={2} className="text-aqua" />
              {site.contact.address}
            </li>
          </ul>
        )}
      </Container>
    </section>
  );
}
