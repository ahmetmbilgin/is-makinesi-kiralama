import Head from "next/head"
import MachineGrid from "@/components/MachineGrid"

const ekskavatorMachines = [
  {
    title: "Lastikli Ekskavatör 15 Ton",
    description: "Şehir içi ve asfalt çalışmalar için hızlı yer değiştirme imkanı.",
    image: "/images/ekskavator-15-lastikli.jpg",
  },
  {
    title: "Paletli Ekskavatör 20 Ton",
    description: "Zorlu arazi koşullarında üstün çekiş gücü. 20 ton çalışma ağırlığı.",
    image: "/images/ekskavator-20.jpg",
  },
  {
    title: "Paletli Ekskavatör 30 Ton",
    description: "Büyük ölçekli hafriyat projeleri için güçlü paletli ekskavatör.",
    image: "/images/ekskavator-15-yellow.jpg",
  },
]

export default function Ekskavator() {
  return (
    <>
      <Head>
        <title>Ekskavatör Kiralama | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Paletli ve lastikli ekskavatör kiralama. 15, 20 ve 30 tonluk modellerle uygun fiyatlı çözümler."
        />
        <meta property="og:title" content="Ekskavatör Kiralama | İş Makinesi Kiralama" />
        <meta
          property="og:description"
          content="Paletli ve lastikli ekskavatör kiralama. 15, 20 ve 30 tonluk modellerle uygun fiyatlı çözümler."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Ekskavatör Kiralama
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Paletli ve lastikli ekskavatörlerle her işinize uygun güçlü çözümler.
          </p>
        </div>
        <MachineGrid machines={ekskavatorMachines} />
      </div>
    </>
  )
}
