import Head from "next/head"
import Link from "next/link"

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Sayfa Bulunamadı | Saha Makinem</title>
        <meta
          name="description"
          content="Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya makinelerimize göz atın."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center">
        <div className="text-6xl sm:text-7xl font-black font-heading text-accent mb-4">404</div>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3">
          Sayfa Bulunamadı
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Aradığınız sayfa taşınmış veya hiç var olmamış olabilir. İhtiyacınıza uygun iş makinesini
          makineler sayfamızdan inceleyebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
          >
            Ana Sayfa
          </Link>
          <Link
            href="/makineler"
            className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground font-semibold rounded-xl hover:border-accent/40 transition-all duration-200"
          >
            Makinelerimiz
          </Link>
          <a
            href="tel:+905353553187"
            className="inline-flex items-center justify-center px-8 py-4 bg-accent/5 text-accent font-semibold rounded-xl border border-accent/25 hover:bg-accent/10 transition-all duration-200"
          >
            +90 535 355 31 87
          </a>
        </div>
      </div>
    </>
  )
}