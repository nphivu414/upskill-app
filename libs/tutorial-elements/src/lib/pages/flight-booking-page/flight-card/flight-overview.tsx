import { Avatar, Skeleton } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { Flight } from '../types';

type FlightOverviewProps = Pick<
  Flight,
  'airline' | 'cabinClass' | 'aircraftType'
>;

export const FlightOverview = ({
  airline,
  cabinClass,
  aircraftType,
}: FlightOverviewProps) => {
  return (
    <div className="flex flex-1 justify-between">
      <div className="flex flex-col items-start gap-1">
        <p className="text-sm font-semibold">{airline.name}</p>
        <div className="flex items-center justify-around gap-1">
          <Subtle className="text-xs">{cabinClass}</Subtle>
          <Subtle className="text-xs">•</Subtle>
          <Subtle className="text-xs">{aircraftType}</Subtle>
        </div>
      </div>
      <Avatar
        src={airline.logo}
        size="sm"
        fallback={<Skeleton className="flex size-8 rounded-full" />}
      />
    </div>
  );
};
