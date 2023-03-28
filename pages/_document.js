import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
          <script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.10.2/lottie.min.js' defer></script>
          
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}