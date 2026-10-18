import type { IconName } from "@/components/ui/icon";

export type ServiceGroupId = "gelistirme" | "tasarim" | "altyapi";

export const serviceGroups: { id: ServiceGroupId; title: string }[] = [
  { id: "gelistirme", title: "Yazılım Geliştirme" },
  { id: "tasarim", title: "Tasarım ve Pazarlama" },
  { id: "altyapi", title: "Altyapı ve Destek" },
];

export type Faq = { q: string; a: string };
export type Feature = { icon: IconName; title: string; text: string };

export type Service = {
  slug: string;
  group: ServiceGroupId;
  icon: IconName;
  title: string;
  /** Shorter name for menus and chips. */
  shortTitle?: string;
  /** One line under the name in the mega menu. */
  menuLine: string;
  /** Card text on the homepage. */
  summary: string;
  featured?: boolean;
  highlights?: string[];
  tags?: string[];
  lead: string;
  trust: string[];
  deliverablesTitle?: string;
  deliverables: Feature[];
  /** Service-specific steps; falls back to the general five-step process. */
  process?: { title: string; steps: { title: string; text: string }[] };
  standards?: { title: string; items: string[] };
  faq?: Faq[];
  showcase?: { title: string; items: { tag: string; title: string; summary: string }[] };
  ctaTitle?: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: "yapay-zeka",
    group: "gelistirme",
    icon: "ai",
    title: "Yapay Zekâ Çözümleri",
    shortTitle: "Yapay Zekâ",
    menuLine: "Asistanlar ve otomasyon",
    featured: true,
    summary:
      "İşinize yapay zekâ ekleyin: müşterilerinize günün her saati yanıt veren asistanlar, belgeleri okuyup işleyen otomasyonlar.",
    highlights: ["Müşteri ve misafir asistanları", "Belge ve veri işleme", "İş akışı otomasyonu"],
    lead: "Müşterilerinize günün her saati yanıt veren asistanlar, belgeleri okuyup işleyen ve tekrarlayan işleri üstlenen yapay zekâ çözümleri geliştiriyoruz.",
    trust: ["Çok dilli", "Sistemlerinizle entegre", "Ölçülebilir sonuç"],
    deliverables: [
      { icon: "chat", title: "Müşteri ve misafir asistanları", text: "Web sitenizde ve mesajlaşma kanallarında sık sorulan soruları anında yanıtlayan asistanlar." },
      { icon: "receipt", title: "Belge ve veri işleme", text: "Fatura, form ve sözleşmelerdeki bilgileri otomatik olarak okuyup sisteminize aktarın." },
      { icon: "refresh", title: "İş akışı otomasyonu", text: "Tekrarlayan işleri yapay zekâya devredin: özetler, bildirimler, onay süreçleri." },
      { icon: "server", title: "Raporlama ve analiz", text: "Verilerinizden özet ve öneriler çıkaran, ekibinizin her gün kullandığı paneller." },
    ],
    metaDescription:
      "KKTC'de yapay zekâ çözümleri: müşteri asistanları, belge işleme ve iş akışı otomasyonu. AdaSoft ile işinize yapay zekâ ekleyin.",
  },
  {
    slug: "web-siteleri",
    group: "gelistirme",
    icon: "web",
    title: "Web Siteleri",
    menuLine: "Kurumsal ve çok dilli siteler",
    summary: "Kurumsal siteler, tanıtım ve kampanya sayfaları. Hızlı açılan, Google'da bulunan siteler.",
    lead: "Kurumsal siteler, tanıtım ve kampanya sayfaları. Hızlı açılan, Google'da bulunan ve kolayca güncelleyebileceğiniz siteler tasarlıyor ve geliştiriyoruz.",
    trust: ["Çok dilli", "Google'a uygun yapı", "Kolay yönetim paneli"],
    deliverables: [
      { icon: "web", title: "Kurumsal web siteleri", text: "Şirketinizi, hizmetlerinizi ve ekibinizi güven veren bir sitede anlatın." },
      { icon: "megaphone", title: "Tanıtım ve kampanya sayfaları", text: "Yeni bir ürün, proje ya da kampanya için hızlı açılan, teklif toplayan sayfalar." },
      { icon: "globe", title: "Çok dilli siteler", text: "Türkçe, İngilizce ve ihtiyacınız olan diğer dillerde, aramalarda bulunan yapı." },
      { icon: "code", title: "İçerik yönetim paneli", text: "Metinleri, görselleri ve sayfaları kod bilmeden kendiniz güncelleyin." },
    ],
    metaDescription:
      "KKTC'de kurumsal ve çok dilli web sitesi tasarımı. Hızlı açılan, Google'da bulunan, kolay yönetilen siteler: AdaSoft.",
  },
  {
    slug: "mobil-uygulama",
    group: "gelistirme",
    icon: "mobile",
    title: "Mobil Uygulamalar",
    menuLine: "iOS ve Android",
    summary: "iOS ve Android için tek kod tabanıyla geliştirilen, hızlı ve bakımı kolay uygulamalar.",
    lead: "iOS ve Android için tek kod tabanıyla geliştirilen, hızlı ve bakımı kolay uygulamalar. Fikirden App Store ve Google Play'de yayına kadar yanınızdayız.",
    trust: ["iOS ve Android", "Tıklanabilir prototip", "Mağaza yayınında destek"],
    deliverablesTitle: "Her ihtiyaca uygun uygulamalar",
    deliverables: [
      { icon: "calendar", title: "Rezervasyon ve randevu", text: "Otel, klinik, restoran ve hizmet işletmeleri için uygulamadan rezervasyon ve randevu." },
      { icon: "cart", title: "E-ticaret ve sipariş", text: "Mağazanızı cebe taşıyın: katalog, sepet, online ödeme ve sipariş takibi." },
      { icon: "star", title: "Sadakat ve kampanya", text: "Puan, kupon ve anlık bildirimlerle müşterinizi tekrar tekrar geri getirin." },
      { icon: "briefcase", title: "Şirket içi uygulamalar", text: "Saha ekibi, personel takibi ve iş emirleri için ekibinizin cebindeki araçlar." },
      { icon: "game", title: "Mobil oyunlar", text: "Fikir ve oyun tasarımından App Store ve Google Play'de yayına kadar mobil oyunlar." },
      { icon: "refresh", title: "Yenileme ve bakım", text: "Yavaş ya da eskimiş uygulamanızı yeniliyor, düzenli bakımını üstleniyoruz." },
    ],
    process: {
      title: "Fikirden mağazaya dört adım",
      steps: [
        { title: "Keşif ve kapsam", text: "Uygulamanın kimin için, ne işe yarayacağını netleştiriyor; ilk sürümün kapsamını birlikte çiziyoruz." },
        { title: "Tıklanabilir prototip", text: "Kod yazmadan önce ekranları telefonunuzda deneyebileceğiniz bir prototip hazırlıyoruz." },
        { title: "Geliştirme ve test", text: "Her hafta yeni test sürümü telefonunuza gelir; ilerlemeyi canlı takip edersiniz." },
        { title: "Yayın ve destek", text: "App Store ve Google Play başvurularını yönetiyor, yayından sonra güncellemeleri sürdürüyoruz." },
      ],
    },
    standards: {
      title: "Her uygulamada standart",
      items: [
        "iOS ve Android'de tek kod",
        "Anlık bildirimler",
        "Online ödeme",
        "Harita ve konum",
        "Çok dilli arayüz",
        "Yönetim paneli",
        "Kullanım ve hata raporları",
        "Mağaza yayını",
      ],
    },
    faq: [
      { q: "Bir mobil uygulama ne kadar sürede hazır olur?", a: "Kapsama bağlı. Basit bir uygulama [X hafta], kapsamlı projeler [Y ay] sürebilir. Keşif görüşmesinden sonra size net bir takvim veriyoruz." },
      { q: "iOS ve Android için ayrı ayrı mı ödeme yaparım?", a: "Hayır. Tek kod tabanıyla iki platform için birlikte geliştiriyoruz; bu hem süreyi hem maliyeti düşürür." },
      { q: "Uygulamayı mağazalara siz mi yüklüyorsunuz?", a: "Evet. Geliştirici hesaplarının açılmasından mağaza onayına kadar App Store ve Google Play sürecini biz yönetiyoruz." },
      { q: "Yayından sonra ne oluyor?", a: "Aylık bakım paketiyle yeni iOS ve Android sürümlerine uyum, hata düzeltmeleri ve yeni özellikler için yanınızdayız." },
    ],
    showcase: {
      title: "Örnek uygulamalar",
      items: [
        { tag: "Restoran ve Kafe", title: "[Uygulama adı] · Sipariş ve sadakat uygulaması", summary: "[Kısa özet: müşterinin sorunu, kurduğumuz çözüm ve elde edilen sonuç.]" },
        { tag: "Oyun", title: "[Oyun adı] · Mobil oyun", summary: "[Kısa özet: oyunun türü, platformlar ve yayın bilgisi.]" },
      ],
    },
    ctaTitle: "Uygulama fikriniz mi var?",
    metaDescription:
      "KKTC'de iOS ve Android mobil uygulama geliştirme. Tek kod tabanı, tıklanabilir prototip ve mağaza yayını: AdaSoft.",
  },
  {
    slug: "e-ticaret",
    group: "gelistirme",
    icon: "cart",
    title: "E-ticaret",
    menuLine: "Online satış, ödeme, stok",
    summary: "Ürünlerinizi online satın. Ödeme, kargo, stok ve sipariş yönetimi tek panelde.",
    lead: "Ürünlerinizi internetten satın: ödeme, kargo, stok ve sipariş yönetimini tek panelden yönetebileceğiniz e-ticaret siteleri kuruyoruz.",
    trust: ["Online ödeme", "Stok ve sipariş takibi", "Telefonda kusursuz"],
    deliverables: [
      { icon: "cart", title: "Online mağaza", text: "Ürün kataloğu, sepet ve güvenli ödeme adımlarıyla satışa hazır mağaza." },
      { icon: "truck", title: "Ödeme ve kargo entegrasyonları", text: "Kartla ödeme, kapıda ödeme ve kargo firmalarıyla bağlantı." },
      { icon: "server", title: "Stok ve sipariş paneli", text: "Stoğunuzu, siparişlerinizi ve müşterilerinizi tek ekrandan yönetin." },
      { icon: "briefcase", title: "Bayi ve toptan satış", text: "Bayilerinize özel fiyat ve sipariş ekranları." },
    ],
    metaDescription:
      "KKTC'de e-ticaret sitesi kurulumu: online ödeme, kargo entegrasyonu, stok ve sipariş yönetimi. AdaSoft.",
  },
  {
    slug: "ozel-yazilim",
    group: "gelistirme",
    icon: "code",
    title: "Özel Yazılım ve Otomasyon",
    shortTitle: "Özel Yazılım",
    menuLine: "Panel, CRM, otomasyon",
    summary: "Excel ve kâğıtla yürüyen işlerinizi size özel panellere, CRM ve ERP çözümlerine taşıyoruz.",
    lead: "Excel ve kâğıtla yürüyen işlerinizi size özel panellere, CRM ve ERP çözümlerine taşıyoruz. İşinize göre tasarlanmış, ekibinizin gerçekten kullandığı yazılımlar.",
    trust: ["İşinize özel", "Mevcut sistemlerle entegrasyon", "Eğitim ve destek"],
    deliverables: [
      { icon: "server", title: "Yönetim panelleri", text: "İşinizin tüm verilerini tek ekranda görün, yetkilere göre ekibinizle paylaşın." },
      { icon: "user", title: "CRM ve müşteri takibi", text: "Teklifler, görüşmeler ve satışlar tek yerde; hiçbir müşteri unutulmaz." },
      { icon: "briefcase", title: "ERP ve stok çözümleri", text: "Satın alma, stok, satış ve muhasebe süreçlerini birbirine bağlayın." },
      { icon: "refresh", title: "İş akışı otomasyonu", text: "Tekrarlayan işleri otomatiğe bağlayın: raporlar, bildirimler, onay süreçleri." },
    ],
    metaDescription:
      "KKTC'de işletmeye özel yazılım, CRM, ERP ve otomasyon. Excel'de yürüyen işlerinizi sisteme taşıyın: AdaSoft.",
  },
  {
    slug: "oyun-gelistirme",
    group: "gelistirme",
    icon: "game",
    title: "Oyun Geliştirme",
    menuLine: "Mobil ve PC oyunları",
    summary: "Mobil ve PC için oyunlar. Fikir ve oyun tasarımından mağazada yayına kadar tüm süreç.",
    tags: ["Mobil oyun", "PC", "Oyun tasarımı"],
    lead: "Mobil ve PC için oyunlar geliştiriyoruz: fikir ve oyun tasarımından prototipe, mağazada yayından güncellemelere kadar tüm süreç.",
    trust: ["Mobil ve PC", "Oyun tasarımı", "Mağaza yayını"],
    deliverables: [
      { icon: "mobile", title: "Mobil oyunlar", text: "iOS ve Android için kısa oturumlu, kolay öğrenilen oyunlar." },
      { icon: "game", title: "PC oyunları", text: "Masaüstü platformlar için daha derin oyun deneyimleri." },
      { icon: "palette", title: "Oyun tasarımı ve prototip", text: "Oyun mekaniğini önce oynanabilir bir prototiple test ediyoruz." },
      { icon: "refresh", title: "Yayın ve güncelleme", text: "Mağaza yayını, oyuncu geri bildirimi ve düzenli güncellemeler." },
    ],
    metaDescription:
      "KKTC'de mobil ve PC oyun geliştirme: oyun tasarımı, prototip, mağaza yayını ve güncellemeler. AdaSoft.",
  },
  {
    slug: "grafik-tasarim",
    group: "tasarim",
    icon: "palette",
    title: "Grafik Tasarım",
    menuLine: "Logo ve kurumsal kimlik",
    summary: "Logo ve kurumsal kimlik, sosyal medya görselleri, broşür ve basılı materyaller.",
    lead: "Markanızın görünüşünü baştan sona tasarlıyoruz: logo, kurumsal kimlik, sosyal medya görselleri ve basılı materyaller.",
    trust: ["Logo ve kimlik", "Sosyal medya", "Basılı materyal"],
    deliverables: [
      { icon: "palette", title: "Logo ve kurumsal kimlik", text: "Logo, renkler, yazı tipleri ve kullanım kılavuzu." },
      { icon: "megaphone", title: "Sosyal medya görselleri", text: "Markanızla uyumlu, düzenli paylaşıma hazır şablonlar." },
      { icon: "receipt", title: "Broşür ve basılı materyal", text: "Kartvizit, broşür, menü ve tabela tasarımları." },
      { icon: "mobile", title: "Arayüz tasarımı", text: "Web ve mobil uygulamalar için kullanıcı dostu ekran tasarımı." },
    ],
    metaDescription:
      "KKTC'de logo, kurumsal kimlik, sosyal medya ve basılı materyal tasarımı. AdaSoft grafik tasarım.",
  },
  {
    slug: "dijital-pazarlama",
    group: "tasarim",
    icon: "megaphone",
    title: "Dijital Pazarlama",
    menuLine: "Reklam, sosyal medya, SEO",
    summary: "Sosyal medya yönetimi, Google ve Meta reklamları, SEO. Doğru kişilere ulaşın, sonucu ölçün.",
    lead: "Doğru kişilere ulaşmanız için sosyal medya yönetimi, Google ve Meta reklamları ve SEO çalışmaları yapıyor, sonuçları düzenli raporluyoruz.",
    trust: ["Ölçülebilir sonuç", "Aylık rapor", "Yerel ve yabancı hedefleme"],
    deliverables: [
      { icon: "megaphone", title: "Sosyal medya yönetimi", text: "İçerik planı, paylaşımlar ve topluluk yönetimi." },
      { icon: "star", title: "Google ve Meta reklamları", text: "Bütçenizi doğru ülkeye, doğru kitleye harcayan kampanyalar." },
      { icon: "globe", title: "SEO", text: "Sitenizin Google'da üst sıralarda çıkması için teknik ve içerik çalışmaları." },
      { icon: "pin", title: "Google İşletme Profili", text: "Haritalarda ve yerel aramalarda görünür olun." },
    ],
    metaDescription:
      "KKTC'de dijital pazarlama: sosyal medya yönetimi, Google ve Meta reklamları, SEO ve Google İşletme Profili. AdaSoft.",
  },
  {
    slug: "bakim-hosting-destek",
    group: "altyapi",
    icon: "server",
    title: "Bakım, Hosting ve Destek",
    menuLine: "Sunucu, yedekleme, güvenlik",
    summary: "Sunucu, alan adı, yedekleme ve güvenlik güncellemeleri. Aylık bakım paketleriyle sistemleriniz hep ayakta.",
    lead: "Siteniz ve uygulamanız yayına çıktıktan sonra da yanınızdayız: sunucu, alan adı, yedekleme, güvenlik güncellemeleri ve aylık bakım paketleri.",
    trust: ["Düzenli yedek", "Güvenlik güncellemeleri", "Hızlı destek"],
    deliverables: [
      { icon: "server", title: "Hosting ve sunucu yönetimi", text: "Siteniz ve uygulamanız için hızlı, izlenen sunucular." },
      { icon: "lifebuoy", title: "Yedekleme ve güvenlik", text: "Düzenli yedekler ve zamanında güvenlik güncellemeleri." },
      { icon: "calendar", title: "Aylık bakım paketleri", text: "Küçük değişiklikler ve iyileştirmeler için sabit aylık ücret." },
      { icon: "chat", title: "Teknik destek", text: "Bir sorun olduğunda karşınızda tanıdık bir ekip." },
    ],
    metaDescription:
      "KKTC'de hosting, sunucu yönetimi, yedekleme, güvenlik ve aylık bakım paketleri. AdaSoft.",
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function servicesInGroup(group: ServiceGroupId) {
  return services.filter((s) => s.group === group);
}
