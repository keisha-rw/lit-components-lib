import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './shield-check';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ShieldCheck',
  component: 'pds-icon-shield-check',
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
    html`<pds-icon-shield-check
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-shield-check>`,
} as Meta;

export const ShieldCheck: StoryObj = {
  name: 'ShieldCheck',
  args: { size: 'default' },
};
