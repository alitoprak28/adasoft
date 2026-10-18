// Company-wide facts. Values in [brackets] are placeholders the founders still need to fill in.

export const site = {
  name: "AdaSoft",
  // TODO: replace with the real domain before going live.
  url: "https://www.adasoft.example",
  slogan: "Adanın yazılım ortağı.",
  description:
    "AdaSoft, Kuzey Kıbrıs'ta web, mobil, oyun, yapay zekâ ve işinize özel yazılımlar geliştiren bir yazılım şirketi. Fikirden yayına kadar yanınızdayız.",
  tagline: "NORTHERN CYPRUS | KKTC",
  contact: {
    phoneDisplay: "[+90 5XX XXX XX XX]",
    // Digits only, with country code (e.g. "905331234567"). Empty until the real number is known.
    whatsappNumber: "",
    email: "[info@alanadiniz.com]",
    address: "[Ofis adresi]",
  },
  social: {
    instagram: "",
    linkedin: "",
  },
} as const;

/** WhatsApp chat link, or the contact section until a number is configured. */
export function whatsappHref(message?: string) {
  const number = site.contact.whatsappNumber;
  if (!number) return "/#iletisim";
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

export const trustPoints = ["Yüz yüze görüşme", "Türkçe ve English", "Yayından sonra destek"];

export const processSteps = [
  { title: "Keşif", text: "Bir kahve eşliğinde işinizi, hedeflerinizi ve bütçenizi dinliyoruz." },
  { title: "Tasarım", text: "Ekranları birlikte çiziyoruz; onayınız olmadan koda geçmiyoruz." },
  { title: "Geliştirme", text: "Her hafta ilerlemeyi canlı bir önizleme linkinden takip edersiniz." },
  { title: "Yayın", text: "Sunucu, mağaza ve Google kayıtları dahil, yayına almayı biz üstleniyoruz." },
  { title: "Destek", text: "Yayından sonra da buradayız: bakım, güncelleme, yeni özellikler." },
];

export const values = [
  { icon: "chat", title: "Doğrudan iletişim", text: "Projenizi yazan kişiyle konuşursunuz; arada aracı yok." },
  { icon: "receipt", title: "Şeffaf fiyat", text: "Teklifte ne yazıyorsa o. Sürpriz maliyet yok." },
  { icon: "lifebuoy", title: "Kalıcı destek", text: "Yayından sonra kaybolmuyoruz; bakım ve geliştirme sürüyor." },
] as const;

export const founders = [
  { name: "[Ad Soyad]", role: "Kurucu Ortak · [Uzmanlık alanı]", linkedin: "" },
  { name: "[Ad Soyad]", role: "Kurucu Ortak · [Uzmanlık alanı]", linkedin: "" },
];

export type Project = { tag: string; title: string; summary: string };

// Placeholder case studies until the first real projects are written up.
export const projects: Project[] = [
  {
    tag: "Turizm ve Otel",
    title: "[Otel adı] · Rezervasyon sitesi",
    summary: "[Kısa özet: müşterinin sorunu, kurduğumuz çözüm ve elde edilen sonuç.]",
  },
  {
    tag: "Mobil Uygulama",
    title: "[Uygulama adı] · Mobil uygulama",
    summary: "[Kısa özet: müşterinin sorunu, kurduğumuz çözüm ve elde edilen sonuç.]",
  },
  {
    tag: "Oyun",
    title: "[Oyun adı] · Mobil oyun",
    summary: "[Kısa özet: oyunun türü, platformlar ve yayın bilgisi.]",
  },
];
