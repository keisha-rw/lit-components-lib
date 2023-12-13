import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './zoom-out';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ZoomOut',
  component: 'pds-icon-zoom-out',
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
    html`<pds-icon-zoom-out
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-zoom-out>`,
} as Meta;

export const ZoomOut: StoryObj = {
  name: 'ZoomOut',
  args: { size: 'default' },
};
