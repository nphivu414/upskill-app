'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultLikedPosts, defaultPhotos, defaultPosts } from '../data';
import { ProfileTimeline } from '../profile-timeline';

export const ProfileTimelinePreview = () => {
  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer
        contentContainerClassName="h-[600px] w-[350px]"
        loadingContainerClassName="min-h-[600px]"
      >
        <ProfileTimeline
          posts={defaultPosts}
          likedPosts={defaultLikedPosts}
          photos={defaultPhotos}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
