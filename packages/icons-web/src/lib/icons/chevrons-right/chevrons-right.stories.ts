import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevrons-right';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronsRight',
  component: 'pds-icon-chevrons-right',
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
    html`<pds-icon-chevrons-right
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevrons-right>`,
} as Meta;

export const ChevronsRight: StoryObj = {
  name: 'ChevronsRight',
  args: { size: 'default' },
};
