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
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, homeHref, languageAlternates, serviceHref, serviceIdFromSlug, serviceSlugs } from "@/i18n/routes";
import { getService, getServiceGroups, getServices } from "@/content/services";
import { getSiteText } from "@/content/site";

export function serviceStaticParams(locale: Locale) {
  return Object.values(serviceSlugs).map((s) => ({ slug: s[locale] }));
}

export function serviceMetadata(locale: Locale, slug: string): Metadata {
  const id = serviceIdFromSlug(locale, slug);
  if (!id) return {};
  const service = getService(locale, id);
  return {
    title: getDictionary(locale).meta.serviceTitle(service.title),
    description: service.metaDescription,
    alternates: {
      canonical: service.href,
      languages: languageAlternates({ tr: serviceHref("tr", id), en: serviceHref("en", id) }),
    },
  };
}

export function ServiceView({ locale, slug }: { locale: Locale; slug: string }) {
  const id = serviceIdFromSlug(locale, slug);
  if (!id) notFound();

  const d = getDictionary(locale);
  const t = d.servicePage;
  const service = getService(locale, id);
  const group = getServiceGroups(locale).find((g) => g.id === service.group)!;
  const others = getServices(locale).filter((s) => s.id !== service.id);
  const name = service.shortTitle ?? service.title;

  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[{ href: homeHref(locale), label: d.common.home }, { href: anchorHref(locale, "services"), label: t.servicesCrumb }, { label: service.title }]}
        pill={group.title}
        title={service.title}
        lead={service.lead}
        ctaLabel={t.cta}
        trust={service.trust}
        visual={id === "mobile" ? <PhoneMockup t={d.visuals.phone} /> : <IconTileVisual icon={service.icon} label={name} />}
      />

      <Section aria-labelledby="neler-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            id="neler-title"
            eyebrow={t.deliverablesEyebrow}
            title={service.deliverablesTitle ?? t.deliverablesFallback(name)}
            intro={t.deliverablesIntro}
          />
          <FeatureGrid items={service.deliverables} />
        </Container>
      </Section>

      {service.process ? (
        <Section tone="mist" aria-labelledby="surec-title">
          <Container className="grid items-start gap-14 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-3.5">
                <Eyebrow>{t.processEyebrow}</Eyebrow>
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
                    {t.priceFrom} <strong className="text-navy">{t.pricePlaceholder}</strong>
                    {t.priceSuffix}
                  </p>
                  <Link href={anchorHref(locale, "quote")} className="inline-flex min-h-11 items-center gap-1.5 text-[15px] font-bold text-ocean hover:text-ocean-700">
                    {t.getPrice}
                    <Icon name="arrowRight" size={16} strokeWidth={2.4} />
                  </Link>
                </div>
              </div>
            )}
          </Container>
        </Section>
      ) : (
        <ProcessSteps id="surec" steps={getSiteText(locale).processSteps} eyebrow={d.process.eyebrow} title={d.process.homeTitle} />
      )}

      {service.showcase && (
        <Section aria-labelledby="ornek-title">
          <Container className="flex flex-col gap-12">
            <SectionHeading id="ornek-title" eyebrow={t.showcaseEyebrow} title={service.showcase.title} layout="stack" />
            <div className="grid gap-6 md:grid-cols-2">
              {service.showcase.items.map((p) => (
                <ProjectCard key={p.title} project={p} kind="phone" screenshotLabel={d.common.screenshot} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {service.faq && <FaqSection locale={locale} title={t.faqTitle} items={service.faq} />}

      <Section compact aria-labelledby="diger-title">
        <Container className="flex flex-wrap items-center justify-between gap-6">
          <h2 id="diger-title" className="text-[22px] font-extrabold tracking-[-0.01em] text-navy">
            {t.others}
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {others.map((s) => (
              <li key={s.id}>
                <Link
                  href={s.href}
                  className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-line-2 bg-white px-4 text-[15px] font-bold text-navy transition-colors hover:border-ocean hover:bg-[#eef5fd]"
                >
                  {s.shortTitle ?? s.title}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CtaBand locale={locale} title={service.ctaTitle ?? d.cta.serviceDefaultTitle} text={d.cta.serviceText} showContacts={false} />
    </>
  );
}
