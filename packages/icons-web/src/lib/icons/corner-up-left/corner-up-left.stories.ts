import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './corner-up-left';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/CornerUpLeft',
  component: 'pds-icon-corner-up-left',
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
    html`<pds-icon-corner-up-left
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-corner-up-left>`,
} as Meta;

export const CornerUpLeft: StoryObj = {
  name: 'CornerUpLeft',
  args: { size: 'default' },
};
