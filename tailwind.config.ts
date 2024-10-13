import { type Config } from 'tailwindcss'
// import { tailwindExpose } from '@ui/services/tailwind-plugins'
// import plugin from 'tailwindcss/plugin'

export default {
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      text: '#0a1018',
      neutral: {
        DEFAULT: '#6b7888',
        50: '#f6f7f7',
        100: '#eeeff0',
        200: '#dfe1e4',
        300: '#b4bac0',
        400: '#87919d',
        500: '#6b7888',
        600: '#4a5a6e',
        700: '#1b324c',
        800: '#13273e',
        900: '#0a1018',
      },
      primary: {
        DEFAULT: '#007acb',
        50: '#f3f8fb',
        100: '#e9f2f8',
        200: '#cee5f3',
        300: '#63c3f7',
        400: '#0097e2',
        500: '#007acb',
        600: '#0056b2',
        700: '#0c2c71',
        800: '#0f2452',
        900: '#09101f',
      },
      success: {
        DEFAULT: '#248741',
        50: '#f3f9ed',
        100: '#e9f5d7',
        200: '#d1eba1',
        300: '#89cb2b',
        400: '#1da646',
        500: '#248741',
        600: '#2b6437',
        700: '#203623',
        800: '#1a2a1c',
        900: '#0b110c',
      },
      danger: {
        DEFAULT: '#e0331f',
        50: '#faf6f5',
        100: '#f8eeeb',
        200: '#f5dcd7',
        300: '#f0a698',
        400: '#e96850',
        500: '#e0331f',
        600: '#ac2111',
        700: '#562016',
        800: '#421b13',
        900: '#1b0c09',
      },
      warning: {
        DEFAULT: '#b36121',
        50: '#fbf8ee',
        100: '#f9f0d8',
        200: '#f9dea1',
        300: '#ffa602',
        400: '#df7216',
        500: '#b36121',
        600: '#824b23',
        700: '#442b1a',
        800: '#352216',
        900: '#160e09',
      },
    },
    boxShadow: {
      none: 'none',
      xs: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(16, 24, 40, 0.1)',
      md: '0 4px 8px -2px rgba(16, 24, 40, 0.1)',
      lg: '0 12px 16px -4px rgba(16, 24, 40, 0.08)',
      xl: '0 20px 24px -4px rgba(16, 24, 40, 0.08)',
    },
    borderRadius: {
      none: '0px',
      sm: '0.375rem', // 6px
      DEFAULT: '0.5rem', // 8px
      md: '0.75rem', // 12px
      lg: '1rem', // 16px
      full: '9999px',
    },
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
      fontSize: {
        h3: ['2.25rem', '2.688rem'],
        h4: ['2rem', '2.375rem'],
        h5: ['1.5rem', '1.75rem'],
        h6: ['1.25rem', '1.5rem'],
        p: ['1rem', '1.5rem'],
        body: ['0.875rem', '1rem'],
        caption: ['0.813rem', '1rem'],
        overline: ['0.625rem', '0.75rem'],
      },
    },
  },
  content: [],
  // plugins: [plugin(tailwindExpose)],
} satisfies Config
