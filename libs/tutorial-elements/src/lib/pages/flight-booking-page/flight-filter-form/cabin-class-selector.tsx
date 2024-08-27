import { CheckboxGroupData, CheckboxGroupField } from '@upskill-app/ui/web';
import { useFormContext } from 'react-hook-form';

import { CABIN_CLASS_MAPPING } from '../constants';
import { FlightFilterFormData } from '../types';

export const CabinSelector = () => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checboxGroupData: CheckboxGroupData[] | undefined = Object.entries(
    CABIN_CLASS_MAPPING
  ).map(([key, value]) => ({
    value: key,
    label: value,
  }));

  return (
    <CheckboxGroupField
      name="cabinClasses"
      label="Cabin Class"
      size="sm"
      control={control}
      formState={formState}
      data={checboxGroupData}
    />
  );
};
