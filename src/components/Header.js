import {
  Heading,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = ({ contain = false }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Flex
      width="100%"
      align="center"
      justify="space-between"
      py="4"
      px={contain ? '0' : '4'}
    >
      <NextLink href="/thoughts">
        <Heading as="h1" size="md">
          Matt Christians
        </Heading>
      </NextLink>
      <IconButton
        aria-label="Toggle dark mode"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
      ></IconButton>
    </Flex>
  );
};

export default Header;
