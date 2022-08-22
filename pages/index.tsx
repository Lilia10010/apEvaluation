import { NextPage } from "next";
import Head from "next/head";
import { FormEvaluation } from "../src/components/formEvaluation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Form de validação | Serasa</title>
      </Head>
      <FormEvaluation />
    </div>
  );
};

export default Home;
