import { Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import styles from './news-block.module.scss';

type Props = {
  url: string;
  titulo: string;
  time?: string;
  imagem: string;
};

export default function NewsBlock({ imagem, time, titulo, url }: Props) {
  return (
    <Grid key={`${url}-${time}`} item xs={12} sm={6} md={4} lg={4}>
      <div className={styles.secondary}>
        <Link href={`/noticia/${url}`}>
          <a>
            <Image src={imagem} alt={titulo} loading="lazy" layout="responsive" height="70" width="100%" />
            <div className={styles.text}>
              <time>{time}</time>
              <h3>{titulo}</h3>
            </div>
          </a>
        </Link>
      </div>
    </Grid>
  );
}
