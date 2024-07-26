import { PostsProps } from '../../types';
import { useProfile } from '../../use-profile';
import { PostCard } from './post-card';
import { getPostActionsConfig, getPostMenuActionsConfig } from './post.utils';

export const Posts = ({ posts }: PostsProps) => {
  const currentProfile = useProfile();
  return (
    <div className="flex flex-col">
      {posts.map(({ content, createdAt, id, profile, stats }) => {
        const postActionConfig = getPostActionsConfig(stats);
        const postMenuActionConfig = getPostMenuActionsConfig();
        return (
          <PostCard
            key={id}
            postId={id}
            createdAt={createdAt}
            content={content}
            authorName={profile.name}
            authorUsername={profile.username}
            avatar={profile.avatar}
            isSelfPost={currentProfile?.username === profile.username}
            postActionConfig={postActionConfig}
            postMenuActionConfig={postMenuActionConfig}
          />
        );
      })}
    </div>
  );
};
