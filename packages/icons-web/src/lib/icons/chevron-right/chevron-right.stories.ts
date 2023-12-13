import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './chevron-right';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ChevronRight',
  component: 'pds-icon-chevron-right',
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
    html`<pds-icon-chevron-right
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-chevron-right>`,
} as Meta;

export const ChevronRight: StoryObj = {
  name: 'ChevronRight',
  args: { size: 'default' },
};
