import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './phone';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Phone',
  component: 'pds-icon-phone',
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
    html`<pds-icon-phone
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-phone>`,
} as Meta;

export const Phone: StoryObj = {
  name: 'Phone',
  args: { size: 'default' },
};
