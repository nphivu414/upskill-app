import { PostsProps } from '../../types';
import { PostCard } from './post-card';
import { getPostActionsConfig, getPostMenuActionsConfig } from './post.utils';

export const Posts = ({ posts }: PostsProps) => {
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
            postActionConfig={postActionConfig}
            postMenuActionConfig={postMenuActionConfig}
          />
        );
      })}
    </div>
  );
};
