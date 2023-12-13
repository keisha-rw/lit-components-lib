import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './info';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Info',
  component: 'pds-icon-info',
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
    html`<pds-icon-info
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-info>`,
} as Meta;

export const Info: StoryObj = {
  name: 'Info',
  args: { size: 'default' },
};
