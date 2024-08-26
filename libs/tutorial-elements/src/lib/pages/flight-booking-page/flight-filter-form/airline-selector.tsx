import { CheckboxGroupData, CheckboxGroupField } from '@upskill-app/ui/web';
import { useFormContext } from 'react-hook-form';

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
