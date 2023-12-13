import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './calculator';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Calculator',
  component: 'pds-icon-calculator',
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
    html`<pds-icon-calculator
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-calculator>`,
} as Meta;

export const Calculator: StoryObj = {
  name: 'Calculator',
  args: { size: 'default' },
};
