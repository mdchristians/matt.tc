import React, { useState } from 'react';

import {
  Box,
  Button,
  chakra,
  useClipboard,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/core';
import { createCodeTabs } from './utils';
import CodeBlockFile from './CodeBlockFile';
import CodeBlockCode from './CodeBlockCode';

const CodeContainer = (props) => (
  <Box mx="-60px" padding="4" rounded="4px" my="4" bg="#2d2a2e" {...props} />
);

const CodeBlock = ({ tabs, named, ...rest }) => {
  if (tabs || named) {
    const { tabNames, tabCode } = createCodeTabs(rest.children);

    return (
      <CodeContainer>
        <Tabs variant="unstyled">
          <TabList>
            {tabNames.map((tab) => (
              <CodeBlockFile key={tab} tab={tab} />
            ))}
          </TabList>
          <TabPanels>
            {tabCode.map((block, idx) => (
              <TabPanel key={`code-block${idx}`}>
                <CodeBlockCode code={block} props={rest} />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </CodeContainer>
    );
  } else {
    return (
      <CodeContainer>
        <CodeBlockCode code={rest.children} props={rest} />
      </CodeContainer>
    );
  }
};

export default CodeBlock;
