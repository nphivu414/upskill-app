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
import { defaultSearchFlightParams } from '../data';
import { FlightHeader } from '../flight-header';

export const FlightHeaderPreview = () => {
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
      <ClientOnlyContainer
        contentContainerClassName="h-[60px] w-[350px]"
        loadingContainerClassName="min-h-[60px]"
      >
        <FlightHeader
          {...defaultSearchFlightParams}
          handleBack={() => {
            console.log('Back clicked');
          }}
          handleShare={() => {
            console.log('Share clicked');
          }}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
