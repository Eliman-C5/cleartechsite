import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Layout from 'components/Wrappers/Layout';
import { AppProvider } from 'context/GeneralProvider';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Clear Tech</title>
        <link rel="icon" href="/favicon2.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://db.onlinewebfonts.com/c/e0fa406cbe458b32a7ea4e9a379b85fc?family=DIN+2014"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
      </Head>
      <AppProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppProvider>
    </>
  );
}

export default MyApp;
