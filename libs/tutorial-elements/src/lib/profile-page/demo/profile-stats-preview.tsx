'use client';

import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultProfileStats } from '../data';
import { ProfileStats } from '../profile-stats';

export const ProfileStatsPreview = () => {
  return (
    <LivePreview storybookUrl="#" sourceUrl="#">
      <ClientOnlyContainer
        contentContainerClassName="h-[85px] w-[350px]"
        loadingContainerClassName="min-h-[85px]"
      >
        <ProfileStats stats={defaultProfileStats} />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
