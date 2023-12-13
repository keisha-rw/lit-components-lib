import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconZoomOut } from './zoom-out';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ZoomOut',
  component: PdsIconZoomOut,
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

const Template: StoryFn<typeof PdsIconZoomOut> = (args) => (
  <PdsIconZoomOut {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

