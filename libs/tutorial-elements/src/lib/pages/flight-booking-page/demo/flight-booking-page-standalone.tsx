'use client';

import { defaultFlights, defaultSearchFlightParams } from '../data';
import { FlightBookingPage } from '../flight-booking-page';

export const FlightBookingPageStandalone = () => {
  return (
    <FlightBookingPage
      flights={defaultFlights}
      searchFlightParams={defaultSearchFlightParams}
    />
  );
};
