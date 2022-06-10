import { Container, Grid } from '@mui/material';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import InfiniteScroll from 'react-infinite-scroll-component';

import styles from './home.module.scss';

import NewsBlock from '@/components/NewsBlock';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import { NoticiaPrincipalHome, NoticiasListadasHome } from 'src/config/api/domain/noticias/interface/noticias';
import { getHomeNoticiasRepository } from 'src/config/api/domain/noticias/repository';

type Props = {
  totalRows: number;
  noticias: NoticiasListadasHome[];
  principal: NoticiaPrincipalHome;
};

export default function Home({ noticias, principal, totalRows }: Props) {
  const [offsetState, setOffsetState] = useState(0);
  const [rowsNews, setRowsNews] = useState<NoticiasListadasHome[]>(noticias);

  const fetchNextNoticias = async () => {
    const getNextNoticias = await getHomeNoticiasRepository({ offset: offsetState + 12 });

    const noticias = getNextNoticias.props.noticias.map((noticia) => ({
      ...noticia,
      time: format(parseISO(noticia.createdAt), 'dd/MMM/yyyy HH:mm'),
    }));

    setOffsetState(offsetState + 12);
    setRowsNews([...rowsNews, ...noticias]);
  };

  return (
    <div id={styles.rootHome}>
      <Container>
        <Grid container mt={2} spacing={2} alignItems="center">
          <Grid item xs={12}>
            <div className={styles.primary}>
              <Link href={`/noticia/${principal.url}`}>
                <a title={principal.titulo}>
                  <time>{principal.time}</time>
                  <h3>{principal.titulo}</h3>
                  <p>{principal.subtitulo}</p>
                </a>
              </Link>
            </div>
          </Grid>
        </Grid>
        <InfiniteScroll
          hasMore={totalRows - 1 !== rowsNews.length}
          style={{ overflow: 'none' }}
          next={fetchNextNoticias}
          dataLength={rowsNews.length}
          loader={<div className={styles.textCarregando}>carregando...</div>}
          scrollThreshold="10px"
        >
          <Grid container mt={2}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                {rowsNews.map((noticia, idx) => (
                  <NewsBlock
                    key={`news-${idx}`}
                    imagem={noticia.imagem}
                    titulo={noticia.titulo}
                    time={noticia.time}
                    url={noticia.url}
                  />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </InfiniteScroll>
      </Container>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => await getHomeNoticiasRepository({ offset: 0 });
