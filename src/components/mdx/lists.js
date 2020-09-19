import React from 'react';
import { OrderedList, UnorderedList, ListItem } from '@chakra-ui/core';

export default {
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem pb="4px" {...props} />,
};
