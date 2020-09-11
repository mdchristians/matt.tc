import * as React from 'react';
import * as chakra from '@chakra-ui/core';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import theme from '../theme';
import MDXComponents from '../components/mdx-components';

// see: https://nextjs.org/docs/advanced-features/custom-app
function MattChristians({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={{ ...chakra, ...MDXComponents }}>
        <Component {...pageProps} />
      </MDXProvider>
    </ChakraProvider>
  );
}

export default MattChristians;
