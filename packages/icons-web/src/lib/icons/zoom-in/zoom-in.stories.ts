import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './zoom-in';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ZoomIn',
  component: 'pds-icon-zoom-in',
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
    html`<pds-icon-zoom-in
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-zoom-in>`,
} as Meta;

export const ZoomIn: StoryObj = {
  name: 'ZoomIn',
  args: { size: 'default' },
};
