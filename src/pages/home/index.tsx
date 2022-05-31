import { Container, Grid } from "@mui/material";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import styles from "./home.module.scss";

import imageTeste from "@/assets/imagem.jpg";

const news = [
  {
    url: "/noticia/teste-01",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-02",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-03",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-04",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-05",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-06",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-01",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-02",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-03",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-04",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-05",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
  {
    url: "/noticia/teste-06",
    titulo: "Google lança 3 novos cursos com certificados profissionalizantes",
    time: "04/05/2022 - 13:19",
  },
];

const Home: NextPage = () => {
  return (
    <div id={styles.rootHome}>
      <Container>
        <Grid container mt={2} spacing={2} alignItems="center">
          <Grid item xs={12}>
            <div className={styles.primary}>
              <Link href="/noticia/principal">
                <a
                  title="Google lança 3 novos cursos com certificados
                    profissionalizantes"
                >
                  <time>May 20, 2022 2:00 a.m. PT</time>
                  <h3>
                    Google lança 3 novos cursos com certificados
                    profissionalizantes
                  </h3>
                  <p>
                    O Google está abrindo a semana marcada pelo Dia do
                    Trabalhador lançando, nesta segunda-feira (2), três novos
                    cursos profissionalizantes, com certificado da empresa de
                    tecnologia Coursera. As três opções de formação, que irão se
                    juntar ao já conhecido Suporte de TI, não exigem nenhum tipo
                    de conhecimento específico na área e são voltados para
                    aqueles que querem entrar no mercado de trabalho, mudar de
                    área profissional ou crescer na carreira.
                  </p>
                </a>
              </Link>
            </div>
          </Grid>
        </Grid>
        <Grid container mt={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {news.map((item) => (
                <Grid key={item.url} item xs={12} sm={6} md={4} lg={4}>
                  <div className={styles.secondary}>
                    <Link href={item.url}>
                      <a>
                        <Image
                          src={imageTeste}
                          alt="WebFadoni"
                          loading="lazy"
                          layout="responsive"
                        />
                        <div className={styles.text}>
                          <time>{item.time}</time>
                          <h3>{item.titulo}</h3>
                        </div>
                      </a>
                    </Link>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
