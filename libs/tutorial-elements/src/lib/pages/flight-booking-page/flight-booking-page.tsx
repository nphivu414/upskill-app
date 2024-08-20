import React from 'react';
import { ScrollShadow } from '@nextui-org/react';
import { useScroll } from 'framer-motion';

import { FlightFooter } from './flight-footer/';
import { FlightHeader } from './flight-header';
import { FlightList } from './flight-list';

export const FlightBookingPage = () => {
  const scrollContainerRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
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
    <ScrollShadow
      ref={scrollContainerRef}
      className="relative h-[550px]"
      size={15}
    >
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
      <FlightFooter portalContainer={scrollContainerRef} />
    </ScrollShadow>
  );
};
