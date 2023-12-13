import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconDownload } from './download';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Download',
  component: PdsIconDownload,
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

const Template: StoryFn<typeof PdsIconDownload> = (args) => (
  <PdsIconDownload {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

