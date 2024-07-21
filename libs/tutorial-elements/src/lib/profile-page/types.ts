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

export type PostsProps = {
  posts: Post[];
};

export type PostCardProps = {
  postId: string;
  authorName: string;
  authorUsername: string;
  avatar?: string;
  createdAt: string;
  likes: number;
  comments: number;
  reposts: number;
  content: string;
  onDelete?: (postId: string) => void;
  onAddToHighlights?: (postId: string) => void;
  onChangeViewPermission?: (postId: string) => void;
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
};

export type ProfilePageProps = {
  featurePhotos: string[];
  profile: Profile;
  profileStats: ProfileStats;
  company?: Company;
  posts: Post[];
  photos: PostPhoto[];
};
