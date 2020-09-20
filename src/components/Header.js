import {
  Heading,
  Flex,
  IconButton,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from './Logo';

const Header = ({ contain = false }) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const iconColor = useColorModeValue('light.headers', 'dark.headers');

  return (
    <Flex
      align="center"
      justify="space-between"
      py="4"
      px={contain ? '0' : '8'}
    >
      <NextLink href="/thoughts" passHref>
        <Logo color={iconColor} boxSize={20} />
      </NextLink>
      <IconButton
        variant="outline"
        backgroundColor="transparent"
        borderColor="transparent"
        aria-label="Toggle color mode"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        cursor="pointer"
      />
    </Flex>
  );
};

export default Header;
