import * as React from 'react';
import * as chakra from '@chakra-ui/core';
import { ChakraProvider } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import theme from '../theme';
import MDXComponents from '../components/mdx';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={{ ...chakra, ...MDXComponents }}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default App;
