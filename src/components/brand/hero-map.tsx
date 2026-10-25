import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/cn";
import { CITIES, COAST_TRACE, ISLAND_PATH, LAND_TRACES, MAP_VIEWBOX, SEA_TRACES, WAVE_PATH } from "./paths";

const { x: vx, y: vy, w: vw, h: vh } = MAP_VIEWBOX;

const labelOffset = {
  below: "-translate-x-1/2 translate-y-3 sm:translate-y-4",
  left: "-translate-x-[calc(100%_+_8px)] -translate-y-1/2 sm:-translate-x-[calc(100%_+_10px)]",
  right: "translate-x-2 -translate-y-1/2 sm:translate-x-2.5",
} as const;

// Depth lines around the island, like a nautical chart: the coastline scaled out from the island's middle.
const CONTOUR_CENTER = { x: 128, y: 92 };
const CONTOUR_SCALES = [1.08, 1.2, 1.34, 1.5, 1.68, 1.88];

function Contours({ stroke = "#7DEDE7", strength = 1 }: { stroke?: string; strength?: number }) {
  const { x, y } = CONTOUR_CENTER;
  return (
    <g fill="none" stroke={stroke}>
      {CONTOUR_SCALES.map((s, i) => (
        <path
          key={s}
          d={ISLAND_PATH}
          vectorEffect="non-scaling-stroke"
          strokeWidth="1"
          strokeOpacity={(0.2 - i * 0.03) * strength}
          transform={`translate(${x} ${y}) scale(${s}) translate(${-x} ${-y})`}
        />
      ))}
    </g>
  );
}

const delay = (s: number) => ({ animationDelay: `${s}s` });

/** The homepage map: real Cyprus outline, KKTC cities joined by circuit traces that draw in on load. */
export function HeroMap({ locale, label, className }: { locale: Locale; label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("map-in relative w-full", className)}
      style={{ aspectRatio: `${vw} / ${vh}`, ...delay(0.15) }}
    >
      <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} aria-hidden="true" className="absolute inset-0 h-full w-full overflow-visible">
        <defs>
          <linearGradient id="hero-island" gradientUnits="userSpaceOnUse" x1="30" y1="150" x2="250" y2="20">
            <stop offset="0" stopColor="#1562C7" />
            <stop offset="0.55" stopColor="#0FA1D3" />
            <stop offset="1" stopColor="#11D7CF" />
          </linearGradient>
          <filter id="hero-glow" x="-30%" y="-40%" width="160%" height="180%">
            <feGaussianBlur stdDeviation="12" />
          </filter>
        </defs>

        <Contours />
        <path fill="#11D7CF" opacity="0.32" filter="url(#hero-glow)" d={ISLAND_PATH} />
        <path fill="url(#hero-island)" d={ISLAND_PATH} />
        <g transform="translate(0 -6)">
          <path className="wave-drift" fill="url(#hero-island)" opacity="0.9" d={WAVE_PATH} />
        </g>

        <g className="fade-in" style={delay(1.4)}>
          <g fill="none" stroke="#11D7CF" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
            {SEA_TRACES.map((t) => (
              <path key={t.d} className="trace-flow" strokeDasharray="3 3" d={t.d} />
            ))}
          </g>
          {SEA_TRACES.map((t) => (
            <circle key={t.d} cx={t.end.x} cy={t.end.y} r="2.6" fill="#031B3F" stroke="#11D7CF" strokeWidth="1.3" />
          ))}
        </g>

        <g fill="none" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" opacity="0.92">
          {[...LAND_TRACES, COAST_TRACE].map((d, i) => (
            <path key={d} className="trace-draw" pathLength={100} d={d} style={delay(0.6 + i * 0.15)} />
          ))}
        </g>
        <g className="fade-in" style={delay(1.9)}>
          <g fill="none" stroke="#E9FFFD" strokeWidth="2.6" strokeLinecap="round">
            {LAND_TRACES.map((d, i) => (
              <path key={d} className="trace-pulse" pathLength={100} d={d} style={delay(-0.9 * i)} />
            ))}
          </g>
          <g fill="none" stroke="#FFFFFF" strokeWidth="0.8">
            {CITIES.map((c, i) => (
              <circle key={c.name.tr} className="node-halo" cx={c.x} cy={c.y} r={"hub" in c ? 3.6 : 2.8} style={delay(-0.6 * i)} />
            ))}
          </g>
        </g>
        <g fill="#042554" stroke="#FFFFFF" strokeWidth="1.4">
          {CITIES.map((c, i) => (
            <circle key={c.name.tr} className="node-in" cx={c.x} cy={c.y} r={"hub" in c ? 3.6 : 2.8} style={delay(0.9 + i * 0.12)} />
          ))}
        </g>
      </svg>

      {CITIES.map((c, i) => (
        <span
          key={c.name.tr}
          aria-hidden="true"
          className={cn(
            "fade-in absolute rounded-md bg-navy-950/85 px-[7px] py-[3px] text-xs font-bold whitespace-nowrap text-white shadow-[0_10px_22px_-10px_rgba(2,20,49,0.9)] ring-1 ring-white/15 backdrop-blur-sm sm:rounded-lg sm:px-2.5 sm:py-[5px] sm:text-[13px]",
            labelOffset[c.label],
          )}
          style={{ left: `${((c.x - vx) / vw) * 100}%`, top: `${((c.y - vy) / vh) * 100}%`, ...delay(1.1 + i * 0.12) }}
        >
          {c.name[locale]}
        </span>
      ))}
    </div>
  );
}

/** Faint island and its depth lines, used behind dark bands. */
export function IslandWatermark({ className }: { className?: string }) {
  return (
    <svg viewBox={`${vx} ${vy} ${vw} ${vh}`} aria-hidden="true" className={cn("overflow-visible", className)}>
      <Contours strength={0.8} />
      <path fill="#11D7CF" fillOpacity="0.1" d={ISLAND_PATH} />
    </svg>
  );
}
