import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconHeart } from './heart';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Heart',
  component: PdsIconHeart,
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

const Template: StoryFn<typeof PdsIconHeart> = (args) => (
  <PdsIconHeart {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

