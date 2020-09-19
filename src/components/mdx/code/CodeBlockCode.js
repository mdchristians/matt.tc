import React from 'react';
import { LiveEditor, LiveProvider } from 'react-live';
import PrismTheme from './prism-theme';

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
          fontSize: 13,
          overflowX: 'auto',
          lineHeight: 1.4,
        }}
      />
    </LiveProvider>
  );
};

export default CodeBlockCode;
