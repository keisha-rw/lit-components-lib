import * as React from 'react';
import type { StoryFn } from '@storybook/react';
import { PdsLoadingPage } from './loading-page';

export default {
  title: 'Components/Loading page',
  component: PdsLoadingPage,
  parameters: {
    actions: {
      handles: [],
    },
  },
  tags: ['autodocs'],
};

const Template: StoryFn<typeof PdsLoadingPage> = (args) => (
  <PdsLoadingPage {...args} />
);

export const Default = Template.bind({});
Default.args = {};
