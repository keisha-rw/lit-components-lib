import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './unlock';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Unlock',
  component: 'pds-icon-unlock',
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
    html`<pds-icon-unlock
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-unlock>`,
} as Meta;

export const Unlock: StoryObj = {
  name: 'Unlock',
  args: { size: 'default' },
};
