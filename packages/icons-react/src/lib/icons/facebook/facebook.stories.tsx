import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconFacebook } from './facebook';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Facebook',
  component: PdsIconFacebook,
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

const Template: StoryFn<typeof PdsIconFacebook> = (args) => (
  <PdsIconFacebook {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

