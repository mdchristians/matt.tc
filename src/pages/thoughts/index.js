import * as React from 'react';
import {
  Heading,
  Text,
  Box,
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
    <Box margin="0 auto" width="100%" maxW="1200px">
      <Header />
      <Box p="4">
        <Heading as="h2" size="lg" mb="5">
          Thoughts
        </Heading>
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
            >
              <Heading as="h3" size="md">
                {fm.title}
              </Heading>
              <Text>{fm.summary}</Text>
            </Flex>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default Thoughts;
