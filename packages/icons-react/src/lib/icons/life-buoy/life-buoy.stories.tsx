import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLifeBuoy } from './life-buoy';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Life buoy',
  component: PdsIconLifeBuoy,
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

const Template: StoryFn<typeof PdsIconLifeBuoy> = (args) => (
  <PdsIconLifeBuoy {...args} />
);

export const Default = Template.bind({});
Default.args = {};
