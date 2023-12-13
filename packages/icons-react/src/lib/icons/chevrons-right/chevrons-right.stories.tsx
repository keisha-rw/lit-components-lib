import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconChevronsRight } from './chevrons-right';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ChevronsRight',
  component: PdsIconChevronsRight,
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

const Template: StoryFn<typeof PdsIconChevronsRight> = (args) => (
  <PdsIconChevronsRight {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

