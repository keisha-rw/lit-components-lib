import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconCopy } from './copy';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Copy',
  component: PdsIconCopy,
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

const Template: StoryFn<typeof PdsIconCopy> = (args) => (
  <PdsIconCopy {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

