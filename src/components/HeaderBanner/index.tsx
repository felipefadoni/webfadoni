import styles from './header-banner.module.scss';

export default function HeaderBanner() {
  const disable = false;

  if (disable)
    return (
      <div className={styles.bannerHeader}>
        <div className={styles.headerBannerCenter}>728x90</div>
      </div>
    );
}
