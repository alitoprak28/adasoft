import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { CITIES, COAST_TRACE, ISLAND_PATH, LAND_TRACES, MAP_VIEWBOX, SEA_TRACES, WAVE_PATH } from "./paths";

const { x: vx, y: vy, w: vw, h: vh } = MAP_VIEWBOX;

const labelOffset = {
  below: "-translate-x-1/2 translate-y-3 sm:translate-y-4",
  left: "-translate-x-[calc(100%_+_8px)] -translate-y-1/2 sm:-translate-x-[calc(100%_+_10px)]",
  right: "translate-x-2 -translate-y-1/2 sm:translate-x-2.5",
} as const;

/** The homepage map: real Cyprus outline, KKTC cities joined by animated circuit traces. */
export function HeroMap({ locale, label, className }: { locale: Locale; label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("relative w-full", className)}
      style={{ aspectRatio: `${vw} / ${vh}` }}
    >
      <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="hero-island" gradientUnits="userSpaceOnUse" x1="30" y1="150" x2="250" y2="20">
            <stop offset="0" stopColor="#1562C7" />
            <stop offset="0.55" stopColor="#0FA1D3" />
            <stop offset="1" stopColor="#11D7CF" />
          </linearGradient>
        </defs>
        <path fill="url(#hero-island)" d={ISLAND_PATH} />
        <g transform="translate(0 -6)">
          <path className="wave-drift" fill="url(#hero-island)" opacity="0.9" d={WAVE_PATH} />
        </g>

        <g fill="none" stroke="#08B0BE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          {SEA_TRACES.map((t) => (
            <path key={t.d} className="trace-flow" strokeDasharray="3 3" d={t.d} />
          ))}
        </g>
        {SEA_TRACES.map((t) => (
          <circle key={t.d} cx={t.end.x} cy={t.end.y} r="2.6" fill="#F2F7FB" stroke="#08B0BE" strokeWidth="1.3" />
        ))}

        <g fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
          {[...LAND_TRACES, COAST_TRACE].map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill="none" stroke="#E9FFFD" strokeWidth="2.6" strokeLinecap="round">
          {LAND_TRACES.map((d, i) => (
            <path key={d} className="trace-pulse" pathLength={100} d={d} style={{ animationDelay: `${-0.9 * i}s` }} />
          ))}
        </g>
        <g fill="none" stroke="#FFFFFF" strokeWidth="0.8">
          {CITIES.map((c, i) => (
            <circle key={c.name.tr} className="node-halo" cx={c.x} cy={c.y} r={"hub" in c ? 3.6 : 2.8} style={{ animationDelay: `${-0.6 * i}s` }} />
          ))}
        </g>
        <g fill="#042554" stroke="#FFFFFF" strokeWidth="1.4">
          {CITIES.map((c) => (
            <circle key={c.name.tr} cx={c.x} cy={c.y} r={"hub" in c ? 3.6 : 2.8} />
          ))}
        </g>
      </svg>

      {CITIES.map((c) => (
        <span
          key={c.name.tr}
          aria-hidden="true"
          className={cn(
            "absolute rounded-md bg-navy px-[7px] py-[3px] text-xs font-bold whitespace-nowrap text-white shadow-[0_8px_18px_-10px_rgba(4,37,84,0.6)] sm:rounded-lg sm:px-2.5 sm:py-[5px] sm:text-[13px]",
            labelOffset[c.label],
          )}
          style={{ left: `${((c.x - vx) / vw) * 100}%`, top: `${((c.y - vy) / vh) * 100}%` }}
        >
          {c.name[locale]}
        </span>
      ))}
    </div>
  );
}

/** Faint island silhouette used behind dark call-to-action bands. */
export function IslandWatermark({ className }: { className?: string }) {
  return (
    <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} aria-hidden="true" className={className}>
      <path fill="#11D7CF" d={ISLAND_PATH} />
    </svg>
  );
}
