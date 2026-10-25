import type { ReactNode } from "react";
import { CircuitBackdrop } from "@/components/sections/hero-visuals";
import { Icon, type IconName } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

// Building blocks for the illustrative screens in page heroes. Everything here is decorative:
// the page text already says what the screen shows, so the whole stage is hidden from screen readers.

export function Stage({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative mx-auto w-full max-w-[540px] py-4 lg:py-8", className)}>
      <CircuitBackdrop />
      <div className="relative">{children}</div>
    </div>
  );
}

/** White app or browser window. Pass `bar` to draw a title bar (e.g. an address field). */
export function Window({ bar, children, className }: { bar?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-3xl bg-white text-navy shadow-float ring-1 ring-white/10", className)}>
      {bar && (
        <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-3">
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span key={i} className="size-2.5 rounded-full bg-line-2" />
            ))}
          </span>
          {bar}
        </div>
      )}
      {children}
    </div>
  );
}

export function UrlBar({ children }: { children: ReactNode }) {
  return (
    <span className="flex min-w-0 flex-1 items-center gap-2 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-muted ring-1 ring-line">
      <Icon name="globe" size={13} strokeWidth={2} className="shrink-0 text-lagoon-ink" />
      <span className="truncate">{children}</span>
    </span>
  );
}

/** Portrait phone frame. */
export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("mx-auto w-[282px] rounded-[44px] bg-navy p-3 shadow-float ring-1 ring-white/15", className)}>
      <div className="flex h-[548px] flex-col overflow-hidden rounded-[34px] bg-mist text-navy">{children}</div>
    </div>
  );
}

/** Grey placeholder line standing in for body text. */
export function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-2 rounded-full bg-line", className)} />;
}

export function Chip({ children, active = false, className }: { children: ReactNode; active?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full px-2.5 py-1 text-xs font-bold whitespace-nowrap ring-1",
        active ? "bg-sky-soft text-ocean ring-ocean/40" : "bg-white text-body ring-line",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function MockButton({ children, icon, small = false, className }: { children: ReactNode; icon?: IconName; small?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center justify-center gap-2 rounded-xl bg-ocean font-bold whitespace-nowrap text-white",
        small ? "min-h-10 px-3.5 text-[13px]" : "min-h-11 px-4 text-sm",
        className,
      )}
    >
      {icon && <Icon name={icon} size={16} strokeWidth={2.2} />}
      {children}
    </span>
  );
}

/** Stand-in for a photo: the brand gradient with a large line icon. */
export function Photo({ icon, className, children }: { icon: IconName; className?: string; children?: ReactNode }) {
  return (
    <div className={cn("relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-ocean via-sea to-aqua", className)}>
      <span className="absolute -top-8 -right-6 size-28 rounded-full bg-white/15" />
      <Icon name={icon} size={64} strokeWidth={1.3} className="relative text-white/85" />
      {children}
    </div>
  );
}

const tones = {
  mint: "bg-mint text-whatsapp",
  sky: "bg-sky-soft text-ocean",
  foam: "bg-foam text-lagoon-deep",
  amber: "bg-amber-soft text-amber",
} as const;

/** Small white notification card that floats beside the main screen on wide displays. */
export function FloatCard({
  icon,
  title,
  sub,
  tone = "mint",
  action,
  className,
}: {
  icon: IconName;
  title: string;
  sub?: string;
  tone?: keyof typeof tones;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("float-y absolute z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-float xl:flex", className)}>
      <span className={cn("flex size-10 shrink-0 items-center justify-center rounded-xl", tones[tone])}>
        <Icon name={icon} size={19} strokeWidth={2.1} />
      </span>
      <span className="flex flex-col gap-0.5 whitespace-nowrap">
        <span className="text-sm font-bold text-navy">{title}</span>
        {sub && <span className="text-xs text-muted">{sub}</span>}
      </span>
      {action}
    </div>
  );
}

/** Dark pill that floats beside the main screen on wide displays. */
export function FloatPill({ icon, children, className }: { icon: IconName; children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "float-y absolute z-10 hidden items-center gap-2.5 rounded-full bg-navy px-4 py-3 text-sm font-bold whitespace-nowrap text-white shadow-float ring-1 ring-white/15 [animation-delay:-2s] xl:flex",
        className,
      )}
    >
      <Icon name={icon} size={18} strokeWidth={2.2} className="text-aqua" />
      {children}
    </div>
  );
}

/** Horizontal progress through named steps; steps before `current` are done. */
export function Stepper({ steps, current }: { steps: string[]; current: number }) {
  return (
    <ol className="flex items-center gap-2">
      {steps.map((s, i) => (
        <li key={s} className="flex flex-1 items-center gap-2">
          <span
            className={cn(
              "flex size-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold",
              i < current ? "bg-ocean text-white" : i === current ? "bg-white text-ocean ring-2 ring-ocean" : "bg-mist text-muted ring-1 ring-line",
            )}
          >
            {i < current ? <Icon name="check" size={13} strokeWidth={3} /> : i + 1}
          </span>
          <span className={cn("truncate text-xs font-bold", i <= current ? "text-navy" : "text-muted")}>{s}</span>
          {i < steps.length - 1 && <span className={cn("h-px flex-1", i < current ? "bg-ocean" : "bg-line")} />}
        </li>
      ))}
    </ol>
  );
}
