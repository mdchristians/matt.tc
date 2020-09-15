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
import { LiveEditor, LivePreview, LiveProvider } from 'react-live';
import PrismTheme from './prism-theme';

/**
 * Styled Code Preview
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

const CodeBlockCode = ({ code, props }) => {
  const { className, live = false, manual, render, children, ...rest } = props;
  const language = className && className.replace(/language-/, '');

  return (
    <LiveProvider
      disabled
      theme={PrismTheme}
      language={language}
      code={code.trim()}
      noInline={manual}
      {...rest}
    >
      <LiveEditor
        style={{
          fontSize: 14,
          overflowX: 'auto',
          fontFamily: 'SF Mono, Menlo, monospace',
        }}
      />
    </LiveProvider>
  );
};

export default CodeBlockCode;
