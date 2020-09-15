import React from 'react';
import { chakra, useColorModeValue } from '@chakra-ui/core';

const InlineCode = (props) => (
  <chakra.code
    apply="mdx.code"
    backgroundColor={useColorModeValue('#D8DEE9', '#434C5E')}
    color={useColorModeValue('#434C5E', '#D8DEE9;')}
    fontSize="0.875rem"
    padding="3px 5px"
    borderRadius="2px"
    {...props}
  />
);

export default InlineCode;
