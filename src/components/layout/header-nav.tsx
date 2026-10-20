"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Logo } from "@/components/brand/logo";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { LanguageSwitch } from "./language-switch";

export type NavItem = { href: string; title: string; line: string; icon: IconName; featured: boolean };
export type NavGroup = { title: string; items: NavItem[] };
export type NavSector = { href: string; title: string; line: string };

type Panel = "svc" | "sec" | null;

const navLink = "inline-flex min-h-11 items-center rounded-[10px] px-3.5 text-[15.5px] font-semibold text-ink transition-colors hover:text-ocean";

type Props = {
  locale: Locale;
  t: Dictionary["nav"];
  homeHref: string;
  links: { projects: string; about: string; quote: string };
  groups: NavGroup[];
  sectors: NavSector[];
};

export function HeaderNav({ locale, t, homeHref, links, groups, sectors }: Props) {
  const [panel, setPanel] = useState<Panel>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!panel && !mobileOpen) return;
    const close = () => {
      setPanel(null);
      setMobileOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointer = (e: PointerEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [panel, mobileOpen]);

  const closeAll = () => {
    setPanel(null);
    setMobileOpen(false);
  };
  const toggle = (p: Exclude<Panel, null>) => {
    setMobileOpen(false);
    setPanel((cur) => (cur === p ? null : p));
  };
  const [development, ...restGroups] = groups;

  return (
    <header ref={rootRef} className="dots-light relative z-40 border-b border-navy/8 bg-mist">
      <div className="mx-auto flex max-w-[1264px] items-center justify-between gap-6 px-5 py-3.5 sm:px-8 sm:py-[18px]">
        <Link href={homeHref} aria-label={t.homeLabel} onClick={closeAll}>
          <Logo />
        </Link>

        <nav aria-label={t.mainMenu} className="hidden items-center gap-1.5 lg:flex">
          <PanelButton label={t.services} open={panel === "svc"} onClick={() => toggle("svc")} />
          <PanelButton label={t.sectors} open={panel === "sec"} onClick={() => toggle("sec")} />
          <Link href={links.projects} className={navLink} onClick={closeAll}>
            {t.projects}
          </Link>
          <Link href={links.about} className={navLink} onClick={closeAll}>
            {t.about}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitch locale={locale} label={t.language} className="hidden sm:flex" />
          <Link
            href={links.quote}
            onClick={closeAll}
            className="hidden min-h-11 items-center rounded-xl bg-ocean px-5 text-[15px] font-bold text-white transition-colors hover:bg-ocean-700 sm:inline-flex"
          >
            {t.quote}
          </Link>
          <button
            type="button"
            aria-label={mobileOpen ? t.closeMenu : t.openMenu}
            aria-expanded={mobileOpen}
            aria-controls="mobil-menu"
            onClick={() => {
              setPanel(null);
              setMobileOpen((v) => !v);
            }}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-line-2 bg-white text-navy lg:hidden"
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={22} strokeWidth={2} />
          </button>
        </div>
      </div>

      {panel === "svc" && (
        <div className="absolute inset-x-0 top-full z-50 hidden px-8 lg:block">
          <div className="mx-auto mt-2.5 grid max-w-[1200px] grid-cols-[1.75fr_1fr_0.95fr] gap-7 rounded-[22px] border border-line bg-white p-7 shadow-[0_32px_64px_-32px_rgba(4,37,84,0.5)]">
            <div className="flex flex-col gap-1.5">
              <MenuLabel>{development.title}</MenuLabel>
              <div className="grid grid-cols-2 gap-1">
                {development.items.map((item) => (
                  <MenuItem key={item.href} item={item} onNavigate={closeAll} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {restGroups.map((g, i) => (
                <div key={g.title} className={cn("flex flex-col gap-1.5", i > 0 && "pt-3.5")}>
                  <MenuLabel>{g.title}</MenuLabel>
                  {g.items.map((item) => (
                    <MenuItem key={item.href} item={item} onNavigate={closeAll} />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3.5 rounded-2xl bg-navy p-6 text-white">
              <p className="text-xs font-extrabold tracking-[0.12em] text-aqua uppercase">{t.notListedEyebrow}</p>
              <p className="text-[19px] leading-snug font-bold">{t.notListedTitle}</p>
              <p className="text-sm leading-relaxed text-on-dark">{t.notListedText}</p>
              <Link
                href={links.quote}
                onClick={closeAll}
                className="mt-auto inline-flex min-h-11 items-center gap-2 self-start rounded-xl bg-aqua px-[18px] text-[15px] font-extrabold text-navy transition-colors hover:bg-aqua-soft"
              >
                {t.quote}
                <Icon name="arrowRight" size={16} strokeWidth={2.4} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {panel === "sec" && (
        <div className="absolute inset-x-0 top-full z-50 hidden px-8 lg:block">
          <ul className="mx-auto mt-2.5 grid max-w-[1200px] grid-cols-3 gap-1 rounded-[22px] border border-line bg-white p-[22px] shadow-[0_32px_64px_-32px_rgba(4,37,84,0.5)]">
            {sectors.map((s) => (
              <li key={s.href}>
                <Link href={s.href} onClick={closeAll} className="flex flex-col gap-0.5 rounded-xl px-3.5 py-3 text-navy transition-colors hover:bg-mist">
                  <span className="text-[15px] font-bold">{s.title}</span>
                  <span className="text-[13px] font-medium text-muted">{s.line}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {mobileOpen && (
        <nav
          id="mobil-menu"
          aria-label={t.mobileMenu}
          className="mx-5 mb-4 flex flex-col rounded-2xl border border-line bg-white p-2 text-[17px] font-semibold text-navy shadow-[0_18px_36px_-24px_rgba(4,37,84,0.45)] sm:mx-8 lg:hidden"
        >
          <MobileGroup title={t.services}>
            {groups.flatMap((g) => g.items).map((item) => (
              <Link key={item.href} href={item.href} onClick={closeAll} className="flex min-h-11 items-center gap-3 rounded-lg px-3.5 text-[15.5px] hover:bg-mist">
                <Icon name={item.icon} size={18} className="text-ocean" />
                {item.title}
              </Link>
            ))}
          </MobileGroup>
          <MobileGroup title={t.sectors}>
            {sectors.map((s) => (
              <Link key={s.href} href={s.href} onClick={closeAll} className="flex min-h-11 items-center rounded-lg px-3.5 text-[15.5px] hover:bg-mist">
                {s.title}
              </Link>
            ))}
          </MobileGroup>
          <Link href={links.projects} onClick={closeAll} className="flex min-h-12 items-center rounded-lg px-3.5 hover:bg-mist">
            {t.projects}
          </Link>
          <Link href={links.about} onClick={closeAll} className="flex min-h-12 items-center rounded-lg px-3.5 hover:bg-mist">
            {t.about}
          </Link>
          <Link href={links.quote} onClick={closeAll} className="flex min-h-12 items-center rounded-lg px-3.5 font-extrabold text-ocean hover:bg-mist">
            {t.quote}
          </Link>
          <div className="mt-1.5 border-t border-[#e3ecf5] px-3.5 pt-3 pb-1.5">
            <LanguageSwitch locale={locale} label={t.language} className="inline-flex" />
          </div>
        </nav>
      )}
    </header>
  );
}

function PanelButton({ label, open, onClick }: { label: string; open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={onClick}
      className={cn(navLink, "gap-1.5", open ? "bg-navy/7 font-bold text-navy" : "")}
    >
      {label}
      <Icon name="chevronDown" size={14} strokeWidth={2.4} className={cn("transition-transform", open && "rotate-180")} />
    </button>
  );
}

function MenuLabel({ children }: { children: ReactNode }) {
  return <p className="px-2.5 pb-1.5 text-xs font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">{children}</p>;
}

function MenuItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  return (
    <Link href={item.href} onClick={onNavigate} className="flex items-start gap-3 rounded-xl p-2.5 text-navy transition-colors hover:bg-mist">
      <span
        className={cn(
          "flex size-[38px] shrink-0 items-center justify-center rounded-[10px]",
          item.featured ? "bg-navy text-aqua" : "bg-sky-soft text-ocean",
        )}
      >
        <Icon name={item.icon} size={20} strokeWidth={1.9} />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-[15px] font-bold">{item.title}</span>
        <span className="text-[13px] font-medium text-muted">{item.line}</span>
      </span>
    </Link>
  );
}

function MobileGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <details className="faq group">
      <summary className="flex min-h-12 cursor-pointer items-center justify-between rounded-lg px-3.5 hover:bg-mist">
        {title}
        <Icon name="chevronDown" size={18} strokeWidth={2.2} className="faq-chev text-ocean" />
      </summary>
      <div className="flex flex-col pb-2 pl-2">{children}</div>
    </details>
  );
}
