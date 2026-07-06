import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="min-h-screen flex flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
