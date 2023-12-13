import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './edit';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Edit',
  component: 'pds-icon-edit',
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
    html`<pds-icon-edit
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-edit>`,
} as Meta;

export const Edit: StoryObj = {
  name: 'Edit',
  args: { size: 'default' },
};
