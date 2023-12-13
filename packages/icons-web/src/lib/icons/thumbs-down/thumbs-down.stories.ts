import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './thumbs-down';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ThumbsDown',
  component: 'pds-icon-thumbs-down',
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
    html`<pds-icon-thumbs-down
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-thumbs-down>`,
} as Meta;

export const ThumbsDown: StoryObj = {
  name: 'ThumbsDown',
  args: { size: 'default' },
};
