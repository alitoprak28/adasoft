import type { Metadata } from "next";
import { Logo } from "@/components/brand/logo";
import { getDictionary } from "@/i18n/dictionaries";
import { homeHref } from "@/i18n/routes";
import { jakarta } from "@/lib/fonts";
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
    <html lang="tr" className={`${jakarta.variable} h-full`}>
      <body className="dots-light flex min-h-full flex-col items-center justify-center gap-10 bg-mist px-5 py-20 text-center">
        <a href={homeHref("tr")} aria-label="AdaSoft">
          <Logo />
        </a>
        <p className="text-sm font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">404</p>
        <div className="flex max-w-[620px] flex-col gap-3">
          <h1 className="text-[34px] leading-tight font-extrabold tracking-[-0.03em] text-navy sm:text-[44px]">{tr.title}</h1>
          <p lang="en" className="text-xl font-bold text-body">
            {en.title}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={homeHref("tr")} className="inline-flex min-h-[54px] items-center rounded-[14px] bg-ocean px-6 font-bold text-white hover:bg-ocean-700">
            {tr.cta}
          </a>
          <a
            href={homeHref("en")}
            lang="en"
            className="inline-flex min-h-[54px] items-center rounded-[14px] border-[1.5px] border-line-3 px-6 font-bold text-navy hover:border-navy"
          >
            {en.cta}
          </a>
        </div>
      </body>
    </html>
  );
}
