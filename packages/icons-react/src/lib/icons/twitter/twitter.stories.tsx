import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconTwitter } from './twitter';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Twitter',
  component: PdsIconTwitter,
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

const Template: StoryFn<typeof PdsIconTwitter> = (args) => (
  <PdsIconTwitter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

