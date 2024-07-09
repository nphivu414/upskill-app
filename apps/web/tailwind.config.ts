import type { Config } from 'tailwindcss';
import { createGlobPatternsForDependencies } from '@nx/react/tailwind';
import { nextui } from '@nextui-org/react';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    "../../node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  darkMode: 'selector',
  plugins: [nextui()],
} satisfies Config;
