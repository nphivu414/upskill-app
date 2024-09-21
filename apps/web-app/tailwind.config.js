const { nextui }  = require('@nextui-org/react');
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        'pulse-slow': 'pulse-slow 15s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  darkMode: 'selector',
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animated'),
    nextui({
      themes: {
        light: {
          colors: {
            background: "#f9f9f9",
            muted: "#71717a"
          }
        },
        dark: {
          colors: {
            muted: "#d4d4d8"
          },
        },
      },
    }),
  ],
};
