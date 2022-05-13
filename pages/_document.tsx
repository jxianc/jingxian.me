import { Html, Head, Main, NextScript } from "next/document"

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/Noto_Sans/NotoSans-Bold.ttf"
          as="font"
          type="truetype"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Noto_Sans/NotoSans-Regular.ttf"
          as="font"
          type="truetype"
          crossOrigin="anonymous"
        />
        <link href="/favicons/favicon.ico" rel="shortcut icon" />
        <link
          href="/favicons/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicons/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicons/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
