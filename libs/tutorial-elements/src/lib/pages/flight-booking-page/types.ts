import { MotionValue } from 'framer-motion';

interface Benefit {
  id: string;
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

interface Flight {
  id: string;
  origin: string;
  price: number;
  destination: string;
  cabinClass: string;
  departureDate: string;
  airline: string;
  airlineLogo: React.ReactNode;
  aircraftType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirport: string;
  arrivalAirport: string;
  benefits: Benefit[];
  stops: string[];
  isRoundTrip: boolean;
}

export type FlightHeaderProps = {
  sticky?: boolean;
  shouldHideOnScroll?: boolean;
  parentScrollY: MotionValue<number>;
  handleBack: () => void;
  handleShare: () => void;
} & Pick<Flight, 'origin' | 'destination' | 'cabinClass' | 'departureDate'>;

export type FlightCardProps = {
  onPress: (id: Flight['id']) => void;
} & Pick<
  Flight,
  | 'id'
  | 'price'
  | 'airline'
  | 'airlineLogo'
  | 'cabinClass'
  | 'aircraftType'
  | 'departureTime'
  | 'arrivalTime'
  | 'duration'
  | 'departureAirport'
  | 'arrivalAirport'
  | 'benefits'
  | 'stops'
  | 'isRoundTrip'
>;

export type FlightTimelineProps = {
  totalStops: number;
} & Pick<
  Flight,
  | 'departureTime'
  | 'arrivalTime'
  | 'departureAirport'
  | 'arrivalAirport'
  | 'duration'
>;

export type FlightBenefitsProps = Pick<Flight, 'benefits'>;

export type FlightFareDetailsProps = Pick<Flight, 'price' | 'isRoundTrip'>;

export type FlightOverviewProps = Pick<
  Flight,
  'airline' | 'airlineLogo' | 'cabinClass' | 'aircraftType'
>;

export type FlightFooterProps = {
  portalContainer: React.RefObject<HTMLElement> | undefined;
};
