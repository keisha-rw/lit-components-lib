import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconX } from './x';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/X',
  component: PdsIconX,
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

const Template: StoryFn<typeof PdsIconX> = (args) => (
  <PdsIconX {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

