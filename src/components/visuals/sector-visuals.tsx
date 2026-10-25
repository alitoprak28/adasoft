import type { ReactNode } from "react";
import { CITIES, ISLAND_PATH } from "@/components/brand/paths";
import { BookingMockup } from "@/components/sections/hero-visuals";
import { Icon } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { SectorId } from "@/i18n/routes";
import { getVisualText, type VisualText } from "@/content/visuals";
import { cn } from "@/lib/cn";
import { Bar, Chip, FloatCard, MockButton, Phone, Stage, Stepper, Window } from "./kit";

function RealEstateVisual({ t }: { t: VisualText["realEstate"] }) {
  return (
    <Stage>
      <Window>
        <div className="relative aspect-[320/140] overflow-hidden">
          <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full">
            <defs>
              <linearGradient id="villa-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#1562C7" />
                <stop offset="1" stopColor="#7DEDE7" />
              </linearGradient>
            </defs>
            <rect width="320" height="140" fill="url(#villa-sky)" />
            <circle cx="56" cy="34" r="13" fill="#FFFFFF" opacity="0.55" />
            <path d="M0 82Q80 74 160 80T320 78V140H0Z" fill="#0FA1D3" />
            <path d="M0 100H320V140H0Z" fill="#E7F0FB" />
            <rect x="100" y="52" width="136" height="48" fill="#FFFFFF" />
            <rect x="92" y="46" width="152" height="7" rx="2" fill="#042554" />
            <rect x="176" y="26" width="60" height="20" fill="#FFFFFF" />
            <rect x="168" y="20" width="76" height="7" rx="2" fill="#042554" />
            <rect x="112" y="60" width="34" height="30" rx="2" fill="#0A3470" opacity="0.85" />
            <rect x="156" y="60" width="68" height="30" rx="2" fill="#0A3470" opacity="0.85" />
            <rect x="184" y="31" width="44" height="11" rx="2" fill="#0A3470" opacity="0.85" />
            <rect x="112" y="108" width="112" height="13" rx="4" fill="#11D7CF" />
          </svg>
          <span className="absolute top-3 right-3 flex gap-1 rounded-[10px] bg-navy/60 p-[3px] text-[11px] font-bold text-on-dark-2 backdrop-blur-sm">
            {["TR", "EN", "RU"].map((l, i) => (
              <span key={l} className={cn("rounded-[7px] px-2 py-0.5", i === 0 && "bg-white text-navy")}>
                {l}
              </span>
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <span className="font-display text-lg leading-tight font-bold">{t.title}</span>
          <span className="flex items-center gap-1.5 text-sm text-muted">
            <Icon name="pin" size={15} strokeWidth={2} className="text-lagoon-ink" />
            {t.place}
          </span>
          <span className="flex flex-wrap gap-1.5">
            {t.specs.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </span>
          <div className="mt-1 flex items-center justify-between gap-3 border-t border-line pt-4">
            <span className="font-display text-xl font-bold text-navy">{t.price}</span>
            <MockButton icon="calendar" small>
              {t.cta}
            </MockButton>
          </div>
        </div>
      </Window>
      <FloatCard icon="receipt" tone="sky" title={t.planTitle} sub={t.planValue} className="top-28 -left-20" />
    </Stage>
  );
}

// Unit status per floor, top floor first: 0 for sale, 1 reserved, 2 sold.
const UNITS = [
  [0, 2, 0, 1],
  [2, 0, 0, 2],
  [0, 1, 0, 0],
  [2, 2, 1, 0],
  [0, 2, 2, 0],
];
const SELECTED = { floor: 1, unit: 2 };
const unitTone = ["bg-sky-soft ring-ocean/30", "bg-amber-soft ring-amber/30", "bg-line ring-line-2"];

function ConstructionVisual({ t }: { t: VisualText["construction"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
          <span className="font-display text-base font-bold">{t.project}</span>
          <span className="flex gap-3 text-[11px] font-bold text-muted">
            {t.legend.map((l, i) => (
              <span key={l} className="flex items-center gap-1.5">
                <span className={cn("size-2.5 rounded-sm ring-1", unitTone[i])} />
                {l}
              </span>
            ))}
          </span>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1fr]">
          <div className="flex flex-col justify-end gap-1.5 rounded-2xl bg-mist p-3">
            <span className="mx-auto mb-1 h-2 w-2/3 rounded-full bg-navy" />
            {UNITS.map((floor, f) => (
              <div key={f} className="grid grid-cols-4 gap-1.5">
                {floor.map((status, u) => (
                  <span
                    key={u}
                    className={cn(
                      "h-7 rounded-md",
                      f === SELECTED.floor && u === SELECTED.unit ? "bg-ocean ring-2 ring-ocean ring-offset-2 ring-offset-mist" : cn("ring-1", unitTone[status]),
                    )}
                  />
                ))}
              </div>
            ))}
            <span className="mt-1 h-3 rounded-sm bg-line-2" />
          </div>
          <div className="flex flex-col gap-3">
            <span className="font-display text-lg leading-tight font-bold">{t.unit}</span>
            <span className="text-sm text-muted">{t.unitSub}</span>
            <svg viewBox="0 0 120 80" className="hidden w-full rounded-xl bg-mist p-2 sm:block" fill="none" stroke="#0A3470" strokeWidth="1.6">
              <rect x="4" y="4" width="112" height="72" rx="2" />
              <path d="M60 4V44H4M60 44H116M84 44V76" />
              <path d="M30 44V52M100 44V52" stroke="#E9F0F8" strokeWidth="3" />
            </svg>
            <MockButton className="mt-auto">{t.cta}</MockButton>
          </div>
        </div>
      </Window>
      <div className="float-y absolute -bottom-5 -left-20 z-10 hidden w-[230px] flex-col gap-2 rounded-2xl bg-white px-4 py-3.5 shadow-float xl:flex">
        <span className="flex items-center justify-between text-sm font-bold text-navy">
          {t.progressTitle}
          <span className="font-display text-ocean">{t.progress}</span>
        </span>
        <span className="h-2 overflow-hidden rounded-full bg-line">
          <span className="block h-full w-[68%] rounded-full bg-gradient-to-r from-ocean to-lagoon" />
        </span>
      </div>
    </Stage>
  );
}

function EducationVisual({ t }: { t: VisualText["education"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex flex-col gap-4 border-b border-line px-5 py-5">
          <span className="font-display text-lg font-bold">{t.title}</span>
          <Stepper steps={t.steps} current={1} />
        </div>
        <div className="flex flex-col gap-3.5 p-5">
          {t.fields.map(([label, value]) => (
            <span key={label} className="flex flex-col gap-1.5">
              <span className="text-xs font-bold text-ink">{label}</span>
              <span className="flex min-h-11 items-center justify-between rounded-xl px-3.5 text-sm text-navy ring-1 ring-line-2">
                {value}
                <Icon name="chevronDown" size={16} strokeWidth={2.2} className="text-muted" />
              </span>
            </span>
          ))}
          <span className="flex items-center gap-3 rounded-xl border-[1.5px] border-dashed border-line-2 bg-mist px-3.5 py-3">
            <span className="flex size-9 items-center justify-center rounded-lg bg-white text-ocean ring-1 ring-line">
              <Icon name="receipt" size={18} />
            </span>
            <span className="flex-1 text-sm font-bold text-navy">{t.file}</span>
            <span className="rounded-full bg-mint px-2.5 py-1 text-[11px] font-bold text-whatsapp">{t.fileStatus}</span>
          </span>
          <MockButton className="mt-1">{t.cta}</MockButton>
        </div>
      </Window>
      <FloatCard icon="bed" tone="sky" title={t.dormTitle} sub={t.dormSub} className="-top-7 -right-12" />
    </Stage>
  );
}

const TAKEN_SLOTS = new Set([1, 4]);

function HealthVisual({ t }: { t: VisualText["health"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex items-center gap-3.5 border-b border-line px-5 py-4">
          <span className="flex size-12 items-center justify-center rounded-full bg-sky-soft text-ocean">
            <Icon name="user" size={24} strokeWidth={1.8} />
          </span>
          <span className="flex flex-1 flex-col gap-0.5">
            <span className="text-[15px] font-bold">{t.doctor}</span>
            <span className="text-xs text-muted">{t.specialty}</span>
          </span>
          <span className="flex size-9 items-center justify-center rounded-full bg-mint text-whatsapp">
            <Icon name="health" size={18} />
          </span>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <div className="grid grid-cols-4 gap-2">
            {t.days.map((day, i) => {
              const [name, num] = day.split(" ");
              return (
                <span
                  key={day}
                  className={cn(
                    "flex flex-col items-center gap-0.5 rounded-xl py-2.5 ring-1",
                    i === 1 ? "bg-navy text-white ring-navy" : "bg-white text-navy ring-line",
                  )}
                >
                  <span className={cn("text-[11px] font-semibold", i === 1 ? "text-on-dark-2" : "text-muted")}>{name}</span>
                  <span className="font-display text-lg leading-none font-bold">{num}</span>
                </span>
              );
            })}
          </div>
          <div className="grid grid-cols-3 gap-2">
            {t.slots.map((slot, i) => (
              <span
                key={slot}
                className={cn(
                  "flex min-h-10 items-center justify-center rounded-lg text-sm font-bold ring-1",
                  TAKEN_SLOTS.has(i) ? "bg-mist text-line-3 line-through ring-line" : i === 2 ? "bg-ocean text-white ring-ocean" : "bg-white text-navy ring-line-2",
                )}
              >
                {slot}
              </span>
            ))}
          </div>
          <MockButton icon="calendarCheck">{t.cta}</MockButton>
        </div>
      </Window>
      <FloatCard icon="whatsapp" title={t.reminderTitle} sub={t.reminderSub} className="-bottom-14 -left-14" />
    </Stage>
  );
}

function AutomotiveVisual({ t }: { t: VisualText["automotive"] }) {
  return (
    <Stage>
      <Window>
        <div className="relative aspect-[320/140] overflow-hidden bg-gradient-to-b from-navy-800 to-ocean">
          <svg viewBox="0 0 320 140" className="absolute inset-0 h-full w-full">
            <path d="M0 108H320V140H0Z" fill="#042554" opacity="0.55" />
            <ellipse cx="168" cy="110" rx="132" ry="5" fill="#021431" opacity="0.5" />
            <path
              d="M40 100V86Q40 78 50 76L94 72L122 54Q130 48 142 48H186Q198 48 208 56L234 72L280 77Q296 80 296 92V100Q296 104 292 104H44Q40 104 40 100Z"
              fill="#FFFFFF"
            />
            <path d="M104 72L126 57Q132 53 140 53H162V72Z" fill="#0A3470" />
            <path d="M168 53H184Q194 53 202 59L222 72H168Z" fill="#0A3470" />
            <path d="M46 86H62M282 86H292" stroke="#11D7CF" strokeWidth="4" strokeLinecap="round" />
            {[92, 246].map((cx) => (
              <g key={cx}>
                <circle cx={cx} cy="104" r="18" fill="#031B3F" />
                <circle cx={cx} cy="104" r="8" fill="#9FB4CC" />
                <circle cx={cx} cy="104" r="3" fill="#031B3F" />
              </g>
            ))}
          </svg>
        </div>
        <div className="flex flex-col gap-3 p-5">
          <span className="font-display text-lg font-bold">{t.model}</span>
          <span className="flex flex-wrap gap-1.5">
            {t.specs.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </span>
          <div className="mt-1 flex items-center justify-between gap-3 border-t border-line pt-4">
            <span className="font-display text-xl font-bold text-navy">{t.price}</span>
            <MockButton icon="car" small>
              {t.cta}
            </MockButton>
          </div>
        </div>
      </Window>
      <FloatCard icon="calendarCheck" tone="sky" title={t.serviceTitle} sub={t.serviceSub} className="-bottom-12 -right-10" />
    </Stage>
  );
}

// A decorative QR pattern: three finder squares plus a fixed scatter of modules.
function QrPattern({ className }: { className?: string }) {
  const size = 21;
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" fill="#042554" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="#FFFFFF" />
      <rect x={x + 2} y={y + 2} width="3" height="3" fill="#042554" />
    </g>
  );
  const inFinder = (x: number, y: number) => (x < 8 && y < 8) || (x > 12 && y < 8) || (x < 8 && y > 12);
  const modules: [number, number][] = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      if (!inFinder(x, y) && (x * 7 + y * 11 + x * y) % 3 === 0) modules.push([x, y]);
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} className={className} shapeRendering="crispEdges">
      <rect width={size} height={size} fill="#FFFFFF" />
      {modules.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#042554" />
      ))}
      {[finder(0, 0), finder(14, 0), finder(0, 14)]}
    </svg>
  );
}

function FoodVisual({ t }: { t: VisualText["food"] }) {
  return (
    <Stage>
      <Phone>
        <div className="flex items-center justify-between bg-white px-5 pt-8 pb-4">
          <span className="font-display text-lg font-bold">{t.venue}</span>
          <span className="rounded-full bg-navy px-2.5 py-1 text-[11px] font-bold text-white">{t.table}</span>
        </div>
        <div className="flex gap-2 bg-white px-5 pb-4">
          {t.tabs.map((tab, i) => (
            <Chip key={tab} active={i === 0}>
              {tab}
            </Chip>
          ))}
        </div>
        <div className="flex flex-col gap-2.5 p-4">
          {t.items.map(([name, price], i) => (
            <div key={name} className="flex items-center gap-3 rounded-2xl bg-white p-2.5 ring-1 ring-line">
              <span className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl text-white", i === 0 ? "bg-ocean" : i === 1 ? "bg-lagoon" : "bg-aqua")}>
                <Icon name="cup" size={20} />
              </span>
              <span className="flex flex-1 flex-col gap-1">
                <span className="text-[13px] font-bold">{name}</span>
                <Bar className="w-3/4" />
              </span>
              <span className="flex flex-col items-end gap-1">
                <span className="text-[13px] font-bold">{price}</span>
                <span className="flex size-6 items-center justify-center rounded-full bg-ocean text-sm leading-none font-bold text-white">+</span>
              </span>
            </div>
          ))}
        </div>
        <div className="mt-auto p-4">
          <MockButton icon="cart">{t.cta}</MockButton>
        </div>
      </Phone>
      <div className="float-y absolute bottom-28 -left-4 z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-float xl:flex">
        <QrPattern className="size-14 rounded-md ring-1 ring-line" />
        <span className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-navy">{t.qrTitle}</span>
          <span className="text-xs text-muted">{t.qrSub}</span>
        </span>
      </div>
    </Stage>
  );
}

// The map is cropped to the middle and east of the island, around the delivery route.
const MAP_CROP = { x: 70, y: 34, w: 180, h: 92 };
const city = (tr: string) => CITIES.find((c) => c.name.tr === tr)!;
const onMap = (x: number, y: number) => ({
  left: `${((x - MAP_CROP.x) / MAP_CROP.w) * 100}%`,
  top: `${((y - MAP_CROP.y) / MAP_CROP.h) * 100}%`,
});

function LogisticsVisual({ t }: { t: VisualText["logistics"] }) {
  const from = city("Gazimağusa");
  const to = city("Lefkoşa");
  const done = `M${from.x} ${from.y}H167.5L160 ${to.y}`;
  const truck = { x: 160, y: to.y };
  const pin = "absolute rounded-md bg-white px-2 py-1 text-[11px] font-bold whitespace-nowrap text-navy shadow-card ring-1 ring-line";
  return (
    <Stage>
      <Window>
        <div className="relative overflow-hidden bg-mist" style={{ aspectRatio: `${MAP_CROP.w} / ${MAP_CROP.h}` }}>
          <svg viewBox={`${MAP_CROP.x} ${MAP_CROP.y} ${MAP_CROP.w} ${MAP_CROP.h}`} className="absolute inset-0 h-full w-full">
            <path d={ISLAND_PATH} fill="#E7F0FB" stroke="#C9D6E6" strokeWidth="0.6" />
            <path d={`${done}H${to.x}`} fill="none" stroke="#C9D6E6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <path d={done} fill="none" stroke="#1562C7" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={from.x} cy={from.y} r="3.2" fill="#1562C7" stroke="#FFFFFF" strokeWidth="1.2" />
            <circle cx={to.x} cy={to.y} r="3.2" fill="#FFFFFF" stroke="#1562C7" strokeWidth="1.6" />
          </svg>
          <span className={cn(pin, "translate-x-[-40%] translate-y-3")} style={onMap(from.x, from.y)}>
            {t.from}
          </span>
          <span className={cn(pin, "-translate-x-1/2 -translate-y-[calc(100%_+_10px)]")} style={onMap(to.x, to.y)}>
            {t.to}
          </span>
          <span
            className="absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-navy text-aqua shadow-float ring-2 ring-white"
            style={onMap(truck.x, truck.y)}
          >
            <Icon name="truck" size={16} strokeWidth={2.2} />
          </span>
        </div>
        <div className="flex flex-col gap-4 p-5">
          <span className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
            <span className="font-display text-base font-bold whitespace-nowrap">{t.code}</span>
            <span className="text-xs font-semibold text-muted">{t.eta}</span>
          </span>
          <span className="flex items-center gap-2 text-sm font-bold text-navy">
            {t.from}
            <Icon name="arrowRight" size={14} strokeWidth={2.4} className="text-lagoon-ink" />
            {t.to}
          </span>
          <Stepper steps={t.steps} current={1} />
        </div>
      </Window>
      <FloatCard icon="store" tone="foam" title={t.dealerTitle} sub={t.dealerSub} className="-top-2 -right-12" />
    </Stage>
  );
}

function RetailVisual({ t }: { t: VisualText["retail"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex items-end justify-between gap-4 bg-navy px-5 py-5 text-white">
          <span className="flex flex-col gap-1">
            <span className="text-xs font-semibold text-on-dark-2">{t.title}</span>
            <span className="font-display text-3xl leading-none font-bold">{t.value}</span>
          </span>
          <svg viewBox="0 0 120 40" className="h-10 w-32" fill="none">
            <path d="M2 34L18 28L34 30L50 20L66 24L82 12L98 16L118 4" stroke="#11D7CF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="flex flex-col gap-1 p-5">
          <span className="pb-2 text-xs font-bold text-muted">{t.stockTitle}</span>
          {t.rows.map(([name, qty], i) => {
            const low = i === t.rows.length - 1;
            return (
              <div key={name} className="flex items-center gap-3 border-b border-line py-3 last:border-0">
                <span className={cn("flex size-10 items-center justify-center rounded-xl", low ? "bg-amber-soft text-amber" : "bg-sky-soft text-ocean")}>
                  <Icon name="store" size={18} />
                </span>
                <span className="flex flex-1 flex-col gap-1">
                  <span className="text-sm font-bold text-navy">{name}</span>
                  <Bar className="w-1/2" />
                </span>
                <span className="flex flex-col items-end gap-1">
                  <span className="text-sm font-bold text-navy">{qty}</span>
                  {low && <span className="rounded-full bg-amber-soft px-2 py-0.5 text-[11px] font-bold text-amber">{t.low}</span>}
                </span>
              </div>
            );
          })}
        </div>
      </Window>
      <FloatCard icon="bell" tone="amber" title={t.alertTitle} sub={t.alertSub} className="-bottom-14 -left-14" />
    </Stage>
  );
}

const visuals: Record<Exclude<SectorId, "tourism">, (t: VisualText) => ReactNode> = {
  realEstate: (t) => <RealEstateVisual t={t.realEstate} />,
  construction: (t) => <ConstructionVisual t={t.construction} />,
  education: (t) => <EducationVisual t={t.education} />,
  health: (t) => <HealthVisual t={t.health} />,
  automotive: (t) => <AutomotiveVisual t={t.automotive} />,
  food: (t) => <FoodVisual t={t.food} />,
  logistics: (t) => <LogisticsVisual t={t.logistics} />,
  retail: (t) => <RetailVisual t={t.retail} />,
};

/** The hero illustration for a sector page. */
export function SectorVisual({ id, locale }: { id: SectorId; locale: Locale }) {
  if (id === "tourism") return <BookingMockup t={getDictionary(locale).visuals.booking} />;
  return visuals[id](getVisualText(locale));
}
