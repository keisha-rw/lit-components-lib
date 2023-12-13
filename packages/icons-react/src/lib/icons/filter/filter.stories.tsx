import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconFilter } from './filter';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Filter',
  component: PdsIconFilter,
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

const Template: StoryFn<typeof PdsIconFilter> = (args) => (
  <PdsIconFilter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

