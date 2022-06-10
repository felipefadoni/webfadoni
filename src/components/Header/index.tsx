import logoWebfadoni from '@/assets/logo-webfadoni.svg';
import { Container, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { RiMenu5Line } from 'react-icons/ri';
import styles from './header.module.scss';

type Props = {
  handleOpenMenu: () => void;
};

export default function Header({ handleOpenMenu }: Props) {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <header className={styles.header}>
            <div className={styles.centerHeader}>
              <div className={styles.headerLeft}>
                <button title="Menu" onClick={handleOpenMenu}>
                  <RiMenu5Line size={28} />
                </button>
                <div className={styles.logo}>
                  <Link href="/">
                    <a title="Voltar para o início">
                      <Image src={logoWebfadoni} alt="WebFadoni" width={163} height={48} loading="lazy" />
                    </a>
                  </Link>
                </div>
              </div>
              {/* <div className={styles.headerRight}>
                <button title="Buscar">
                  <MdSearch size={32} />
                </button>
                <div className={styles.search}>
                  <input type="text" placeholder="Buscar" />
                </div>
              </div> */}
            </div>
          </header>
        </Grid>
      </Grid>
    </Container>
  );
}
