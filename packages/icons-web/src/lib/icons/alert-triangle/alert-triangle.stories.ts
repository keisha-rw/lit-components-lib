import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './alert-triangle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/AlertTriangle',
  component: 'pds-icon-alert-triangle',
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
    html`<pds-icon-alert-triangle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-alert-triangle>`,
} as Meta;

export const AlertTriangle: StoryObj = {
  name: 'AlertTriangle',
  args: { size: 'default' },
};
