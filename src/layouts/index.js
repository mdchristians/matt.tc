import React from 'react';
import * as chakra from '@chakra-ui/core';
import { Box, Container, Heading } from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import MDXComponents from '../components/mdx';
import Header from '../components/Header';
import Head from 'next/head';

function Layout({ frontMatter, children }) {
  return (
    <MDXProvider components={{ ...chakra, ...MDXComponents }}>
      <MdxLayout content={children} frontMatter={frontMatter} />
    </MDXProvider>
  );
}

function MdxLayout({ content, frontMatter }) {
  console.log('frontMatter: ', frontMatter);
  return (
    <>
      <Head>
        <title>{frontMatter.title}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <Header />
      <Container maxWidth="70ch" className="mdx">
        <Box as="article" mt="8">
          <Heading as="h1" size="lg" mb="6">
            {frontMatter.title}
          </Heading>
          {content}
        </Box>
      </Container>
    </>
  );
}

export default Layout;
