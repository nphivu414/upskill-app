'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultFeaturePhotos } from '../data';
import { FeaturePhotos } from '../feature-photos';

export const FeaturePhotosPreview = () => {
  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer
        contentContainerClassName="h-[350px] w-[350px]"
        loadingContainerClassName="min-h-[350px]"
      >
        <FeaturePhotos photos={defaultFeaturePhotos} showDots />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
