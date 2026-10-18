import type { IconName } from "@/components/ui/icon";
import type { Faq } from "./services";

export type SectorSolution = {
  icon: IconName;
  title: string;
  text?: string;
  /** Slug of the related service page. */
  service: string;
  highlight?: boolean;
};

export type Sector = {
  slug: string;
  icon: IconName;
  title: string;
  /** Card and dropdown line. */
  summary: string;
  menuLine: string;
  lead: string;
  trust?: string[];
  problemsTitle?: string;
  problems?: { title: string; text: string }[];
  solutions: SectorSolution[];
  audience?: { title: string; text: string; items: string[]; example: { title: string; summary: string } };
  faqTitle?: string;
  faq?: Faq[];
  visual?: "booking";
  ctaTitle?: string;
  metaDescription: string;
};

export const sectors: Sector[] = [
  {
    slug: "turizm-otel",
    icon: "bed",
    title: "Turizm ve Otel",
    summary: "Çok dilli site, direkt rezervasyon, misafir asistanı.",
    menuLine: "Direkt rezervasyon, misafir asistanı",
    lead: "Yabancı misafire kendi dilinde ulaşın, komisyonsuz direkt rezervasyon alın ve operasyonu tek ekrandan yönetin.",
    trust: ["Çok dilli", "Komisyonsuz rezervasyon", "Kanal yöneticisi uyumlu"],
    visual: "booking",
    problemsTitle: "Otelcilerin en sık yaşadığı üç sorun",
    problems: [
      { title: "Rezervasyonların çoğu komisyonlu sitelerden geliyor", text: "Her rezervasyonda kazancınızın bir kısmı aracı platformlara gidiyor; misafirle doğrudan ilişki kuramıyorsunuz." },
      { title: "Yabancı misafirle iletişim zor", text: "Misafirler sorularına kendi dillerinde ve hemen yanıt bekliyor; gece gelen mesajlar sabaha kalıyor." },
      { title: "Operasyon dağınık", text: "Rezervasyonlar, oda durumu ve ödemeler farklı ekranlarda, defterlerde ve mesajlarda takip ediliyor." },
    ],
    solutions: [
      { icon: "globe", title: "Çok dilli otel web sitesi", text: "Odalarınızı ve tesisinizi misafirin dilinde, hızlı açılan ve Google'da bulunan bir sitede anlatın.", service: "web-siteleri" },
      { icon: "calendarCheck", title: "Direkt rezervasyon ve ödeme", text: "Komisyonsuz rezervasyon motoru; kartla ödeme, ön ödeme ve iptal kuralları sizin kontrolünüzde.", service: "ozel-yazilim" },
      { icon: "refresh", title: "Kanal yöneticisi entegrasyonu", text: "Oda müsaitliği ve fiyatlar tüm satış kanallarında senkron kalır; çift rezervasyon derdi biter.", service: "ozel-yazilim" },
      { icon: "ai", title: "Yapay zekâ misafir asistanı", text: "Sık sorulan soruları günün her saati, misafirin kendi dilinde yanıtlar; rezervasyona yönlendirir.", service: "yapay-zeka", highlight: true },
      { icon: "mobile", title: "Misafir uygulaması", text: "Online check-in, oda servisi, tesis bilgileri ve kampanyalar misafirin cebinde.", service: "mobil-uygulama" },
      { icon: "megaphone", title: "Görünürlük ve reklam", text: "Google Haritalar, sosyal medya ve hedefli reklamlarla doğru ülkeden doğru misafire ulaşın.", service: "dijital-pazarlama" },
    ],
    audience: {
      title: "Konaklama ve turizmin her ölçeği",
      text: "Tek bir butik otelden büyük tesislere, tur firmalarından villa kiralamaya kadar.",
      items: ["Oteller", "Butik oteller", "Apart ve villa kiralama", "Tur ve transfer firmaları", "Seyahat acenteleri"],
      example: { title: "[Otel adı] · Direkt rezervasyon sitesi", summary: "[Sorun, çözüm ve sonuç: kısa açıklama]" },
    },
    faqTitle: "Otelcilerin soruları",
    faq: [
      { q: "Rezervasyon platformlarıyla birlikte çalışır mı?", a: "Evet. Kanal yöneticisi entegrasyonuyla oda müsaitliği tüm kanallarda güncel kalır; direkt rezervasyonlar da aynı sisteme düşer." },
      { q: "Site kaç dilde olabilir?", a: "İhtiyacınız kadar. Misafir profilinize göre birlikte seçiyoruz; KKTC'deki tesislerde Türkçe, İngilizce, Almanca ve Rusça sık tercih ediliyor." },
      { q: "Mevcut sitemi yenileyebilir misiniz?", a: "Evet. İçeriğinizi taşıyor, Google sıralamanızı korumak için eski adresleri yenilerine yönlendiriyoruz." },
      { q: "Fiyat nasıl belirleniyor?", a: "Oda sayısı, dil sayısı ve entegrasyonlara göre. Paketler [₺ başlangıç fiyatı]'ndan başlar; keşif görüşmesinden sonra sabit fiyatlı teklif veriyoruz." },
    ],
    ctaTitle: "Oteliniz için konuşalım.",
    metaDescription:
      "KKTC'deki oteller için çok dilli web sitesi, komisyonsuz direkt rezervasyon, kanal yöneticisi entegrasyonu ve yapay zekâ misafir asistanı. AdaSoft.",
  },
  {
    slug: "emlak",
    icon: "home",
    title: "Emlak",
    summary: "Çok dilli ilan siteleri, CRM ve ödeme planı hesaplayıcı.",
    menuLine: "Çok dilli ilan siteleri, CRM",
    lead: "Yurt dışındaki alıcıya projelerinizi güvenle tanıtın, gelen talepleri tek yerden takip edin.",
    solutions: [
      { icon: "globe", title: "Çok dilli ilan ve proje sitesi", service: "web-siteleri" },
      { icon: "pin", title: "Harita ve filtreli arama", service: "web-siteleri" },
      { icon: "user", title: "Müşteri takip (CRM) paneli", service: "ozel-yazilim" },
      { icon: "receipt", title: "Taksit ve ödeme planı hesaplayıcı", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki emlak firmaları için çok dilli ilan siteleri, CRM ve ödeme planı hesaplayıcı. AdaSoft.",
  },
  {
    slug: "insaat-mimarlik",
    icon: "building",
    title: "İnşaat ve Mimarlık",
    summary: "Proje tanıtım siteleri, daire seçimi, şantiye takibi.",
    menuLine: "Proje tanıtımı, şantiye takibi",
    lead: "Projelerinizi temel atılmadan alıcıya gösterin, şantiyeyi uzaktan takip edin.",
    solutions: [
      { icon: "web", title: "Proje tanıtım ve satış sitesi", service: "web-siteleri" },
      { icon: "home", title: "Daire seçimi ve müsaitlik tablosu", service: "ozel-yazilim" },
      { icon: "building", title: "Şantiye ilerleme takibi", service: "mobil-uygulama" },
      { icon: "receipt", title: "Teklif ve hakediş takip paneli", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki inşaat ve mimarlık firmaları için proje tanıtım siteleri, daire seçimi ve şantiye takibi. AdaSoft.",
  },
  {
    slug: "egitim",
    icon: "cap",
    title: "Eğitim",
    summary: "Online başvuru, öğrenci portalı, yurt rezervasyonu.",
    menuLine: "Online başvuru, öğrenci portalı",
    lead: "Öğrenci adaylarına hızlı ulaşın, başvuruları tek yerden yönetin.",
    solutions: [
      { icon: "receipt", title: "Online başvuru sistemi", service: "ozel-yazilim" },
      { icon: "user", title: "Öğrenci ve veli portalı", service: "ozel-yazilim" },
      { icon: "calendar", title: "Kurs ve sınav takvimi", service: "web-siteleri" },
      { icon: "bed", title: "Yurt ve oda rezervasyonu", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki okullar, kurslar ve yurtlar için online başvuru, öğrenci portalı ve rezervasyon sistemleri. AdaSoft.",
  },
  {
    slug: "saglik",
    icon: "health",
    title: "Sağlık",
    summary: "Klinik siteleri, online randevu, sağlık turizmi sayfaları.",
    menuLine: "Online randevu, klinik siteleri",
    lead: "Hastalarınıza güven verin, randevuları kaçırmayın.",
    solutions: [
      { icon: "web", title: "Klinik web sitesi", service: "web-siteleri" },
      { icon: "calendarCheck", title: "Online randevu ve hatırlatma", service: "ozel-yazilim" },
      { icon: "globe", title: "Sağlık turizmi için çok dilli sayfalar", service: "web-siteleri" },
      { icon: "receipt", title: "Dijital hasta bilgi formları", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki klinikler için web sitesi, online randevu ve sağlık turizmi sayfaları. AdaSoft.",
  },
  {
    slug: "otomotiv",
    icon: "car",
    title: "Otomotiv",
    summary: "Galeri ilan siteleri, rent a car rezervasyonu, servis takibi.",
    menuLine: "Galeri, rent a car, servis",
    lead: "Oto galeri, rent a car ya da servis: araçlarınızı internette doğru müşteriye gösterin.",
    solutions: [
      { icon: "car", title: "Oto galeri için araç ilan sitesi", service: "web-siteleri" },
      { icon: "calendarCheck", title: "Rent a car için online rezervasyon", service: "ozel-yazilim" },
      { icon: "server", title: "Araç stok ve müsaitlik takibi", service: "ozel-yazilim" },
      { icon: "calendar", title: "Servis randevusu ve müşteri takibi", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki oto galeriler, rent a car firmaları ve servisler için ilan siteleri ve rezervasyon sistemleri. AdaSoft.",
  },
  {
    slug: "restoran-kafe",
    icon: "cup",
    title: "Restoran ve Kafe",
    summary: "QR menü, online sipariş, masa rezervasyonu.",
    menuLine: "QR menü, online sipariş",
    lead: "Menünüzü hep güncel tutun, siparişi kolaylaştırın.",
    solutions: [
      { icon: "globe", title: "Çok dilli QR menü", service: "web-siteleri" },
      { icon: "cart", title: "Online sipariş ve paket servis", service: "e-ticaret" },
      { icon: "calendarCheck", title: "Masa rezervasyonu", service: "ozel-yazilim" },
      { icon: "pin", title: "Google Haritalar'da görünürlük", service: "dijital-pazarlama" },
    ],
    metaDescription: "KKTC'deki restoran ve kafeler için QR menü, online sipariş ve masa rezervasyonu. AdaSoft.",
  },
  {
    slug: "lojistik-ticaret",
    icon: "truck",
    title: "Lojistik ve Ticaret",
    summary: "Sevkiyat takibi, bayi portalı, depo yönetimi.",
    menuLine: "Sevkiyat takibi, bayi portalı",
    lead: "Siparişten teslimata kadar tüm süreci tek ekrandan izleyin.",
    solutions: [
      { icon: "truck", title: "Sipariş ve sevkiyat takibi", service: "ozel-yazilim" },
      { icon: "briefcase", title: "Bayi ve toptan satış portalı", service: "e-ticaret" },
      { icon: "server", title: "Depo ve stok yönetimi", service: "ozel-yazilim" },
      { icon: "pin", title: "Müşteriye kargo takip ekranı", service: "web-siteleri" },
    ],
    metaDescription: "KKTC'deki lojistik ve ticaret firmaları için sevkiyat takibi, bayi portalı ve depo yönetimi. AdaSoft.",
  },
  {
    slug: "kobi-perakende",
    icon: "store",
    title: "KOBİ ve Perakende",
    summary: "Stok ve satış takibi, fatura otomasyonu, raporlar.",
    menuLine: "Stok, satış ve fatura takibi",
    lead: "Excel ve kâğıtla yürüyen işleri tek bir sisteme taşıyın.",
    solutions: [
      { icon: "server", title: "Stok ve satış takibi", service: "ozel-yazilim" },
      { icon: "receipt", title: "Teklif ve fatura otomasyonu", service: "ozel-yazilim" },
      { icon: "user", title: "Personel ve görev takibi", service: "mobil-uygulama" },
      { icon: "star", title: "Anlık raporlama panelleri", service: "ozel-yazilim" },
    ],
    metaDescription: "KKTC'deki KOBİ'ler ve perakendeciler için stok, satış, fatura ve raporlama yazılımları. AdaSoft.",
  },
];

export function getSector(slug: string) {
  return sectors.find((s) => s.slug === slug);
}
