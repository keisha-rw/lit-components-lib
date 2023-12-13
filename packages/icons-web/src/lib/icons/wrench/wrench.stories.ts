import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './wrench';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Wrench',
  component: 'pds-icon-wrench',
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
    html`<pds-icon-wrench
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-wrench>`,
} as Meta;

export const Wrench: StoryObj = {
  name: 'Wrench',
  args: { size: 'default' },
};
