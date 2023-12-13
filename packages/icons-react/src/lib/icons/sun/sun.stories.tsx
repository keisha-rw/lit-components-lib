import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconSun } from './sun';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Sun',
  component: PdsIconSun,
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

const Template: StoryFn<typeof PdsIconSun> = (args) => (
  <PdsIconSun {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

