import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconInstagram } from './instagram';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Instagram',
  component: PdsIconInstagram,
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

const Template: StoryFn<typeof PdsIconInstagram> = (args) => (
  <PdsIconInstagram {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

