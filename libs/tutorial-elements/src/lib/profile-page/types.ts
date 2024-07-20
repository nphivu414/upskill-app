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

export type PersonalInfoProps = {
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

export type ProfilePageProps = {
  featurePhotos: string[];
  profile: Profile;
  company?: Company;
};
