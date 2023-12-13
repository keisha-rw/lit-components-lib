import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPlayCircle } from './play-circle';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/PlayCircle',
  component: PdsIconPlayCircle,
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

const Template: StoryFn<typeof PdsIconPlayCircle> = (args) => (
  <PdsIconPlayCircle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

