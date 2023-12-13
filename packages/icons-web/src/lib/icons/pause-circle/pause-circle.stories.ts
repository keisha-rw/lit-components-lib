import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './pause-circle';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/PauseCircle',
  component: 'pds-icon-pause-circle',
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
    html`<pds-icon-pause-circle
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-pause-circle>`,
} as Meta;

export const PauseCircle: StoryObj = {
  name: 'PauseCircle',
  args: { size: 'default' },
};
