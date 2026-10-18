import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

export function Container({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1200px]", className)} {...rest} />;
}

const tones = {
  white: "bg-white",
  mist: "bg-mist",
  navy: "bg-navy",
} as const;

type SectionProps = ComponentProps<"section"> & { tone?: keyof typeof tones; compact?: boolean };

/** Full-width page band with the site's standard vertical rhythm. */
export function Section({ tone = "white", compact = false, className, ...rest }: SectionProps) {
  return (
    <section
      className={cn(
        tones[tone],
        "scroll-mt-4 px-5 sm:px-8",
        compact ? "py-14 sm:py-18" : "py-18 sm:py-28",
        className,
      )}
      {...rest}
    />
  );
}
