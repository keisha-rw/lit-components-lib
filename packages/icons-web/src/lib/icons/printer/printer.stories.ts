import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './printer';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Printer',
  component: 'pds-icon-printer',
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
    html`<pds-icon-printer
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-printer>`,
} as Meta;

export const Printer: StoryObj = {
  name: 'Printer',
  args: { size: 'default' },
};
