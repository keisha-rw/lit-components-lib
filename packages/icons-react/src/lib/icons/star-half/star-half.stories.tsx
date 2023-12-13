import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconStarHalf } from './star-half';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/StarHalf',
  component: PdsIconStarHalf,
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

const Template: StoryFn<typeof PdsIconStarHalf> = (args) => (
  <PdsIconStarHalf {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

