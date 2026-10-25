import type { Metadata } from "next";
import { Logo } from "@/components/brand/logo";
import { getDictionary } from "@/i18n/dictionaries";
import { homeHref } from "@/i18n/routes";
import { fontVariables } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 · AdaSoft",
  robots: { index: false },
};

// Shown for URLs that match no route in either language, so it speaks both.
export default function GlobalNotFound() {
  const tr = getDictionary("tr").notFound;
  const en = getDictionary("en").notFound;
  return (
    <html lang="tr" className={`${fontVariables} h-full`}>
      <body className="bg-deep flex min-h-full flex-col items-center justify-center gap-10 px-5 py-20 text-center">
        <a href={homeHref("tr")} aria-label="AdaSoft">
          <Logo dark />
        </a>
        <p className="font-display text-[88px] leading-none font-bold tracking-[-0.04em] text-aqua/80 sm:text-[120px]">404</p>
        <div className="flex max-w-[620px] flex-col gap-3">
          <h1 className="text-[34px] leading-tight font-bold tracking-[-0.03em] text-white sm:text-[44px]">{tr.title}</h1>
          <p lang="en" className="text-xl font-semibold text-on-dark-2">
            {en.title}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={homeHref("tr")} className="inline-flex min-h-[54px] items-center rounded-xl bg-aqua px-6 font-extrabold text-navy shadow-glow hover:bg-aqua-soft">
            {tr.cta}
          </a>
          <a
            href={homeHref("en")}
            lang="en"
            className="inline-flex min-h-[54px] items-center rounded-xl border-[1.5px] border-white/25 bg-white/5 px-6 font-bold text-white hover:border-white/60"
          >
            {en.cta}
          </a>
        </div>
      </body>
    </html>
  );
}
