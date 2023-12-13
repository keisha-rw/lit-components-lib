import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconRefreshCcw } from './refresh-ccw';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/RefreshCcw',
  component: PdsIconRefreshCcw,
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

const Template: StoryFn<typeof PdsIconRefreshCcw> = (args) => (
  <PdsIconRefreshCcw {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

