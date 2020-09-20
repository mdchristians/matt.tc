import * as React from 'react';
import {
  Heading,
  Text,
  Container,
  Flex,
  VStack,
  StackDivider,
} from '@chakra-ui/core';
import { useRouter } from 'next/router';
import { posts } from '../../utils';
import Header from '../../components/Header';

const Thoughts = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container maxWidth="80ch" className="mdx" px="4">
        <VStack
          align="flex-start"
          divider={<StackDivider borderColor="gray.900" />}
          spacing={4}
        >
          {posts.map((fm) => (
            <Flex
              key={fm.id}
              onClick={() => router.push(`/${fm.path}`)}
              direction="column"
              justify="flex-start"
              cursor="pointer"
            >
              <Heading
                as="h3"
                size="md"
                color="#AB9DF2"
                textTransform="uppercase"
                letterSpacing="wide"
                mb={0}
              >
                {fm.title}
              </Heading>
              <Text>{fm.summary}</Text>
            </Flex>
          ))}
        </VStack>
      </Container>
    </>
  );
};

export default Thoughts;
