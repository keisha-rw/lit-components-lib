import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconChevronRight } from './chevron-right';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ChevronRight',
  component: PdsIconChevronRight,
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

const Template: StoryFn<typeof PdsIconChevronRight> = (args) => (
  <PdsIconChevronRight {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

