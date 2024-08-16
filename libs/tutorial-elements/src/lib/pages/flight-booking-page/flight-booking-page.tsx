import React from 'react';
import { ScrollShadow } from '@nextui-org/react';

import { FlightHeader } from './flight-header';

export const FlightBookingPage = () => {
  return (
    <ScrollShadow className="h-[550px] py-2" size={15}>
      <FlightHeader
        cabinClass="Business Class"
        departureDate="2021-10-02T00:00:00Z"
        destination="Saigon"
        origin="Singapore"
      />
    </ScrollShadow>
  );
};
