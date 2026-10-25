import { LegalView, legalMetadata } from "@/views/legal-view";

export const metadata = legalMetadata("tr", "dataProtection");

export default function Page() {
  return <LegalView locale="tr" id="dataProtection" />;
}
