"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/cn";

const projectTypes = [
  "Web sitesi",
  "E-ticaret",
  "Mobil uygulama",
  "Özel yazılım",
  "Yapay zekâ",
  "Oyun",
  "Grafik tasarım",
  "Dijital pazarlama",
  "Henüz emin değilim",
];

const timings = [
  { label: "Hemen", sub: "Önümüzdeki birkaç hafta içinde" },
  { label: "1–3 ay içinde", sub: "Planlama aşamasındayız" },
  { label: "Henüz fikir aşamasında", sub: "Önce fikir alışverişi yapmak istiyorum" },
];

const primaryBtn =
  "inline-flex min-h-[50px] items-center gap-2.5 rounded-xl bg-ocean px-6 text-base font-bold text-white transition-colors hover:bg-ocean-700 disabled:cursor-not-allowed disabled:opacity-50";
const backBtn = "min-h-11 px-1.5 text-[15px] font-bold text-body hover:text-navy";
const inputClass =
  "min-h-[50px] w-full rounded-xl border-[1.5px] border-line-2 bg-white px-3.5 text-base text-navy outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/15";

export function QuoteWizard() {
  const [step, setStep] = useState(1);
  const [types, setTypes] = useState<string[]>([projectTypes[0]]);
  const [timing, setTiming] = useState(1);

  const toggleType = (t: string) => setTypes((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: send the request (e.g. a server action that emails it via Resend) once the inbox is decided.
    setStep(4);
  };

  const restart = () => {
    setStep(1);
    setTypes([projectTypes[0]]);
    setTiming(1);
  };

  return (
    <div className="flex flex-col gap-7 rounded-3xl border border-line bg-white p-6 shadow-[0_28px_56px_-36px_rgba(4,37,84,0.4)] sm:p-9">
      {step < 4 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between gap-3 text-sm font-bold text-muted">
            <span>Adım {step} / 3</span>
            <span>Yaklaşık 1 dakika</span>
          </div>
          <div
            role="progressbar"
            aria-label="Teklif formu ilerlemesi"
            aria-valuemin={1}
            aria-valuemax={3}
            aria-valuenow={step}
            className="h-1.5 overflow-hidden rounded-full bg-[#e3ecf5]"
          >
            <div className="h-full rounded-full bg-ocean transition-[width] duration-300" style={{ width: `${(step / 3) * 100}%` }} />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="flex flex-col gap-[22px]">
          <StepTitle title="Ne yaptırmak istiyorsunuz?" sub="Birden fazla seçebilirsiniz." />
          <div role="group" aria-label="Proje türü" className="flex flex-wrap gap-2.5">
            {projectTypes.map((t) => {
              const on = types.includes(t);
              return (
                <button
                  key={t}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleType(t)}
                  className={cn(
                    "inline-flex min-h-[46px] items-center gap-2 rounded-full border-[1.5px] px-[18px] text-[15px] font-bold transition-colors",
                    on ? "border-ocean bg-ocean text-white" : "border-line-2 bg-white text-navy hover:border-ocean",
                  )}
                >
                  {on && <Icon name="check" size={16} strokeWidth={3} />}
                  {t}
                </button>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button type="button" className={primaryBtn} disabled={types.length === 0} onClick={() => setStep(2)}>
              Devam et
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-[22px]">
          <StepTitle title="Ne zaman başlamak istersiniz?" sub="Bütçe ve takvimi ilk görüşmede birlikte netleştiririz." />
          <div role="radiogroup" aria-label="Başlangıç zamanı" className="flex flex-col gap-2.5">
            {timings.map((o, i) => {
              const on = timing === i;
              return (
                <button
                  key={o.label}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setTiming(i)}
                  className={cn(
                    "flex min-h-16 w-full items-center gap-3.5 rounded-[14px] border-[1.5px] px-[18px] py-3.5 text-left transition-colors",
                    on ? "border-ocean bg-[#eef5fd]" : "border-line-2 bg-white hover:border-ocean",
                  )}
                >
                  <span className={cn("flex size-[22px] shrink-0 items-center justify-center rounded-full border-2", on ? "border-ocean" : "border-line-3")}>
                    <span className={cn("size-2.5 rounded-full", on ? "bg-ocean" : "bg-transparent")} />
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-base font-bold text-navy">{o.label}</span>
                    <span className="text-sm text-muted">{o.sub}</span>
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between gap-3">
            <button type="button" className={backBtn} onClick={() => setStep(1)}>
              ← Geri
            </button>
            <button type="button" className={primaryBtn} onClick={() => setStep(3)}>
              Devam et
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="flex flex-col gap-[22px]" onSubmit={submit}>
          <StepTitle title="Size nasıl ulaşalım?" sub="Bilgileriniz yalnızca bu talep için kullanılır." />
          <div className="flex flex-col gap-4">
            <Field label="Ad Soyad">
              <input className={inputClass} name="ad" autoComplete="name" placeholder="Adınız ve soyadınız" required />
            </Field>
            <Field label="Telefon / WhatsApp">
              <input className={inputClass} name="telefon" type="tel" autoComplete="tel" placeholder="+90 5XX XXX XX XX" required />
            </Field>
            <Field label="E-posta (isteğe bağlı)">
              <input className={inputClass} name="eposta" type="email" autoComplete="email" placeholder="ornek@firma.com" />
            </Field>
            <input type="hidden" name="turler" value={types.join(", ")} />
            <input type="hidden" name="zaman" value={timings[timing].label} />
          </div>
          <div className="flex items-center justify-between gap-3">
            <button type="button" className={backBtn} onClick={() => setStep(2)}>
              ← Geri
            </button>
            <button type="submit" className={primaryBtn}>
              Teklif iste
            </button>
          </div>
        </form>
      )}

      {step === 4 && (
        <div role="status" className="flex flex-col items-start gap-[18px] py-3">
          <span className="flex size-16 items-center justify-center rounded-full bg-[#ddf5ea] text-whatsapp">
            <Icon name="check" size={30} strokeWidth={2.6} />
          </span>
          <h3 className="text-[26px] font-bold tracking-[-0.02em] text-navy">Teşekkürler!</h3>
          <p className="text-base leading-relaxed text-muted">Talebiniz bize ulaştı. [Bir iş günü] içinde sizi arayıp projenizi konuşacağız.</p>
          <button
            type="button"
            onClick={restart}
            className="min-h-[46px] rounded-xl border-[1.5px] border-line-3 bg-white px-[18px] text-[15px] font-bold text-navy hover:border-navy"
          >
            Yeni talep oluştur
          </button>
        </div>
      )}
    </div>
  );
}

function StepTitle({ title, sub }: { title: string; sub: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 className="text-2xl font-bold tracking-[-0.02em] text-navy">{title}</h3>
      <p className="text-[15px] text-muted">{sub}</p>
    </div>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-bold text-ink">
      {label}
      {children}
    </label>
  );
}
