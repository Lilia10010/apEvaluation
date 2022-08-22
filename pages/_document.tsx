import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <link rel="shortcut icon" href="/img/icon.svg" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />

          <meta name="title" content="OZ Energia" />
          <meta
            name="description"
            content="Negociação de dívidas parceladas em até 24x sem juros"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="#" />
          <meta property="og:title" content="Serasa" />
          <meta
            property="og:description"
            content="Negociação de dívidas parceladas em até 24x sem juros"
          />
          <meta property="og:image" content="img/star.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}