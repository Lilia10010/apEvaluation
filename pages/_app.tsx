import type { AppProps } from "next/app";

import StyleGlobal from "../src/styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <StyleGlobal />
    </>
  );
}

export default MyApp;
