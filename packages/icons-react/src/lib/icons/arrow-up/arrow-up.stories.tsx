import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconArrowUp } from './arrow-up';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ArrowUp',
  component: PdsIconArrowUp,
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

const Template: StoryFn<typeof PdsIconArrowUp> = (args) => (
  <PdsIconArrowUp {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

