import { Icon } from "@/components/ui/icon";
import { whatsappHref } from "@/content/site";

export function WhatsAppFab() {
  const href = whatsappHref("Merhaba, bir proje hakkında bilgi almak istiyorum.");
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label="WhatsApp'tan yazın"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-whatsapp px-4 text-[15.5px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(4,37,84,0.55)] transition-transform hover:-translate-y-px sm:right-6 sm:bottom-6 sm:px-5"
    >
      <Icon name="whatsapp" size={22} strokeWidth={2.1} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
