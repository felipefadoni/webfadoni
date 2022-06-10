import { Breadcrumbs } from '@mui/material';
import Link from 'next/link';

import styles from './breadcrumb.module.scss';

interface Props {
  titulo: string;
}

export default function Breadcrumb({ titulo }: Props) {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbRoot}>
      <Link href="/">
        <a>Início</a>
      </Link>
      <p>{titulo}</p>
    </Breadcrumbs>
  );
}
