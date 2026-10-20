import Link from "next/link";
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
  "group flex flex-col gap-3.5 rounded-[20px] border border-line bg-white p-7 text-navy transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#9cc3ea] hover:shadow-[0_18px_36px_-22px_rgba(4,37,84,0.35)]";

function Details({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <span className={cn("mt-auto inline-flex items-center gap-1.5 text-[15px] font-bold", light ? "text-aqua" : "text-ocean")}>
      {label}
      <Icon name="arrowRight" size={16} strokeWidth={2.4} className="transition-transform group-hover:translate-x-0.5" />
    </span>
  );
}

function ServiceIcon({ service, size = 52 }: { service: Service; size?: number }) {
  return (
    <span className="flex shrink-0 items-center justify-center rounded-[14px] bg-sky-soft text-ocean" style={{ width: size, height: size }}>
      <Icon name={service.icon} size={size / 2} />
    </span>
  );
}

function ServiceCard({ service, details, className }: { service: Service; details: string; className?: string }) {
  return (
    <Link href={service.href} className={cn(cardBase, className)}>
      <ServiceIcon service={service} />
      <h3 className="text-[21px] font-bold tracking-[-0.01em]">{service.title}</h3>
      <p className="text-[15.5px] leading-relaxed text-muted">{service.summary}</p>
      <Details label={details} />
    </Link>
  );
}

function FeaturedCard({ service, details, badge }: { service: Service; details: string; badge: string }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col gap-[18px] overflow-hidden rounded-3xl bg-navy p-8 text-white transition-transform duration-200 hover:-translate-y-0.5 sm:col-span-2 sm:p-[34px] lg:col-span-1 lg:row-span-2"
    >
      <span className="self-start rounded-full bg-aqua/14 px-3 py-1.5 text-[13px] font-bold text-aqua-soft">{badge}</span>
      <span className="flex size-14 items-center justify-center rounded-2xl bg-white/8 text-aqua">
        <Icon name={service.icon} size={28} />
      </span>
      <h3 className="text-[28px] leading-tight font-extrabold tracking-[-0.02em]">{service.title}</h3>
      <p className="text-base leading-relaxed text-on-dark-2">{service.summary}</p>
      {service.highlights && (
        <ul className="flex flex-col gap-2.5 text-[15.5px] font-semibold text-[#e6eef8]">
          {service.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2.5">
              <Icon name="check" size={18} strokeWidth={2.4} className="text-aqua" />
              {h}
            </li>
          ))}
        </ul>
      )}
      <span className="relative z-10 mt-auto">
        <Details label={details} light />
      </span>
      <svg viewBox="0 0 200 120" aria-hidden="true" className="pointer-events-none absolute -right-2.5 -bottom-1.5 w-60 opacity-35">
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
    </Link>
  );
}

function WideCard({ service, details }: { service: Service; details: string }) {
  return (
    <Link href={service.href} className={cn(cardBase, "bg-[#f7fafd] sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-center lg:gap-7 lg:px-8")}>
      <ServiceIcon service={service} size={64} />
      <div className="flex flex-1 flex-col gap-2">
        <h3 className="text-[21px] font-bold tracking-[-0.01em]">{service.title}</h3>
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
      <span className="lg:whitespace-nowrap">
        <Details label={details} />
      </span>
    </Link>
  );
}

function GroupLabel({ index, title }: { index: number; title: string }) {
  return (
    <p className="flex items-center gap-3 text-[13px] font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">
      <span className="text-[#8da3be]">{String(index).padStart(2, "0")}</span>
      {title}
      <span className="h-px flex-1 bg-line" />
    </p>
  );
}

export function ServicesBento({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.servicesSection;
  const details = d.common.details;
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
          <GroupLabel index={1} title={dev.title} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured && <FeaturedCard service={featured} details={details} badge={d.common.featured} />}
            {regular.map((s) => (
              <ServiceCard key={s.id} service={s} details={details} />
            ))}
            {wide && <WideCard service={wide} details={details} />}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <div className="flex flex-col gap-4 lg:col-span-2">
            <GroupLabel index={2} title={design.title} />
            <div className="grid flex-1 gap-5 sm:grid-cols-2">
              {servicesInGroup(locale, design.id).map((s) => (
                <ServiceCard key={s.id} service={s} details={details} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <GroupLabel index={3} title={infra.title} />
            {servicesInGroup(locale, infra.id).map((s) => (
              <ServiceCard key={s.id} service={s} details={details} className="flex-1" />
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[20px] border-[1.5px] border-dashed border-[#9cc3ea] bg-mist px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[21px] font-extrabold tracking-[-0.01em] text-navy">{t.notListedTitle}</h3>
            <p className="text-base leading-relaxed text-body">{t.notListedText}</p>
          </div>
          <ButtonLink href={anchorHref(locale, "quote")} size="md" trailingArrow>
            {t.notListedCta}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
