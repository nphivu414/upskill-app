'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { FlightSortMenu } from '../flight-sort-menu';

export const FlightSortMenuPreview = () => {
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
      <div className="max-h-[200px] w-[300px] overflow-y-auto xl:max-h-[200px] xl:w-[350px]">
        <FlightSortMenu onSortChange={(data) => alert(data)} />
      </div>
    </LivePreview>
  );
};
