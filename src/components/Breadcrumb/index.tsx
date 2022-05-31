import { Breadcrumbs } from "@mui/material";
import Link from "next/link";

import styles from "./breadcrumb.module.scss";

export default function Breadcrumb() {
  return (
    <Breadcrumbs aria-label="breadcrumb" className={styles.breadcrumbRoot}>
      <Link href="/">
        <a>Início</a>
      </Link>
      <p>Google lança 3 novos cursos com certificados profissionalizantes</p>
    </Breadcrumbs>
  );
}
