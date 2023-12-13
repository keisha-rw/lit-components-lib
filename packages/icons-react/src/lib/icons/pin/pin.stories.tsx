import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPin } from './pin';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Pin',
  component: PdsIconPin,
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

const Template: StoryFn<typeof PdsIconPin> = (args) => (
  <PdsIconPin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

