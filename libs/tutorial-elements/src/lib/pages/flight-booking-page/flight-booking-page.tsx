import React from 'react';
import { ScrollShadow } from '@nextui-org/react';

import { FlightHeader } from './flight-header';
import { FlightList } from './flight-list';

export const FlightBookingPage = () => {
  const handleBack = () => {
    alert('Back button clicked');
  };

  const handleShareFlight = () => {
    navigator.share({
      url: document.URL,
      title: document.title,
      text: 'Check out this flight booking! From Singapore to Saigon on 2021-10-02.',
    });
  };

  return (
    <ScrollShadow className="h-[550px] pb-2" size={15}>
      <FlightHeader
        cabinClass="Business Class"
        departureDate="2021-10-02T00:00:00Z"
        destination="Saigon"
        origin="Singapore"
        sticky
        handleBack={handleBack}
        handleShare={handleShareFlight}
      />
      <FlightList />
    </ScrollShadow>
  );
};
