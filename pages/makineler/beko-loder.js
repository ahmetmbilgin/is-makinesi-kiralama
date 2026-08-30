import Head from "next/head"
import MachinePageContent from "@/components/MachinePageContent"
import { SITE_URL, SITE_IMAGE, AREA_SERVED } from "@/lib/site"

const bekoMachine = {
  name: "Beko Loder",
  intro:
    "Beko loder, önünde yükleyici kepçesi ve arkasında kazıcı bombuyla iki ayrı makinenin işini birden gören çok yönlü bir iş makinesidir. Makine değiştirme derdini ortadan kaldırması ve dar alanlarda kolayca manevra yapması, onu küçük-orta ölçekli sahaların vazgeçilmezi yapar; halk arasında 'arabalı kepçe' olarak da bilinir.",
  areas: [
    {
      icon: "droplet",
      title: "Belediye ve Altyapı",
      description: "Kanal, su, doğalgaz ve elektrik hatlarının kazılıp kapatılması gibi altyapı işlerinin vazgeçilmezidir.",
    },
    {
      icon: "cube",
      title: "Hafriyat Şantiyeleri",
      description: "Temel kazısı, yıkıntı temizliği ve dolgu işlerinde hem kazar hem de yükler.",
    },
    {
      icon: "home",
      title: "İnşaat ve Kentsel Dönüşüm",
      description: "Dar arsa ve şantiye içlerinde manevrası kolay olduğu için dönüşüm sahalarında sık tercih edilir.",
    },
    {
      icon: "target",
      title: "Yol Çalışmaları",
      description: "Asfalt sökümü, banket düzenleme ve kaldırım işlerinde hızlı çözüm üretir.",
    },
    {
      icon: "skyline",
      title: "Tarım ve Arazi Düzenleme",
      description: "Ağaç sökümü, gölet yapımı ve arazi tesviyesi gibi kırsal işlerde pratik bir yardımcıdır.",
    },
    {
      icon: "bolt",
      title: "Bahçe ve Peyzaj",
      description: "Küçük yüzeylerde toprak serme, çukur ve havuz kazılarında idealdir.",
    },
  ],
  jobs: [
    "Kazı ve hafriyat işleri",
    "Toprak, moloz ve kum yükleme",
    "Kanal, boru ve kablo hattı açma",
    "Dolgu ve tesviye işleri",
    "Temel çukuru kazısı",
    "Yıkım sonrası enkaz temizliği",
    "Yol sökümü ve onarım",
    "Bahçe ve arazi düzenleme",
  ],
  useCases: [
    {
      title: "Şehir içi altyapı yenileme",
      description: "Dar caddelerde tek makineyle kazıp yükleyerek işi aksatmadan ilerler.",
    },
    {
      title: "Kentsel dönüşüm sahaları",
      description: "Dar arsalarda hem temel kazar hem hafriyatı kamyona yükler.",
    },
    {
      title: "Küçük-orta ölçekli hafriyat",
      description: "Günlük işlerde ekip değiştirmeden kazıdan nakliyeye uçtan uca destek verir.",
    },
  ],
  advantages: [
    {
      icon: "check",
      title: "Bakımlı, sahaya hazır makineler",
      description: "Düzenli bakımı yapılmış makinelerimiz, işiniz başlamadan sahaya hazır gelir.",
    },
    {
      icon: "user",
      title: "Operatörlü veya operatörsüz",
      description: "Deneyimli operatörle ya da kendi ekibinizle kiralamak size kalmış.",
    },
    {
      icon: "truck",
      title: "Nakliye organizasyonu",
      description: "Makinenin sahanıza ulaşımını biz organize ediyoruz.",
    },
    {
      icon: "bolt",
      title: "Hızlı teklif ve dönüş",
      description: "İhtiyacınızı söyleyin, aynı gün uygun fiyatlı teklif sunalım.",
    },
  ],
}

export default function BekoLoder() {
  return (
    <>
      <Head>
        <title>Beko Loder Kiralama | Saha Makinem</title>
        <meta
          name="description"
          content="Beko loder kiralama. Kazı ve yükleme işlerini tek makinede çözen güvenilir çözüm. İstanbul Anadolu Yakası'nda belediye, hafriyat ve inşaat sahaları için."
        />
        <link rel="canonical" href={`${SITE_URL}/makineler/beko-loder`} />
        <meta property="og:url" content={`${SITE_URL}/makineler/beko-loder`} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:title" content="Beko Loder Kiralama | Saha Makinem" />
        <meta
          property="og:description"
          content="Beko loder kiralama. Kazı ve yükleme işlerini tek makinede çözen güvenilir çözüm. Belediye, hafriyat ve inşaat sahaları için."
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
                      name: "Beko Loder",
                      item: `${SITE_URL}/makineler/beko-loder`,
                    },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Beko Loder Kiralama",
                  url: `${SITE_URL}/makineler/beko-loder`,
                  serviceType: "Beko Loder Kiralama",
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
            Beko Loder
          </h1>
          <p className="font-heading font-medium text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto">
            Kazı ve yükleme işlerini tek makinede birleştiren, belediye ve şantiye sahaları için pratik çözüm.
          </p>
        </div>
        <MachinePageContent machine={bekoMachine} />
      </div>
    </>
  )
}