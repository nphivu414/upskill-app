import { Slider } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { FlightTimelineProps } from '../types';

export const FlightTimeline = ({
  arrivalAirport,
  arrivalTime,
  departureAirport,
  departureTime,
}: FlightTimelineProps) => {
  return (
    <Slider
      size="sm"
      step={1}
      color="foreground"
      showSteps={true}
      defaultValue={2}
      maxValue={2}
      minValue={0}
      className="max-w-md"
      isDisabled
      startContent={
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-xs">{departureTime}</p>
          <Subtle className="text-xs">{departureAirport}</Subtle>
        </div>
      }
      endContent={
        <div className="flex flex-col items-center justify-center gap-1">
          <p className="text-xs">{arrivalTime}</p>
          <Subtle className="text-xs">{arrivalAirport}</Subtle>
        </div>
      }
      classNames={{
        thumb: 'hidden',
        value: 'hidden',
        track: 'bg-foreground h-[1px]',
        step: 'bg-foreground w-[4px] h-[4px]',
      }}
    />
  );
};
