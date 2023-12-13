import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconBellNotification } from './bell-notification';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/BellNotification',
  component: PdsIconBellNotification,
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

const Template: StoryFn<typeof PdsIconBellNotification> = (args) => (
  <PdsIconBellNotification {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

