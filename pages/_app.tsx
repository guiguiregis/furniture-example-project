import type { AppProps } from 'next/app';
// eslint-disable-next-line import/no-extraneous-dependencies
import TagManager from 'react-gtm-module';
import Head from 'next/head';
import Cookies from 'js-cookie';
import Layout from '@/components/Layout';
import { useEffect } from 'react';

// declare global {
//   interface Window {
//     affirm: any;
//   }
// }

// props
const MyApp = ({ Component, pageProps }: AppProps) => {
  if (pageProps.locale && pageProps.locale !== Cookies.get('locale')) {
    Cookies.set('locale', pageProps.locale);
  }
  // Init tag Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PBVJLZ9' });
  }, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout layoutData={pageProps.layoutData}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
