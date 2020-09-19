import React from 'react';
import * as chakra from '@chakra-ui/core';
import { Box, Container, Heading } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/mdx';
import Header from '../components/Header';

function Layout({ frontMatter, children }) {
  return (
    <MDXProvider components={{ ...chakra, ...MDXComponents }}>
      <MdxLayout content={children} frontMatter={frontMatter} />
    </MDXProvider>
  );
}

function MdxLayout({ content, frontMatter }) {
  return (
    <Container maxWidth="70ch" className="mdx">
      <Header contain />
      <Box as="article" mt="8">
        <Heading size="lg" mb="6">
          {frontMatter.title}
        </Heading>
        {content}
      </Box>
    </Container>
  );
}

export default Layout;
