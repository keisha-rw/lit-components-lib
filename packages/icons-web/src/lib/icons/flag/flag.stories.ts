import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './flag';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Flag',
  component: 'pds-icon-flag',
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
    html`<pds-icon-flag
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-flag>`,
} as Meta;

export const Flag: StoryObj = {
  name: 'Flag',
  args: { size: 'default' },
};
