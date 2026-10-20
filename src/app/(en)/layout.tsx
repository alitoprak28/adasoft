import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteShell, shellMetadata } from "@/views/site-shell";
import "../globals.css";

export const metadata: Metadata = shellMetadata("en");
export const viewport: Viewport = { themeColor: "#042554" };

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
