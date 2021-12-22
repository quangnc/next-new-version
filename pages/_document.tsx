import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/** Fonts: Inter */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap"
            rel="stylesheet"
          />
          {/** Fonts: Averta */}
          <link
            rel="preload"
            href="/assets/fonts/Averta-Regular.otf"
            as="font"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/Averta-Light.otf"
            as="font"
            crossOrigin="anonymous"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
