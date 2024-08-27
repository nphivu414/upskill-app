import { CheckboxGroupData, CheckboxGroupField } from '@upskill-app/ui/web';
import { useFormContext } from 'react-hook-form';

import { BENEFIT_MAPPING } from '../constants';
import { BenefitEnum, FlightFilterFormData } from '../types';
import { getBenefitIcon } from '../utils';

export const BenefitSelector = () => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const checboxGroupData: CheckboxGroupData[] | undefined = Object.entries(
    BENEFIT_MAPPING
  ).map(([key, value]) => ({
    value: key,
    label: value,
    endContent: getBenefitIcon(key as BenefitEnum),
  }));

  return (
    <CheckboxGroupField
      name="benefits"
      label="Facilities"
      size="sm"
      control={control}
      formState={formState}
      data={checboxGroupData}
    />
  );
};
