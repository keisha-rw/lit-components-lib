import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconAreaChart } from './area-chart';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/AreaChart',
  component: PdsIconAreaChart,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
    },
    color: {
      control: 'select',
      options: validIconColors
    },
    id: {
      table: {
        disable: true
      }
    },
    slot: {
      table: {
        disable: true
      }
    },
    className: {
      table: {
        disable: true
      }
    }
  },
};

const Template: StoryFn<typeof PdsIconAreaChart> = (args) => (
  <PdsIconAreaChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};
