import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/core';
import theme from '../theme';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
