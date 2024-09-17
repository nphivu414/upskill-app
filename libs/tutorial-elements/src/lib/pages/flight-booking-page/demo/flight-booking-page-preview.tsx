'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { EmbedPreview, LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { ClientOnlyContainer, MockupBrowser } from '../../../components';

type FlightBookingPagePreviewProps = {
  showStorySourceLink?: boolean;
};

export const FlightBookingPagePreview = ({
  showStorySourceLink,
}: FlightBookingPagePreviewProps) => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_BOOKING_PAGE,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.PROFILE_UI,
        'blob/main/src/components/profile/profile-page.tsx'
      )}
      showStorySourceLink={showStorySourceLink}
    >
      <MockupBrowser>
        <ClientOnlyContainer loadingContainerClassName="min-h-[550px]">
          <EmbedPreview
            previewUrl="/tutorials/preview/flight-booking-ui"
            height={550}
            width="100%"
          />
        </ClientOnlyContainer>
      </MockupBrowser>
    </LivePreview>
  );
};
