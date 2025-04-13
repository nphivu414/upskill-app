'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { MockupBrowser } from '../../../components';
import { DataTablePage } from '../data-table-page';

type DataTablePagePreviewProps = {
  showStorySourceLink?: boolean;
};

export const DataTablePagePreview = ({
  showStorySourceLink,
}: DataTablePagePreviewProps) => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_BOOKING_PAGE,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-booking-page.tsx'
      )}
      showStorySourceLink={showStorySourceLink}
    >
      <MockupBrowser className="w-full max-w-full">
        <DataTablePage />
      </MockupBrowser>
    </LivePreview>
  );
};
