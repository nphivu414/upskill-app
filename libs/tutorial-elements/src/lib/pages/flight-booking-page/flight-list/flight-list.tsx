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
      <div className="flex w-full flex-col gap-2 px-4 pb-4">
        <FlightCard
          id="1"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline={{
            id: '1',
            name: 'Singapore Airlines',
            logo: 'https://avatar.vercel.sh/singapore-airlines',
          }}
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={11} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={11} />,
            },
          ]}
          cabinClass="Business Class"
          departureAirport="SIN"
          departureTime="8:00"
          duration="14h 30m"
          stops={[]}
          isRoundTrip
          onPress={(id) => {
            console.log('Flight card pressed', id);
          }}
        />
        <FlightCard
          id="2"
          price={304.99}
          aircraftType="Boeing 777-300ER"
          airline={{
            id: '1',
            name: 'Singapore Airlines',
            logo: 'https://avatar.vercel.sh/singapore-airlines',
          }}
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={11} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={11} />,
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
          airline={{
            id: '2',
            name: 'American Airlines',
            logo: 'https://avatar.vercel.sh/merican-airlines',
          }}
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={11} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={11} />,
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
          airline={{
            id: '2',
            name: 'American Airlines',
            logo: 'https://avatar.vercel.sh/merican-airlines',
          }}
          arrivalAirport="JFK"
          arrivalTime="10:00"
          benefits={[
            {
              id: '1',
              title: '23kg',
              icon: <Briefcase size={11} />,
              description: 'Bring up to 2 checked bags for free.',
            },
            {
              id: '2',
              title: 'Meal included',
              icon: <Utensils size={11} />,
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
