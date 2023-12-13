import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './message-square';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/MessageSquare',
  component: 'pds-icon-message-square',
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
    html`<pds-icon-message-square
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-message-square>`,
} as Meta;

export const MessageSquare: StoryObj = {
  name: 'MessageSquare',
  args: { size: 'default' },
};
