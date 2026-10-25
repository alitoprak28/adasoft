import { Container, Section } from "@/components/ui/layout";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

type Step = { title: string; text: string };

function StepNumber({ n, last }: { n: number; last: boolean }) {
  return (
    <span
      className={cn(
        "relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border font-display text-[17px] font-bold",
        last ? "border-navy bg-navy text-aqua" : "border-line-2 bg-white text-navy",
      )}
    >
      {String(n).padStart(2, "0")}
    </span>
  );
}

/** Horizontal timeline on wide screens, vertical list on phones. */
export function ProcessSteps({ steps, eyebrow, title, id }: { steps: Step[]; eyebrow: string; title: string; id: string }) {
  return (
    <Section id={id} tone="mist" aria-labelledby={`${id}-title`}>
      <Container className="flex flex-col gap-14 sm:gap-16">
        <SectionHeading id={`${id}-title`} eyebrow={eyebrow} title={title} layout="center" />
        <div className="relative">
          <div aria-hidden="true" className="absolute top-[27px] right-[10%] left-[10%] hidden h-px overflow-hidden bg-line-2 lg:block">
            <div className="step-run absolute top-0 left-0 h-px w-[90px] bg-gradient-to-r from-transparent via-ocean to-transparent" />
          </div>
          <ol className="relative grid gap-7 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="flex gap-5 lg:flex-col lg:items-center lg:gap-[18px] lg:text-center">
                <StepNumber n={i + 1} last={i === steps.length - 1} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-[19px] font-semibold text-navy">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}

/** Vertical numbered steps joined by a line; used next to other content. */
export function StepList({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute top-7 bottom-7 left-[25.5px] w-px bg-line-2" />
      <ol className="relative flex flex-col gap-7">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex items-start gap-5">
          <span
            className={cn(
              "flex size-[52px] shrink-0 items-center justify-center rounded-full border font-display text-base font-bold",
              i === steps.length - 1 ? "border-navy bg-navy text-aqua" : "border-line-2 bg-white text-navy",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="flex flex-col gap-1.5 pt-1">
            <h3 className="text-[19px] font-semibold text-navy">{step.title}</h3>
            <p className="text-[15.5px] leading-relaxed text-muted">{step.text}</p>
          </div>
        </li>
      ))}
      </ol>
    </div>
  );
}
