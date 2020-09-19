import React from 'react';
import { Box, Link, Text, useColorModeValue } from '@chakra-ui/core';

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
