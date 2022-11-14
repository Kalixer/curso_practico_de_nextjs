import { Html, Head, Main, NextScript, Script } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <Script id="google-analytics" strategy="afterInteractive">
          {` 
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            gtag('js', new Date());
            
            gtag('config', 'G-*******');
            `}
        </Script>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QRY3GQ0BDN"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
