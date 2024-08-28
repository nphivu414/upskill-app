import { Flight, SearchFlightParams } from './types';

export const defaultSearchFlightParams: SearchFlightParams = {
  cabinClass: 'Economy',
  departureDate: '2021-10-02T00:00:00Z',
  from: 'Singapore',
  to: 'Saigon',
};

export const defaultFlights: Flight[] = [
  {
    id: '1',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'Business Class',
    airline: {
      id: '1',
      name: 'Singapore Airlines',
      logo: 'https://avatar.vercel.sh/singapore-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        title: '23kg',
        icon: 'baggage',
      },
      {
        id: '2',
        title: 'Meal included',
        icon: 'meal',
      },
    ],
    stops: [],
    isRoundTrip: true,
  },
  {
    id: '2',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'Business Class',
    airline: {
      id: '1',
      name: 'Singapore Airlines',
      logo: 'https://avatar.vercel.sh/singapore-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        title: '23kg',
        icon: 'baggage',
      },
      {
        id: '2',
        title: 'Meal included',
        icon: 'meal',
      },
    ],
    stops: ['HKG', 'LAX'],
    isRoundTrip: true,
  },
  {
    id: '3',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'Business Class',
    airline: {
      id: '1',
      name: 'Singapore Airlines',
      logo: 'https://avatar.vercel.sh/singapore-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        title: '23kg',
        icon: 'baggage',
      },
      {
        id: '2',
        title: 'Meal included',
        icon: 'meal',
      },
    ],
    stops: [],
    isRoundTrip: true,
  },
  {
    id: '4',
    origin: 'Singapore',
    price: 304.99,
    destination: 'Saigon',
    cabinClass: 'Business Class',
    airline: {
      id: '1',
      name: 'Singapore Airlines',
      logo: 'https://avatar.vercel.sh/singapore-airlines',
    },
    aircraftType: 'Boeing 777-300ER',
    departureTime: '8:00',
    arrivalTime: '10:00',
    duration: '14h 30m',
    departureAirport: 'SIN',
    arrivalAirport: 'JFK',
    benefits: [
      {
        id: '1',
        title: '23kg',
        icon: 'baggage',
      },
      {
        id: '2',
        title: 'Meal included',
        icon: 'meal',
      },
    ],
    stops: [],
    isRoundTrip: true,
  },
];
