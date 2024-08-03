// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>

        <meta charSet="UTF-8" />
        <meta name="keywords" content="Aditya Sugandhi, Software Engineer, Data Scientist, Web Development, Researcher" />
        <link rel="canonical" href="https://adityasugandhi.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon_io/site.webmanifest"/>
        
        {/* Add more site-wide tags here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
