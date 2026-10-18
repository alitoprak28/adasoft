# AdaSoft web sitesi

AdaSoft'un kurumsal sitesi. Next.js 16 (App Router), TypeScript ve Tailwind CSS 4 ile yazıldı. Tüm sayfalar derleme sırasında statik olarak üretilir.

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
| `src/content/site.ts` | Şirket bilgileri, iletişim, süreç adımları, kurucular, örnek projeler |
| `src/content/services.ts` | 9 hizmet ve 3 hizmet grubu. Her hizmet `/hizmetler/<slug>` sayfasını üretir |
| `src/content/sectors.ts` | 9 sektör. Her sektör `/sektorler/<slug>` sayfasını üretir |
| `src/components/home` | Ana sayfa bölümleri (hero, hizmetler, sektörler, teklif sihirbazı, hakkımızda) |
| `src/components/sections` | Sayfalar arası ortak bölümler (sayfa başlığı, SSS, süreç, CTA, proje kartları) |
| `src/components/layout` | Üst menü (açılır menüler dahil), footer, WhatsApp butonu |
| `src/components/brand` | Logo, Kıbrıs haritası (Natural Earth kıyı verisi) |
| `src/app/globals.css` | Marka renkleri (`@theme`), animasyonlar |

Yeni bir hizmet ya da sektör eklemek için ilgili içerik dosyasına bir kayıt eklemek yeterli; sayfa, menü, footer ve site haritası otomatik güncellenir.

## Yayından önce doldurulacaklar

Köşeli parantez içindeki her metin (`[...]`) bir yer tutucudur:

- `src/content/site.ts`: alan adı (`url`), telefon, WhatsApp numarası (`whatsappNumber`), e-posta, adres, kurucu adları
- Örnek projeler ve ekran görüntüleri (`projects`, hizmet `showcase`, sektör `audience.example`)
- Fiyatlar ve süreler (`[₺ başlangıç fiyatı]`, `[X hafta]`)
- Kurucu fotoğrafları

## Henüz yapılmayanlar

- Teklif formu gönderimi: form şu an sadece teşekkür ekranı gösteriyor (`src/components/home/quote-wizard.tsx` içindeki TODO).
- İngilizce sürüm: içerik dosyaları dile göre ayrılabilecek şekilde tutuluyor; `next-intl` ile `/en` eklenecek.
- Gizlilik, çerez ve KVKK sayfaları.
- Diğer hizmet ve sektör sayfaları için Mobil Uygulamalar ve Turizm ve Otel'deki kadar ayrıntılı içerik (SSS, süreç, örnekler).
