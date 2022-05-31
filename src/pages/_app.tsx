import { CssBaseline, Drawer } from '@mui/material';
import '@nextcss/reset';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { MdHomeFilled, MdMarkChatUnread } from 'react-icons/md';
import { Footer, Header, HeaderBanner } from '../components';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

import '../styles/global.scss';

function MyApp({ Component, pageProps }: AppProps) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setOpenMenu(!openMenu);
  };

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
      </Head>
      <Drawer open={openMenu} onClose={toggleDrawer('left', false)}>
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
            <li>
              <Link href="/contato">
                <a title="Fale Conosco">
                  <MdMarkChatUnread size={24} />
                  <span>Fale Conosco</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
      <Header handleOpenMenu={() => setOpenMenu(true)} />
      <HeaderBanner />
      <Component {...pageProps} />
      <Footer />
      <CssBaseline />
    </>
  );
}

export default MyApp;
