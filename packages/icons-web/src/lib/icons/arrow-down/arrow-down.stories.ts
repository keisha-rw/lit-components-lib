import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './arrow-down';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ArrowDown',
  component: 'pds-icon-arrow-down',
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
    html`<pds-icon-arrow-down
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-arrow-down>`,
} as Meta;

export const ArrowDown: StoryObj = {
  name: 'ArrowDown',
  args: { size: 'default' },
};
