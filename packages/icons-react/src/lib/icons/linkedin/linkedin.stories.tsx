import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLinkedin } from './linkedin';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Linkedin',
  component: PdsIconLinkedin,
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

const Template: StoryFn<typeof PdsIconLinkedin> = (args) => (
  <PdsIconLinkedin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

