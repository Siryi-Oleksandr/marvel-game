import { extendTheme } from '@chakra-ui/react';
export const colors = extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000000',
    white: {
      700: '#f5f5f5', //done - whitesmoke
      900: '#ffffff', //done
    },

    blue: {
      50: '#f7fafc',
      100: '#C6D1ED',
      400: '#5c81e1',
      600: '#0a2c66', //done
      700: '#002350', //done
      900: '#010817', //done
    },
    gray: {
      100: '#cccccc', //done
      400: '#bcbcbc',
      900: '#212121', //done
    },
    red: {
      300: '#c27171', //done
      400: '#ff0000', // done
      900: '#c61818', // done
    },

    yellow: {
      100: '#CDD3CE',
      400: '#E0B346',
      700: '#ffd700', //done
    },
  },
  fonts: {
    body: 'PT Serif, serif',
    heading: 'PT Serif, serif',
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: '2',
  },
});
