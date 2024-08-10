'use client';

import { ClientOnlyContainer } from '../../components';
import { defaultFeaturePhotos } from '../data';
import { FeaturePhotos } from '../feature-photos';

export const FeaturePhotosPreview = () => {
  return (
    <ClientOnlyContainer
      contentContainerClassName="h-[350px] w-[350px]"
      loadingContainerClassName="min-h-[350px]"
    >
      <FeaturePhotos photos={defaultFeaturePhotos} showDots />
    </ClientOnlyContainer>
  );
};
