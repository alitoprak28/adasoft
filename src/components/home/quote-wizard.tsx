"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode, type Ref } from "react";
import { Icon } from "@/components/ui/icon";
import type { Dictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

/** Wizard copy with the step labels pre-rendered (functions can't cross to the client). */
export type WizardStrings = Omit<Dictionary["wizard"], "step"> & { stepLabels: string[] };

const primaryBtn =
  "inline-flex min-h-[50px] items-center gap-2.5 rounded-xl bg-ocean px-5 text-base font-bold sm:px-6 text-white transition-colors hover:bg-ocean-700 disabled:cursor-not-allowed disabled:opacity-50";
const backBtn = "min-h-11 px-1.5 text-[15px] font-bold whitespace-nowrap text-body hover:text-navy";
const inputClass =
  "min-h-[50px] w-full rounded-xl border-[1.5px] border-line-2 bg-white px-3.5 text-base text-navy outline-none focus:border-ocean focus:ring-4 focus:ring-ocean/15";

type Props = {
  t: WizardStrings;
  /** wa.me link the request is sent to; null while no number is configured. */
  whatsappBase: string | null;
  consentHref: string;
};

export function QuoteWizard({ t, whatsappBase, consentHref }: Props) {
  const [step, setStep] = useState(1);
  const [types, setTypes] = useState<number[]>([0]);
  const [timing, setTiming] = useState(1);
  const [whatsappUrl, setWhatsappUrl] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const stepChanged = useRef(false);

  // On a phone the next step can open above the screen (the cards shrink). Bring the card back into
  // view and move focus to the new question so screen readers announce it.
  useEffect(() => {
    if (!stepChanged.current) return;
    stepChanged.current = false;
    headingRef.current?.focus({ preventScroll: true });
    if (cardRef.current && cardRef.current.getBoundingClientRect().top < 0) cardRef.current.scrollIntoView({ block: "start" });
  }, [step]);

  const goTo = (next: number) => {
    stepChanged.current = true;
    setStep(next);
  };

  const toggleType = (i: number) => setTypes((cur) => (cur.includes(i) ? cur.filter((x) => x !== i) : [...cur, i]));

  // The request is not stored anywhere: it becomes a WhatsApp message the visitor sends themselves.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const field = (name: string) => String(form.get(name) ?? "").trim();
    const lines = [
      t.waGreeting,
      "",
      `${t.waNeeds}: ${types.map((i) => t.types[i]).join(", ")}`,
      `${t.waTiming}: ${t.timings[timing].label}`,
      `${t.waName}: ${field("name")}`,
      `${t.waPhone}: ${field("phone")}`,
    ];
    if (field("email")) lines.push(`${t.waEmail}: ${field("email")}`);
    if (whatsappBase) {
      const url = `${whatsappBase}?text=${encodeURIComponent(lines.join("\n"))}`;
      setWhatsappUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
    }
    goTo(4);
  };

  const restart = () => {
    goTo(1);
    setTypes([0]);
    setTiming(1);
    setWhatsappUrl(null);
  };

  return (
    <div ref={cardRef} className="flex scroll-mt-4 flex-col gap-7 rounded-3xl border border-line bg-white p-6 shadow-[0_28px_56px_-36px_rgba(4,37,84,0.4)] sm:p-9">
      {step < 4 && (
        <div className="flex flex-col gap-2.5">
          <div className="flex justify-between gap-3 text-sm font-bold text-muted">
            <span>{t.stepLabels[step - 1]}</span>
            <span>{t.duration}</span>
          </div>
          <div
            role="progressbar"
            aria-label={t.progressLabel}
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
          <StepTitle ref={headingRef} title={t.q1} sub={t.q1Sub} />
          <div role="group" aria-label={t.typesLabel} className="flex flex-wrap gap-2.5">
            {t.types.map((label, i) => {
              const on = types.includes(i);
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleType(i)}
                  className={cn(
                    "inline-flex min-h-[46px] items-center gap-2 rounded-full border-[1.5px] px-[18px] text-[15px] font-bold transition-colors",
                    on ? "border-ocean bg-ocean text-white" : "border-line-2 bg-white text-navy hover:border-ocean",
                  )}
                >
                  {on && <Icon name="check" size={16} strokeWidth={3} />}
                  {label}
                </button>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button type="button" className={primaryBtn} disabled={types.length === 0} onClick={() => goTo(2)}>
              {t.next}
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col gap-[22px]">
          <StepTitle ref={headingRef} title={t.q2} sub={t.q2Sub} />
          <div role="radiogroup" aria-label={t.timingLabel} className="flex flex-col gap-2.5">
            {t.timings.map((o, i) => {
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
            <button type="button" className={backBtn} onClick={() => goTo(1)}>
              {t.back}
            </button>
            <button type="button" className={primaryBtn} onClick={() => goTo(3)}>
              {t.next}
              <Icon name="arrowRight" size={18} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <form className="flex flex-col gap-[22px]" onSubmit={submit}>
          <StepTitle ref={headingRef} title={t.q3} sub={t.q3Sub} />
          <div className="flex flex-col gap-4">
            <Field label={t.name}>
              <input className={inputClass} name="name" autoComplete="name" placeholder={t.namePlaceholder} required />
            </Field>
            <Field label={t.phone}>
              <input className={inputClass} name="phone" type="tel" autoComplete="tel" placeholder="+90 5XX XXX XX XX" required />
            </Field>
            <Field label={t.email}>
              <input className={inputClass} name="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} />
            </Field>
            <label className="flex items-start gap-3 py-1 text-sm leading-relaxed text-body">
              <input type="checkbox" name="consent" required className="mt-0.5 size-5 shrink-0 accent-ocean" />
              <span>
                {t.consentBefore}
                <a href={consentHref} target="_blank" rel="noopener" className="font-bold text-ocean underline underline-offset-2 hover:text-ocean-700">
                  {t.consentLink}
                </a>
                {t.consentAfter}
              </span>
            </label>
          </div>
          <div className="flex flex-col gap-3">
            {/* Phones: full-width send button with Back underneath, so neither label wraps. */}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
              <button type="button" className={cn(backBtn, "self-start")} onClick={() => goTo(2)}>
                {t.back}
              </button>
              <button type="submit" className={cn(primaryBtn, "justify-center whitespace-nowrap max-sm:px-4")}>
                <Icon name="whatsapp" size={20} strokeWidth={2.1} />
                {t.submit}
              </button>
            </div>
            <p className="text-[13px] leading-snug text-muted sm:text-right">{t.sendNote}</p>
          </div>
        </form>
      )}

      {step === 4 && (
        <div role="status" className="flex flex-col items-start gap-[18px] py-3">
          <span className="flex size-16 items-center justify-center rounded-full bg-[#ddf5ea] text-whatsapp">
            <Icon name="check" size={30} strokeWidth={2.6} />
          </span>
          <h3 ref={headingRef} tabIndex={-1} className="text-[26px] font-bold tracking-[-0.02em] text-navy outline-none">
            {t.thanks}
          </h3>
          <p className="text-base leading-relaxed text-muted">{t.thanksText}</p>
          {whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-[15px] font-bold text-ocean hover:text-ocean-700">
              <Icon name="whatsapp" size={18} strokeWidth={2.1} />
              {t.reopen}
            </a>
          )}
          <button
            type="button"
            onClick={restart}
            className="min-h-[46px] rounded-xl border-[1.5px] border-line-3 bg-white px-[18px] text-[15px] font-bold text-navy hover:border-navy"
          >
            {t.restart}
          </button>
        </div>
      )}
    </div>
  );
}

function StepTitle({ ref, title, sub }: { ref: Ref<HTMLHeadingElement>; title: string; sub: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <h3 ref={ref} tabIndex={-1} className="text-2xl font-bold tracking-[-0.02em] text-navy outline-none">
        {title}
      </h3>
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
