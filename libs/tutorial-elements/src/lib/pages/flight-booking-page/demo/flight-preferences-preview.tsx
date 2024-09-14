'use client';

import {
  getGithubSourceUrl,
  getStorybookBaseUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { EmbedStory, LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../../components';

export const FlightPreferencesPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_HEADER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/'
      )}
    >
      <ClientOnlyContainer loadingContainerClassName="min-h-[400px] w-[500px]">
        <EmbedStory
          storyBaseURL={getStorybookBaseUrl()}
          storyId={TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_PREFERENCES}
          height={400}
          width={500}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
