import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-lg text-foreground tracking-tight">
              İş Makinesi Kiralama
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent rounded-lg hover:bg-muted transition-all duration-200">
              Ana Sayfa
            </Link>
            <Link href="/makineler" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent rounded-lg hover:bg-muted transition-all duration-200">
              Makineler
            </Link>
            <Link href="/hakkimizda" className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-accent rounded-lg hover:bg-muted transition-all duration-200">
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-accent rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-sm shadow-accent/25">
              İletişim
            </Link>
          </nav>

          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </div>

        <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-80 pb-4' : 'max-h-0'}`}>
          <div className="flex flex-col gap-1 pt-2 border-t border-border">
            <Link href="/" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </Link>
            <Link href="/makineler" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors" onClick={() => setMenuOpen(false)}>
              Makineler
            </Link>
            <Link href="/hakkimizda" className="px-4 py-3 text-sm font-medium rounded-lg hover:bg-muted transition-colors" onClick={() => setMenuOpen(false)}>
              Hakkımızda
            </Link>
            <Link href="/iletisim" className="mt-2 px-4 py-3 text-sm font-semibold text-white bg-accent rounded-lg text-center" onClick={() => setMenuOpen(false)}>
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}