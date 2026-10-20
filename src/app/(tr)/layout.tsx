import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell, shellMetadata } from "@/views/site-shell";
import "../globals.css";

export const metadata: Metadata = shellMetadata("tr");
export const viewport: Viewport = { themeColor: "#042554" };

export default function TurkishLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="tr">{children}</SiteShell>;
}
