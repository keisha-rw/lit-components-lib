import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './umbrella';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Umbrella',
  component: 'pds-icon-umbrella',
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
    html`<pds-icon-umbrella
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-umbrella>`,
} as Meta;

export const Umbrella: StoryObj = {
  name: 'Umbrella',
  args: { size: 'default' },
};
