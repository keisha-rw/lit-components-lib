import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconBell } from './bell';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Bell',
  component: PdsIconBell,
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

const Template: StoryFn<typeof PdsIconBell> = (args) => (
  <PdsIconBell {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

