import { Spacer } from '@nextui-org/react';
import { Briefcase, Utensils } from 'lucide-react';

import { FlightCard } from '../flight-card';

export const FlightList = () => {
  return (
    <div>
      <Spacer y={4} />
      <div className="flex items-center justify-between px-4">
        <p className="font-semibold">Search results</p>
        <p className="text-primary text-xs">120 Flights</p>
      </div>
      <Spacer y={4} />
      <div className="flex w-full flex-col gap-2 px-4">
        <FlightCard
          id="1"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline="Singapore Airlines"
          airlineLogo="https://content.api.news/v3/images/bin/0a4b9d5f6f8d4c9b6d3b9f4e5e7b3e0a"
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={12} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={12} />,
            },
          ]}
          cabinClass="Business Class"
          departureAirport="SIN"
          departureTime="8:00"
          duration="14h 30m"
          stops={['HKG', 'LAX']}
          isRoundTrip
          onPress={(id) => {
            console.log('Flight card pressed', id);
          }}
        />
        <FlightCard
          id="2"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline="Singapore Airlines"
          airlineLogo="https://content.api.news/v3/images/bin/0a4b9d5f6f8d4c9b6d3b9f4e5e7b3e0a"
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={12} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={12} />,
            },
          ]}
          cabinClass="Business Class"
          departureAirport="SIN"
          departureTime="8:00"
          duration="14h 30m"
          stops={['HKG', 'LAX']}
          isRoundTrip={false}
          onPress={(id) => {
            console.log('Flight card pressed', id);
          }}
        />
        <FlightCard
          id="2"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline="Singapore Airlines"
          airlineLogo="https://content.api.news/v3/images/bin/0a4b9d5f6f8d4c9b6d3b9f4e5e7b3e0a"
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={14} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={14} />,
            },
          ]}
          cabinClass="Business Class"
          departureAirport="SIN"
          departureTime="8:00"
          duration="14h 30m"
          stops={['HKG', 'LAX']}
          isRoundTrip={false}
          onPress={(id) => {
            console.log('Flight card pressed', id);
          }}
        />
        <FlightCard
          id="2"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline="Singapore Airlines"
          airlineLogo="https://content.api.news/v3/images/bin/0a4b9d5f6f8d4c9b6d3b9f4e5e7b3e0a"
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={14} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={14} />,
            },
          ]}
          cabinClass="Business Class"
          departureAirport="SIN"
          departureTime="8:00"
          duration="14h 30m"
          stops={['HKG', 'LAX']}
          isRoundTrip={false}
          onPress={(id) => {
            console.log('Flight card pressed', id);
          }}
        />
      </div>
    </div>
  );
};
