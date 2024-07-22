import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../components';
import { defaultProfileStats } from '../data';
import { ProfileStats } from './profile-stats';

const meta: Meta<typeof ProfileStats> = {
  component: ProfileStats,
  title: 'Tutorials/Profile UI/Profile Stats',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfileStats>;

export const Default: Story = {
  args: {
    stats: defaultProfileStats,
  },
};
