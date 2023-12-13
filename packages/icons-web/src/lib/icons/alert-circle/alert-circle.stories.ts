import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './alert-circle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/AlertCircle',
  component: 'pds-icon-alert-circle',
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
    html`<pds-icon-alert-circle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-alert-circle>`,
} as Meta;

export const AlertCircle: StoryObj = {
  name: 'AlertCircle',
  args: { size: 'default' },
};
