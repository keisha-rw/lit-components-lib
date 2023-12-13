import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconZoomIn } from './zoom-in';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ZoomIn',
  component: PdsIconZoomIn,
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

const Template: StoryFn<typeof PdsIconZoomIn> = (args) => (
  <PdsIconZoomIn {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

