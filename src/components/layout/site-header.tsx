import { HeaderNav, type NavGroup, type NavSector } from "./header-nav";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref, homeHref } from "@/i18n/routes";
import { getServiceGroups, servicesInGroup } from "@/content/services";
import { getSectors } from "@/content/sectors";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;
  const groups: NavGroup[] = getServiceGroups(locale).map((g) => ({
    title: g.title,
    // Featured services sit last in their column, as in the design.
    items: servicesInGroup(locale, g.id)
      .toSorted((a, b) => Number(a.featured) - Number(b.featured))
      .map((s) => ({ href: s.href, title: s.shortTitle ?? s.title, line: s.menuLine, icon: s.icon, featured: s.featured })),
  }));
  const sectors: NavSector[] = getSectors(locale).map((s) => ({ href: s.href, title: s.title, line: s.menuLine }));

  return (
    <HeaderNav
      locale={locale}
      t={t}
      homeHref={homeHref(locale)}
      links={{ projects: anchorHref(locale, "projects"), about: anchorHref(locale, "about"), quote: anchorHref(locale, "quote") }}
      groups={groups}
      sectors={sectors}
    />
  );
}
