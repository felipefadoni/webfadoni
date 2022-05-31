import { Container, Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import imageTeste from "../../assets/imagem.jpg";
import { Breadcrumb } from "../../components";

import styles from "./noticia-id.module.scss";

const Post: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>
          Testes das urnas demonstraram "maturidade" do sistema eleitoral,
          conclui comissão do TSE
        </title>
        <meta
          name="description"
          content="Comissão avaliadora dos testes sobre o sistema de votação
              apresentou relatório final nesta segunda-feira (30) ao ministro
              Edson Fachin, presidente do Tribunal Superior Eleitoral."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Breadcrumb />
          </Grid>
        </Grid>
      </Container>

      <div id={styles.rootNoticia}>
        <Container>
          <Grid container mb={2}>
            <Grid item xs={12}>
              <h1 itemProp="headline">
                Testes das urnas demonstraram "maturidade" do sistema eleitoral,
                conclui comissão do TSE
              </h1>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container mb={2}>
            <Grid item xs={12}>
              <h2 itemProp="alternativeHeadline">
                Comissão avaliadora dos testes sobre o sistema de votação
                apresentou relatório final nesta segunda-feira (30) ao ministro
                Edson Fachin, presidente do Tribunal Superior Eleitoral.
              </h2>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container mb={2}>
            <Grid item xs={12} mb={1}>
              <Image
                src={imageTeste}
                alt="WebFadoni"
                loading="lazy"
                layout="responsive"
              />
            </Grid>
            <Grid item xs={12}>
              <h5>
                Comissão avaliadora dos testes sobre o sistema de votação
                apresentou relatório final nesta segunda-feira (30) ao ministro
                Edson Fachin, presidente do Tribunal Superior Eleitoral.
              </h5>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container>
            <Grid item xs={12}>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>
              <p>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
              </p>

              <code>
                "Observa-se ao longo dos eventos do TPS realizados de 2009 até o
                momento, que os resultados apresentados demonstram a maturidade
                dos sistemas eleitorais", afirmou o documento.
                <img
                  src="https://static.poder360.com.br/2022/03/DamaresAlves-TarcisioDeFreitas-Republicanos-Filiacao-MichelleBolsonaro-MarcosPereira-HamiltonMourao-115-848x477.jpg"
                  alt="Tarcisio de Freitas"
                />
              </code>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container mt={2}>
            <Grid item xs={12}>
              <div className={styles.urlReferencia}>
                <a
                  href="https://www.poder360.com.br/eleicoes/doria-e-querido-porque-empresas-foram-para-mg-diz-tarcisio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.poder360.com.br/eleicoes/doria-e-querido-porque-empresas-foram-para-mg-diz-tarcisio/
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default Post;
