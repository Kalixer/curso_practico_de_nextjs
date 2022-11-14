import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
            <title>Dark Shadow</title>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-QRY3GQ0BDN"></script>
            <script 
                id="google-analytics"
                strategy="afterInteractive"
            >

                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments)}
                gtag('js', new Date());
                
                gtag('config', 'G-*******');
                `
                }
            </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}