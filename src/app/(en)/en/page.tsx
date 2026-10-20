import { HomeView, homeMetadata } from "@/views/home-view";

export const metadata = homeMetadata("en");

export default function Page() {
  return <HomeView locale="en" />;
}
