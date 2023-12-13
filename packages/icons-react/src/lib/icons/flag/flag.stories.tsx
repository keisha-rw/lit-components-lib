import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconFlag } from './flag';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Flag',
  component: PdsIconFlag,
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

const Template: StoryFn<typeof PdsIconFlag> = (args) => (
  <PdsIconFlag {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

