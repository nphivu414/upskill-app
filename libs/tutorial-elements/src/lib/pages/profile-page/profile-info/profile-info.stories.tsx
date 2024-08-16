import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultCompany, defaultProfile } from '../data';
import { ProfileInfo } from './profile-info';

const meta: Meta<typeof ProfileInfo> = {
  component: ProfileInfo,
  title: 'Tutorials/Profile UI/Components/Profile Info',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <div style={{ paddingTop: 40 }}>
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
