import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../components';
import { ProfilePage } from './profile-page';
import { Company, Profile, ProfileStats } from './types';

const defaultPhotos = [
  '/profile-cover.png',
  '/profile-cover-2.png',
  '/profile-cover-3.png',
];

const defaultProfile: Profile = {
  name: 'Vu Nguyen',
  username: 'nphivu',
  avatar: 'https://i.pravatar.cc/150?img=57',
  bio: '🚀 Tech aficionado crafting digital magic. 🎨 UI/UX maestro building visually stunning websites and apps.',
  location: 'Saigon, Vietnam',
  title: 'Software Engineer',
  website: 'https://x.com/nphivu414',
};

const defaultProfileStats: ProfileStats = {
  followers: 1440,
  following: 90,
  posts: 246,
};

const defaultCompany: Company = {
  name: '@upskill',
  website: 'https://upskill.app',
};

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Primary: Story = {
  args: {
    featurePhotos: defaultPhotos,
    profile: defaultProfile,
    company: defaultCompany,
    profileStats: defaultProfileStats,
  },
};
