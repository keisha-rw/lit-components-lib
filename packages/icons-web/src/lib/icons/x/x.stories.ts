import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './x';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/X',
  component: 'pds-icon-x',
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
    html`<pds-icon-x size=${args['size']} color=${args['color']}></pds-icon-x>`,
} as Meta;

export const X: StoryObj = {
  name: 'X',
  args: { size: 'default' },
};
