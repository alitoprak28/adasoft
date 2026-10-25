import { LegalView, legalMetadata } from "@/views/legal-view";

export const metadata = legalMetadata("en", "dataProtection");

export default function Page() {
  return <LegalView locale="en" id="dataProtection" />;
}
