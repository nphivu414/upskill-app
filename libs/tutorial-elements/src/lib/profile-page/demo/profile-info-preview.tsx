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
import { defaultCompany, defaultProfile } from '../data';
import { ProfileInfo } from '../profile-info';

export const ProfileInfoPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.PROFILE_UI.PROFILE_INFO,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-info/profile-info.tsx'
      )}
    >
      <ClientOnlyContainer
        contentContainerClassName="h-[320px] w-[350px] pt-[40px]"
        loadingContainerClassName="min-h-[350px]"
      >
        <ProfileInfo profile={defaultProfile} company={defaultCompany} />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
