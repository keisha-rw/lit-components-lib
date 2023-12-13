import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconShield } from './shield';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/Shield',
  component: PdsIconShield,
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

const Template: StoryFn<typeof PdsIconShield> = (args) => (
  <PdsIconShield {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

