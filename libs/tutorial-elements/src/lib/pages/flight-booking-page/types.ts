interface Flight {
  id: string;
  origin: string;
  destination: string;
  cabinClass: string;
  departureDate: string;
  airline: string;
  airlineLogo: string;
  aircraftType: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  departureAirport: string;
  arrivalAirport: string;
  benefits: string[];
}

export type FlightHeaderProps = {
  handleBack: () => void;
  handleShare: () => void;
} & Pick<Flight, 'origin' | 'destination' | 'cabinClass' | 'departureDate'>;

export type FlightCardProps = {
  onPress: (id: Flight['id']) => void;
} & Pick<
  Flight,
  | 'id'
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
>;

export type FlightTimelineProps = Pick<
  Flight,
  'departureTime' | 'arrivalTime' | 'departureAirport' | 'arrivalAirport'
>;
