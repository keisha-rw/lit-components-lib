import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './dollar-sign';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/DollarSign',
  component: 'pds-icon-dollar-sign',
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
    html`<pds-icon-dollar-sign
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-dollar-sign>`,
} as Meta;

export const DollarSign: StoryObj = {
  name: 'DollarSign',
  args: { size: 'default' },
};
