'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer, MockupBrowser } from '../../components';
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

export const ProfilePagePreview = () => {
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
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer loadingContainerClassName="min-h-[604px]">
        <MockupBrowser>
          <ProfilePage {...props} />
        </MockupBrowser>
      </ClientOnlyContainer>
    </LivePreview>
  );
};
