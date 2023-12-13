import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './eye';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Eye',
  component: 'pds-icon-eye',
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
    html`<pds-icon-eye
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-eye>`,
} as Meta;

export const Eye: StoryObj = {
  name: 'Eye',
  args: { size: 'default' },
};
