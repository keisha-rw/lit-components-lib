import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconArrowLeft } from './arrow-left';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ArrowLeft',
  component: PdsIconArrowLeft,
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

const Template: StoryFn<typeof PdsIconArrowLeft> = (args) => (
  <PdsIconArrowLeft {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

