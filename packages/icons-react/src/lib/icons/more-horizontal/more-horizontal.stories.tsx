import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMoreHorizontal } from './more-horizontal';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/MoreHorizontal',
  component: PdsIconMoreHorizontal,
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

const Template: StoryFn<typeof PdsIconMoreHorizontal> = (args) => (
  <PdsIconMoreHorizontal {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};
