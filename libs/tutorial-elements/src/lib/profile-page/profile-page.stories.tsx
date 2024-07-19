import type { Meta, StoryObj } from '@storybook/react';

import { ProfilePage } from './profile-page';

const defaultPhotos = [
  '/profile-cover.png',
  '/profile-cover-2.png',
  '/profile-cover-3.png',
];

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  args: {
    featurePhotos: defaultPhotos,
  },
};
