# AdaSoft web sitesi

AdaSoft'un kurumsal sitesi. Next.js 16 (App Router), TypeScript ve Tailwind CSS 4 ile yazıldı. Site Türkçe ve İngilizcedir; tüm sayfalar derleme sırasında iki dilde statik olarak üretilir.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # üretim derlemesi
npm run lint
```

## Klasörler

| Yol | İçerik |
| --- | --- |
| `src/i18n/config.ts` | Diller (`tr`, `en`) ve varsayılan dil |
| `src/i18n/routes.ts` | İki dilin URL yapısı: hizmet ve sektör slug'ları, ana sayfa bölüm çapaları, dil değiştirirken aynı sayfanın karşılığı |
| `src/i18n/dictionaries.ts` | Menü, butonlar, form ve bölüm başlıkları gibi arayüz metinleri (TR + EN) |
| `src/content/site.ts` | Şirket bilgileri, iletişim, süreç adımları, kurucular, örnek projeler |
| `src/content/services.ts` | 9 hizmet ve 3 hizmet grubu, her biri TR + EN metinle. Her hizmet `/hizmetler/<slug>` ve `/en/services/<slug>` sayfalarını üretir |
| `src/content/sectors.ts` | 9 sektör, her biri TR + EN metinle. Her sektör `/sektorler/<slug>` ve `/en/industries/<slug>` sayfalarını üretir |
| `src/app/(tr)`, `src/app/(en)` | İki dilin rotaları. Her grubun kendi `<html lang>` kök layout'u var |
| `src/views` | Rotaların ortak sayfa gövdeleri ve metadata'sı (iki dil aynı bileşeni kullanır) |
| `src/components/home` | Ana sayfa bölümleri (hero, hizmetler, sektörler, teklif sihirbazı, hakkımızda) |
| `src/components/sections` | Sayfalar arası ortak bölümler (sayfa başlığı, SSS, süreç, CTA, proje kartları) |
| `src/components/layout` | Üst menü (açılır menüler dahil), TR/EN dil düğmesi, footer, WhatsApp butonu |
| `src/components/brand` | Logo, Kıbrıs haritası (Natural Earth kıyı verisi) |
| `src/assets/projects` | Proje kartlarındaki site ekran görüntüleri (1280×800 WebP) |
| `src/app/globals.css` | Marka renkleri (`@theme`), animasyonlar |

Yeni bir hizmet ya da sektör eklemek için `src/i18n/routes.ts` içine iki dilde slug'ını, ilgili içerik dosyasına da TR + EN metnini eklemek yeterli; sayfalar, menü, footer ve site haritası otomatik güncellenir. Bir dilde slug ya da zorunlu bir metin alanı eksikse TypeScript hata verir.

## Diller

| Sayfa | Türkçe | İngilizce |
| --- | --- | --- |
| Ana sayfa | `/` | `/en` |
| Hizmet | `/hizmetler/mobil-uygulama` | `/en/services/mobile-apps` |
| Sektör | `/sektorler/turizm-otel` | `/en/industries/tourism-hotels` |

- Türkçe varsayılan dildir ve ön eksizdir. İngilizce `/en` altındadır.
- Üst menüdeki TR/EN düğmesi aynı sayfanın diğer dildeki karşılığına gider. İki dil ayrı kök layout kullandığı için geçişte sayfa yeniden yüklenir.
- Her sayfa `hreflang` alternatiflerini (`tr`, `en`, `x-default`) ve kendi dilindeki canonical adresini bildirir; site haritası da her sayfanın iki dildeki adresini içerir.
- Eşleşmeyen adresler `src/app/global-not-found.tsx` içindeki iki dilli 404 sayfasını gösterir.

## İletişim, teklif formu ve yasal metinler

- Telefon ve WhatsApp numarası `src/content/site.ts` içinde (`phoneDisplay`, `whatsappNumber`). Sitedeki bütün WhatsApp butonları ve teklif formu bu numaraya gider. Ofis adresi yok; iletişim WhatsApp ve telefonla.
- Teklif formu hiçbir veriyi sunucuya kaydetmez: cevapları hazır bir WhatsApp mesajına çevirir, ziyaretçi WhatsApp'ta Gönder'e basınca mesaj gelir. KVKK onay kutusu zorunludur.
- Yasal metinler `src/content/legal.ts` içinde: Gizlilik ve Çerez Politikası (`/gizlilik`, `/en/privacy`) ve KVKK Aydınlatma Metni (`/kvkk`, `/en/data-protection`). Metinler sitenin bugünkü haline göre yazıldı (çerez ve analiz aracı yok, form WhatsApp'a gidiyor). Bunlardan biri değişirse metinler de güncellenmeli.

## Yayından önce doldurulacaklar

Köşeli parantez içindeki her metin (`[...]`) bir yer tutucudur:

- `src/content/site.ts`: alan adı (`url`), e-posta (boşken e-posta satırları gizli), kurucu adları
- Örnek projeler ve ekran görüntüleri (`projects`, hizmet `showcase`, sektör `audience.example`)
- Fiyatlar ve süreler (`[₺ başlangıç fiyatı]`, `[X hafta]`)
- Kurucu fotoğrafları

## Henüz yapılmayanlar

- İngilizce metinlerin anadili İngilizce olan biri tarafından gözden geçirilmesi.
- Yasal metinlerin bir hukukçu tarafından gözden geçirilmesi; tescilli bir şirket unvanı varsa veri sorumlusu bölümüne eklenmesi.
- Diğer hizmet ve sektör sayfaları için Mobil Uygulamalar ve Turizm ve Otel'deki kadar ayrıntılı içerik (SSS, süreç, örnekler).
