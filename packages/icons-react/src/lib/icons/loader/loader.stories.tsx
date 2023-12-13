import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLoader } from './loader';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Loader',
  component: PdsIconLoader,
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

const Template: StoryFn<typeof PdsIconLoader> = (args) => (
  <PdsIconLoader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

