import Head from "next/head"
import MachineGrid from "@/components/MachineGrid"

const miniEkskavatorMachines = [
  {
    title: "Mini Ekskavatör 1.5 Ton",
    description: "En dar alanlarda çalışma için kompakt mini ekskavatör.",
    image: "/images/mini-15t.jpg",
  },
  {
    title: "Mini Ekskavatör 2 Ton",
    description: "Küçük boyut, büyük işler. Şehir içi kazı çalışmaları için.",
    image: "/images/mini-2t.jpg",
  },
  {
    title: "Mini Ekskavatör 3 Ton",
    description: "Dar alan ve bahçe çalışmaları için ideal boyut. Kolay taşınabilir.",
    image: "/images/mini-3t.jpg",
  },
]

export default function MiniEkskavator() {
  return (
    <>
      <Head>
        <title>Mini Ekskavatör Kiralama | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Mini ekskavatör kiralama. 1.5, 2 ve 3 tonluk kompakt modellerle dar alan çalışmaları için ideal."
        />
        <meta property="og:title" content="Mini Ekskavatör Kiralama | İş Makinesi Kiralama" />
        <meta
          property="og:description"
          content="Mini ekskavatör kiralama. 1.5, 2 ve 3 tonluk kompakt modellerle dar alan çalışmaları için ideal."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Mini Ekskavatör Kiralama
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Dar alan çalışmalarınız için kompakt ve manevra kabiliyeti yüksek mini ekskavatörler.
          </p>
        </div>
        <MachineGrid machines={miniEkskavatorMachines} />
      </div>
    </>
  )
}
