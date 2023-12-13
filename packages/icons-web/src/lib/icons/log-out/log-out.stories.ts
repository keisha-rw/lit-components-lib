import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './log-out';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Log out',
  component: 'pds-icon-log-out',
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
    html`<pds-icon-log-out
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-log-out>`,
} as Meta;

export const LogOut: StoryObj = {
  name: 'LogOut',
  args: { size: 'default' },
};
