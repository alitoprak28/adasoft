import { Icon } from "@/components/ui/icon";
import { Container, Section } from "@/components/ui/layout";
import { Eyebrow, SectionTitle } from "@/components/ui/section-heading";
import { founders, values } from "@/content/site";

export function About() {
  return (
    <Section id="hakkimizda" aria-labelledby="hakkimizda-title">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>Biz kimiz</Eyebrow>
          <SectionTitle id="hakkimizda-title">Adayı bilen bir yazılım ekibi.</SectionTitle>
          <p className="text-[17px] leading-[1.7] text-body">
            AdaSoft, Kuzey Kıbrıs&apos;taki işletmelerin ihtiyaçlarını yakından bilen iki yazılımcının kurduğu bir yazılım şirketi.
            Web&apos;den mobile, oyundan yapay zekâya; büyük ajans süreçleri yerine doğrudan iletişim, şeffaf fiyat ve yayından sonra da
            yanınızda olan bir ekip.
          </p>
          <ul className="mt-2 flex flex-col gap-[18px]">
            {values.map((v) => (
              <li key={v.title} className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-soft text-ocean">
                  <Icon name={v.icon} size={22} strokeWidth={1.9} />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[17px] font-bold text-navy">{v.title}</h3>
                  <p className="text-[15.5px] leading-normal text-muted">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="grid gap-5 sm:grid-cols-2">
          {founders.map((f, i) => (
            <li key={i} className="flex flex-col gap-4 rounded-[20px] border border-line bg-white p-[18px] pb-6">
              <div className="flex aspect-square flex-col items-center justify-center gap-2.5 rounded-[14px] bg-mist-2 text-[#7c93b0]">
                <Icon name="user" size={56} strokeWidth={1.4} />
                <span className="text-sm font-semibold text-muted">[Fotoğraf]</span>
              </div>
              <div className="flex flex-col gap-1 px-1.5">
                <h3 className="text-[19px] font-bold text-navy">{f.name}</h3>
                <p className="text-[14.5px] text-muted">{f.role}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
