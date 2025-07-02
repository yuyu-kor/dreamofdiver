import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        {/* NanumSquare Neo CDN */}
        <link
          href="https://cdn.jsdelivr.net/gh/webfontworld/NanumSquareNeo/NanumSquareNeo.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
