import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Kepçe ile inşaat çalışmaları"
          fill
          className="object-cover opacity-70 scale-110 animate-hero-zoom"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/50 to-slate-900/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.05] tracking-tight mb-4">
            İş Makinesi
            <span className="block text-accent">Kiralama</span>
          </h1>

          <p className="text-xl sm:text-2xl text-white/80 font-heading font-semibold mb-6">
            Profesyonel Çözümler
          </p>

          <p className="text-lg sm:text-xl text-white/60 max-w-xl mb-10 leading-relaxed">
            Kepçe kiralama hizmetinde güvenilir çözüm ortağınız. Uygun fiyat, profesyonel hizmet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/makineler"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25 text-base"
            >
              Makineleri İncele
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+905353553187"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200 text-base"
            >
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-base text-white font-bold whitespace-nowrap">+90 535 355 31 87</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 sm:gap-10 mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">Hızlı</div>
              <div className="text-base text-white/80 mt-1">Teslimat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">Güvenilir</div>
              <div className="text-base text-white/80 mt-1">Hizmet</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white font-heading">Uygun</div>
              <div className="text-base text-white/80 mt-1">Fiyat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}