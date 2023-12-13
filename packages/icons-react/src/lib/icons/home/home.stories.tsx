import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconHome } from './home';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Home',
  component: PdsIconHome,
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

const Template: StoryFn<typeof PdsIconHome> = (args) => (
  <PdsIconHome {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

