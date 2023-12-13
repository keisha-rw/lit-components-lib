import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevron-left';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronLeft',
  component: 'pds-icon-chevron-left',
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
    html`<pds-icon-chevron-left
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevron-left>`,
} as Meta;

export const ChevronLeft: StoryObj = {
  name: 'ChevronLeft',
  args: { size: 'default' },
};
