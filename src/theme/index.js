import { extendTheme } from '@chakra-ui/core';
import { runIfFn, merge } from '@chakra-ui/utils';
import { mode } from '@chakra-ui/theme-tools';

const base = {
  headers: '#2E3440',
  subHeaders: '#434C5E',
  text: '#3B4252',
  subText: '#4C566A',
  background: '#ECEFF4',
  primary: '#B48EAD',
  positive: '#A3BE8C',
  warn: '#EBCB8B',
  negative: '#BF616A',
  blue: '#5E81AC',
  orange: '#D08770',
};

const MyTheme = extendTheme({
  fonts: {
    body: 'proxima-nova, sans-serif;',
    heading: 'proxima-nova, sans-serif;',
    monospace: 'Menlo, monospace',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    light: {
      ...base,
    },
    dark: {
      ...base,
      headers: '#ECEFF4',
      subHeaders: '#E5E9F0',
      text: '#D8DEE9',
      subText: '#E5E9F0',
      background: '#2E3440',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        // The mode(...) function is the same as props.colorMode === "dark" ? darkMode : lightMode
        backgroundColor: mode('light.background', 'dark.background')(props),
      },
      h1: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: '2xl',
      },
      h2: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
      },
      h3: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 'lg',
      },
      h4: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 'md',
      },
      h5: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 'sm',
      },
      h6: {
        color: mode('light.headers', 'dark.headers')(props),
        fontFamily: 'heading',
        lineHeight: 'heading',
        fontWeight: 'heading',
        fontSize: 'xs',
      },
      p: {
        color: mode('light.text', 'dark.text')(props),
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      },
      a: {
        color: 'primary',
      },
      pre: {
        fontFamily: 'monospace',
        overflowX: 'auto',
        code: {
          color: 'inherit',
        },
      },
      code: {
        fontFamily: 'monospace',
        fontSize: 'inherit',
      },
      '.language-js, .language-jsx': {
        lineHeight: '1.25',
        '.tag, .deleted, .boolean': {
          color: '#bf616a',
        },
        '.attr-name, .string': {
          color: '#ebcb8b',
        },
        '.attr-value, .inserted': {
          color: '#a3be8c',
        },
        '.punctuation': {
          color: '#d08770',
        },
        '.keyword': {
          color: '#b48ead',
        },
        '.function': {
          color: '#5e81ac',
        },
        '.comment': {
          color: '#4c566a',
          fontStyle: 'italic',
        },
        '.operator': {
          color: '#2E3440',
        },
      },
    }),
  },
});

export default MyTheme;
