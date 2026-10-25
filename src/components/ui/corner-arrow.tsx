import { cn } from "@/lib/cn";
import { Icon } from "./icon";

/** Round arrow in a link card's corner; fills in when the card (a `group`) is hovered. */
export function CornerArrow({ light = false }: { light?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-9 shrink-0 items-center justify-center rounded-full border transition-colors",
        light
          ? "border-white/20 text-aqua group-hover:border-aqua group-hover:bg-aqua group-hover:text-navy"
          : "border-line text-navy group-hover:border-ocean group-hover:bg-ocean group-hover:text-white",
      )}
    >
      <Icon name="arrowRight" size={16} strokeWidth={2.4} />
    </span>
  );
}
