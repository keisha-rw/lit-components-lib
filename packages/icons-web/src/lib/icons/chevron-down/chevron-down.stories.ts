import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevron-down';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronDown',
  component: 'pds-icon-chevron-down',
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
    html`<pds-icon-chevron-down
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevron-down>`,
} as Meta;

export const ChevronDown: StoryObj = {
  name: 'ChevronDown',
  args: { size: 'default' },
};
