import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#EA580C" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:site_name" content="Saha Makinem" />
        <meta property="og:image" content="https://sahamakinem.com/images/hero.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body className="min-h-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
