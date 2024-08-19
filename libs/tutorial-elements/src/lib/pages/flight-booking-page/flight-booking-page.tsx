import React from 'react';
import { ScrollShadow } from '@nextui-org/react';
import { useScroll } from 'framer-motion';

import { FlightHeader } from './flight-header';
import { FlightList } from './flight-list';

export const FlightBookingPage = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

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
    <ScrollShadow ref={ref} className="h-[550px] pb-4" size={15}>
      <FlightHeader
        parentScrollY={scrollYProgress}
        cabinClass="Business Class"
        departureDate="2021-10-02T00:00:00Z"
        destination="Saigon"
        origin="Singapore"
        handleBack={handleBack}
        handleShare={handleShareFlight}
        sticky
        shouldHideOnScroll
      />
      <FlightList />
    </ScrollShadow>
  );
};
