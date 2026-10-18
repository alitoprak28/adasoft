import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/brand/adasoft-mark.svg"
        alt=""
        width={compact ? 47 : 55}
        height={compact ? 34 : 40}
        unoptimized
        priority
      />
      <span className={cn("leading-none font-bold tracking-[-0.02em]", compact ? "text-[22px]" : "text-[26px]")}>
        <span className={dark ? "text-white" : "text-navy"}>Ada</span>
        <span className={dark ? "text-aqua" : "text-lagoon"}>Soft</span>
      </span>
    </span>
  );
}
