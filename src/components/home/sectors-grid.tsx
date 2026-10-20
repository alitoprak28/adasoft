import Link from "next/link";
import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorId } from "@/i18n/routes";
import { getSectors } from "@/content/sectors";

export function SectorsGrid({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).sectorsSection;
  return (
    <Section id={anchorId(locale, "sectors")} tone="navy" aria-labelledby="sektorler-title">
      <Container className="flex flex-col gap-14">
        <SectionHeading id="sektorler-title" dark eyebrow={t.eyebrow} title={t.title} intro={t.intro} />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {getSectors(locale).map((s) => (
            <li key={s.id}>
              <Link
                href={s.href}
                className="group flex h-full flex-col gap-3.5 rounded-[18px] border border-white/12 bg-white/4 p-[26px] text-white transition-[background-color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-aqua/55 hover:bg-white/8"
              >
                <span className="flex items-center justify-between">
                  <span className="flex size-[46px] items-center justify-center rounded-[13px] bg-aqua/12 text-aqua">
                    <Icon name={s.icon} size={24} />
                  </span>
                  <Icon name="arrowRight" size={18} strokeWidth={2.2} className="text-on-dark-3 transition-transform group-hover:translate-x-0.5" />
                </span>
                <h3 className="text-xl font-bold">{s.title}</h3>
                <p className="text-[15px] leading-normal text-on-dark">{s.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
