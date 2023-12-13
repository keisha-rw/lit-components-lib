import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconEdit } from './edit';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Edit',
  component: PdsIconEdit,
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

const Template: StoryFn<typeof PdsIconEdit> = (args) => (
  <PdsIconEdit {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

