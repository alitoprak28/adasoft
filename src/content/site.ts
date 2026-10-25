// Company-wide facts. Values in [brackets] are placeholders the founders still need to fill in.
import type { StaticImageData } from "next/image";
import type { IconName } from "@/components/ui/icon";
import kayaPlusShot from "@/assets/projects/kaya-plus.webp";
import makasUsturaShot from "@/assets/projects/makas-ustura.webp";
import mesaryaShot from "@/assets/projects/mesarya-motors.webp";
import type { Locale } from "@/i18n/config";

export const site = {
  name: "AdaSoft",
  // TODO: replace with the real domain before going live.
  url: "https://www.adasoft.example",
  tagline: "NORTHERN CYPRUS | KKTC",
  // No office address: customers reach us on WhatsApp or by phone.
  contact: {
    phoneDisplay: "+90 533 856 71 35",
    // Digits only, with country code. Every WhatsApp button and the quote form send here.
    whatsappNumber: "905338567135",
    // Empty until there is a company inbox; e-mail lines stay hidden while it is empty.
    email: "" as string,
  },
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

/** Base WhatsApp chat URL, or null while no number is configured. */
export const whatsappBase: string | null = site.contact.whatsappNumber ? `https://wa.me/${site.contact.whatsappNumber}` : null;

/** WhatsApp chat link, or the given fallback (the contact section) until a number is configured. */
export function whatsappHref(fallback: string, message?: string) {
  if (!whatsappBase) return fallback;
  return message ? `${whatsappBase}?text=${encodeURIComponent(message)}` : whatsappBase;
}

/** Phone and e-mail links built from the displayed values, so each is filled in once. */
export const phoneHref = `tel:${site.contact.phoneDisplay.replace(/[^+\d]/g, "")}`;
export const emailHref = `mailto:${site.contact.email}`;

export type Project = {
  tag: string;
  title: string;
  summary: string;
  /** Live site, opened in a new tab. */
  href?: string;
  image?: { src: StaticImageData; alt: string };
};
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
    projects: [
      {
        tag: "Otomotiv",
        title: "Mesarya Motors · Araç galerisi sitesi",
        summary:
          "İkinci el araç galerisi için canlı stok vitrini: marka ve bütçe filtresi, peşin fiyatın yanında aylık ödeme, araç karşılaştırma, takas değerleme formu ve tek dokunuşla WhatsApp'tan soru.",
        href: "https://aracgaleri.vercel.app/",
        image: { src: mesaryaShot, alt: "Mesarya Motors sitesinin ana sayfası" },
      },
      {
        tag: "Mali danışmanlık",
        title: "Kaya Plus · Kurumsal web sitesi",
        summary:
          "KKTC'de şirket kuruluşu, muhasebe ve vergi danışmanlığı yapan firmanın dört dilli (TR, EN, RU, FA) sitesi: şirket yapılarını karşılaştırma, kuruluş maliyet planlayıcısı ve vergi rehberi.",
        href: "https://kayaplus.net/kktc-sirket-kurma.html",
        image: { src: kayaPlusShot, alt: "Kaya Plus sitesinin ana sayfası" },
      },
      {
        tag: "Berber ve kuaför",
        title: "Makas & Ustura · Online randevu sistemi",
        summary:
          "Erkek berberi için uygulama indirmeden, şifresiz online randevu: berber ve hizmet seçimi, gün ve saat, WhatsApp'tan onay ve hatırlatma. Seçilen saç modeli randevuya not olarak düşüyor; berberlerin kendi paneli var.",
        href: "https://berberuygulama.vercel.app/",
        image: { src: makasUsturaShot, alt: "Makas & Ustura sitesinin ana sayfası" },
      },
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
      {
        tag: "Automotive",
        title: "Mesarya Motors · Car dealership website",
        summary:
          "A live stock showroom for a used car dealership: brand and budget filters, monthly payments next to cash prices, side-by-side comparison, a trade-in valuation form and one-tap WhatsApp enquiries.",
        href: "https://aracgaleri.vercel.app/",
        image: { src: mesaryaShot, alt: "Mesarya Motors website home page" },
      },
      {
        tag: "Financial advisory",
        title: "Kaya Plus · Corporate website",
        summary:
          "A four-language (TR, EN, RU, FA) site for a Northern Cyprus firm offering company formation, accounting and tax advice: a company structure comparison, a set-up cost planner and a tax guide.",
        href: "https://kayaplus.net/kktc-sirket-kurma.html",
        image: { src: kayaPlusShot, alt: "Kaya Plus website home page" },
      },
      {
        tag: "Barbers & salons",
        title: "Makas & Ustura · Online booking system",
        summary:
          "No-app, no-password online booking for a men's barber: pick a barber and service, a day and time, then confirm on WhatsApp with a reminder. The chosen haircut style is added to the booking as a note, and barbers get their own panel.",
        href: "https://berberuygulama.vercel.app/",
        image: { src: makasUsturaShot, alt: "Makas & Ustura website home page" },
      },
    ],
  },
};

export function getSiteText(locale: Locale) {
  return text[locale];
}
