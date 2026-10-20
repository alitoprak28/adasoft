import { SectorView, sectorMetadata, sectorStaticParams } from "@/views/sector-view";

// Every real slug is prerendered; only unknown slugs (which 404) render on request.
export const instant = false;

export function generateStaticParams() {
  return sectorStaticParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/industries/[slug]">) {
  return sectorMetadata("en", (await params).slug);
}

export default async function Page({ params }: PageProps<"/en/industries/[slug]">) {
  return <SectorView locale="en" slug={(await params).slug} />;
}
