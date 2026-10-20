import type { Project } from "@/content/site";
import { cn } from "@/lib/cn";

function BrowserPlaceholder({ label }: { label: string }) {
  return (
    <div className="aspect-[16/10] bg-mist-2 px-[22px] pt-[22px]">
      <div className="flex h-full flex-col rounded-t-[10px] border border-b-0 border-[#d3e0ec] bg-white">
        <div className="flex gap-1.5 border-b border-[#e3ecf5] px-3 py-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-[9px] rounded-full bg-[#d3e0ec]" />
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center text-sm font-semibold text-muted">{label}</div>
      </div>
    </div>
  );
}

function PhonePlaceholder({ label }: { label: string }) {
  return (
    <div className="flex justify-center gap-[18px] bg-mist-2 px-7 pt-7">
      {[230, 200].map((h, i) => (
        <div
          key={h}
          className={cn(
            "flex w-[150px] items-center justify-center rounded-t-3xl border-[6px] border-b-0 border-navy bg-white p-2.5 text-center text-[13px] font-semibold text-muted",
            i === 1 && "self-end",
          )}
          style={{ height: h }}
        >
          {label}
        </div>
      ))}
    </div>
  );
}

type Props = { project: Project; screenshotLabel: string; kind?: "browser" | "phone" };

export function ProjectCard({ project, screenshotLabel, kind = "browser" }: Props) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[20px] border border-line bg-white transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-[#9cc3ea] hover:shadow-[0_18px_36px_-22px_rgba(4,37,84,0.35)]">
      {kind === "phone" ? <PhonePlaceholder label={screenshotLabel} /> : <BrowserPlaceholder label={screenshotLabel} />}
      <div className="flex flex-col gap-3 px-[26px] pt-6 pb-7">
        <span className="self-start rounded-lg bg-foam px-2.5 py-1 text-[13px] font-bold text-lagoon-deep">{project.tag}</span>
        <h3 className="text-xl font-bold text-navy">{project.title}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{project.summary}</p>
      </div>
    </article>
  );
}
