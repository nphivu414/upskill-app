import { PostsProps } from '../../types';
import { PostCard } from './post-card';

export const Posts = ({ posts }: PostsProps) => {
  const handleOnAddToHighlights = (postId: string) => {
    alert(`Added post ${postId} to highlights`);
  };
  const handleOnChangeViewPermission = (postId: string) => {
    alert(`Changed view permission for post ${postId}`);
  };
  const handleOnDelete = (postId: string) => {
    alert(`Deleted post ${postId}`);
  };

  return (
    <div className="flex flex-col">
      {posts.map(({ content, createdAt, id, profile, stats }) => {
        return (
          <PostCard
            key={id}
            postId={id}
            comments={stats.comments}
            likes={stats.likes}
            reposts={stats.reposts}
            createdAt={createdAt}
            content={content}
            authorName={profile.name}
            authorUsername={profile.username}
            avatar={profile.avatar}
            onAddToHighlights={handleOnAddToHighlights}
            onChangeViewPermission={handleOnChangeViewPermission}
            onDelete={handleOnDelete}
          />
        );
      })}
    </div>
  );
};
