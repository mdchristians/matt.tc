import React from 'react';
import { chakra, Kbd } from '@chakra-ui/core';

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
