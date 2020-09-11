import { Heading, Flex, Link, useColorModeValue } from '@chakra-ui/core';
import NextLink from 'next/link';

const IndexPage = () => {
  const headingColor = useColorModeValue('light.headers', 'dark.headers');
  const linkColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Flex pt="30vh" align="center" justify="center" direction="column">
      <Heading as="h1" color={headingColor}>
        Matt Christians
      </Heading>
      <Flex mt="3">
        <NextLink href="#">
          <Link mr="15px" color={linkColor}>
            Github
          </Link>
        </NextLink>
        <NextLink href="#">
          <Link mr="15px" color={linkColor}>
            Twitter
          </Link>
        </NextLink>
        <NextLink href="/thoughts">
          <Link color={linkColor}>Thoughts</Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};

export default IndexPage;
