import { useScroll } from 'framer-motion';

import { FlightFooter } from './flight-footer/';
import { FlightHeader } from './flight-header';
import { FlightList } from './flight-list';
import { Flight, SearchFlightParams } from './types';

type FlightBookingPageProps = {
  searchFlightParams: SearchFlightParams;
  availableFlights: Flight[];
};

export const FlightBookingPage = ({
  searchFlightParams: { from, to, departureDate, returnDate, cabinClass },
  availableFlights,
}: FlightBookingPageProps) => {
  const { scrollYProgress } = useScroll();

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
    <div vaul-drawer-wrapper="">
      <FlightHeader
        parentScrollY={scrollYProgress}
        from={from}
        to={to}
        departureDate={departureDate}
        returnDate={returnDate}
        cabinClass={cabinClass}
        handleBack={handleBack}
        handleShare={handleShareFlight}
        sticky
        shouldHideOnScroll
      />
      <FlightList data={availableFlights} />
      <FlightFooter />
    </div>
  );
};
