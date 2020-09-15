const THEME = {
  plain: {
    color: '#fcfcfa',
    backgroundColor: '#2d2a2e'
  },
  styles: [
    {
      types: ['comment'],
      style: {
        color: 'rgb(114, 112, 114)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['constant', 'number', 'builtin', 'char'],
      style: {
        color: 'rgb(171, 157, 242)'
      }
    },
    {
      types: ['symbol'],
      style: {
        color: 'rgb(252, 152, 103)'
      }
    },
    {
      types: ['function', 'inserted'],
      style: {
        color: 'rgb(169, 220, 118)'
      }
    },
    {
      types: ['namespace', 'class-name'],
      style: {
        color: 'rgb(120, 220, 232)'
      }
    },
    {
      types: ['tag', 'keyword', 'operator', 'deleted'],
      style: {
        color: 'rgb(255, 97, 136)'
      }
    },
    {
      types: ['attr-name'],
      style: {
        color: 'rgb(120, 220, 232)',
        fontStyle: 'italic'
      }
    },
    {
      types: ['changed', 'string'],
      style: {
        color: 'rgb(255, 216, 102)'
      }
    },
    {
      types: ['variable'],
      style: {
        color: 'rgb(193, 192, 192)'
      }
    },
    {
      types: ['punctuation'],
      style: {
        color: 'rgb(147, 146, 147)'
      }
    }
  ]
};

export default THEME;
