import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconUmbrella } from './umbrella';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Umbrella',
  component: PdsIconUmbrella,
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

const Template: StoryFn<typeof PdsIconUmbrella> = (args) => (
  <PdsIconUmbrella {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

