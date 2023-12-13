import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconWrench } from './wrench';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Wrench',
  component: PdsIconWrench,
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

const Template: StoryFn<typeof PdsIconWrench> = (args) => (
  <PdsIconWrench {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

