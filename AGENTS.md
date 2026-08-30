<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Saha Makinem — İş Makinesi Kiralama Platformu

## Teknoloji

- Next.js 16 (Pages Router) + Tailwind CSS v4 + Formspree
- Hosting: Vercel (ücretsiz)

## Komutlar

| Komut | Açıklama |
|---|---|
| `npm run dev` | Geliştirme sunucusu (`localhost:3000`) |
| `npm run build` | Production build |
| `npm run start` | Production sunucuyu başlat |
| `npm run lint` | ESLint ile kod kontrolü |

## Önemli Kurallar

- **SEO**: Her sayfada `next/head` `<Head>` ile unique title + meta description kullan. `lib/site.js` içindeki `SITE_URL`/`SITE_NAME`/`SITE_IMAGE` sabitlerini kullan: her sayfaya `<link rel="canonical">`, `og:url`, `og:image` ekle. `pages/_app.js` genel `Organization`/`WebSite` JSON-LD'yi taşır; sayfa bazlı şemalar (BreadcrumbList, Service, ItemList) sayfa `<Head>`'inde olmalı.
- **Font**: Google Fonts `@import` KULLANMA. `lib/fonts.js` üzerinden `next/font` kullan, sınıfları `pages/_app.js` wrapper div'ine ekle.
- **Görseller**: `next/image` ile kullan. SVG placeholder'lar `public/images/` altında. Gerçek fotoğraflar `.jpg`/`.webp` olarak aynı klasöre eklenmeli.
- **Form**: Formspree kullan. Form action: `https://formspree.io/f/xxxxxx` — `method="POST"` zorunlu. Formspree ID'sini `components/ContactForm.js` içinde güncelle.
- **Routing**: Pages Router — `pages/` altındaki dosyalar otomatik route olur.
- **Stil**: Tailwind CSS v4 — `@import "tailwindcss"` kullan, `@theme` ile özelleştir. `tailwind.config.js` yok.
- **İletişim**: Telefon numarası sitede sabit gösterilecek (`+90 535 355 31 87`). Müşteri form doldurur veya arar.
- **Güncellenmesi gerekenler**: Formspree ID'si, telefon numarası, email adresi, gerçek fotoğraflar.
