import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevrons-left';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronsLeft',
  component: 'pds-icon-chevrons-left',
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
    html`<pds-icon-chevrons-left
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevrons-left>`,
} as Meta;

export const ChevronsLeft: StoryObj = {
  name: 'ChevronsLeft',
  args: { size: 'default' },
};
