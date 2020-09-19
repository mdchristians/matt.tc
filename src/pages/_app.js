import * as React from 'react';
import Router from 'next/router';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '../theme';
import { logPageView } from '../utils';

Router.events.on('routeChangeComplete', (url) => {
  logPageView(url);
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
