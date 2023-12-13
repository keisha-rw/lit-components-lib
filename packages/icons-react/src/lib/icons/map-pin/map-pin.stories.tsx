import React from 'react';
import { StoryFn } from '@storybook/react';
import { PdsIconMapPin } from './map-pin';
import { validIconColors } from '../../../utils/icon-utilities';

export default {
  title: 'Icons/MapPin',
  component: PdsIconMapPin,
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

const Template: StoryFn<typeof PdsIconMapPin> = (args) => (
  <PdsIconMapPin {...args} />
);

export const Default = Template.bind({});
Default.args = {
  size: 'default',
};

