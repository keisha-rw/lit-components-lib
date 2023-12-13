import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconImage } from './image';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Custom/Image',
  component: PdsIconImage,
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

const Template: StoryFn<typeof PdsIconImage> = (args) => (
  <PdsIconImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

