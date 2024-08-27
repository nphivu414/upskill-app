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
      endContent: <FlightLogo src={airline.logo} />,
    })
  );

  return (
    <CheckboxGroupField
      name="airlines"
      label="Airlines"
      control={control}
      formState={formState}
      data={checboxGroupData}
    />
  );
};
