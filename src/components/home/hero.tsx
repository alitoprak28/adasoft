import { HeroMap } from "@/components/brand/hero-map";
import { ButtonLink, CheckList } from "@/components/ui/button-link";
import { trustPoints, whatsappHref } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="dots-light bg-mist px-5 pt-6 pb-16 sm:px-8 sm:pt-14 sm:pb-28">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:gap-14">
        <div className="flex flex-col items-start gap-6 sm:gap-7">
          <p className="inline-flex items-center gap-2.5 rounded-full bg-foam px-3.5 py-2 text-sm font-bold text-lagoon-deep">
            <span className="size-2 rounded-full bg-aqua" />
            KKTC · Yazılımın her alanında
          </p>
          <h1 id="hero-title" className="text-[42px] leading-[1.04] font-extrabold tracking-[-0.035em] text-navy sm:text-[68px]">
            Adanın
            <br />
            <span className="text-ocean">yazılım ortağı.</span>
          </h1>
          <p className="max-w-[540px] text-[17px] leading-relaxed text-body sm:text-[19px]">
            Web, mobil, oyun, yapay zekâ ve işinize özel yazılımlar. Kuzey Kıbrıs&apos;ta fikirden yayına kadar yanınızdayız.
          </p>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href="/#teklif" trailingArrow>
              Ücretsiz teklif al
            </ButtonLink>
            <ButtonLink href={whatsappHref()} variant="secondary" icon="chat">
              WhatsApp&apos;tan yazın
            </ButtonLink>
          </div>
          <CheckList items={trustPoints} className="mt-1" />
        </div>
        <HeroMap />
      </div>
    </section>
  );
}
