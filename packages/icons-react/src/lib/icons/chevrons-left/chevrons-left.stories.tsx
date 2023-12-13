import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconChevronsLeft } from './chevrons-left';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ChevronsLeft',
  component: PdsIconChevronsLeft,
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

const Template: StoryFn<typeof PdsIconChevronsLeft> = (args) => (
  <PdsIconChevronsLeft {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

