import type { IconName } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { sectorHref, sectorSlugs, type SectorId, type ServiceId } from "@/i18n/routes";
import type { Faq } from "./services";

type SolutionText = { title: string; text?: string };

type SectorText = {
  title: string;
  /** Card and dropdown line. */
  summary: string;
  menuLine: string;
  lead: string;
  trust?: string[];
  problemsTitle?: string;
  problems?: { title: string; text: string }[];
  /** Same order as the definition's `solutions`. */
  solutions: SolutionText[];
  audience?: { title: string; text: string; items: string[]; example: { title: string; summary: string } };
  faqTitle?: string;
  faq?: Faq[];
  ctaTitle?: string;
  metaDescription: string;
};

type SectorDef = {
  id: SectorId;
  icon: IconName;
  visual?: "booking";
  solutions: { icon: IconName; service: ServiceId; highlight?: boolean }[];
  text: Record<Locale, SectorText>;
};

export type SectorSolution = SolutionText & { icon: IconName; service: ServiceId; highlight: boolean };
export type Sector = Omit<SectorText, "solutions"> & {
  id: SectorId;
  icon: IconName;
  visual?: "booking";
  solutions: SectorSolution[];
  slug: string;
  href: string;
};

const defs: SectorDef[] = [
  {
    id: "tourism",
    icon: "bed",
    visual: "booking",
    solutions: [
      { icon: "globe", service: "web" },
      { icon: "calendarCheck", service: "custom" },
      { icon: "refresh", service: "custom" },
      { icon: "ai", service: "ai", highlight: true },
      { icon: "mobile", service: "mobile" },
      { icon: "megaphone", service: "marketing" },
    ],
    text: {
      tr: {
        title: "Turizm ve Otel",
        summary: "Çok dilli site, direkt rezervasyon, misafir asistanı.",
        menuLine: "Direkt rezervasyon, misafir asistanı",
        lead: "Yabancı misafire kendi dilinde ulaşın, komisyonsuz direkt rezervasyon alın ve operasyonu tek ekrandan yönetin.",
        trust: ["Çok dilli", "Komisyonsuz rezervasyon", "Kanal yöneticisi uyumlu"],
        problemsTitle: "Otelcilerin en sık yaşadığı üç sorun",
        problems: [
          { title: "Rezervasyonların çoğu komisyonlu sitelerden geliyor", text: "Her rezervasyonda kazancınızın bir kısmı aracı platformlara gidiyor; misafirle doğrudan ilişki kuramıyorsunuz." },
          { title: "Yabancı misafirle iletişim zor", text: "Misafirler sorularına kendi dillerinde ve hemen yanıt bekliyor; gece gelen mesajlar sabaha kalıyor." },
          { title: "Operasyon dağınık", text: "Rezervasyonlar, oda durumu ve ödemeler farklı ekranlarda, defterlerde ve mesajlarda takip ediliyor." },
        ],
        solutions: [
          { title: "Çok dilli otel web sitesi", text: "Odalarınızı ve tesisinizi misafirin dilinde, hızlı açılan ve Google'da bulunan bir sitede anlatın." },
          { title: "Direkt rezervasyon ve ödeme", text: "Komisyonsuz rezervasyon motoru; kartla ödeme, ön ödeme ve iptal kuralları sizin kontrolünüzde." },
          { title: "Kanal yöneticisi entegrasyonu", text: "Oda müsaitliği ve fiyatlar tüm satış kanallarında senkron kalır; çift rezervasyon derdi biter." },
          { title: "Yapay zekâ misafir asistanı", text: "Sık sorulan soruları günün her saati, misafirin kendi dilinde yanıtlar; rezervasyona yönlendirir." },
          { title: "Misafir uygulaması", text: "Online check-in, oda servisi, tesis bilgileri ve kampanyalar misafirin cebinde." },
          { title: "Görünürlük ve reklam", text: "Google Haritalar, sosyal medya ve hedefli reklamlarla doğru ülkeden doğru misafire ulaşın." },
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
      en: {
        title: "Tourism & Hotels",
        summary: "Multilingual sites, direct bookings, guest assistant.",
        menuLine: "Direct bookings, guest assistant",
        lead: "Reach international guests in their own language, take commission-free direct bookings and run your operations from one screen.",
        trust: ["Multilingual", "Commission-free bookings", "Channel manager ready"],
        problemsTitle: "The three problems hoteliers face most",
        problems: [
          { title: "Most bookings come through commission-based sites", text: "Part of every booking goes to intermediary platforms, and you never build a direct relationship with the guest." },
          { title: "Communicating with international guests is hard", text: "Guests expect instant answers in their own language; messages that arrive at night wait until morning." },
          { title: "Operations are scattered", text: "Bookings, room status and payments are tracked across different screens, notebooks and messages." },
        ],
        solutions: [
          { title: "Multilingual hotel website", text: "Present your rooms and property in your guests' language, on a fast site that people find on Google." },
          { title: "Direct booking and payments", text: "A commission-free booking engine, with card payments, deposits and cancellation rules under your control." },
          { title: "Channel manager integration", text: "Availability and rates stay in sync across every sales channel, so double bookings become a thing of the past." },
          { title: "AI guest assistant", text: "Answers common questions around the clock in the guest's own language and guides them to book." },
          { title: "Guest app", text: "Online check-in, room service, property information and offers in your guests' pockets." },
          { title: "Visibility and advertising", text: "Reach the right guests from the right countries with Google Maps, social media and targeted ads." },
        ],
        audience: {
          title: "Every size of hospitality and tourism",
          text: "From a single boutique hotel to large resorts, from tour operators to villa rentals.",
          items: ["Hotels", "Boutique hotels", "Apartment and villa rentals", "Tour and transfer companies", "Travel agencies"],
          example: { title: "[Hotel name] · Direct booking website", summary: "[Problem, solution and result: short description]" },
        },
        faqTitle: "Questions from hoteliers",
        faq: [
          { q: "Does it work alongside booking platforms?", a: "Yes. With channel manager integration, availability stays up to date on every channel, and direct bookings land in the same system." },
          { q: "How many languages can the site have?", a: "As many as you need. We choose them together based on your guests; properties in Northern Cyprus often go with Turkish, English, German and Russian." },
          { q: "Can you redesign my current website?", a: "Yes. We move your content across and redirect old addresses to the new ones to protect your Google rankings." },
          { q: "How is the price set?", a: "By the number of rooms, languages and integrations. Packages start from [starting price]; after the discovery call we give you a fixed-price quote." },
        ],
        ctaTitle: "Let's talk about your hotel.",
        metaDescription:
          "Multilingual websites, commission-free direct booking, channel manager integration and AI guest assistants for hotels in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "realEstate",
    icon: "home",
    solutions: [
      { icon: "globe", service: "web" },
      { icon: "pin", service: "web" },
      { icon: "user", service: "custom" },
      { icon: "receipt", service: "custom" },
    ],
    text: {
      tr: {
        title: "Emlak",
        summary: "Çok dilli ilan siteleri, CRM ve ödeme planı hesaplayıcı.",
        menuLine: "Çok dilli ilan siteleri, CRM",
        lead: "Yurt dışındaki alıcıya projelerinizi güvenle tanıtın, gelen talepleri tek yerden takip edin.",
        solutions: [
          { title: "Çok dilli ilan ve proje sitesi" },
          { title: "Harita ve filtreli arama" },
          { title: "Müşteri takip (CRM) paneli" },
          { title: "Taksit ve ödeme planı hesaplayıcı" },
        ],
        metaDescription: "KKTC'deki emlak firmaları için çok dilli ilan siteleri, CRM ve ödeme planı hesaplayıcı. AdaSoft.",
      },
      en: {
        title: "Real Estate",
        summary: "Multilingual listing sites, CRM and payment plan calculator.",
        menuLine: "Multilingual listings, CRM",
        lead: "Present your projects to overseas buyers with confidence and track every enquiry in one place.",
        solutions: [
          { title: "Multilingual listing and project website" },
          { title: "Map and filtered search" },
          { title: "Customer tracking (CRM) panel" },
          { title: "Instalment and payment plan calculator" },
        ],
        metaDescription: "Multilingual listing websites, CRM and payment plan calculators for real estate firms in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "construction",
    icon: "building",
    solutions: [
      { icon: "web", service: "web" },
      { icon: "home", service: "custom" },
      { icon: "building", service: "mobile" },
      { icon: "receipt", service: "custom" },
    ],
    text: {
      tr: {
        title: "İnşaat ve Mimarlık",
        summary: "Proje tanıtım siteleri, daire seçimi, şantiye takibi.",
        menuLine: "Proje tanıtımı, şantiye takibi",
        lead: "Projelerinizi temel atılmadan alıcıya gösterin, şantiyeyi uzaktan takip edin.",
        solutions: [
          { title: "Proje tanıtım ve satış sitesi" },
          { title: "Daire seçimi ve müsaitlik tablosu" },
          { title: "Şantiye ilerleme takibi" },
          { title: "Teklif ve hakediş takip paneli" },
        ],
        metaDescription: "KKTC'deki inşaat ve mimarlık firmaları için proje tanıtım siteleri, daire seçimi ve şantiye takibi. AdaSoft.",
      },
      en: {
        title: "Construction & Architecture",
        summary: "Project showcase sites, unit selection, site progress tracking.",
        menuLine: "Project showcases, site tracking",
        lead: "Show buyers your projects before the foundations are laid, and track your building sites remotely.",
        solutions: [
          { title: "Project showcase and sales website" },
          { title: "Unit selection and availability table" },
          { title: "Construction progress tracking" },
          { title: "Quotes and progress payments panel" },
        ],
        metaDescription: "Project showcase websites, unit selection and construction progress tracking for builders and architects in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "education",
    icon: "cap",
    solutions: [
      { icon: "receipt", service: "custom" },
      { icon: "user", service: "custom" },
      { icon: "calendar", service: "web" },
      { icon: "bed", service: "custom" },
    ],
    text: {
      tr: {
        title: "Eğitim",
        summary: "Online başvuru, öğrenci portalı, yurt rezervasyonu.",
        menuLine: "Online başvuru, öğrenci portalı",
        lead: "Öğrenci adaylarına hızlı ulaşın, başvuruları tek yerden yönetin.",
        solutions: [
          { title: "Online başvuru sistemi" },
          { title: "Öğrenci ve veli portalı" },
          { title: "Kurs ve sınav takvimi" },
          { title: "Yurt ve oda rezervasyonu" },
        ],
        metaDescription: "KKTC'deki okullar, kurslar ve yurtlar için online başvuru, öğrenci portalı ve rezervasyon sistemleri. AdaSoft.",
      },
      en: {
        title: "Education",
        summary: "Online applications, student portal, dorm bookings.",
        menuLine: "Online applications, student portal",
        lead: "Reach prospective students quickly and manage applications in one place.",
        solutions: [
          { title: "Online application system" },
          { title: "Student and parent portal" },
          { title: "Course and exam calendar" },
          { title: "Dorm and room booking" },
        ],
        metaDescription: "Online applications, student portals and booking systems for schools, courses and dorms in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "health",
    icon: "health",
    solutions: [
      { icon: "web", service: "web" },
      { icon: "calendarCheck", service: "custom" },
      { icon: "globe", service: "web" },
      { icon: "receipt", service: "custom" },
    ],
    text: {
      tr: {
        title: "Sağlık",
        summary: "Klinik siteleri, online randevu, sağlık turizmi sayfaları.",
        menuLine: "Online randevu, klinik siteleri",
        lead: "Hastalarınıza güven verin, randevuları kaçırmayın.",
        solutions: [
          { title: "Klinik web sitesi" },
          { title: "Online randevu ve hatırlatma" },
          { title: "Sağlık turizmi için çok dilli sayfalar" },
          { title: "Dijital hasta bilgi formları" },
        ],
        metaDescription: "KKTC'deki klinikler için web sitesi, online randevu ve sağlık turizmi sayfaları. AdaSoft.",
      },
      en: {
        title: "Healthcare",
        summary: "Clinic websites, online appointments, health tourism pages.",
        menuLine: "Online appointments, clinic sites",
        lead: "Earn your patients' trust and never miss an appointment.",
        solutions: [
          { title: "Clinic website" },
          { title: "Online appointments and reminders" },
          { title: "Multilingual pages for health tourism" },
          { title: "Digital patient forms" },
        ],
        metaDescription: "Websites, online appointments and health tourism pages for clinics in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "automotive",
    icon: "car",
    solutions: [
      { icon: "car", service: "web" },
      { icon: "calendarCheck", service: "custom" },
      { icon: "server", service: "custom" },
      { icon: "calendar", service: "custom" },
    ],
    text: {
      tr: {
        title: "Otomotiv",
        summary: "Galeri ilan siteleri, rent a car rezervasyonu, servis takibi.",
        menuLine: "Galeri, rent a car, servis",
        lead: "Oto galeri, rent a car ya da servis: araçlarınızı internette doğru müşteriye gösterin.",
        solutions: [
          { title: "Oto galeri için araç ilan sitesi" },
          { title: "Rent a car için online rezervasyon" },
          { title: "Araç stok ve müsaitlik takibi" },
          { title: "Servis randevusu ve müşteri takibi" },
        ],
        metaDescription: "KKTC'deki oto galeriler, rent a car firmaları ve servisler için ilan siteleri ve rezervasyon sistemleri. AdaSoft.",
      },
      en: {
        title: "Automotive",
        summary: "Car dealer listing sites, rent-a-car bookings, service tracking.",
        menuLine: "Dealers, rent a car, servicing",
        lead: "Car dealer, rent-a-car firm or service centre: put your vehicles in front of the right customers online.",
        solutions: [
          { title: "Vehicle listing site for car dealers" },
          { title: "Online booking for rent-a-car firms" },
          { title: "Vehicle stock and availability tracking" },
          { title: "Service appointments and customer tracking" },
        ],
        metaDescription: "Listing websites and booking systems for car dealers, rent-a-car firms and service centres in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "food",
    icon: "cup",
    solutions: [
      { icon: "globe", service: "web" },
      { icon: "cart", service: "ecommerce" },
      { icon: "calendarCheck", service: "custom" },
      { icon: "pin", service: "marketing" },
    ],
    text: {
      tr: {
        title: "Restoran ve Kafe",
        summary: "QR menü, online sipariş, masa rezervasyonu.",
        menuLine: "QR menü, online sipariş",
        lead: "Menünüzü hep güncel tutun, siparişi kolaylaştırın.",
        solutions: [
          { title: "Çok dilli QR menü" },
          { title: "Online sipariş ve paket servis" },
          { title: "Masa rezervasyonu" },
          { title: "Google Haritalar'da görünürlük" },
        ],
        metaDescription: "KKTC'deki restoran ve kafeler için QR menü, online sipariş ve masa rezervasyonu. AdaSoft.",
      },
      en: {
        title: "Restaurants & Cafés",
        summary: "QR menus, online ordering, table reservations.",
        menuLine: "QR menus, online ordering",
        lead: "Keep your menu up to date and make ordering easy.",
        solutions: [
          { title: "Multilingual QR menu" },
          { title: "Online ordering and delivery" },
          { title: "Table reservations" },
          { title: "Visibility on Google Maps" },
        ],
        metaDescription: "QR menus, online ordering and table reservations for restaurants and cafés in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "logistics",
    icon: "truck",
    solutions: [
      { icon: "truck", service: "custom" },
      { icon: "briefcase", service: "ecommerce" },
      { icon: "server", service: "custom" },
      { icon: "pin", service: "web" },
    ],
    text: {
      tr: {
        title: "Lojistik ve Ticaret",
        summary: "Sevkiyat takibi, bayi portalı, depo yönetimi.",
        menuLine: "Sevkiyat takibi, bayi portalı",
        lead: "Siparişten teslimata kadar tüm süreci tek ekrandan izleyin.",
        solutions: [
          { title: "Sipariş ve sevkiyat takibi" },
          { title: "Bayi ve toptan satış portalı" },
          { title: "Depo ve stok yönetimi" },
          { title: "Müşteriye kargo takip ekranı" },
        ],
        metaDescription: "KKTC'deki lojistik ve ticaret firmaları için sevkiyat takibi, bayi portalı ve depo yönetimi. AdaSoft.",
      },
      en: {
        title: "Logistics & Trade",
        summary: "Shipment tracking, dealer portal, warehouse management.",
        menuLine: "Shipment tracking, dealer portal",
        lead: "Follow everything from order to delivery on a single screen.",
        solutions: [
          { title: "Order and shipment tracking" },
          { title: "Dealer and wholesale portal" },
          { title: "Warehouse and stock management" },
          { title: "Delivery tracking page for customers" },
        ],
        metaDescription: "Shipment tracking, dealer portals and warehouse management for logistics and trading firms in Northern Cyprus. AdaSoft.",
      },
    },
  },
  {
    id: "retail",
    icon: "store",
    solutions: [
      { icon: "server", service: "custom" },
      { icon: "receipt", service: "custom" },
      { icon: "user", service: "mobile" },
      { icon: "star", service: "custom" },
    ],
    text: {
      tr: {
        title: "KOBİ ve Perakende",
        summary: "Stok ve satış takibi, fatura otomasyonu, raporlar.",
        menuLine: "Stok, satış ve fatura takibi",
        lead: "Excel ve kâğıtla yürüyen işleri tek bir sisteme taşıyın.",
        solutions: [
          { title: "Stok ve satış takibi" },
          { title: "Teklif ve fatura otomasyonu" },
          { title: "Personel ve görev takibi" },
          { title: "Anlık raporlama panelleri" },
        ],
        metaDescription: "KKTC'deki KOBİ'ler ve perakendeciler için stok, satış, fatura ve raporlama yazılımları. AdaSoft.",
      },
      en: {
        title: "SMEs & Retail",
        summary: "Stock and sales tracking, invoice automation, reports.",
        menuLine: "Stock, sales and invoicing",
        lead: "Move work that runs on spreadsheets and paper into a single system.",
        solutions: [
          { title: "Stock and sales tracking" },
          { title: "Quote and invoice automation" },
          { title: "Staff and task tracking" },
          { title: "Real-time reporting dashboards" },
        ],
        metaDescription: "Stock, sales, invoicing and reporting software for SMEs and retailers in Northern Cyprus. AdaSoft.",
      },
    },
  },
];

function localize(def: SectorDef, locale: Locale): Sector {
  const t = def.text[locale];
  return {
    ...t,
    id: def.id,
    icon: def.icon,
    visual: def.visual,
    solutions: def.solutions.map((s, i) => ({ ...t.solutions[i], icon: s.icon, service: s.service, highlight: !!s.highlight })),
    slug: sectorSlugs[def.id][locale],
    href: sectorHref(locale, def.id),
  };
}

export function getSectors(locale: Locale): Sector[] {
  return defs.map((d) => localize(d, locale));
}

export function getSector(locale: Locale, id: SectorId): Sector {
  return localize(defs.find((d) => d.id === id)!, locale);
}
