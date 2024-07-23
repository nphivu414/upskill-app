import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../components';
import { defaultLikedPosts, defaultPhotos, defaultPosts } from '../data';
import { ProfileTimeline } from './profile-timeline';

const meta: Meta<typeof ProfileTimeline> = {
  component: ProfileTimeline,
  title: 'Tutorials/Profile UI/Components/Profile Timeline',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfileTimeline>;

export const Default: Story = {
  args: {
    posts: defaultPosts,
    photos: defaultPhotos,
    likedPosts: defaultLikedPosts,
  },
};
