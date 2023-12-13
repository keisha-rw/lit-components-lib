import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './heart';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Heart',
  component: 'pds-icon-heart',
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
    html`<pds-icon-heart
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-heart>`,
} as Meta;

export const Heart: StoryObj = {
  name: 'Heart',
  args: { size: 'default' },
};
