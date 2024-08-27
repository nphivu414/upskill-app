import { DateFormatter, Time } from '@internationalized/date';
import { SliderProps } from '@nextui-org/react';
import { SliderField, SliderFieldProps, Subtle } from '@upskill-app/ui/web';
import { useFormContext } from 'react-hook-form';

import { FlightFilterFormData } from '../types';

type TimeRangeSliderProps = SliderProps &
  Pick<SliderFieldProps<FlightFilterFormData>, 'name'>;

export const TimeRangeSlider = (props: TimeRangeSliderProps) => {
  const { control, formState } = useFormContext<FlightFilterFormData>();
  const minTime = props.minValue || 0;
  const maxTime = props.maxValue || 0;

  const formatTime = (value: number) => {
    const dateFormatter = new DateFormatter('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

    const time = new Time(value, 0);
    const date = new Date();
    date.setHours(time.hour, time.minute);

    return dateFormatter.format(new Date(date));
  };

  return (
    <SliderField
      control={control}
      formState={formState}
      size="sm"
      step={1}
      startContent={<Subtle className="text-xs">{formatTime(minTime)}</Subtle>}
      endContent={<Subtle className="text-xs">{formatTime(maxTime)}</Subtle>}
      renderCustomValue={(value) => {
        if (!value) return;
        const timeRange = value as number[];

        return (
          <>
            {formatTime(timeRange[0])} - {formatTime(timeRange[1])}
          </>
        );
      }}
      {...props}
    />
  );
};
