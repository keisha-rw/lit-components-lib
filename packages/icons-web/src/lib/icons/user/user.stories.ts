import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './user';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/User',
  component: 'pds-icon-user',
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: iconSizes,
    },
    color: {
      control: 'select',
      options: validIconColors,
    },
  },
  render: (args) =>
    html`<pds-icon-user
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-user>`,
} as Meta;

export const User: StoryObj = {
  name: 'User',
  args: { size: 'default' },
};
