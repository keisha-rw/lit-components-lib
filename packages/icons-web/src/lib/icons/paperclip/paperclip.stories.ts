import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './paperclip';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Paperclip',
  component: 'pds-icon-paperclip',
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
    html`<pds-icon-paperclip
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-paperclip>`,
} as Meta;

export const Paperclip: StoryObj = {
  name: 'Paperclip',
  args: { size: 'default' },
};
