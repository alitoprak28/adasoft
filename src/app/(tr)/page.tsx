import { HomeView, homeMetadata } from "@/views/home-view";

export const metadata = homeMetadata("tr");

export default function Page() {
  return <HomeView locale="tr" />;
}
