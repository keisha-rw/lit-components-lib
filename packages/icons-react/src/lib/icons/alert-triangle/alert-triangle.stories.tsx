import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconAlertTriangle } from './alert-triangle';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/AlertTriangle',
  component: PdsIconAlertTriangle,
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

const Template: StoryFn<typeof PdsIconAlertTriangle> = (args) => (
  <PdsIconAlertTriangle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};
