import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconUpload } from './upload';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Upload',
  component: PdsIconUpload,
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

const Template: StoryFn<typeof PdsIconUpload> = (args) => (
  <PdsIconUpload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

