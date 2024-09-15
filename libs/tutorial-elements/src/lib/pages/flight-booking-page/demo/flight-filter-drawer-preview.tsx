'use client';

import {
  getGithubSourceUrl,
  getStorybookBaseUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { EmbedStory, LivePreview, useResponsive } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../../components';

export const FlightFilterDrawerPreview = () => {
  const { theme } = useTheme();
  const { isMobile } = useResponsive();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_FILTER_DRAWER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/'
      )}
    >
      <ClientOnlyContainer loadingContainerClassName="min-h-[300px] w-[300px] xl:min-h-[400px] xl:w-[400px]">
        <EmbedStory
          storyBaseURL={getStorybookBaseUrl()}
          storyId={TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_FILTER_DRAWER}
          height={isMobile ? 300 : 400}
          width={isMobile ? 300 : 400}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
