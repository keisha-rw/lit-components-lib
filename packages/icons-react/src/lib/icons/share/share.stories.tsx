import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconShare } from './share';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Share',
  component: PdsIconShare,
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

const Template: StoryFn<typeof PdsIconShare> = (args) => (
  <PdsIconShare {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

