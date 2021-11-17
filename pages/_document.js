import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="theme-color" content="#0d7e83" />
          <meta name="MobileOptimized" content="width"></meta>
          <meta name="HandheldFriendly" content="true"></meta>
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
