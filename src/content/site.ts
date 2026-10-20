// Company-wide facts. Values in [brackets] are placeholders the founders still need to fill in.
import type { IconName } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";

export const site = {
  name: "AdaSoft",
  // TODO: replace with the real domain before going live.
  url: "https://www.adasoft.example",
  tagline: "NORTHERN CYPRUS | KKTC",
  contact: {
    phoneDisplay: "[+90 5XX XXX XX XX]",
    // Digits only, with country code (e.g. "905331234567"). Empty until the real number is known.
    whatsappNumber: "",
    email: "[info@alanadiniz.com]",
    address: { tr: "[Ofis adresi], KKTC", en: "[Office address], Northern Cyprus" },
  },
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

/** WhatsApp chat link, or the given fallback (the contact section) until a number is configured. */
export function whatsappHref(fallback: string, message?: string) {
  const number = site.contact.whatsappNumber;
  if (!number) return fallback;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

/** Phone and e-mail links built from the displayed values, so each is filled in once. */
export const phoneHref = `tel:${site.contact.phoneDisplay.replace(/[^+\d]/g, "")}`;
export const emailHref = `mailto:${site.contact.email}`;

export type Project = { tag: string; title: string; summary: string };
type Step = { title: string; text: string };

type SiteText = {
  description: string;
  trustPoints: string[];
  processSteps: Step[];
  values: { icon: IconName; title: string; text: string }[];
  founders: { name: string; role: string }[];
  projects: Project[];
};

const text: Record<Locale, SiteText> = {
  tr: {
    description:
      "AdaSoft, Kuzey Kıbrıs'ta web, mobil, oyun, yapay zekâ ve işinize özel yazılımlar geliştiren bir yazılım şirketi. Fikirden yayına kadar yanınızdayız.",
    trustPoints: ["Yüz yüze görüşme", "Türkçe ve English", "Yayından sonra destek"],
    processSteps: [
      { title: "Keşif", text: "Bir kahve eşliğinde işinizi, hedeflerinizi ve bütçenizi dinliyoruz." },
      { title: "Tasarım", text: "Ekranları birlikte çiziyoruz; onayınız olmadan koda geçmiyoruz." },
      { title: "Geliştirme", text: "Her hafta ilerlemeyi canlı bir önizleme linkinden takip edersiniz." },
      { title: "Yayın", text: "Sunucu, mağaza ve Google kayıtları dahil, yayına almayı biz üstleniyoruz." },
      { title: "Destek", text: "Yayından sonra da buradayız: bakım, güncelleme, yeni özellikler." },
    ],
    values: [
      { icon: "chat", title: "Doğrudan iletişim", text: "Projenizi yazan kişiyle konuşursunuz; arada aracı yok." },
      { icon: "receipt", title: "Şeffaf fiyat", text: "Teklifte ne yazıyorsa o. Sürpriz maliyet yok." },
      { icon: "lifebuoy", title: "Kalıcı destek", text: "Yayından sonra kaybolmuyoruz; bakım ve geliştirme sürüyor." },
    ],
    founders: [
      { name: "[Ad Soyad]", role: "Kurucu Ortak · [Uzmanlık alanı]" },
      { name: "[Ad Soyad]", role: "Kurucu Ortak · [Uzmanlık alanı]" },
    ],
    // Placeholder case studies until the first real projects are written up.
    projects: [
      { tag: "Turizm ve Otel", title: "[Otel adı] · Rezervasyon sitesi", summary: "[Kısa özet: müşterinin sorunu, kurduğumuz çözüm ve elde edilen sonuç.]" },
      { tag: "Mobil Uygulama", title: "[Uygulama adı] · Mobil uygulama", summary: "[Kısa özet: müşterinin sorunu, kurduğumuz çözüm ve elde edilen sonuç.]" },
      { tag: "Oyun", title: "[Oyun adı] · Mobil oyun", summary: "[Kısa özet: oyunun türü, platformlar ve yayın bilgisi.]" },
    ],
  },
  en: {
    description:
      "AdaSoft is a software company in Northern Cyprus building websites, mobile apps, games, AI and custom software. With you from first idea to launch.",
    trustPoints: ["Meet in person", "Turkish and English", "Support after launch"],
    processSteps: [
      { title: "Discovery", text: "Over a coffee, we listen to your business, your goals and your budget." },
      { title: "Design", text: "We sketch the screens together and don't write code until you approve them." },
      { title: "Development", text: "Every week you follow progress on a live preview link." },
      { title: "Launch", text: "Servers, app stores and Google listings included: we take care of going live." },
      { title: "Support", text: "We're still here after launch: maintenance, updates and new features." },
    ],
    values: [
      { icon: "chat", title: "Direct communication", text: "You talk to the person writing your software, with no middlemen." },
      { icon: "receipt", title: "Transparent pricing", text: "What the quote says is what you pay. No surprise costs." },
      { icon: "lifebuoy", title: "Lasting support", text: "We don't disappear after launch; maintenance and development continue." },
    ],
    founders: [
      { name: "[Full name]", role: "Co-founder · [Area of expertise]" },
      { name: "[Full name]", role: "Co-founder · [Area of expertise]" },
    ],
    projects: [
      { tag: "Tourism & Hotels", title: "[Hotel name] · Booking website", summary: "[Short summary: the client's problem, our solution and the result.]" },
      { tag: "Mobile App", title: "[App name] · Mobile app", summary: "[Short summary: the client's problem, our solution and the result.]" },
      { tag: "Game", title: "[Game name] · Mobile game", summary: "[Short summary: genre, platforms and release details.]" },
    ],
  },
};

export function getSiteText(locale: Locale) {
  return text[locale];
}
