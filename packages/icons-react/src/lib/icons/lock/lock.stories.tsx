import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLock } from './lock';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Lock',
  component: PdsIconLock,
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

const Template: StoryFn<typeof PdsIconLock> = (args) => (
  <PdsIconLock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

