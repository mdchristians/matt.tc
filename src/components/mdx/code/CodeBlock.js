import React from 'react';

import { Box, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/core';
import { createCodeTabs } from './utils';
import CodeBlockFile from './CodeBlockFile';
import CodeBlockCode from './CodeBlockCode';

/**
 * Wrapper Box for code
 */
const CodeContainer = (props) => (
  <Box mx="-40px" padding="3" rounded="3px" my="6" bg="#2d2a2e" {...props} />
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
