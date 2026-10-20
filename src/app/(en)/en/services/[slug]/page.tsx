import { ServiceView, serviceMetadata, serviceStaticParams } from "@/views/service-view";

// Every real slug is prerendered; only unknown slugs (which 404) render on request.
export const instant = false;

export function generateStaticParams() {
  return serviceStaticParams("en");
}

export async function generateMetadata({ params }: PageProps<"/en/services/[slug]">) {
  return serviceMetadata("en", (await params).slug);
}

export default async function Page({ params }: PageProps<"/en/services/[slug]">) {
  return <ServiceView locale="en" slug={(await params).slug} />;
}
