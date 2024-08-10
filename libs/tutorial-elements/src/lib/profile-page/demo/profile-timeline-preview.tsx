'use client';

import { ClientOnlyContainer } from '../../components';
import { defaultLikedPosts, defaultPhotos, defaultPosts } from '../data';
import { ProfileTimeline } from '../profile-timeline';

export const ProfileTimelinePreview = () => {
  return (
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
  );
};
