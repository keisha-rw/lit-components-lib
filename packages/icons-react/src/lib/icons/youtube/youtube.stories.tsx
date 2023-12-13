import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconYoutube } from './youtube';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Youtube',
  component: PdsIconYoutube,
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

const Template: StoryFn<typeof PdsIconYoutube> = (args) => (
  <PdsIconYoutube {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

