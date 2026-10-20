import { Icon, type IconName } from "@/components/ui/icon";
import type { Dictionary } from "@/i18n/dictionaries";

function CircuitBackdrop() {
  return (
    <svg viewBox="0 0 520 600" aria-hidden="true" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
      <g fill="none" stroke="#9CC3EA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M0 140H90L130 180" />
        <path d="M520 120H430L400 150" />
        <path d="M0 460H70L110 420" />
        <path d="M520 470H440L410 440" />
      </g>
      <g fill="#F2F7FB" stroke="#11D7CF" strokeWidth="2.5">
        <circle cx="134" cy="184" r="6" />
        <circle cx="396" cy="154" r="6" />
        <circle cx="114" cy="416" r="6" />
        <circle cx="406" cy="436" r="6" />
      </g>
    </svg>
  );
}

/** Illustrative phone screen for the mobile apps page. */
export function PhoneMockup({ t }: { t: Dictionary["visuals"]["phone"] }) {
  return (
    <div aria-hidden="true" className="relative flex justify-center py-3">
      <CircuitBackdrop />
      <div className="relative h-[590px] w-[290px] rounded-[46px] bg-navy p-3 shadow-[0_40px_80px_-40px_rgba(4,37,84,0.65)]">
        <div className="flex h-full flex-col overflow-hidden rounded-[36px] bg-mist">
          <div className="flex items-center justify-between bg-white px-5 pt-[30px] pb-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-semibold text-muted">{t.hello}</span>
              <span className="text-lg font-extrabold text-navy">{t.customer}</span>
            </div>
            <span className="size-[38px] rounded-full bg-sky-soft" />
          </div>
          <div className="flex flex-col gap-3 p-4">
            <div className="flex flex-col gap-2.5 rounded-[18px] bg-ocean p-4 text-white">
              <span className="text-xs font-bold text-[#cfe3fa]">{t.booking}</span>
              <span className="text-[17px] font-extrabold">{t.when}</span>
              <span className="text-[12.5px] text-[#dcebfb]">{t.party}</span>
              <span className="mt-1 self-start rounded-full bg-white px-3 py-1.5 text-xs font-extrabold text-ocean">{t.details}</span>
            </div>
            <span className="px-0.5 pt-1 text-[13px] font-extrabold text-navy">{t.offers}</span>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                [...t.offer1, "bg-foam"],
                [...t.offer2, "bg-sky-soft"],
              ].map(([title, sub, bg]) => (
                <div key={title} className="flex flex-col gap-1.5 rounded-2xl border border-[#e3ecf5] bg-white p-3.5">
                  <span className={`size-7 rounded-lg ${bg}`} />
                  <span className="text-[12.5px] font-bold text-navy">{title}</span>
                  <span className="text-[11px] text-muted">{sub}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#e3ecf5] bg-white px-3.5 py-3">
              <span className="size-8 rounded-[10px] bg-mist" />
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="text-[12.5px] font-bold text-navy">{t.orders}</span>
                <span className="text-[11px] text-muted">{t.lastOrder}</span>
              </span>
              <span className="text-sm text-line-3">›</span>
            </div>
          </div>
          <div className="mt-auto flex justify-around border-t border-[#e3ecf5] bg-white px-2.5 pt-3.5 pb-[18px]">
            {["bg-ocean", "bg-[#d3e0ec]", "bg-[#d3e0ec]", "bg-[#d3e0ec]"].map((c, i) => (
              <span key={i} className={`size-[22px] rounded-[7px] ${c}`} />
            ))}
          </div>
        </div>
      </div>
      <div className="float-y absolute top-[110px] left-[calc(50%_-_145px_-_200px)] hidden items-center gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 shadow-[0_20px_40px_-24px_rgba(4,37,84,0.45)] xl:flex">
        <span className="flex size-9 items-center justify-center rounded-[10px] bg-[#ddf5ea] text-whatsapp">
          <Icon name="bell" size={18} strokeWidth={2.2} />
        </span>
        <span className="flex flex-col gap-0.5">
          <span className="text-sm font-bold text-navy">{t.notification}</span>
          <span className="text-xs text-muted">{t.notificationSub}</span>
        </span>
      </div>
      <div className="float-y absolute bottom-[150px] left-[calc(50%_+_110px)] hidden items-center gap-2.5 rounded-full bg-navy px-4 py-3 text-white shadow-[0_20px_40px_-24px_rgba(4,37,84,0.6)] [animation-delay:-2s] xl:flex">
        <Icon name="check" size={18} strokeWidth={2.4} className="text-aqua" />
        <span className="text-sm font-bold whitespace-nowrap">{t.badge}</span>
      </div>
    </div>
  );
}

/** Illustrative hotel booking widget for the tourism page. */
export function BookingMockup({ t }: { t: Dictionary["visuals"]["booking"] }) {
  return (
    <figure aria-label={t.label} className="relative m-0 lg:pl-7">
      <div aria-hidden="true" className="overflow-hidden rounded-3xl border border-line bg-white shadow-[0_40px_80px_-40px_rgba(4,37,84,0.55)]">
        <div className="relative h-[210px] overflow-hidden bg-navy">
          <svg viewBox="0 0 400 210" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <circle cx="300" cy="102" r="30" fill="#11D7CF" opacity="0.35" />
            <path d="M0 150Q50 135 100 150T200 150T300 150T400 150V210H0Z" fill="#1562C7" />
            <path d="M0 172Q50 160 100 172T200 172T300 172T400 172V210H0Z" fill="#0FA1D3" />
          </svg>
          <div className="absolute inset-x-[18px] top-[18px] flex flex-wrap items-start justify-between gap-x-3 gap-y-2.5">
            <div className="flex min-w-0 flex-col gap-1 pt-0.5 pl-1">
              <span className="text-xl font-extrabold text-white">{t.hotel}</span>
              <span className="text-[13px] font-semibold text-on-dark">{t.place}</span>
            </div>
            <div className="flex shrink-0 gap-1 rounded-[10px] bg-white/12 p-[3px] text-xs font-bold text-[#dce6f2]">
              <span className="rounded-[7px] bg-white px-2 py-1 font-extrabold text-navy">TR</span>
              <span className="px-2 py-1">EN</span>
              <span className="px-2 py-1">DE</span>
              <span className="px-2 py-1">RU</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-6">
          <span className="text-xl font-extrabold text-navy">{t.title}</span>
          <div className="grid gap-2.5 sm:grid-cols-3">
            {[
              [t.checkIn, t.date],
              [t.checkOut, t.date],
              [t.guests, t.guestsValue],
            ].map(([l, v]) => (
              <div key={l} className="flex flex-col gap-1 rounded-xl border-[1.5px] border-line-2 px-3.5 py-3">
                <span className="text-xs font-bold text-muted">{l}</span>
                <span className="text-[15px] font-bold text-navy">{v}</span>
              </div>
            ))}
          </div>
          <span className="flex min-h-[50px] items-center justify-center rounded-xl bg-ocean text-base font-bold text-white">
            {t.button}
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-[13px] font-semibold text-body">
            {t.perks.map((perk) => (
              <span key={perk} className="flex items-center gap-1.5">
                <Icon name="check" size={16} strokeWidth={2.4} className="text-lagoon-ink" />
                {perk}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="float-y absolute top-[92px] -right-6 hidden w-[270px] flex-col gap-2 rounded-[18px] bg-navy p-3.5 shadow-[0_24px_48px_-24px_rgba(4,37,84,0.7)] xl:flex"
      >
        <span className="flex items-center gap-2 text-xs font-bold text-aqua-soft">
          <span className="size-2 rounded-full bg-aqua" />
          {t.assistant}
        </span>
        <span className="max-w-[88%] self-end rounded-xl rounded-br-[4px] bg-white/12 px-3 py-2 text-[13px] text-white">{t.question}</span>
        <span className="max-w-[88%] self-start rounded-xl rounded-bl-[4px] bg-aqua px-3 py-2 text-[13px] font-semibold text-navy">
          {t.answer}
        </span>
      </div>
      <figcaption className="sr-only">{t.caption}</figcaption>
    </figure>
  );
}

/** Generic visual for pages without a bespoke illustration: a large icon tile on a circuit backdrop. */
export function IconTileVisual({ icon, label }: { icon: IconName; label: string }) {
  return (
    <div aria-hidden="true" className="relative hidden min-h-[360px] items-center justify-center py-6 lg:flex">
      <CircuitBackdrop />
      <div className="relative flex flex-col items-center gap-5 rounded-[32px] border border-line bg-white px-14 py-12 shadow-[0_40px_80px_-40px_rgba(4,37,84,0.55)]">
        <span className="flex size-28 items-center justify-center rounded-[28px] bg-navy text-aqua">
          <Icon name={icon} size={56} strokeWidth={1.6} />
        </span>
        <span className="text-lg font-extrabold text-navy">{label}</span>
      </div>
    </div>
  );
}
