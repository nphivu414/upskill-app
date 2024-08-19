import { Subtle } from '@upskill-app/ui/web';

import { FlightOverviewProps } from '../types';

export const FlightOverview = ({
  airline,
  airlineLogo,
  cabinClass,
  aircraftType,
}: FlightOverviewProps) => {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-col items-start gap-1">
        <p className="text-sm font-semibold">{airline}</p>
        <div className="flex items-center justify-around gap-1">
          <Subtle className="text-xs">{cabinClass}</Subtle>
          <Subtle className="text-xs">•</Subtle>
          <Subtle className="text-xs">{aircraftType}</Subtle>
        </div>
      </div>
      <div className="border-divider bg-content2 flex size-8 items-center justify-center rounded-full border">
        {airlineLogo}
      </div>
    </div>
  );
};
