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
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-filter-drawer/flight-filter-drawer.tsx'
      )}
    >
      <ClientOnlyContainer loadingContainerClassName="min-h-[300px] w-[300px] xl:min-h-[400px] xl:w-[400px]">
        <EmbedPreview
          previewUrl="/tutorials/preview/flight-booking-ui/flight-filter-drawer"
          height={isMobile ? 300 : 400}
          width={isMobile ? 300 : 400}
        />
      </ClientOnlyContainer>
    </LivePreview>
  );
};
