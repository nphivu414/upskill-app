import { CardProps } from '@nextui-org/react';

export interface Company {
  name: string;
  website: string;
}

export interface Profile {
  username: string;
  name: string;
  avatar?: string;
  title?: string;
  bio?: string;
  location?: string;
  website?: string;
}

export interface ProfileStats {
  followers: number;
  following: number;
  posts: number;
}

export interface PostStats {
  likes: number;
  comments: number;
  reposts: number;
}

export interface PostPhoto {
  id: string;
  src: string;
}

export interface Post {
  id: string;
  content: string;
  profile: Profile;
  stats: PostStats;
  createdAt: string;
  updatedAt?: string;
}

export type ProfileInfoProps = {
  profile: Profile;
  company?: Company;
};

export type FeaturePhotosProps = {
  photos: string[];
};

export type InforLineProps = {
  icon: React.ReactNode;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export type StatsBlockProps = {
  label: string;
  value: string;
};

export type ProfileStatsProps = {
  stats: ProfileStats;
};

export type PostActionType =
  | 'toggleLike'
  | 'comment'
  | 'repost'
  | 'share'
  | 'bookmark';

export type PostMenuActionType =
  | 'delete'
  | 'addToHighlights'
  | 'changeViewPermission'
  | 'report'
  | 'unlike';

export type PostAction = {
  title?: string;
  type: PostActionType;
  icon?: React.ReactNode;
};

export type PostMenuAction = Pick<PostAction, 'title' | 'icon'> & {
  type: PostMenuActionType;
};

type PostActionHandler = (postId: string) => void;

export type PostsProps = {
  posts: Post[];
};

export type PostCardProps = CardProps & {
  postId: string;
  authorName: string;
  authorUsername: string;
  avatar?: string;
  createdAt: string;
  content: string;
  postActionConfig: Record<
    PostActionType,
    {
      content?: React.ReactNode;
      handler: PostActionHandler;
    }
  >;
  postMenuActionConfig: Record<PostMenuActionType, PostActionHandler>;
};

export type PhotoCardProps = {
  photoId: string;
  photoSrc: string;
  onPress?: (id: string) => void;
};

export type PhotosProps = {
  photos: PostPhoto[];
};

export type ProfileTimelineProps = {
  posts: Post[];
  photos: PostPhoto[];
  likedPosts: Post[];
};

export type ProfilePageProps = {
  featurePhotos: string[];
  profile: Profile;
  profileStats: ProfileStats;
  company?: Company;
  profileTimeline: ProfileTimelineProps;
};
