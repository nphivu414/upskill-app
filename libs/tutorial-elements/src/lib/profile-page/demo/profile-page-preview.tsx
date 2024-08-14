'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
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
    <LivePreview
      storybookUrl={getStorybookUrl(TUTORIAL_STORIES.PROFILE_UI.PROFILE_PAGE)}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-page.tsx'
      )}
    >
      <ClientOnlyContainer loadingContainerClassName="min-h-[604px]">
        <MockupBrowser>
          <ProfilePage {...props} />
        </MockupBrowser>
      </ClientOnlyContainer>
    </LivePreview>
  );
};
