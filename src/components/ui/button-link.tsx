import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./icon";

const variants = {
  primary: "bg-ocean text-white hover:bg-ocean-700",
  secondary: "border-[1.5px] border-line-3 text-navy hover:border-navy",
  aqua: "bg-aqua text-navy font-extrabold hover:bg-aqua-soft",
  ghostLight: "border-[1.5px] border-white/50 text-white hover:border-white",
} as const;

type Props = {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: "md" | "lg";
  icon?: IconName;
  trailingArrow?: boolean;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", size = "lg", icon, trailingArrow, className }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2.5 rounded-[14px] text-center font-bold transition-[background-color,border-color,transform] duration-150 hover:-translate-y-px",
    size === "lg" ? "min-h-[54px] px-5 text-base sm:px-6 sm:text-[16.5px]" : "min-h-12 rounded-xl px-5 text-base",
    variants[variant],
    className,
  );
  const content = (
    <>
      {icon && <Icon name={icon} size={20} strokeWidth={2} />}
      {children}
      {trailingArrow && <Icon name="arrowRight" size={18} strokeWidth={2.2} />}
    </>
  );
  const external = /^https?:\/\//.test(href);
  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

export function TextLink({ href, children, className, light = false }: { href: string; children: ReactNode; className?: string; light?: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 text-[15px] font-bold transition-colors",
        light ? "text-aqua hover:text-aqua-soft" : "text-ocean hover:text-ocean-700",
        className,
      )}
    >
      {children}
      <Icon name="arrowRight" size={16} strokeWidth={2.4} />
    </Link>
  );
}

export function CheckList({ items, dark = false, className }: { items: string[]; dark?: boolean; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-x-6 gap-y-2.5 text-[15px] font-semibold", dark ? "text-on-dark-2" : "text-body", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-2">
          <Icon name="check" size={18} strokeWidth={2.4} className={dark ? "text-aqua" : "text-lagoon-ink"} />
          {item}
        </li>
      ))}
    </ul>
  );
}
