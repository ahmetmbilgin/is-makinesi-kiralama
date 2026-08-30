import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white/70 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 py-12 lg:py-16">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight">
                <span className="text-white">Saha</span>{" "}
                <span className="text-accent">Makinem</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Profesyonel iş makinesi kiralama hizmeti. Güvenilir ve uygun fiyatlı çözümler.
            </p>
          </div>

          <div>
            <Link href="/iletisim" className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4 hover:text-accent transition-colors inline-block">İletişim</Link>
            <ul className="space-y-3">
              <li>
                <a href="tel:+905353553187" className="text-sm text-white/50 hover:text-white transition-colors">
                  +90 535 355 31 87
                </a>
              </li>
              <li className="text-sm text-white/50">
                İstanbul Anadolu Yakası
              </li>
              <li className="text-sm text-white/50">
                Hafta içi 08:00 - 18:00 · Cmt 09:00 - 15:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Saha Makinem. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/30">
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Güvenilir Hizmet
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
