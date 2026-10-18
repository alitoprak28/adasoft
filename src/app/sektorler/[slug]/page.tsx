import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { BookingMockup, IconTileVisual } from "@/components/sections/hero-visuals";
import { PageHero } from "@/components/sections/page-hero";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionHeading, SectionTitle } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/sections/project-cards";
import { getSector, sectors } from "@/content/sectors";
import { getService } from "@/content/services";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/sektorler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) return {};
  return {
    title: `${sector.title} için yazılım çözümleri`,
    description: sector.metaDescription,
    alternates: { canonical: `/sektorler/${sector.slug}` },
  };
}

export default async function SectorPage({ params }: PageProps<"/sektorler/[slug]">) {
  const { slug } = await params;
  const sector = getSector(slug);
  if (!sector) notFound();

  const solutions = sector.solutions.map((s) => {
    const service = getService(s.service);
    return {
      icon: s.icon,
      title: s.title,
      text: s.text,
      highlight: s.highlight,
      link: service ? { href: `/hizmetler/${service.slug}`, label: `İlgili hizmet: ${service.shortTitle ?? service.title}` } : undefined,
    };
  });

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Ana sayfa" }, { href: "/#sektorler", label: "Sektörler" }, { label: sector.title }]}
        pill="Sektör çözümleri"
        title={sector.title}
        lead={sector.lead}
        ctaLabel="İşletmeniz için teklif alın"
        trust={sector.trust}
        visual={sector.visual === "booking" ? <BookingMockup /> : <IconTileVisual icon={sector.icon} label={sector.title} />}
      />

      {sector.problems && (
        <Section aria-labelledby="sorun-title">
          <Container className="flex flex-col gap-14">
            <SectionHeading id="sorun-title" eyebrow="Sektörün sorunları" title={sector.problemsTitle ?? "Sık karşılaşılan sorunlar"} layout="stack" />
            <ol className="grid gap-5 md:grid-cols-3">
              {sector.problems.map((p, i) => (
                <li key={p.title} className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-white p-[30px]">
                  <span className="text-[15px] font-extrabold text-ocean">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-[21px] leading-[1.3] font-bold text-navy">{p.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      <Section tone="mist" aria-labelledby="cozum-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            id="cozum-title"
            eyebrow="Çözümlerimiz"
            title={`${sector.title} için uçtan uca dijital altyapı`}
            intro="İhtiyacınız olan parçayı seçin ya da hepsini birlikte kuralım; tek ekip, tek muhatap."
          />
          <FeatureGrid items={solutions} minWidth={340} />
        </Container>
      </Section>

      {sector.audience && (
        <Section aria-labelledby="kim-title">
          <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="flex flex-col gap-[18px]">
              <Eyebrow>Kimler için</Eyebrow>
              <SectionTitle id="kim-title">{sector.audience.title}</SectionTitle>
              <p className="text-[17px] leading-relaxed text-muted">{sector.audience.text}</p>
              <ul className="mt-2 flex flex-wrap gap-2.5">
                {sector.audience.items.map((a) => (
                  <li key={a} className="rounded-full border border-line bg-mist px-4 py-2.5 text-[15px] font-bold text-navy">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <ProjectCard project={{ tag: "Örnek proje", ...sector.audience.example }} />
          </Container>
        </Section>
      )}

      {sector.faq && <FaqSection title={sector.faqTitle ?? "Sık sorulan sorular"} items={sector.faq} />}

      <CtaBand
        title={sector.ctaTitle ?? "İşletmeniz için konuşalım."}
        text="İşletmenizi ziyaret edelim ya da online görüşelim; mevcut durumunuzu birlikte değerlendirip size özel bir yol haritası çıkaralım."
        showContacts={false}
      />
    </>
  );
}
