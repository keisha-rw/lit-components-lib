import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './arrow-up';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ArrowUp',
  component: 'pds-icon-arrow-up',
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
    html`<pds-icon-arrow-up
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-arrow-up>`,
} as Meta;

export const ArrowUp: StoryObj = {
  name: 'ArrowUp',
  args: { size: 'default' },
};
