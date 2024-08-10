'use client';

import { ClientOnlyContainer } from '../../components';
import { defaultProfileStats } from '../data';
import { ProfileStats } from '../profile-stats';

export const ProfileStatsPreview = () => {
  return (
    <ClientOnlyContainer
      contentContainerClassName="h-[85px] w-[350px]"
      loadingContainerClassName="min-h-[85px]"
    >
      <ProfileStats stats={defaultProfileStats} />
    </ClientOnlyContainer>
  );
};
