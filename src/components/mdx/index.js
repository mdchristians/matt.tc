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

import codeComps from './code';
import headingComps from './headings';
import listComps from './lists';
import tableComps from './table';
import textComps from './text';

// https://mdxjs.com/getting-started#table-of-components
export default {
  ...codeComps,
  ...headingComps,
  ...listComps,
  ...tableComps,
  ...textComps,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  kbd: Kbd,
};
