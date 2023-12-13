import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconFile } from './file';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/File',
  component: PdsIconFile,
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

const Template: StoryFn<typeof PdsIconFile> = (args) => (
  <PdsIconFile {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

