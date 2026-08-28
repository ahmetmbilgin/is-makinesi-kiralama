import Head from "next/head"
import { useRouter } from "next/router"
import ContactForm from "@/components/ContactForm"

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "Telefon",
    value: "+90 535 355 31 87",
    href: "tel:+905353553187"
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Çalışma Saatleri",
    value: "Hafta içi: 08:00 - 18:00 / Cmt: 09:00 - 15:00",
    href: null
  }
]

export default function Iletisim() {
  const router = useRouter()
  const machine = router.query.makine

  return (
    <>
      <Head>
        <title>İletişim | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="İş makinesi kiralama için bize ulaşın. Telefon veya iletişim formu ile hemen teklif alın."
        />
        <meta property="og:title" content="İletişim | İş Makinesi Kiralama" />
        <meta
          property="og:description"
          content="İş makinesi kiralama için bize ulaşın. Telefon veya iletişim formu ile hemen teklif alın."
        />
      </Head>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            İletişim
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            İş makinesi kiralama talepleriniz için bize aşağıdaki yöntemlerle ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">
          <div>
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const content = (
                  <>
                    <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      <p className="font-semibold text-card-foreground">{item.value}</p>
                    </div>
                  </>
                )

                const baseClass =
                  "flex items-start gap-4 p-5 bg-card border border-border rounded-xl transition-all duration-200"

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className={`${baseClass} hover:border-accent/40 hover:shadow-sm hover:shadow-accent/10 hover:bg-accent/[0.02]`}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className={baseClass}>
                    {content}
                  </div>
                )
              })}
            </div>
          </div>

          <div>
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-card-foreground mb-2 select-none">İletişim Formu</h2>
              <p className="text-sm text-muted-foreground mb-6 select-none">
                Formu doldurun, en kısa sürede size dönüş yapalım.
              </p>
              <ContactForm machine={machine} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}