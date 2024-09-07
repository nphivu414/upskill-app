import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/react';
import { themes } from '@storybook/theming';

import './tw-global.css';
import './sb-override.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: '',
        dark: 'dark',
      },
      parentSelector: 'html',
      defaultTheme: 'dark',
    }),
  ],

  parameters: {
    docs: {
      theme: themes.dark,
      toc: true,
    },
    options: {
      storySort: {
        method: '',
        order: ['Tutorials', ['Profile UI', ['Page', 'Components']], '*'],
      },
    },
  },

  tags: ['autodocs'],
};

export default preview;
