import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconChevronUp } from './chevron-up';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ChevronUp',
  component: PdsIconChevronUp,
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

const Template: StoryFn<typeof PdsIconChevronUp> = (args) => (
  <PdsIconChevronUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

