import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './check-circle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/CheckCircle',
  component: 'pds-icon-check-circle',
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
    html`<pds-icon-check-circle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-check-circle>`,
} as Meta;

export const CheckCircle: StoryObj = {
  name: 'CheckCircle',
  args: { size: 'default' },
};
