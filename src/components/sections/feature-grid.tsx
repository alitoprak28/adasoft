import Link from "next/link";
import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

export type FeatureCardData = {
  icon: IconName;
  title: string;
  text?: string;
  link?: { href: string; label: string };
  highlight?: boolean;
};

export function FeatureGrid({ items, minWidth = 320 }: { items: FeatureCardData[]; minWidth?: number }) {
  return (
    <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${minWidth}px), 1fr))` }}>
      {items.map((f) => (
        <article
          key={f.title}
          className={cn(
            "flex flex-col gap-3.5 rounded-[20px] border p-7",
            f.highlight
              ? "border-navy bg-navy bg-[radial-gradient(90%_70%_at_100%_100%,rgba(17,215,207,0.2),transparent_70%)] text-white shadow-float"
              : "border-line bg-white text-navy",
          )}
        >
          <span
            className={cn(
              "flex size-[52px] items-center justify-center rounded-[14px]",
              f.highlight ? "bg-white/8 text-aqua" : "bg-sky-soft text-ocean",
            )}
          >
            <Icon name={f.icon} size={26} />
          </span>
          <h3 className="text-xl font-semibold tracking-[-0.015em]">{f.title}</h3>
          {f.text && <p className={cn("text-[15.5px] leading-relaxed", f.highlight ? "text-on-dark-2" : "text-muted")}>{f.text}</p>}
          {f.link && (
            <Link
              href={f.link.href}
              className={cn(
                "mt-auto inline-flex min-h-9 items-center gap-1.5 text-sm font-bold",
                f.highlight ? "text-aqua hover:text-aqua-soft" : "text-ocean hover:text-ocean-700",
              )}
            >
              {f.link.label}
              <Icon name="arrowRight" size={15} strokeWidth={2.4} />
            </Link>
          )}
        </article>
      ))}
    </div>
  );
}
