import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconShieldCheck } from './shield-check';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ShieldCheck',
  component: PdsIconShieldCheck,
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

const Template: StoryFn<typeof PdsIconShieldCheck> = (args) => (
  <PdsIconShieldCheck {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

