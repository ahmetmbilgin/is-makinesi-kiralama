import Head from "next/head"
import MachineGrid from "@/components/MachineGrid"

const bekoLoderMachines = [
  {
    title: "Beko Loder 4x4",
    description: "Kazı ve yükleme işlerinde yüksek performans. 4 çeker, 3.5 ton kaldırma kapasitesi.",
    image: "/images/beko-1.jpg",
  },
  {
    title: "Beko Loder 3CX",
    description: "Çok yönlü kazıcı-yükleyici. 20 ton kazı kuvveti, dar alanlarda manevra kabiliyeti.",
    image: "/images/beko-2.jpg",
  },
  {
    title: "Beko Loder X-TR",
    description: "Ağır hizmet tipi kazıcı yükleyici. İnşaat ve hafriyat sahaları için ideal.",
    image: "/images/beko-3.jpg",
  },
]

export default function BekoLoder() {
  return (
    <>
      <Head>
        <title>Beko Loder Kiralama | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Kazıcı yükleyici (beko loder) kiralama. 4x4, 3CX ve X-TR modelleriyle uygun fiyatlı çözümler."
        />
        <meta property="og:title" content="Beko Loder Kiralama | İş Makinesi Kiralama" />
        <meta
          property="og:description"
          content="Kazıcı yükleyici (beko loder) kiralama. 4x4, 3CX ve X-TR modelleriyle uygun fiyatlı çözümler."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Beko Loder Kiralama
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Kazı ve yükleme işleriniz için güvenilir kazıcı yükleyici kiralama hizmeti.
          </p>
        </div>
        <MachineGrid machines={bekoLoderMachines} />
      </div>
    </>
  )
}
