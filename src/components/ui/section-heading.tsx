import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** "split" puts the intro on the right on wide screens. */
  layout?: "stack" | "split" | "center";
  dark?: boolean;
  aside?: ReactNode;
};

/** The circuit end from the logo: a short trace that stops in a ring. */
export function TraceMark({ className }: { className?: string }) {
  return (
    <svg width="24" height="10" viewBox="0 0 24 10" aria-hidden="true" className={cn("shrink-0", className)}>
      <path d="M1 5H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="19" cy="5" r="3.3" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={cn("flex items-center gap-2.5 text-[15px] font-semibold", dark ? "text-aqua" : "text-lagoon-ink")}>
      <TraceMark />
      {children}
    </p>
  );
}

export function SectionTitle({ id, children, dark = false, className }: { id?: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[33px] leading-[1.08] font-bold tracking-[-0.025em] sm:text-[48px]",
        dark ? "text-white" : "text-navy",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionHeading({ id, eyebrow, title, intro, layout = "split", dark = false, aside }: Props) {
  const introEl = intro ? (
    <p className={cn("text-[17px] leading-relaxed", dark ? "text-on-dark" : "text-muted", layout === "split" && "max-w-[420px]")}>
      {intro}
    </p>
  ) : null;

  if (layout === "center") {
    return (
      <div className="flex flex-col items-center gap-3.5 text-center">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <SectionTitle id={id} dark={dark}>
          {title}
        </SectionTitle>
        {introEl}
      </div>
    );
  }

  if (layout === "stack") {
    return (
      <div className="flex max-w-[680px] flex-col gap-3.5">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <SectionTitle id={id} dark={dark}>
          {title}
        </SectionTitle>
        {introEl}
        {aside}
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="flex max-w-[680px] flex-col gap-3.5">
        <Eyebrow dark={dark}>{eyebrow}</Eyebrow>
        <SectionTitle id={id} dark={dark}>
          {title}
        </SectionTitle>
      </div>
      {introEl}
      {aside}
    </div>
  );
}
