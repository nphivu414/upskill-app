'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultPhotos } from '../data';
import { PhotoCard } from '../profile-timeline/photos/photo-card';

export const PhotoCardPreview = () => {
  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer
        contentContainerClassName="h-[450px] w-[350px]"
        loadingContainerClassName="min-h-[380px]"
      >
        <PhotoCard
          photoId={defaultPhotos[0].id}
          photoSrc={defaultPhotos[0].src}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
