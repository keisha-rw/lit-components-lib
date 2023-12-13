import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMenu } from './menu';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Menu',
  component: PdsIconMenu,
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

const Template: StoryFn<typeof PdsIconMenu> = (args) => (
  <PdsIconMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

