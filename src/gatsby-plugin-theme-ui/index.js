export default {
  initialColorModeName: 'light',
  colors: {
    text: '#3d3f45',
    background: '#f9f9fa',
    primary: '#508FFF',
    secondary: '#b4a8ff',
    accent: '#689fff',
    muted: '#686c76',
    gray: '#adb3bf',
    modes: {
      black: {
        text: '#fff',
        background: '#000',
        primary: '#0ff',
        secondary: '#0fc',
        accent: '#f0f',
        muted: '#111',
        gray: '#888',
      },
    }
  },
  fonts: {
    heading: '"Montserrat", sans-serif',
    body: '"Open-Sans", sans-serif',
    monospace: '"Fira Code", monospace',
  },
  lineHeights: {
    body: 1.625,
    heading: 1.25,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  fontSizes: [
    14, 16, 18, 20, 24, 32, 48, 64, 72, 96
  ],
  sizes: {
    container: 768,
    wide: 1280,
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontSize: 2,
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.5s',
    },
    h1: {
      variant: 'text.heading',
      my: 4,
    },
  }
}
