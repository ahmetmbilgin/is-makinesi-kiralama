import Head from "next/head"
import MachineGrid from "@/components/MachineGrid"

const kepceMachines = [
  {
    title: "Paletli Ekskavatör",
    description: "Zorlu arazi koşullarında çalışma için paletli ekskavatör. 20 ton kapasite.",
    image: "https://images.unsplash.com/photo-1605910347035-59a2b94f2061?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
  {
    title: "Lastikli Ekskavatör",
    description: "Asfalt ve şehir içi çalışmalar için lastikli ekskavatör. 15 ton kapasite.",
    image: "https://images.unsplash.com/photo-1766595680974-e63877a2ab5b?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
  {
    title: "Mini Ekskavatör",
    description: "Dar alan çalışmaları için mini ekskavatör. 3 ton kapasite.",
    image: "https://images.unsplash.com/photo-1775880305793-5d50d35b90c5?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
]

export default function Kepce() {
  return (
    <>
      <Head>
        <title>Kepçe Kiralama | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Her boyutta kepçe kiralama. Paletli, lastikli ve mini ekskavatör seçenekleri. Uygun fiyat, hızlı hizmet."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Kepçe Kiralama
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hafriyat ve kazı çalışmalarınız için profesyonel kepçe kiralama hizmeti.
          </p>
        </div>
        <MachineGrid machines={kepceMachines} />
      </div>
    </>
  )
}
