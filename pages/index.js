import Head from "next/head"
import Hero from "@/components/Hero"
import MachineGrid from "@/components/MachineGrid"
import Link from "next/link"

const featuredMachines = [
  {
    title: "Kepçe",
    description: "Hafriyat ve kazı çalışmalarınız için her boyutta kepçe kiralama hizmeti.",
    image: "https://images.unsplash.com/photo-1605910347035-59a2b94f2061?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/makineler/kepce",
  },
  {
    title: "Kamyon",
    description: "Hafriyat ve inşaat malzemesi taşımacılığı için damperli kamyonlar.",
    image: "https://images.unsplash.com/photo-1751054631354-a42bd7609d75?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/makineler/kamyon",
  },
  {
    title: "Beko Loder",
    description: "Kazı ve yükleme işlemleri için beko loder kiralama seçenekleri.",
    image: "https://images.unsplash.com/photo-1759579479871-19dfbc9c39ba?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/makineler/kepce",
  },
]

const stats = [
  { value: "50+", label: "Makine" },
  { value: "200+", label: "Mutlu Müşteri" },
  { value: "10+", label: "Yıl Tecrübe" },
]

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Güvenilir Hizmet",
    description: "Yılların deneyimi ile profesyonel çözümler. Referanslarıyla kanıtlanmış hizmet kalitesi."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Uygun Fiyat",
    description: "Bütçenize uygun kiralama seçenekleri. En iyi fiyat garantisi ile hizmet veriyoruz."
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-1.596 1.596a1.125 1.125 0 01-1.591 0l-1.596-1.596a1.125 1.125 0 010-1.591l1.596-1.596a1.125 1.125 0 011.591 0l1.596 1.596a1.125 1.125 0 010 1.591zm3.166-3.166a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-1.592-4.588a1.125 1.125 0 010 1.591l-1.596 1.596a1.125 1.125 0 01-1.591 0L7.871 8.378a1.125 1.125 0 010-1.591l1.596-1.596a1.125 1.125 0 011.591 0l1.596 1.596a1.125 1.125 0 010 1.591z" />
      </svg>
    ),
    title: "Bakımlı Ekipman",
    description: "Düzenli bakımı yapılmış, güvenli ve yüksek performanslı iş makineleri."
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>İş Makinesi Kiralama | Kepçe, Kamyon Kiralama - Profesyonel Çözümler</title>
        <meta
          name="description"
          content="İş makinesi kiralama hizmeti. Kepçe, kamyon, beko loder gibi iş makinelerini uygun fiyatlarla kiralayın. 10+ yıl tecrübe, 200+ mutlu müşteri. Hemen teklif alın."
        />
      </Head>

      <Hero />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
              Öne Çıkan Makineler
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              İhtiyacınıza uygun iş makinesini keşfedin
            </p>
          </div>
          <MachineGrid machines={featuredMachines} />
          <div className="text-center mt-10">
            <Link
              href="/makineler"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-sm shadow-accent/20"
            >
              Tüm Makineleri Gör
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              href="tel:+905555555555"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              +90 555 555 55 55
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-8 max-w-lg mx-auto">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}