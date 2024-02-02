// import "@/styles/globals.css";
import { ColorModeScript } from 'nextjs-color-mode';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import { GlobalStyle } from 'components/GlobalStyles';
import NavigationDrawer from 'components/NavigationDrawer';
import React, { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';
import { TinaEditProvider } from 'tinacms/dist/edit-state';

import type { AppProps } from "next/app";
const TinaCMS = dynamic(() => import('tinacms'), { ssr: false });

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

      <TinaEditProvider
          editMode={
            <TinaCMS
              query={pageProps.query}
              variables={pageProps.variables}
              data={pageProps.data}
              isLocalClient={!process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              branch={process.env.NEXT_PUBLIC_EDIT_BRANCH}
              clientId={process.env.NEXT_PUBLIC_TINA_CLIENT_ID}
              {...pageProps}
            >
              {(livePageProps: any) => <Component {...livePageProps} />}
            </TinaCMS>
          }
        >
          <Component {...pageProps} />
        </TinaEditProvider>
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
