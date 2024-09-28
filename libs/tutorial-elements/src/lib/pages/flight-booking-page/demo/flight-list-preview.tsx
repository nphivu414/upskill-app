'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { defaultFlights } from '../data';
import { FlightList } from '../flight-list';

export const FlightListPreview = () => {
  const { theme } = useTheme();
  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_HEADER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-list/flight-list.tsx'
      )}
    >
      <div className="max-h-[380px] w-[300px] overflow-y-auto xl:max-h-[400px] xl:w-[350px]">
        <FlightList data={defaultFlights} />
      </div>
    </LivePreview>
  );
};
