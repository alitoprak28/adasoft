import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, CheckList } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/section-heading";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref } from "@/i18n/routes";
import { whatsappHref } from "@/content/site";
import { cn } from "@/lib/cn";

type Crumb = { href?: string; label: string };

type Props = {
  locale: Locale;
  crumbs: Crumb[];
  pill: string;
  title: string;
  lead: string;
  ctaLabel: string;
  trust?: string[];
  visual: ReactNode;
};

const delay = (s: number) => ({ animationDelay: `${s}s` });

/** Top band for service and sector pages: breadcrumb, title, actions and a visual on the right. */
export function PageHero({ locale, crumbs, pill, title, lead, ctaLabel, trust, visual }: Props) {
  const d = getDictionary(locale);
  return (
    <section aria-labelledby="page-title" className="bg-deep relative overflow-hidden px-5 pt-8 pb-18 sm:px-8 sm:pt-10 sm:pb-26">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 sm:gap-12">
        <nav aria-label={d.common.breadcrumb} className="text-sm font-semibold text-on-dark-3">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className={cn("flex items-center gap-2", !c.href && "max-sm:hidden")}>
                {i > 0 && (
                  <span aria-hidden="true" className="text-white/25">
                    /
                  </span>
                )}
                {c.href ? (
                  <Link href={c.href} className="-my-3 inline-flex min-h-11 items-center text-on-dark-2 hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-white">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <div className="rise" style={delay(0)}>
              <Eyebrow dark>{pill}</Eyebrow>
            </div>
            <h1
              id="page-title"
              className="rise text-[42px] leading-[1.02] font-bold tracking-[-0.03em] text-white sm:text-[64px]"
              style={delay(0.08)}
            >
              {title}
            </h1>
            <p className="rise max-w-[540px] text-[17px] leading-relaxed text-on-dark-2 sm:text-[19px]" style={delay(0.16)}>
              {lead}
            </p>
            <div className="rise flex flex-wrap gap-3" style={delay(0.24)}>
              <ButtonLink href={anchorHref(locale, "quote")} variant="aqua">
                {ctaLabel}
              </ButtonLink>
              <ButtonLink href={whatsappHref(anchorHref(locale, "contact"), d.common.whatsappMessage)} variant="ghostLight" icon="chat">
                {d.common.whatsapp}
              </ButtonLink>
            </div>
            {trust && (
              <div className="rise w-full max-w-[540px] border-t border-white/10 pt-6" style={delay(0.32)}>
                <CheckList items={trust} dark />
              </div>
            )}
          </div>
          <div className="map-in" style={delay(0.2)}>
            {visual}
          </div>
        </div>
      </div>
    </section>
  );
}
