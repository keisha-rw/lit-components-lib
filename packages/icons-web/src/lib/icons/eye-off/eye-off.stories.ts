import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './eye-off';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/EyeOff',
  component: 'pds-icon-eye-off',
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
    html`<pds-icon-eye-off
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-eye-off>`,
} as Meta;

export const EyeOff: StoryObj = {
  name: 'EyeOff',
  args: { size: 'default' },
};
