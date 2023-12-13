import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMinus } from './minus';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Minus',
  component: PdsIconMinus,
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

const Template: StoryFn<typeof PdsIconMinus> = (args) => (
  <PdsIconMinus {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

