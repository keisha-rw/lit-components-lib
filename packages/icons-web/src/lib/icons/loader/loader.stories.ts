import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './loader';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Loader',
  component: 'pds-icon-loader',
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
    html`<pds-icon-loader
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-loader>`,
} as Meta;

export const Loader: StoryObj = {
  name: 'Loader',
  args: { size: 'default' },
};
