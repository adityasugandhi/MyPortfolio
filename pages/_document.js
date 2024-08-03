// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="Aditya Sugandhi, Software Engineer, Data Scientist, Web Development, Researcher" />
        <link rel="canonical" href="https://adityasugandhi.com" />
        {/* Add more site-wide tags here */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
