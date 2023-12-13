import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './copy';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/Copy',
  component: 'pds-icon-copy',
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
    html`<pds-icon-copy
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-copy>`,
} as Meta;

export const Copy: StoryObj = {
  name: 'Copy',
  args: { size: 'default' },
};
