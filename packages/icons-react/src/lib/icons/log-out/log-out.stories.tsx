import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLogOut } from './log-out';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Log out',
  component: PdsIconLogOut,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
    },
    color: {
      control: 'select',
      options: validIconColors,
    },
    id: {
      table: {
        disable: true,
      },
    },
    slot: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
    },
  },
};

const Template: StoryFn<typeof PdsIconLogOut> = (args) => (
  <PdsIconLogOut {...args} />
);

export const Default = Template.bind({});
Default.args = {};
