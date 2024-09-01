import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../components';
import {
  defaultCompany,
  defaultFeaturePhotos,
  defaultLikedPosts,
  defaultPhotos,
  defaultPosts,
  defaultProfile,
  defaultProfileStats,
} from './data';
import { ProfilePage } from './profile-page';

const meta: Meta<typeof ProfilePage> = {
  component: ProfilePage,
  title: 'Tutorials/Profile UI/Page/Screen',
  decorators: [
    (Story) => (
      <ScreenContainer className="border-divider w-[320px] border py-0">
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfilePage>;

export const Default: Story = {
  args: {
    featurePhotos: defaultFeaturePhotos,
    profile: defaultProfile,
    company: defaultCompany,
    profileStats: defaultProfileStats,
    profileTimeline: {
      posts: defaultPosts,
      photos: defaultPhotos,
      likedPosts: defaultLikedPosts,
    },
  },
};
