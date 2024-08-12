'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultLikedPosts, defaultPhotos, defaultPosts } from '../data';
import { ProfileTimeline } from '../profile-timeline';

export const ProfileTimelinePreview = () => {
  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
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
