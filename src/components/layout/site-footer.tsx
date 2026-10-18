import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { services } from "@/content/services";
import { site } from "@/content/site";

const company = [
  { href: "/#hakkimizda", label: "Hakkımızda" },
  { href: "/#sektorler", label: "Sektörler" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/#teklif", label: "Teklif Al" },
];

const linkClass = "text-on-dark transition-colors hover:text-white";

export function SiteFooter() {
  return (
    <footer className="bg-navy-950 px-5 pt-18 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,minmax(0,1fr))]">
          <div className="flex flex-col gap-[18px]">
            <Link href="/" aria-label="AdaSoft ana sayfa" className="self-start">
              <Logo dark />
            </Link>
            <p className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.2em] text-on-dark-3">
              <span className="h-px w-[18px] bg-aqua" />
              {site.tagline}
              <span className="h-px w-[18px] bg-aqua" />
            </p>
            <p className="max-w-[320px] text-[15px] leading-relaxed text-on-dark">
              Kuzey Kıbrıs&apos;ta yazılımın her alanında: web, mobil, oyun, yapay zekâ ve işletmeye özel çözümler.
            </p>
          </div>

          <nav aria-label="Hizmetler" className="flex flex-col gap-3 text-[15px]">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">Hizmetler</h2>
            {services.map((s) => (
              <Link key={s.slug} href={`/hizmetler/${s.slug}`} className={linkClass}>
                {s.shortTitle ?? s.title}
              </Link>
            ))}
          </nav>

          <nav aria-label="Şirket" className="flex flex-col gap-3 text-[15px]">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">Şirket</h2>
            {company.map((l) => (
              <Link key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-[15px] text-on-dark">
            <h2 className="mb-1 text-sm font-extrabold tracking-[0.1em] text-white uppercase">İletişim</h2>
            <span>{site.contact.phoneDisplay}</span>
            <span>{site.contact.email}</span>
            <span>{site.contact.address}, KKTC</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 pt-7 text-sm text-on-dark-3">
          {/* Static year on purpose: the page is prerendered once at build time. */}
          <span>© 2026 AdaSoft. Tüm hakları saklıdır.</span>
          <span>Gizlilik Politikası · Çerez Politikası · Kişisel Verilerin Korunması</span>
        </div>
      </div>
    </footer>
  );
}
