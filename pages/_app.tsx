// import "@/styles/globals.css";
import { ColorModeScript } from 'nextjs-color-mode';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { GlobalStyle } from 'components/GlobalStyles';
import NavigationDrawer from 'components/NavigationDrawer';
import React, { PropsWithChildren } from 'react';

import type { AppProps } from "next/app";

import { NavItems } from 'types';

const navItems: NavItems = [
  { title: 'Blog', href: '/blog', outlined: true },
  // { title: 'Contact', href: '/contact', outlined: true },
];


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
   
    <ColorModeScript />
    <GlobalStyle />
    <Providers>
      <Navbar items={navItems} />

      <Component {...pageProps} />;
      <Footer />

      </Providers>
  </>
  );
}

function Providers<T>({ children }: PropsWithChildren<T>) {
  return (
      <NavigationDrawer items={navItems}>{children}</NavigationDrawer>
  );
}
