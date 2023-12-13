import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconStarFull } from './star-full';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/StarFull',
  component: PdsIconStarFull,
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

const Template: StoryFn<typeof PdsIconStarFull> = (args) => (
  <PdsIconStarFull {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

