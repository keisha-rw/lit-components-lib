import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconCheckCircle } from './check-circle';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/CheckCircle',
  component: PdsIconCheckCircle,
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

const Template: StoryFn<typeof PdsIconCheckCircle> = (args) => (
  <PdsIconCheckCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

