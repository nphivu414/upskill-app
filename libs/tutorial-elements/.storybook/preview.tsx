import './tw-global.css';

export const decorators = [(Story: any) => <Story />];

export const parameters = {
  themes: {
    default: 'dark',
    list: [
      { name: 'dark', class: 'dark', color: '#333' },
      { name: 'light', class: 'light', color: 'white' },
    ],
    target: 'html',
  },
};
