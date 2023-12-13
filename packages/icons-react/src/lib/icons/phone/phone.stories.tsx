import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPhone } from './phone';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Phone',
  component: PdsIconPhone,
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

const Template: StoryFn<typeof PdsIconPhone> = (args) => (
  <PdsIconPhone {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

