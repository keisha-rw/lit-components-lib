import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './sprout';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Sprout',
  component: 'pds-icon-sprout',
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
    html`<pds-icon-sprout
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-sprout>`,
} as Meta;

export const Sprout: StoryObj = {
  name: 'Sprout',
  args: { size: 'default' },
};
