import * as React from 'react';
import Router from 'next/router';
import { ChakraProvider } from '@chakra-ui/core';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import theme from '../theme';
import { logPageView, logPageMetric } from '../utils';

Router.events.on('routeChangeComplete', (url) => {
  logPageView(url);
});

export function reportWebVitals(metric) {
  logPageMetric(metric);
}

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default App;
