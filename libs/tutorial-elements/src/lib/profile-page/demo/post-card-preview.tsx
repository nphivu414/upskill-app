'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultPosts } from '../data';
import { PostCard } from '../profile-timeline/posts/post-card';
import { PostCardProps } from '../types';

export const PostCardPreview = () => {
  const props: PostCardProps = {
    postId: defaultPosts[0].id,
    authorName: defaultPosts[0].profile.name,
    authorUsername: defaultPosts[0].profile.username,
    avatar: defaultPosts[0].profile.avatar,
    createdAt: defaultPosts[0].createdAt,
    content: defaultPosts[0].content,
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

  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer
        contentContainerClassName="h-[550px] w-[350px]"
        loadingContainerClassName="min-h-[570px]"
      >
        <PostCard {...props} />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
