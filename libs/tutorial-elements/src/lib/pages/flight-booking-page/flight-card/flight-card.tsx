import { Avatar, Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
import { Subtle } from '@upskill-app/ui/web';

import { FlightCardProps } from '../types';

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
      <CardBody>body</CardBody>
    </Card>
  );
};
