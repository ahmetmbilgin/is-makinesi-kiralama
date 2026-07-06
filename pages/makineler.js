import Head from "next/head"
import Link from "next/link"

const categories = [
  {
    title: "Kepçe",
    description: "Kazı, hafriyat ve yükleme işleri için her boyutta kepçe.",
    image: "https://images.unsplash.com/photo-1605910347035-59a2b94f2061?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/makineler/kepce",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  },
  {
    title: "Kamyon",
    description: "Damperli kamyonlarla hafriyat ve malzeme taşımacılığı.",
    image: "https://images.unsplash.com/photo-1751054631354-a42bd7609d75?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/makineler/kamyon",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    )
  },
]

export default function Makineler() {
  return (
    <>
      <Head>
        <title>Tüm Makineler | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Kiralık kepçe, kamyon ve diğer iş makineleri. Uygun fiyat, güvenilir hizmet."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Makinelerimiz
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            İhtiyacınıza uygun iş makinesini kategoriler arasından seçin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.slug}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center overflow-hidden">
                <div className="w-24 h-24 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/25">
                  {cat.icon}
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <h2 className="font-heading text-2xl font-bold text-card-foreground group-hover:text-accent transition-colors duration-200 mb-2">
                  {cat.title}
                </h2>
                <p className="text-card-foreground/60">{cat.description}</p>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                  İncele
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}