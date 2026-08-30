import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/makineler", label: "Makineler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  function isActive(href) {
    if (href === "/") return router.pathname === "/"
    return router.pathname.startsWith(href)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm shadow-black/5">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight">
              <span className="text-foreground">Saha</span>{" "}
              <span className="text-accent">Makinem</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "text-foreground/80 hover:text-accent hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className={`ml-2 px-5 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                isActive("/iletisim")
                  ? "text-white bg-accent/80 shadow-sm shadow-accent/25"
                  : "text-white bg-accent hover:bg-accent/90 shadow-sm shadow-accent/25"
              }`}
            >
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
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  isActive(link.href)
                    ? "text-accent bg-accent/10"
                    : "hover:bg-muted"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className={`mt-2 px-4 py-3 text-sm font-semibold rounded-lg text-center transition-colors ${
                isActive("/iletisim")
                  ? "text-white bg-accent/80"
                  : "text-white bg-accent"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
