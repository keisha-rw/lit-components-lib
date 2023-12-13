import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconDollarSign } from './dollar-sign';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/DollarSign',
  component: PdsIconDollarSign,
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

const Template: StoryFn<typeof PdsIconDollarSign> = (args) => (
  <PdsIconDollarSign {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

