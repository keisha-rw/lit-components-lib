import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './trash';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Trash',
  component: 'pds-icon-trash',
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
    html`<pds-icon-trash
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-trash>`,
} as Meta;

export const Trash: StoryObj = {
  name: 'Trash',
  args: { size: 'default' },
};
