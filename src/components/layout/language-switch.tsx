"use client";

import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { locales, localeLabels, type Locale } from "@/i18n/config";
import { alternateHref, homeHref } from "@/i18n/routes";
import { cn } from "@/lib/cn";

type Props = { locale: Locale; label: string; className?: string };

function Links({ locale, label, className, hrefFor }: Props & { hrefFor: (l: Locale) => string }) {
  return (
    <nav aria-label={label} className={cn("flex rounded-[10px] border border-line-2 p-[3px]", className)}>
      {locales.map((l) => (
        <a
          key={l}
          href={hrefFor(l)}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className={cn(
            "inline-flex min-h-9 min-w-10 items-center justify-center rounded-lg px-2 text-[13px] font-bold transition-colors",
            l === locale ? "bg-navy text-white" : "text-body hover:text-navy",
          )}
        >
          {localeLabels[l]}
        </a>
      ))}
    </nav>
  );
}

function PathAwareLinks(props: Props) {
  const pathname = usePathname();
  return <Links {...props} hrefFor={(l) => alternateHref(pathname, l)} />;
}

/** TR/EN toggle that keeps the visitor on the same page in the other language. */
export function LanguageSwitch(props: Props) {
  // Pages rendered for unknown slugs can't resolve the pathname while prerendering;
  // the fallback links to each language's homepage instead.
  return (
    <Suspense fallback={<Links {...props} hrefFor={homeHref} />}>
      <PathAwareLinks {...props} />
    </Suspense>
  );
}
