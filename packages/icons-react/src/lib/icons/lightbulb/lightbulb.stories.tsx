import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconLightbulb } from './lightbulb';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Lightbulb',
  component: PdsIconLightbulb,
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

const Template: StoryFn<typeof PdsIconLightbulb> = (args) => (
  <PdsIconLightbulb {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

