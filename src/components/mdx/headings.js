import React from 'react';
import { chakra } from '@chakra-ui/core';

const LinkedHeading = (props) => (
  <chakra.h2
    css={{
      '&[id]': {
        pointerEvents: 'none',
        marginTop: '1.5em',
      },
      '&[id]::before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
  >
    <chakra.div pointerEvents="auto">
      {props.children}
      {props.id && (
        <chakra.a
          aria-label="anchor"
          color="#5E81AC"
          fontWeight="normal"
          outline="none"
          _focus={{ opacity: 1, boxShadow: 'outline' }}
          opacity={0}
          ml="0.375rem"
          href={`#${props.id}`}
        >
          #
        </chakra.a>
      )}
    </chakra.div>
  </chakra.h2>
);

export default {
  h1: (props) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
};
