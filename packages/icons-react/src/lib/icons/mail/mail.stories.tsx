import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMail } from './mail';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Mail',
  component: PdsIconMail,
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

const Template: StoryFn<typeof PdsIconMail> = (args) => (
  <PdsIconMail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

