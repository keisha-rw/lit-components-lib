import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './pin';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Pin',
  component: 'pds-icon-pin',
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
    html`<pds-icon-pin
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-pin>`,
} as Meta;

export const Pin: StoryObj = {
  name: 'Pin',
  args: { size: 'default' },
};
