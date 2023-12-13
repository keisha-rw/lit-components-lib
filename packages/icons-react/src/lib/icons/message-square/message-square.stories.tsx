import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMessageSquare } from './message-square';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/MessageSquare',
  component: PdsIconMessageSquare,
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

const Template: StoryFn<typeof PdsIconMessageSquare> = (args) => (
  <PdsIconMessageSquare {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

