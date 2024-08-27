import { Subtle } from '@upskill-app/ui/web';

import { Flight } from '../types';
import { FlightLogo } from './flight-logo';

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
      <FlightLogo src={airline.logo} />
    </div>
  );
};
