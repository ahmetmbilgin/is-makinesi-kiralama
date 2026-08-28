import Image from "next/image"
import Link from "next/link"

export default function MachineCard({ title, description, image, slug }) {
  return (
    <Link href={{ pathname: "/iletisim", query: { makine: title } }} className="group block">
      <div className="relative bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-accent/5 hover:border-accent/30 hover:-translate-y-1">
        <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            <h3 className="font-heading font-semibold text-lg text-card-foreground group-hover:text-accent transition-colors duration-200">
              {title}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
            Detaylı Bilgi
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  )
}