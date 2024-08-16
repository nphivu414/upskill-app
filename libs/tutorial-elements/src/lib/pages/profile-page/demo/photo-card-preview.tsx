'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../../components';
import { defaultPhotos } from '../data';
import { PhotoCard } from '../profile-timeline/photos/photo-card';

export const PhotoCardPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.PROFILE_UI.PHOTO_CARD,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-timeline/photos/photo-card.tsx'
      )}
    >
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
