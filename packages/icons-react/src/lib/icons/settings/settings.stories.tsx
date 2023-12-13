import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconSettings } from './settings';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Settings',
  component: PdsIconSettings,
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

const Template: StoryFn<typeof PdsIconSettings> = (args) => (
  <PdsIconSettings {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

