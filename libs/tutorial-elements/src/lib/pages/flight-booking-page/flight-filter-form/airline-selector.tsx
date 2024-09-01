import { CheckboxGroupData, CheckboxGroupField } from '@upskill-app/ui/web';
import { useFormContext } from 'react-hook-form';

import { FlightLogo } from '../flight-card/flight-logo';
import { Airline, FlightFilterFormData } from '../types';

type AirlineSelectorProps = {
  data: Airline[];
};

export const AirlineSelector = ({ data }: AirlineSelectorProps) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checboxGroupData: CheckboxGroupData[] | undefined = data.map(
    (airline) => ({
      value: airline.id,
      label: airline.name,
      endContent: (
        <FlightLogo
          src={airline.logo}
          classNames={{
            base: 'h-6 w-6',
            img: 'h-6 w-6',
          }}
        />
      ),
    })
  );

  return (
    <CheckboxGroupField
      name="airlines"
      label="Airlines"
      size="sm"
      control={control}
      formState={formState}
      data={checboxGroupData}
    />
  );
};
