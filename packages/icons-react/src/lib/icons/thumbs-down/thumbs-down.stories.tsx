import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconThumbsDown } from './thumbs-down';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ThumbsDown',
  component: PdsIconThumbsDown,
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

const Template: StoryFn<typeof PdsIconThumbsDown> = (args) => (
  <PdsIconThumbsDown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

