import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconExternalLink } from './external-link';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/ExternalLink',
  component: PdsIconExternalLink,
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

const Template: StoryFn<typeof PdsIconExternalLink> = (args) => (
  <PdsIconExternalLink {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

