import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './clock';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Clock',
  component: 'pds-icon-clock',
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
    html`<pds-icon-clock
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-clock>`,
} as Meta;

export const Clock: StoryObj = {
  name: 'Clock',
  args: { size: 'default' },
};
