import React from 'react';
import { chakra } from '@chakra-ui/core';
import CodeBlock from './CodeBlock';
import InlineCode from './InlineCode';

/**
 * PRE
 */
const Pre = (props) => <chakra.pre overflowX="unset" {...props} />;

export default {
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
};
