import { Heading, Flex, Link, useColorModeValue } from '@chakra-ui/core';
import NextLink from 'next/link';

const IndexPage = () => {
  const headingColor = useColorModeValue('light.headers', 'dark.headers');
  const linkColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Flex pt="30vh" align="center" justify="center" direction="column">
      <Heading
        as="h1"
        fontSize={['2xl', '4xl', '5xl', '6xl']}
        color={headingColor}
      >
        Matt Christians
      </Heading>
      <Flex mt="3">
        <Link
          mr="15px"
          color={linkColor}
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/mdchristians"
        >
          Github
        </Link>

        <Link
          mr="15px"
          color={linkColor}
          rel="noopener noreferrer"
          target="_blank"
          href="https://twitter.com/Matt_Christians"
        >
          Twitter
        </Link>
        <NextLink href="/thoughts">
          <Link color={linkColor}>Thoughts</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
