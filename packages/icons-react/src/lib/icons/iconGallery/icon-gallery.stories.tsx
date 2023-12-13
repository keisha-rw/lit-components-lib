import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconIconGallery } from './icon-gallery';

export default {
  title: 'Gallery/React icons',
  component: 'PdsIconIconGallery',
  tags: ['autodocs'],
};

export const Default: Story = (args) => <PdsIconIconGallery {...args} />;
Default.args = {
};
