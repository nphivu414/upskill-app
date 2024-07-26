import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ScreenContainer } from '../../../components';
import { defaultPhotos } from '../../data';
import { PhotoCard } from './photo-card';

const meta: Meta<typeof PhotoCard> = {
  component: PhotoCard,
  title: 'Tutorials/Profile UI/Components/Photo Card',
  decorators: [
    (Story) => (
      <ScreenContainer>
        <Story />
      </ScreenContainer>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof PhotoCard>;

export const Default: Story = {
  args: {
    photoId: defaultPhotos[0].id,
    photoSrc: defaultPhotos[0].src,
    onPress: () => {
      console.log('Photo card clicked');
    },
  },
};
