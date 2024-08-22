import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../components';
import { FlightBookingPage } from './flight-booking-page';

const meta: Meta<typeof FlightBookingPage> = {
  component: FlightBookingPage,
  title: 'Tutorials/Flight Booking UI/Page/Screen',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FlightBookingPage>;

export const Default: Story = {
  args: {},
};
