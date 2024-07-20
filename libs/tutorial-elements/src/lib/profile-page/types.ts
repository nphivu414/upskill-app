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

export type ProfilePageProps = {
  featurePhotos: string[];
  profile: Profile;
  profileStats: ProfileStats;
  company?: Company;
};
