import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionTitle } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorId } from "@/i18n/routes";
import { getSiteText } from "@/content/site";

export function About({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const t = d.about;
  const { values, founders } = getSiteText(locale);
  return (
    <Section id={anchorId(locale, "about")} aria-labelledby="hakkimizda-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <SectionTitle id="hakkimizda-title">{t.title}</SectionTitle>
          <p className="text-[17px] leading-[1.7] text-body">{t.body}</p>
          <ul className="mt-2 flex flex-col gap-[18px]">
            {values.map((v) => (
              <li key={v.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-ocean">
                  <Icon name={v.icon} size={22} strokeWidth={1.9} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] font-bold text-navy">{v.title}</h3>
                  <p className="text-[15.5px] leading-normal text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:gap-5">
          {founders.map((f, i) => (
            <li key={i} className="flex flex-col gap-3 rounded-[20px] border border-line bg-white p-3 pb-4 sm:gap-4 sm:p-[18px] sm:pb-6">
              <div className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-[14px] bg-mist-2 text-[#7c93b0]">
                <Icon name="user" size={44} strokeWidth={1.4} className="sm:size-14" />
                <span className="text-sm font-semibold text-muted">{d.common.photo}</span>
              </div>
              <div className="flex flex-col gap-1 px-1 sm:px-1.5">
                <h3 className="text-base font-bold text-navy sm:text-[19px]">{f.name}</h3>
                <p className="text-[13px] leading-snug text-muted sm:text-[14.5px]">{f.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
