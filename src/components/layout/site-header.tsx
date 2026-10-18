import { HeaderNav, type NavGroup, type NavSector } from "./header-nav";
import { serviceGroups, servicesInGroup } from "@/content/services";
import { sectors } from "@/content/sectors";

export function SiteHeader() {
  const groups: NavGroup[] = serviceGroups.map((g) => ({
    title: g.title,
    // Featured services sit last in their column, as in the design.
    items: servicesInGroup(g.id)
      .toSorted((a, b) => Number(!!a.featured) - Number(!!b.featured))
      .map((s) => ({
        href: `/hizmetler/${s.slug}`,
        title: s.shortTitle ?? s.title,
        line: s.menuLine,
        icon: s.icon,
        featured: !!s.featured,
      })),
  }));
  const sectorLinks: NavSector[] = sectors.map((s) => ({ href: `/sektorler/${s.slug}`, title: s.title, line: s.menuLine }));

  return <HeaderNav groups={groups} sectors={sectorLinks} />;
}
