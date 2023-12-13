import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './lightbulb';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Lightbulb',
  component: 'pds-icon-lightbulb',
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
    html`<pds-icon-lightbulb
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-lightbulb>`,
} as Meta;

export const Lightbulb: StoryObj = {
  name: 'Lightbulb',
  args: { size: 'default' },
};
