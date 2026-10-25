import type { ReactNode } from "react";
import { ISLAND_PATH } from "@/components/brand/paths";
import { PhoneMockup } from "@/components/sections/hero-visuals";
import { Icon, type IconName } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import type { ServiceId } from "@/i18n/routes";
import { getVisualText, type VisualText } from "@/content/visuals";
import { cn } from "@/lib/cn";
import { Bar, Chip, FloatCard, FloatPill, MockButton, Photo, Stage, UrlBar, Window } from "./kit";

function AiVisual({ t }: { t: VisualText["ai"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex items-center gap-3 bg-navy px-5 py-4 text-white">
          <span className="flex size-10 items-center justify-center rounded-xl bg-aqua/15 text-aqua">
            <Icon name="ai" size={22} />
          </span>
          <span className="flex flex-col gap-0.5">
            <span className="text-[15px] font-bold">{t.name}</span>
            <span className="flex items-center gap-1.5 text-xs font-semibold text-aqua-soft">
              <span className="size-1.5 rounded-full bg-aqua" />
              {t.status}
            </span>
          </span>
        </div>
        <div className="flex flex-col gap-3 bg-mist p-5">
          <span className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-ocean px-4 py-2.5 text-sm text-white">{t.question}</span>
          <span className="max-w-[85%] self-start rounded-2xl rounded-bl-md bg-white px-4 py-2.5 text-sm text-navy ring-1 ring-line">{t.answer}</span>
          <span className="flex flex-wrap gap-2">
            {t.replies.map((r) => (
              <span key={r} className="rounded-full bg-white px-3 py-1.5 text-xs font-bold text-ocean ring-1 ring-ocean/40">
                {r}
              </span>
            ))}
          </span>
        </div>
        <div className="flex items-center gap-3 border-t border-line px-4 py-3">
          <span className="flex-1 text-sm text-muted">{t.input}</span>
          <span className="flex size-9 items-center justify-center rounded-full bg-aqua text-navy">
            <Icon name="arrowRight" size={16} strokeWidth={2.4} />
          </span>
        </div>
      </Window>
      <FloatCard icon="receipt" tone="sky" title={t.docTitle} sub={t.docSub} className="-top-7 -right-12" />
    </Stage>
  );
}

function WebVisual({ t }: { t: VisualText["web"] }) {
  const features: IconName[] = ["web", "megaphone", "globe"];
  return (
    <Stage>
      <Window bar={<UrlBar>{t.url}</UrlBar>}>
        <div className="flex items-center justify-between border-b border-line px-5 py-3">
          <span className="flex items-center gap-2">
            <span className="size-5 rounded-md bg-gradient-to-br from-ocean to-aqua" />
            <Bar className="w-14 bg-navy/70" />
          </span>
          <span className="hidden gap-4 text-[11px] font-semibold text-muted sm:flex">
            {t.nav.map((n) => (
              <span key={n}>{n}</span>
            ))}
          </span>
        </div>
        <div className="grid grid-cols-[1.15fr_1fr] gap-4 p-5">
          <div className="flex flex-col gap-3 pt-1">
            <span className="font-display text-[19px] leading-tight font-bold text-navy">{t.headline}</span>
            <Bar className="w-full" />
            <Bar className="w-4/5" />
            <span className="mt-1 self-start rounded-lg bg-ocean px-3.5 py-2 text-xs font-bold text-white">{t.cta}</span>
          </div>
          <Photo icon="building" className="h-[136px] rounded-2xl" />
        </div>
        <div className="grid grid-cols-3 gap-3 px-5 pb-6">
          {features.map((f) => (
            <div key={f} className="flex flex-col gap-2 rounded-xl border border-line p-3">
              <Icon name={f} size={18} className="text-ocean" />
              <Bar className="w-full" />
              <Bar className="w-2/3" />
            </div>
          ))}
        </div>
      </Window>
      <div className="float-y absolute top-20 -right-10 z-10 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-float xl:flex">
        <svg viewBox="0 0 44 44" className="size-11 -rotate-90">
          <circle cx="22" cy="22" r="18" fill="none" className="stroke-mint" strokeWidth="5" />
          <circle cx="22" cy="22" r="18" fill="none" className="stroke-whatsapp" strokeWidth="5" strokeLinecap="round" pathLength={100} strokeDasharray="98 100" />
        </svg>
        <span className="flex flex-col">
          <span className="font-display text-xl leading-none font-bold text-navy">98</span>
          <span className="text-xs text-muted">{t.score}</span>
        </span>
      </div>
      <FloatPill icon="globe" className="-bottom-3 -left-16">
        {t.langTitle}
        <span className="flex gap-1 text-[11px]">
          {["TR", "EN", "RU"].map((l, i) => (
            <span key={l} className={cn("rounded-md px-1.5 py-0.5", i === 0 ? "bg-white text-navy" : "bg-white/10 text-on-dark-2")}>
              {l}
            </span>
          ))}
        </span>
      </FloatPill>
    </Stage>
  );
}

function EcommerceVisual({ t }: { t: VisualText["ecommerce"] }) {
  return (
    <Stage>
      <Window bar={<UrlBar>{t.url}</UrlBar>}>
        <div className="grid gap-5 p-5 sm:grid-cols-[1fr_1.05fr]">
          <div className="flex flex-col gap-2.5">
            <Photo icon="store" className="aspect-[16/9] rounded-2xl sm:aspect-square" />
            <div className="hidden grid-cols-3 gap-2 sm:grid">
              {[0, 1, 2].map((i) => (
                <span key={i} className={cn("aspect-square rounded-lg bg-sky-soft", i === 0 && "ring-2 ring-ocean")} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Bar className="w-16" />
            <span className="font-display text-lg leading-tight font-bold">{t.product}</span>
            <span className="flex text-amber">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon key={i} name="star" size={14} strokeWidth={2.2} />
              ))}
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-display text-xl font-bold text-navy">{t.price}</span>
              <span className="text-sm text-muted line-through">{t.oldPrice}</span>
            </span>
            <span className="text-xs font-bold text-muted">{t.sizeLabel}</span>
            <span className="flex flex-wrap gap-1.5">
              {t.sizes.map((s, i) => (
                <Chip key={s} active={i === 1} className="min-w-9">
                  {s}
                </Chip>
              ))}
            </span>
            <MockButton icon="cart" className="mt-auto">
              {t.cta}
            </MockButton>
          </div>
        </div>
      </Window>
      <FloatCard icon="truck" title={t.orderTitle} sub={t.orderSub} className="-bottom-12 -left-16" />
    </Stage>
  );
}

function CustomVisual({ t }: { t: VisualText["custom"] }) {
  const bars = [38, 52, 46, 68, 60, 82, 74, 92];
  return (
    <Stage>
      <Window>
        <div className="grid sm:grid-cols-[128px_1fr]">
          <aside className="hidden flex-col gap-1 bg-navy p-4 sm:flex">
            <span className="mb-3 flex items-center gap-2 text-xs font-bold text-white">
              <span className="size-5 shrink-0 rounded-md bg-gradient-to-br from-ocean to-aqua" />
              <span className="truncate">{t.app}</span>
            </span>
            {t.menu.map((m, i) => (
              <span key={m} className={cn("rounded-lg px-2.5 py-2 text-xs font-semibold", i === 0 ? "bg-white/10 text-white" : "text-on-dark")}>
                {m}
              </span>
            ))}
          </aside>
          <div className="flex flex-col gap-4 p-5">
            <div className="grid grid-cols-3 gap-2.5">
              {t.kpis.map(([label, value]) => (
                <div key={label} className="flex flex-col gap-1 rounded-xl border border-line p-3">
                  <span className="truncate text-[11px] font-semibold text-muted">{label}</span>
                  <span className="font-display text-base leading-none font-bold whitespace-nowrap text-navy sm:text-lg">{value}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-line p-4">
              <span className="text-xs font-bold text-navy">{t.chart}</span>
              <div className="mt-3 flex h-24 items-end gap-2">
                {bars.map((h, i) => (
                  <span key={i} className="flex-1 rounded-t-md bg-gradient-to-t from-ocean to-lagoon" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2.5">
              {[0, 1].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="size-6 shrink-0 rounded-full bg-sky-soft" />
                  <Bar className="flex-1" />
                  <Bar className={cn("w-10", i === 0 ? "bg-mint" : "bg-sky-soft")} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Window>
      <FloatCard
        icon="briefcase"
        tone="amber"
        title={t.approvalTitle}
        sub={t.approvalSub}
        className="-bottom-12 -left-16"
        action={<span className="ml-1 rounded-lg bg-ocean px-3 py-1.5 text-xs font-bold text-white">{t.approve}</span>}
      />
    </Stage>
  );
}

function GamesVisual({ t }: { t: VisualText["games"] }) {
  return (
    <Stage>
      <div className="rounded-[34px] bg-navy p-2.5 shadow-float ring-1 ring-white/15">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[26px]">
          <svg viewBox="0 0 320 180" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <linearGradient id="game-sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#0A3470" />
                <stop offset="1" stopColor="#0FA1D3" />
              </linearGradient>
            </defs>
            <rect width="320" height="180" fill="url(#game-sky)" />
            <circle cx="250" cy="44" r="20" fill="#7DEDE7" opacity="0.5" />
            <path d={ISLAND_PATH} fill="#042554" opacity="0.35" transform="translate(30 40) scale(0.95)" />
            <path d="M0 150Q40 140 80 150T160 150T240 150T320 150V180H0Z" fill="#1562C7" />
            <path d="M0 162Q40 154 80 162T160 162T240 162T320 162V180H0Z" fill="#11D7CF" opacity="0.8" />
            <rect x="34" y="118" width="70" height="10" rx="5" fill="#FFFFFF" opacity="0.9" />
            <rect x="132" y="92" width="58" height="10" rx="5" fill="#FFFFFF" opacity="0.9" />
            <rect x="216" y="112" width="66" height="10" rx="5" fill="#FFFFFF" opacity="0.9" />
            {[150, 162, 174].map((x) => (
              <circle key={x} cx={x} cy="78" r="4.5" fill="#FFD66B" />
            ))}
            <circle cx="244" cy="98" r="4.5" fill="#FFD66B" />
            <rect x="58" y="96" width="18" height="22" rx="6" fill="#11D7CF" />
            <circle cx="70" cy="104" r="2.6" fill="#042554" />
          </svg>
          <span className="absolute top-3 left-3 rounded-full bg-navy/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">{t.level}</span>
          <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-navy/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
            <Icon name="star" size={13} strokeWidth={2.4} className="text-aqua" />
            {t.score}
          </span>
          <span className="absolute right-3 bottom-3 flex size-11 items-center justify-center rounded-full bg-aqua text-navy shadow-glow">
            <svg viewBox="0 0 16 16" className="ml-0.5 size-4" fill="currentColor">
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
          </span>
          <span className="absolute bottom-3 left-3 font-display text-sm font-bold text-white/90">{t.title}</span>
        </div>
      </div>
      <FloatCard icon="game" tone="sky" title={t.storeTitle} sub={t.storeSub} className="-bottom-12 -left-12" />
    </Stage>
  );
}

function DesignVisual({ t }: { t: VisualText["design"] }) {
  const swatches = ["bg-navy", "bg-ocean", "bg-lagoon", "bg-aqua", "bg-mist"];
  const label = "text-[11px] font-bold text-muted";
  return (
    <Stage>
      <div className="grid grid-cols-2 gap-3 text-navy">
        <div className="col-span-2 flex items-center gap-4 rounded-3xl bg-white p-5 shadow-float ring-1 ring-white/10">
          <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-navy">
            <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="#11D7CF" strokeWidth="3" strokeLinecap="round">
              <path d="M8 28V18l6-6h12" />
              <circle cx="30" cy="12" r="4" />
              <path d="M18 30V22h14" />
            </svg>
          </span>
          <span className="flex flex-col gap-1">
            <span className="font-display text-2xl leading-none font-bold">{t.brand}</span>
            <span className={label}>{t.logo}</span>
          </span>
        </div>
        <div className="flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-float ring-1 ring-white/10">
          <span className={label}>{t.colors}</span>
          <span className="flex -space-x-2">
            {swatches.map((s) => (
              <span key={s} className={cn("size-9 rounded-full ring-2 ring-white", s)} />
            ))}
          </span>
        </div>
        <div className="flex flex-col gap-1 rounded-3xl bg-navy p-5 text-white shadow-float ring-1 ring-white/15">
          <span className="text-[11px] font-bold text-on-dark-3">{t.type}</span>
          <span className="font-display text-4xl leading-none font-bold">Aa</span>
          <span className="text-xs text-on-dark">Aa Bb Cc Çç Ğğ Şş</span>
        </div>
        <div className="relative flex min-h-[176px] flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-br from-ocean via-sea to-aqua p-4 text-white shadow-float">
          <svg viewBox="0 0 200 120" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice">
            <circle cx="150" cy="40" r="18" fill="#FFFFFF" opacity="0.35" />
            <path d="M0 92Q25 82 50 92T100 92T150 92T200 92V120H0Z" fill="#FFFFFF" opacity="0.18" />
            <path d="M0 104Q25 96 50 104T100 104T150 104T200 104V120H0Z" fill="#FFFFFF" opacity="0.18" />
          </svg>
          <span className="absolute top-3 left-3 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-bold backdrop-blur-sm">{t.post}</span>
          <span className="relative font-display text-lg leading-tight font-bold">{t.postText}</span>
        </div>
        <div className="flex flex-col justify-between gap-3 rounded-3xl bg-white p-5 shadow-float ring-1 ring-white/10">
          <span className={label}>{t.card}</span>
          <span className="flex flex-col gap-2">
            <span className="font-display text-base font-bold">{t.brand}</span>
            <Bar className="w-3/4" />
            <Bar className="w-1/2" />
          </span>
          <span className="h-1.5 w-12 rounded-full bg-aqua" />
        </div>
      </div>
    </Stage>
  );
}

function MarketingVisual({ t }: { t: VisualText["marketing"] }) {
  const channelDots = ["bg-ocean", "bg-lagoon", "bg-aqua"];
  return (
    <Stage>
      <Window>
        <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
          <span className="font-display text-base font-bold">{t.title}</span>
          <Chip>{t.period}</Chip>
        </div>
        <div className="grid grid-cols-3 gap-2.5 px-5 pt-5">
          {t.stats.map(([label, value]) => (
            <div key={label} className="flex flex-col gap-1 rounded-xl bg-mist p-3">
              <span className="text-[11px] font-semibold text-muted">{label}</span>
              <span className="flex items-center gap-1 font-display text-lg leading-none font-bold text-navy">
                {value}
                <Icon name="arrowRight" size={13} strokeWidth={2.6} className="-rotate-45 text-whatsapp" />
              </span>
            </div>
          ))}
        </div>
        <svg viewBox="0 0 300 110" className="mt-2 block h-[130px] w-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="mkt-area" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#1562C7" stopOpacity="0.28" />
              <stop offset="1" stopColor="#1562C7" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 92L30 86L60 88L90 72L120 76L150 58L180 62L210 42L240 46L270 26L300 18V110H0Z" fill="url(#mkt-area)" />
          <path d="M0 92L30 86L60 88L90 72L120 76L150 58L180 62L210 42L240 46L270 26L300 18" fill="none" stroke="#1562C7" strokeWidth="2.5" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        </svg>
        <div className="flex flex-wrap gap-2 border-t border-line px-5 py-4">
          {t.channels.map((c, i) => (
            <span key={c} className="flex items-center gap-1.5 rounded-full bg-mist px-3 py-1.5 text-xs font-bold text-body">
              <span className={cn("size-2 rounded-full", channelDots[i])} />
              {c}
            </span>
          ))}
        </div>
      </Window>
      <FloatCard icon="user" title={t.leadTitle} sub={t.leadSub} className="-bottom-14 -left-14" />
    </Stage>
  );
}

function HostingVisual({ t }: { t: VisualText["hosting"] }) {
  return (
    <Stage>
      <Window>
        <div className="flex flex-wrap items-center justify-between gap-3 bg-navy px-5 py-4 text-white">
          <span className="font-display text-base font-bold">{t.title}</span>
          <span className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-aqua-soft">
            <span className="size-2 rounded-full bg-aqua" />
            {t.status}
          </span>
        </div>
        <div className="flex flex-col gap-3 border-b border-line p-5">
          <span className="flex items-baseline justify-between">
            <span className="text-xs font-bold text-muted">{t.uptime}</span>
            <span className="font-display text-2xl font-bold text-navy">{t.uptimeValue}</span>
          </span>
          <span className="flex h-8 gap-[3px]">
            {Array.from({ length: 36 }, (_, i) => (
              <span key={i} className={cn("flex-1 rounded-sm", i === 21 ? "bg-aqua-soft" : "bg-lagoon/70")} />
            ))}
          </span>
        </div>
        <ul className="flex flex-col divide-y divide-line px-5">
          {t.checks.map(([label, value]) => (
            <li key={label} className="flex items-center gap-3 py-3.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-mint text-whatsapp">
                <Icon name="check" size={14} strokeWidth={3} />
              </span>
              <span className="flex-1 text-sm font-bold text-navy">{label}</span>
              <span className="text-xs font-semibold text-muted">{value}</span>
            </li>
          ))}
        </ul>
      </Window>
    </Stage>
  );
}

const visuals: Record<Exclude<ServiceId, "mobile">, (t: VisualText) => ReactNode> = {
  ai: (t) => <AiVisual t={t.ai} />,
  web: (t) => <WebVisual t={t.web} />,
  ecommerce: (t) => <EcommerceVisual t={t.ecommerce} />,
  custom: (t) => <CustomVisual t={t.custom} />,
  games: (t) => <GamesVisual t={t.games} />,
  design: (t) => <DesignVisual t={t.design} />,
  marketing: (t) => <MarketingVisual t={t.marketing} />,
  hosting: (t) => <HostingVisual t={t.hosting} />,
};

/** The hero illustration for a service page. */
export function ServiceVisual({ id, locale }: { id: ServiceId; locale: Locale }) {
  if (id === "mobile") return <PhoneMockup t={getDictionary(locale).visuals.phone} />;
  return visuals[id](getVisualText(locale));
}
