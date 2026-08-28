import Head from "next/head"
import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    title: "Beko Loder (Kazıcı Yükleyici)",
    description: "Kazı ve yükleme işleri için tek makinede iki çözüm.",
    image: "/images/beko-kategori.jpg",
    slug: "/makineler/beko-loder",
  },
  {
    title: "Ekskavatör (Paletli ve Lastikli)",
    description: "Her arazi koşulu için paletli ve lastikli ekskavatörler.",
    image: "/images/kepce-makine.jpg",
    slug: "/makineler/ekskavator",
  },
  {
    title: "Mini Ekskavatör (Küçük Tonaj)",
    description: "Dar alan çalışmaları için kompakt ve manevra kabiliyeti yüksek makineler.",
    image: "/images/mini-kategori.jpg",
    slug: "/makineler/mini-ekskavator",
  },
]

export default function Makineler() {
  return (
    <>
      <Head>
        <title>Tüm Makineler | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Kiralık beko loder, ekskavatör ve mini ekskavatör. Uygun fiyat, güvenilir hizmet."
        />
        <meta property="og:title" content="Tüm Makineler | İş Makinesi Kiralama" />
        <meta
          property="og:description"
          content="Beko loder, ekskavatör ve mini ekskavatör kiralama seçenekleri. Uygun fiyat, güvenilir hizmet."
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {categories.map((cat, index) => (
            <Link
              key={index}
              href={cat.slug}
              className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
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