'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';

import { ClientOnlyContainer } from '../../components';
import { defaultProfileStats } from '../data';
import { ProfileStats } from '../profile-stats';

export const ProfileStatsPreview = () => {
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(TUTORIAL_STORIES.PROFILE_UI.PROFILE_STATS)}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-stats/profile-stats.tsx'
      )}
    >
      <ClientOnlyContainer
        contentContainerClassName="h-[85px] w-[350px]"
        loadingContainerClassName="min-h-[85px]"
      >
        <ProfileStats stats={defaultProfileStats} />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
