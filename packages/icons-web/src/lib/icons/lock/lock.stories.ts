import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './lock';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Lock',
  component: 'pds-icon-lock',
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
    html`<pds-icon-lock
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-lock>`,
} as Meta;

export const Lock: StoryObj = {
  name: 'Lock',
  args: { size: 'default' },
};
