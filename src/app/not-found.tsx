import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="dots-light flex min-h-[60vh] items-center bg-mist px-5 py-24 sm:px-8">
      <div className="mx-auto flex max-w-[640px] flex-col items-center gap-6 text-center">
        <p className="text-sm font-extrabold tracking-[0.12em] text-lagoon-ink uppercase">404</p>
        <h1 className="text-[40px] leading-tight font-extrabold tracking-[-0.03em] text-navy sm:text-[52px]">Aradığınız sayfa bulunamadı.</h1>
        <p className="text-[17px] leading-relaxed text-body">Bağlantı değişmiş ya da sayfa kaldırılmış olabilir. Ana sayfadan devam edebilirsiniz.</p>
        <ButtonLink href="/" trailingArrow>
          Ana sayfaya dön
        </ButtonLink>
      </div>
    </section>
  );
}
