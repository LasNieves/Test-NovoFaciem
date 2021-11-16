import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="/public/image/icon_192-Dark.png"
          ></link>
          <meta name="theme-color" content="#0d7e83" />
        </Head>
        <body style={{ WebkitTapHighlightColor: "transparent" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
