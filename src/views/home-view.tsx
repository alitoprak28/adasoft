import type { Metadata } from "next";
import { About } from "@/components/home/about";
import { HomeHero } from "@/components/home/hero";
import { QuoteSection } from "@/components/home/quote-section";
import { SectorsGrid } from "@/components/home/sectors-grid";
import { ServicesBento } from "@/components/home/services-bento";
import { CtaBand } from "@/components/sections/cta-band";
import { ProcessSteps } from "@/components/sections/process-steps";
import { ProjectCard } from "@/components/sections/project-cards";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorId, homeHref, languageAlternates } from "@/i18n/routes";
import { getServices } from "@/content/services";
import { getSiteText, site } from "@/content/site";

export function homeMetadata(locale: Locale): Metadata {
  return {
    title: { absolute: getDictionary(locale).meta.homeTitle },
    alternates: { canonical: homeHref(locale), languages: languageAlternates({ tr: homeHref("tr"), en: homeHref("en") }) },
  };
}

export function HomeView({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const text = getSiteText(locale);
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/brand/adasoft-mark.svg`,
    description: text.description,
    telephone: site.contact.phoneDisplay,
    areaServed: locale === "tr" ? "Kuzey Kıbrıs" : "Northern Cyprus",
    knowsAbout: getServices(locale).map((s) => s.title),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <HomeHero locale={locale} />
      <ServicesBento locale={locale} />
      <SectorsGrid locale={locale} />
      <ProcessSteps id={anchorId(locale, "process")} steps={text.processSteps} eyebrow={d.process.eyebrow} title={d.process.homeTitle} />

      <Section id={anchorId(locale, "projects")} aria-labelledby="projeler-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            id="projeler-title"
            eyebrow={d.projectsSection.eyebrow}
            title={d.projectsSection.title}
            layout="stack"
            intro={d.projectsSection.intro}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {text.projects.map((p) => (
              <ProjectCard key={p.title} project={p} screenshotLabel={d.common.screenshot} visitLabel={d.common.visitSite} />
            ))}
          </div>
        </Container>
      </Section>

      <QuoteSection locale={locale} />
      <About locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
