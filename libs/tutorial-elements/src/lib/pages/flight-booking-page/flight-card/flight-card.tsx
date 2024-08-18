import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { FlightCardProps } from '../types';
import { FlightTimeline } from './flight-timeline';

export const FlightCard = ({
  onPress,
  id,
  airline,
  airlineLogo,
  cabinClass,
  aircraftType,
  departureTime,
  arrivalTime,
  duration,
  departureAirport,
  arrivalAirport,
  benefits,
  stops,
  isRoundTrip,
}: FlightCardProps) => {
  const handlePress = () => {
    onPress(id);
  };
  return (
    <Card isPressable onPress={handlePress} fullWidth radius="sm">
      <CardHeader>
        <div className="flex flex-1 justify-between">
          <div className="flex flex-col items-start gap-1">
            <p className="text-sm font-semibold">{airline}</p>
            <div className="flex items-center justify-around gap-1">
              <Subtle className="text-xs">{cabinClass}</Subtle>
              <Subtle className="text-xs">•</Subtle>
              <Subtle className="text-xs">{aircraftType}</Subtle>
            </div>
          </div>
          <Avatar src={airlineLogo} alt="airline logo" size="sm" />
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex items-center justify-between gap-2">
          <div className="flex w-3/5 shrink-0">
            <FlightTimeline
              departureTime={departureTime}
              arrivalTime={arrivalTime}
              departureAirport={departureAirport}
              arrivalAirport={arrivalAirport}
              duration={duration}
              totalStops={stops.length}
            />
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-warning truncate break-words text-xs font-semibold">
              $304.99 / pax
            </p>
            {isRoundTrip && (
              <Chip
                size="sm"
                variant="flat"
                color="primary"
                className="text-xs"
              >
                Round trip
              </Chip>
            )}
          </div>
        </div>
      </CardBody>
      <CardFooter>
        <div className="flex items-center gap-2 overflow-x-auto">
          {benefits.map((benefit) => (
            <Chip
              key={benefit.id}
              size="sm"
              variant="dot"
              color="warning"
              className="text-xs"
              startContent={
                benefit.icon ? (
                  <div className="text-warning px-1">{benefit.icon}</div>
                ) : undefined
              }
            >
              {benefit.title}
            </Chip>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
