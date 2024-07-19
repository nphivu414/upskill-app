import type { Meta, StoryObj } from '@storybook/react';

import { ProfilePage } from './profile-page';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  args: {
    title: 'Chill Vibes',
    subTitle: 'Relax and unwind',
    caption: 'A collection of smooth beats',
    coverPhotoUrl: 'https://nextui.org/images/hero-card-complete.jpeg',
  },
};
