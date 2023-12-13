import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconInfo } from './info';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Info',
  component: PdsIconInfo,
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

const Template: StoryFn<typeof PdsIconInfo> = (args) => (
  <PdsIconInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

