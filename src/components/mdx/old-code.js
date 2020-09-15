import React, { useState } from 'react';

import {
  Box,
  Button,
  chakra,
  useClipboard,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from '@chakra-ui/core';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';
import MyTheme from './code/prism-theme';
import { createCodeTabs } from './code/utils';

const liveEditorStyle = {
  fontSize: 14,
  overflowX: 'auto',
  fontFamily: 'SF Mono, Menlo, monospace',
};

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

/**
 * PRE
 */
const Pre = (props) => <chakra.pre overflowX="unset" {...props} />;

/**
 * Code
 */
const LiveCodePreview = chakra(LivePreview, {
  baseStyle: {
    fontFamily: 'body',
    mt: 5,
    p: 3,
    borderWidth: 1,
    borderRadius: '12px',
  },
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

const CodeContainer = (props) => (
  <Box mx="-60px" padding="4" rounded="4px" my="4" bg="#2d2a2e" {...props} />
);

const TabbedContainer = (props) => (
  <Box mx="-45px" rounded="4px" my="4" bg="#2d2a2e" {...props} />
);

const TabbedCodeBlock = ({ code, props }) => {
  const { className, live = false, manual, render, children, ...rest } = props;
  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(code.trim());

  const liveProviderProps = {
    theme: MyTheme,
    language,
    code: code.trim(),
    noInline: manual,
    ...rest,
  };

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <LiveEditor style={liveEditorStyle} />
    </LiveProvider>
  );
};

const CodeBlock = (props) => {
  if (props.tabs || props.named) {
    const { tabNames, tabCode } = createCodeTabs(props.children);

    return (
      <TabbedContainer>
        <Tabs variant="unstyled">
          <TabList>
            {tabNames.map((tab) => (
              <Tab
                key={tab}
                py="3"
                px="5"
                color="dark.subText"
                bg="transparent"
                outline="unset"
                boxShadow="unset"
                border="none"
                fontSize="sm"
                cursor="pointer"
                _selected={{
                  outline: 'unset',
                  boxShadow: 'unset',
                  color: '#ebcb8b',
                  borderBottomWidth: '1px',
                  borderBottomColor: '#ebcb8b',
                  borderBottomStyle: 'solid',
                }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabCode.map((block, idx) => (
              <TabPanel key={`code-block${idx}`}>
                <TabbedCodeBlock code={block} props={props} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </TabbedContainer>
    );
  }

  const { className, live = false, manual, render, children, ...rest } = props;
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  const { hasCopied, onCopy } = useClipboard(editorCode);

  const liveProviderProps = {
    theme: MyTheme,
    language,
    code: editorCode,
    noInline: manual,
    ...rest,
  };

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <CodeContainer>
        <LiveEditor style={liveEditorStyle} />
      </CodeContainer>
    </LiveProvider>
  );
};

function parseName(str) {
  return str.replace('/**', '').replace('**/', '').trim();
}

export default {
  inlineCode: InlineCode,
  code: CodeBlock,
  pre: Pre,
};
