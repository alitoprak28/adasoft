import { Icon } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { anchorHref } from "@/i18n/routes";
import { whatsappHref } from "@/content/site";

export function WhatsAppFab({ locale }: { locale: Locale }) {
  const d = getDictionary(locale).common;
  const href = whatsappHref(anchorHref(locale, "contact"), d.whatsappMessage);
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={d.whatsapp}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="fixed right-4 bottom-4 z-50 inline-flex min-h-[54px] items-center gap-2.5 rounded-full bg-whatsapp px-4 text-[15.5px] font-bold text-white shadow-[0_14px_30px_-12px_rgba(4,37,84,0.55)] transition-transform hover:-translate-y-px sm:right-6 sm:bottom-6 sm:px-5"
    >
      <Icon name="whatsapp" size={22} strokeWidth={2.1} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
