import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Autour+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <h1 className="dont-show-h1">
            WebFadoni, programação, notícias, tudo sobre o mundo da programação
            e da tecnologia, você vai encontrar aqui no WebFadoni.
          </h1>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
