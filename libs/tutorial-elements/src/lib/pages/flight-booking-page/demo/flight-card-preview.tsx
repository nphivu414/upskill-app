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
import { FlightCard } from '../flight-card';

export const FlightCardPreview = () => {
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
      <div className="w-[300px] xl:w-[350px]">
        <FlightCard
          {...defaultFlights[3]}
          onPress={(id) => {
            console.log(`Flight with id ${id} clicked`);
          }}
        />
      </div>
    </LivePreview>
  );
};
