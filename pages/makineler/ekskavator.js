import Head from "next/head"
import MachinePageContent from "@/components/MachinePageContent"
import { SITE_URL, SITE_IMAGE, AREA_SERVED } from "@/lib/site"

const ekskavatorMachine = {
  name: "Ekskavatör",
  intro:
    "Ekskavatör, yüksek kazı gücü ve istenen derinliklerde çalışabilme yeteneğiyle inşaat ve altyapı projelerinin ana makinesidir. Kırıcı gibi aparatlarla yıkım ve kaya işlerine özelleşebilir; büyük kapasitesiyle geniş sahalarda iş programını kesintisiz yürütür.",
  areas: [
    {
      icon: "home",
      title: "Büyük Hafriyat ve Şantiyeler",
      description: "Geniş sahalarda kot kazısı, yarma ve dolgu işlerinde en verimli çözümdür.",
    },
    {
      icon: "target",
      title: "Temel Kazıları",
      description: "Bina ve yapı temellerinin çukur kazılarında en doğru tercihtir.",
    },
    {
      icon: "droplet",
      title: "Altyapı ve Kanal Hatları",
      description: "Derin kanal, kolektör ve sanat yapıları kazılarında yüksek performans sunar.",
    },
    {
      icon: "cube",
      title: "Maden ve Taş Ocakları",
      description: "Ağır malzeme yükleme ve yol açma işlerinde büyük kapasite sağlar.",
    },
    {
      icon: "bolt",
      title: "Yıkım ve Kentsel Dönüşüm",
      description: "Kırıcı aparatıyla bina yıkımı ve enkaz yüklemesinde kullanılır.",
    },
    {
      icon: "skyline",
      title: "Baraj ve Altyapı Projeleri",
      description: "Su yapıları, köprü ayakları ve geniş kazı gerektiren projelerde vazgeçilmezdir.",
    },
  ],
  jobs: [
    "Derin temel ve bodrum kazısı",
    "Ağır malzeme kazı ve yükleme",
    "Yıkım ve kırma işleri",
    "Kanal, kolektör ve boru hattı kazıları",
    "Yarma, dolgu ve tesviye",
    "Kum ve agrega yükleme",
    "Büyük arazi tesviyesi ve gölet açma",
    "Kaya kazısı ve patlatma yardımı",
  ],
  useCases: [
    {
      title: "Temel kazısı",
      description: "İnşaat öncesi bodrum ve temel çukurunu programında ve güvenli şekilde tamamlar.",
    },
    {
      title: "Yıkım ve dönüşüm",
      description: "Kırıcı ile yıkım yapar, ardından enkazı aynı makineyle kamyonlara yükler.",
    },
    {
      title: "Geniş saha hafriyatı",
      description: "Binlerce metreküp toprağı kısa sürede kazıp taşımaya hazır hale getirir.",
    },
  ],
  advantages: [
    {
      icon: "check",
      title: "Bakımlı, sahaya hazır makineler",
      description: "Düzenli bakımı yapılmış makinelerimiz, işiniz başlamadan sahaya hazır gelir.",
    },
    {
      icon: "bolt",
      title: "Kırıcı ve çeşitli aparatlar",
      description: "Yıkım dahil farklı işler için ekipman desteği sağlıyoruz.",
    },
    {
      icon: "user",
      title: "Operatörlü veya operatörsüz",
      description: "Deneyimli operatörle ya da kendi ekibinizle kiralayabilirsiniz.",
    },
    {
      icon: "truck",
      title: "Nakliye ve lojistik",
      description: "Makinenizin sahanıza ulaşmasını birlikte planlayalım.",
    },
  ],
}

export default function Ekskavator() {
  return (
    <>
      <Head>
        <title>Ekskavatör Kiralama | Saha Makinem</title>
        <meta
          name="description"
          content="Ekskavatör kiralama. Temel kazısı, hafriyat ve yıkım işleri için paletli ve lastikli seçenekler. İstanbul Anadolu Yakası'nda uygun fiyatlı iş makinesi."
        />
        <link rel="canonical" href={`${SITE_URL}/makineler/ekskavator`} />
        <meta property="og:url" content={`${SITE_URL}/makineler/ekskavator`} />
        <meta property="og:image" content={SITE_IMAGE} />
        <meta property="og:title" content="Ekskavatör Kiralama | Saha Makinem" />
        <meta
          property="og:description"
          content="Ekskavatör kiralama. Temel kazısı, hafriyat ve yıkım işleri için paletli ve lastikli seçenekler. Uygun fiyat, güvenilir hizmet."
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
                      name: "Ekskavatör",
                      item: `${SITE_URL}/makineler/ekskavator`,
                    },
                  ],
                },
                {
                  "@type": "Service",
                  name: "Ekskavatör Kiralama",
                  url: `${SITE_URL}/makineler/ekskavator`,
                  serviceType: "Ekskavatör Kiralama",
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
            Ekskavatör
          </h1>
          <p className="font-heading font-medium text-lg sm:text-xl text-foreground/85 max-w-2xl mx-auto">
            Derin temel kazıları ve büyük hacimli hafriyat işleri için güçlü çözüm.
          </p>
        </div>
        <MachinePageContent machine={ekskavatorMachine} />
      </div>
    </>
  )
}