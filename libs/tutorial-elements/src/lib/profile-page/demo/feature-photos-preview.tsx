'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../components';
import { defaultFeaturePhotos } from '../data';
import { FeaturePhotos } from '../feature-photos';

export const FeaturePhotosPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.PROFILE_UI.FEATURE_PHOTO,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/feature-photos/feature-photos.tsx'
      )}
    >
      <ClientOnlyContainer
        contentContainerClassName="h-[350px] w-[350px]"
        loadingContainerClassName="min-h-[350px]"
      >
        <FeaturePhotos photos={defaultFeaturePhotos} showDots />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
