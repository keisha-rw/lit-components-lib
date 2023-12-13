import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconUnlock } from './unlock';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Unlock',
  component: PdsIconUnlock,
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

const Template: StoryFn<typeof PdsIconUnlock> = (args) => (
  <PdsIconUnlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

