const {nextui} = require("@nextui-org/react");
const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          muted: "#71717a",
          background: "#FAFAFA",
        }
      },
      dark: {
        colors: {
          muted: "#d4d4d8"
        },
      },
    },
  })],
};
