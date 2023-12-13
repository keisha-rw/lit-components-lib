import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './plus';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Plus',
  component: 'pds-icon-plus',
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
    html`<pds-icon-plus
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-plus>`,
} as Meta;

export const Plus: StoryObj = {
  name: 'Plus',
  args: { size: 'default' },
};
