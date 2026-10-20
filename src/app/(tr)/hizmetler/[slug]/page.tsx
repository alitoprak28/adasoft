import { ServiceView, serviceMetadata, serviceStaticParams } from "@/views/service-view";

// Every real slug is prerendered; only unknown slugs (which 404) render on request.
export const instant = false;

export function generateStaticParams() {
  return serviceStaticParams("tr");
}

export async function generateMetadata({ params }: PageProps<"/hizmetler/[slug]">) {
  return serviceMetadata("tr", (await params).slug);
}

export default async function Page({ params }: PageProps<"/hizmetler/[slug]">) {
  return <ServiceView locale="tr" slug={(await params).slug} />;
}
