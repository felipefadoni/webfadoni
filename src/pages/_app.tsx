import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "src/styles/global-styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>WebFadoni programação, notícias e tecnologia</title>
        <meta
          name="description"
          content="WebFadoni, programação, notícias, tudo sobre o mundo da programação
            e da tecnologia, você vai encontrar aqui no WebFadoni."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
