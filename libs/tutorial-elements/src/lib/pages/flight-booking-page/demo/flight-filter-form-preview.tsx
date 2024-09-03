'use client';

import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { defaultAirlines, defaultBenefits, defaultCabinClasses } from '../data';
import { FlightFilterForm } from '../flight-filter-form';

export const FlightFilterFormPreview = () => {
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
      <div className="max-h-[400px] w-[350px] overflow-y-auto">
        <FlightFilterForm
          airlines={defaultAirlines}
          benefits={defaultBenefits}
          cabinClasses={defaultCabinClasses}
          initialData={{
            airlines: [],
            cabinClasses: [],
            benefits: [],
            arrivalTimeRange: [0, 23],
            departureTimeRange: [0, 23],
            priceRange: [0, 1000],
            stops: [],
          }}
          onSubmit={(data) => alert(JSON.stringify(data, null, 2))}
        />
      </div>
    </LivePreview>
  );
};
