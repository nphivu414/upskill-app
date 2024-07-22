import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, ReactRenderer } from '@storybook/react';
import { themes } from '@storybook/theming';

import './tw-global.css';

const preview: Preview = {
  globalTypes: {
    theme: { type: 'string' },
  },
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
    },
  },
};

export default preview;
