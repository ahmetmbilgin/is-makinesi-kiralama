import "@/styles/globals.css"
import Head from "next/head"
import Layout from "@/components/Layout"
import { poppins, openSans } from "@/lib/fonts"
import { SITE_URL, SITE_NAME, SITE_TEL } from "@/lib/site"

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${openSans.variable} font-body`}>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${SITE_URL}/#organization`,
                  name: SITE_NAME,
                  url: SITE_URL,
                  logo: `${SITE_URL}/images/hero.jpg`,
                  telephone: SITE_TEL,
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: SITE_TEL,
                    contactType: "customer service",
                    areaServed: "TR",
                    availableLanguage: "Turkish",
                  },
                },
                {
                  "@type": "WebSite",
                  "@id": `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: SITE_NAME,
                  inLanguage: "tr-TR",
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
              ],
            }),
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}