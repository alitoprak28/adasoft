import type { IconName } from "@/components/ui/icon";
import type { Locale } from "@/i18n/config";
import { serviceHref, serviceSlugs, type ServiceId } from "@/i18n/routes";

export type ServiceGroupId = "development" | "design" | "infrastructure";

const groupTitles: Record<ServiceGroupId, Record<Locale, string>> = {
  development: { tr: "Yazılım Geliştirme", en: "Software Development" },
  design: { tr: "Tasarım ve Pazarlama", en: "Design & Marketing" },
  infrastructure: { tr: "Altyapı ve Destek", en: "Infrastructure & Support" },
};

export type Faq = { q: string; a: string };
export type Feature = { icon: IconName; title: string; text: string };

type ServiceText = {
  title: string;
  /** Shorter name for menus and chips. */
  shortTitle?: string;
  /** One line under the name in the mega menu. */
  menuLine: string;
  /** Card text on the homepage. */
  summary: string;
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

type ServiceDef = { id: ServiceId; group: ServiceGroupId; icon: IconName; featured?: boolean; text: Record<Locale, ServiceText> };

export type Service = ServiceText & { id: ServiceId; group: ServiceGroupId; icon: IconName; featured: boolean; slug: string; href: string };

const defs: ServiceDef[] = [
  {
    id: "ai",
    group: "development",
    icon: "ai",
    featured: true,
    text: {
      tr: {
        title: "Yapay Zekâ Çözümleri",
        shortTitle: "Yapay Zekâ",
        menuLine: "Asistanlar ve otomasyon",
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
      en: {
        title: "AI Solutions",
        shortTitle: "AI",
        menuLine: "Assistants and automation",
        summary:
          "Add AI to your business: assistants that answer your customers around the clock, and automations that read and process your documents.",
        highlights: ["Customer and guest assistants", "Document and data processing", "Workflow automation"],
        lead: "We build AI solutions that answer your customers around the clock, read and process documents, and take repetitive work off your team's plate.",
        trust: ["Multilingual", "Integrated with your systems", "Measurable results"],
        deliverables: [
          { icon: "chat", title: "Customer and guest assistants", text: "Assistants that instantly answer common questions on your website and messaging channels." },
          { icon: "receipt", title: "Document and data processing", text: "Automatically read the details on invoices, forms and contracts and feed them into your systems." },
          { icon: "refresh", title: "Workflow automation", text: "Hand repetitive work to AI: summaries, notifications and approval flows." },
          { icon: "server", title: "Reporting and analysis", text: "Dashboards your team uses every day, turning your data into summaries and suggestions." },
        ],
        metaDescription:
          "AI solutions in Northern Cyprus: customer assistants, document processing and workflow automation. Add AI to your business with AdaSoft.",
      },
    },
  },
  {
    id: "web",
    group: "development",
    icon: "web",
    text: {
      tr: {
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
      en: {
        title: "Websites",
        menuLine: "Corporate and multilingual sites",
        summary: "Corporate sites, landing pages and campaign pages. Fast-loading sites that people find on Google.",
        lead: "We design and build corporate sites, landing pages and campaign pages: fast-loading, easy to find on Google and easy for you to update.",
        trust: ["Multilingual", "Search-friendly structure", "Easy admin panel"],
        deliverables: [
          { icon: "web", title: "Corporate websites", text: "Present your company, services and team on a site that builds trust." },
          { icon: "megaphone", title: "Landing and campaign pages", text: "Fast pages that collect enquiries for a new product, project or campaign." },
          { icon: "globe", title: "Multilingual websites", text: "Turkish, English and any other language you need, structured to be found in search." },
          { icon: "code", title: "Content management panel", text: "Update text, images and pages yourself, without touching code." },
        ],
        metaDescription:
          "Corporate and multilingual website design in Northern Cyprus. Fast, easy to find on Google and easy to manage: AdaSoft.",
      },
    },
  },
  {
    id: "mobile",
    group: "development",
    icon: "mobile",
    text: {
      tr: {
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
      en: {
        title: "Mobile Apps",
        menuLine: "iOS and Android",
        summary: "Fast, easy-to-maintain apps for iOS and Android, built from a single codebase.",
        lead: "Fast, easy-to-maintain apps for iOS and Android, built from a single codebase. With you from first idea to launch on the App Store and Google Play.",
        trust: ["iOS and Android", "Clickable prototype", "App store launch support"],
        deliverablesTitle: "Apps for every need",
        deliverables: [
          { icon: "calendar", title: "Bookings and appointments", text: "In-app bookings and appointments for hotels, clinics, restaurants and service businesses." },
          { icon: "cart", title: "E-commerce and ordering", text: "Put your store in your customers' pockets: catalogue, cart, online payment and order tracking." },
          { icon: "star", title: "Loyalty and promotions", text: "Bring customers back again and again with points, coupons and push notifications." },
          { icon: "briefcase", title: "Internal apps", text: "Tools in your team's pocket for field staff, attendance and work orders." },
          { icon: "game", title: "Mobile games", text: "Mobile games from concept and game design to launch on the App Store and Google Play." },
          { icon: "refresh", title: "Rebuilds and maintenance", text: "We modernise slow or outdated apps and take care of their ongoing maintenance." },
        ],
        process: {
          title: "From idea to app store in four steps",
          steps: [
            { title: "Discovery and scope", text: "We clarify who the app is for and what it should do, and define the first release together." },
            { title: "Clickable prototype", text: "Before writing code, we build a prototype you can try on your own phone." },
            { title: "Development and testing", text: "A new test build lands on your phone every week, so you can follow progress live." },
            { title: "Launch and support", text: "We handle App Store and Google Play submissions and keep shipping updates after launch." },
          ],
        },
        standards: {
          title: "Standard in every app",
          items: [
            "One codebase for iOS and Android",
            "Push notifications",
            "Online payments",
            "Maps and location",
            "Multilingual interface",
            "Admin panel",
            "Usage and crash reports",
            "App store publishing",
          ],
        },
        faq: [
          { q: "How long does it take to build a mobile app?", a: "It depends on the scope. A simple app can take [X weeks], larger projects [Y months]. After the discovery call we give you a clear timeline." },
          { q: "Do I pay separately for iOS and Android?", a: "No. We build both platforms together from a single codebase, which cuts both time and cost." },
          { q: "Do you publish the app to the stores?", a: "Yes. We manage the whole App Store and Google Play process, from setting up developer accounts to store approval." },
          { q: "What happens after launch?", a: "With a monthly maintenance plan we keep your app compatible with new iOS and Android versions, fix bugs and add new features." },
        ],
        showcase: {
          title: "Example apps",
          items: [
            { tag: "Restaurants & Cafés", title: "[App name] · Ordering and loyalty app", summary: "[Short summary: the client's problem, our solution and the result.]" },
            { tag: "Game", title: "[Game name] · Mobile game", summary: "[Short summary: genre, platforms and release details.]" },
          ],
        },
        ctaTitle: "Got an app idea?",
        metaDescription:
          "iOS and Android app development in Northern Cyprus. One codebase, a clickable prototype and app store launch: AdaSoft.",
      },
    },
  },
  {
    id: "ecommerce",
    group: "development",
    icon: "cart",
    text: {
      tr: {
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
      en: {
        title: "E-commerce",
        menuLine: "Online sales, payments, stock",
        summary: "Sell your products online. Payments, shipping, stock and orders managed from one panel.",
        lead: "Sell your products online: we build e-commerce sites where you manage payments, shipping, stock and orders from a single panel.",
        trust: ["Online payments", "Stock and order tracking", "Flawless on mobile"],
        deliverables: [
          { icon: "cart", title: "Online store", text: "A store ready to sell, with product catalogue, cart and secure checkout." },
          { icon: "truck", title: "Payment and shipping integrations", text: "Card payments, cash on delivery and connections to courier companies." },
          { icon: "server", title: "Stock and order panel", text: "Manage your stock, orders and customers from one screen." },
          { icon: "briefcase", title: "B2B and dealer sales", text: "Ordering screens with special pricing for your dealers." },
        ],
        metaDescription:
          "E-commerce websites in Northern Cyprus: online payments, shipping integrations, stock and order management. AdaSoft.",
      },
    },
  },
  {
    id: "custom",
    group: "development",
    icon: "code",
    text: {
      tr: {
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
      en: {
        title: "Custom Software & Automation",
        shortTitle: "Custom Software",
        menuLine: "Dashboards, CRM, automation",
        summary: "We move work that runs on spreadsheets and paper into dashboards, CRM and ERP systems built for you.",
        lead: "We move work that runs on spreadsheets and paper into dashboards, CRM and ERP systems built for you. Software designed around your business that your team actually uses.",
        trust: ["Built for your business", "Integrates with existing systems", "Training and support"],
        deliverables: [
          { icon: "server", title: "Admin dashboards", text: "See all your business data on one screen and share it with your team by role." },
          { icon: "user", title: "CRM and customer tracking", text: "Quotes, calls and sales in one place, so no customer slips through the cracks." },
          { icon: "briefcase", title: "ERP and stock systems", text: "Connect purchasing, stock, sales and accounting." },
          { icon: "refresh", title: "Workflow automation", text: "Automate repetitive work: reports, notifications and approval flows." },
        ],
        metaDescription:
          "Custom business software, CRM, ERP and automation in Northern Cyprus. Move your spreadsheet work into a real system: AdaSoft.",
      },
    },
  },
  {
    id: "games",
    group: "development",
    icon: "game",
    text: {
      tr: {
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
      en: {
        title: "Game Development",
        menuLine: "Mobile and PC games",
        summary: "Games for mobile and PC. The whole process, from concept and game design to launch.",
        tags: ["Mobile games", "PC", "Game design"],
        lead: "We develop games for mobile and PC: the whole process, from concept and game design to prototype, store launch and updates.",
        trust: ["Mobile and PC", "Game design", "Store launch"],
        deliverables: [
          { icon: "mobile", title: "Mobile games", text: "Easy-to-learn games for iOS and Android, made for short sessions." },
          { icon: "game", title: "PC games", text: "Deeper game experiences for desktop platforms." },
          { icon: "palette", title: "Game design and prototyping", text: "We test the core mechanics with a playable prototype first." },
          { icon: "refresh", title: "Launch and updates", text: "Store launch, player feedback and regular updates." },
        ],
        metaDescription:
          "Mobile and PC game development in Northern Cyprus: game design, prototyping, store launch and updates. AdaSoft.",
      },
    },
  },
  {
    id: "design",
    group: "design",
    icon: "palette",
    text: {
      tr: {
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
        metaDescription: "KKTC'de logo, kurumsal kimlik, sosyal medya ve basılı materyal tasarımı. AdaSoft grafik tasarım.",
      },
      en: {
        title: "Graphic Design",
        menuLine: "Logo and brand identity",
        summary: "Logos and brand identity, social media visuals, brochures and print materials.",
        lead: "We design how your brand looks from start to finish: logo, brand identity, social media visuals and print materials.",
        trust: ["Logo and identity", "Social media", "Print"],
        deliverables: [
          { icon: "palette", title: "Logo and brand identity", text: "Logo, colours, typefaces and a usage guide." },
          { icon: "megaphone", title: "Social media visuals", text: "Templates in your brand style, ready for regular posting." },
          { icon: "receipt", title: "Brochures and print", text: "Business cards, brochures, menus and signage." },
          { icon: "mobile", title: "Interface design", text: "User-friendly screen design for websites and mobile apps." },
        ],
        metaDescription: "Logo, brand identity, social media and print design in Northern Cyprus. AdaSoft graphic design.",
      },
    },
  },
  {
    id: "marketing",
    group: "design",
    icon: "megaphone",
    text: {
      tr: {
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
      en: {
        title: "Digital Marketing",
        menuLine: "Ads, social media, SEO",
        summary: "Social media management, Google and Meta ads, SEO. Reach the right people and measure the results.",
        lead: "To help you reach the right people, we run your social media, Google and Meta ads and SEO, and report on the results regularly.",
        trust: ["Measurable results", "Monthly reports", "Local and international targeting"],
        deliverables: [
          { icon: "megaphone", title: "Social media management", text: "Content planning, posting and community management." },
          { icon: "star", title: "Google and Meta ads", text: "Campaigns that spend your budget on the right audience in the right countries." },
          { icon: "globe", title: "SEO", text: "Technical and content work to get your site ranking on Google." },
          { icon: "pin", title: "Google Business Profile", text: "Show up on maps and in local searches." },
        ],
        metaDescription:
          "Digital marketing in Northern Cyprus: social media management, Google and Meta ads, SEO and Google Business Profile. AdaSoft.",
      },
    },
  },
  {
    id: "hosting",
    group: "infrastructure",
    icon: "server",
    text: {
      tr: {
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
        metaDescription: "KKTC'de hosting, sunucu yönetimi, yedekleme, güvenlik ve aylık bakım paketleri. AdaSoft.",
      },
      en: {
        title: "Maintenance, Hosting & Support",
        menuLine: "Servers, backups, security",
        summary: "Servers, domains, backups and security updates. Monthly maintenance plans keep your systems running.",
        lead: "We stay with you after your site or app goes live: servers, domains, backups, security updates and monthly maintenance plans.",
        trust: ["Regular backups", "Security updates", "Fast support"],
        deliverables: [
          { icon: "server", title: "Hosting and server management", text: "Fast, monitored servers for your site and apps." },
          { icon: "lifebuoy", title: "Backups and security", text: "Regular backups and timely security updates." },
          { icon: "calendar", title: "Monthly maintenance plans", text: "A fixed monthly fee for small changes and improvements." },
          { icon: "chat", title: "Technical support", text: "A familiar team on the other end when something goes wrong." },
        ],
        metaDescription: "Hosting, server management, backups, security and monthly maintenance plans in Northern Cyprus. AdaSoft.",
      },
    },
  },
];

function localize(def: ServiceDef, locale: Locale): Service {
  return {
    ...def.text[locale],
    id: def.id,
    group: def.group,
    icon: def.icon,
    featured: !!def.featured,
    slug: serviceSlugs[def.id][locale],
    href: serviceHref(locale, def.id),
  };
}

export function getServices(locale: Locale): Service[] {
  return defs.map((d) => localize(d, locale));
}

export function getService(locale: Locale, id: ServiceId): Service {
  return localize(defs.find((d) => d.id === id)!, locale);
}

export function getServiceGroups(locale: Locale) {
  return (Object.keys(groupTitles) as ServiceGroupId[]).map((id) => ({ id, title: groupTitles[id][locale] }));
}

export function servicesInGroup(locale: Locale, group: ServiceGroupId) {
  return getServices(locale).filter((s) => s.group === group);
}
