import { PostCardProps, PostStats } from '../../types';

export const getPostActionsConfig = (
  stats: PostStats
): PostCardProps['postActionConfig'] => {
  return {
    comment: {
      content: stats.comments,
      handler: (postId) => {
        console.log(`Commented on post ${postId} clicked`);
      },
    },
    repost: {
      content: stats.reposts,
      handler: (postId) => {
        console.log(`Reposted post ${postId} clicked`);
      },
    },
    toggleLike: {
      content: stats.likes,
      handler: (postId) => {
        console.log(`Liked post ${postId} clicked`);
      },
    },
    bookmark: {
      handler: (postId) => {
        console.log(`Bookmarked post ${postId} clicked`);
      },
    },
    share: {
      handler: (postId) => {
        console.log(`Shared post ${postId} clicked`);
      },
    },
  };
};

export const getPostMenuActionsConfig =
  (): PostCardProps['postMenuActionConfig'] => {
    return {
      addToHighlights: (postId: string) => {
        console.log(`Added post ${postId} to highlights`);
      },
      changeViewPermission: (postId: string) => {
        console.log(`Changed view permission for post ${postId}`);
      },
      delete: (postId: string) => {
        console.log(`Deleted post ${postId}`);
      },
      report: (postId: string) => {
        console.log(`Reported post ${postId}`);
      },
      unlike: (postId: string) => {
        console.log(`Unliked post ${postId}`);
      },
    };
  };
