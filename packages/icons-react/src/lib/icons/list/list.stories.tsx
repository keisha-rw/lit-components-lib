import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconList } from './list';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/List',
  component: PdsIconList,
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

const Template: StoryFn<typeof PdsIconList> = (args) => (
  <PdsIconList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

