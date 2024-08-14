'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultLikedPosts, defaultPhotos, defaultPosts } from '../data';
import { ProfileTimeline } from '../profile-timeline';

export const ProfileTimelinePreview = () => {
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(TUTORIAL_STORIES.PROFILE_UI.PROFILE_STATS)}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-timeline/profile-timeline.tsx'
      )}
    >
      <ClientOnlyContainer
        contentContainerClassName="h-[420px] w-[350px]"
        loadingContainerClassName="min-h-[420px]"
      >
        <ProfileTimeline
          posts={[defaultPosts[1], defaultPosts[2]]}
          likedPosts={defaultLikedPosts}
          photos={[
            defaultPhotos[5],
            defaultPhotos[5],
            defaultPhotos[5],
            defaultPhotos[5],
            defaultPhotos[0],
          ]}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
