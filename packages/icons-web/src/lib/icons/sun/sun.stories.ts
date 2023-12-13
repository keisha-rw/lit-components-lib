import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './sun';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Sun',
  component: 'pds-icon-sun',
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
    html`<pds-icon-sun
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-sun>`,
} as Meta;

export const Sun: StoryObj = {
  name: 'Sun',
  args: { size: 'default' },
};
