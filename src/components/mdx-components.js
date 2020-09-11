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
  useColorModeValue
} from '@chakra-ui/core';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import MyTheme from './prism-theme';

/**
 * PRE
 */
const Pre = (props) => <chakra.pre overflowX="unset" {...props} />;

/**
 * INLINE CODE
 */
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

const BlockQuote = (props) => (
  <Box
    css={{
      '> p': {
        margin: '0px'
      }
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

const LinkedHeading = (props) => (
  <chakra.h2
    css={{
      '&[id]': {
        pointerEvents: 'none'
      },
      '&[id]::before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`
      },
      '&[id]:hover a': { opacity: 1 }
    }}
    {...props}
  >
    <chakra.div pointerEvents="auto">
      {props.children}
      {props.id && (
        <chakra.a
          aria-label="anchor"
          color="headers"
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

export const liveEditorStyle = {
  fontSize: 14,
  overflowX: 'auto',
  fontFamily: 'SF Mono, Menlo, monospace'
};

export const liveErrorStyle = {
  fontFamily: 'SF Mono, Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red'
};

const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: 'body',
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: '12px'
  }
});

const CopyButton = (props) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    colorScheme="teal"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    {...props}
  />
);

const EditableNotice = (props) => {
  return (
    <Box
      position="absolute"
      width="full"
      top="-1.25em"
      roundedTop="8px"
      bg="#011627"
      py="2"
      zIndex="0"
      letterSpacing="wide"
      color="gray.400"
      fontSize="xs"
      fontWeight="semibold"
      textAlign="center"
      textTransform="uppercase"
      pointerEvents="none"
      {...props}
    >
      Editable Example
    </Box>
  );
};

const CodeContainer = (props) => (
  <Box mx="-60px" padding="4" rounded="4px" my="4" bg="#2d2a2e" {...props} />
);

const CodeBlock = (props) => {
  const { className, live = false, manual, render, children, ...rest } = props;
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme: MyTheme,
    language,
    code: editorCode,
    noInline: manual,
    ...rest
  };

  const onChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview zIndex="1" />
        <Box position="relative" zIndex="0">
          <CodeContainer>
            <LiveEditor onChange={onChange} style={liveEditorStyle} />
          </CodeContainer>
          <CopyButton onClick={onCopy}>
            {hasCopied ? 'copied' : 'copy'}
          </CopyButton>
          <EditableNotice />
        </Box>
        <LiveError style={liveErrorStyle} />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <div style={{ marginTop: 32 }}>
        <LiveProvider {...liveProviderProps}>
          <LiveCodePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <CodeContainer>
        <LiveEditor style={liveEditorStyle} />
      </CodeContainer>
    </LiveProvider>
  );
};

// https://mdxjs.com/getting-started#table-of-components
const MDXComponents = {
  h1: (props) => <LinkedHeading as="h1" apply="mdx.h1" {...props} />,
  h2: (props) => <LinkedHeading apply="mdx.h2" {...props} />,
  h3: (props) => <LinkedHeading as="h3" apply="mdx.h3" {...props} />,
  h4: (props) => <LinkedHeading as="h4" apply="mdx.h4" {...props} />,
  hr: (props) => <chakra.hr apply="mdx.hr" {...props} />,
  strong: (props) => <Box as="strong" fontWeight="semibold" {...props} />,
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
  kbd: Kbd,
  br: (props) => <Box height="24px" {...props} />,
  table: Table,
  th: THead,
  td: TData,
  a: ({ children, ...props }) => <Link {...props}>{children}</Link>,
  p: (props) => <Text mb="0.875em" {...props} />,
  ul: (props) => <UnorderedList {...props} />,
  ol: (props) => <OrderedList {...props} />,
  li: (props) => <ListItem pb="4px" {...props} />,
  blockquote: BlockQuote
};

export default MDXComponents;
