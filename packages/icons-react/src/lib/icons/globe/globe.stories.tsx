import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconGlobe } from './globe';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Globe',
  component: PdsIconGlobe,
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

const Template: StoryFn<typeof PdsIconGlobe> = (args) => (
  <PdsIconGlobe {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

