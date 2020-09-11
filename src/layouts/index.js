import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/core';
import Header from '../components/Header';

function Layout(frontMatter) {
  return ({ children: content }) => {
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
  };
}

export default Layout;
