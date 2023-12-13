import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconTrash } from './trash';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Trash',
  component: PdsIconTrash,
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

const Template: StoryFn<typeof PdsIconTrash> = (args) => (
  <PdsIconTrash {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

