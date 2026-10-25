import Link from "next/link";
import { CornerArrow } from "@/components/ui/corner-arrow";
import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, anchorId } from "@/i18n/routes";
import { getServiceGroups, servicesInGroup, type Service } from "@/content/services";
import { cn } from "@/lib/cn";

const cardBase =
  "group flex flex-col gap-3.5 rounded-[20px] border border-line bg-white p-7 text-navy transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-ocean/30 hover:shadow-card";

function ServiceIcon({ service, size = 52 }: { service: Service; size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-[14px] bg-sky-soft text-ocean" style={{ width: size, height: size }}>
      <Icon name={service.icon} size={size / 2} />
    </span>
  );
}

function ServiceCard({ service, className }: { service: Service; className?: string }) {
  return (
    <Link href={service.href} className={cn(cardBase, className)}>
      <span className="mb-1 flex items-start justify-between gap-4">
        <ServiceIcon service={service} />
        <CornerArrow />
      </span>
      <h3 className="text-xl font-semibold tracking-[-0.015em]">{service.title}</h3>
      <p className="text-[15.5px] leading-relaxed text-muted">{service.summary}</p>
    </Link>
  );
}

function FeaturedCard({ service, badge }: { service: Service; badge: string }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col gap-[18px] overflow-hidden rounded-3xl bg-navy bg-[radial-gradient(90%_70%_at_100%_100%,rgba(17,215,207,0.22),transparent_70%)] p-8 text-white shadow-float transition-transform duration-200 hover:-translate-y-0.5 sm:col-span-2 sm:p-[34px] lg:col-span-1 lg:row-span-2"
    >
      <svg viewBox="0 0 200 120" aria-hidden="true" className="pointer-events-none absolute -right-2.5 -bottom-1.5 w-36 opacity-20 sm:w-44">
        <g fill="none" stroke="#11D7CF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 110V70L45 45H120" />
          <path d="M60 110V85L80 65H160L180 45" />
          <path d="M110 110V95H190" />
        </g>
        <g fill="#042554" stroke="#11D7CF" strokeWidth="2">
          <circle cx="124" cy="45" r="5" />
          <circle cx="184" cy="41" r="5" />
          <circle cx="194" cy="95" r="5" />
        </g>
      </svg>
      <span className="relative flex items-start justify-between gap-4">
        <span className="rounded-full bg-aqua/14 px-3 py-1.5 text-[13px] font-bold text-aqua-soft">{badge}</span>
        <CornerArrow light />
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-2xl bg-white/8 text-aqua ring-1 ring-white/10">
        <Icon name={service.icon} size={28} />
      </span>
      <h3 className="relative text-[30px] leading-tight font-bold tracking-[-0.025em]">{service.title}</h3>
      <p className="relative text-base leading-relaxed text-on-dark-2">{service.summary}</p>
      {service.highlights && (
        <ul className="relative mt-auto flex flex-col gap-2.5 border-t border-white/10 pt-5 text-[15.5px] font-semibold text-on-dark-2">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5">
              <Icon name="check" size={18} strokeWidth={2.4} className="text-aqua" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

function WideCard({ service }: { service: Service }) {
  return (
    <Link href={service.href} className={cn(cardBase, "bg-mist sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-7 lg:px-8")}>
      <ServiceIcon service={service} size={64} />
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-xl font-semibold tracking-[-0.015em]">{service.title}</h3>
        <p className="text-[15.5px] leading-relaxed text-muted">{service.summary}</p>
      </div>
      {service.tags && (
        <div className="flex flex-wrap gap-2">
          {service.tags.map((t) => (
            <span key={t} className="rounded-lg border border-line bg-white px-2.5 py-1 text-[13px] font-semibold text-body">
              {t}
            </span>
          ))}
        </div>
      )}
      <span className="hidden lg:block">
        <CornerArrow />
      </span>
    </Link>
  );
}

function GroupLabel({ title }: { title: string }) {
  return (
    <p className="flex items-center gap-4 text-base font-semibold text-navy">
      {title}
      <span className="h-px flex-1 bg-line" />
    </p>
  );
}

export function ServicesBento({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.servicesSection;
  const [dev, design, infra] = getServiceGroups(locale);
  const devServices = servicesInGroup(locale, dev.id);
  const featured = devServices.find((s) => s.featured);
  const wide = devServices.find((s) => s.tags && !s.featured);
  const regular = devServices.filter((s) => s !== featured && s !== wide);

  return (
    <Section id={anchorId(locale, "services")} aria-labelledby="hizmetler-title">
      <Container className="flex flex-col gap-12">
        <SectionHeading id="hizmetler-title" eyebrow={t.eyebrow} title={t.title} intro={t.intro} />

        <div className="flex flex-col gap-4">
          <GroupLabel title={dev.title} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured && <FeaturedCard service={featured} badge={d.common.featured} />}
            {regular.map((s) => (
              <ServiceCard key={s.id} service={s} />
            ))}
            {wide && <WideCard service={wide} />}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <GroupLabel title={design.title} />
            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              {servicesInGroup(locale, design.id).map((s) => (
                <ServiceCard key={s.id} service={s} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <GroupLabel title={infra.title} />
            {servicesInGroup(locale, infra.id).map((s) => (
              <ServiceCard key={s.id} service={s} className="flex-1" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border border-line bg-mist px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[22px] font-bold tracking-[-0.02em] text-navy">{t.notListedTitle}</h3>
            <p className="text-base leading-relaxed text-body">{t.notListedText}</p>
          </div>
          <ButtonLink href={anchorHref(locale, "quote")} size="md">
            {t.notListedCta}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
