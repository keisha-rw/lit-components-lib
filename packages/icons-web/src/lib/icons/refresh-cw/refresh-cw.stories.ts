import { html } from 'lit';
import { Meta, StoryObj } from '@storybook/web-components';
import './refresh-cw';
import { validIconColors, iconSizes } from '../PdsIcon';

export default {
  title: 'Icons/RefreshCw',
  component: 'pds-icon-refresh-cw',
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
    html`<pds-icon-refresh-cw
      size=${args['size']}
      color=${args['color']}
    ></pds-icon-refresh-cw>`,
} as Meta;

export const RefreshCw: StoryObj = {
  name: 'RefreshCw',
  args: { size: 'default' },
};
