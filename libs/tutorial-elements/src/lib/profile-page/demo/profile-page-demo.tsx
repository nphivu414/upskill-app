'use client';

import { MockupBrowser } from '../../components';
import {
  defaultCompany,
  defaultFeaturePhotos,
  defaultLikedPosts,
  defaultPhotos,
  defaultPosts,
  defaultProfile,
  defaultProfileStats,
} from '../data';
import { ProfilePage } from '../profile-page';

export const ProfilePageDemo = () => {
  const props = {
    featurePhotos: defaultFeaturePhotos,
    profile: defaultProfile,
    company: defaultCompany,
    profileStats: defaultProfileStats,
    profileTimeline: {
      posts: defaultPosts,
      photos: defaultPhotos,
      likedPosts: defaultLikedPosts,
    },
  };
  return (
    <MockupBrowser>
      <ProfilePage {...props} />
    </MockupBrowser>
  );
};
