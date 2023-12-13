import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconUser } from './user';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/User',
  component: PdsIconUser,
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

const Template: StoryFn<typeof PdsIconUser> = (args) => (
  <PdsIconUser {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

