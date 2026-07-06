import Head from "next/head"
import MachineGrid from "@/components/MachineGrid"

const kamyonMachines = [
  {
    title: "Damperli Kamyon",
    description: "Hafriyat ve inşaat atığı taşımacılığı için 20 ton kapasiteli damperli kamyon.",
    image: "https://images.unsplash.com/photo-1751054631354-a42bd7609d75?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
  {
    title: "Tır",
    description: "Ağır yük taşımacılığı için 40 ton kapasiteli tır.",
    image: "https://images.unsplash.com/photo-1697847726197-bc8bd6cc6e4d?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
  {
    title: "Kamyonet",
    description: "Hafif yük taşımacılığı için 3.5 ton kapasiteli kamyonet.",
    image: "https://images.unsplash.com/photo-1769160078514-70dcfed2a17e?fm=jpg&q=80&w=800&auto=format&fit=crop",
    slug: "/iletisim",
  },
]

export default function Kamyon() {
  return (
    <>
      <Head>
        <title>Kamyon Kiralama | İş Makinesi Kiralama</title>
        <meta
          name="description"
          content="Damperli kamyon, tır ve kamyonet kiralama. Hafriyat ve yük taşımacılığı için uygun fiyatlı çözümler."
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-2">Kamyon Kiralama</h1>
        <p className="text-gray-600 mb-10">
          Taşımacılık ve hafriyat işleriniz için güvenilir kamyon kiralama hizmeti.
        </p>
        <MachineGrid machines={kamyonMachines} />
      </div>
    </>
  )
}
