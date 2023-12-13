import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './thumbs-up';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/ThumbsUp',
  component: 'pds-icon-thumbs-up',
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
    html`<pds-icon-thumbs-up
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-thumbs-up>`,
} as Meta;

export const ThumbsUp: StoryObj = {
  name: 'ThumbsUp',
  args: { size: 'default' },
};
