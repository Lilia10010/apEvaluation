import { NextPage } from "next";
import Head from "next/head";
import { FormEvaluation } from "../src/components/formEvaluation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Form de validação | Serasa</title>
        <link rel="shortcut icon" href="/img/icon.svg" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="theme-color" content="#4285f4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <meta name="title" content="Serasa" />
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

      <FormEvaluation />
    </div>
  );
};

export default Home;
