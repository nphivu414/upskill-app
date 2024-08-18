import { Slider } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { FlightTimelineProps } from '../types';

export const FlightTimeline = ({
  arrivalAirport,
  arrivalTime,
  departureAirport,
  departureTime,
  duration,
  totalStops,
}: FlightTimelineProps) => {
  const totalSteps = totalStops + 1;
  return (
    <div className="flex flex-col items-center justify-center">
      <Subtle className="text-xs">{duration}</Subtle>
      <Slider
        size="sm"
        step={1}
        defaultValue={totalSteps}
        maxValue={totalSteps}
        minValue={0}
        color="foreground"
        showSteps={true}
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
      <Subtle className="text-xs">{totalStops} stops</Subtle>
    </div>
  );
};
