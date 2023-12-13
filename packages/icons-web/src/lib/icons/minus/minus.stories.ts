import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './minus';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Minus',
  component: 'pds-icon-minus',
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
    html`<pds-icon-minus
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-minus>`,
} as Meta;

export const Minus: StoryObj = {
  name: 'Minus',
  args: { size: 'default' },
};
