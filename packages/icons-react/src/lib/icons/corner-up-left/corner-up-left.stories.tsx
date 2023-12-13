import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconCornerUpLeft } from './corner-up-left';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/CornerUpLeft',
  component: PdsIconCornerUpLeft,
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

const Template: StoryFn<typeof PdsIconCornerUpLeft> = (args) => (
  <PdsIconCornerUpLeft {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

