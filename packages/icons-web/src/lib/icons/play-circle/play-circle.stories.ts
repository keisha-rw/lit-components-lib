import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './play-circle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/PlayCircle',
  component: 'pds-icon-play-circle',
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
    html`<pds-icon-play-circle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-play-circle>`,
} as Meta;

export const PlayCircle: StoryObj = {
  name: 'PlayCircle',
  args: { size: 'default' },
};
