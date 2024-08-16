import React from 'react';
import { ScrollShadow } from '@nextui-org/react';

import { FlightHeader } from './flight-header';

export const FlightBookingPage = () => {
  return (
    <ScrollShadow className="h-[550px]" size={15}>
      <FlightHeader
        cabinClass="First class"
        departureDate="2024/12/2"
        destination="Saigon"
        origin="Singapore"
      />
    </ScrollShadow>
  );
};
