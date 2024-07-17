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
    extend: {},
  },
  darkMode: 'selector',
  plugins: [
    require('tailwind-scrollbar'),
    nextui({
      themes: {
        light: {
          colors: {
            muted: "#71717a"
          }
        },
        dark: {
          colors: {
            muted: "#a1a1aa"
          },
        },
      },
    }),
  ],
};
