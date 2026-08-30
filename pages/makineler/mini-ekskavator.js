import Head from "next/head"
import MachinePageContent from "@/components/MachinePageContent"
import { SITE_URL, SITE_IMAGE, AREA_SERVED } from "@/lib/site"

const miniEkskavatorMachine = {
  name: "Mini Ekskavatör",
  intro:
    "Mini ekskavatör, kompakt boyutu ve yüksek manevra yeteneğiyle küçük işleri büyük makineler olmadan çözen bir kazı makinesidir. Bahçe, teras, bina içi ve kaldırım kenarı gibi ulaşılması güç noktalarda, işinizi kolayca ve hassas biçimde tamamlamanızı sağlar.",
  areas: [
    {
      icon: "skyline",
      title: "Bahçe ve Peyzaj",
      description: "Ağaç sökümü, çukur, havuz ve teras kazılarında kompakt ve hassas çalışır.",
    },
    {
      icon: "droplet",
      title: "Şehir İçi Altyapı",
      description: "Dar caddelerde su, doğalgaz ve kablo hatlarının kazısında pratik çözüm üretir.",
    },
    {
      icon: "home",
      title: "Küçük Temel ve Havuz",
      description: "Yapı temelleri, havuz havzası ve bodrum kazılarında idealdir.",
    },
    {
      icon: "cube",
      title: "Boru ve Kanal Döşeme",
      description: "Kanal açma, boru yerleştirme ve üzerinin kapatılmasında hızlıdır.",
    },
    {
      icon: "target",
      title: "Yol ve Kaldırım Yenileme",
      description: "Asfalt sökümü ve kaldırım onarımında dar alan avantajı sağlar.",
    },
    {
      icon: "location",
      title: "İç Avlu ve Sınırlı Alanlar",
      description: "Kamyon ve büyük makinenin ulaşamadığı dar bölgelerde vazgeçilmezdir.",
    },
  ],
  jobs: [
    "Dar alan ve temel kazısı",
    "Bahçe ve peyzaj düzenleme",
    "Boru, kanal ve kablo hattı döşeme",
    "Havuz ve gölet kazısı",
    "Yol, kaldırım ve parke sökümü",
    "Ağaç sökümü ve çukur açma",
    "Küçük ölçekli yıkım ve temizlik",
    "Bina içi ve iç avlu çalışmaları",
  ],
  useCases: [
    {
      title: "Şehir içi onarım",
      description: "Trafiği az aksatarak dar caddede hızlı ve güvenli kazı yapar.",
    },
    {
      title: "Bahçe ve villa işleri",
      description: "Çit, teras ve havuz yapımında toprağı hassas biçimde işler.",
    },
    {
      title: "Altyapı hatları",
      description: "Bina girişlerinden sokak hattına kadar boru kazılarını tamamlar.",
    },
  ],
  advantages: [
    {
      icon: "truck",
      title: "Kolay nakliye",
      description: "Küçük boyutu ve lojistik kolaylığı, nakliye derdini ortadan kaldırır.",
    },
    {
      icon: "money",
      title: "Düşük maliyet",
      description: "Büyük makineye göre yakıt ve işletme gideri çok daha düşüktür.",
    },
    {
      icon: "user",
      title: "Operatörlü veya operatörsüz",
      description: "İhtiyacınıza göre esnek kiralama seçenekleri sunuyoruz.",
    },
    {
      icon: "bolt",
      title: "Hızlı teklif ve dönüş",
      description: "İhtiyacınızı söyleyin, aynı gün uygun fiyatlı teklif sunalım.",
    },
  ],
}

export default function MiniEkskavator() {
  return (
    <>
      <Head>
        <title>Mini Ekskavatör Kiralama | Saha Makinem</title>
        <meta
          name="description"
          content="Mini ekskavatör kiralama. Bahçe, peyzaj ve dar alan kazı işleri için kompakt çözümler. İstanbul Anadolu Yakası'nda güvenilir ve uygun fiyatlı hizmet."
        />
        <link rel="canonical" href={`${SITE_URL}/makineler/mini-ekskavator`} />
        <meta property="og:url" content={`${SITE_URL}/makineler/mini-ekskavator`} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:title" content="Mini Ekskavatör Kiralama | Saha Makinem" />
        <meta
          property="og:description"
          content="Mini ekskavatör kiralama. Bahçe, peyzaj ve dar alan kazı işleri için kompakt çözümler. Güvenilir ve uygun fiyatlı."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Ana Sayfa", item: SITE_URL },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Makineler",
                      item: `${SITE_URL}/makineler`,
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Mini Ekskavatör",
                      item: `${SITE_URL}/makineler/mini-ekskavator`,
                    },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Mini Ekskavatör Kiralama",
                  url: `${SITE_URL}/makineler/mini-ekskavator`,
                  serviceType: "Mini Ekskavatör Kiralama",
                  provider: { "@id": `${SITE_URL}/#organization` },
                  areaServed: {
                    "@type": "AdministrativeArea",
                    name: AREA_SERVED.name,
                    description: AREA_SERVED.description,
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="text-center mb-14 lg:mb-20">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-5">
            Mini Ekskavatör
          </h1>
          <p className="font-heading font-medium text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto">
            Büyük makinelerin giremediği alanlar ve hassas kazı işleri için kompakt çözüm.
          </p>
        </div>
        <MachinePageContent machine={miniEkskavatorMachine} />
      </div>
    </>
  )
}