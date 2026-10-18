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

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={cn("text-sm font-extrabold uppercase tracking-[0.12em]", dark ? "text-aqua" : "text-lagoon-ink")}>
      {children}
    </p>
  );
}

export function SectionTitle({ id, children, dark = false, className }: { id?: string; children: ReactNode; dark?: boolean; className?: string }) {
  return (
    <h2
      id={id}
      className={cn(
        "text-[32px] leading-[1.12] font-extrabold tracking-[-0.03em] sm:text-[46px]",
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
