// Privacy policy and KVKK notice. A template written for how the site works today (no cookies, no
// analytics, the quote form becomes a WhatsApp message); have it reviewed before relying on it, and
// update it when that changes.
import type { Locale } from "@/i18n/config";
import type { LegalId } from "@/i18n/routes";
import { site } from "./site";

export type LegalSection = { heading: string; paragraphs?: string[]; items?: string[] };
export type LegalDoc = { title: string; metaDescription: string; intro: string; sections: LegalSection[] };

const phone = site.contact.phoneDisplay;

export const legalUpdated: Record<Locale, string> = { tr: "25 Ekim 2026", en: "25 October 2026" };

const docs: Record<Locale, Record<LegalId, LegalDoc>> = {
  tr: {
    privacy: {
      title: "Gizlilik ve Çerez Politikası",
      metaDescription: "AdaSoft web sitesinin hangi bilgileri topladığı, çerez kullanımı ve bilgilerinizin nasıl korunduğu.",
      intro: "Bu metin, AdaSoft web sitesini ziyaret ettiğinizde ve bizimle iletişime geçtiğinizde bilgilerinizin nasıl kullanıldığını açıklar.",
      sections: [
        {
          heading: "Topladığımız bilgiler",
          paragraphs: [
            "Siteyi gezmek için hiçbir kişisel bilgi vermeniz gerekmez; üyelik ya da giriş yoktur.",
            "Teklif formunu doldurursanız adınız, telefon numaranız, isteğe bağlı e-posta adresiniz, proje türü ve başlangıç zamanı tercihiniz bir WhatsApp mesajına dönüştürülür. Bu bilgiler sitemizin sunucusuna kaydedilmez; mesajı WhatsApp'ta siz gönderdiğinizde bize ulaşır.",
            "WhatsApp'tan ya da telefonla bize ulaştığınızda numaranızı ve mesajlarınızı yalnızca sizinle iletişim kurmak için kullanırız.",
          ],
        },
        {
          heading: "Bilgileri ne için kullanıyoruz",
          items: [
            "Teklif ve bilgi taleplerinize yanıt vermek",
            "Projenizi konuşmak ve size teklif hazırlamak",
            "Birlikte çalışırsak proje süresince sizinle yazışmak",
          ],
          paragraphs: ["Bilgilerinizi satmıyor, reklam amacıyla kullanmıyor ve pazarlama için kimseyle paylaşmıyoruz."],
        },
        {
          heading: "Çerezler",
          paragraphs: [
            "Sitemiz çerez kullanmaz; reklam, analiz ya da takip aracı yoktur. Yazı tipleri ve görseller kendi sunucumuzdan yüklenir, bu yüzden siteyi gezerken üçüncü taraf bir hizmete bilgi gönderilmez.",
            "İleride bir analiz aracı eklersek bu metni güncelleriz.",
          ],
        },
        {
          heading: "Barındırma ve sunucu kayıtları",
          paragraphs: [
            "Site, Vercel Inc. altyapısında barındırılır. Vercel, güvenliği sağlamak ve hizmeti çalıştırmak için IP adresi, tarayıcı türü ve ziyaret zamanı gibi standart sunucu kayıtlarını tutabilir.",
          ],
        },
        {
          heading: "WhatsApp ve dış bağlantılar",
          paragraphs: [
            "WhatsApp mesajları WhatsApp (Meta) altyapısı üzerinden iletilir ve WhatsApp'ın kendi gizlilik koşullarına tabidir. Proje kartlarındaki bağlantılar başka sitelere gider; o sitelerin gizlilik politikaları geçerlidir.",
          ],
        },
        {
          heading: "Haklarınız ve iletişim",
          paragraphs: [
            `Bilgilerinizin düzeltilmesini ya da silinmesini istediğinizde WhatsApp'tan ya da telefonla ${phone} numarasından bize ulaşabilirsiniz. Ayrıntılı bilgi KVKK Aydınlatma Metni'nde yer alıyor.`,
          ],
        },
        {
          heading: "Değişiklikler",
          paragraphs: ["Bu metni zaman zaman güncelleyebiliriz; en güncel hali her zaman bu sayfadadır."],
        },
      ],
    },
    dataProtection: {
      title: "KVKK Aydınlatma Metni",
      metaDescription: "AdaSoft'un kişisel verileri hangi amaçlarla işlediği, sakladığı ve haklarınızı nasıl kullanabileceğiniz.",
      intro:
        "AdaSoft olarak kişisel verilerinizin güvenliğine önem veriyoruz. Bu metin, kişisel verilerin korunmasına ilişkin mevzuat kapsamında veri sorumlusu sıfatıyla sizi bilgilendirmek için hazırlanmıştır.",
      sections: [
        {
          heading: "Veri sorumlusu",
          paragraphs: [`AdaSoft, Kuzey Kıbrıs. İletişim: WhatsApp ve telefon ${phone}.`],
        },
        {
          heading: "İşlenen kişisel veriler",
          items: [
            "Kimlik: ad ve soyad",
            "İletişim: telefon / WhatsApp numarası, isteğe bağlı e-posta adresi",
            "Talep bilgileri: proje türü, başlangıç zamanı tercihi ve yazışma içerikleri",
          ],
        },
        {
          heading: "İşleme amaçları",
          items: [
            "Teklif ve bilgi taleplerinizi yanıtlamak",
            "Sizinle iletişime geçmek ve görüşme planlamak",
            "Teklif hazırlamak ve hizmet sözleşmesi kurulursa sözleşmeyi yürütmek",
            "Yasal yükümlülüklerimizi yerine getirmek",
          ],
        },
        {
          heading: "Toplama yöntemi ve hukuki sebep",
          paragraphs: [
            "Verileriniz teklif formu ile WhatsApp ve telefon yazışmaları üzerinden elektronik ortamda toplanır. Formdaki onay kutusuyla verdiğiniz açık rızaya, bir sözleşmenin kurulması için gerekli olmasına ve yasal yükümlülüklerimize dayanılarak işlenir.",
          ],
        },
        {
          heading: "Aktarım",
          paragraphs: [
            "Kişisel verilerinizi satmıyor ve pazarlama amacıyla kimseyle paylaşmıyoruz. Mesajlarınız WhatsApp (Meta) altyapısı üzerinden iletilir, site ise Vercel Inc. tarafından barındırılır; bu hizmet sağlayıcıların sunucuları yurt dışında bulunabilir. Yasal bir zorunluluk olduğunda verileriniz yetkili kamu kurumlarıyla paylaşılabilir.",
          ],
        },
        {
          heading: "Saklama süresi",
          paragraphs: [
            "Verileriniz talebiniz sonuçlanana kadar saklanır. Hizmet sözleşmesi kurulursa sözleşme süresince ve yasal saklama süreleri boyunca tutulur; gerek kalmadığında silinir.",
          ],
        },
        {
          heading: "Haklarınız",
          items: [
            "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
            "İşlenmişse buna ilişkin bilgi isteme",
            "Eksik ya da yanlış işlenmişse düzeltilmesini isteme",
            "Silinmesini ya da yok edilmesini isteme",
            "Açık rızanızı dilediğiniz zaman geri alma",
            "Hukuka aykırı işleme nedeniyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
          ],
          paragraphs: [`Bu haklarınızı kullanmak için WhatsApp'tan ya da telefonla ${phone} numarasından bize ulaşabilirsiniz; talebinizi en kısa sürede yanıtlarız.`],
        },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy & Cookie Policy",
      metaDescription: "What the AdaSoft website collects, how it uses cookies and how your details are protected.",
      intro: "This policy explains how your details are used when you visit the AdaSoft website and when you get in touch with us.",
      sections: [
        {
          heading: "What we collect",
          paragraphs: [
            "You don't need to give us any personal details to browse the site; there are no accounts or logins.",
            "If you fill in the quote form, your name, phone number, optional email address, project type and preferred start date are turned into a WhatsApp message. They are not stored on our server; they reach us only when you send that message in WhatsApp.",
            "When you contact us on WhatsApp or by phone, we use your number and messages only to talk to you.",
          ],
        },
        {
          heading: "How we use it",
          items: ["To answer your quote and information requests", "To discuss your project and prepare a quote", "To stay in touch during the project if we work together"],
          paragraphs: ["We don't sell your details, use them for advertising or share them with anyone for marketing."],
        },
        {
          heading: "Cookies",
          paragraphs: [
            "Our site doesn't use cookies, and there are no advertising, analytics or tracking tools. Fonts and images are served from our own server, so browsing the site sends nothing to third-party services.",
            "If we add an analytics tool in future, we will update this policy.",
          ],
        },
        {
          heading: "Hosting and server logs",
          paragraphs: [
            "The site is hosted by Vercel Inc. To keep the service running and secure, Vercel may keep standard server logs such as IP address, browser type and time of visit.",
          ],
        },
        {
          heading: "WhatsApp and external links",
          paragraphs: [
            "WhatsApp messages travel over WhatsApp (Meta) and are subject to WhatsApp's own privacy terms. Links on our project cards lead to other websites, whose own privacy policies apply.",
          ],
        },
        {
          heading: "Your rights and contact",
          paragraphs: [
            `To have your details corrected or deleted, contact us on WhatsApp or by phone at ${phone}. Our Data Protection Notice has more detail.`,
          ],
        },
        {
          heading: "Changes",
          paragraphs: ["We may update this policy from time to time; the latest version is always on this page."],
        },
      ],
    },
    dataProtection: {
      title: "Data Protection Notice",
      metaDescription: "Why AdaSoft processes personal data, how long it is kept and how you can use your rights.",
      intro:
        "At AdaSoft we take the security of your personal data seriously. This notice informs you, as data controller, under the applicable personal data protection legislation.",
      sections: [
        {
          heading: "Data controller",
          paragraphs: [`AdaSoft, Northern Cyprus. Contact: WhatsApp and phone ${phone}.`],
        },
        {
          heading: "Personal data we process",
          items: [
            "Identity: first and last name",
            "Contact: phone / WhatsApp number, optional email address",
            "Request details: project type, preferred start date and the content of our messages",
          ],
        },
        {
          heading: "Why we process it",
          items: [
            "To answer your quote and information requests",
            "To contact you and arrange a meeting",
            "To prepare a quote and, if we sign a contract, to carry it out",
            "To meet our legal obligations",
          ],
        },
        {
          heading: "How we collect it and on what basis",
          paragraphs: [
            "We collect your data electronically through the quote form and our WhatsApp and phone conversations. We process it based on the explicit consent you give with the checkbox on the form, because it is needed to enter into a contract, and to meet our legal obligations.",
          ],
        },
        {
          heading: "Sharing",
          paragraphs: [
            "We don't sell your personal data or share it with anyone for marketing. Messages travel over WhatsApp (Meta) and the site is hosted by Vercel Inc.; these providers' servers may be located abroad. Where the law requires it, your data may be shared with the relevant public authorities.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "We keep your data until your request is settled. If we sign a contract, we keep it for the length of the contract and any legal retention period, and delete it once it is no longer needed.",
          ],
        },
        {
          heading: "Your rights",
          items: [
            "To find out whether your personal data is processed",
            "To request information about that processing",
            "To have incomplete or incorrect data corrected",
            "To have your data deleted or destroyed",
            "To withdraw your consent at any time",
            "To claim compensation if you suffer damage from unlawful processing",
          ],
          paragraphs: [`To use these rights, contact us on WhatsApp or by phone at ${phone}; we will reply as soon as we can.`],
        },
      ],
    },
  },
};

export const getLegalDoc = (locale: Locale, id: LegalId) => docs[locale][id];
