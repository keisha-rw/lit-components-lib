import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './globe';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Globe',
  component: 'pds-icon-globe',
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
    html`<pds-icon-globe
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-globe>`,
} as Meta;

export const Globe: StoryObj = {
  name: 'Globe',
  args: { size: 'default' },
};
