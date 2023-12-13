import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconStar } from './star';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Star',
  component: PdsIconStar,
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

const Template: StoryFn<typeof PdsIconStar> = (args) => (
  <PdsIconStar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

