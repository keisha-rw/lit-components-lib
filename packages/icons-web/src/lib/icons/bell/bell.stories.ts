import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './bell';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Bell',
  component: 'pds-icon-bell',
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
    html`<pds-icon-bell
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-bell>`,
} as Meta;

export const Bell: StoryObj = {
  name: 'Bell',
  args: { size: 'default' },
};
