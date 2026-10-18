import Link from "next/link";
import type { ReactNode } from "react";
import { ButtonLink, CheckList } from "@/components/ui/button-link";
import { whatsappHref } from "@/content/site";

type Crumb = { href?: string; label: string };

type Props = {
  crumbs: Crumb[];
  pill: string;
  title: string;
  lead: string;
  ctaLabel: string;
  trust?: string[];
  visual: ReactNode;
};

/** Top band for service and sector pages: breadcrumb, title, actions and a visual on the right. */
export function PageHero({ crumbs, pill, title, lead, ctaLabel, trust, visual }: Props) {
  return (
    <section aria-labelledby="page-title" className="dots-light bg-mist px-5 pt-8 pb-16 sm:px-8 sm:pt-10 sm:pb-24">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
        <nav aria-label="Konum" className="text-sm font-semibold text-muted">
          <ol className="flex flex-wrap items-center gap-2">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true" className="text-line-3">/</span>}
                {c.href ? (
                  <Link href={c.href} className="text-body hover:text-ocean">
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-navy">
                    {c.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col items-start gap-6">
            <p className="inline-flex items-center gap-2.5 rounded-full bg-foam px-3.5 py-2 text-sm font-bold text-lagoon-deep">
              <span className="size-2 rounded-full bg-aqua" />
              {pill}
            </p>
            <h1 id="page-title" className="text-[42px] leading-[1.06] font-extrabold tracking-[-0.035em] text-navy sm:text-[62px]">
              {title}
            </h1>
            <p className="max-w-[540px] text-[17px] leading-relaxed text-body sm:text-[19px]">{lead}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#teklif" trailingArrow>
                {ctaLabel}
              </ButtonLink>
              <ButtonLink href={whatsappHref()} variant="secondary" icon="chat">
                WhatsApp&apos;tan yazın
              </ButtonLink>
            </div>
            {trust && <CheckList items={trust} className="mt-1" />}
          </div>
          {visual}
        </div>
      </div>
    </section>
  );
}
