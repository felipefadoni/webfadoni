/* eslint-disable @next/next/no-page-custom-font */
import { CssBaseline, Drawer } from '@mui/material';
import '@nextcss/reset';
import { GetStaticPaths, GetStaticProps } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { GoogleAnalytics, usePagesViews } from 'nextjs-google-analytics';
import { useState } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { Footer, Header, HeaderBanner } from '../components';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  usePagesViews();

  const toggleDrawer = () => (event: KeyboardEvent | MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as KeyboardEvent).key === 'Tab' || (event as KeyboardEvent).key === 'Shift')
    )
      return;

    setOpenMenu(!openMenu);
  };

  const showBanner = false;

  return (
    <>
      <Head>
        <title>WebFadoni programação, notícias e tecnologia</title>
        <meta
          name="description"
          content="WebFadoni, programação, notícias, tudo sobre o mundo da programação
            e da tecnologia, você vai encontrar aqui no WebFadoni."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Autour+One&display=swap" rel="stylesheet" />
      </Head>
      <Drawer open={openMenu} onClose={toggleDrawer()}>
        <div className="options-menu">
          <ul>
            <li>
              <Link href="/">
                <a title="Voltar ao início">
                  <MdHomeFilled size={24} />
                  <span> Home Page</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
      <Header handleOpenMenu={() => setOpenMenu(true)} />
      {showBanner ? <HeaderBanner /> : null}
      <Component {...pageProps} />
      <Footer />
      <CssBaseline />
      <GoogleAnalytics />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: ['/'],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60,
  };
};

export default MyApp;
