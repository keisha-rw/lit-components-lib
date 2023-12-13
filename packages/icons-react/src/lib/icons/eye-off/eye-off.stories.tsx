import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconEyeOff } from './eye-off';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/EyeOff',
  component: PdsIconEyeOff,
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

const Template: StoryFn<typeof PdsIconEyeOff> = (args) => (
  <PdsIconEyeOff {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

