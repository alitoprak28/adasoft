import { LegalView, legalMetadata } from "@/views/legal-view";

export const metadata = legalMetadata("en", "privacy");

export default function Page() {
  return <LegalView locale="en" id="privacy" />;
}
