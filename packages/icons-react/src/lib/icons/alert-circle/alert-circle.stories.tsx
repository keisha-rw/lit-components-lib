import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconAlertCircle } from './alert-circle';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/AlertCircle',
  component: PdsIconAlertCircle,
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

const Template: StoryFn<typeof PdsIconAlertCircle> = (args) => (
  <PdsIconAlertCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};
