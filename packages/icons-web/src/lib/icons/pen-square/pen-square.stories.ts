import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './pen-square';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/PenSquare',
  component: 'pds-icon-pen-square',
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
    html`<pds-icon-pen-square
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-pen-square>`,
} as Meta;

export const PenSquare: StoryObj = {
  name: 'PenSquare',
  args: { size: 'default' },
};
