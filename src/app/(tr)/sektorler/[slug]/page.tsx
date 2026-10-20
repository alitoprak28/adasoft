import { SectorView, sectorMetadata, sectorStaticParams } from "@/views/sector-view";

// Every real slug is prerendered; only unknown slugs (which 404) render on request.
export const instant = false;

export function generateStaticParams() {
  return sectorStaticParams("tr");
}

export async function generateMetadata({ params }: PageProps<"/sektorler/[slug]">) {
  return sectorMetadata("tr", (await params).slug);
}

export default async function Page({ params }: PageProps<"/sektorler/[slug]">) {
  return <SectorView locale="tr" slug={(await params).slug} />;
}
