import React, { useState } from 'react';
import {
  Box,
  Button,
  chakra,
  OrderedList,
  UnorderedList,
  ListItem,
  Pre as ChakraPre,
  Link,
  Text,
  Kbd,
  useClipboard,
  useColorModeValue,
} from '@chakra-ui/core';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import MyTheme from './code/prism-theme';

const BlockQuote = (props) => (
  <Box
    css={{
      '> p': {
        margin: '0px',
      },
    }}
    as="blockquote"
    rounded="4px"
    my="1rem"
    mx="0"
    overflow="hidden"
    fontStyle="italic"
    borderLeft="4px solid"
    px="4"
    py="3"
    bg={useColorModeValue('#D8DEE9', '#3B4252')}
    {...props}
  />
);

export default {
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  a: ({ children, ...props }) => <Link {...props}>{children}</Link>,
  p: (props) => <Text mb="0.875em" {...props} />,
  blockquote: BlockQuote,
};
