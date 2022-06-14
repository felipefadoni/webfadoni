/* eslint-disable @next/next/no-img-element */
import { Container, Grid } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import { Breadcrumb } from '../../components';

import { GetServerSideProps } from 'next';
import { NoticiaVisualizarProps } from 'src/config/api/domain/noticias/interface/noticias';
import { getOneNoticia } from 'src/config/api/domain/noticias/repository';
import styles from './noticia-id.module.scss';

interface Props {
  noticia: NoticiaVisualizarProps;
}

export default function Post({ noticia }: Props) {
  function createMarkup() {
    return { __html: noticia.texto };
  }

  return (
    <>
      <Head>
        <title>{noticia.titulo}</title>
        <meta name="description" content={noticia?.subtitulo && noticia.titulo} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Breadcrumb titulo={noticia.titulo} />
          </Grid>
        </Grid>
      </Container>

      <div id={styles.rootNoticia}>
        <Container>
          <Grid container mb={2}>
            <Grid item xs={12}>
              <h6 itemProp="headline">{noticia.time}</h6>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container mb={2}>
            <Grid item xs={12}>
              <h1 itemProp="headline">{noticia.titulo}</h1>
            </Grid>
          </Grid>
        </Container>

        {noticia?.subtitulo ? (
          <Container>
            <Grid container mb={2}>
              <Grid item xs={12}>
                <h2 itemProp="alternativeHeadline">{noticia?.subtitulo}</h2>
              </Grid>
            </Grid>
          </Container>
        ) : null}

        {noticia.imagem ? (
          <Container>
            <Grid container mb={2}>
              <Grid item xs={12} mb={1}>
                <Image
                  src={noticia.imagem}
                  alt="WebFadoni"
                  loading="eager"
                  layout="responsive"
                  height="488"
                  width="868"
                />
              </Grid>
              {noticia?.imagemDescricao ? (
                <Grid item xs={12}>
                  <h5>{noticia?.imagemDescricao}</h5>
                </Grid>
              ) : null}
            </Grid>
          </Container>
        ) : null}

        <Container>
          <Grid container>
            <Grid item xs={12}>
              {noticia.texto ? <div dangerouslySetInnerHTML={createMarkup()} /> : null}
            </Grid>
          </Grid>
        </Container>

        {noticia?.referencia ? (
          <Container>
            <Grid container mt={2}>
              <Grid item xs={12}>
                <div className={styles.urlReferencia}>
                  <a href={noticia?.referencia} target="_blank" rel="noreferrer">
                    {noticia?.referencia}
                  </a>
                </div>
              </Grid>
            </Grid>
          </Container>
        ) : null}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { url } = params as { url: string };

  const getNoticia = await getOneNoticia({ url });

  return {
    props: {
      noticia: { ...getNoticia },
    },
  };
};
