import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconEye } from './eye';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Eye',
  component: PdsIconEye,
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

const Template: StoryFn<typeof PdsIconEye> = (args) => (
  <PdsIconEye {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

