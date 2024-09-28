'use client';

import React from 'react';
import { Card, CardBody, Spacer } from '@nextui-org/react';
import {
  getGithubSourceUrl,
  getStorybookUrl,
  TUTORIAL_REPO,
  TUTORIAL_STORIES,
} from '@upskill-app/shared';
import { LivePreview, Subtle } from '@upskill-app/ui/web';
import { useTheme } from 'next-themes';

import { defaultAirlines, defaultBenefits, defaultCabinClasses } from '../data';
import { FlightFilterForm } from '../flight-filter-form';
import { FlightFilterFormData } from '../types';

const initialFormValues: FlightFilterFormData = {
  airlines: [],
  cabinClasses: [],
  benefits: [],
  arrivalTimeRange: [0, 23],
  departureTimeRange: [0, 23],
  priceRange: [0, 1000],
  stops: [],
};

export const FlightFilterFormPreview = () => {
  const { theme } = useTheme();
  const [formValues, setFormValues] = React.useState<FlightFilterFormData>();

  return (
    <LivePreview
      storybookUrl={getStorybookUrl(
        TUTORIAL_STORIES.FLIGHT_BOOKING_UI.FLIGHT_HEADER,
        theme
      )}
      sourceUrl={getGithubSourceUrl(
        TUTORIAL_REPO.FLIGHT_BOOKING_UI,
        'blob/main/src/components/flight-booking/flight-filter-form/index.ts'
      )}
    >
      <div className="flex w-full flex-col justify-center gap-8 px-4 xl:flex-row">
        <Card
          fullWidth
          className="max-h-[280px] overflow-y-auto xl:max-h-[50vh]"
        >
          <CardBody>
            <FlightFilterForm
              airlines={defaultAirlines}
              benefits={defaultBenefits}
              cabinClasses={defaultCabinClasses}
              initialData={initialFormValues}
              onSubmit={(data) => setFormValues(data)}
            />
          </CardBody>
        </Card>
        <div className="text-xs">
          <p className="text-center text-sm font-semibold">Form Values:</p>
          <Spacer y={2} />
          <Card className="max-h-[45vh] overflow-y-auto">
            <CardBody>
              {formValues ? (
                <pre>{JSON.stringify(formValues, null, 2)}</pre>
              ) : (
                <pre>{JSON.stringify(initialFormValues, null, 2)}</pre>
              )}
            </CardBody>
          </Card>
          <Spacer y={2} />
          <Subtle className="text-center text-sm font-semibold">
            *Save the form to see changes
          </Subtle>
        </div>
      </div>
    </LivePreview>
  );
};
