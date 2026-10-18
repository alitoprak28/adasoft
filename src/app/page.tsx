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
import { processSteps, projects, site } from "@/content/site";
import { services } from "@/content/services";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/adasoft-mark.svg`,
  description: site.description,
  areaServed: "Kuzey Kıbrıs",
  knowsAbout: services.map((s) => s.title),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <HomeHero />
      <ServicesBento />
      <SectorsGrid />
      <ProcessSteps steps={processSteps} title="Fikirden yayına beş adım" />

      <Section id="projeler" aria-labelledby="projeler-title">
        <Container className="flex flex-col gap-14">
          <SectionHeading
            id="projeler-title"
            eyebrow="Projeler"
            title="Son işlerimiz"
            layout="stack"
            intro="Her projede aynı soruyu soruyoruz: işinize ne kazandırdı?"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Container>
      </Section>

      <QuoteSection />
      <About />
      <CtaBand />
    </>
  );
}
