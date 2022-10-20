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
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.typekit.net/cnw3bmu.css"></link>
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
