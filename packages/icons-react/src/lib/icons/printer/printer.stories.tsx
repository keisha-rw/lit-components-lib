import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPrinter } from './printer';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Printer',
  component: PdsIconPrinter,
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

const Template: StoryFn<typeof PdsIconPrinter> = (args) => (
  <PdsIconPrinter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

