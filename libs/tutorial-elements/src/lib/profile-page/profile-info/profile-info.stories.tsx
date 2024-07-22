import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../components';
import { defaultCompany, defaultProfile } from '../data';
import { ProfileInfo } from './profile-info';

const meta: Meta<typeof ProfileInfo> = {
  component: ProfileInfo,
  decorators: [
    (Story) => (
      <ScreenContainer>
        <div style={{ padding: 40 }}>
          <Story />
        </div>
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProfileInfo>;

export const Default: Story = {
  args: {
    profile: defaultProfile,
    company: defaultCompany,
  },
};
