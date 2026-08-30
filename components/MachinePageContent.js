import Link from "next/link"
import { icons } from "./icons"

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-1 rounded-full bg-accent flex-shrink-0" />
      <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
        {children}
      </h2>
    </div>
  )
}

export default function MachinePageContent({ machine }) {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          {machine.intro}
        </p>
      </div>

      <section className="mt-28 lg:mt-40">
        <SectionTitle>Çalışma Alanları</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {machine.areas.map((area, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {icons[area.icon] || icons.target}
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 lg:mt-40">
        <SectionTitle>Hangi İşler İçin Uygundur?</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {machine.jobs.map((job, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 flex items-center gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-semibold text-card-foreground leading-relaxed">
                {job}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 lg:mt-40">
        <SectionTitle>En Sık Kullanılan Senaryolar</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {machine.useCases.map((use, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-accent/10 text-accent font-heading font-bold flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-3">
                {use.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{use.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 lg:mt-40">
        <SectionTitle>{machine.name} ile Çalışmanın Avantajları</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {machine.advantages.map((adv, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 hover:border-accent/20 hover:-translate-y-0.5"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {icons[adv.icon] || icons.target}
              </div>
              <h3 className="font-heading font-semibold text-lg text-card-foreground mb-3">
                {adv.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-28 lg:mt-40">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative px-6 sm:px-10 py-12 sm:py-16 text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight mb-5">
              Hemen Teklif Alın
            </h2>
            <p className="text-white/70 text-base sm:text-lg mb-10 max-w-xl mx-auto">
              {machine.name} kiralamak için bizi arayın veya iletişim formunu doldurun. Aynı gün
              uygun fiyatlı teklif sunalım.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/iletisim?makine=${encodeURIComponent(machine.name)}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 shadow-lg shadow-accent/25"
              >
                İletişime Geç
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+905353553187"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                +90 535 355 31 87
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}