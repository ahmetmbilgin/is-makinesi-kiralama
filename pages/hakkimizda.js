import Head from "next/head"
import Link from "next/link"

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Güvenilirlik",
    description: "Yılların deneyimi ve referanslarıyla kanıtlanmış hizmet kalitesi."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-1.596 1.596a1.125 1.125 0 01-1.591 0l-1.596-1.596a1.125 1.125 0 010-1.591l1.596-1.596a1.125 1.125 0 011.591 0l1.596 1.596a1.125 1.125 0 010 1.591zm3.166-3.166a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-1.592-4.588a1.125 1.125 0 010 1.591l-1.596 1.596a1.125 1.125 0 01-1.591 0L7.871 8.378a1.125 1.125 0 010-1.591l1.596-1.596a1.125 1.125 0 011.591 0l1.596 1.596a1.125 1.125 0 010 1.591z" />
      </svg>
    ),
    title: "Kaliteli Ekipman",
    description: "Düzenli bakımı yapılmış, güvenli ve yüksek performanslı makineler."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Hızlı Teslimat",
    description: "Sipariş sonrası en kısa sürede ekipmanlarınızı teslim ediyoruz."
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Müşteri Odaklı",
    description: "7/24 ulaşılabilir müşteri desteği ile her zaman yanınızdayız."
  }
]

export default function Hakkimizda() {
  return (
    <>
      <Head>
        <title>Hakkımızda | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="İş makinesi kiralama sektöründe yılların deneyimi. Güvenilir, uygun fiyatlı ve profesyonel hizmet."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Hakkımızda
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            İş Makinesi Kiralama olarak, inşaat ve hafriyat sektöründe kaliteli iş makinelerini
            uygun fiyatlarla müşterilerimizin hizmetine sunuyoruz.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-accent text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <h2 className="font-heading text-xl font-bold text-card-foreground mb-3">Misyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Müşterilerimize güvenilir, bakımlı ve modern iş makinelerini en uygun fiyatlarla
                sunarak işlerini zamanında ve verimli bir şekilde tamamlamalarına yardımcı olmak.
              </p>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h2 className="font-heading text-xl font-bold text-card-foreground mb-3">Vizyonumuz</h2>
              <p className="text-muted-foreground leading-relaxed">
                Müşterilerimizin her projede güvendiği, zamanında teslimat ve
                kaliteli hizmetle fark yaratan bir kiralama firması olmak.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center text-foreground tracking-tight mb-10">
              Değerlerimiz
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:border-accent/30 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-heading font-semibold text-card-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 sm:p-12 text-center">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
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
                href="tel:+905555555555"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +90 555 555 55 55
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}