interface Benefit {
  id: string;
  title: string;
  icon?: React.ReactNode;
  description?: string;
}

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
  benefits: Benefit[];
  stops: string[];
  isRoundTrip: boolean;
}

export type FlightHeaderProps = {
  sticky?: boolean;
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
