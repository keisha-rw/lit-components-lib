import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './users';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Users',
  component: 'pds-icon-users',
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
    html`<pds-icon-users
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-users>`,
} as Meta;

export const Users: StoryObj = {
  name: 'Users',
  args: { size: 'default' },
};
