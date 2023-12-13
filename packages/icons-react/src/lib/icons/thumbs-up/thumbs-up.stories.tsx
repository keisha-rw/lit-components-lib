import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconThumbsUp } from './thumbs-up';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ThumbsUp',
  component: PdsIconThumbsUp,
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

const Template: StoryFn<typeof PdsIconThumbsUp> = (args) => (
  <PdsIconThumbsUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

