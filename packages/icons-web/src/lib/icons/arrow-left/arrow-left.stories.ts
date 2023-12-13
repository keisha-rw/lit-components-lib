import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './arrow-left';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ArrowLeft',
  component: 'pds-icon-arrow-left',
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
    html`<pds-icon-arrow-left
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-arrow-left>`,
} as Meta;

export const ArrowLeft: StoryObj = {
  name: 'ArrowLeft',
  args: { size: 'default' },
};
