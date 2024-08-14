'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../components';
import { defaultPosts } from '../data';
import { PostCard } from '../profile-timeline/posts/post-card';
import { PostCardProps } from '../types';

const props: PostCardProps = {
  postId: defaultPosts[2].id,
  authorName: defaultPosts[2].profile.name,
  authorUsername: defaultPosts[2].profile.username,
  avatar: defaultPosts[2].profile.avatar,
  createdAt: defaultPosts[2].createdAt,
  content: defaultPosts[2].content,
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
  isSelfPost: true,
};

export const PostCardPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.PROFILE_UI.POST_CARD,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-timeline/posts/post-card.tsx'
      )}
    >
      <ClientOnlyContainer
        contentContainerClassName="h-[180px] w-[350px]"
        loadingContainerClassName="min-h-[180px]"
      >
        <PostCard {...props} />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
