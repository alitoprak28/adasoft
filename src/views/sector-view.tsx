import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq";
import { FeatureGrid } from "@/components/sections/feature-grid";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectCard } from "@/components/sections/project-cards";
import { Container, Section } from "@/components/ui/layout";
import { SectorVisual } from "@/components/visuals/sector-visuals";
import { Eyebrow, SectionHeading, SectionTitle } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, homeHref, languageAlternates, sectorHref, sectorIdFromSlug, sectorSlugs } from "@/i18n/routes";
import { getSector } from "@/content/sectors";
import { getService } from "@/content/services";

export function sectorStaticParams(locale: Locale) {
  return Object.values(sectorSlugs).map((s) => ({ slug: s[locale] }));
}

export function sectorMetadata(locale: Locale, slug: string): Metadata {
  const id = sectorIdFromSlug(locale, slug);
  if (!id) return {};
  const sector = getSector(locale, id);
  return {
    title: getDictionary(locale).meta.sectorTitle(sector.title),
    description: sector.metaDescription,
    alternates: {
      canonical: sector.href,
      languages: languageAlternates({ tr: sectorHref("tr", id), en: sectorHref("en", id) }),
    },
  };
}

export function SectorView({ locale, slug }: { locale: Locale; slug: string }) {
  const id = sectorIdFromSlug(locale, slug);
  if (!id) notFound();

  const d = getDictionary(locale);
  const t = d.sectorPage;
  const sector = getSector(locale, id);
  const solutions = sector.solutions.map((s) => {
    const service = getService(locale, s.service);
    return {
      icon: s.icon,
      title: s.title,
      text: s.text,
      highlight: s.highlight,
      link: { href: service.href, label: t.related(service.shortTitle ?? service.title) },
    };
  });

  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[{ href: homeHref(locale), label: d.common.home }, { href: anchorHref(locale, "sectors"), label: t.sectorsCrumb }, { label: sector.title }]}
        pill={t.pill}
        title={sector.title}
        lead={sector.lead}
        ctaLabel={t.cta}
        trust={sector.trust}
        visual={<SectorVisual id={id} locale={locale} />}
      />

      {sector.problems && (
        <Section aria-labelledby="sorun-title">
          <Container className="flex flex-col gap-14">
            <SectionHeading id="sorun-title" eyebrow={t.problemsEyebrow} title={sector.problemsTitle ?? t.problemsFallback} layout="stack" />
            <ol className="grid gap-5 md:grid-cols-3">
              {sector.problems.map((p, i) => (
                <li key={p.title} className="flex flex-col gap-3.5 rounded-[20px] border border-line bg-white p-[30px]">
                  <span className="flex size-10 items-center justify-center rounded-full bg-sky-soft font-display text-[15px] font-bold text-ocean">{i + 1}</span>
                  <h3 className="text-xl leading-[1.3] font-semibold text-navy">{p.title}</h3>
                  <p className="text-[15.5px] leading-relaxed text-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </Container>
        </Section>
      )}

      <Section tone="mist" aria-labelledby="cozum-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading id="cozum-title" eyebrow={t.solutionsEyebrow} title={t.solutionsTitle(sector.title)} intro={t.solutionsIntro} />
          <FeatureGrid items={solutions} minWidth={340} />
        </Container>
      </Section>

      {sector.audience && (
        <Section aria-labelledby="kim-title">
          <Container className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
            <div className="flex flex-col gap-[18px]">
              <Eyebrow>{t.audienceEyebrow}</Eyebrow>
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
            <ProjectCard project={{ tag: t.example, ...sector.audience.example }} screenshotLabel={d.common.screenshot} />
          </Container>
        </Section>
      )}

      {sector.faq && <FaqSection locale={locale} title={sector.faqTitle ?? t.faqFallback} items={sector.faq} />}

      <CtaBand locale={locale} title={sector.ctaTitle ?? d.cta.sectorDefaultTitle} text={d.cta.sectorText} showContacts={false} />
    </>
  );
}
