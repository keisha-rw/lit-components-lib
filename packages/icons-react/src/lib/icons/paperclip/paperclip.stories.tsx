import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconPaperclip } from './paperclip';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Paperclip',
  component: PdsIconPaperclip,
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

const Template: StoryFn<typeof PdsIconPaperclip> = (args) => (
  <PdsIconPaperclip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

