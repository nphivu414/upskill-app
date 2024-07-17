import type { Meta, StoryObj } from '@storybook/react';

import { MyReactComponent } from './MyReactComponent';

const meta: Meta<typeof MyReactComponent> = {
  component: MyReactComponent,
};

export default meta;
type Story = StoryObj<typeof MyReactComponent>;

export const Primary: Story = {
  args: {
    title: 'Chill Vibes',
    subTitle: 'Relax and unwind',
    caption: 'A collection of smooth beats',
    coverPhotoUrl: 'https://nextui.org/images/hero-card-complete.jpeg',
  },
};
