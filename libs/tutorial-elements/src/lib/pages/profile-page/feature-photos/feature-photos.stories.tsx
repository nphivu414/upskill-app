import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultFeaturePhotos } from '../data';
import { FeaturePhotos } from './feature-photos';

const meta: Meta<typeof FeaturePhotos> = {
  component: FeaturePhotos,
  title: 'Tutorials/Profile UI/Components/Feature Photos',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FeaturePhotos>;

export const Default: Story = {
  args: {
    photos: defaultFeaturePhotos,
  },
};

export const WithPaginationDots: Story = {
  args: {
    photos: defaultFeaturePhotos,
    showDots: true,
  },
};
