import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './arrow-right';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ArrowRight',
  component: 'pds-icon-arrow-right',
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
    html`<pds-icon-arrow-right
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-arrow-right>`,
} as Meta;

export const ArrowRight: StoryObj = {
  name: 'ArrowRight',
  args: { size: 'default' },
};
