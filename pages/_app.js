import "@/styles/globals.css"
import Head from "next/head"
import Layout from "@/components/Layout"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "RentalService",
              name: "İş Makinesi Kiralama",
              telephone: "+90 535 355 31 87",
              areaServed: "TR",
              availableLanguage: "Turkish",
              serviceType: "Beko Loder, Ekskavatör ve Mini Ekskavatör Kiralama",
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
            }),
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
