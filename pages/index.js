import Head from "next/head"
import Hero from "@/components/Hero"
import Link from "next/link"

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Zamanında Teslimat",
    description: "Belirlenen zamanda, gecikme olmadan teslimat. Projeniz hiç aksamasın."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Güvenilir İş Ortağı",
    description: "İhtiyacınıza göre özel çözümler, açık ve dürüst iletişim."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Teknik Destek",
    description: "Her türlü sorun ve ihtiyacınızda hızlı yanıt."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    title: "Bakımlı Filo",
    description: "Düzenli bakımı yapılmış, güvenli ve yüksek performanslı iş makineleri."
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>İş Makinesi Kiralama | Kepçe Kiralama - Profesyonel Çözümler</title>
        <meta
          name="description"
          content="İş makinesi kiralama hizmeti. Kepçe gibi iş makinelerini uygun fiyatlarla kiralayın. Hemen teklif alın."
        />
        <meta property="og:title" content="İş Makinesi Kiralama | Kepçe Kiralama - Profesyonel Çözümler" />
        <meta
          property="og:description"
          content="İş makinesi kiralama hizmeti. Beko loder, ekskavatör ve mini ekskavatörü uygun fiyatlarla kiralayın. Hemen teklif alın."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RentalService",
              name: "İş Makinesi Kiralama",
              telephone: "+90 535 355 31 87",
              areaServed: "TR",
              availableLanguage: "Turkish",
              description:
                "Beko loder, ekskavatör ve mini ekskavatör kiralama hizmeti. Uygun fiyat, güvenilir ve profesyonel çözümler.",
              brand: {
                "@type": "Brand",
                name: "İş Makinesi Kiralama",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Beko Loder Kiralama" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Ekskavatör Kiralama" },
                },
                {
                  "@type": "Offer",
                  itemOffered: { "@type": "Service", name: "Mini Ekskavatör Kiralama" },
                },
              ],
            }),
          }}
        />
      </Head>

      <Hero />

      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Neden Biz?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sizi fark yaratan hizmet anlayışımızla tanıştıralım
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            Hemen Teklif Alın
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            İhtiyacınıza uygun iş makinesini kiralamak için bizi arayın veya iletişim formunu doldurun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
            >
              İletişime Geç
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+905353553187"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +90 535 355 31 87
            </a>
          </div>
        </div>
      </section>
    </>
  )
}