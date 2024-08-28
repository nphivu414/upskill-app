import { Spacer } from '@nextui-org/react';
import { Briefcase, Utensils } from 'lucide-react';

import { FlightCard } from '../flight-card';
import { Flight } from '../types';

type FlightListProps = {
  data: Flight[];
};

export const FlightList = ({ data }: FlightListProps) => {
  return (
    <div>
      <Spacer y={4} />
      <div className="flex items-center justify-between px-4">
        <p className="font-semibold">Search results</p>
        <p className="text-primary text-xs">120 Flights</p>
      </div>
      <Spacer y={4} />
      <div className="flex w-full flex-col gap-2 px-4 pb-4">
        {data.map((flight) => (
          <FlightCard
            key={flight.id}
            onPress={(id) => alert(`Flight ${id} clicked`)}
            {...flight}
          />
        ))}
      </div>
    </div>
  );
};
