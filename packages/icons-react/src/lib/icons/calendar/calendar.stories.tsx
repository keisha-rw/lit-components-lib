import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconCalendar } from './calendar';

export default {
  title: 'Icons/Calendar',
  component: 'PdsIconCalendar',
  tags: ['autodocs'],
};

export const Default: StoryFn = (args) => <PdsIconCalendar {...args} />;

Default.args = {
  size: 'default',
};
