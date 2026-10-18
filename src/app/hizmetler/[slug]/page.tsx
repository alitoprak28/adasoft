import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { IconTileVisual, PhoneMockup } from "@/components/sections/hero-visuals";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps, StepList } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/sections/project-cards";
import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionHeading, SectionTitle } from "@/components/ui/section-heading";
import { getService, serviceGroups, services } from "@/content/services";
import { processSteps } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} · KKTC`,
    description: service.metaDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/hizmetler/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const group = serviceGroups.find((g) => g.id === service.group)!;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHero
        crumbs={[{ href: "/", label: "Ana sayfa" }, { href: "/#hizmetler", label: "Hizmetler" }, { label: service.title }]}
        pill={group.title}
        title={service.title}
        lead={service.lead}
        ctaLabel="Projeniz için teklif alın"
        trust={service.trust}
        visual={service.slug === "mobil-uygulama" ? <PhoneMockup /> : <IconTileVisual icon={service.icon} label={service.shortTitle ?? service.title} />}
      />

      <Section aria-labelledby="neler-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            id="neler-title"
            eyebrow="Neler yapıyoruz"
            title={service.deliverablesTitle ?? `${service.shortTitle ?? service.title} hizmetlerimiz`}
            intro="İşletmenizin neye ihtiyacı varsa onu, işinizin diliyle geliştiriyoruz."
          />
          <FeatureGrid items={service.deliverables} />
        </Container>
      </Section>

      {service.process ? (
        <Section tone="mist" aria-labelledby="surec-title">
          <Container className="grid items-start gap-14 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3.5">
                <Eyebrow>Nasıl ilerliyoruz</Eyebrow>
                <SectionTitle id="surec-title">{service.process.title}</SectionTitle>
              </div>
              <StepList steps={service.process.steps} />
            </div>
            {service.standards && (
              <div className="flex flex-col gap-[22px] rounded-3xl border border-line bg-white p-7 shadow-[0_28px_56px_-36px_rgba(4,37,84,0.35)] sm:p-9">
                <h3 className="text-2xl font-extrabold tracking-[-0.02em] text-navy">{service.standards.title}</h3>
                <ul className="grid gap-x-5 gap-y-3.5 text-[15.5px] font-semibold text-ink sm:grid-cols-2">
                  {service.standards.items.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <Icon name="check" size={20} strokeWidth={2.4} className="shrink-0 text-lagoon-ink" />
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3.5 border-t border-[#e3ecf5] pt-[22px]">
                  <p className="text-[15px] text-body">
                    Paketler <strong className="text-navy">[₺ başlangıç fiyatı]</strong>&apos;ndan başlar.
                  </p>
                  <Link href="/#teklif" className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-bold text-ocean hover:text-ocean-700">
                    Net fiyat alın
                    <Icon name="arrowRight" size={16} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </Section>
      ) : (
        <ProcessSteps steps={processSteps} title="Fikirden yayına beş adım" />
      )}

      {service.showcase && (
        <Section aria-labelledby="ornek-title">
          <Container className="flex flex-col gap-12">
            <SectionHeading id="ornek-title" eyebrow="Projeler" title={service.showcase.title} layout="stack" />
            <div className="grid gap-6 md:grid-cols-2">
              {service.showcase.items.map((p) => (
                <ProjectCard key={p.title} project={p} kind="phone" />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {service.faq && <FaqSection title="Merak edilenler" items={service.faq} />}

      <Section compact aria-labelledby="diger-title">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <h2 id="diger-title" className="text-[22px] font-extrabold tracking-[-0.01em] text-navy">
            Diğer hizmetlerimiz
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/hizmetler/${s.slug}`}
                  className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-line-2 bg-white px-4 text-[15px] font-bold text-navy transition-colors hover:border-ocean hover:bg-[#eef5fd]"
                >
                  {s.shortTitle ?? s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand
        title={service.ctaTitle ?? "Projenizi konuşalım."}
        text="Bir kahve içip konuşalım. Fikrinizi birlikte netleştirip size net bir takvim ve fiyat sunalım."
        showContacts={false}
      />
    </>
  );
}
