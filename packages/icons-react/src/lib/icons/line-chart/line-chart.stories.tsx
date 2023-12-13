import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLineChart } from './line-chart';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/LineChart',
  component: PdsIconLineChart,
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

const Template: StoryFn<typeof PdsIconLineChart> = (args) => (
  <PdsIconLineChart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

