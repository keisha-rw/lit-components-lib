import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconSprout } from './sprout';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Sprout',
  component: PdsIconSprout,
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

const Template: StoryFn<typeof PdsIconSprout> = (args) => (
  <PdsIconSprout {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

