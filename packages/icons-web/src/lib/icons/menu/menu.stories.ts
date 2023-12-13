import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './menu';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Menu',
  component: 'pds-icon-menu',
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
    html`<pds-icon-menu
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-menu>`,
} as Meta;

export const Menu: StoryObj = {
  name: 'Menu',
  args: { size: 'default' },
};
