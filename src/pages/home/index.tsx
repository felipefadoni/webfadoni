import { Container, Header, HeaderBanner, Row } from "@/components/index";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <HeaderBanner />
      <Container>
        <Row>
          <div className="noticias-destaque">
            <div className="noticia-principal">
              <Link href="/noticia/noticia-principal">
                <a>
                  <p>
                    <time>May 4, 2022</time>
                  </p>
                  <h2>
                    Google lança 3 novos cursos com certificados
                    profissionalizantes
                  </h2>
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
            <div className="noticia-secundaria">
              <Link href="/noticia/noticia-secundaria">
                <a>
                  <p>
                    <time>May 4, 2022</time>
                  </p>
                  <h2>
                    Google lança 3 novos cursos com certificados
                    profissionalizantes
                  </h2>
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
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Home;
