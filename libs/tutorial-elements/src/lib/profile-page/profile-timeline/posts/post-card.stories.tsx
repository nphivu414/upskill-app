import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultPosts } from '../../data';
import { PostCard } from './post-card';

const meta: Meta<typeof PostCard> = {
  component: PostCard,
  title: 'Tutorials/Profile UI/Components/Post Card',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PostCard>;

const baseArgs: Story['args'] = {
  postId: defaultPosts[0].id,
  authorName: defaultPosts[0].profile.name,
  authorUsername: defaultPosts[0].profile.username,
  avatar: defaultPosts[0].profile.avatar,
  createdAt: defaultPosts[0].createdAt,
  content: defaultPosts[0].content,
};

const withActionsArgs: Story['args'] = {
  ...baseArgs,
  postActionConfig: {
    toggleLike: {
      count: 10,
      handler: () => {
        console.log('Liked post clicked');
      },
    },
    comment: {
      count: 14,
      handler: () => {
        console.log('Commented on post clicked');
      },
    },
    repost: {
      count: 5,
      handler: () => {
        console.log('Reposted post clicked');
      },
    },
    share: {
      count: 4,
      handler: () => {
        console.log('Shared post clicked');
      },
    },
    bookmark: {
      handler: () => {
        console.log('Bookmarked post clicked');
      },
    },
  },
};

const withMenuActionsArgs: Story['args'] = {
  ...baseArgs,
  postMenuActionConfig: {
    addToHighlights: () => {
      console.log('Added to highlights');
    },
    changeViewPermission: () => {
      console.log('Changed view permission');
    },
    delete: () => {
      console.log('Deleted post');
    },
    report: () => {
      console.log('Reported post');
    },
    unlike: () => {
      console.log('Unliked post');
    },
  },
};

export const Default: Story = {
  args: baseArgs,
};

export const WithActions: Story = {
  args: withActionsArgs,
};

export const WithMenuActions: Story = {
  args: withMenuActionsArgs,
};

export const SelfPostWithMenuAction: Story = {
  args: {
    ...withMenuActionsArgs,
    isSelfPost: true,
  },
};

export const WithAllActions: Story = {
  args: {
    ...baseArgs,
    ...withActionsArgs,
    ...withMenuActionsArgs,
  },
};
