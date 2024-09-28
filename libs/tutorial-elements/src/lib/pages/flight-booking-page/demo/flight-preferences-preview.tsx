'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { EmbedPreview, LivePreview, useResponsive } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer } from '../../../components';

export const FlightPreferencesPreview = () => {
  const { theme } = useTheme();
  const { isMobile } = useResponsive();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_HEADER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-preferences/flight-preferences.tsx'
      )}
    >
      <ClientOnlyContainer loadingContainerClassName="min-h-[380px] w-[300px] xl:min-h-[400px] xl:w-[500px]">
        <EmbedPreview
          previewUrl="/tutorials/preview/flight-booking-ui/flight-preferences"
          height={isMobile ? 380 : 400}
          width={isMobile ? 300 : 500}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
