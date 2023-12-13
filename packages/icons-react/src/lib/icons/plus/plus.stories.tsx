import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPlus } from './plus';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Plus',
  component: PdsIconPlus,
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

const Template: StoryFn<typeof PdsIconPlus> = (args) => (
  <PdsIconPlus {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

