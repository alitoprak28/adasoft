import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, homeHref } from "@/i18n/routes";
import { getServices } from "@/content/services";
import { site } from "@/content/site";

const linkClass = "text-on-dark transition-colors hover:text-white";

export function SiteFooter({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  const company = [
    { href: anchorHref(locale, "about"), label: d.nav.about },
    { href: anchorHref(locale, "sectors"), label: d.nav.sectors },
    { href: anchorHref(locale, "projects"), label: d.nav.projects },
    { href: anchorHref(locale, "quote"), label: d.nav.quote },
  ];

  return (
    <footer className="bg-navy-950 px-5 pt-18 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col gap-[18px]">
            <Link href={homeHref(locale)} aria-label={d.nav.homeLabel} className="self-start">
              <Logo dark />
            </Link>
            <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-on-dark-3">
              <span className="h-px w-[18px] bg-aqua" />
              {site.tagline}
              <span className="h-px w-[18px] bg-aqua" />
            </p>
            <p className="max-w-[320px] text-[15px] leading-relaxed text-on-dark">{d.footer.blurb}</p>
          </div>

          <nav aria-label={d.footer.services} className="flex flex-col gap-3 text-[15px]">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">{d.footer.services}</h2>
            {getServices(locale).map((s) => (
              <Link key={s.id} href={s.href} className={linkClass}>
                {s.shortTitle ?? s.title}
              </Link>
            ))}
          </nav>

          <nav aria-label={d.footer.company} className="flex flex-col gap-3 text-[15px]">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">{d.footer.company}</h2>
            {company.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-[15px] text-on-dark">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">{d.footer.contact}</h2>
            <span>{site.contact.phoneDisplay}</span>
            <span>{site.contact.email}</span>
            <span>{site.contact.address[locale]}</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-sm text-on-dark-3">
          {/* Static year on purpose: the page is prerendered once at build time. */}
          <span>{d.footer.rights}</span>
          <span>{d.footer.legal}</span>
        </div>
      </div>
    </footer>
  );
}
