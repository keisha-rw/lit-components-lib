import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconArrowDown } from './arrow-down';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ArrowDown',
  component: PdsIconArrowDown,
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

const Template: StoryFn<typeof PdsIconArrowDown> = (args) => (
  <PdsIconArrowDown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

