import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconRefreshCw } from './refresh-cw';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/RefreshCw',
  component: PdsIconRefreshCw,
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

const Template: StoryFn<typeof PdsIconRefreshCw> = (args) => (
  <PdsIconRefreshCw {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

