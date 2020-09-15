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

const Table = (props) => (
  <chakra.div overflowX="auto">
    <chakra.table textAlign="left" mt="32px" width="full" {...props} />
  </chakra.div>
);

const THead = (props) => (
  <chakra.th
    bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
    fontWeight="semibold"
    p={2}
    fontSize="sm"
    {...props}
  />
);

const TData = (props) => (
  <chakra.td
    p={2}
    borderTopWidth="1px"
    borderColor="inherit"
    fontSize="sm"
    whiteSpace="normal"
    {...props}
  />
);

export default {
  table: Table,
  th: THead,
  td: TData,
};
