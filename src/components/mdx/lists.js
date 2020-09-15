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

export default {
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem pb="4px" {...props} />,
};
